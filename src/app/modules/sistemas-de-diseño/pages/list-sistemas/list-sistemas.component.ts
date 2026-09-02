import { Component, inject, OnInit } from '@angular/core';
import { SeccionSistemaDiseno } from '../../interfaces/seccion-sistema-diseno.interface';
import { SistemasDisenoService } from '../../services/sistemas-diseno.service';

/**
 * Componente contenedor de sistemas de diseño.
 *
 * Se utiliza para gestionar y mostrar el contenido informativo sobre
 * sistemas de diseño utilizando el componente `CardSeccionComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `SistemasDisenoService`
 * para obtener las secciones y pasarlas al componente de tarjeta.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-sistemas></app-list-sistemas>
 * ```
 */
@Component({
  selector: 'app-list-sistemas',
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          @for (seccion of secciones; track seccion) {
            <app-card-seccion [seccion]="seccion"></app-card-seccion>
          }
        </div>
      </div>
    </div>
  `,
  standalone: false,
})
export class ListSistemasComponent implements OnInit {
  /**
   * Listado de secciones obtenidas desde el servicio.
   * @type {SeccionSistemaDiseno[]}
   */
  secciones: SeccionSistemaDiseno[] = [];

  /**
   * Servicio para obtener las secciones.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private sistemasDisenoService = inject(SistemasDisenoService);

  /**
   * Inicializa el componente y carga las secciones.
   * @remarks
   * Se suscribe al método `getAllSecciones()` del servicio y
   * asigna los datos recibidos a la propiedad `secciones`.
   */
  ngOnInit(): void {
    this.sistemasDisenoService.getAllSecciones().subscribe({
      next: (secciones) => this.secciones = secciones,
      error: (error) => console.error(error),
    })
  }
}
