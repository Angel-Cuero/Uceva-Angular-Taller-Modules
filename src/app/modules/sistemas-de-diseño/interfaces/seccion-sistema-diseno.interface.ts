/**
 * Interfaz que representa una sección de contenido sobre sistemas de diseño.
 *
 * Contiene la información necesaria para presentar en la interfaz cada
 * sección temática: un identificador, un título, una descripción general,
 * su contenido principal y un listado de puntos o elementos destacados.
 *
 * @remarks
 * Cada sección debe tener un `id` único, un `titulo` que la identifique,
 * una `descripcion` que la introduzca, un `contenido` con el texto ampliado
 * y un listado de `puntos` que resuman los aspectos más importantes.
 *
 * @example
 * ```ts
 * const seccion: SeccionSistemaDiseno = {
 *   id: 1,
 *   titulo: 'Qué es un sistema de diseño',
 *   descripcion: 'Conjunto de componentes y guías reutilizables.',
 *   contenido: '...',
 *   puntos: ['Consistencia', 'Reutilización']
 * };
 * ```
 */
export interface SeccionSistemaDiseno {
  /** Identificador único de la sección */
  id: number;

  /** Título o nombre de la sección */
  titulo: string;

  /** Descripción corta que introduce la sección */
  descripcion: string;

  /** Texto ampliado con el contenido de la sección */
  contenido: string;

  /** Puntos o elementos destacados de la sección */
  puntos: string[];
}
