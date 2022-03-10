console.log ("===Repetição===");

// document.write ("12345");

// document.write ("1", "2", "3", "4", "5");

// document.write ("1");
// document.write ("2");
// document.write ("3");
// document.write ("4");
// document.write ("5");

document.write("<h3>Numeros de 1 a 10 </h3>");
var inicial =1; //valor inicial 
var final =10; //valor inicial (de configuração)

while (inicial <= final) { //condição logica
    document.write(inicial, " ");
    //inicial = inicial +1 //incremento opcao 1
    //inicial += 1; // incremento opcao 2 //tbm serve para - *
    inicial++; //incremento apenas de 1 em 1 
}
document.write ("<hr>");

document.write("<h3>Numeros de 50 a 1 </h3>");
var inicial = 50;
var final = 1;

while (inicial >= final) {
    document.write(inicial, " ");
    inicial -=1;
}
document.write ("<hr>");

document.write("<h3>Numeros pares de 0 a 100 </h3>");
var inicial = 0;
var final = 100;

while (inicial <=final) {
    document.write(inicial, " ");
    inicial +=2;    
}
document.write ("<hr>");

document.write("<h3>Numeros impares de 99 a 1</h3>");
var inicial = 99;
var final = 1;

while (inicial >= final) {
    if (inicial == 99) {
    document.write(inicial);
    } else {
        document.write (" - ", inicial);
    }
    inicial -=2;
}
document.write("<hr>");

//criar um programa que receba numeros
//dica: use o prompt()
//rodar o programa infinitamente, recebendo
//e mostrando os numeros digitados
// quando o numero inserido for Zero (0).
// encerrar o programa

// let loop = true;
// let num;

// while (loop) {
//     num = prompt ("Digite um número:");
//     document.write(" - ", num); //ou console.log

//     if (num == 0) {
//         document.write(" - ", "Fim!");
//         loop = false;
//     }
// }

document.write("<h3>Numeros de 1 a 10 - FOR</h3>");
//sintaxe 
//for (valor inicial; condição logica; incremento) {}

//ou for (let cont =1, maximo=10; cont <=maximo; cont+=1)
for (let cont = 1; cont <= 10; cont++) {
    document.write(cont, " ");
}
document.write ("<hr>")

// desafio: solicite ao usuario um numer e imprima a quantidade
//de asteriscos na tela referente ao numero informado

// const quant = parseInt(prompt("Quantos asteristicos?"))

// for (let index=0; index < quant; index++) {
//     document.write ("* ");
// }

document.write ("<h3>Desafio 1</h3>");
//**********
//**********
//**********
//**********
//**********

for(let lin=0; lin <5; lin++) {

    for (let col=0; col <10; col++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write ("<hr>")

document.write ("<h3>Desafio 2</h3>");
//*
//**
//***
//****
//*****
//******
//*******
//********
//*********
//**********

for (let lin=1; lin <10; lin++) {
    for (let col=0; col < lin; col++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write ("<hr>")

document.write ("<h3>Desafio 3</h3>");
// DESAFIO 3
//* 20 COLUNAS (= OU - IGUAL OU HIFEN)
// SEGUNDA COLUNA ANDA UM ASTERISCO A DIREITA E UM A ESQUERDA
// *=================*
//  *===============*
//   *=============*  
//    *===========*
//     *=========*
//      *=======*
//       *=====*
//        *===*
//         *=*
//          *
// document.write("&nbsp") (espaço em branco)
document.write("D&nbsp; E&nbsp; S&nbsp; A&nbsp; F&nbsp; I&nbsp; O&nbsp");