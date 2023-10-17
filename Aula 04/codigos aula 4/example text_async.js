/*var fs = require('fs');
for(var i = 1; i <= 5; i++) {
    var file = "async-txt" + i + ".txt";
    fs.writeFile(file, "IPW.js!", function(err, out) {
        console.log("Ficheiro novo: " + file);
    });
}*/

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Executando Promise...")
            resolve() //ao chamar o resolve, o then vai ser chamado
        }, tempo)
    })
}

esperarPor() //se não passar nenhum valor, ele espera o valor padrão de 2s
    .then(() => esperarPor())
    .then(esperarPor)