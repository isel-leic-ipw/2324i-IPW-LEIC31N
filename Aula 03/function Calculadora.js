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
minhaCalculadora.subtrair(3);
console.log(minhaCalculadora.obterResultado()); // 5
