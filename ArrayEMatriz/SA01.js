const prompt = require("prompt-sync")();
let notas = [];  // Declarado o valor de notas



function inserirNotas(){
    let nota = Number(prompt("Digite a nota: "));
    notas.push(nota);
}

function calcularMedia() {
    let media = notas.reduce((media, nota) => media + nota)/notas.length;
    console.log("A média é: " + media);
}

function menu() {
    let continuar = true;
    let operador;
    while (continuar) {
        console.log("===Sistema de Notas===");
        console.log("|1. Inserir Notas    |");
        console.log("|2. Calcular Média   |");
        console.log("|3. Sair             |");
        console.log("======================");
        
        let operacao = prompt("Informe a opção: ");
        switch (operador) {
            case "1":
                inserirNotas();
                break;
        
            case "2":
                calcularMedia();
                break;

            case "3":
                continuar = false
                console.log("Encerrando o programa");
                break;
            default:
                console.log("Opção inválida!");
                break;
        }
    }
}

