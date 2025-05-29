import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss'],
})
export class PainelVagasComponent implements OnInit {
  public vaga: Vaga = new Vaga(0, '', '', '', 0);

  public vagas: Vaga[] = [];

  constructor(private _vagaService: VagaService) {}

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas() {
    this._vagaService.getVagas().subscribe((retornaVaga) => {
      this.vagas = retornaVaga.map((item) => {
        return new Vaga(
          item.id,
          item.nome,
          item.foto,
          item.descricao,
          item.salario
        );
      });
    });
  }

  listarVagaUnica(vaga: Vaga) {
    this.vaga = vaga;
  }

  cadastrarVaga() {
    this._vagaService.cadastrarVaga(this.vaga).subscribe(() => {
      this.vaga = new Vaga(0, '', '', '', 0);
      this.listarVagas();
      alert("Vaga cadastrada com sucesso");
    }, (err) => {
      console.error("Exception: ", err);
    });
  }

atualizarVaga(id:any){
      this._vagaService.atualizarVaga(id, this.vaga).subscribe(() => {
      this.vaga = new Vaga(0, '', '', '', 0);
      this.listarVagas();
      alert("Vaga atualizada com sucesso");
    }, (err) => {
      console.error("Exception: ", err);
    });
  }

deletarVaga(id:any){
  this._vagaService.removerVaga(id).subscribe(()=>{
    this.listarVagas();
    alert("Vaga excluída com sucesso");
  }, (err) =>{
    console.error("Exception: ",err)
  })
}
}
