const express = require("express");
const app = express();
const route = require("./routes/index");
const bodyParser = require("body-parser");
// const morgan = require("morgan");

// settings
app.set("appName", "Calculadora Científica");

// Config plantillas
app.set("views", __dirname + "/static/views");
app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");

// middleware
//app.use(morgan("short"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// rutas
app.use(route);

// Servidor
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Nombre de la aplicación: ${app.get("appName")}`);
//   console.log(
//     `La aplicación esta corriendo en el puerto http://localhost:${port}`
//   );
// });

module.exports = app;
