const db = require("./database");

// Nuestra ruta raíz
function home(req, res) {
  res.send("Is alive!");
}

// burgersHandler se encarga de retornar todas las hamburguesas del menu
function burgersHandler(req, res) {
  res.status(200).send(db.burgers);
}

// burgerHandler se encarga de retornar una hamburgesa según el ID dado,
function burgerHandler(req, res) {
  // Filtramos nuestra base datos por ID
  const burger = db.burgers.find((x) => x.id === req.params.id);

  // Enviamos el objeto resultante como respuesta
  res.status(200).send(burger);
}

// drinks se encarga de retornar todas las bebidas del menu
function drinks(req, res) {
  res.status(200).send(db.sodas);
}

module.exports = {
  home,
  burgersHandler,
  burgerHandler,
  drinks,
};
