import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent implements OnInit {
  public vagas: Vaga[] = [];

  constructor(private _vagaService: VagaService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas() {
    this._vagaService.getVagas().subscribe(
      (retornaVaga) => {
        this.vagas = retornaVaga.map((item) => {
          return new Vaga(
            item.id, item.nome, item.foto, item.descricao, item.salario
          );
        }
        );
      }
    )
  }

}
