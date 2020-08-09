// 1. Importamos el modulo express
const express = require("express");
const handlers = require("./handlers");

// 2. Creamos una app express
const app = express();

// 3. Asignamos el puerto en el que estará disponible nuestro servidor
const port = 8080;

// 4. Agregamos la ruta raíz de nuestro servidor
app.get("/", handlers.home);

// 5. Declaramos nuestra ruta para obtener todas las hamburguesas
app.get("/burgers", handlers.burgersHandler);

// 6. Declaramos nuestra ruta para obtener las hamburguesas por su ID
app.get("/burgers/:id", handlers.burgerHandler);

// 7. Declaramos nuestra ruta para obtener todas las sodas
app.get("/drink", handlers.drinks);

// 8. Iniciamos nuestro servidor con el método listen
app.listen(port, () =>
  console.log(`Server is ready and listening at http://localhost:${port}`)
);
