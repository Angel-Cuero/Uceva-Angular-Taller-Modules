import { Component, inject, OnInit } from '@angular/core';
import { Principio } from '../../interfaces/principio.interface';
import { PrincipiosService } from '../../services/principios.service';

/**
 * Componente contenedor de principios de arquitectura.
 *
 * Se utiliza para gestionar y mostrar un listado de principios
 * de arquitectura de software utilizando el componente `CardPrincipioComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `PrincipiosService`
 * para obtener los principios y pasarlos al componente de tarjeta.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-principios></app-list-principios>
 * ```
 */
@Component({
  selector: 'app-list-principios',
  template: `
    <div class="container">
      <div class="row g-4">
        @for (principio of principios; track principio) {
          <div class="col-md-6 col-lg-3">
            <app-card-principio [principio]="principio"></app-card-principio>
          </div>
        }
      </div>
    </div>
  `,
  standalone: false,
})
export class ListPrincipiosComponent implements OnInit {
  /**
   * Listado de principios obtenidos desde el servicio.
   * @type {Principio[]}
   */
  principios: Principio[] = [];

  /**
   * Servicio para obtener principios.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private principiosService = inject(PrincipiosService);

  /**
   * Inicializa el componente y carga los principios.
   * @remarks
   * Se suscribe al método `getAllPrincipios()` del servicio y
   * asigna los datos recibidos a la propiedad `principios`.
   */
  ngOnInit(): void {
    this.principiosService.getAllPrincipios().subscribe({
      next: (principios) => this.principios = principios,
      error: (error) => console.error(error),
    })
  }
}
