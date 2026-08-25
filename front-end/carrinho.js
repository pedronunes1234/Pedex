document.addEventListener("DOMContentLoaded", () => {

  const lista = document.getElementById("listaCarrinho");
  const subtotalEl = document.getElementById("subtotal");
  const totalEl = document.getElementById("total");
  const enderecoEl = document.getElementById("enderecoCarrinho");
  const nomeInput = document.getElementById("nomeCliente");

  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || {};

  const labelEnderecoEl = document.getElementById("labelEnderecoCarrinho");
  const tipoEntrega = localStorage.getItem("tipoEntrega") || "entrega";

  let endereco;
  if (tipoEntrega === "retirada") {
    labelEnderecoEl.textContent = "";
    endereco = "Retirar na Loja";
  } else {
    labelEnderecoEl.textContent = "📍 Entregar em:";
    endereco = localStorage.getItem("enderecoUsuario") || "Não informado";
  }
  enderecoEl.textContent = endereco;

  const nomeSalvo = localStorage.getItem("nomeCliente");
  if (nomeSalvo) nomeInput.value = nomeSalvo;

  nomeInput.addEventListener("input", () => {
    localStorage.setItem("nomeCliente", nomeInput.value);
  });

  function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }

  function obterTotalCarrinho() {
    let total = 0;
    Object.values(carrinho).forEach(item => {
      total += item.preco * item.qtd;
    });
    return total;
  }

  // ⚡ ELEMENTOS DO PAGAMENTO DIVIDIDO
  const splitBox = document.getElementById("splitBox");
  const valorPixSplitInput = document.getElementById("valorPixSplitInput");
  const valorDinheiroSplitInput = document.getElementById("valorDinheiroSplitInput");
  const splitMensagemErro = document.getElementById("splitMensagemErro");

  // SELEÇÃO VISUAL DE PAGAMENTO
  const trocoBox = document.getElementById("trocoBox");
  const valorTrocoBox = document.getElementById("valorTrocoBox");

  const opcoesPagamento = Array.from(document.querySelectorAll('.pagamento .opcao')).filter(
    opcao => !opcao.closest('.troco-box') && !opcao.closest('#splitBox')
  );

  opcoesPagamento.forEach(opcao => {
    opcao.addEventListener("click", () => {
      opcoesPagamento.forEach(o => o.classList.remove("selecionado"));
      opcao.classList.add("selecionado");

      const radio = opcao.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;

      const valorPagamento = radio ? radio.value : "";

      if (valorPagamento === "Dinheiro") {
        if (trocoBox) trocoBox.style.display = "block";
        if (splitBox) splitBox.style.display = "none";

        const trocoNao = document.querySelector('input[name="troco"][value="Não"]');
        if (trocoNao) {
          trocoNao.checked = true;
          document.querySelectorAll('input[name="troco"]').forEach(r => {
            if (r.closest(".opcao")) r.closest(".opcao").classList.remove("selecionado");
          });
          if (trocoNao.closest(".opcao")) trocoNao.closest(".opcao").classList.add("selecionado");
        }
        if (valorTrocoBox) valorTrocoBox.style.display = "none";
      }
      else if (valorPagamento === "Dividido") {
        if (splitBox) splitBox.style.display = "block";
        if (trocoBox) trocoBox.style.display = "block";

        const totalAtual = obterTotalCarrinho();
        if (totalAtual > 0) {
          const metade = (totalAtual / 2).toFixed(2);
          if (valorPixSplitInput) valorPixSplitInput.value = metade;
          if (valorDinheiroSplitInput) valorDinheiroSplitInput.value = (totalAtual - parseFloat(metade)).toFixed(2);
        }
        validarValoresSplit();
      }
      else {
        if (trocoBox) trocoBox.style.display = "none";
        if (valorTrocoBox) valorTrocoBox.style.display = "none";
        if (splitBox) splitBox.style.display = "none";
        opcoesTroco.forEach(o => o.classList.remove("selecionado"));
      }
    });
  });

  function validarValoresSplit() {
    if (!valorPixSplitInput || !valorDinheiroSplitInput) return true;

    const total = obterTotalCarrinho();
    const vPix = parseFloat(valorPixSplitInput.value) || 0;
    const vDinheiro = parseFloat(valorDinheiroSplitInput.value) || 0;
    const soma = parseFloat((vPix + vDinheiro).toFixed(2));

    if (vPix <= 0 || vDinheiro <= 0) {
      if (splitMensagemErro) {
        splitMensagemErro.textContent = "⚠️ Ambos os valores (PIX e Dinheiro) devem ser maiores que R$ 0,00.";
        splitMensagemErro.style.display = "block";
      }
      return false;
    }

    if (Math.abs(soma - total) > 0.01) {
      if (splitMensagemErro) {
        splitMensagemErro.textContent = `⚠️ A soma (R$ ${soma.toFixed(2)}) deve ser igual ao total (R$ ${total.toFixed(2)}).`;
        splitMensagemErro.style.display = "block";
      }
      return false;
    }

    if (splitMensagemErro) splitMensagemErro.style.display = "none";
    return true;
  }

  if (valorPixSplitInput) {
    valorPixSplitInput.addEventListener("input", () => {
      const total = obterTotalCarrinho();
      const vPix = parseFloat(valorPixSplitInput.value) || 0;
      const vDinheiro = Math.max(0, total - vPix);
      if (valorDinheiroSplitInput) valorDinheiroSplitInput.value = vDinheiro.toFixed(2);
      validarValoresSplit();
    });
  }

  if (valorDinheiroSplitInput) {
    valorDinheiroSplitInput.addEventListener("input", () => {
      const total = obterTotalCarrinho();
      const vDinheiro = parseFloat(valorDinheiroSplitInput.value) || 0;
      const vPix = Math.max(0, total - vDinheiro);
      if (valorPixSplitInput) valorPixSplitInput.value = vPix.toFixed(2);
      validarValoresSplit();
    });
  }

  const opcoesTroco = Array.from(document.querySelectorAll('.troco-box .opcao'));

  opcoesTroco.forEach(opcao => {
    opcao.addEventListener("click", () => {
      opcoesTroco.forEach(o => o.classList.remove("selecionado"));
      opcao.classList.add("selecionado");

      const radio = opcao.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;

      if (radio && radio.value === "Sim") {
        valorTrocoBox.style.display = "block";
      } else {
        valorTrocoBox.style.display = "none";
      }
    });
  });

  function renderizarCarrinho() {
    if (!lista) return;
    lista.innerHTML = "";
    let total = 0;

    const entradas = Object.entries(carrinho);
    if (entradas.length === 0) {
      lista.innerHTML = `<div style="text-align: center; color: #888; padding: 30px 15px; font-size: 14px;">Seu carrinho está vazio</div>`;
      if (subtotalEl) subtotalEl.textContent = "R$ 0,00";
      if (totalEl) totalEl.textContent = "R$ 0,00";
      return;
    }

    entradas.forEach(([id, item]) => {

      const totalItem = item.preco * item.qtd;
      total += totalItem;

      const div = document.createElement("div");
      div.classList.add("item-carrinho");

      div.innerHTML = `
        <div class="info-item">
          <h4>${item.nome}</h4>
          <p class="desc-item">
            ${item.sabores && item.sabores.length > 0 ? `Sabores: ${item.sabores.join(", ")}` : ""}
            ${item.tamanho ? `<br>Tamanho: ${item.tamanho}` : ""}
            ${item.borda && item.borda !== "Sem borda" ? `<br>Borda: ${item.borda}` : ""}
            ${item.adicionais && item.adicionais.length > 0 ? `<br>Adicionais: ${item.adicionais.join(", ")}` : ""}
            ${item.marca ? `<br>${item.marca}` : ""}
          </p>

          <div class="controle">
            <button class="menos">−</button>
            <span>${item.qtd}</span>
            <button class="mais">+</button>
          </div>
        </div>

        <div class="lado-direito">
          <span class="valor-item">R$ ${totalItem.toFixed(2)}</span>
          <button class="remover">Remover</button>
        </div>
      `;

      div.querySelector(".mais").onclick = () => {
        item.qtd++;
        salvarCarrinho();
        renderizarCarrinho();
      };

      div.querySelector(".menos").onclick = () => {
        item.qtd--;
        if (item.qtd <= 0) delete carrinho[id];
        salvarCarrinho();
        renderizarCarrinho();
      };

      div.querySelector(".remover").onclick = () => {
        delete carrinho[id];
        salvarCarrinho();
        renderizarCarrinho();
      };

      lista.appendChild(div);
    });

    subtotalEl.textContent = "R$ " + total.toFixed(2);
    totalEl.textContent = "R$ " + total.toFixed(2);
  }

  renderizarCarrinho();

  document.getElementById("btnFinalizar").addEventListener("click", async () => {

    const nome = nomeInput.value.trim();
    const pagamentoSelecionado = document.querySelector('input[name="pagamento"]:checked');

    if (Object.keys(carrinho).length === 0) {
      alert("Carrinho vazio.");
      return;
    }

    if (!nome) {
      alert("Digite seu nome.");
      return;
    }

    if (!pagamentoSelecionado) {
      alert("Escolha a forma de pagamento.");
      return;
    }

    let totalPedido = 0;
    const itens = Object.values(carrinho).map(item => {
      totalPedido += item.preco * item.qtd;
      return {
        nome_produto: item.nome,
        quantidade: item.qtd,
        preco: item.preco,
        tamanho: item.tamanho || null,
        sabores: item.sabores ? item.sabores.join(", ") : null,
        borda: item.borda || null,
        adicionais: item.adicionais ? item.adicionais.join(", ") : null,
        marca: item.marca || null
      };
    });

    const formaPagamento = pagamentoSelecionado.value;
    let valorPixEnviar = totalPedido;
    let valorDinheiroEnviar = 0;

    if (formaPagamento === "Dividido") {
      if (!validarValoresSplit()) {
        alert("Corrija os valores do pagamento dividido.");
        return;
      }
      valorPixEnviar = parseFloat(valorPixSplitInput.value);
      valorDinheiroEnviar = parseFloat(valorDinheiroSplitInput.value);
    }

    let trocoParaEnviar = null;
    if (formaPagamento === "Dinheiro" || (formaPagamento === "Dividido" && valorDinheiroEnviar > 0)) {
      const trocoSim = document.querySelector('input[name="troco"]:checked');
      if (trocoSim && trocoSim.value === "Sim") {
        const valorTrocoRaw = document.getElementById("valorTrocoInput").value;
        const valorTroco = parseFloat(valorTrocoRaw);
        const valorComparacao = formaPagamento === "Dividido" ? valorDinheiroEnviar : totalPedido;

        if (!valorTrocoRaw || isNaN(valorTroco) || valorTroco <= 0) {
          alert("Informe um valor de troco válido.");
          return;
        }

        if (valorTroco < valorComparacao) {
          alert(`O valor para troco (R$ ${valorTroco.toFixed(2)}) é menor que o valor a pagar em dinheiro (R$ ${valorComparacao.toFixed(2)}).`);
          return;
        }

        trocoParaEnviar = valorTroco;
      }
    }

    const btnFinalizar = document.getElementById("btnFinalizar");
    btnFinalizar.disabled = true;
    btnFinalizar.textContent = "Enviando...";

    const loja = localStorage.getItem("lojaSelecionada");

    try {

      if (formaPagamento === "Pix" || formaPagamento === "Dividido") {
        const resPix = await fetch("https://pedido-certo-production.up.railway.app/api/pagamento/pix", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            total: totalPedido,
            valorPix: valorPixEnviar,
            valorDinheiro: valorDinheiroEnviar,
            nomeCliente: nome,
            email: "",
            dadosPedido: {
              loja,
              nome_cliente: nome,
              endereco,
              pagamento: formaPagamento === "Dividido" ? "Dividido (PIX + Dinheiro)" : "Pix",
              total: totalPedido,
              valor_pix: valorPixEnviar,
              valor_dinheiro: valorDinheiroEnviar,
              troco_para: trocoParaEnviar,
              itens
            }
          })
        });

        const dadosPix = await resPix.json();

        if (dadosPix.sucesso) {
          mostrarQRCodeMP({
            pedidoId: dadosPix.pedidoId,
            totalPedido: totalPedido,
            valorPix: valorPixEnviar,
            valorDinheiro: valorDinheiroEnviar,
            qrCode: dadosPix.qrCode,
            qrCodeBase64: dadosPix.qrCodeBase64,
            loja: loja,
            isDividido: formaPagamento === "Dividido"
          });
        } else {
          alert("Erro ao gerar QR Code Pix.");
        }

        btnFinalizar.disabled = false;
        btnFinalizar.textContent = "Finalizar Pedido";
        return;
      }

      const res = await fetch("https://pedido-certo-production.up.railway.app/api/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          loja,
          nome_cliente: nome,
          endereco,
          telefone: "",
          pagamento: formaPagamento,
          total: totalPedido,
          valor_pix: 0,
          valor_dinheiro: totalPedido,
          troco_para: trocoParaEnviar,
          itens
        })
      });

      const dados = await res.json();

      if (!dados.sucesso) {
        alert("Erro ao salvar pedido.");
        btnFinalizar.disabled = false;
        btnFinalizar.textContent = "Finalizar Pedido";
        return;
      }

      const pedidoId = dados.pedidoId;
      let msgTroco = trocoParaEnviar ? ` | Troco para: R$ ${trocoParaEnviar.toFixed(2)}` : "";

      alert(`Pedido #${pedidoId} confirmado! Acompanhe pelo painel.${msgTroco}`);
      localStorage.removeItem("carrinho");
      carrinho = {};
      renderizarCarrinho();

      btnFinalizar.disabled = false;
      btnFinalizar.textContent = "Finalizar Pedido";

    } catch (err) {
      console.error(err);
      alert("Erro no servidor.");
      btnFinalizar.disabled = false;
      btnFinalizar.textContent = "Finalizar Pedido";
    }
  });

  function mostrarQRCodeMP(config) {
    let pedidoId, totalPedido, valorPix, valorDinheiro, qrCode, qrCodeBase64, isDividido;

    if (typeof config === "object") {
      pedidoId = config.pedidoId;
      totalPedido = config.totalPedido || config.total;
      valorPix = config.valorPix || config.total;
      valorDinheiro = config.valorDinheiro || 0;
      qrCode = config.qrCode;
      qrCodeBase64 = config.qrCodeBase64;
      isDividido = config.isDividido;
    } else {
      pedidoId = arguments[0];
      totalPedido = arguments[1];
      valorPix = arguments[1];
      valorDinheiro = 0;
      qrCode = arguments[2];
      qrCodeBase64 = arguments[3];
      isDividido = false;
    }

    const modal = document.createElement("div");
    modal.style.cssText = `
        position: fixed; inset: 0; background: rgba(0,0,0,0.8);
        display: flex; align-items: center; justify-content: center;
        z-index: 99999; padding: 20px;
    `;

    modal.innerHTML = `
        <div id="conteudoModalPix" style="background:#fff; border-radius:20px; padding:24px; max-width:360px; width:100%; text-align:center;">
            <h2 style="color:#c40000; margin-bottom:4px;">Pagar via Pix</h2>
            <p style="color:#888; font-size:14px; margin-bottom:16px;">Pedido #${pedidoId}</p>

            ${isDividido ? `
              <div style="background:#fff5f5; border:1.5px solid #ffccc7; border-radius:10px; padding:10px; margin-bottom:14px; text-align:left; font-size:13px;">
                <div style="font-weight:bold; color:#c40000; margin-bottom:4px;">⚡ Pagamento Dividido</div>
                <div style="color:#555;">Total do Pedido: <strong>R$ ${totalPedido.toFixed(2)}</strong></div>
                <div style="color:#2e9e4f; font-weight:bold;">1. Pagar no PIX agora: R$ ${valorPix.toFixed(2)}</div>
                <div style="color:#c40000; font-weight:bold;">2. Pagar na Entrega (Dinheiro): R$ ${valorDinheiro.toFixed(2)}</div>
              </div>
            ` : `
              <div style="font-size:28px; font-weight:bold; color:#222; margin-bottom:16px;">
                  R$ ${valorPix.toFixed(2)}
              </div>
            `}

            <img src="data:image/png;base64,${qrCodeBase64}" 
                 style="width:200px; height:200px; margin-bottom:16px;">

            <p style="font-size:12px; color:#888; margin-bottom:6px;">Ou copie o código:</p>
            <div style="background:#f5f5f5; border-radius:8px; padding:10px; font-size:11px; 
                        margin-bottom:8px; word-break:break-all; text-align:left;">
                ${qrCode}
            </div>

            <button id="btnCopiarPix" style="
                width:100%; padding:12px; background:#f5f5f5;
                color:#333; border:none; border-radius:12px;
                font-size:14px; font-weight:bold; cursor:pointer; margin-bottom:10px;
            ">
                📋 Copiar código Pix
            </button>

            <p id="statusAguardando" style="font-size:13px; color:#c40000; font-weight:bold; margin-bottom:6px;">
                ⏳ Aguardando pagamento...
            </p>
            <p style="font-size:12px; color:#888; margin-bottom:0;">
                Essa tela atualiza sozinha assim que o pagamento for confirmado.
            </p>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("btnCopiarPix").addEventListener("click", () => {
      navigator.clipboard.writeText(qrCode);
      document.getElementById("btnCopiarPix").textContent = "✅ Código copiado!";
    });

    const intervaloVerificacao = setInterval(async () => {
      try {
        const res = await fetch(`https://pedido-certo-production.up.railway.app/api/pedidos/${pedidoId}`);
        const dados = await res.json();

        if (dados.sucesso && dados.pedido && dados.pedido.status !== "Aguardando Pagamento") {
          clearInterval(intervaloVerificacao);
          mostrarPagamentoConfirmado(modal, pedidoId, isDividido, valorDinheiro);
        }
      } catch (err) {
        console.error("Erro ao verificar status do pagamento:", err);
      }
    }, 3000);

    function mostrarPagamentoConfirmado(modal, pedidoId, isDividido, valorDinheiro) {
      const conteudo = document.getElementById("conteudoModalPix");
      conteudo.innerHTML = `
          <div style="font-size:56px; margin-bottom:12px;">✅</div>
          <h2 style="color:#2e9e4f; margin-bottom:4px;">Pagamento PIX confirmado!</h2>
          <p style="color:#888; font-size:14px; margin-bottom:16px;">Pedido #${pedidoId}</p>
          
          ${isDividido ? `
            <div style="background:#fff5f5; border:1.5px solid #ffccc7; border-radius:10px; padding:10px; margin-bottom:16px; font-size:13px; text-align:left; color:#c40000;">
              📌 Seu PIX foi aprovado com sucesso e o pedido enviado para a cozinha!<br><br>
              🚨 <strong>A COBRAR NA ENTREGA: R$ ${valorDinheiro.toFixed(2)}</strong> (Pague em dinheiro ao entregador).
            </div>
          ` : `
            <p style="font-size:14px; color:#444; margin-bottom:20px;">
                Seu pedido já foi enviado para a loja e está sendo preparado.
            </p>
          `}

          <button id="btnFecharConfirmado" style="
              width:100%; padding:14px; background:#2e9e4f;
              color:#fff; border:none; border-radius:12px;
              font-size:16px; font-weight:bold; cursor:pointer;
          ">
              Ok, entendi!
          </button>
      `;

      document.getElementById("btnFecharConfirmado").addEventListener("click", () => {
        localStorage.removeItem("carrinho");
        carrinho = {};
        renderizarCarrinho();
        document.body.removeChild(modal);
        if (typeof fecharModalCarrinho === "function") {
          fecharModalCarrinho();
        }
      });
    }
  }

});

// 🎭 FUNÇÕES GLOBAIS DE CONTROLE DO MODAL DE CARRINHO
function garantirEstruturaCarrinhoModal() {
  if (document.getElementById("modalCarrinhoOverlay")) return;

  const htmlModal = `
    <div id="modalCarrinhoOverlay" class="modal-carrinho-overlay">
      <div class="carrinho-container">

        <!-- TOPO -->
        <div class="topo-carrinho">
          <button onclick="fecharModalCarrinho()" class="btn-voltar">←</button>
          <h2>Carrinho</h2>
        </div>

        <!-- ENDEREÇO -->
        <div class="endereco-box">
          <span id="labelEnderecoCarrinho">📍 Entregar em:</span>
          <span id="enderecoCarrinho">Carregando...</span>
        </div>

        <!-- LISTA DE ITENS -->
        <div id="listaCarrinho" class="lista-carrinho"></div>

        <!-- RESUMO -->
        <div class="resumo">
          <div class="linha">
            <span>Subtotal</span>
            <span id="subtotal">R$ 0,00</span>
          </div>

          <div class="linha total">
            <span>Total</span>
            <span id="total">R$ 0,00</span>
          </div>
        </div>

        <!-- NOME -->
        <div class="campo-cliente">
          <label>Nome:</label>
          <input type="text" id="nomeCliente" placeholder="Digite seu nome">
        </div>

        <!-- PAGAMENTO -->
        <div class="pagamento">
          <h3>Forma de pagamento</h3>

          <label class="opcao">
            <input type="radio" name="pagamento" value="Cartão">
            <span class="check-radio"></span>
            Cartão na entrega
          </label>

          <label class="opcao">
            <input type="radio" name="pagamento" value="Pix">
            <span class="check-radio"></span>
            Pix
          </label>

          <label class="opcao">
            <input type="radio" name="pagamento" value="Dinheiro" id="radioDinheiro">
            <span class="check-radio"></span>
            Dinheiro
          </label>

          <!-- PAGAMENTO DIVIDIDO (PIX + DINHEIRO) -->
          <label class="opcao">
            <input type="radio" name="pagamento" value="Dividido" id="radioDividido">
            <span class="check-radio"></span>
            Pagamento Dividido (PIX + Dinheiro)
          </label>

          <!-- CAIXA DE VALORES DA DIVISÃO -->
          <div id="splitBox" class="split-box" style="display: none; background: #fff5f5; border: 1.5px solid #ffccc7; border-radius: 12px; padding: 14px; margin-top: 12px;">
            <p style="font-size:14px; font-weight:bold; color:#c40000; margin-bottom:4px;">Divisão do Pagamento</p>
            <p style="font-size:12px; color:#555; margin-bottom:10px;">Informe quanto pagará no PIX agora e quanto no Dinheiro na entrega:</p>

            <div style="display: flex; gap: 10px; margin-bottom: 8px;">
              <div style="flex: 1;">
                <label style="font-size: 11px; font-weight: bold; color: #2e9e4f; display: block; margin-bottom: 4px;">📱 PIX Agora (R$):</label>
                <input type="number" id="valorPixSplitInput" step="0.01" min="0" placeholder="0.00" inputmode="decimal" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 8px; font-weight: bold; font-size: 14px; box-sizing: border-box;">
              </div>

              <div style="flex: 1;">
                <label style="font-size: 11px; font-weight: bold; color: #c40000; display: block; margin-bottom: 4px;">💵 Dinheiro Entrega (R$):</label>
                <input type="number" id="valorDinheiroSplitInput" step="0.01" min="0" placeholder="0.00" inputmode="decimal" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 8px; font-weight: bold; font-size: 14px; box-sizing: border-box;">
              </div>
            </div>

            <div id="splitMensagemErro" style="display: none; color: #c40000; font-size: 12px; font-weight: bold; margin-top: 6px;"></div>
          </div>

          <!-- TROCO -->
          <div id="trocoBox" class="troco-box" style="display: none; margin-top: 12px;">
            <p style="font-size:15px; font-weight:bold; color:#222; margin-bottom:10px;">Precisa de troco para a parte em dinheiro?</p>

            <label class="opcao">
              <input type="radio" name="troco" value="Não" checked>
              <span class="check-radio"></span>
              Não
            </label>

            <label class="opcao">
              <input type="radio" name="troco" value="Sim" id="trocoSim">
              <span class="check-radio"></span>
              Sim
            </label>

            <div id="valorTrocoBox" class="valor-troco" style="display: none; margin-top: 8px;">
              Troco para: R$
              <input type="number" id="valorTrocoInput" placeholder="Ex: 50" min="0" step="0.01" inputmode="decimal">
            </div>
          </div>

        </div>

        <!-- BOTÃO FINALIZAR -->
        <button id="btnFinalizar" class="btn-finalizar">
          Finalizar Pedido
        </button>

      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", htmlModal);

  const overlay = document.getElementById("modalCarrinhoOverlay");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) fecharModalCarrinho();
    });
  }

  const eventoInit = new Event("DOMContentLoaded");
  document.dispatchEvent(eventoInit);
}

function abrirModalCarrinho() {
  garantirEstruturaCarrinhoModal();

  const overlay = document.getElementById("modalCarrinhoOverlay");
  if (!overlay) return;

  const eventoInit = new Event("DOMContentLoaded");
  document.dispatchEvent(eventoInit);

  overlay.classList.add("ativo");
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
}

function fecharModalCarrinho() {
  const overlay = document.getElementById("modalCarrinhoOverlay");
  if (!overlay) return;

  overlay.classList.remove("ativo");
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
}