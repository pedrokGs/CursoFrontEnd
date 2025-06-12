import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { CurriculosComponent } from './views/curriculos/curriculos.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { PainelVagasComponent } from './views/painel-vagas/painel-vagas.component';
import { PainelCurriculosComponent } from './views/painel-curriculos/painel-curriculos.component';
import { AdminComponent } from './views/admin/admin.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'curriculos',component:CurriculosComponent},
  {path: 'vagas', component:VagasComponent},
  {path: 'painel-vagas', component: PainelVagasComponent},
  {path: 'painel-curriculos', component: PainelCurriculosComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
