console.log ("===Faixa Etária===")

// function analisar() {

// const idade = parseInt(document.getElementById("idade").value);

// let analise = null;
// if (idade >=21) {
//     analise = "Você é um adulto";
// }
// else {
//     analise = "Você não é um adulto";
// }
// console.log (idade, analise)

// document.getElementById("resultado").value = analise
// }

function analisar() {

    const idade = parseInt(document.getElementById("idade").value);
    
    let analise = null;
    if (idade >=0 && idade <= 12) {
        analise = "Criança";
    }
    else if (idade >=13 && idade <=17) {
        analise = "Adolescente";
    }
    else if (idade >= 18 && idade <=64) {
        analise = "Adulto";
    }
    else if (idade <0) {
        analise = "Negativo?"
    }
    else {
        analise = "Idoso";
    }
    console.log (idade, analise)
    
    document.getElementById("resultado").value = analise
}
