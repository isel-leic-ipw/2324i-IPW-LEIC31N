let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
undefined
function Coelho(tipo) {
  this.tipo = tipo;
}

var coelhoAssassino = new Coelho("assassino");
var coelhoPreto = new Coelho("preto");
console.log(coelhoPreto.tipo);
// → preto
VM1009:7 preto
undefined
function Coelho(tipo) {
  this.tipo = tipo;
}

var coelhoAssassino = new Coelho("assassino");
var coelhoPreto = new Coelho("Branco");
console.log(coelhoPreto.tipo);
// → preto
VM1023:7 Branco
undefined
function Coelho(tipo) {
  this.tipo = tipo;
}

var coelhoAssassino = new Coelho("assassino");
var coelhoPreto = new Coelho("Branco");
console.log(coelhoBranco.tipo);
// → preto
VM1048:7 Uncaught ReferenceError: coelhoBranco is not defined
    at <anonymous>:7:13
(anónimo) @ VM1048:7
function Coelho(tipo) {
  this.tipo = tipo;
}

var coelhoAssassino = new Coelho("assassino");
var coelhoteste = new Coelho("Branco");
console.log(coelhoteste.tipo);
// → preto
VM1085:7 Branco
undefined
  function Coelho(tipo) {
    this.tipo = tipo;
  }
  
  var coelhoAssassino = new Coelho("assassino");
  var coelhoPreto = new Coelho("preto");
  console.log(coelhoPreto.tipo);
  // → preto

VM1089:7 preto
undefined
  function Coelho(tipo) {
    this.tipo = tipo;
  }
  
  var coelhoAssassino = new Coelho("assassino");
  var coelhoPreto = new Coelho("preto");
  console.log(coelhoPreto.tipo);
  // → preto

VM1960:7 preto
undefined
const arr = [2,4,6,8];
const newArr = arr.map(num => num * 2);
console.log(newArr) // saída: [4,8,12,16]

VM2049:3 (4) [4, 8, 12, 16]
undefined
const arr = [2,4,6,8];
const soma = arr.reduce((total, value) => total + value, 0);
console.log(soma); // saída: 20

VM2053:3 20
undefined
const arr = [2,4,6,8];
const rest = arr.some(num => num > 4);
console.log(rest); // saída: true

VM2057:3 true
undefined
const arr = [2,4,6,8];
const rest = arr.some(num => num > 6);
console.log(rest); // saída: true

VM2066:3 true
undefined
const arr = [2,4,6,8];
const rest = arr.some(num => num > 8);
console.log(rest); // saída: true

VM2075:3 false
undefined
const arr = [2,4,6,8];
const maiorQue = arr.every(num => num > 4);
console.log(maiorQue); // Saida: false

VM2079:3 false
undefined
const arr = [2,4,6,8];
const maiorQue = arr.every(num => num > 2);
console.log(maiorQue); // Saida: false

VM2087:3 false
undefined
const arr = [2,4,6,8];
console.log(arr.includes(6)); // saída: true
console.log(arr.includes(9)); // saída: false

VM2091:2 true
VM2091:3 false
undefined
const arr = [2,4,6,8];
console.log(arr.includes(6)); // saída: true
console.log(arr.includes(4)); // saída: false

VM2104:2 true
VM2104:3 true
undefined
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
�const result = words.filter((word) => word.length > 6);
�console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

VM2108:3 (3) ['exuberant', 'destruction', 'present']
undefined
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
�const result = words.filter((word) => word.length > 6);
�console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

VM2111:3 (3) ['exuberant', 'destruction', 'present']
undefined
const arr = [2,4,6,8];
const alpha = ['d', 'c', 'b', 'a'];
const descendente = arr.sort((a, b) => a > b ? -1 : 1);
console.log(descendente);
const ascendente = alpha.sort((a, b) => a > b ? 1 : -1);
console.log(ascendente);

VM2115:4 (4) [8, 6, 4, 2]
VM2115:6 (4) ['a', 'b', 'c', 'd']
undefined
const title = 'Valderi';
const novo = Array.from(title);
console.log(novo); // saída: ['V', 'a', 'l', 'd', 'e', 'r', 'i']

VM2119:3 (7) ['V', 'a', 'l', 'd', 'e', 'r', 'i']
undefined
const title = 'IPW Turma TOPO de Gama';
const novo = Array.from(title);
console.log(novo); // saída: ['V', 'a', 'l', 'd', 'e', 'r', 'i']

VM2149:3 (22) ['I', 'P', 'W', ' ', 'T', 'u', 'r', 'm', 'a', ' ', 'T', 'O', 'P', 'O', ' ', 'd', 'e', ' ', 'G', 'a', 'm', 'a']
undefined
function Calculadora() {
  this.valor = 0;
}

Calculadora.prototype.adicionar = function(valor) {
  this.valor += valor;
};

Calculadora.prototype.subtrair = function(valor) {
  this.valor -= valor;
};

Calculadora.prototype.obterResultado = function() {
  return this.valor;
};

const minhaCalculadora = new Calculadora();
minhaCalculadora.adicionar(5);
minhaCalculadora.subtrair(3);
console.log(minhaCalculadora.obterResultado()); // 2
VM2153:20 2
undefined
function Calculadora() {
  this.valor = 0;
}

Calculadora.prototype.adicionar = function(valor) {
  this.valor += valor;
};

Calculadora.prototype.subtrair = function(valor) {
  this.valor -= valor;
};

Calculadora.prototype.obterResultado = function() {
  return this.valor;
};

const minhaCalculadora = new Calculadora();
minhaCalculadora.adicionar(8);
minhaCalculadora.subtrair(4);
console.log(minhaCalculadora.obterResultado()); // 2
VM2170:20 4
undefined
function Calculadora() {
  this.valor = 0;
}

Calculadora.prototype.adicionar = function(valor) {
  this.valor += valor;
};

Calculadora.prototype.subtrair = function(valor) {
  this.valor -= valor;
};

Calculadora.prototype.obterResultado = function() {
  return this.valor;
};

const minhaCalculadora = new Calculadora();
minhaCalculadora.adicionar(8);
minhaCalculadora.subtrair(4);
console.log(minhaCalculadora.obterResultado()); // 4

VM2225:20 4
undefined
