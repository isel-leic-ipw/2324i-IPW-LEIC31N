function funcao1(){
    console.log("Execução  sincrona!")
}

function funcao2(){
    setTimeout((funcao1) => {
        console.log("O que vai aparecer primeiro?")
    }, 1200);
}
funcao2()
