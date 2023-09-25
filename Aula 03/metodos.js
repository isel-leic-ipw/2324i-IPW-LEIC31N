10 métodos da classe array do javascript muito utilizados na construção de aplicações.

1. map()

Este método cria um novo array e executa uma função sobre cada um dos items do array fonte.

const arr = [2,4,6,8];
const newArr = arr.map(num => num * 2);
console.log(newArr) // saída: [4,8,12,16]


2. reduce()

Este método cria um acumulador ou reduz o array a um valor único utilizando uma função que cria um valor único.

const arr = [2,4,6,8];
const soma = arr.reduce((total, value) => total + value, 0);
console.log(soma); // saída: 20


3. some()

Este método testa se pelo menos um dos elementos do array atende a condição passada, se for verdade devolve true se for falso devolve false

const arr = [2,4,6,8];
const rest = arr.some(num => num > 4);
console.log(rest); // saída: true


4. every()

Este método testa se todos os elementos do array atendem a condição passada, se for verdade devolve true se for falso devolve false

const arr = [2,4,6,8];
const maiorQue = arr.every(num => num > 4);
console.log(maiorQue); // Saida: false


5. forEach()

Este método faz um loop sobre cada um dos itens do array.

const arr = [2,4,6,8];
arr.forEach(num => {
  console.log(num); saída: 2 4 6 8
});


6. includes()

Este método checa se o array inclui em seus items o valor passado como parametro.

const arr = [2,4,6,8];
console.log(arr.includes(6)); // saída: true
console.log(arr.includes(9)); // saída: false


7. filter()

O método filter cria um novo array como os elementos que passaram na condição da função que foi data como paramentro para o método.

const arr = [2.4.6.8];
const novo = arr.filter(num => num > 5);
console.log(novo); // saída: [6,8]


8. sort()

Este método e utilizado para arranjar ou ordenar os itens de um array de maneira ascendente ou descendente.

const arr = [2,4,6,8];
const alpha = ['d', 'c', 'b', 'a'];
const descendente = arr.sort((a, b) => a > b ? -1 : 1);
console.log(descendente);
const ascendente = alpha.sort((a, b) => a > b ? 1 : -1);
console.log(ascendente);


9.Array.from()

Cria um array a partir de uma constante ou variável não array, como por exemplo uma string.

const title = 'AprendaJS';
const novo = Array.from(title);
console.log(novo); // saída: ['V', 'a', 'l', 'd', 'e', 'r', 'i']


10. Array.of()

Este método cria um array a partir dos parâmetros passados para o método.

const nums = Array.of(2,4,6,8);
console.log(nums); // saída: [2,4,6,8]

