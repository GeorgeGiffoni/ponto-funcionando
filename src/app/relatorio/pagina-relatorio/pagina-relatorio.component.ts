import { Component, OnInit } from '@angular/core';
import { MeupontoService, Funcionario } from 'src/app/meuponto.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-pagina-relatorio',
  templateUrl: './pagina-relatorio.component.html',
  styleUrls: ['./pagina-relatorio.component.scss'],
})
export class PaginaRelatorioComponent implements OnInit {

  constructor(private service : MeupontoService) { }

  funcionarios : Funcionario[] = [];



  ngOnInit() {
    this.exibir();
  }

  exibir(){
    this.funcionarios = this.service.getAllItens();
  }

}
