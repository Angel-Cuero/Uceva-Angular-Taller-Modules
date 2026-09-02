import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'arquitectura-de-software',
    loadChildren: () => import('./modules/arquitectura-de-software/arquitectura-de-software-module').then(m => m.ArquitecturaDeSoftwareModule)
  },
  {
    path: 'principios-de-arquitectura',
    loadChildren: () => import('./modules/principios-de-arquitectura-de-software/principios-de-arquitectura-de-software-module').then(m => m.PrincipiosDeArquitecturaDeSoftwareModule)
  },
  {
    path: 'sistemas-de-diseno',
    loadChildren: () => import('./modules/sistemas-de-diseño/sistemas-de-diseño-module').then(m => m.SistemasDeDiseñoModule)
  },
  {
    path: '**',
    redirectTo: 'arquitectura-de-software'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
