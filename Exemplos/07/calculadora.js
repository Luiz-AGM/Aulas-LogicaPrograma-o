console.log ("=== CALCULADORA ===");

function calcular (params) {
    console.log ("CLICK!!!");
    
    const n1 = Number(document.getElementById("n1").value);
    const n2 = Number(document.getElementById("n2").value);
    document.getElementById("resultado").value = n1+n2;
    
    console.log (n1, n2, resultado.value);
}