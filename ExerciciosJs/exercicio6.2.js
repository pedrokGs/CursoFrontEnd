var prompt = require('prompt-sync')();

const peso = Number(prompt("Informe o peso: "));
const altura = Number(prompt("Informe a altura: "));

const imc = calculaIMC(peso, altura);

console.log(`Seu IMC é ${imc.toFixed(2)}`);

if (imc < 18.5)
    console.log("Abaixo do peso");
else if (imc < 24.9)
    console.log("Peso normal");
else if (imc < 29.9)
    console.log("Sobrepeso");
else if (imc < 34.9)
    console.log("Obesidade grau 1");
else if (imc < 39.9)
    console.log("Obesidade grau 2");
else
    console.log("Obesidade grau 3");

function calculaIMC(peso, altura) {
    return peso / (altura * altura);
}