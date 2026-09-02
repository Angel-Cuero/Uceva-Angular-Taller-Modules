import { Component } from '@angular/core';
import { INFORMACION_ARQUITECTURA } from '../../../../core/config/arquitectura.config';

/**
 * Componente que muestra información sobre la Arquitectura de Software.
 *
 * Presenta conceptos fundamentales como atributos de calidad,
 * alineación estratégica y el rol del arquitecto de software.
 * 
 * @example
 * ```html
 * <app-info-arquitectura></app-info-arquitectura>
 * ```
 */
@Component({
  selector: 'app-info-arquitectura',
  standalone: false,
  templateUrl: './info-arquitectura.html',
  styleUrl: './info-arquitectura.scss',
})
export class InfoArquitectura {

  informacion = INFORMACION_ARQUITECTURA;

}
