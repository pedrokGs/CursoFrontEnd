// Exemplo de script para manipulação DOM

function cliqueBtn() {
  // Manipulação pelo ID -> Variável simples
  let titulo = document.getElementById("titulo");
  let texto = "Modificado texto do título";
  console.log(titulo);
  titulo.innerText = "Meu titulo modificado";  

  let li = document.createElement("li");
  li.innerHTML = texto +'<button onclick="btnConfere(this)">Confere</button>';
  document.querySelector(".lista").appendChild(li);
  
  let descricao = document.querySelectorAll(".descricao");
  console.log(descricao);
  descricao.forEach(element => {
    element.style.color = "red";
  });

  texto = "Modificada a Cor da classe descricao"
  li.innerHTML = texto +'<button onclick="btnConfere(this)">Confere</button>';
  document.querySelector(".lista").appendChild(li);
}