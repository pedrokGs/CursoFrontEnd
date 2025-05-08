import { Component } from '@angular/core';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {
  nome: string = '';
  email: string = '';
  telefone: string = '';
  genero: string = '';
  idade: number | null = null;
  profissao: string = '';
  
  limparCampos(): void {
  this.nome = '';
  this.email = '';
  this.telefone = '';
  this.genero = '';
  this.idade = null;
  this.profissao = '';
  }

  enviarFormulario(): void {
    if(this.nome.trim().length < 3) {
      alert('Nome deve ter pelo menos 3 caracteres.');
      return;
    }
    if(this.email.trim().length < 5) {
      alert('Email deve ter pelo menos 5 caracteres.');
      return;
    }

    if(!this.email.includes('@') || !this.email.includes('.')) {
      alert('Email deve conter "@" e ".".');
      return;
    }
    if(this.genero !== 'masculino' && this.genero !== 'feminino') {
      alert('Gênero deve ser "masculino" ou "feminino".');
      return;
    }
    if(this.telefone.trim().length < 10) {
      alert('Telefone deve ter pelo menos 10 caracteres.');
      return;
    }
    if(this.idade === null || this.idade < 0) {
      alert('Idade deve ser um número positivo.');
      return;
    }
    if(this.profissao.trim().length < 3) {
      alert('Profissão deve ter pelo menos 3 caracteres.');
      return;
    }
    alert("Formulário enviado com sucesso!");
  }
}
