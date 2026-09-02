import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SistemasComponent } from './sistemas.component';
import { ListSistemasComponent } from './pages/list-sistemas/list-sistemas.component';

const routes: Routes = [
  {
    path: '',
    component: SistemasComponent,
    children: [
      {
        path: 'list-sistemas',
        component: ListSistemasComponent,
      },
      {
        path: '**',
        redirectTo: 'list-sistemas',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemasDeDiseñoRoutingModule { }
