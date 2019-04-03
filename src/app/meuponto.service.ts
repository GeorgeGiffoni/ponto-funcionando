import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeupontoService {

  private funcionarios: Funcionario[]= [];

  constructor() { 
    
      const _temp = localStorage.getItem('funcionario');
      this.funcionarios = _temp ? JSON.parse(_temp) : [];
    
  }



  getAllItens(): Funcionario[] {
    return this.funcionarios;
  }
    

  addItem(item:Funcionario) {
    this.funcionarios.push(item);
    localStorage.setItem('funcionario', JSON.stringify(this.funcionarios) );
}

  
}



export class Funcionario{
   nome :string;
   cargo : string;
   cargahoraria :string;

   constructor(nome :string, cargo:string, cargahoraria:string)
   {this.cargo = cargo;this.nome=nome;this.cargahoraria = cargahoraria}
  }