//armazenamento de dados (ecmascript5 - ate jul/2015 só usava "var")
//ex dados fixos
// var nome = "Luiz";
// var email = "luiz@gmail.com"
// var telefone = "(99)1234-5678";
//dados variaveis
var nome = prompt("Digite seu nome:");
var email = prompt("Digite seu e-mail:");
var telefone = prompt("Digite seu telefone");

//executando instruções
//comando (param1, param2):
//contexto.comando(param1.param2) ex, param1 "nome" a palavra, nome (a variavel)
// console.log mostra os valores somente no console do navegador (f12)
console.log("nome", nome);
console.log("email", email);
console.log("telefone", telefone);

// document.write("Nome: ", nome, "<br>","<br>");
// document.write("Email: ", email, "<br>");
// document.write("Telefone: ", telefone);
               
//ou com tags html dentro dos paramentros
document.write("<hr><p>Nome: ", nome, "</p>");
document.write("<p>Email: ", email, "</p>");
document.write("<p>Telefone: ", telefone, "</p><hr>");
