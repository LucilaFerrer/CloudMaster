var path = require("path"); // Incluyo Path
var express = require("express"); // Incluyo Express
var app = express(); // Inicializo Express
var folder = path.join(__dirname, "public"); // Defino la carpeta del sitio

app.use(express.static(folder)); // Asigno la carpeta definida a Express
app.use("/administrador", require("./api/administrador.js"));
app.listen(5000, function(){ console.log ("Servidor corriendo..."); }); // Levanto el servidor en el puerto 5000;

