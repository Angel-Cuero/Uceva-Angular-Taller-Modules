import { Component, Input } from '@angular/core';
import { Principio } from '../../interfaces/principio.interface';

/**
 * Componente de tarjeta de principio de arquitectura.
 *
 * Se utiliza para mostrar cada principio de arquitectura de software
 * en una tarjeta visual, mostrando su título, descripción, un listado
 * de características y un listado de beneficios.
 *
 * @remarks
 * Este componente recibe un principio desde un componente padre a través
 * del Input `principio`. Forma parte de la capa de presentación de la
 * aplicación y se considera un **organismo** dentro del sistema de diseño
 * atómico.
 *
 * @example
 * ```html
 * <app-card-principio [principio]="principioItem"></app-card-principio>
 * ```
 */
@Component({
  selector: 'app-card-principio',
  templateUrl: './card-principio.component.html',
  standalone: false,
})
export class CardPrincipioComponent {
  /**
   * Principio de arquitectura que se mostrará en la tarjeta.
   * @type {Principio}
   * @remarks
   * Este Input permite pasar un principio desde un componente padre,
   * generalmente `ListPrincipiosComponent`. Cada principio debe cumplir
   * la interfaz `Principio`.
   */
  @Input() principio!: Principio;
}
