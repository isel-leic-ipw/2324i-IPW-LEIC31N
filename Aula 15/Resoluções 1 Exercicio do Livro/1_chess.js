const size = 10;
let board = "";

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 === 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board)

/*
Escreva um programa que cria uma string que representa uma grade 8x8, usando novas linhas para separar os caracteres.
A cada posição da grade existe um espaço ou um caractere "#".
Esses caracteres formam um tabuleiro de xadrez.
Passando esta string para o console.log deve mostrar algo como isto:

 # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
 */