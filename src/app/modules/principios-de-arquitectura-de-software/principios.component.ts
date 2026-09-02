import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección de principios de arquitectura.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con los principios de arquitectura, mostrando sus componentes hijos dentro
 * del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y se considera un **organismo**.
 *
 * @example
 * ```html
 * <app-principios></app-principios>
 * ```
 */
@Component({
  selector: 'app-principios',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class PrincipiosComponent { }
