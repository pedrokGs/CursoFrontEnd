var prompt = require('prompt-sync')();
// Exercicio 1 - par ou impar

var numero = Number(prompt("Informe um número: "));

if (numero%2==0)
    console.log("O Número é par!");
else
    console.log("O número é impar!");

// Exercício 2 - Laço for

for (let i = 0; i <= 100; i++) {
    console.log(i);
}

