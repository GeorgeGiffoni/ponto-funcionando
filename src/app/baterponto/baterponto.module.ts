import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaterpontoRoutingModule } from './baterponto-routing.module';
import { PaginaPontoComponent } from './pagina-ponto/pagina-ponto.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PaginaPontoComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    BaterpontoRoutingModule
  ],

})
export class BaterpontoModule { }
