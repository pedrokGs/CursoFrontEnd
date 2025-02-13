// Estruturas de Dados

// Condicionais (if, else, switch case)

var precoProduto = 150;

if (precoProduto >= 100) {
    console.log("Valor a pagar: " + precoProduto * 0.9);
} else {
    console.log("Valor a pagar: " + precoProduto);
}

//  Switch Case
var mes = 2;
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
        
    case 2:
        console.log("Fevereiro");
        break;

    case 3:
        console.log("Março");
        break;

    default:
        console.log("Outro Mês");
        break;
}

//  Estrutura de Repetição (For, While)

//  for(Ponto de início; Ponto de parada; Ponto de incremento)
for (let i = 0; i < 10; i++) {
    console.log("índice: " + i);
}

//  while(condição de parada == false)
var continuar = true;
var numeroEscolhido = 3;
var tentativas = 0;

while (continuar) {
    let numeroSorteado = Math.round(Math.random()*10);
    if (numeroEscolhido == numeroSorteado) {
        continuar = false;
    }
    tentativas++;
    console.log("N° de Tentativas: " + tentativas);
}

// Funções (Métodos)

function saudacao(nome) {
    return "Olá " + nome + "!!!";
}

console.log(saudacao("Pedro"));