var prompt = require('prompt-sync')();

const numero = prompt("Digite o número:");
console.log("A raiz do número é: " + raizQuadrada(numero));


function raizQuadrada(numero) {
    return Math.sqrt(numero);
}