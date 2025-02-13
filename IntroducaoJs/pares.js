var prompt = require('prompt-sync')();

var numero = Number(prompt("Informe um intervalo de números para ver os pares: "));

for (let i = 0; i <= numero; i++) {
    if (i % 2 == 0)
        console.log(i);
}

/*

for(let i = 0; i <= 20; i++){
    if(i % 2 == 0)
        console.log(i);
}

*/