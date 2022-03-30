console.log("=== CARROS ===");
// AVALIACAO
/*
1 - FAZER UMA COPIA DO EXERCICIO DA LOJA DE CARROS
2 - ADICIONAR UMA COLUNA COM UM ID (AO LADO DO MODELO)
3 - ADICIONAR NO FORMULARIO UM CAMPO PARA RECEBER O PRECO
4 - EXIBIR UMA COLUNA COM O PRECO
5 - EXIBIR O TOTAL DE TODOS OS VEICULOS CADASTRADOS (REQUISITO -> USAR REDUCE)
*/

const carros = [];
const valores = [];

function adicionar() {
  // entrada
  const modelo = document.getElementById("modelo");
  const ident = carros.length + 1;
  const ano = document.getElementById("ano");
  const cor = document.getElementById("cor");
  const situacao = document.getElementById("situacao");
  const preco = document.getElementById("preco");
  const precoTotal = document.getElementById("precoTotal");

  // processamento
  const carro = {
    modelo: modelo.value,
    ident: ident,
    ano: ano.value,
    cor: cor.value,
    situacao: situacao.value,
    preco: parseFloat(preco.value)
    };

    if (document.getElementById("preco").value == "" || 
      document.getElementById("modelo").value == "" || 
      document.getElementById("ano").value == "") {
      alert('Por favor, preencha todos os campos');
      // document.getElementById("preco").focus();
      return false }

    if (document.getElementById("preco").value < 0 || 
      document.getElementById("ano").value <0 ) {
      alert('Por favor, preencha com números positivos');
      // document.getElementById("preco").focus();
      return false }


  carros.push(carro);
  valores.push(carro.preco);
  console.log(carro);
  console.log(valores);

  // saida
  console.table(carros);
    
  // exibir a tabela
  const lista = document.getElementById("lista");
  lista.innerHTML = 
  carros
    .map(function(carro) {
       return `<tr>
        <td>${carro.modelo}</td>
        <td>${carro.ident}</td>
        <td>${carro.ano}</td>
        <td>${carro.cor}</td>
        <td>${carro.situacao}</td>
        <td>${carro.preco}</td>
      </tr>`;
    })
    .join("");

  let total = 
    valores
      .reduce(function(valor1, valor2) {
    return valor1 + valor2;
  }, );

  console.log(total)

  precoTotal.innerHTML =  `Valor total dos veículos: $ ${total}`

 // limpar os campos
  modelo.value = '';
  ident.value = '';
  ano.value = '';
  cor.value = '#000000';
  preco.value = '';

  modelo.focus();
  
}




