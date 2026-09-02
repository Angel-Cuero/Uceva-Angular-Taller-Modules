import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArquitecturaDeSoftwareRoutingModule } from './arquitectura-de-software-routing-module';
import { InfoArquitectura } from './pages/info-arquitectura/info-arquitectura';


@NgModule({
  declarations: [
    InfoArquitectura
  ],
  imports: [
    CommonModule,
    ArquitecturaDeSoftwareRoutingModule
  ]
})
export class ArquitecturaDeSoftwareModule { }
