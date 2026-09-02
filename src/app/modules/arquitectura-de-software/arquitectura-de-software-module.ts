import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArquitecturaDeSoftwareRoutingModule } from './arquitectura-de-software-routing-module';
import { InfoArquitectura } from './pages/info-arquitectura/info-arquitectura';
import { CardArquitectura } from './components/card-arquitectura/card-arquitectura';


@NgModule({
  declarations: [
    InfoArquitectura,
    CardArquitectura
  ],
  imports: [
    CommonModule,
    ArquitecturaDeSoftwareRoutingModule
  ]
})
export class ArquitecturaDeSoftwareModule { }
