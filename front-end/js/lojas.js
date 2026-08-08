const LOJAS = {

  alo_pizza: {
    nome: "Alô Pizza",

    abre: "18:00",
    fecha: "23:30",

    categorias: {

      comidas: [

        {
          nome: "Pizza Atum",
          img: "imagens/pizzaria/pizza.fra.cap.png",
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
          img: "imagens/pizzaria/pizza.calabr.png",
          descricao: "Frango, Milho Verde, Mussarela, Bacon, Azeitona e Orégano",
          tamanhos: {
            M: 40,
            F: 45
          }
        },

        {
          nome: "Pizza Carne de Sol",
          img: "imagens/pizzaria/pizza.calabr.png",
          descricao: "Carne de Sol, Mussarela, Cebola Roxa, Azeitona e Orégano",
          tamanhos: {
            M: 40,
            F: 45
          }
        },

        {
          nome: "Pizza Daniel",
          img: "imagens/pizzaria/pizza.calabr.png",
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
          img: "imagens/pizzaria/pizza.fra.cap.png",
          descricao: "Mussarela, Tomate, Manjericão, Parmesão, Cebola, Azeitona e Orégano",
          tamanhos: {
            M: 40,
            F: 45
          }
        },

        {
          nome: "Pizza Marina",
          img: "imagens/pizzaria/pizza.fra.cap.png",
          descricao: "Carne de Sol, Mussarela, Cream Cheese, Cebola Roxa, Azeitona e Orégano",
          tamanhos: {
            M: 45,
            F: 52
          }
        },

        {
          nome: "Pizza Mista",
          img: "imagens/pizzaria/pizza.fra.cap.png",
          descricao: "Presunto, Frango, Calabresa, Mussarela, Bacon, Azeitona e Orégano",
          tamanhos: {
            M: 40,
            F: 45
          }
        },

        {
          nome: "Pizza Nordestina",
          img: "imagens/pizzaria/pizza.fra.cap.png",
          descricao: "Carne na Nata, Mussarela, Cebola Roxa, Azeitona e Orégano",
          tamanhos: {
            M: 43,
            F: 50
          }
        },

        {
          nome: "Pizza Portuguesa",
          img: "imagens/pizzaria/pizza.fra.cap.png",
          descricao: "Presunto, Ovo, Cebola, Ervilha, Mussarela, Azeitona e Orégano",
          tamanhos: {
            M: 40,
            F: 45
          }
        },

        {
          nome: "Pizza Quatro Queijos",
          img: "imagens/pizzaria/pizza.mussa.png",
          descricao: "Mussarela, Catupiry, Provolone, Cheddar, Azeitona e Orégano",
          tamanhos: {
            M: 40,
            F: 45
          }
        },

        {
          nome: "Pizza Doce (Chocolate / Choc. Branco)",
          img: "imagens/pizzaria/pizza.mussa.png",
          descricao: "Chocolate ou Chocolate Branco com M&M ou Granulado",
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
          img: "imagens/pizzaria/esfiha.png",
          descricao: "Massa artesanal recheada com bacon crocante e mussarela."
        },
        {
          nome: "Esfiha Calabresa c/ Cebola",
          preco: 6.00,
          img: "imagens/pizzaria/esfiha.png",
          descricao: "Massa artesanal recheada com calabresa moída e cebola."
        },
        {
          nome: "Esfiha Carne c/ Queijo",
          preco: 6.00,
          img: "imagens/pizzaria/esfiha.png",
          descricao: "Massa artesanal recheada com carne temperada e queijo."
        },
        {
          nome: "Esfiha Carne c/ Catupiry",
          preco: 6.00,
          img: "imagens/pizzaria/esfiha.png",
          descricao: "Massa artesanal recheada com carne temperada e catupiry."
        },
        {
          nome: "Esfiha Frango c/ Catupiry",
          preco: 6.00,
          img: "imagens/pizzaria/esfiha.png",
          descricao: "Massa artesanal recheada com frango desfiado e catupiry."
        },
        {
          nome: "Esfiha Mussarela c/ Tomate",
          preco: 6.00,
          img: "imagens/pizzaria/esfiha.png",
          descricao: "Massa artesanal recheada com mussarela derretida e tomate."
        },
        {
          nome: "Esfiha Queijo",
          preco: 6.00,
          img: "imagens/pizzaria/esfiha.png",
          descricao: "Massa artesanal recheada com queijo mussarela."
        },
        {
          nome: "Esfiha Chocolate / Choc. Branco",
          preco: 6.00,
          img: "imagens/pizzaria/esfiha.png",
          descricao: "Esfiha doce com recheio de chocolate ao leite ou branco."
        },
        {
          nome: "Esfiha Nutella",
          preco: 10.00,
          img: "imagens/pizzaria/esfiha.png",
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