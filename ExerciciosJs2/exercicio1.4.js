var prompt = require('prompt-sync')();

const numero = prompt("Digite um número decimal:");

console.log("Arredondado pra cima: " + Math.ceil(numero));
console.log("Arredondado para baixo: " + Math.floor(numero));
console.log("Arredondado para o mais próximo: " + Math.round(numero));

