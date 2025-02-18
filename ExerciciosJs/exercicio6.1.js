var prompt = require('prompt-sync')();

const numA = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

while (true) {
    tentativas += 1;
    let num = Number(prompt("Informe um número: "));
    if (num == numA) 
        break;
    else if (num < numA)
        console.log("O número é maior!");
    else
        console.log("O número é menor!");

}

console.log("Parabéns! Você acertou em " + tentativas + " tentativas!");
