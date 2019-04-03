import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'configuracao', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'configuracao', loadChildren: './configuracao/configuracao.module#ConfiguracaoModule'},
  { path: 'baterponto', loadChildren: './baterponto/baterponto.module#BaterpontoModule'},
  { path: 'relatorio', loadChildren: './relatorio/relatorio.module#RelatorioModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
