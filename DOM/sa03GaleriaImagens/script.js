// Galeria de Imagens -> DOM

let uploadInput = document.getElementById("upload");
let addButton = document.getElementById("addImage");
let galeria = document.getElementById("galeria");
let carrossel = document.getElementById("carrossel");

// Upload das imagens
let imagens = [];

addButton.addEventListener("click", () => {
  // Para pegar imagens do computador (local)
  // let file = uploadInput.files[0];
  // if(file){
  //   let reader = new FileReader();
  //   reader.onload = function (event) {
  //     let imageUrl = event.target.result;
  //     imagens.push(imageUrl);
  //   }
  // }

  imagemUrl = uploadInput.value.trim();
  if(imagemUrl === '') return;
  imagens.push(imagemUrl);
  atualizarGaleria();
  atualizarCarrossel();
  uploadInput.value = "";
});

// Atualizar Galeria

function atualizarGaleria() {
  galaria.innerHTML = "";
  imagens.forEach(
    (imagem, index)=> {
      let container = document.createElement("div");
      container.classList.add('imagem-container'); 
      
      let img = document.createElement("img");
      img.src = imagem;
      // Criar botão para remover imagem
      let removeBtn = document.createElement('button');
      removeBtn.innerHTML = "X";
      removeBtn.classList.add("remove");
      removeBtn.addEventListener('click', () => {
        imagens.splice[index, 1]
        atualizarGaleria();
        atualizarCarrossel();
      });
      galeria.appendChild(container);
      container.appendChild(img);
      container.appendChild(removeBtn);
    }
  );
}

// Atualizar Carrossel
function atualizarCarrossel() {
  carrossel.innerHTML = "";
  imagens.forEach(imagem => {
    let img = document.createElement('img');
    img.src = imagem;
    carrossel.appendChild(img)
  });

  iniciarCarrossel();
}

// Iniciar Carrossel
function iniciarCarrossel() {
  if(imagens.length > 0 ){
    let index = 0;
    setInterval(() => {
      index = (index+1)%imagens.length;
      carrossel.style.transform = 'translateX(-${index * 100}%)';
    }, 2000
  );
  }
}