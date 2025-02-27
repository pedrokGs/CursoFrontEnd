//Exercicio 1
let titulos = document.getElementsByTagName("h1");
let paragrafos = document.getElementsByTagName("p");
let botoes = document.getElementsByTagName("button");

console.log(titulos[0].textContent);
console.log(paragrafos[0].textContent);
console.log(botoes[0].textContent);

//Exercicio 2
function mudarTexto() {
  let titulo = document.getElementById("titulo");
  let paragrafo = document.getElementsByClassName("paragrafo");
  titulo.textContent = "Texto alterado!";
  paragrafo[0].textContent ="Texto alterado!";
}

//Exercicio 3
function mudarCor() {
  document.body.style.background = "blue";
}


//Exercicio 4
var editado = false;

function mudarCSS(){
  if(!editado){
    document.getElementById("titulo").classList.add("classeCSS");
    editado = true;
  }else{
    document.getElementById("titulo").classList.remove("classeCSS");
    editado = false;
  }
}