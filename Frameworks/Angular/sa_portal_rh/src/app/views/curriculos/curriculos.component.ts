import { Component } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.scss'],
})
export class CurriculosComponent {
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
}
