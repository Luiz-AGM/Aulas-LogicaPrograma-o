console.log("===COMPARAÇÃO===")

function comparar() {
    console.log ("Comparando maior que")

    const n1 = document.getElementById("n1");
    console.log(n1.value)
    const n2 = document.getElementById("n2");
    console.log(n2.value)

    const comparacao = parseFloat(n1.value) > parseFloat(n2.value)

    document.getElementById("result").value = comparacao

    console.log(comparacao)
    
}

    