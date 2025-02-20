// Arrays e Matrizes

// Declaração de um Array
let dados = []; // Uso do colchetes permite a declaração de um array
let numeros = [1,2,3,4,5,6,7,8,9];
let palavras = ["Bola", "Sapato", "Caixa"];

console.log(numeros.length); // Quantidade de elementos do array

// Índices do array

// Imprimir o 5º elemento de um array
console.log(numeros[4]);

palavras.push("Cachorro");
console.log(palavras);

palavras.unshift("Prédio");
console.log(palavras);

// Remover elementos
palavras.pop();
console.log(palavras);

palavras.shift();
console.log(palavras);

// Foreach - Repetição em um vetor
palavras.forEach(palavra => {
  console.log(palavra);
});

// Splice 
palavras.splice(1, 1)
console.log(palavras);

// Manipulação de Arrays
let numerosDobro = numeros.map(x => x * 10);
console.log(numerosDobro);