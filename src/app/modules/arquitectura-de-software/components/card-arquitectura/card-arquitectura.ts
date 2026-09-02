import { Component, Input } from '@angular/core';
import { ArquitecturaInfo } from '../../interfaces/arquitectura.interface';

/**
 * Componente que muestra una tarjeta con información sobre la Arquitectura de Software.
 */
@Component({
  selector: 'app-card-arquitectura',
  standalone: false,
  templateUrl: './card-arquitectura.html',
  styleUrl: './card-arquitectura.scss',
})
export class CardArquitectura {
  @Input() info!: ArquitecturaInfo;
}
