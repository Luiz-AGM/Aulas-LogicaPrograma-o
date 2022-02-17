console.log("===Condicionais===");

//entrada
const aluno = prompt ("Digite o nome do aluno:");
const nota = prompt ("Digite a nota (0-10):");
console.log(aluno, nota)

//processamento

//exemplo1
// let resposta = null;
// if (nota >=6) {
//     //console.log("Aprovado");
//     resposta = "Aprovado!";
//     //ou document.write - se quiser escrever o resultado na tela
// }

// if (nota <6 && nota >=4) {
//     //console.log ("Recuperação")
//     resposta = "Recuperação!";
// }

// if (nota <4) {
//     //console.log ("Reprovado")
//     resposta = "Reprovado!";
// }

//exemplo2 (if/else encadeado)
// if (nota >=6) {
//     resposta = "Aprovado!";
//     } if (resposta <4) {
//         resposta = "Reprovado"
//     } else {
//         resposta = "Recuperação"
//     }

// exemplo3 (if/else/if)

if (nota >=6) {
    resposta = "Aprovado!";
} else if (nota <4) {
    resposta = "Reprovado!";
} else {
    Resposta = "Recuperação!";
}
console.log(resposta)

//exemplo4 (switch/case)
// switch (nota) {
//     case "1":
//     case "2":
//     case "3":
//     case "4":
//     resposta = "Reprovado";
//         break;
//     default: "Nem um nem outro" //resposta padrao
//         break;
// }

//exemplo5 (switch / case - pratico)
const diadasemana = prompt ("Digite o dia da semana:");
let dia = null;
switch (diadasemana) {
    case "1":
        dia = "Dom"        
    break;
    case "2":
        dia = "Seg"        
    break;
    case "3":
        dia = "Ter"        
    break;
    case "4":
        dia = "Qua"        
    break;
    case "5":
        dia = "Qui"
    break;
    case "6":
        dia = "Sex"        
    break;
    case "7":
        dia = "Sab"        
    break;
    default: null;
    break;
}
    console.log (dia)

//saida
//document.write (aluno "<br>" reposta);
document.write (`
    Aluno: ${aluno} <br>
    Nota: ${nota} <br>
    Situação: ${resposta} <br>
    Dia da semana: ${dia}`);
