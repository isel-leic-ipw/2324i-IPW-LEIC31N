function Hello() {
    console.log('Hello')
}
Hello()

function Hello() {
    function mensagem() {
        return 'Hello'
    }
    console.log(mensagem())
}
Hello()

function Hello() {
    function mensagem() {
        return 'Hello'
    }
    console.log(mensagem())
}
Hello()

console.log(mensagem()) 
// a função mensagem não irá existir nesse trecho de código, 
//ela somente existe dentro da função Hello

function Hello(nome) {
    console.log('Hello', nome)
}
Hello('Mundo!')
