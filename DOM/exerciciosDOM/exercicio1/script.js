//Exercicio 1
let titulo = document.querySelector("h1");
let paragrafo = document.querySelector("p");
let botao = document.querySelector("button");

console.log(titulo.textContent);
console.log(paragrafo.textContent);
console.log(botao.textContent);

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