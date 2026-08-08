const LOJAS = {

  alo_pizza: {
    nome: "Alô Pizza",

    abre: "18:00",
    fecha: "23:30",

    categorias: {

      comidas: [

        {
          nome: "Pizza Atum",
          img: "imagens/pizzaria/pizza.atum.png",
          descricao: "Atum, Mussarela, Cebola Branca, Azeitona e Orégano",
          tamanhos: {
            M: 45,
            F: 50
          }
        },
        
        {
          nome: "Pizza Calabresa",
          img: "imagens/pizzaria/pizza.calabr.png",
          descricao: "Calabresa, Cebola Branca, Azeitona e Orégano",
          tamanhos: {
            M: 40,
            F: 45
          }
        },

        {
          nome: "Pizza Carijó",
          img: "imagens/pizzaria/frangocomcatupiry.png",
          descricao: "Frango, Milho Verde, Mussarela, Bacon, Azeitona e Orégano",
          tamanhos: {
            M: 40,
            F: 45
          }
        },

        {
          nome: "Pizza Carne de Sol",
          img: "imagens/pizzaria/carne-seca.png",
          descricao: "Carne de Sol, Mussarela, Cebola Roxa, Azeitona e Orégano",
          tamanhos: {
            M: 40,
            F: 45
          }
        },

        {
          nome: "Pizza Daniel",
          img: "imagens/pizzaria/daniel.png",
          descricao: "Frango, Cream Cheese, Mussarela, Azeitona e Orégano",
          tamanhos: {
            M: 40,
            F: 50
          }
        },

        {
          nome: "Pizza Frango com Catupiry",
          img: "imagens/pizzaria/pizza.fra.cap.png",
          descricao: "Frango, Catupiry, Azeitona e Orégano",
          tamanhos: {
            M: 40,
            F: 45
          }
        },

        {
          nome: "Pizza Marguerita",
          img: "imagens/pizzaria/nordestina-marguerita.png",
          descricao: "Mussarela, Tomate, Manjericão, Parmesão, Cebola, Azeitona e Orégano",
          tamanhos: {
            M: 40,
            F: 45
          }
        },

        {
          nome: "Pizza Marina",
          img: "imagens/pizzaria/mariana.png",
          descricao: "Carne de Sol, Mussarela, Cream Cheese, Cebola Roxa, Azeitona e Orégano",
          tamanhos: {
            M: 45,
            F: 52
          }
        },

        {
          nome: "Pizza Mista",
          img: "imagens/pizzaria/daniel.png",
          descricao: "Presunto, Frango, Calabresa, Mussarela, Bacon, Azeitona e Orégano",
          tamanhos: {
            M: 40,
            F: 45
          }
        },

        {
          nome: "Pizza Nordestina",
          img: "imagens/pizzaria/nordestina-marguerita.png",
          descricao: "Carne na Nata, Mussarela, Cebola Roxa, Azeitona e Orégano",
          tamanhos: {
            M: 43,
            F: 50
          }
        },

        {
          nome: "Pizza Portuguesa",
          img: "imagens/pizzaria/portuguesa.png",
          descricao: "Presunto, Ovo, Cebola, Ervilha, Mussarela, Azeitona e Orégano",
          tamanhos: {
            M: 40,
            F: 45
          }
        },

        {
          nome: "Pizza Quatro Queijos",
          img: "imagens/pizzaria/4queijos.png",
          descricao: "Mussarela, Catupiry, Provolone, Cheddar, Azeitona e Orégano",
          tamanhos: {
            M: 40,
            F: 45
          }
        },

        {
          nome: "Pizza Chocolate",
          img: "imagens/pizzaria/pizzadoce.png",
          descricao: "Chocolate, Acompanhamento à sua escolha",
          temAcompanhamento: true,
          tamanhos: {
            M: 40,
            F: 45
          }
        },

        {
          nome: "Pizza Chocolate Branco",
          img: "imagens/pizzaria/pizzadoceb.jpg",
          descricao: "Chocolate Branco, Acompanhamento à sua escolha",
          temAcompanhamento: true,
          tamanhos: {
            M: 40,
            F: 45
          }
        },

        {
          nome: "Monte sua Pizza!",
          tipo: "monte-pizza",
          img: "imagens/pizzaria/msp.png",

          tamanhos: {
            M: 40,
            F: 45
          },

          sabores: [
            "Atum",
            "Calabresa",
            "Carijó",
            "Carne de Sol",
            "Daniel",
            "Frango Catupiry",
            "Marguerita",
            "Marina",
            "Mista",
            "Nordestina",
            "Portuguesa",
            "Quatro Queijos",
            "Chocolate",
            "Chocolate Branco",
            "M&M",
            "Granulado"
          ]
        }

      ],

      /* CATEGORIA EXCLUSIVA PARA ESFIHAS */
      esfihas: [
        {
          nome: "Esfiha Bacon c/ Mussarela",
          preco: 6.00,
          img: "imagens/pizzaria/esfirrabm.jpg",
          descricao: "Massa artesanal recheada com bacon crocante e mussarela."
        },
        {
          nome: "Esfiha Calabresa c/ Cebola",
          preco: 6.00,
          img: "imagens/pizzaria/esfirracc.jpg",
          descricao: "Massa artesanal recheada com calabresa moída e cebola."
        },
        {
          nome: "Esfiha Carne c/ Queijo",
          preco: 6.00,
          img: "imagens/pizzaria/esfirracm.jpg",
          descricao: "Massa artesanal recheada com carne temperada e queijo."
        },
        {
          nome: "Esfiha Carne c/ Catupiry",
          preco: 6.00,
          img: "imagens/pizzaria/esfirraccc.jpg",
          descricao: "Massa artesanal recheada com carne temperada e catupiry."
        },
        {
          nome: "Esfiha Frango c/ Catupiry",
          preco: 6.00,
          img: "imagens/pizzaria/esfirrafc.jpg",
          descricao: "Massa artesanal recheada com frango desfiado e catupiry."
        },
        {
          nome: "Esfiha Mussarela c/ Tomate",
          preco: 6.00,
          img: "imagens/pizzaria/esfirramt.jpg",
          descricao: "Massa artesanal recheada com mussarela derretida e tomate."
        },
        {
          nome: "Esfiha Queijo",
          preco: 6.00,
          img: "imagens/pizzaria/esfirram.jpg",
          descricao: "Massa artesanal recheada com queijo mussarela."
        },
        {
          nome: "Esfiha Chocolate / Choc. Branco",
          preco: 6.00,
          img: "imagens/pizzaria/esfirrach.jpg",
          descricao: "Esfiha doce com recheio de chocolate ao leite ou branco."
        },
        {
          nome: "Esfiha Nutella",
          preco: 10.00,
          img: "imagens/pizzaria/esfirrant.jpg",
          descricao: "Esfiha doce recheada com creme de avelã Nutella original."
        }
      ],

      bebidas: [
        {
          nome: "Refrigerante 1L",
          marcas: {
            Coca: { preco: 12, img: "imagens/bebidas/coca.1L.png" },
            "Coca Zero": { preco: 12, img: "imagens/bebidas/coca.1LZ.png" },
            Cajuina: { preco: 12, img: "imagens/bebidas/cajuina.1L.png" },
            Guarana: { preco: 10, img: "imagens/bebidas/guara.1L.png" },
            "Guarana Zero": { preco: 10, img: "imagens/bebidas/guara.1LZ.png" }
          }
        },
        {
          nome: "Refrigerante 2L",
          marcas: {
            Coca: { preco: 16, img: "imagens/bebidas/coca.2L.png" },
            "Coca Zero": { preco: 16, img: "imagens/bebidas/coca.2Lz.png" },
            Guarana: { preco: 16, img: "imagens/bebidas/guara.2L.png" },
            Fanta: { preco: 16, img: "imagens/bebidas/fanta.2L.png" }
          }
        },
        {
          nome: "Refrigerante Lata",
          marcas: {
            Coca: { preco: 7, img: "imagens/bebidas/coca.lata.png" },
            "Coca Zero": { preco: 7, img: "imagens/bebidas/coca.lataz.png" },
            Cajuina: { preco: 7, img: "imagens/bebidas/cajuina.lata.png" },
            Guarana: { preco: 7, img: "imagens/bebidas/guara.lata.png" }
          }
        }
      ]
    }
  },

  hamburgueria: {
    nome: "Burger House",

    abre: "16:00",
    fecha: "22:35",

    categorias: {
      comidas: [
        {
          nome: "X-Burguer",
          preco: 15,
          img: "imagens/hamburgueria/x-burger.png",
          descricao: "Pão, hambúrguer, salada, ovo, queijo, presunto e salada",
          adicionais: [
            { nome: "Bacon", preco: 3 },
            { nome: "Presunto", preco: 2 },
            { nome: "Ovo", preco: 2 },
            { nome: "Queijo", preco: 3 }
          ]
        },
        {
          nome: "X-Bacon",
          preco: 18,
          img: "imagens/hamburgueria/x-bancon.jpg",
          descricao: "Pão, hambúrguer, cheddar, bacon e salada",
          adicionais: [
            { nome: "Hamburguer", preco: 3 },
            { nome: "Bacon", preco: 2 },
            { nome: "Cheddar", preco: 3 }
          ]
        },
        {
          nome: "X-Tudo",
          preco: 25,
          img: "imagens/hamburgueria/x-tudo.png",
          descricao: "Pão, hambúrguer, cheddar, bacon, presunto, ovo, calabresa e salada",
          adicionais: [
            { nome: "Bacon", preco: 3 },
            { nome: "Presunto", preco: 2 },
            { nome: "Ovo", preco: 2 },
            { nome: "Queijo Extra", preco: 3 },
            { nome: "Calabresa", preco: 4 }
          ]
        }
      ],

      bebidas: [
        {
          nome: "Refrigerante Lata",
          marcas: {
            Coca: { preco: 5, img: "imagens/bebidas/coca.lata.png" },
            Pepsi: { preco: 5, img: "imagens/bebidas/pespi.lata.png" },
            Guarana: { preco: 5, img: "imagens/bebidas/guara.lata.png" }
          }
        },
        {
          nome: "Refrigerante 1L",
          marcas: {
            Coca: { preco: 9, img: "imagens/bebidas/coca.1L.png" },
            Pepsi: { preco: 9, img: "imagens/bebidas/pespi.1L.png" },
            Guarana: { preco: 9, img: "imagens/bebidas/guara.1L.png" }
          }
        },
        {
          nome: "Refrigerante 2 Litro",
          marcas: {
            Coca: { preco: 15, img: "imagens/bebidas/coca.2L.png" },
            Pepsi: { preco: 15, img: "imagens/bebidas/pespi.2L.png" },
            Guarana: { preco: 15, img: "imagens/bebidas/guara.2L.png" }
          }
        },
        {
          nome: "Água Mineral",
          preco: 4.00,
          img: "imagens/bebidas/agua.png"
        }
      ]
    }
  },

  babacu: {
    nome: "Babaçu Steakhouse",

    // AJUSTAR: coloquei um horário provisório, me confirma o horário real de funcionamento
    abre: "17:00",
    fecha: "23:30",

    categorias: {

      lanches: [
        {
          nome: "X-Burguer",
          preco: 8.00,
          img: "imagens/babacu/x-burguer.png",
          descricao: "Pão, hambúrguer, queijo.",
          adicionais: [
            { nome: "Bacon", preco: 3 },
            { nome: "Queijo Extra", preco: 3 },
            { nome: "Presunto", preco: 2 },
            { nome: "Ovo", preco: 2 },
            { nome: "Calabresa", preco: 4 },
            { nome: "Hambúrguer Extra", preco: 5 }
          ]
        },
        {
          nome: "X-Salada",
          preco: 10.00,
          img: "imagens/babacu/x-salada.png",
          descricao: "Pão, hambúrguer, queijo, salada.",
          adicionais: [
            { nome: "Bacon", preco: 3 },
            { nome: "Queijo Extra", preco: 3 },
            { nome: "Presunto", preco: 2 },
            { nome: "Ovo", preco: 2 },
            { nome: "Calabresa", preco: 4 },
            { nome: "Hambúrguer Extra", preco: 5 }
          ]
        },
        {
          nome: "Americano",
          preco: 12.00,
          img: "imagens/babacu/americano.png",
          descricao: "Pão, presunto, queijo, salada, ovo.",
          adicionais: [
            { nome: "Bacon", preco: 3 },
            { nome: "Queijo Extra", preco: 3 },
            { nome: "Presunto Extra", preco: 2 },
            { nome: "Calabresa", preco: 4 },
            { nome: "Hambúrguer", preco: 5 }
          ]
        },
        {
          nome: "Bauru",
          preco: 8.00,
          img: "imagens/babacu/bauru.png",
          descricao: "Pão, presunto, queijo, tomate.",
          adicionais: [
            { nome: "Bacon", preco: 3 },
            { nome: "Queijo Extra", preco: 3 },
            { nome: "Presunto Extra", preco: 2 },
            { nome: "Ovo", preco: 2 },
            { nome: "Calabresa", preco: 4 }
          ]
        },
        {
          nome: "X-Egg",
          preco: 10.00,
          img: "imagens/babacu/x-egg.png",
          descricao: "Pão, queijo, ovo, hambúrguer.",
          adicionais: [
            { nome: "Bacon", preco: 3 },
            { nome: "Queijo Extra", preco: 3 },
            { nome: "Presunto", preco: 2 },
            { nome: "Ovo Extra", preco: 2 },
            { nome: "Calabresa", preco: 4 },
            { nome: "Hambúrguer Extra", preco: 5 }
          ]
        },
        {
          nome: "X-Frango",
          preco: 15.00,
          img: "imagens/babacu/x-frango.png",
          descricao: "Pão, frango, queijo, salada.",
          adicionais: [
            { nome: "Bacon", preco: 3 },
            { nome: "Queijo Extra", preco: 3 },
            { nome: "Presunto", preco: 2 },
            { nome: "Ovo", preco: 2 },
            { nome: "Frango Extra", preco: 5 }
          ]
        },
        {
          nome: "X-Bacon",
          preco: 15.00,
          img: "imagens/babacu/x-bacon.png",
          descricao: "Pão, hambúrguer, bacon, queijo, salada.",
          adicionais: [
            { nome: "Bacon Extra", preco: 3 },
            { nome: "Queijo Extra", preco: 3 },
            { nome: "Presunto", preco: 2 },
            { nome: "Ovo", preco: 2 },
            { nome: "Hambúrguer Extra", preco: 5 }
          ]
        },
        {
          nome: "X-Calabresa",
          preco: 15.00,
          img: "imagens/babacu/x-calabresa.png",
          descricao: "Pão, hambúrguer, calabresa, queijo, salada.",
          adicionais: [
            { nome: "Bacon", preco: 3 },
            { nome: "Queijo Extra", preco: 3 },
            { nome: "Presunto", preco: 2 },
            { nome: "Ovo", preco: 2 },
            { nome: "Calabresa Extra", preco: 4 },
            { nome: "Hambúrguer Extra", preco: 5 }
          ]
        },
        {
          nome: "X-Carne",
          preco: 18.00,
          img: "imagens/babacu/x-carne.png",
          descricao: "Pão, carne, queijo, salada.",
          adicionais: [
            { nome: "Bacon", preco: 3 },
            { nome: "Queijo Extra", preco: 3 },
            { nome: "Presunto", preco: 2 },
            { nome: "Ovo", preco: 2 },
            { nome: "Carne Extra", preco: 6 }
          ]
        },
        {
          nome: "X-Tudo",
          preco: 18.00,
          img: "imagens/babacu/x-tudo.png",
          descricao: "Pão, hambúrguer, presunto, queijo, ovo, bacon, calabresa, frango e salada.",
          adicionais: [
            { nome: "Bacon Extra", preco: 3 },
            { nome: "Presunto Extra", preco: 2 },
            { nome: "Ovo Extra", preco: 2 },
            { nome: "Queijo Extra", preco: 3 },
            { nome: "Calabresa Extra", preco: 4 },
            { nome: "Hambúrguer Extra", preco: 5 }
          ]
        },
        {
          nome: "Completão",
          preco: 26.00,
          img: "imagens/babacu/completao.png",
          descricao: "Pão, 2 hambúrgueres, presunto, queijo, 2 ovos, bacon, calabresa, frango e salada.",
          adicionais: [
            { nome: "Bacon Extra", preco: 3 },
            { nome: "Presunto Extra", preco: 2 },
            { nome: "Ovo Extra", preco: 2 },
            { nome: "Queijo Extra", preco: 3 },
            { nome: "Calabresa Extra", preco: 4 },
            { nome: "Hambúrguer Extra", preco: 5 }
          ]
        }
      ],

      "menu da casa": [
        {
          nome: "Crepe Carne de Sol",
          preco: 17.00,
          img: "imagens/babacu/crepe-carne-de-sol.png",
          descricao: "Carne de sol, queijo, catupiry, milho, ervilha e orégano."
        },
        {
          nome: "Crepe Click",
          preco: 15.00,
          img: "imagens/babacu/crepe-click.png",
          descricao: "Frango, catupiry, orégano e tomate."
        },
        {
          nome: "Crepe Calabresa",
          preco: 15.00,
          img: "imagens/babacu/crepe-calabresa.png",
          descricao: "Calabresa, queijo, cebola, milho, ervilha, tomate e orégano."
        },
        {
          nome: "Crepe Suíço",
          preco: 15.00,
          img: "imagens/babacu/crepe-suico.png",
          descricao: "Queijo, presunto, tomate, milho, ervilha e orégano."
        },
        {
          nome: "Crepe da Casa",
          preco: 20.00,
          img: "imagens/babacu/crepe-da-casa.png",
          descricao: "Carne de sol, presunto, frango, tomate, milho e ervilha."
        },
        {
          nome: "Cuscuz Carne de Sol",
          preco: 16.00,
          img: "imagens/babacu/cuscuz-carne-de-sol.png",
          descricao: "Cuscuz acompanhado de carne de sol."
        },
        {
          nome: "Cuscuz Frango",
          preco: 15.00,
          img: "imagens/babacu/cuscuz-frango.png",
          descricao: "Cuscuz acompanhado de frango desfiado."
        },
        {
          nome: "Batata Normal",
          preco: 15.00,
          img: "imagens/babacu/batata-normal.png",
          descricao: "Porção de batata frita tradicional."
        },
        {
          nome: "Batata Recheada",
          preco: 28.00,
          img: "imagens/babacu/batata-recheada.png",
          descricao: "Bacon, calabresa e cheddar."
        },
        {
          nome: "Arroz de Leite",
          preco: 8.00,
          img: "imagens/babacu/arroz-de-leite.png",
          descricao: "Porção de arroz de leite."
        },
        {
          nome: "Baião Cremoso",
          preco: 8.00,
          img: "imagens/babacu/baiao-cremoso.png",
          descricao: "Porção de baião cremoso."
        },
        {
          nome: "Porção de Carne",
          tipo: "porcao-carne",
          img: "imagens/babacu/porcao-carne.png",
          descricao: "Escolha o tipo de carne e o valor da sua porção. Acompanha farofa e vinagrete.",
          valorMinimo: 10.00,
          tiposCarne: [
            "Boi",
            "Porco",
            "Frango",
            "Linguiça",
            "Cupim",
            "Carneiro",
            "Coração de Boi",
            "Coração de Frango",
            "Língua de Boi"
          ]
        }
      ],

      bebidas: [
        {
          nome: "Refrigerante Lata",
          marcas: {
            Coca: { preco: 6, img: "imagens/babacu/bebidas/coca.lata.png" },
            Guarana: { preco: 6, img: "imagens/babacu/bebidas/guara.lata.png" },
            Soda: { preco: 6, img: "imagens/babacu/bebidas/soda.lata.png" },
            Fanta: { preco: 6, img: "imagens/babacu/bebidas/fanta.lata.png" },
            "Coca Zero": { preco: 6, img: "imagens/babacu/bebidas/coca.lataz.png" },
            "Guarana Zero": { preco: 6, img: "imagens/babacu/bebidas/guara.lataz.png" },
            Schweppes: { preco: 6, img: "imagens/babacu/bebidas/schweppes.lata.png" }
          }
        },
        {
          nome: "Refrigerante Litro",
          marcas: {
            Coca: { preco: 10, img: "imagens/babacu/bebidas/coca.1L.png" },
            Guarana: { preco: 10, img: "imagens/babacu/bebidas/guara.1L.png" },
            Soda: { preco: 10, img: "imagens/babacu/bebidas/soda.1L.png" },
            Fanta: { preco: 10, img: "imagens/babacu/bebidas/fanta.1L.png" },
            "Coca Zero": { preco: 10, img: "imagens/babacu/bebidas/coca.1Lz.png" },
            "Guarana Zero": { preco: 10, img: "imagens/babacu/bebidas/guara.1Lz.png" },
            Cajuina: { preco: 10, img: "imagens/babacu/bebidas/cajuina.1L.png" }
          }
        },
        {
          nome: "Cerveja 300ml",
          marcas: {
            Brahma: { preco: 5, img: "imagens/babacu/bebidas/brahma.300.png" },
            Skol: { preco: 5, img: "imagens/babacu/bebidas/skol.300.png" }
          }
        },
        {
          nome: "Long Neck",
          marcas: {
            Heineken: { preco: 10, img: "imagens/babacu/bebidas/heineken.png" },
            Stella: { preco: 10, img: "imagens/babacu/bebidas/stella.png" },
            Budweiser: { preco: 10, img: "imagens/babacu/bebidas/budweiser.png" },
            "Cabaré Ice": { preco: 10, img: "imagens/babacu/bebidas/cabare-ice.png" },
            Corona: { preco: 10, img: "imagens/babacu/bebidas/corona.png" },
            "Michelob Ultra": { preco: 10, img: "imagens/babacu/bebidas/michelob-ultra.png" }
          }
        }
      ]
    }
  }

};

const enderecoSalvo = localStorage.getItem("enderecoUsuario");
const enderecoLoja = document.getElementById("endereco-usuario");
const tipoEntregaAtual = localStorage.getItem("tipoEntrega") || "entrega";

if (enderecoLoja) {
  const blocoEnderecoLoja = enderecoLoja.closest(".endereco-loja") || enderecoLoja;

  if (tipoEntregaAtual === "retirada") {
    blocoEnderecoLoja.style.display = "none";
  } else {
    blocoEnderecoLoja.style.display = "";
    if (enderecoSalvo) enderecoLoja.textContent = enderecoSalvo;
  }
}