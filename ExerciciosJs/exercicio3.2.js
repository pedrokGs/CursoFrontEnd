const prompt = require('prompt-sync')();

let idade = Number(prompt("Informe a sua idade: "));

if (idade < 16)
    console.log("Você não pode votar");
else if (idade < 18)
    console.log("Seu voto é opcional");
else
    console.log("Seu voto é obrigatório e você pode tirar CNH");