/*
 * Cardápio Morrison Bar & Rock'n'Roll
 * ------------------------------------------------------------
 * Para atualizar preços ou itens, edite SOMENTE este arquivo.
 *  - price: número (ex.: 16.5)  -> exibido como 16,50
 *  - prices: lista de variações [{ label, price }]
 *  - desc: ingredientes / observação (opcional)
 *  - tags: ["flame"] (em chamas), ["promo"], ["zero"] (sem álcool), ["house"] (da casa)
 */
window.MENU = [
  {
    id: "comidas",
    title: "Porções & Sanduíches",
    short: "Comidas",
    sections: [
      {
        title: "Porções",
        items: [
          { name: "Batata Frita", price: 26 },
          { name: "Batata Frita c/ Cheddar", price: 29 },
          { name: "Batata Frita c/ Cheddar & Bacon", price: 31 },
          { name: "Bolinho de Calabresa c/ Queijo", price: 31 },
          { name: "Bolinho de 3 Queijos", price: 31 },
          { name: "Coxinha de Cogumelos", price: 33 },
          { name: "Croquete de Mandioca c/ Carne Seca", price: 34 },
          { name: "Chicken Wings", price: 33 },
          { name: "Dadinhos de Tapioca", desc: "15 unidades", price: 29 },
          { name: "Iscas de Frango", price: 29 },
          { name: "Pastéis", desc: "Queijo ou Carne", price: 27 },
          { name: "Pastéis Mistos", desc: "Dois sabores", price: 28 }
        ]
      },
      {
        title: "Sanduíches",
        items: [
          { name: "Cheese Bacon Salada", price: 36, desc: "Hambúrguer de Costela ou Picanha, Bacon, Muçarela, Maionese, Alface, Tomate" },
          { name: "Frango & Bacon", price: 31, desc: "Peito de Frango, Bacon, Muçarela, Maionese, Alface, Tomate" },
          { name: "Gorgonzola Burger", price: 38, desc: "Hambúrguer de Costela ou Picanha, Queijo Gorgonzola, Cogumelos Paris, Maionese, Alface" },
          { name: "Jack Cheddar Burger", price: 39, desc: "Hambúrguer de Costela, Queijo Cheddar, Molho Jack Daniel's, Cebola Caramelizada" }
        ]
      }
    ]
  },
  {
    id: "cervejas",
    title: "Cervejas & Outros",
    short: "Cervejas",
    sections: [
      {
        title: "Cervejas",
        items: [
          { name: "Budweiser", desc: "Long neck 330ml", price: 16 },
          { name: "Heineken", desc: "Long neck 330ml", price: 16.5 },
          { name: "Stella Artois", desc: "Long neck 330ml", price: 17 }
        ]
      },
      {
        title: "Cervejas Especiais",
        items: [
          { name: "Colorado Indica", desc: "Garrafa 600ml", price: 34 },
          { name: "Corona", desc: "Long neck 275ml", price: 20 },
          { name: "Hoegaarden", desc: "Long neck 330ml", price: 30 },
          { name: "Goose Island IPA", desc: "Long neck 330ml", price: 30 },
          { name: "Stella Artois Pure Gold", desc: "330ml", price: 18 },
          { name: "Patagonia", price: 30 }
        ]
      },
      {
        title: "Ices",
        items: [{ name: "Smirnoff Ice", price: 20 }]
      }
    ]
  },
  {
    id: "coqueteis",
    title: "Coquetéis",
    short: "Coquetéis",
    sections: [
      {
        title: "Coquetéis Especiais da Casa",
        items: [
          { name: "Morrison", price: 29, tags: ["house"], desc: "Gin, Cherry, Soda Limonada, Groselha" },
          { name: "Purple", price: 30, tags: ["flame"], desc: "Amarula, Licor de Pêssego, Cointreau e Groselha" },
          { name: "Sabbath", price: 29, tags: ["flame"], desc: "Vodka, Licor de Cacau, Cointreau" },
          { name: "Zeppelin", price: 28, desc: "St. Remy, Sucos de Abacaxi e Maracujá, Champagne" }
        ]
      },
      {
        title: "Coquetéis Tradicionais",
        items: [
          { name: "43 Spritz", price: 36, desc: "Licor 43, Prosecco, Club Soda, Suco de Limão" },
          { name: "Aperol Spritz", price: 33, desc: "Aperol, Prosecco, Club Soda, Laranja" },
          { name: "Bloody Mary", price: 26, desc: "Vodka, Suco de Tomate Temperado" },
          { name: "Boulevardier", price: 37, desc: "Red Label, Vermouth Rosso, Campari" },
          { name: "Cuba Libre", price: 24, desc: "Rum, Coca-Cola, Limão" },
          { name: "Margarita", price: 33.5, desc: "Tequila, Cointreau, Suco de Limão" },
          { name: "Mojito", price: 26, desc: "Rum Prata, Hortelã, Açúcar, Club Soda" },
          {
            name: "Moscow Mule",
            desc: "Vodka, Espuma de Gengibre, Limão",
            prices: [
              { label: "Smirnoff", price: 27 },
              { label: "Absolut", price: 33 }
            ]
          },
          {
            name: "Old Fashioned",
            desc: "Whisky, Angostura, Açúcar",
            prices: [
              { label: "Ballantine's", price: 29 },
              { label: "Red Label", price: 31 },
              { label: "Jack Daniel's", price: 38 }
            ]
          },
          { name: "Piña Colada", price: 27, desc: "Rum Prata, Suco de Abacaxi, Leite de Coco" },
          { name: "Sex on the Beach", price: 28, desc: "Vodka, Licor de Pêssego, Suco de Laranja, Groselha" }
        ]
      },
      {
        title: "Caipirinhas",
        items: [
          { name: "Velho Barreiro", price: 19 },
          { name: "Espírito de Minas", price: 31 },
          { name: "Smirnoff", price: 22 },
          { name: "Absolut", price: 29 },
          { name: "Cîroc", price: 32 },
          { name: "Saquê", price: 20.5, tags: ["promo"] }
        ]
      }
    ]
  },
  {
    id: "gin",
    title: "Gin",
    short: "Gin",
    sections: [
      {
        title: "Gin Specials",
        note: "Escolha o sabor e o gin — o preço varia conforme o gin escolhido.",
        items: [
          { name: "Gin Tônica", desc: "Limão Tahiti, Gin, Tônica" },
          { name: "Classic", desc: "Limão Siciliano, Alecrim, Gin, Tônica" },
          { name: "Mint & Ginger", desc: "Hortelã, Gengibre, Gin, Tônica" },
          { name: "Morango", desc: "Morango, Gin, Tônica" },
          { name: "Toranja", desc: "Toranja, Gin, Tônica" },
          { name: "Negroni", desc: "Gin, Campari, Vermouth Doce" },
          { name: "Hibisco & Canela", desc: "Hibisco, Canela, Gin, Tônica" },
          { name: "Orange & Pepper", desc: "Laranja, Pimenta do Reino, Gin, Tônica" },
          { name: "Lady Pepper", desc: "Pimenta Preta e Dedo de Moça, Gin, Tônica" }
        ]
      },
      {
        title: "Gin Specials — preço por gin",
        items: [
          { name: "Seagers", price: 28 },
          { name: "Gordon's", price: 32 },
          { name: "Beefeater", price: 39.5 },
          { name: "Bombay", price: 40 },
          { name: "Bulldog", price: 42 },
          { name: "Tanqueray", price: 40 },
          { name: "Hendrick's", price: 45 }
        ]
      },
      {
        title: "Gins (dose)",
        items: [
          { name: "Seagers", price: 20 },
          { name: "Gordon's", price: 24 },
          { name: "Beefeater", price: 31.5 },
          { name: "Bombay", price: 31.5 },
          { name: "Bulldog", price: 34 },
          { name: "Tanqueray", price: 32.5 },
          { name: "Hendrick's", price: 37 }
        ]
      }
    ]
  },
  {
    id: "destilados",
    title: "Destilados",
    short: "Destilados",
    sections: [
      {
        title: "Whiskies",
        items: [
          { name: "Ballantine's Finest", price: 26 },
          { name: "Johnnie Walker Black Label", price: 34 },
          { name: "Johnnie Walker Red Label", price: 29 },
          { name: "Jack Daniel's Old Nº 7", price: 35 },
          { name: "Jack Daniel's Apple", price: 36 },
          { name: "Jack Daniel's Honey", price: 36 },
          { name: "Jack Daniel's Fire", price: 36 },
          { name: "Gentleman Jack", price: 49 }
        ]
      },
      {
        title: "Vodkas",
        items: [
          { name: "Smirnoff", price: 18 },
          { name: "Absolut", price: 25 },
          { name: "Cîroc", price: 30 }
        ]
      },
      {
        title: "Outros",
        items: [
          { name: "Espírito de Minas", desc: "Cachaça", price: 25 },
          { name: "Saquê", desc: "Aguardente", price: 15.5 },
          { name: "José Cuervo", desc: "Tequila", price: 28.5 },
          { name: "Bacardi", desc: "Rum", price: 16 },
          { name: "Havana Club", desc: "Rum 3 anos", price: 25 },
          { name: "Aperol", desc: "Bitter", price: 19.5 },
          { name: "Campari", desc: "Bitter", price: 18 },
          { name: "Domecq", desc: "Conhaque", price: 17 },
          { name: "Jägermeister", desc: "Ervas", price: 31 },
          { name: "Absinto", desc: "Ervas", price: 24 },
          { name: "Licor 43", desc: "Frutas e ervas", price: 31 },
          { name: "Amarula", desc: "Licor", price: 32 },
          { name: "St. Remy", desc: "Licor", price: 18.5 },
          { name: "Stock", desc: "Licores", price: 17 }
        ]
      }
    ]
  },
  {
    id: "vinhos",
    title: "Vinhos & Espumantes",
    short: "Vinhos",
    sections: [
      {
        title: "Vinhos & Espumantes",
        items: [
          { name: "Concha y Toro", desc: "Garrafa", price: 78 },
          { name: "Espumante Salton", desc: "Garrafa", price: 125 },
          { name: "Prosecco Salton", desc: "Garrafa", price: 135 },
          { name: "Taça de Vinho", desc: "150ml", price: 22 }
        ]
      }
    ]
  },
  {
    id: "sem-alcool",
    title: "Sem Álcool",
    short: "Sem álcool",
    sections: [
      {
        title: "Mocktails",
        items: [
          { name: "Strawberry Mojito Zero", price: 20, tags: ["zero"], desc: "Morango, Hortelã, Limão, Açúcar, Soda Limonada" },
          { name: "Choco-Ginger", price: 19, tags: ["zero"], desc: "Calda de Chocolate, Leite Condensado e de Coco, Gengibre e Água" },
          { name: "Pineapple & Mint", price: 19, tags: ["zero"], desc: "Suco de Abacaxi, Xarope de Menta, Soda Limonada" },
          { name: "Marilyn Monroe", price: 20, tags: ["zero"], desc: "Maracujá, Leite Condensado, Limão, Groselha" },
          { name: "Appletini", price: 19, tags: ["zero"], desc: "Suco de Maçã, Xarope de Maçã e Limão" },
          { name: "Mock Tônica", price: 21, tags: ["zero"], desc: "Xarope de Blueberry, Tônica" }
        ]
      },
      {
        title: "Cervejas sem Álcool",
        items: [
          { name: "Budweiser Zero", desc: "Long neck 330ml", price: 16 },
          { name: "Heineken Zero", desc: "Long neck 330ml", price: 18.5 }
        ]
      },
      {
        title: "Refrigerantes & Sucos",
        items: [
          { name: "Refrigerantes", desc: "Lata 350ml", price: 9 },
          { name: "Água Mineral", desc: "Garrafa 500ml", price: 7 },
          { name: "Sucos de Fruta", desc: "Copo 330ml", price: 15 },
          { name: "Red Bull", desc: "Lata 250ml", price: 25 }
        ]
      }
    ]
  }
];

window.MENU_QUOTES = [
  { text: "Long live rock 'n' roll.", by: "" },
  { text: "Rock não é ocasião. É estilo de vida.", by: "Morrison" },
  { text: "Hey Ho! Let's Go!", by: "Ramones" },
  { text: "It's only rock 'n' roll but I like it.", by: "Rolling Stones" },
  { text: "For those about to rock, we salute you.", by: "AC/DC" },
  { text: "Break on through to the other side.", by: "The Doors" },
  { text: "We will rock you.", by: "Queen" }
];
