/**
 * Interfaz que representa un principio de arquitectura de software.
 *
 * Contiene la información necesaria para presentar en la interfaz
 * cada principio de arquitectura: un identificador, un nombre,
 * una descripción general, sus características principales y
 * los beneficios que aporta a un sistema de software.
 *
 * @remarks
 * Cada principio debe tener un `id` único, un `titulo` que lo
 * identifique, una `descripcion` que explique su concepto, un
 * listado de `caracteristicas` y un listado de `beneficios`.
 *
 * @example
 * ```ts
 * const principio: Principio = {
 *   id: 1,
 *   titulo: 'Modularidad',
 *   descripcion: 'Dividir el sistema en módulos independientes.',
 *   caracteristicas: ['Módulos independientes', 'Responsabilidades claras'],
 *   beneficios: ['Mantenibilidad', 'Reutilización']
 * };
 * ```
 */
export interface Principio {
  /** Identificador único del principio */
  id: number;

  /** Título o nombre del principio */
  titulo: string;

  /** Descripción general del principio */
  descripcion: string;

  /** Características principales del principio */
  caracteristicas: string[];

  /** Beneficios que aporta el principio al sistema */
  beneficios: string[];
}
