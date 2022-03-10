console.log("===COMPARAÇÃO===")


function comparar() {

    var n1 =parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var operador = document.getElementById("sinal").value;
    var resultado = eval(n1+operador+n2);

    //                  ou
    // const n1 = document.getElementById("n1");
    // console.log(n1.value);
    // const n2 = document.getElementById("n2");
    // console.log(n2.value);

    // let sinal = document.getElementById("sinal").value;
    // let resultado = null;
    
    // switch (sinal) {

    //     case sinal= ">":
    //         resultado = n1.value > n2.value;
    //     break;
        
    //     case sinal = ">=":
    //         resultado = n1.value >= n2.value
    //     break;
    
    //     case sinal = "<=":
    //         resultado = n1.value <= n2.value
    //     break;
    
    //     case sinal = "<":
    //         resultado = n1.value < n2.value;
    //     break;
    
    //     case sinal = "==":
    //         resultado = n1.value == n2.value;
    //     break;
    
    //     case sinal = "!=":
    //         resultado = n1.value != n2.value;
    //     break;
        
    //     case sinal = "===":
    //         resultado = n1.value === n2.value
    //     break;
        
    //     default: null;
    //     resultado = "comparador?";
    // }

    // console.log(sinal);
    
    document.getElementById("result").value = resultado
}

    