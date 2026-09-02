import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección de sistemas de diseño.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con los sistemas de diseño, mostrando sus componentes hijos dentro del
 * `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y se considera un **organismo**.
 *
 * @example
 * ```html
 * <app-sistemas></app-sistemas>
 * ```
 */
@Component({
  selector: 'app-sistemas',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class SistemasComponent { }
