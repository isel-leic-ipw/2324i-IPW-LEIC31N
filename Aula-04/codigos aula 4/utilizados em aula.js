    
/*
function funcao1(){
        console.log("Execução  assincrona!")
    }
    
    function funcao2(){
        setTimeout((funcao1) => {
            console.log("O que vai aparecer primeiro?")
        }, 2000);
    }
    funcao2()
    
    */
/*
    function funcao1(){
            console.log("Teste assincrono!")
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

    function teste() { 

        new Promise((resolve, reject) => { 
        
        });
        
        }

        */

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

            setTimeout(function(){
                    console.log("Executando Callback...")
                    
                    setTimeout(function (){
                        console.log("Executando Callback...")
                
                        setTimeout(function(){
                            console.log("Executando Callback...")
                        }, 3000)
                    }, 2000)
                }, 1000)



