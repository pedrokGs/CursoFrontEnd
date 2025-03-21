// Script para o jogo de quiz interativo

let perguntas = [];
let perguntaAtual = 0;

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const proximaEl = document.getElementById("proxima");
const resultadoEl = document.getElementById("resultado");

// Carregar perguntas

fetch("perg.json")
  .then((response) => response.json())
  .then(data => {
    perguntas = data;
    carregarPergunta();
  })
  .catch((error) => console.log("Erro ao carregar perguntas: ", error));

function carregarPergunta() {
  perguntaEl.innerText = "";
  opcoesEl.innerText = "";
  proximaEl.disabled = true;

  if (perguntaAtual >= perguntas.length) {
    perguntaEl.innerText = "Quiz finalizado!";
    opcoesEl.innerHTML = "";
    proximaEl.style.display = "none";
    return;
  }
  const p = perguntas[perguntaAtual];
  perguntaEl.innerText = p.pergunta;
  opcoesEl.innerHTML = "";

  p.opcoes.forEach((opcao) => {
    const btn = document.createElement("button");
    btn.innerText = opcao;
    btn.classList.add("opcao");
    btn.addEventListener("click", () => verificarResposta(opcao, btn));
    opcoesEl.appendChild(btn);
  });
}

function verificarResposta(opcao, btn) {
  const respostaCorreta = perguntas[perguntaAtual].resposta;
  if (opcao === respostaCorreta) {
    btn.classList.add("correta");
    resultadoEl.innerText = "Correta!";
  } else {
    btn.classList.add("errada");
    resultadoEl.innerText("Errado! A resposta correta era: ${respostaCorreta}");
  }

  document
    .querySelector(".opcao")
    .forEach((b) => (b.disabled = true), (proximaEl.disabled = false));
}

document.getElementById("proxima").addEventListener("click", () => {
  perguntaAtual++;
  carregarPergunta();
});
