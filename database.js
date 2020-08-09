const db = {
  burgers: [
    {
      id: "1",
      sku: "54321",
      name: "Big Kahuna Burger",
      description:
        "250 gr. de carne, chorizo argentino, pimientos, champiñones y chimichurri.",
      price: 120.0,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      sku: "12345",
      name: "Krusty Burger",
      description:
        "Base pimientos, 250 gr de carne, champiñones y salsa de 4 quesos.",
      price: 79.0,
      image: "https://via.placeholder.com/150",
    },
  ],
  drinks: [
    {
      name: "Soda-Cola",
      description: "Lata 355ml",
      price: 10.0,
    },
    {
      name: "Cerveza Duff",
      description: "Lata 355ml",
      price: 15.0,
    },
  ],
};

module.exports = db;
