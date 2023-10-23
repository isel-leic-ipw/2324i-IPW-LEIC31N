 var express = require("express");
 var morgan = require("morgan");
 var compression = require("compression");
 var app = express();
 // injetando alguns middlewares...
 app.use(morgan());
 app.use(compression());
 // criando a rota principal
 app.get("/", function(req, res) {
   res.json({status: "IPW"});
 });
 app.listen(3000, function() {
   console.log("Servidor rodando!");
 });


 /* https://expressjs.com/en/resources/middleware/morgan.html */
 
 /* node app.js */