import { Component, Input } from '@angular/core';
import { SeccionSistemaDiseno } from '../../interfaces/seccion-sistema-diseno.interface';

/**
 * Componente de tarjeta de sección de sistema de diseño.
 *
 * Se utiliza para mostrar cada sección informativa de sistemas de diseño
 * en una tarjeta visual, mostrando su título, descripción, contenido ampliado
 * y un listado de puntos destacados.
 *
 * @remarks
 * Este componente recibe una sección desde un componente padre a través del
 * Input `seccion`. Forma parte de la capa de presentación de la aplicación y
 * se considera un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-card-seccion [seccion]="seccionItem"></app-card-seccion>
 * ```
 */
@Component({
  selector: 'app-card-seccion',
  templateUrl: './card-seccion.component.html',
  standalone: false,
})
export class CardSeccionComponent {
  /**
   * Sección de sistema de diseño que se mostrará en la tarjeta.
   * @type {SeccionSistemaDiseno}
   * @remarks
   * Este Input permite pasar una sección desde un componente padre,
   * generalmente `ListSistemasComponent`. Cada sección debe cumplir
   * la interfaz `SeccionSistemaDiseno`.
   */
  @Input() seccion!: SeccionSistemaDiseno;
}
