// Manipulação DOM
// Criar um header -> DOM

let header = document.createElement("header");

// Style do header
header.style.backgroundColor = 'black';
header.style.height = '8vh';

// Adicionar o header -> body
document.body.appendChild(header);
document.body.style.margin = 0;

// Criar uma navBar
let navBar = document.createElement("div");
navBar.classList.add('navBar');

// Adicionar a navBar -> header
header.appendChild(navBar);

// Preencher a navBar
let menuItems = ['Home', 'About','Products', 'Contact'];
menuItems.forEach(element => {
  let a = document.createElement('a');
  a.innerText = element;
  a.classList.add('menuItens');
  navBar.appendChild(a);
}
);

// Criar um footer
let footer = document.createElement('footer');
footer.classList.add('footer');

// Adicionar o footer -> body
document.body.appendChild(footer);

// Preencher o footer
let footerText = document.createElement('p');
footerText.innerText = 'Todos os direitos reservados';

// Adicionar o footerText -> footer
footer.appendChild(footerText);