function funcao1(){
function funcao1(){
        console.log("Teste assincrono!") // poderia definir como funcao principal
    }
    
    function funcao2(){
        setTimeout((funcao1) => {
            console.log("assincrona - Funcionou? ")
        }, 1200);
    }
    
    function funcao3(){
        console.log("Vai ser executada primeiro, pois não esta marcada por assincrona!")
    }
    //funcao1()
    funcao2()
    funcao3()

    /*

    function funcao01(){
            console.log("Teste assincrono!") //e por último essa daqui!
        }
        function funcao02(){
            setTimeout(funcao01, 1200);
            console.log("assincrona - Funciona? ") //não é uma execução assíncrona, então imprime primeiro!
            console.log("...")// depois essa...
        }
        funcao02()
        
        */


         /*

        setTimeout(function(){
                console.log("Executando Callback...")
                
                setTimeout(function (){
                    console.log("Executando Callback...")
            
                    setTimeout(function(){
                        console.log("Executando Callback...")
                    }, 1000)
                }, 2000)
            }, 3000)

            */

 /*
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
                

                

                