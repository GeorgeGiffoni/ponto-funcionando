import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabecalhoRoutingModule } from './cabecalho-routing.module';
import { MeuCabecalhoComponent } from './meu-cabecalho/meu-cabecalho.component';

@NgModule({
  declarations: [
    MeuCabecalhoComponent
  ],

  imports: [
    CommonModule,
    CabecalhoRoutingModule
  ],

  exports: [
    MeuCabecalhoComponent
  ]

})
export class CabecalhoModule { }
