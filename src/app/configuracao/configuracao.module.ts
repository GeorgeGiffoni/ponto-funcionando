import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracaoRoutingModule } from './configuracao-routing.module';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormularioCadastroComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ConfiguracaoRoutingModule
  ]

})
export class ConfiguracaoModule { }
