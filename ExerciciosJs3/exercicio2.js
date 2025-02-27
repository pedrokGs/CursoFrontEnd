let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
  console.log("Número " + i + " - " + numeros[i]);
}

numeros.forEach(numero => {
  console.log(numero);
});