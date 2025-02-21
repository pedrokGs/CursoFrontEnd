var prompt = require('prompt-sync')();

const numeroA = prompt("Digite o primeiro número:");
const numeroB = prompt("Digite o segundo número:");
console.log("O maior número é:" + maior(numeroA, numeroB));


function maior(numeroA, numeroB) {
    return Math.max(numeroA, numeroB);
}