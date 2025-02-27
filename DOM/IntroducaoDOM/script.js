function alterarTexto() {
  document.getElementById("titulo").innerText = "Texto Alterado!";
}

  // getElementById - Seleção do elemento pelo ID
  let titulo = document.getElementById("titulo");
  // Variável comum
  titulo.style.color = "blue";
  
  // getElementsByClassName
  let paragrafos = document.getElementsByClassName("descricao");
  // Variável vetor/array
  paragrafos[0].style.color = "red";
  paragrafos[1].style.fontWeight = "bold";
  paragrafos[2].style.color = "green";

  // getElementsByTagName
  let todosParagrafos = document.getElementsByTagName("p"); 
  console.log(todosParagrafos.length);

  //querySelector - Primeiro Seletor
  let primeiroDescricao = document.querySelector("descricao");
  primeiroDescricao.style.color = "red";

  //querySelectorAll - Todos elementos -> Vetor
  let ps = document.querySelectorAll("p");
  ps.forEach(p => p.style.fontSize = "18px");


