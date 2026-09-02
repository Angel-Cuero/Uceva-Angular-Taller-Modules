import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoArquitectura } from './pages/info-arquitectura/info-arquitectura';

const routes: Routes = [
  {
    path: 'info-arquitectura',
    component: InfoArquitectura
  },
  {
    path: '**',
    redirectTo: 'info-arquitectura'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArquitecturaDeSoftwareRoutingModule { }
