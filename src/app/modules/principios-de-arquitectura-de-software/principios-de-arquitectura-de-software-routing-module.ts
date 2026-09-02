import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipiosComponent } from './principios.component';
import { ListPrincipiosComponent } from './pages/list-principios/list-principios.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipiosComponent,
    children: [
      {
        path: 'list-principios',
        component: ListPrincipiosComponent,
      },
      {
        path: '**',
        redirectTo: 'list-principios',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipiosDeArquitecturaDeSoftwareRoutingModule { }
