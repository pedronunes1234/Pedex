const LOJAS = {

  alo_pizza: {
    nome: "Alô Pizza",

    abre: "18:00",
    fecha: "23:30",

    categorias: {

      comidas: [

        {
          nome: "Pizza Quatro Queijos",
          img: "imagens/pizzaria/4queijos.png",
          descricao: "Mussarela, Catupiry, Provolone, Cheddar, Orégano e Azeitona.",
          tamanhos: {
            P: 30,
            M: 40,
            F: 45
          }
        },
        {
          nome: "Pizza Atum",
          img: "imagens/pizzaria/pizza.atum.png",
          descricao: "Atum, Mussarela, Cebola Branca, Orégano e Azeitona.",
          tamanhos: {
            P: 32,
            M: 45,
            F: 50
          }
        },
        {
          nome: "Pizza Calabresa",
          img: "imagens/pizzaria/pizza.calabr.png",
          descricao: "Calabresa, Cebola Branca, Orégano e Azeitona.",
          tamanhos: {
            P: 30,
            M: 40,
            F: 45
          }
        },
        {
          nome: "Pizza Nordestina",
          img: "imagens/pizzaria/nordestina-marguerita.png",
          descricao: "Carne na Nata, Mussarela, Cebola Roxa, Orégano e Azeitona.",
          tamanhos: {
            P: 32,
            M: 45,
            F: 50
          }
        },
        {
          nome: "Pizza Marina",
          img: "imagens/pizzaria/mariana.png",
          descricao: "Carne de Sol, Mussarela, Cream Cheese, Cebola Roxa, Orégano e Azeitona.",
          tamanhos: {
            P: 32,
            M: 45,
            F: 52
          }
        },
        {
          nome: "Pizza Carijó",
          img: "imagens/pizzaria/frangocomcatupiry.png",
          descricao: "Frango, Milho Verde, Mussarela, Bacon, Orégano e Azeitona.",
          tamanhos: {
            P: 30,
            M: 40,
            F: 45
          }
        },
        {
          nome: "Pizza Especial",
          img: "imagens/pizzaria/daniel.png",
          descricao: "Presunto, Ovo, Calabresa, Cebola, Mussarela, Bacon, Orégano e Azeitona.",
          tamanhos: {
            P: 30,
            M: 40,
            F: 45
          }
        },
        {
          nome: "Pizza Americana",
          img: "imagens/pizzaria/portuguesa.png",
          descricao: "Presunto, Ovo, Mussarela, Orégano e Azeitona.",
          tamanhos: {
            P: 30,
            M: 40,
            F: 45
          }
        },
        {
          nome: "Pizza Marguerita",
          img: "imagens/pizzaria/nordestina-marguerita.png",
          descricao: "Mussarela, Tomate, Manjericão, Parmesão, Cebola, Orégano e Azeitona.",
          tamanhos: {
            P: 30,
            M: 40,
            F: 45
          }
        },
        {
          nome: "Pizza Portuguesa",
          img: "imagens/pizzaria/portuguesa.png",
          descricao: "Presunto, Ovo, Cebola, Ervilha, Mussarela, Orégano e Azeitona.",
          tamanhos: {
            P: 30,
            M: 40,
            F: 45
          }
        },
        {
          nome: "Pizza Mista",
          img: "imagens/pizzaria/daniel.png",
          descricao: "Presunto, Frango, Calabresa, Mussarela, Bacon, Orégano e Azeitona.",
          tamanhos: {
            P: 30,
            M: 40,
            F: 45
          }
        },
        {
          nome: "Pizza Frango c/ Catupiry",
          img: "imagens/pizzaria/pizza.fra.cap.png",
          descricao: "Frango, Catupiry, Orégano e Azeitona.",
          tamanhos: {
            P: 30,
            M: 40,
            F: 45
          }
        },
        {
          nome: "Pizza Carne de Sol",
          img: "imagens/pizzaria/carne-seca.png",
          descricao: "Carne de Sol, Mussarela, Cebola Roxa, Orégano e Azeitona.",
          tamanhos: {
            P: 30,
            M: 40,
            F: 45
          }
        },
        {
          nome: "Pizza Frango Cremoso",
          img: "imagens/pizzaria/frangocomcatupiry.png",
          descricao: "Frango, Cream Cheese, Requeijão Cremoso, Mussarela, Orégano e Azeitona.",
          tamanhos: {
            P: 32,
            M: 45,
            F: 52
          }
        },
        {
          nome: "Pizza Defumada",
          img: "imagens/pizzaria/pizza.calabr.png",
          descricao: "Mussarela, Bacon, Orégano e Azeitona.",
          tamanhos: {
            P: 30,
            M: 40,
            F: 45
          }
        },
        {
          nome: "Pizza Calabresa c/ Queijo",
          img: "imagens/pizzaria/pizza.calabr.png",
          descricao: "Calabresa, Mussarela, Orégano e Azeitona.",
          tamanhos: {
            P: 30,
            M: 40,
            F: 45
          }
        },
        {
          nome: "Pizza Daniel",
          img: "imagens/pizzaria/daniel.png",
          descricao: "Carne de Sol, Requeijão Cremoso, Cream Cheese, Mussarela, Cebola Roxa, Orégano e Azeitona.",
          tamanhos: {
            P: 32,
            M: 45,
            F: 52
          }
        },
        {
          nome: "Pizza Chocolate",
          img: "imagens/pizzaria/pizzadoce.png",
          descricao: "Chocolate, Acompanhamento à sua escolha (M&M ou Granulado).",
          temAcompanhamento: true,
          tamanhos: {
            P: 30,
            M: 40,
            F: 45
          }
        },
        {
          nome: "Pizza Chocolate Branco",
          img: "imagens/pizzaria/pizzadoceb.jpg",
          descricao: "Chocolate Branco, Acompanhamento à sua escolha (M&M ou Granulado).",
          temAcompanhamento: true,
          tamanhos: {
            P: 30,
            M: 40,
            F: 45
          }
        },

        {
          nome: "Monte sua Pizza!",
          tipo: "monte-pizza",
          img: "imagens/pizzaria/msp.png",

          tamanhos: {
            P: 30,
            M: 40,
            F: 45
          },

          sabores: [
            "Quatro Queijos",
            "Atum",
            "Calabresa",
            "Nordestina",
            "Marina",
            "Carijó",
            "Especial",
            "Americana",
            "Marguerita",
            "Portuguesa",
            "Mista",
            "Frango c/ Catupiry",
            "Carne de Sol",
            "Frango Cremoso",
            "Defumada",
            "Calabresa c/ Queijo",
            "Daniel",
            "Chocolate",
            "Chocolate Branco"
          ]
        }

      ],

      /* NOVA CATEGORIA: LANCHES */
      lanches: [
        {
          nome: "X Burguer",
          preco: 12.00,
          img: "imagens/hamburgueria/x-burger.png",
          descricao: "Pão de hambúrguer, hambúrguer artesanal e queijo coalho."
        },
        {
          nome: "X Salada",
          preco: 14.00,
          img: "imagens/hamburgueria/x-burger.png",
          descricao: "Pão de hambúrguer, hambúrguer artesanal, queijo coalho, alface, tomate, cebola e maionese."
        },
        {
          nome: "X Bacon",
          preco: 15.00,
          img: "imagens/hamburgueria/x-bancon.jpg",
          descricao: "Pão de hambúrguer, hambúrguer artesanal, queijo coalho, bacon, salada e maionese."
        },
        {
          nome: "X Egg",
          preco: 15.00,
          img: "imagens/hamburgueria/x-burger.png",
          descricao: "Pão de hambúrguer, hambúrguer artesanal, queijo coalho, ovo, salada e maionese."
        },
        {
          nome: "X Tudo",
          preco: 17.00,
          img: "imagens/hamburgueria/x-tudo.png",
          descricao: "Pão de hambúrguer, hambúrguer artesanal, queijo coalho, ovo, salada e maionese."
        },
        {
          nome: "X Calabresa",
          preco: 16.00,
          img: "imagens/hamburgueria/x-burger.png",
          descricao: "Pão de hambúrguer, hambúrguer artesanal, queijo coalho, calabresa, salada, bacon e maionese."
        },
        {
          nome: "X Misto",
          preco: 16.00,
          img: "imagens/hamburgueria/x-burger.png",
          descricao: "Pão de hambúrguer, hambúrguer artesanal, queijo coalho, presunto e maionese."
        },
        {
          nome: "X Duplo",
          preco: 30.00,
          img: "imagens/hamburgueria/x-tudo.png",
          descricao: "Pão de hambúrguer, hambúrguer artesanal, queijo coalho, ovo, presunto, salada e maionese."
        },
        {
          nome: "X Moda da Casa",
          preco: 18.00,
          img: "imagens/hamburgueria/x-tudo.png",
          descricao: "Pão de hambúrguer, hambúrguer artesanal, queijo coalho, ovo, calabresa, tomate, alface, cebola e maionese."
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

  pizzaria: {
    nome: "Peixodá Pizzaria",

    abre: "18:00",
    fecha: "23:30",

    categorias: {

      comidas: [

        {
          nome: "Pizza Atum",
          img: "imagens/pizzaria/pizza.fra.cap.png",
          descricao: "Atum, Mussarela, Cebola Branca, azeitona e orégano",
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
          descricao: "Frango, Creme Cheese, Mussarela, Azeitona e Orégano",
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
          descricao: "Carne de Sol, Mussarela, Creme Cheese, Cebola Roxa, Azeitona e Orégano",
          tamanhos: {
            M: 45,
            F: 52
          }
        },

        {
          nome: "Pizza Mista",
          img: "imagens/pizzaria/pizza.fra.cap.png",
          descricao: "Presunto, Frango, Calabresa, Mussarela, Bacon, Azeitona, Orégano",
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
          descricao: "Queijos: Mussarela, Provolone, Cheddar, Catupiry + Azeitona e Orégano",
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
            P: 35,
            M: 45,
            G: 55
          },

          sabores: [
            "Atum",
            "Calabresa",
            "Carijó",
            "Carne de Sol",
            "Daniel",
            "Frango Catupiry",
            "Marquerita",
            "Mista",
            "Marina",
            "Portuguesa",
            "Quatro Queijos"
          ]
        }
      ],

      bebidas: [
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
          nome: "Refrigerante Lata",
          marcas: {
            Coca: { preco: 5, img: "imagens/bebidas/coca.lata.png" },
            Pepsi: { preco: 5, img: "imagens/bebidas/pespi.lata.png" },
            Guarana: { preco: 5, img: "imagens/bebidas/guara.lata.png" }
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

    horarios: {
      5: [
        { id: "sexta-noite", periodo: "noite", inicio: "18:00", fim: "00:00" }
      ],
      6: [
        { id: "sabado-manha", periodo: "manha", inicio: "10:00", fim: "13:00" },
        { id: "sabado-noite", periodo: "noite", inicio: "18:00", fim: "00:00" }
      ],
      0: [
        { id: "domingo-manha", periodo: "manha", inicio: "10:00", fim: "13:00" }
      ]
    },

    produtosPorPeriodo: {
      "sexta-noite": ["lanche", "porcao"],
      "sabado-manha": ["marmita", "porcao", "arroz-leite"],
      "sabado-noite": ["lanche", "porcao"],
      "domingo-manha": ["marmita", "porcao", "arroz-leite"]
    },

    carnesPorPeriodo: {
      "sexta-noite": ["Boi", "Porco", "Frango", "Linguiça", "Coração de Frango", "Coração de Boi", "Língua de Boi"],
      "sabado-manha": ["Boi", "Porco", "Frango", "Linguiça"],
      "sabado-noite": ["Boi", "Porco", "Frango", "Linguiça", "Cupim", "Coração de Frango", "Coração de Boi", "Língua de Boi"],
      "domingo-manha": ["Boi", "Porco", "Frango", "Linguiça", "Cupim", "Carneiro"]
    },

    categorias: {

      lanches: [
        {
          nome: "X-Burguer",
          preco: 8.00,
          img: "imagens/babacu/x-burguer.png",
          descricao: "Pão, hambúrguer, queijo.",
          tag: "lanche",
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
          tag: "lanche",
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
          tag: "lanche",
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
          tag: "lanche",
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
          preco: 12.00,
          img: "imagens/babacu/x-egg.png",
          descricao: "Pão, queijo, ovo, hambúrguer.",
          tag: "lanche",
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
          tag: "lanche",
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
          tag: "lanche",
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
          tag: "lanche",
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
          tag: "lanche",
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
          tag: "lanche",
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
          tag: "lanche",
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
          descricao: "Porção de arroz de leite.",
          tag: "arroz-leite"
        },
        {
          nome: "Baião Cremoso",
          preco: 8.00,
          img: "imagens/babacu/baiao-cremoso.png",
          descricao: "Porção de baião cremoso."
        },
        {
          nome: "Marmita Completa",
          tipo: "marmita",
          preco: 18.00,
          img: "imagens/babacu/marmita-completa.png",
          descricao: "Arroz branco, farofa de feijão, macarrão, salada e batata-doce. Escolha 2 tipos de carne.",
          tag: "marmita"
        },
        {
          nome: "Porção de Carne",
          tipo: "porcao-carne",
          img: "imagens/babacu/porcao-carne.png",
          descricao: "Escolha o tipo de carne e o valor da sua porção. Acompanha farofa e vinagrete.",
          valorMinimo: 10.00,
          tag: "porcao"
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
  },

  della_mama: {
    nome: "Della Mama Pizzaria",

    abre: "18:00",
    fecha: "23:59",

    // Bordas próprias da Della Mama (preços diferentes do padrão das outras lojas)
    bordas: [
      { nome: "Sem borda", preco: 0 },
      { nome: "Borda de Catupiry", preco: 7 },
      { nome: "Borda de Cheddar", preco: 7 },
      { nome: "Borda de Chocolate", preco: 9 },
      { nome: "Borda de Creme Cheese", preco: 10 }
    ],

    categorias: {

      comidas: [

        {
          nome: "Alemã",
          img: "imagens/dellamama/alema.png",
          descricao: "Mussarela, bacon, parmesão, azeitona.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "A Moda do Pizzaiolo",
          img: "imagens/dellamama/a-moda-do-pizzaiolo.png",
          descricao: "Calabresa moída, ovo, ervilha, cebola coberta com catupiry.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "A Moda do Chefe",
          img: "imagens/dellamama/a-moda-do-chefe.png",
          descricao: "Frango, brócolis, bacon, cebola, mussarela.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Alteza",
          img: "imagens/dellamama/alteza.png",
          descricao: "Frango, palmito, ervilha e coberta com mussarela.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Americana",
          img: "imagens/dellamama/americana.png",
          descricao: "Presunto picado, palmito, ervilha, cebola coberta com mussarela.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Bacon",
          img: "imagens/dellamama/bacon.png",
          descricao: "Mussarela, bacon, azeitona e orégano.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Baiacatu",
          img: "imagens/dellamama/baiacatu.png",
          descricao: "Calabresa moída, molho de pimenta e catupiry.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Baiana I",
          img: "imagens/dellamama/baiana-i.png",
          descricao: "Calabresa moída, ovo, molho de pimenta, cebola e mussarela.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Baiana II",
          img: "imagens/dellamama/baiana-ii.png",
          descricao: "Calabresa moída, ovo, molho de pimenta, cebola, parmesão e tomate.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Bauru",
          img: "imagens/dellamama/bauru.png",
          descricao: "Presunto, tomate e mussarela.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Bariloche",
          img: "imagens/dellamama/bariloche.png",
          descricao: "Calabresa, ovo, cebola e catupiry.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Branca",
          img: "imagens/dellamama/branca.png",
          descricao: "Mussarela, palmito, catupiry, azeitona e orégano.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Caipira",
          img: "imagens/dellamama/caipira.png",
          descricao: "Peito de frango desfiado, milho, azeitona, orégano e catupiry.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Calabacon",
          img: "imagens/dellamama/calabacon.png",
          descricao: "Calabresa e bacon com cobertura de mussarela.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Calabresa",
          img: "imagens/dellamama/calabresa.png",
          descricao: "Calabresa fatiada, cebola, azeitona e orégano.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Calafrango",
          img: "imagens/dellamama/calafrango.png",
          descricao: "Frango, calabresa e mussarela.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Carijó",
          img: "imagens/dellamama/carijo.png",
          descricao: "Frango, bacon, mussarela, catupiry, azeitona e orégano.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Carne Seca",
          img: "imagens/dellamama/carne-seca.png",
          descricao: "Carne seca temperada, cebola, mussarela ou catupiry.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Catufrango",
          img: "imagens/dellamama/catufrango.png",
          descricao: "Peito de frango desfiado, catupiry, azeitona e orégano.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Chilena",
          img: "imagens/dellamama/chilena.png",
          descricao: "Mussarela com calabresa, azeitona e orégano.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Dois Queijos",
          img: "imagens/dellamama/dois-queijos.png",
          descricao: "Mussarela e catupiry.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Especial",
          img: "imagens/dellamama/especial.png",
          descricao: "Presunto, bacon, ovo, cebola, calabresa e mussarela.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Eloá e Elouise",
          img: "imagens/dellamama/eloa-e-elouise.png",
          descricao: "Presunto, calabresa, palmito, cebola e mussarela.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Francesa",
          img: "imagens/dellamama/francesa.png",
          descricao: "Presunto, ovo, catupiry, azeitona e orégano coberto com mussarela.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Frango",
          img: "imagens/dellamama/frango.png",
          descricao: "Frango desfiado e cebola.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Jardineira",
          img: "imagens/dellamama/jardineira.png",
          descricao: "Presunto picado, ervilha, milho verde e mussarela.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "La Grazia",
          img: "imagens/dellamama/la-grazia.png",
          descricao: "Frango desfiado, mussarela e bacon.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Lisboa",
          img: "imagens/dellamama/lisboa.png",
          descricao: "Calabresa fatiada e cebola coberta com catupiry.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Maria Bonita",
          img: "imagens/dellamama/maria-bonita.png",
          descricao: "Calabresa moída, milho verde, ovo, bacon e cebola.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Milho Verde",
          img: "imagens/dellamama/milho-verde.png",
          descricao: "Milho verde, orégano e azeitona coberto com mussarela.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Modinha",
          img: "imagens/dellamama/modinha.png",
          descricao: "Presunto picado, azeitona verde picada, catupiry, ovo e mussarela.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Mussarela",
          img: "imagens/dellamama/mussarela.png",
          descricao: "Mussarela, azeitona e orégano.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Mussarela Crocante",
          img: "imagens/dellamama/mussarela-crocante.png",
          descricao: "Mussarela, tomate e batata palha.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Napolitana",
          img: "imagens/dellamama/napolitana.png",
          descricao: "Mussarela, rodela de tomate, queijo parmesão ralado e orégano.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Paulista",
          img: "imagens/dellamama/paulista.png",
          descricao: "Molho de tomate, calabresa moída, ervilha, cebola, azeitona e mussarela.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Pichinina",
          img: "imagens/dellamama/pichinina.png",
          descricao: "Calabresa fatiada, cebola e mussarela.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Popozuda",
          img: "imagens/dellamama/popozuda.png",
          descricao: "Presunto, bacon, palmito, ovo, ervilha, cebola e catupiry.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Portuguesa",
          img: "imagens/dellamama/portuguesa.png",
          descricao: "Presunto, ovo, ervilha, cebola e orégano coberto com mussarela.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Quatro Queijos",
          img: "imagens/dellamama/quatro-queijos.png",
          descricao: "Mussarela, provolone, catupiry, parmesão, azeitona e orégano.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Toscana",
          img: "imagens/dellamama/toscana.png",
          descricao: "Calabresa moída com cobertura de mussarela.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Veneza",
          img: "imagens/dellamama/veneza.png",
          descricao: "Molho de tomate, presunto, mussarela e orégano.",
          tamanhos: { P: 25, M: 35, F: 43 }
        },
        {
          nome: "Camarão",
          img: "imagens/dellamama/camarao.png",
          descricao: "Camarão temperado e cebola coberta com mussarela. (Pizza especial)",
          tamanhos: { P: 35, M: 44, F: 54 }
        },
        {
          nome: "Atum",
          img: "imagens/dellamama/atum.png",
          descricao: "Atum e cebola coberta com mussarela. (Pizza especial)",
          tamanhos: { P: 31, M: 40, F: 49 }
        },
        {
          nome: "Pepperoni",
          img: "imagens/dellamama/pepperoni.png",
          descricao: "Pepperoni, mussarela e cebola. (Pizza especial)",
          tamanhos: { P: 35, M: 44, F: 54 }
        },
        {
          nome: "Babelle",
          img: "imagens/dellamama/babelle.png",
          descricao: "Lombo, cebola, coberto com mussarela. (Pizza especial)",
          tamanhos: { P: 31, M: 40, F: 49 }
        },
        {
          nome: "Moda da Casa",
          img: "imagens/dellamama/moda-da-casa.png",
          descricao: "Frango, bacon, cebola, creme cheese, mussarela. (Pizza especial)",
          tamanhos: { P: 31, M: 40, F: 49 }
        },
        {
          nome: "Nordestina Della Mama",
          img: "imagens/dellamama/nordestina-della-mama.png",
          descricao: "Carne seca, cebola, mussarela, creme cheese. (Pizza especial)",
          tamanhos: { P: 31, M: 40, F: 49 }
        },
        {
          nome: "Monte sua Pizza!",
          tipo: "monte-pizza",
          img: "imagens/dellamama/monte-sua-pizza.png",
          tamanhos: { P: 25, M: 35, F: 43 },
          // Se o cliente escolher algum sabor especial, o preço da pizza
          // passa a usar o valor desse sabor (o maior entre os escolhidos)
          precosPorSabor: {
            "Camarão": { P: 35, M: 44, F: 54 },
            "Atum": { P: 31, M: 40, F: 49 },
            "Pepperoni": { P: 35, M: 44, F: 54 },
            "Babelle": { P: 31, M: 40, F: 49 },
            "Moda da Casa": { P: 31, M: 40, F: 49 },
            "Nordestina Della Mama": { P: 31, M: 40, F: 49 }
          },
          sabores: [
            "Alemã",
            "A Moda do Pizzaiolo",
            "A Moda do Chefe",
            "Alteza",
            "Americana",
            "Bacon",
            "Baiacatu",
            "Baiana I",
            "Baiana II",
            "Bauru",
            "Bariloche",
            "Branca",
            "Caipira",
            "Calabacon",
            "Calabresa",
            "Calafrango",
            "Carijó",
            "Carne Seca",
            "Catufrango",
            "Chilena",
            "Dois Queijos",
            "Especial",
            "Eloá e Elouise",
            "Francesa",
            "Frango",
            "Jardineira",
            "La Grazia",
            "Lisboa",
            "Maria Bonita",
            "Milho Verde",
            "Modinha",
            "Mussarela",
            "Mussarela Crocante",
            "Napolitana",
            "Paulista",
            "Pichinina",
            "Popozuda",
            "Portuguesa",
            "Quatro Queijos",
            "Toscana",
            "Veneza",
            "Camarão",
            "Atum",
            "Pepperoni",
            "Babelle",
            "Moda da Casa",
            "Nordestina Della Mama"
          ]
        }

      ],

      esfihas: [
        {
          nome: "Esfiha Carne",
          preco: 5.50,
          img: "imagens/dellamama/esfiha-carne.png",
          descricao: "Carne."
        },
        {
          nome: "Esfiha Queijo",
          preco: 5.50,
          img: "imagens/dellamama/esfiha-queijo.png",
          descricao: "Queijo."
        },
        {
          nome: "Esfiha Calabresa",
          preco: 5.50,
          img: "imagens/dellamama/esfiha-calabresa.png",
          descricao: "Calabresa."
        },
        {
          nome: "Esfiha Frango com Catupiry",
          preco: 5.50,
          img: "imagens/dellamama/esfiha-frango-com-catupiry.png",
          descricao: "Frango com Catupiry."
        },
        {
          nome: "Esfiha Carne com Queijo",
          preco: 5.50,
          img: "imagens/dellamama/esfiha-carne-com-queijo.png",
          descricao: "Carne com Queijo."
        },
        {
          nome: "Esfiha Calabresa com Queijo",
          preco: 5.50,
          img: "imagens/dellamama/esfiha-calabresa-com-queijo.png",
          descricao: "Calabresa com Queijo."
        },
        {
          nome: "Esfiha Chocolate",
          preco: 6.50,
          img: "imagens/dellamama/esfiha-chocolate.png",
          descricao: "Chocolate."
        },
        {
          nome: "Esfiha Chocolate com M&M",
          preco: 6.50,
          img: "imagens/dellamama/esfiha-chocolate-com-m-m.png",
          descricao: "Chocolate com M&M."
        },
        {
          nome: "Esfiha Chocolate com Brigadeiro",
          preco: 6.50,
          img: "imagens/dellamama/esfiha-chocolate-com-brigadeiro.png",
          descricao: "Chocolate com Brigadeiro."
        },
        {
          nome: "Esfiha Chocolate com Leite Condensado e Coco Ralado",
          preco: 8.50,
          img: "imagens/dellamama/esfiha-chocolate-com-leite-condensado-e-coco-ralado.png",
          descricao: "Chocolate com Leite Condensado e Coco Ralado."
        },
        {
          nome: "Esfiha Chocolate com Morango e Granulado",
          preco: 8.50,
          img: "imagens/dellamama/esfiha-chocolate-com-morango-e-granulado.png",
          descricao: "Chocolate com Morango e Granulado."
        },
        {
          nome: "Esfiha Sonho de Valsa com Chocolate",
          preco: 9.50,
          img: "imagens/dellamama/esfiha-sonho-de-valsa-com-chocolate.png",
          descricao: "Sonho de Valsa com Chocolate."
        },
        {
          nome: "Esfiha Chocolate Branco com M&M",
          preco: 7.00,
          img: "imagens/dellamama/esfiha-chocolate-branco-com-m-m.png",
          descricao: "Chocolate Branco com M&M."
        },
        {
          nome: "Esfiha Nutella",
          preco: 10.00,
          img: "imagens/dellamama/esfiha-nutella.png",
          descricao: "Nutella."
        },
        {
          nome: "Esfiha Nutella com M&M",
          preco: 11.00,
          img: "imagens/dellamama/esfiha-nutella-com-m-m.png",
          descricao: "Nutella com M&M."
        },
        {
          nome: "Esfiha Nutella com Brigadeiro",
          preco: 11.00,
          img: "imagens/dellamama/esfiha-nutella-com-brigadeiro.png",
          descricao: "Nutella com Brigadeiro."
        }
      ],

      "porções": [
        {
          nome: "Porção Boi",
          preco: 23.00,
          img: "imagens/dellamama/porcao-boi.png"
        },
        {
          nome: "Porção Frango",
          preco: 20.00,
          img: "imagens/dellamama/porcao-frango.png"
        },
        {
          nome: "Porção Calabresa",
          preco: 22.00,
          img: "imagens/dellamama/porcao-calabresa.png"
        },
        {
          nome: "Porção Mista",
          preco: 40.00,
          img: "imagens/dellamama/porcao-mista.png",
          descricao: "Calabresa, boi e frango."
        },
        {
          nome: "Porção Batata",
          preco: 14.00,
          img: "imagens/dellamama/porcao-batata.png"
        },
        {
          nome: "Porção Filé com Fritas",
          preco: 35.00,
          img: "imagens/dellamama/porcao-file-com-fritas.png"
        },
        {
          nome: "Porção Batata Especial",
          preco: 23.00,
          img: "imagens/dellamama/porcao-batata-especial.png"
        },
        {
          nome: "Porção Batata com Cheddar",
          preco: 18.00,
          img: "imagens/dellamama/porcao-batata-com-cheddar.png"
        },
        {
          nome: "Porção Macaxeira Frita",
          preco: 12.00,
          img: "imagens/dellamama/porcao-macaxeira-frita.png"
        }
      ],

      lanches: [
        {
          nome: "Hambúrguer",
          preco: 9.50,
          img: "imagens/dellamama/hamburguer.png",
          descricao: "Pão e hambúrguer."
        },
        {
          nome: "X-Burguer",
          preco: 11.00,
          img: "imagens/dellamama/x-burguer.png",
          descricao: "Pão, hambúrguer, queijo e maionese."
        },
        {
          nome: "X-Bacon",
          preco: 12.50,
          img: "imagens/dellamama/x-bacon.png",
          descricao: "Pão, hambúrguer, bacon, queijo, alface, tomate e maionese."
        },
        {
          nome: "X-Egg",
          preco: 12.00,
          img: "imagens/dellamama/x-egg.png",
          descricao: "Pão, hambúrguer, queijo, ovo e maionese."
        },
        {
          nome: "X-Calabresa",
          preco: 12.00,
          img: "imagens/dellamama/x-calabresa.png",
          descricao: "Pão, hambúrguer, calabresa, queijo e maionese."
        },
        {
          nome: "Americano Della Mama",
          preco: 12.00,
          img: "imagens/dellamama/americano-della-mama.png",
          descricao: "Pão, presunto, queijo, ovo, alface, tomate e maionese."
        },
        {
          nome: "X-Salada",
          preco: 11.00,
          img: "imagens/dellamama/x-salada.png",
          descricao: "Pão, presunto, queijo, ovo, alface, tomate e orégano."
        },
        {
          nome: "X-Tudo Della Mama",
          preco: 16.00,
          img: "imagens/dellamama/x-tudo-della-mama.png",
          descricao: "Pão, hambúrguer, bacon, ovo, presunto, calabresa, carne churrasco, queijo, tomate, alface e maionese."
        }
      ],

      bebidas: [
        {
          nome: "Caipirinha",
          marcas: {
            "Limão": { preco: 6.00, img: "imagens/dellamama/caipirinha-limao.png" },
            "Morango": { preco: 9.00, img: "imagens/dellamama/caipirinha-morango.png" },
            "Maracujá": { preco: 8.50, img: "imagens/dellamama/caipirinha-maracuja.png" },
            "Abacaxi": { preco: 8.00, img: "imagens/dellamama/caipirinha-abacaxi.png" },
            "Kiwi": { preco: 9.00, img: "imagens/dellamama/caipirinha-kiwi.png" }
          }
        },
        {
          nome: "Caipivodka",
          marcas: {
            "Morango": { preco: 9.00, img: "imagens/dellamama/caipivodka-morango.png" },
            "Maracujá": { preco: 8.50, img: "imagens/dellamama/caipivodka-maracuja.png" },
            "Abacaxi": { preco: 8.00, img: "imagens/dellamama/caipivodka-abacaxi.png" },
            "Kiwi": { preco: 9.00, img: "imagens/dellamama/caipivodka-kiwi.png" }
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