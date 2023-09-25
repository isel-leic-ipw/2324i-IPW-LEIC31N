  ///////////////////////////////////////////
    
//var arr = new Array(elemento0, elemento1, ..., elementoN);

//var arr = Array(elemento0, elemento1, ..., elementoN);

//var arr = [elemento0, elemento1, ..., elementoN];

//const arr = [2,4,6,8];
//const newArr = arr.map(num => num * 3);
//console.log(newArr) 
// saída: [4,8,12,16]


//function ola() {
  //      console.log('Olá')

    //    console.log('Turma')

    //    console.log('IPW')
    }
    //ola()
////////


  function executaDe1a3(funcao) {
    funcao(1);
    funcao(2);
    funcao(3);
    
  }
  
  executaDe1a3(function (x) { console.log('ISEL ' + x); });
  
    function Coelho(tipo) {
        this.tipo = tipo;
      }
      
      var coelhoAssassino = new Coelho("assassino");
      var coelhoPreto = new Coelho("preto");
      console.log(coelhoPreto.tipo);
      // → preto
    