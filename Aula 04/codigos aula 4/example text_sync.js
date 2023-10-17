var fs = require('fs');
for(var i = 1; i <= 5; i++) {
    var file = "sync-txt" + i + ".txt";
    fs.writeFileSync(file, "IPW Valderi.js!");
    console.log("Ficheiro Novo: " + file);
}