import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaRelatorioComponent } from './pagina-relatorio/pagina-relatorio.component';

const routes: Routes = [
  {path: '', component: PaginaRelatorioComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioRoutingModule { }
