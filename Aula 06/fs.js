const fs = require("fs");
fs.readfile("/caminho/ficheiro.txt", "utf8", (err, data)=> {
if (err) throw err;
console.log(data);
});