/*setTimeout(function(){
        console.log("Executando Callback...")
        
        setTimeout(function (){
            console.log("Executando Callback...")
    
            setTimeout(function(){
                console.log("Executando Callback...")
            }, 2000)
        }, 2000)
    }, 2000)
    */
    function esperarPor(tempo = 1000){
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
        
    