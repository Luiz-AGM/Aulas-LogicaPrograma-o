console.log("===COMPARAÇÃO===")


function comparar() {
    console.log ("Comparando maior que")

    const n1 = document.getElementById("n1");
    console.log(n1.value);
    const n2 = document.getElementById("n2");
    console.log(n2.value);

    let sinal = document.getElementById("sinal").value;
    let resultado = null;
    switch (sinal) {

        case document.getElementById("sinal").value = ">":
            resultado = n1.value > n2.value;
        break;
        
        case document.getElementById("sinal").value = ">=":
            resultado = n1.value >= n2.value
        break;
    
        case document.getElementById("sinal").value = "<=":
            resultado = n1.value <= n2.value
        break;
    
        case document.getElementById("sinal").value = "<":
            resultado = n1.value < n2.value;
        break;
    
        case document.getElementById("sinal").value = "==":
            resultado = n1.value == n2.value;
        break;
    
        case document.getElementById("sinal").value = "!=":
            resultado = n1.value != n2.value;
        break;
        
        case document.getElementById("sinal").value = "===":
            resultado = n1.value === n2.value
        break;
        
        default: null;
        resultado = "comparador?";
    }
    
    console.log(sinal);
    
    document.getElementById("result").value = resultado
}

    