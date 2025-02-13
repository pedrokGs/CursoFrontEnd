const prompt = require('prompt-sync')();

NumA = prompt("Informe o priemeiro número: ");
NumB = prompt("Informe o segundo número: ");

console.log("Adição: " + (NumA + NumB));
console.log("Subtração:" + (NumA - NumB));
console.log("Multiplicação: " + (NumA * NumB));

if(NumB != 0)
    console.log("Divisão: " + (NumA / NumB));
else
    console.log("Não é possível realizar uma divisão por 0");