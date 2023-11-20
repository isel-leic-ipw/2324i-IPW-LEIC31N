// exemplo simples que  divide dois números e trata possíveis erros, como a divisão por zero.
function dividirNumeros(numero1, numero2) {
    try {
        // Verifica se o segundo número é zero
        if (numero2 === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }

        // Realiza a divisão
        const resultado = numero1 / numero2;

        // Retorna o resultado
        return resultado;
    } catch (error) {
        // Captura e trata o erro
        console.error("Ocorreu um erro:", error.message);
    }
}

// Exemplo de utilização
const resultadoDivisao = dividirNumeros(10, 2); // Resultado esperado: 5
console.log("Resultado da divisão:", resultadoDivisao);

// Exemplo com erro (divisão por zero)
const resultadoDivisaoComErro = dividirNumeros(8, 0); // Resultado esperado: Erro identificado e ajustado
