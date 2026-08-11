document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // 🔹 ENDEREÇO (FUNCIONA EM QUALQUER PÁGINA)
  // ===============================
  const textoEndereco = document.getElementById("textoEndereco");
  const btnEndereco = document.getElementById("btnEndereco");

  // 🔹 TOGGLE ENTREGA / RETIRADA (FUNCIONA NA PÁGINA INICIAL)
  const btnEntrega = document.getElementById("btnEntrega");
  const btnRetirada = document.getElementById("btnRetirada");
  const blocoEntrega = document.getElementById("blocoEntrega");
  const blocoRetirada = document.getElementById("blocoRetirada");

  if (btnEntrega && btnRetirada) {
    function aplicarTipoEntrega(tipo) {
      localStorage.setItem("tipoEntrega", tipo);

      if (tipo === "retirada") {
        btnRetirada.classList.add("ativo");
        btnEntrega.classList.remove("ativo");
        blocoRetirada.style.display = "block";
        blocoEntrega.style.display = "none";
      } else {
        btnEntrega.classList.add("ativo");
        btnRetirada.classList.remove("ativo");
        blocoEntrega.style.display = "block";
        blocoRetirada.style.display = "none";
      }
    }

    btnEntrega.addEventListener("click", () => aplicarTipoEntrega("entrega"));
    btnRetirada.addEventListener("click", () => aplicarTipoEntrega("retirada"));

    const tipoSalvo = localStorage.getItem("tipoEntrega") || "entrega";
    aplicarTipoEntrega(tipoSalvo);
  }

  if (textoEndereco) {
    const enderecoSalvo = localStorage.getItem("enderecoUsuario");
    if (enderecoSalvo) {
      textoEndereco.textContent = enderecoSalvo;
    }

    const camposEndereco = document.getElementById("camposEndereco");
    const inputRua = document.getElementById("inputRua");
    const inputNumero = document.getElementById("inputNumero");
    const inputComplemento = document.getElementById("inputComplemento");
    const inputReferencia = document.getElementById("inputReferencia");
    const btnSalvarEndereco = document.getElementById("btnSalvarEndereco");

    if (btnEndereco) {
      btnEndereco.addEventListener("click", () => {
        camposEndereco.style.display = "block";
        inputRua.focus();
      });
    }

    if (btnSalvarEndereco) {
      btnSalvarEndereco.addEventListener("click", () => {
        const rua = inputRua.value.trim();
        const numero = inputNumero.value.trim();
        const complemento = inputComplemento.value.trim();
        const referencia = inputReferencia.value.trim();

        if (!rua || !numero) {
          alert("Informe pelo menos a rua e o número.");
          return;
        }

        let endereco = `${rua}, ${numero}`;
        if (complemento) endereco += ` - ${complemento}`;
        if (referencia) endereco += ` (${referencia})`;

        localStorage.setItem("enderecoUsuario", endereco);
        textoEndereco.textContent = endereco;

        camposEndereco.style.display = "none";
      });
    }
  }

  // ===============================
  // 🔹 SISTEMA DA LOJA
  // ===============================
  const lojaId = document.body.dataset.loja;
  if (!lojaId || typeof LOJAS === "undefined") return;

  const loja = LOJAS[lojaId];
  if (!loja) return;

  // 🔹 Limpa o carrinho automaticamente se o cliente trocou de loja
  // (ex: adicionou hambúrguer na Burger House, depois entrou na Peixodá Pizzaria)
  const lojaCarrinhoSalva = localStorage.getItem("lojaCarrinhoAtual");
  if (lojaCarrinhoSalva && lojaCarrinhoSalva !== lojaId) {
    localStorage.removeItem("carrinho");
  }
  localStorage.setItem("lojaCarrinhoAtual", lojaId);

  document.querySelector(".nome-loja").textContent = loja.nome;

  const statusEl = document.querySelector(".status-text");

  // ===============================
  // 🔹 SISTEMA DE PERÍODOS (lojas com horário por dia/turno, ex: Babaçu)
  // Não afeta lojas que usam o formato simples loja.abre / loja.fecha
  // ===============================
  function obterPeriodoAtual() {
    if (!loja.horarios) return null;

    const agora = new Date();
    const diaSemana = agora.getDay(); // 0=domingo ... 6=sábado
    const minutosAgora = agora.getHours() * 60 + agora.getMinutes();

    const janelasHoje = loja.horarios[diaSemana] || [];

    for (const janela of janelasHoje) {
      const [ih, im] = janela.inicio.split(":").map(Number);
      const [fh, fm] = janela.fim.split(":").map(Number);

      const minutosInicio = ih * 60 + im;
      // "00:00" como horário de fechamento = meia-noite (vira o dia) → tratamos como 24:00
      const minutosFim = (fh === 0 && fm === 0) ? 24 * 60 : fh * 60 + fm;

      if (minutosAgora >= minutosInicio && minutosAgora < minutosFim) {
        return janela; // já tem o campo "id" (ex: "sexta-noite")
      }
    }

    return null; // loja fechada agora
  }

  // Um produto sem "tag" é sempre exibido. Um produto com "tag" só aparece
  // se essa tag estiver liberada para o período atual em loja.produtosPorPeriodo.
  function produtoDisponivelAgora(produto) {
    // Lojas sem sistema de período (Burger House, Pizzaria) sempre mostram tudo
    if (!loja.horarios) return true;

    // Loja com sistema de período: se estiver fechada agora, nada aparece
    const periodo = obterPeriodoAtual();
    if (!periodo) return false;

    // Produto sem tag = sem restrição própria, mas só aparece com a loja aberta (já garantido acima)
    if (!produto.tag) return true;
    if (!loja.produtosPorPeriodo) return true;

    const tagsLiberadas = loja.produtosPorPeriodo[periodo.id] || [];
    return tagsLiberadas.includes(produto.tag);
  }

  // Usado pela Porção de Carne e pela Marmita: pega as carnes do período atual.
  // Se a loja não tiver carnesPorPeriodo (outras lojas), cai no fallback do produto.
  function obterCarnesDisponiveis(fallback) {
    const periodo = obterPeriodoAtual();

    if (loja.carnesPorPeriodo && periodo && loja.carnesPorPeriodo[periodo.id]) {
      return loja.carnesPorPeriodo[periodo.id];
    }

    return fallback || [];
  }

  function verificarHorario() {

    // 🔹 Lojas com horário por período (ex: Babaçu)
    if (loja.horarios) {
      const periodo = obterPeriodoAtual();

      if (periodo) {
        const nomePeriodo = periodo.periodo === "manha" ? "Manhã" : "Noite";
        statusEl.innerHTML = `🟢 Aberto agora • ${nomePeriodo}`;
        statusEl.style.color = "#28a745";
      } else {
        statusEl.innerHTML = "🔴 Fechado no momento • confira nossos dias e horários";
        statusEl.style.color = "#fff";
      }

      return;
    }

    // 🔹 Lojas com horário simples (formato antigo, inalterado)
    const agora = new Date();
    const minutosAgora = agora.getHours() * 60 + agora.getMinutes();

    const [abreH, abreM] = loja.abre.split(":").map(Number);
    const [fechaH, fechaM] = loja.fecha.split(":").map(Number);

    const minutosAbre = abreH * 60 + abreM;
    const minutosFecha = fechaH * 60 + fechaM;

    if (minutosAgora >= minutosAbre && minutosAgora <= minutosFecha) {
      statusEl.innerHTML = "🟢 Aberto agora";
      statusEl.style.color = "#28a745";
    } else {
      statusEl.innerHTML = `🔴 Fechado • Abre às ${loja.abre}`;
      statusEl.style.color = "#fff";
    }
  }

  verificarHorario();

  window.carrinho = JSON.parse(localStorage.getItem("carrinho")) || {};
  const totalEl = document.getElementById("total-carrinho");
  atualizarTotal();

  // 🔹 Corrige o carrinho "desatualizado" quando o navegador restaura a página
  // pelo botão de voltar (bfcache), sem recarregar o script do zero.
  window.addEventListener("pageshow", (evento) => {
    if (evento.persisted) {
      window.carrinho = JSON.parse(localStorage.getItem("carrinho")) || {};
      atualizarTotal();
    }
  });

  const lista = document.getElementById("lista-produtos");

  const modal = document.getElementById("modalProduto");
  const modalImagem = document.getElementById("modalImagem");
  const modalNome = document.getElementById("modalNome");
  const modalPrecoBase = document.getElementById("modalPrecoBase");
  const modalTotal = document.getElementById("modalTotal");
  const listaAdicionais = document.getElementById("listaAdicionais");
  const fecharModal = document.getElementById("fecharModal");
  const btnAdicionarCarrinho = document.getElementById("btnAdicionarCarrinho");

  if (fecharModal) {
    fecharModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && modal.style.display === "flex") {
      modal.style.display = "none";
    }
  });

  let produtoAtual = null;
  let adicionaisSelecionados = [];
  let totalModal = 0;

  let saboresSelecionados = [];

  const limiteSabores = {
    M: 2,
    F: 3
  };

  let tamanhoPizzaPersonalizada = "M";

  function atualizarTotal() {
    let total = 0;

    Object.values(carrinho).forEach(item => {
      total += item.preco * item.qtd;
    });

    totalEl.textContent = "R$ " + total.toFixed(2);

    // 🔹 Salva o carrinho imediatamente, sempre que ele muda nesta página
    // (evita que uma versão antiga guardada só na memória sobrescreva
    // uma remoção feita na tela do carrinho)
    localStorage.setItem("carrinho", JSON.stringify(window.carrinho));
  }

  // ===============================
  // 🔹 GERAR ID ÚNICO (CORREÇÃO)
  // ===============================
  function gerarId(produto, tamanho, marca) {
    return (
      produto.nome.replace(/\s/g, "") +
      (tamanho ? "-" + tamanho : "") +
      (marca ? "-" + marca : "")
    );
  }

  function abrirModal(produto) {

    console.log(produto);

    console.log("ABRIU MODAL");
    produtoAtual = produto;
    adicionaisSelecionados = [];

    modal.style.display = "flex";

    modalImagem.src = produto.img;
    modalNome.textContent = produto.nome;

    if (produto.tipo === "monte-pizza") {

      totalModal = produto.tamanhos.M;

      modalPrecoBase.textContent =
        "Preço Base: R$ " +
        totalModal.toFixed(2);

      modalTotal.textContent =
        "R$ " +
        totalModal.toFixed(2);

      criarMonteSuaPizza(produto);

      return;
    }

    if (produto.tipo === "porcao-carne") {
      criarModalPorcao(produto);
      return;
    }

    if (produto.tipo === "marmita") {
      criarModalMarmita(produto);
      return;
    }

    btnAdicionarCarrinho.onclick = () => {

      const adicionaisSelecionadosNomes = adicionaisSelecionados
        .filter(a => a.qtd > 0)
        .map(a => `${a.nome} x${a.qtd}`);

      const id = Date.now();

      carrinho[id] = {
        nome: produtoAtual.nome,
        preco: totalModal,
        qtd: 1,
        adicionais: adicionaisSelecionadosNomes
      };

      atualizarTotal();
      modal.style.display = "none";
    };

    totalModal = produto.preco;

    modalPrecoBase.textContent =
      "Preço Base: R$ " +
      produto.preco.toFixed(2);

    modalTotal.textContent =
      "R$ " +
      totalModal.toFixed(2);

    listaAdicionais.innerHTML = "";

    if (!produto.adicionais) return;

    produto.adicionais.forEach(adicional => {

      const linha = document.createElement("div");

      linha.className = "adicional-item";

      linha.innerHTML = `
            <div>
                <strong>${adicional.nome}</strong>
                <br>
                <small>+ R$ ${adicional.preco.toFixed(2)}</small>
            </div>

            <div class="controle-adicional">
                <button class="btn-menor">-</button>
                <span>0</span>
                <button class="btn-maior">+</button>
            </div>
        `;

      const qtdEl = linha.querySelector("span");
      const btnMais = linha.querySelector(".btn-maior");
      const btnMenos = linha.querySelector(".btn-menor");

      let qtd = 0;

      btnMais.addEventListener("click", () => {

        qtd++;

        qtdEl.textContent = qtd;

        totalModal += adicional.preco;

        modalTotal.textContent =
          "R$ " +
          totalModal.toFixed(2);

        // Rastrear adicional
        const existente = adicionaisSelecionados.find(a => a.nome === adicional.nome);
        if (existente) existente.qtd = qtd;
        else adicionaisSelecionados.push({ nome: adicional.nome, qtd });
      });

      btnMenos.addEventListener("click", () => {

        if (qtd === 0) return;

        qtd--;

        qtdEl.textContent = qtd;

        totalModal -= adicional.preco;

        modalTotal.textContent =
          "R$ " +
          totalModal.toFixed(2);

        // Rastrear adicional
        const existente = adicionaisSelecionados.find(a => a.nome === adicional.nome);
        if (existente) existente.qtd = qtd;
      });

      listaAdicionais.appendChild(linha);
    });
  }

  function abrirModalBorda(produto, tamanhoInicial, precoInicial) {

    produtoAtual = produto;

    modal.style.display = "flex";
    modalImagem.src = produto.img;
    modalNome.textContent = produto.nome;

    let tamanho = tamanhoInicial;
    let basePrice = precoInicial;
    let precoExtraBorda = 0;
    let bordaSelecionada = { nome: "Sem borda", preco: 0 };
    let acompanhamentoSelecionado = "M&M";

    modalPrecoBase.textContent = "Tamanho: " + tamanho;
    modalTotal.textContent = "R$ " + basePrice.toFixed(2);

    // Limpa conteúdo anterior
    listaAdicionais.innerHTML = "";
    document.getElementById("contadorSabores").textContent = "";

    const bordaExistente = document.getElementById("secaoBordas");
    if (bordaExistente) bordaExistente.remove();

    const acompanhamentoExistente = document.getElementById("secaoAcompanhamento");
    if (acompanhamentoExistente) acompanhamentoExistente.remove();

    // SEÇÃO DE ACOMPANHAMENTO (só para pizzas doces)
    if (produto.temAcompanhamento) {
      const opcoesAcompanhamento = ["M&M", "Granulado"];

      const secaoAcompanhamento = document.createElement("div");
      secaoAcompanhamento.id = "secaoAcompanhamento";
      secaoAcompanhamento.style.cssText = "padding: 0 20px 10px;";
      secaoAcompanhamento.innerHTML = `<p style="font-weight:bold; font-size:16px; margin-bottom:10px; color:#222;">Escolha o acompanhamento:</p>`;

      opcoesAcompanhamento.forEach(opcao => {
        const btn = document.createElement("button");
        btn.className = "btn-borda" + (opcao === acompanhamentoSelecionado ? " ativo" : "");
        btn.textContent = opcao;

        btn.addEventListener("click", () => {
          secaoAcompanhamento.querySelectorAll(".btn-borda").forEach(b => b.classList.remove("ativo"));
          btn.classList.add("ativo");
          acompanhamentoSelecionado = opcao;
        });

        secaoAcompanhamento.appendChild(btn);
      });

      listaAdicionais.before(secaoAcompanhamento);
    }

    // SEÇÃO DE BORDAS
    const todasAsBordas = [
      { nome: "Sem borda", preco: 0 },
      { nome: "Borda de Catupiry", preco: 10 },
      { nome: "Borda de Cheddar", preco: 10 },
      { nome: "Borda de Requeijão", preco: 10 },
      { nome: "Borda de Chocolate", preco: 12 },
      { nome: "Borda de Chocolate Branco", preco: 12 }
    ];

    // Pizzas doces não recebem bordas salgadas; pizzas salgadas continuam com todas as opções
    const opcoesBordas = produto.temAcompanhamento
      ? todasAsBordas.filter(b => !["Borda de Catupiry", "Borda de Cheddar", "Borda de Requeijão"].includes(b.nome))
      : todasAsBordas;

    const secaoBordas = document.createElement("div");
    secaoBordas.id = "secaoBordas";
    secaoBordas.style.cssText = "padding: 0 20px 10px;";
    secaoBordas.innerHTML = `<p style="font-weight:bold; font-size:16px; margin-bottom:10px; color:#222;">Escolha a borda:</p>`;

    opcoesBordas.forEach(borda => {
      const btn = document.createElement("button");
      btn.className = "btn-borda" + (borda.nome === "Sem borda" ? " ativo" : "");
      btn.textContent = borda.preco === 0
        ? borda.nome
        : `${borda.nome} (+R$ ${borda.preco.toFixed(2)})`;

      btn.addEventListener("click", () => {
        secaoBordas.querySelectorAll(".btn-borda").forEach(b => b.classList.remove("ativo"));
        btn.classList.add("ativo");
        basePrice -= precoExtraBorda;
        precoExtraBorda = borda.preco;
        basePrice += precoExtraBorda;
        bordaSelecionada = borda;
        modalTotal.textContent = "R$ " + basePrice.toFixed(2);
      });

      secaoBordas.appendChild(btn);
    });

    listaAdicionais.before(secaoBordas);

    // BOTÕES P / M / G DO MODAL
    modal.querySelectorAll(".btn-tamanho").forEach(b => b.classList.remove("ativo"));
    const btnAtivo = modal.querySelector(`.btn-tamanho[data-size="${tamanho}"]`);
    if (btnAtivo) btnAtivo.classList.add("ativo");

    modal.querySelectorAll(".btn-tamanho").forEach(btn => {
      btn.replaceWith(btn.cloneNode(true)); // remove listeners antigos
    });

    modal.querySelectorAll(".btn-tamanho").forEach(btn => {
      btn.addEventListener("click", () => {
        modal.querySelectorAll(".btn-tamanho").forEach(b => b.classList.remove("ativo"));
        btn.classList.add("ativo");

        tamanho = btn.dataset.size;
        basePrice = produto.tamanhos[tamanho] + precoExtraBorda;

        modalPrecoBase.textContent = "Tamanho: " + tamanho;
        modalTotal.textContent = "R$ " + basePrice.toFixed(2);
      });
    });

    // BOTÃO ADICIONAR
    btnAdicionarCarrinho.onclick = () => {

      const id = Date.now();

      carrinho[id] = {
        nome: produto.nome,
        preco: basePrice,
        qtd: 1,
        tamanho: tamanho,
        borda: bordaSelecionada.nome,
        marca: produto.temAcompanhamento ? `Acompanhamento: ${acompanhamentoSelecionado}` : undefined
      };

      atualizarTotal();
      modal.style.display = "none";
    };
  }

  function criarMonteSuaPizza(produto) {

    const listaSabores = document.getElementById("listaAdicionais");
    const contador = document.getElementById("contadorSabores");

    listaSabores.innerHTML = "";

    // BORDAS RECHEADAS
    // VARIÁVEIS PRINCIPAIS (declaradas antes das bordas)
    let tamanho = "M";
    let saboresSelecionados = [];
    let basePrice = produto.tamanhos[tamanho];
    let precoExtraBorda = 0;
    let bordaSelecionada = { nome: "Sem borda", preco: 0 };

    const limiteSabores = {
      M: 2,
      F: 3
    };

    // BORDAS RECHEADAS
    const opcoesBordas = [
      { nome: "Sem borda", preco: 0 },
      { nome: "Borda de Catupiry", preco: 10 },
      { nome: "Borda de Cheddar", preco: 10 },
      { nome: "Borda de Requeijão", preco: 10 },
      { nome: "Borda de Chocolate", preco: 12 },
      { nome: "Borda de Chocolate Branco", preco: 12 }
    ];

    const bordaExistente = document.getElementById("secaoBordas");
    if (bordaExistente) bordaExistente.remove();

    const secaoBordas = document.createElement("div");
    secaoBordas.id = "secaoBordas";
    secaoBordas.style.cssText = "padding: 0 20px 10px;";
    secaoBordas.innerHTML = `<p style="font-weight:bold; font-size:16px; margin-bottom:10px; color:#222;">Escolha a borda:</p>`;

    opcoesBordas.forEach(borda => {
      const btn = document.createElement("button");
      btn.className = "btn-borda" + (borda.nome === "Sem borda" ? " ativo" : "");
      btn.textContent = borda.preco === 0
        ? borda.nome
        : `${borda.nome} (+R$ ${borda.preco.toFixed(2)})`;
      btn.addEventListener("click", () => {
        secaoBordas.querySelectorAll(".btn-borda").forEach(b => b.classList.remove("ativo"));
        btn.classList.add("ativo");
        basePrice -= precoExtraBorda;
        precoExtraBorda = borda.preco;
        basePrice += precoExtraBorda;
        bordaSelecionada = borda;
        modalTotal.textContent = "R$ " + basePrice.toFixed(2);
      });
      secaoBordas.appendChild(btn);
    });

    listaSabores.before(secaoBordas);

    modal.querySelectorAll(".btn-tamanho").forEach(b => b.classList.remove("ativo"));
    modal.querySelector('.btn-tamanho[data-size="M"]').classList.add("ativo");

    modalPrecoBase.textContent = "Preço Base: R$ " + basePrice.toFixed(2);
    modalTotal.textContent = "R$ " + basePrice.toFixed(2);
    contador.textContent = `0/${limiteSabores[tamanho]}`;

    contador.textContent = `0/${limiteSabores[tamanho]}`;

    // ===============================
    //  BOTÕES P / M / G (SEM DUPLICAR EVENTO)
    // ===============================
    const botoesTamanho = modal.querySelectorAll(".btn-tamanho");

    botoesTamanho.forEach(btn => {

      // remove listener antigo (IMPORTANTE para não duplicar)
      btn.replaceWith(btn.cloneNode(true));
    });

    modal.querySelectorAll(".btn-tamanho").forEach(btn => {

      btn.addEventListener("click", () => {

        modal.querySelectorAll(".btn-tamanho")
          .forEach(b => b.classList.remove("ativo"));

        btn.classList.add("ativo");

        tamanho = btn.dataset.size;

        saboresSelecionados = [];

        listaSabores.querySelectorAll("input")
          .forEach(i => i.checked = false);

        basePrice = produto.tamanhos[tamanho];
        total = basePrice;

        modalPrecoBase.textContent =
          "Preço Base: R$ " + basePrice.toFixed(2);

        modalTotal.textContent =
          "R$ " + total.toFixed(2);

        atualizarDisponibilidadeAcompanhamento();
        contador.textContent =
          `Selecionados: 0/${limiteSabores[tamanho]}`;
      });
    });

    // ===============================
    //  SABORES
    // ===============================
    produto.sabores.forEach(sabor => {

      const item = document.createElement("div");
      item.className = "item-sabor-pizza";

      item.innerHTML = `
            <label class="label-sabor">
                <span class="check-custom"></span>
                <span class="nome-sabor">${sabor}</span>
            </label>
        `;

      let marcado = false;

      item.addEventListener("click", () => {
        const limite = limiteSabores[tamanho];

        if (!marcado) {
          if (saboresSelecionados.length >= limite) {
            alert(`Máximo de ${limite} sabores para tamanho ${tamanho}`);
            return;
          }
          marcado = true;
          saboresSelecionados.push(sabor);
          item.querySelector(".check-custom").classList.add("marcado");
        } else {
          marcado = false;
          saboresSelecionados = saboresSelecionados.filter(s => s !== sabor);
          item.querySelector(".check-custom").classList.remove("marcado");
        }

        contador.textContent = `${saboresSelecionados.length}/${limite}`;
        atualizarDisponibilidadeAcompanhamento();
      });

      listaSabores.appendChild(item);
    });

    // ===============================
    //  ACOMPANHAMENTO (M&M / Granulado) — só libera com sabor doce
    // ===============================
    const saboresDoce = ["Chocolate", "Chocolate Branco"];
    const opcoesAcompanhamentoDoce = ["M&M", "Granulado"];
    const acompanhamentoPorSabor = {};

    const acompanhamentoExistente = document.getElementById("secaoAcompanhamentoDoce");
    if (acompanhamentoExistente) acompanhamentoExistente.remove();

    const secaoAcompanhamentoDoce = document.createElement("div");
    secaoAcompanhamentoDoce.id = "secaoAcompanhamentoDoce";
    secaoAcompanhamentoDoce.style.cssText = "padding: 10px 20px;";

    listaSabores.after(secaoAcompanhamentoDoce);

    function atualizarDisponibilidadeAcompanhamento() {
      secaoAcompanhamentoDoce.innerHTML = "";

      const doceSelecionados = saboresSelecionados.filter(s => saboresDoce.includes(s));

      // Limpa acompanhamento de sabores doces que foram desmarcados
      Object.keys(acompanhamentoPorSabor).forEach(sabor => {
        if (!doceSelecionados.includes(sabor)) delete acompanhamentoPorSabor[sabor];
      });

      if (doceSelecionados.length === 0) return;

      doceSelecionados.forEach(saborDoce => {
        const bloco = document.createElement("div");
        bloco.style.cssText = "margin-bottom: 10px;";
        bloco.innerHTML = `<p style="font-weight:bold; font-size:14px; margin-bottom:6px; color:#222;">Acompanhamento para ${saborDoce}:</p>`;

        opcoesAcompanhamentoDoce.forEach(opcao => {
          const btn = document.createElement("button");
          btn.className = "btn-borda" + (acompanhamentoPorSabor[saborDoce] === opcao ? " ativo" : "");
          btn.textContent = opcao;

          btn.addEventListener("click", () => {
            bloco.querySelectorAll(".btn-borda").forEach(b => b.classList.remove("ativo"));
            btn.classList.add("ativo");
            acompanhamentoPorSabor[saborDoce] = opcao;
          });

          bloco.appendChild(btn);
        });

        secaoAcompanhamentoDoce.appendChild(bloco);
      });
    }

    // ===============================
    //  BOTÃO FINAL (INTEGRADO AO SEU CARRINHO)
    // ===============================
    btnAdicionarCarrinho.onclick = () => {

      if (saboresSelecionados.length === 0) {
        alert("Escolha pelo menos 1 sabor");
        return;
      }

      const id = gerarId(produto, tamanho, "pizza") + "-" + Date.now();

      const textoAcompanhamentos = Object.entries(acompanhamentoPorSabor)
        .filter(([sabor, opcao]) => saboresSelecionados.includes(sabor) && opcao)
        .map(([sabor, opcao]) => `${sabor}: ${opcao}`)
        .join(" | ");

      carrinho[id] = {
        nome: produto.nome,
        preco: basePrice,
        qtd: 1,
        tamanho: tamanho,
        sabores: [...saboresSelecionados],
        borda: bordaSelecionada.nome,
        marca: textoAcompanhamentos || undefined
      };

      atualizarTotal();

      modal.style.display = "none";
    };
  }

  // Regra: quantidade de carnes permitida muda conforme a faixa de valor da porção
  function obterFaixaCarnesPorValor(valor) {
    if (valor <= 20) return { min: 3, max: 4 };
    return { min: 5, max: 6 };
  }

  // ===============================
  // 🔹 MODAL: PORÇÃO DE CARNE
  // (valor livre a partir do mínimo + seleção de várias carnes,
  //  quantidade permitida depende do valor escolhido)
  // ===============================
  function criarModalPorcao(produto) {

    modalPrecoBase.textContent = "Monte sua porção";

    listaAdicionais.innerHTML = "";
    const contadorSaboresEl = document.getElementById("contadorSabores");
    if (contadorSaboresEl) contadorSaboresEl.textContent = "";

    // Limpa seções de outros modais, se existirem
    ["secaoBordas", "secaoAcompanhamento", "secaoCarne", "secaoValorPorcao", "secaoMarmitaCarnes"]
      .forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });

    const carnesDisponiveis = obterCarnesDisponiveis(produto.tiposCarne);

    let valorPorcao = produto.valorMinimo;
    let carnesSelecionadas = [];
    const passoValor = 5;

    modalTotal.textContent = "R$ " + valorPorcao.toFixed(2);

    // SEÇÃO 1: VALOR LIVRE (vem primeiro pois define quantas carnes dá pra escolher)
    const secaoValorPorcao = document.createElement("div");
    secaoValorPorcao.id = "secaoValorPorcao";
    secaoValorPorcao.style.cssText = "padding: 0 20px 10px;";
    secaoValorPorcao.innerHTML = `
      <p style="font-weight:bold; font-size:16px; margin-bottom:10px; color:#222;">Escolha o valor da porção:</p>
      <div class="controle-valor-porcao">
        <button type="button" class="btn-valor-menos">−</button>
        <span class="valor-porcao-display">R$ ${valorPorcao.toFixed(2)}</span>
        <button type="button" class="btn-valor-mais">+</button>
      </div>
      <small style="color:#666;">Valor mínimo: R$ ${produto.valorMinimo.toFixed(2)} • sem limite máximo</small>
    `;

    listaAdicionais.before(secaoValorPorcao);

    // SEÇÃO 2: CARNES (seleção múltipla, limite depende do valor acima)
    const secaoCarne = document.createElement("div");
    secaoCarne.id = "secaoCarne";
    secaoCarne.style.cssText = "padding: 10px 20px 10px;";

    const tituloCarne = document.createElement("p");
    tituloCarne.style.cssText = "font-weight:bold; font-size:16px; margin-bottom:10px; color:#222;";
    secaoCarne.appendChild(tituloCarne);

    listaAdicionais.before(secaoCarne);

    function atualizarTituloCarnes() {
      const faixa = obterFaixaCarnesPorValor(valorPorcao);
      tituloCarne.textContent =
        `Escolha entre ${faixa.min} e ${faixa.max} carnes (${carnesSelecionadas.length}/${faixa.max}):`;
    }

    carnesDisponiveis.forEach(carne => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn-borda";
      btn.textContent = carne;

      btn.addEventListener("click", () => {
        const jaSelecionada = carnesSelecionadas.includes(carne);

        if (jaSelecionada) {
          carnesSelecionadas = carnesSelecionadas.filter(c => c !== carne);
          btn.classList.remove("ativo");
        } else {
          const faixa = obterFaixaCarnesPorValor(valorPorcao);

          if (carnesSelecionadas.length >= faixa.max) {
            alert(`Pra essa porção (R$ ${valorPorcao.toFixed(2)}) você pode escolher no máximo ${faixa.max} carnes.`);
            return;
          }

          carnesSelecionadas.push(carne);
          btn.classList.add("ativo");
        }

        atualizarTituloCarnes();
      });

      secaoCarne.appendChild(btn);
    });

    atualizarTituloCarnes();

    // Se o valor mudar e a quantidade selecionada passar do novo máximo,
    // desmarca as carnes excedentes automaticamente.
    function ajustarSelecaoAoNovoValor() {
      const faixa = obterFaixaCarnesPorValor(valorPorcao);

      while (carnesSelecionadas.length > faixa.max) {
        const removida = carnesSelecionadas.pop();
        const botao = [...secaoCarne.querySelectorAll(".btn-borda")]
          .find(b => b.textContent === removida);
        if (botao) botao.classList.remove("ativo");
      }

      atualizarTituloCarnes();
    }

    const displayValor = secaoValorPorcao.querySelector(".valor-porcao-display");
    const btnValorMais = secaoValorPorcao.querySelector(".btn-valor-mais");
    const btnValorMenos = secaoValorPorcao.querySelector(".btn-valor-menos");

    btnValorMais.addEventListener("click", () => {
      valorPorcao += passoValor;
      displayValor.textContent = "R$ " + valorPorcao.toFixed(2);
      modalTotal.textContent = "R$ " + valorPorcao.toFixed(2);
      ajustarSelecaoAoNovoValor();
    });

    btnValorMenos.addEventListener("click", () => {
      if (valorPorcao - passoValor < produto.valorMinimo) return;
      valorPorcao -= passoValor;
      displayValor.textContent = "R$ " + valorPorcao.toFixed(2);
      modalTotal.textContent = "R$ " + valorPorcao.toFixed(2);
      ajustarSelecaoAoNovoValor();
    });

    // BOTÃO ADICIONAR
    btnAdicionarCarrinho.onclick = () => {

      const faixa = obterFaixaCarnesPorValor(valorPorcao);

      if (carnesSelecionadas.length < faixa.min) {
        alert(`Escolha pelo menos ${faixa.min} tipos de carne para essa porção.`);
        return;
      }

      const id = Date.now();

      carrinho[id] = {
        nome: produto.nome,
        preco: valorPorcao,
        qtd: 1,
        marca: "Carnes: " + carnesSelecionadas.join(" + ")
      };

      atualizarTotal();
      modal.style.display = "none";
    };
  }

  // ===============================
  // 🔹 MODAL: MARMITA COMPLETA (escolher 2 tipos de carne, disponíveis no período atual)
  // ===============================
  function criarModalMarmita(produto) {

    const limiteCarnes = 2;
    const precoBase = produto.preco;
    let carnesSelecionadas = [];

    modalPrecoBase.textContent = "Escolha 2 tipos de carne";
    modalTotal.textContent = "R$ " + precoBase.toFixed(2);

    listaAdicionais.innerHTML = "";
    const contadorSaboresEl = document.getElementById("contadorSabores");
    if (contadorSaboresEl) contadorSaboresEl.textContent = "";

    ["secaoBordas", "secaoAcompanhamento", "secaoCarne", "secaoValorPorcao", "secaoMarmitaCarnes"]
      .forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });

    const carnesDisponiveis = obterCarnesDisponiveis(produto.tiposCarne);

    const secao = document.createElement("div");
    secao.id = "secaoMarmitaCarnes";
    secao.style.cssText = "padding: 0 20px 10px;";

    const titulo = document.createElement("p");
    titulo.style.cssText = "font-weight:bold; font-size:16px; margin-bottom:10px; color:#222;";
    titulo.textContent = `Escolha ${limiteCarnes} carnes (0/${limiteCarnes}):`;
    secao.appendChild(titulo);

    function atualizarTitulo() {
      titulo.textContent = `Escolha ${limiteCarnes} carnes (${carnesSelecionadas.length}/${limiteCarnes}):`;
    }

    carnesDisponiveis.forEach(carne => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn-borda";
      btn.textContent = carne;

      btn.addEventListener("click", () => {
        const jaSelecionada = carnesSelecionadas.includes(carne);

        if (jaSelecionada) {
          carnesSelecionadas = carnesSelecionadas.filter(c => c !== carne);
          btn.classList.remove("ativo");
        } else {
          if (carnesSelecionadas.length >= limiteCarnes) {
            alert(`Escolha no máximo ${limiteCarnes} tipos de carne`);
            return;
          }
          carnesSelecionadas.push(carne);
          btn.classList.add("ativo");
        }

        atualizarTitulo();
      });

      secao.appendChild(btn);
    });

    listaAdicionais.before(secao);

    // BOTÃO ADICIONAR
    btnAdicionarCarrinho.onclick = () => {

      if (carnesSelecionadas.length !== limiteCarnes) {
        alert(`Escolha exatamente ${limiteCarnes} tipos de carne antes de adicionar`);
        return;
      }

      const id = Date.now();

      carrinho[id] = {
        nome: produto.nome,
        preco: precoBase,
        qtd: 1,
        marca: "Carnes: " + carnesSelecionadas.join(" + ")
      };

      atualizarTotal();
      modal.style.display = "none";
    };
  }

  function renderizarCategoria(categoria) {

    lista.innerHTML = "";

    const produtosDisponiveis = (loja.categorias[categoria] || []).filter(produtoDisponivelAgora);

    if (produtosDisponiveis.length === 0) {
      lista.innerHTML = `
        <p style="text-align:center; padding:40px 20px; color:#888;">
          Nada disponível aqui nesse horário.<br>
          Confira os dias e horários de funcionamento da loja.
        </p>
      `;
      return;
    }

    produtosDisponiveis.forEach(produto => {

      console.log(produto);

      const card = document.createElement("div");
      card.classList.add("produto-card");

      const baseId = produto.nome.replace(/\s/g, "").replace(/[^a-zA-Z0-9\-_]/g, "");

      let tamanhoSelecionado = produto.tamanhos ? "M" : null;

      // Monte sua Pizza: trata como produto simples no card, tamanho M fixo
      if (produto.tipo === "monte-pizza") {
        tamanhoSelecionado = "M";
      }

      let marcaSelecionada = produto.marcas
        ? Object.keys(produto.marcas)[0]
        : null;

      let precoAtual = produto.tamanhos
        ? produto.tamanhos[tamanhoSelecionado]
        : (produto.tipo === "porcao-carne" ? produto.valorMinimo : produto.preco);

      if (produto.marcas) {
        precoAtual = produto.marcas[marcaSelecionada].preco;
      }

      let imgAtual = produto.marcas
        ? produto.marcas[marcaSelecionada].img
        : produto.img;

      card.innerHTML = `
        <img src="${imgAtual}" class="produto-img" id="img-${baseId}">

        <div class="produto-info">
          <h3>${produto.nome}</h3>

          ${produto.descricao
          ? `<p class="descricao-produto">${produto.descricao}</p>`
          : ""}

          <p class="preco-produto" id="preco-${baseId}">
  ${produto.tamanhos
    ? Object.entries(produto.tamanhos).map(([tam, preco]) =>
        `<span class="preco-tamanho">${tam}: R$ ${preco.toFixed(2)}</span>`
      ).join(" | ")
    : produto.tipo === "porcao-carne"
      ? `A partir de R$ ${produto.valorMinimo.toFixed(2)}`
      : `R$ ${precoAtual.toFixed(2)}`}
</p>

          ${produto.marcas ? `
            <div class="marcas">
              ${Object.keys(produto.marcas).map(marca => `
                <button class="btn-marca ${marca === marcaSelecionada ? "ativo" : ""}" 
                        data-marca="${marca}">
                  ${marca}
                </button>
              `).join("")}
            </div>
          ` : ""}
        </div>

        <div class="controle-qtd">
  ${produto.tipo === "monte-pizza" || produto.tipo === "porcao-carne" || produto.tipo === "marmita" || produto.tamanhos || produto.adicionais
    ? `<button class="btn-qtd btn-qtd-pizza" id="mais-${baseId}">+</button>`
    : `
      <button class="btn-qtd" id="menos-${baseId}">−</button>
      <span class="qtd-numero" id="qtd-${baseId}">0</span>
      <button class="btn-qtd" id="mais-${baseId}">+</button>
    `}
</div>
      `;

      lista.appendChild(card);
      console.log(
        "TIPO:",
        produto.nome,
        produto.tipo
      );

      if (
        produto.adicionais ||
        produto.tipo === "monte-pizza" ||
        produto.tipo === "porcao-carne" ||
        produto.tipo === "marmita"
      ) {

        card.querySelector(".produto-img")
          .addEventListener(
            "click",
            () => {

              console.log(
                "CLICOU:",
                produto.nome
              );

              abrirModal(produto);

            }
          );

      }
      const qtdEl = card.querySelector(`#qtd-${baseId}`);
      const precoEl = card.querySelector(`#preco-${baseId}`);
      const imgEl = card.querySelector(`#img-${baseId}`);

      // 🔹 RESTAURAR QUANTIDADE AO TROCAR CATEGORIA
      const idInicial = gerarId(produto, tamanhoSelecionado, marcaSelecionada);
      if (carrinho[idInicial]) {
        qtdEl.textContent = carrinho[idInicial].qtd;
      }

      // TAMANHO
      if (produto.tamanhos) {
        const botoesTamanho = card.querySelectorAll(".btn-tamanho");

        botoesTamanho.forEach(btn => {
          btn.addEventListener("click", () => {

            botoesTamanho.forEach(b => b.classList.remove("ativo"));
            btn.classList.add("ativo");

            tamanhoSelecionado = btn.dataset.size;

            if (produto.tipo === "monte-pizza") {

              tamanhoPizzaPersonalizada =
                tamanhoSelecionado;

              const contador =
                document.getElementById(
                  "contadorSabores"
                );

              if (contador) {

                contador.textContent =
                  `Selecionados:
        ${saboresSelecionados.length}/${limiteSabores[
                  tamanhoPizzaPersonalizada
                  ]
                  }`;
              }
            }

            if (produto.tipo === "monte-pizza") {

              tamanhoPizzaPersonalizada =
                tamanhoSelecionado;

            }
            precoAtual = produto.tamanhos[tamanhoSelecionado];

            precoEl.textContent = "R$ " + precoAtual.toFixed(2);

            const novoId = gerarId(produto, tamanhoSelecionado, marcaSelecionada);
            qtdEl.textContent = carrinho[novoId] ? carrinho[novoId].qtd : 0;
          });
        });
      }

      // MARCA
      if (produto.marcas) {
        const botoesMarca = card.querySelectorAll(".btn-marca");

        botoesMarca.forEach(btn => {
          btn.addEventListener("click", () => {

            botoesMarca.forEach(b => b.classList.remove("ativo"));
            btn.classList.add("ativo");

            marcaSelecionada = btn.dataset.marca;
            const dados = produto.marcas[marcaSelecionada];

            imgEl.style.transform = "scale(0.95)";
            imgEl.style.opacity = "0.5";

            setTimeout(() => {
              imgEl.src = dados.img;
              precoAtual = dados.preco;
              precoEl.textContent = "R$ " + dados.preco.toFixed(2);
              imgEl.style.transform = "scale(1)";
              imgEl.style.opacity = "1";

              const novoId = gerarId(produto, tamanhoSelecionado, marcaSelecionada);
              qtdEl.textContent = carrinho[novoId] ? carrinho[novoId].qtd : 0;
            }, 150);
          });
        });
      }

      // BOTÃO +
      card.querySelector(`#mais-${baseId}`).addEventListener("click", (e) => {

        e.stopPropagation();

        // Se o produto possui adicionais OU é monte-pizza OU é porção de carne, abre o modal
        if (produto.adicionais || produto.tipo === "monte-pizza" || produto.tipo === "porcao-carne" || produto.tipo === "marmita") {
          abrirModal(produto);
          return;
        }

        // Pizzas com tamanhos mas sem adicionais (calabresa, mussarela, frango)
        if (produto.tamanhos && !produto.tipo) {
          abrirModalBorda(produto, tamanhoSelecionado, precoAtual);
          return;
        }

        const idFinal = gerarId(
          produto,
          tamanhoSelecionado,
          marcaSelecionada
        );

        if (!carrinho[idFinal]) {
          carrinho[idFinal] = {
            nome: produto.nome,
            preco: precoAtual,
            tamanho: tamanhoSelecionado,
            marca: marcaSelecionada,
            qtd: 0
          };
        }

        carrinho[idFinal].preco = precoAtual;
        carrinho[idFinal].qtd++;

        qtdEl.textContent = carrinho[idFinal].qtd;

        atualizarTotal();

      });

      // BOTÃO -
      const btnMenosCard = card.querySelector(`#menos-${baseId}`);
      if (btnMenosCard) btnMenosCard.addEventListener("click", () => {

        const idFinal = gerarId(produto, tamanhoSelecionado, marcaSelecionada);
        if (!carrinho[idFinal]) return;

        carrinho[idFinal].qtd--;

        if (carrinho[idFinal].qtd <= 0) {
          delete carrinho[idFinal];
          qtdEl.textContent = 0;
        } else {
          qtdEl.textContent = carrinho[idFinal].qtd;
        }

        atualizarTotal();
      });

    });
  }

  const categoriasBtns = document.querySelectorAll(".categoria");
  const primeira = categoriasBtns[0].textContent.trim().toLowerCase();
  renderizarCategoria(primeira);

  categoriasBtns.forEach(btn => {
    btn.addEventListener("click", () => {

      categoriasBtns.forEach(b => b.classList.remove("ativa"));
      btn.classList.add("ativa");

      const nomeCategoria = btn.textContent.trim().toLowerCase();
      renderizarCategoria(nomeCategoria);
    });
  });

});

function abrirCarrinho() {
  window.location.href = "carrinho.html";
}