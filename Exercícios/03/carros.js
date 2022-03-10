console.log ("===Carros===");

//Dica 1 : apenas no Input
document.getElementById("modelo").value = "Preencher";

//Dica 2: Tags em Geral
document.getElementById("qtde").textContent = "Preencher";

//Critérios de Aceite
//*
//Premissa: Use Array!!!

// 1 - Ao cadastrar um carro, incrementar a quantidade
// 2 - Limpar o campo para o proximo preenchiment
// 3 - Ao alcançar 10 carros, exibilos na tela (innertext ou innerhtml)

const carros = [];

function add() {
    let lista = document.getElementById("modelo").value;
    console.log (lista, typeof(lista));

    carros.push(document.getElementById("modelo").value);

    document.getElementById("modelo").value = "";
    document.getElementById("qtde").textContent = carros.length
    console.log(carros)

    if (carros.length == 10) {
        carros.forEach(function(mostrar) {
        document.write("<p>- ",mostrar, "</p>")
        })
    }
 }