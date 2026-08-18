const { MercadoPagoConfig, Payment } = require("mercadopago");
const db = require("../config/database");
const util = require("util");

const query = util.promisify(db.query).bind(db);

const clientPlataforma = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN
});

const TAXA_PLATAFORMA = Number(process.env.MP_TAXA_PERCENTUAL || 10) / 100;
const NOTIFICATION_URL = "https://pedido-certo-production.up.railway.app/api/pagamento/webhook";

exports.criarPix = async (req, res) => {
    const { total, valorPix, valorDinheiro, nomeCliente, email, dadosPedido } = req.body;

    try {
        const valorPixCobranca = valorPix ? Number(valorPix) : Number(total);
        const valorRestanteDinheiro = valorDinheiro ? Number(valorDinheiro) : 0;

        // 1. Salva o pedido inicialmente como 'Aguardando Pagamento'
        const sqlPedido = `
            INSERT INTO pedidos 
            (loja, nome_cliente, endereco, telefone, pagamento, total, valor_pix, valor_dinheiro, troco_para, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'Aguardando Pagamento')
        `;
        const resultPedido = await query(sqlPedido, [
            dadosPedido.loja,
            dadosPedido.nome_cliente,
            dadosPedido.endereco,
            dadosPedido.telefone || "",
            dadosPedido.pagamento || "Pix",
            dadosPedido.total,
            valorPixCobranca,
            valorRestanteDinheiro,
            dadosPedido.troco_para || null
        ]);
        const pedidoId = resultPedido.insertId;

        // 2. Salva os itens do pedido
        if (dadosPedido.itens && dadosPedido.itens.length > 0) {
            const sqlItens = `
                INSERT INTO itens_pedido 
                (pedido_id, nome_produto, quantidade, preco, tamanho, sabores, borda, adicionais, marca)
                VALUES ?
            `;
            const valores = dadosPedido.itens.map(item => [
                pedidoId,
                item.nome_produto,
                item.quantidade,
                item.preco,
                item.tamanho || null,
                item.sabores || null,
                item.borda || null,
                item.adicionais || null,
                item.marca || null
            ]);
            await query(sqlItens, [valores]);
        }

        // 3. Verifica se o lojista tem o Mercado Pago conectado
        const lojistas = await query(
            "SELECT mp_access_token FROM usuarios WHERE loja = ?",
            [dadosPedido.loja]
        );
        const lojista = lojistas[0];
        const usaSplit = !!(lojista && lojista.mp_access_token);

        const clientPagamento = usaSplit
            ? new MercadoPagoConfig({ accessToken: lojista.mp_access_token })
            : clientPlataforma;

        // 🎯 QR Code gerado SOMENTE para o valor da parcela PIX escolhida pelo cliente!
        const corpoPagamento = {
            transaction_amount: Number(valorPixCobranca.toFixed(2)),
            description: `Pedido #${pedidoId} (${dadosPedido.pagamento}) - Pedido Certo`,
            payment_method_id: "pix",
            payer: {
                email: email || "cliente@pedidocerto.com",
                first_name: nomeCliente || "Cliente"
            },
            notification_url: NOTIFICATION_URL
        };

        if (usaSplit) {
            const taxaCalculada = Number((valorPixCobranca * TAXA_PLATAFORMA).toFixed(2));
            if (taxaCalculada > 0) {
                corpoPagamento.application_fee = taxaCalculada;
            }
        }

        try {
            const payment = new Payment(clientPagamento);
            const resultado = await payment.create({ body: corpoPagamento });

            await query(
                "UPDATE pedidos SET mp_payment_id = ? WHERE id = ?",
                [String(resultado.id), pedidoId]
            );

            res.json({
                sucesso: true,
                pedidoId,
                pagamentoId: resultado.id,
                valorPix: valorPixCobranca,
                valorDinheiro: valorRestanteDinheiro,
                qrCode: resultado.point_of_interaction.transaction_data.qr_code,
                qrCodeBase64: resultado.point_of_interaction.transaction_data.qr_code_base64,
                repasseAutomatico: usaSplit
            });

        } catch (errMP) {
            console.error("Erro no Mercado Pago:", errMP);
            res.status(500).json({ sucesso: false, erro: errMP.message });
        }

    } catch (err) {
        console.error("Erro interno:", err);
        res.status(500).json({ sucesso: false, erro: err.message });
    }
};

exports.webhook = async (req, res) => {
    const { type, data } = req.body;

    if (type === "payment") {
        const pagamentoId = String(data.id);

        try {
            const pedidos = await query(
                `SELECT p.id AS pedido_id, p.loja, p.pagamento, p.valor_pix, p.valor_dinheiro, u.mp_access_token
                 FROM pedidos p
                 LEFT JOIN usuarios u ON u.loja = p.loja
                 WHERE p.mp_payment_id = ?`,
                [pagamentoId]
            );
            const pedido = pedidos[0];

            const clientConsulta = (pedido && pedido.mp_access_token)
                ? new MercadoPagoConfig({ accessToken: pedido.mp_access_token })
                : clientPlataforma;

            const payment = new Payment(clientConsulta);
            const pagamento = await payment.get({ id: pagamentoId });

            if (pagamento.status === "approved") {
                let pedidoId = pedido ? pedido.pedido_id : null;

                if (!pedidoId) {
                    const match = pagamento.description && pagamento.description.match(/Pedido #(\d+)/);
                    if (match) pedidoId = match[1];
                }

                if (pedidoId) {
                    // Altera de 'Aguardando Pagamento' para 'Em preparo' liberando o pedido no painel da loja
                    await query(
                        "UPDATE pedidos SET status = 'Em preparo' WHERE id = ?",
                        [pedidoId]
                    );
                    console.log(`✅ Webhook: Pedido #${pedidoId} PIX Confirmado! Liberado para o painel.`);
                }
            }
        } catch (err) {
            console.error("Erro no webhook:", err);
        }
    }

    res.sendStatus(200);
};