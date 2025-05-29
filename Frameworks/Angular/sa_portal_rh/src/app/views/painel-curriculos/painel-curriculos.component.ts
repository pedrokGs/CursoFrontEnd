import { Component } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-painel-curriculos',
  templateUrl: './painel-curriculos.component.html',
  styleUrls: ['./painel-curriculos.component.scss']
})
export class PainelCurriculosComponent {
  public curriculo: Curriculo = new Curriculo("", "", 0, "", "", [], "", "", [], [], [], []);

  public curriculos: Curriculo[] = [];

  constructor(private _curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos() {
    this._curriculoService.getCurriculos().subscribe((retornaCurriculo) => {
      this.curriculos = retornaCurriculo.map((item) => {
        return new Curriculo(
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
        );
      });
    });
  }

  listarCurriculoUnico(curriculo: Curriculo) {
    this.curriculo = curriculo;
  }

  cadastrarCurriculo() {
    this._curriculoService.cadastrarCurriculo(this.curriculo).subscribe(() => {
      this.curriculo = new Curriculo("", "", 0, "", "", [], "", "", [], [], [], []);
      this.listarCurriculos();
      alert("Curriculo cadastrada com sucesso");
    }, (err) => {
      console.error("Exception: ", err);
    });
  }

atualizarCurriculo(id:any){
      this._curriculoService.atualizarCurriculo(id, this.curriculo).subscribe(() => {
      this.curriculo = new Curriculo("", "", 0, "", "", [], "", "", [], [], [], []);
      this.listarCurriculos();
      alert("Curriculo atualizada com sucesso");
    }, (err) => {
      console.error("Exception: ", err);
    });
  }

deletarCurriculo(id:any){
  this._curriculoService.removerCurriculo(id).subscribe(()=>{
    this.listarCurriculos();
    alert("Curriculo excluída com sucesso");
  }, (err) =>{
    console.error("Exception: ",err)
  })
}
}
