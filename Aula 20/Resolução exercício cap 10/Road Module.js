//Resolução Exercício do cap 10, livro Eloquent JavaScript, https://eloquentjavascript.net/10_modules.html
//By Daniel Carvalho

const {buildGrath} = require("./grath");

const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];

  exports.roadGrath = buildGrath(roads.map(r => r.split("-")));