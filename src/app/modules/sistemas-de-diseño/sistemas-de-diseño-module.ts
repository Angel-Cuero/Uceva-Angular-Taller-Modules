import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemasDeDiseñoRoutingModule } from './sistemas-de-diseño-routing-module';
import { SistemasComponent } from './sistemas.component';
import { ListSistemasComponent } from './pages/list-sistemas/list-sistemas.component';
import { CardSeccionComponent } from './components/card-seccion/card-seccion.component';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    SistemasComponent,
    ListSistemasComponent,
    CardSeccionComponent,
  ],
  imports: [
    CommonModule,
    SistemasDeDiseñoRoutingModule,
    SharedModule,
  ]
})
export class SistemasDeDiseñoModule { }
