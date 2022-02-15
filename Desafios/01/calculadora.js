console.log ("=== CALCULADORA ===");

function calcular (params) {
    console.log ("CLICK!!!");
    //parseint(inteiro), parsefloat(decimal) ou number (codigo coersivo)
    
    //entrada (captura) de dados
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = Number(document.getElementById("n2").value);

    //processamento
    const resultado = n1+n2;

    //saida (exibir) de dados
    document.getElementById("resultado").value = resultado
    
    console.log (n1, n2, resultado);
}

// só o sinal de + dentro do javascript tem duas funcoes => adição ou concatenação (juntar)