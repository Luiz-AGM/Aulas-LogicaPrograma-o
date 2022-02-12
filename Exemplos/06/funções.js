console.log ("=== FUNÇÕES ===");

// Declaração de Função nomeada (function statement)
// function name(params) {
   // }
   
    function somar() { //sem paramentros ()
        const a = 7
        const b = 3
        return a+b 
    }

    // function soma(n1,n2) { //com parametros - nao utiliza var ou let ou const)
    //     return n1+n2
    // }

// NaN (not a number)

    function soma(n1=0,n2=0) { //com parametros - nao utiliza var ou let ou const)
    return n1+n2            //default parameter exemplo "n1=0"
}
console.log ( soma ); //ref função
console.log ( soma()); //0
console.log ( soma (5)); //5
console.log (soma (5,10)); //15

//se não colocar return volta como "undefined"

// Função não nomeada (anônima) só funciona se colocar dentro de um outro parametro
    const sum = function (a=0, b=0) {
    return a + b;
}
console.log ( sum );
console.log (soma ()); //0
console.log (sum (5)); //5
console.log (sum (5,10)); //15

