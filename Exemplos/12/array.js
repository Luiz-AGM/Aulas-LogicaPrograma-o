console.log ("=== Array ===");

// //Antipadrão
// //*
// // const carro1  = "Gol";
// // const carro2 = "Corsa";
// // const carro3 = "Fox";
// /*

// //array literal
const carros = [ "Gol", "Corsa", "Fox"];

//contexto.comando()
carros.push ("Corolla", "Vectra"); //add item no final do array
carros.unshift ("Marea"); //add item no começo do array
carros.splice (1,1) //remove item na posição x (1 local do item, 1 quantos itens)
carros.splice (0,1, "BMW"); //substitui item na posição x
carros.splice (2, 0, "Fusca", "Golf"); //add item na posição x
carros.pop(); //remove item do final da array
carros.shift(); //remove item do inicio da array
carros.sort(); //ordena itens (alfabetica)
carros.reverse(); //inverte a ordem dos itens da array

document.write ("- ", carros[0], "<br>");
document.write ("- ", carros[1], "<br>");
document.write ("- ", carros[2], "<br>");
document.write ("- ", carros[3], "<br>");

document.write ("<hr>");
//ou
for (let i=0; i < carros.length; i++) {
    document.write("- ", carros[i], "<br>" );
}

document.write ("<hr>");
//ou
//implementação 1
//função nomeada
function pegaCarro(modelo,pos) {
    console.log("pegou?", modelo, pos);
    document.write("=>", modelo, "<br>");
}
carros.forEach(pegaCarro);
//como o forEach funciona (automaticamente)
//pegaCarro ("Golf", 0); // loop 0
//pegaCarro ("Fusca", 1); // loop 1
//pegaCarro ("Fox", 2); // loop 2

document.write ("<hr>");

//implementação 2 - MAIS UTILIZADA
//função anonima 
carros.forEach (function(carro, i) {
    console.log ("funfa?", carro, i);
    document.write("2 =>", carro, "<br>");
})

console.log (carros);
console.log (carros.length);

// console.log(arguments) só funciona para funções

//foreach so percorre o array -- nao mostra "return"

