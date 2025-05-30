function validaForm(e) {
  e.preventDefault();

  let container = document.getElementById("container");
  let nomeInput = document.getElementById("nome");
  let emailInput = document.getElementById("email");
  let senhaInput = document.getElementById("senha");
  let confirmaSenhaInput = document.getElementById("confirma-senha");
  let telefoneInput = document.getElementById('telefone');
  let idadeInput = document.getElementById("idade");

  if (nomeInput.value.trim() == "") {
    alert("Preencha o campo Nome!");
    nomeInput.focus();
    return false;
  }

  if (emailInput.value.trim() === "") {
    alert("Preencha o campo email!");
    emailInput.focus();
    return false;
  }

  if (!validaEmail(emailInput.value.trim())){
    alert("Utilize um email válido!");
    emailInput.focus();
    return false;
  }

  if(senhaInput.value.trim() === "") {
    alert("Preencha o campo senha!");
    senhaInput.focus();
    return false;
  }

  if(confirmaSenhaInput.value.trim() === ""){
    alert("Confirme sua senha!");
    confirmaSenhaInput.focus();
    return false;
  }

  if (!(senhaInput.value.trim() === confirmaSenhaInput.value.trim())){
    alert("As senhas não coincidem!");
    return false;
  }

  if(telefoneInput.value.trim() === ""){
    alert("Preencha o campo telefone");
    telefoneInput.focus();
    return false;
  }


  if(idadeInput.value.trim() === ""){
    alert("Preencha o campo idade");
    idadeInput.focus();
    return false;
  }

  container.classList.add("validado");
  
  return true;
}

const validaEmail = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validaForm);