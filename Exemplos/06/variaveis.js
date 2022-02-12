//diferenças entre var / let / const.

//var - redeclaração da variavel (permite).. ex
var nome = 1;
console.log ("nome", nome, typeof nome);
//var - e reatribuição de valor .. ex
var nome = true;
console.log ("nome", nome, typeof nome);

//let - redeclaração de variavel (não permite).. ex
//let idade = 42; //sintaxe error

//let - reatribuição de valor (permite) .. ex
idade = 40;
console.log("idade", idade, typeof idade);

//const - reatribuição de variavel (não permite).. ex
//const magro = true; // sintaxerror

//const - reatribuição de valor (Não permite) .. ex
//magro = true; // type error

