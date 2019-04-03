import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioRoutingModule } from './relatorio-routing.module';
import { PaginaRelatorioComponent } from './pagina-relatorio/pagina-relatorio.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    PaginaRelatorioComponent,
    CardComponent
  ],

  imports: [
    CommonModule,
    RelatorioRoutingModule
  ],
  exports: [ 
    PaginaRelatorioComponent
  ]
})
export class RelatorioModule { }
