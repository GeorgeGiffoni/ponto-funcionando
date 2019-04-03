import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MeupontoService, Funcionario } from 'src/app/meuponto.service';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.scss'],
})
export class FormularioCadastroComponent implements OnInit {

  funcionario : any;
  constructor(private service : MeupontoService) { }

  ngOnInit() { 
    this.funcionario = {};
  }

  OnSubmit(meuparametro) {
    this.salvar(meuparametro);
  }

  salvar(formulario){
    var func = new Funcionario(formulario.value.nome,formulario.value.cargo,formulario.value.cargahoraria);
    this.service.addItem(func);
  }
}
