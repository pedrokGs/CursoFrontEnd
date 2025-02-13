var prompt = require('prompt-sync')();

var numero = Number(prompt("Informe um número: "));

for(let i = 0; i <= 100; i++){
    console.log(numero + " x " + i + " = " + numero * i);
}

