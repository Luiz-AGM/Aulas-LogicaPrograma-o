console.log ("===calcular IMC===")

function calcular () {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let resultado = peso / (altura **2)

    document.getElementById("resultado").value = resultado

}