const API = "https://pedido-certo-production.up.railway.app";

let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado")) || null;
let pedidosAnteriores = [];
let filtroAtual = "todos";
let intervaloPainel = null;

const telaLogin = document.getElementById("telaLogin");
const telaPainel = document.getElementById("telaPainel");
const nomeLoja = document.getElementById("nomeLoja");
const listaPedidos = document.getElementById("listaPedidos");
const erroLogin = document.getElementById("erroLogin");
const contadorNovos = document.getElementById("contadorNovos");
const som = document.getElementById("somNovoPedido");

// 🟢 VERIFICA SE O USUÁRIO JÁ ESTÁ LOGADO AO CARREGAR A PÁGINA (F5 OU ACESSO DIRETO)
document.addEventListener("DOMContentLoaded", () => {
    // Checa se veio o parâmetro ?conectado=true do redirect do Mercado Pago
    const params = new URLSearchParams(window.location.search);
    if (params.get("conectado") === "true") {
        alert(" Mercado Pago conectado com sucesso!");
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    if (usuarioLogado) {
        iniciarPainel();
    }
});

function iniciarPainel() {
    if (!usuarioLogado) return;

    if (telaLogin) telaLogin.style.display = "none";
    if (telaPainel) telaPainel.style.display = "block";
    if (nomeLoja) nomeLoja.textContent = usuarioLogado.loja;

    atualizarStatusBotaoMP(usuarioLogado);

    carregarPedidos();
    if (intervaloPainel) clearInterval(intervaloPainel);
    intervaloPainel = setInterval(carregarPedidos, 15000);
}

// 💳 RENDERIZA O BOTÃO "CONECTAR MERCADO PAGO" OU O SELO "CONECTADO ✅"
function atualizarStatusBotaoMP(usuario) {
    const containerHeader = document.querySelector(".header-linha-topo") || document.querySelector(".header-painel");
    if (!containerHeader) return;

    const btnAntigo = document.getElementById("btnConectarMP");
    if (btnAntigo) btnAntigo.remove();

    const btnMP = document.createElement("button");
    btnMP.id = "btnConectarMP";

    if (usuario.mp_conectado) {
        btnMP.textContent = " Mercado Pago Conectado";
        btnMP.style.cssText = `
            background: #2e9e4f; color: #ffffff; border: none;
            padding: 6px 14px; border-radius: 8px;
            font-size: 13px; font-weight: bold; cursor: default; margin-left: 10px;
        `;
    } else {
        btnMP.textContent = "💳 Conectar Mercado Pago";
        btnMP.style.cssText = `
            background: #ffffff; color: #c40000; border: 2px solid #c40000;
            padding: 6px 14px; border-radius: 8px;
            font-size: 13px; font-weight: bold; cursor: pointer; margin-left: 10px;
            transition: 0.2s;
        `;
        btnMP.addEventListener("click", async () => {
            try {
                const res = await fetch(`${API}/api/usuarios/oauth/url?lojaId=${usuario.id}`);
                const dados = await res.json();
                if (dados.sucesso) window.open(dados.url, "_blank");
                else alert("Erro ao obter URL do Mercado Pago.");
            } catch (err) {
                alert("Erro ao conectar ao servidor.");
            }
        });
    }

    containerHeader.appendChild(btnMP);
}

// 🔐 LOGIN DO LOJISTA
document.getElementById("btnLogin").addEventListener("click", async () => {
    const email = document.getElementById("emailLogin").value.trim();
    const senha = document.getElementById("senhaLogin").value.trim();

    if (!email || !senha) {
        erroLogin.textContent = "Preencha email e senha.";
        return;
    }

    try {
        const res = await fetch(`${API}/api/usuarios/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, senha })
        });

        const dados = await res.json();

        if (!dados.sucesso) {
            erroLogin.textContent = dados.mensagem;
            return;
        }

        usuarioLogado = dados.usuario;
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));

        iniciarPainel();

    } catch (err) {
        erroLogin.textContent = "Erro ao conectar ao servidor.";
    }
});

// 🚪 SAIR (LOGOUT)
document.getElementById("btnSair").addEventListener("click", () => {
    clearInterval(intervaloPainel);
    usuarioLogado = null;
    localStorage.removeItem("usuarioLogado");
    pedidosAnteriores = [];
    if (telaLogin) telaLogin.style.display = "flex";
    if (telaPainel) telaPainel.style.display = "none";

    const btnAntigo = document.getElementById("btnConectarMP");
    if (btnAntigo) btnAntigo.remove();
});

// 🔍 FILTROS DE STATUS
document.querySelectorAll(".filtro").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filtro").forEach(b => b.classList.remove("ativo"));
        btn.classList.add("ativo");
        filtroAtual = btn.dataset.status;
        renderizarPedidos(pedidosAnteriores);
    });
});

// 📦 BUSCAR PEDIDOS NA API
async function carregarPedidos() {
    try {
        const loja = encodeURIComponent(usuarioLogado.loja);
        const res = await fetch(`${API}/api/pedidos/loja/${loja}`);
        const dados = await res.json();

        if (!dados.sucesso) return;

        const novos = dados.pedidos.filter(p =>
            !pedidosAnteriores.find(a => a.id === p.id)
        );

        if (pedidosAnteriores.length > 0 && novos.length > 0) {
            som.play().catch(() => {});
        }

        const aguardando = dados.pedidos.filter(p => p.status === "Aguardando Pagamento" || p.status === "Em preparo").length;
        contadorNovos.textContent = aguardando > 0 ? `${aguardando} novos` : "";

        pedidosAnteriores = dados.pedidos;
        renderizarPedidos(dados.pedidos);

    } catch (err) {
        console.error("Erro ao carregar pedidos:", err);
    }
}

// 🎨 RENDERIZAR LISTA DE PEDIDOS NO PAINEL
function renderizarPedidos(pedidos) {
    const filtrados = filtroAtual === "todos"
        ? pedidos
        : pedidos.filter(p => p.status === filtroAtual);

    if (filtrados.length === 0) {
        listaPedidos.innerHTML = `<p class="vazio">Nenhum pedido encontrado.</p>`;
        return;
    }

    listaPedidos.innerHTML = filtrados.map(pedido => {
        const hora = new Date(pedido.criado_em).toLocaleTimeString("pt-BR", {
            hour: "2-digit", minute: "2-digit"
        });

        const statusClass = pedido.status
            .toLowerCase()
            .replace(/\s+/g, "-")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        const itens = pedido.itens_resumo
            ? pedido.itens_resumo.split("\n").map(i => `<div>• ${i}</div>`).join("")
            : "";

        const isDividido = (pedido.pagamento && pedido.pagamento.includes("Dividido")) || 
                          (parseFloat(pedido.valor_pix) > 0 && parseFloat(pedido.valor_dinheiro) > 0);

        const vPix = parseFloat(pedido.valor_pix || 0);
        const vDinheiro = parseFloat(pedido.valor_dinheiro || 0);

        let blocoPagamentoHTML = "";
        if (isDividido) {
            blocoPagamentoHTML = `
                <div class="bloco-split-painel">
                    <div class="badge-split-header"> PAGAMENTO DIVIDIDO</div>
                    <p style="margin:2px 0; color:#2e9e4f; font-weight:bold;"> PIX Pago: R$ ${vPix.toFixed(2)}</p>
                    <div class="alerta-cobrar-entrega">
                         COBRAR NA ENTREGA (Dinheiro): R$ ${vDinheiro.toFixed(2)}
                    </div>
                    ${pedido.troco_para ? `<p style="margin:4px 0 0 0; font-size:12px; color:#555;"> Troco para: R$ ${parseFloat(pedido.troco_para).toFixed(2)}</p>` : ""}
                </div>
            `;
        } else {
            blocoPagamentoHTML = `
                <p> ${pedido.pagamento}</p>
                ${pedido.troco_para ? `<p> Troco para: R$ ${parseFloat(pedido.troco_para).toFixed(2)}</p>` : ""}
            `;
        }

        let botao = "";
        if (pedido.status === "Aguardando Pagamento" || pedido.status === "Em preparo") {
            botao = `<button class="btn-status preparo" onclick="atualizarStatus(${pedido.id}, 'Em preparo')"> Confirmar e preparar</button>`;
            if (pedido.status === "Em preparo") {
                botao = `<button class="btn-status saiu" onclick="atualizarStatus(${pedido.id}, 'Saiu para entrega')"> Saiu para entrega</button>`;
            }
        } else if (pedido.status === "Saiu para entrega") {
            botao = `<button class="btn-status entregue" onclick="atualizarStatus(${pedido.id}, 'Entregue')"> Confirmar entrega</button>`;
        }

        return `
        <div class="pedido-card status-${statusClass} ${isDividido ? 'card-split-destaque' : ''}" id="card-${pedido.id}">
            <div class="pedido-topo">
                <span class="pedido-id">#${pedido.id}</span>
                <span class="pedido-status">${pedido.status}</span>
                <span class="pedido-hora">${hora}</span>
                <button class="btn-fechar-pedido" onclick="ocultarPedido(${pedido.id})" title="Ocultar pedido">✕</button>
            </div>
            <div class="pedido-info">
                <p><strong>${pedido.nome_cliente}</strong></p>
                <p> ${pedido.endereco}</p>
                ${blocoPagamentoHTML}
            </div>
            <div class="pedido-itens">${itens}</div>
            <div class="pedido-total">Total: R$ ${parseFloat(pedido.total).toFixed(2)}</div>
            <div class="pedido-acoes">${botao}</div>
        </div>`;
    }).join("");
}

// 🔄 ATUALIZAR STATUS DO PEDIDO
async function atualizarStatus(id, status) {
    try {
        await fetch(`${API}/api/pedidos/${id}/status`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status })
        });
        await carregarPedidos();
    } catch (err) {
        alert("Erro ao atualizar status.");
    }
}

// ✕ OCULTAR PEDIDO DO PAINEL
async function ocultarPedido(id) {
    const card = document.getElementById(`card-${id}`);
    if (card) card.style.display = "none";

    try {
        await fetch(`${API}/api/pedidos/${id}/ocultar`, { method: "PUT" });
        pedidosAnteriores = pedidosAnteriores.filter(p => p.id !== id);
    } catch (err) {
        console.error("Erro ao ocultar pedido:", err);
    }
}