import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SECCIONES_SISTEMA_DISENO } from '../../../core/config/sistemas-diseno.config';
import { SeccionSistemaDiseno } from '../interfaces/seccion-sistema-diseno.interface';

/**
 * Servicio para gestionar las secciones de sistemas de diseño.
 *
 * Se encarga de proporcionar métodos para obtener el contenido informativo
 * sobre sistemas de diseño. Actualmente devuelve un listado de secciones
 * de ejemplo definidas en `SECCIONES_SISTEMA_DISENO`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a las secciones.
 *
 * @example
 * ```ts
 * // Inyectando el servicio en un componente
 * constructor(private sistemasDisenoService: SistemasDisenoService) {}
 *
 * ngOnInit() {
 *   this.sistemasDisenoService.getAllSecciones().subscribe(secciones => {
 *     console.log(secciones);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class SistemasDisenoService {
  /**
   * Obtiene todas las secciones de sistemas de diseño disponibles.
   *
   * @returns Observable con el listado de secciones (`SeccionSistemaDiseno[]`).
   */
  getAllSecciones(): Observable<SeccionSistemaDiseno[]> {
    return of(SECCIONES_SISTEMA_DISENO);
  }
}
