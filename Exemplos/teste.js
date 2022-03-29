 
// let item = 1;
// let carros = [];

// const marca = document.getElementById('marca');
// const modelo = document.getElementById('modelo');
// const ano = document.getElementById('ano');
// const cor = document.getElementById('cor');
// const placa = document.getElementById('placa');
// const tipo = document.getElementById('tipo');
// const valor = document.getElementById('valor');
// const lista = document.getElementById("lista");

// function carro (item,marca,modelo,ano,cor,placa,tipo,valor) {
//     this.item = item;
//     this.marca = marca.value;
//     this.modelo = modelo.value;
//     this.ano = ano.value;
//     this.cor = cor.value;
//     this.placa = placa.value;
//     this.tipo = tipo.value;
//     this.valor = valor.value
// }

// function cadastrar() {
//     let carro1 = new carro (item, marca, modelo, ano, cor, placa, tipo, valor);
    
//     carros.push(carro1);
//     lista.innerHTML = carros.map(function(carro1){
//         return `<tr>
//             <td>${carro1.item}</td>
//             <td>${carro1.marca}</td>
//             <td>${carro1.modelo}</td>
//             <td>${carro1.ano}</td>
//             <td>${carro1.cor}</td>
//             <td>${carro1.placa}</td>
//             <td>${carro1.tipo}</td>
//             <td>${carro1.valor}</td>
//         </tr>`
//     }).join("");
//     console.log(carro1)
//     item++;

// }

// function limpar() {
//     marca.value = '';
//     modelo.value = '';
//     ano.value = '';
//     cor.value = '#000000';
//     placa.value = '';
//     tipo.value = 'zero';
//     valor.value = '';
   
//     console.log(marca.value)
// }
// function zeraLista() {
//     carros.value = '' 
//     lista.innerHTML =  
//     `<tr">
//         <td colspan="8">lista vazia.</td>
//     </tr>`;
// };

/*
AVALIAÇÃO
1 - Fazer uma cópia do exercício da loja de carros
2 - Adicionar uma coluna com um ID (ao lado do modelo)
3 - Adicionar no formulário um campo para receber o preço
4 - Exibir uma coluna com o preço
5 - Exibir o total de todos os veículos cadastrados (requisito -> USAR REDUCE)
*/

console.log("=== CARROS ===");

const carros = [];

function adicionar() {

    const id = carros.length + 1;
    const modelo = document.getElementById("modelo");
    const ano = document.getElementById("ano");
    const cor = document.getElementById("cor");
    const situacao = document.getElementById("situacao");    
    const preco = document.getElementById("preco");
    const precoTotal = document.getElementById("precoTotal");

    console.log(id, modelo.value, ano.value, cor.value, situacao.value, preco.value, precoTotal.value);

    const carro = {
        id: id, 
        modelo: modelo.value,
        ano: ano.value,
        cor: cor.value,
        situacao: situacao.value,
        preco: parseFloat(preco.value),
    };
    
    carros.push(carro);
    console.table(carros);  

    let total = carros.reduce((precoTotal , carro) => precoTotal  + carro.preco, 0);

    precoTotal.innerHTML = `R$ ${total.toFixed(2)}`
   
    const lista = document.getElementById("lista");

    lista.innerHTML = carros.map(function(carro) {
        return `<tr>
            <td>${carro.id}</td>
            <td>${carro.modelo}</td>
            <td>${carro.ano}</td>
            <td>${carro.cor}</td>
            <td>${carro.situacao}</td>
            <td>R$ ${carro.preco.toFixed(2)}</td>
        </tr>`;
    }).join("");

    modelo.value = '';
    ano.value = '';
    cor.value = '#000000';
    situacao.value = '';
    preco.value = '';

    modelo.focus();
};




