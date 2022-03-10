console.log ("===Carros===")

//Premissas
//1- Armazenar dados em um ojeto
//2 - Colocar o objeto dentro de um Array
//3 - Exibir tudo que for cadastrado dentro do "console.table"

const carro1 = [];
function adicionar() {

    carro1.push(document.getElementById("modelo").value)
    carro1.push(document.getElementById("ano").value)
    carro1.push(document.getElementById("cor").input)
    carro1.push(document.getElementById("situacao"))

    console.log (carro1)

}