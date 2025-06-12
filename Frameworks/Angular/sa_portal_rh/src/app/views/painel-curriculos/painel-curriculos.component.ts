import { Component } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-painel-curriculos',
  templateUrl: './painel-curriculos.component.html',
  styleUrls: ['./painel-curriculos.component.scss'],
})
export class PainelCurriculosComponent {
  public curriculo: Curriculo = new Curriculo(
    0,
    '',
    '',
    0,
    '',
    '',
    [],
    '',
    '',
    [],
    [],
    [],
    [],
    ''
  );

  public curriculos: Curriculo[] = [];

  constructor(private _curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos() {
    this._curriculoService.getCurriculos().subscribe((retornaCurriculo) => {
      this.curriculos = retornaCurriculo.map((item) => {
        return new Curriculo(
          item.id,
          item.cpf,
          item.nome,
          item.idade,
          item.email,
          item.contato,
          item.interesses,
          item.fotoPerfil,
          item.experiencia,
          item.formacao,
          item.qualificacoes,
          item.habilidades,
          item.idiomas,
          item.sobre
        );
      });
    });
  }

  listarCurriculoUnico(curriculo: Curriculo) {
    this.curriculo = curriculo;
  }

  cadastrarCurriculo() {
    if (
      !this.curriculo.cpf ||
      !this.curriculo.nome ||
      !this.curriculo.idade ||
      !this.curriculo.email ||
      !this.curriculo.contato
    ) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }
    if (this.curriculo.idade < 18) {
      alert('A idade mínima para cadastro é 18 anos.');
      return;
    }

    this.curriculo
      .interesses!.toString()
      .split(',')
      .forEach((interesse) => {
        if (interesse.trim() === '') {
          alert('Interesses não podem estar vazios.');
          throw new Error('Interesses não podem estar vazios.');
        }
      });

    this.curriculo.interesses = this.curriculo
      .interesses!.toString()
      .split(',')
      .map((interesse) => interesse.trim());
    this.curriculo.formacao = this.curriculo
      .formacao!.toString()
      .split(',')
      .map((formacao) => formacao.trim());
    this.curriculo.qualificacoes = this.curriculo
      .qualificacoes!.toString()
      .split(',')
      .map((qualificacao) => qualificacao.trim());
    this.curriculo.habilidades = this.curriculo
      .habilidades!.toString()
      .split(',')
      .map((habilidade) => habilidade.trim());
    this.curriculo.idiomas = this.curriculo
      .idiomas!.toString()
      .split(',')
      .map((idioma) => idioma.trim());
    this.curriculo.fotoPerfil = 'foto-perfil';
    this._curriculoService.cadastrarCurriculo(this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(
          0,
          '',
          '',
          0,
          '',
          '',
          [],
          '',
          '',
          [],
          [],
          [],
          [],
          ''
        );
        this.listarCurriculos();
        alert('Currículo cadastrado com sucesso');
      },
      (err) => {
        console.error('Exception: ', err);
      }
    );
  }

  atualizarCurriculo(id: any) {
    if (
      !this.curriculo.cpf ||
      !this.curriculo.nome ||
      !this.curriculo.idade ||
      !this.curriculo.email ||
      !this.curriculo.contato
    ) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }
    if (this.curriculo.idade < 18) {
      alert('A idade mínima para cadastro é 18 anos.');
      return;
    }

    this.curriculo
      .interesses!.toString()
      .split(',')
      .forEach((interesse) => {
        if (interesse.trim() === '') {
          alert('Interesses não podem estar vazios.');
          throw new Error('Interesses não podem estar vazios.');
        }
      });

    this.curriculo.interesses = this.curriculo
      .interesses!.toString()
      .split(',')
      .map((interesse) => interesse.trim());
    this.curriculo.formacao = this.curriculo
      .formacao!.toString()
      .split(',')
      .map((formacao) => formacao.trim());
    this.curriculo.qualificacoes = this.curriculo
      .qualificacoes!.toString()
      .split(',')
      .map((qualificacao) => qualificacao.trim());
    this.curriculo.habilidades = this.curriculo
      .habilidades!.toString()
      .split(',')
      .map((habilidade) => habilidade.trim());
    this.curriculo.idiomas = this.curriculo
      .idiomas!.toString()
      .split(',')
      .map((idioma) => idioma.trim());
    this.curriculo.fotoPerfil = 'foto-perfil';
    this._curriculoService.atualizarCurriculo(id, this.curriculo).subscribe({
      next: () => {
        this.curriculo = new Curriculo(
          0,
          '',
          '',
          0,
          '',
          '',
          [],
          '',
          '',
          [],
          [],
          [],
          [],
          ''
        );
        this.listarCurriculos();
        alert('Curriculo atualizada com sucesso');
      },
      error: (err) => {
        console.error('Exception: ', err);
      },
    });
  }

  deletarCurriculo(id: any) {
    if (!id) {
      alert('ID do currículo não fornecido.');
      return;
    }

    if (
      !confirm(
        'Tem certeza que deseja excluir este currículo?\n CPF: ' +
          this.curriculo.cpf +
          '\n Id: ' +
          this.curriculo.id
      )
    ) {
      return;
    }

    this._curriculoService.removerCurriculo(id).subscribe(
      () => {
        this.listarCurriculos();
        alert('Curriculo excluído com sucesso');
      },
      (err) => {
        console.error('Exception: ', err);
      }
    );
  }
}
