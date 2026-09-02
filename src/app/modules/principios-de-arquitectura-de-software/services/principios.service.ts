import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRINCIPIOS } from '../../../core/config/principios.config';
import { Principio } from '../interfaces/principio.interface';

/**
 * Servicio para gestionar los principios de arquitectura de software.
 *
 * Se encarga de proporcionar métodos para obtener los principios
 * de la aplicación. Actualmente devuelve un listado de principios
 * de ejemplo definidos en `PRINCIPIOS`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a los principios.
 *
 * @example
 * ```ts
 * // Inyectando el servicio en un componente
 * constructor(private principiosService: PrincipiosService) {}
 *
 * ngOnInit() {
 *   this.principiosService.getAllPrincipios().subscribe(principios => {
 *     console.log(principios);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class PrincipiosService {
  /**
   * Obtiene todos los principios de arquitectura disponibles.
   *
   * @returns Observable con el listado de principios (`Principio[]`).
   */
  getAllPrincipios(): Observable<Principio[]> {
    return of(PRINCIPIOS);
  }
}
