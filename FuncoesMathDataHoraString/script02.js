// Funções de String (Texto)

var texto = "Aula de Javascript";

console.log(texto.length); // Contar o número de caractéres

console.log(texto.toUpperCase()); // Tudo maíusculo

console.log(texto.toLowerCase()); // Tudo minúsculo

// Manipulação de texto
console.log(texto.substring(0, 4)); // Aula

console.log(texto.slice(-10)); // Javascript

console.log(texto.replace("Javascript", "Typescript"));

// Split (usar um caracter em comum para separar em um vetor)
let linguagens = "Javacript, C++, Python, Java, PHP";
let arrayLinguagens = linguagens.split(", ");
console.log(arrayLinguagens);

// Trim
let tesoura = "  Javascript  ";
console.log(tesoura.trim());