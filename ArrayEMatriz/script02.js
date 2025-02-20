// Operações avançadas em vetores (arrays)

// Filtros
let numeros = [10, 20, 30, 40, 50];

let numMaior20 = numeros.filter(x => x > 20);

console.log (numMaior20);

// Reduce
let soma = numeros.reduce((acumulador, valorAtual) => acumulador += valorAtual, 0);
console.log(soma); // 150
