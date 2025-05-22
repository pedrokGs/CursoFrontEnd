import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss']
})
export class PainelVagasComponent implements OnInit{
  public vaga:Vaga = new Vaga(0, '', '', '', 0);

  public vagas: Vaga[] = [];

  constructor(private _vagaService: VagaService){}

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas(){
    this._vagaService.getVagas().subscribe(
      (retornaVaga) => {
        
      }
    )
  }
}
