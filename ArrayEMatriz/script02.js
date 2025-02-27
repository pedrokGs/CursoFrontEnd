// Operações avançadas em vetores (arrays)
let numeros = [10, 20, 30, 40, 50];

// Map- Percorre  faz uma ação
let numerosNovos = numeros.map(x=> x * 3);
console.log(numerosNovos);

// Filtros - Percorre e faz uma seleção

let numMaior20 = numeros.filter(x => x > 20);

console.log (numMaior20);

// Reduce
let soma = numeros.reduce((acumulador, valorAtual) => acumulador += valorAtual, 0);
console.log(soma); // 150

// Sort

let aleatorio = [6,5,7,2,9,0,1,3,4,8,6];
aleatorio.sort();
console.log(aleatorio);
