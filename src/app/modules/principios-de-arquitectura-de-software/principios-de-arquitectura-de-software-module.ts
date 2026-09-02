import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipiosDeArquitecturaDeSoftwareRoutingModule } from './principios-de-arquitectura-de-software-routing-module';
import { PrincipiosComponent } from './principios.component';
import { ListPrincipiosComponent } from './pages/list-principios/list-principios.component';
import { CardPrincipioComponent } from './components/card-principio/card-principio.component';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    PrincipiosComponent,
    ListPrincipiosComponent,
    CardPrincipioComponent,
  ],
  imports: [
    CommonModule,
    PrincipiosDeArquitecturaDeSoftwareRoutingModule,
    SharedModule,
  ]
})
export class PrincipiosDeArquitecturaDeSoftwareModule { }
