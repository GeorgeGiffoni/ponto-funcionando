import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPontoComponent } from './pagina-ponto/pagina-ponto.component';

const routes: Routes = [
  { path: '', component: PaginaPontoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaterpontoRoutingModule { }
