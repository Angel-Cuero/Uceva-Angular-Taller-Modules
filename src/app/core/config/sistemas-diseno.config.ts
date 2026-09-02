import { SeccionSistemaDiseno } from "../../modules/sistemas-de-diseño/interfaces/seccion-sistema-diseno.interface";

/**
 * Listado de secciones sobre sistemas de diseño.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * el contenido informativo sobre sistemas de diseño, utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {SeccionSistemaDiseno[]}
 */
export const SECCIONES_SISTEMA_DISENO: SeccionSistemaDiseno[] = [
  {
    id: 1,
    titulo: '¿Qué es un sistema de diseño?',
    descripcion: 'Un sistema de diseño es un conjunto de componentes, guías y estándares reutilizables que define cómo se construye una interfaz de forma consistente.',
    contenido: 'Es una colección de piezas de interfaz reutilizables (botones, formularios, tipografía, colores) junto con las reglas que indican cómo combinarlas. Agrupa las decisiones de diseño en un solo lugar, de modo que cualquier persona del equipo pueda construir productos coherentes sin reinventar la rueda ni depender de memorizar estilos.',
    puntos: [
      'Centraliza las decisiones de diseño en un único lugar',
      'Define componentes y patrones reutilizables',
      'Establece reglas claras de composición y estilo',
      'Facilita la colaboración entre diseño y desarrollo'
    ]
  },
  {
    id: 2,
    titulo: 'Componentes clave',
    descripcion: 'Un sistema de diseño se apoya en componentes fundamentales que aseguran la consistencia visual y funcional de la aplicación.',
    contenido: 'Los componentes clave son las piezas constitutivas que dan forma a la interfaz: tokens de diseño (colores, tipografías, espacios), iconografía, botones, formularios, tablas, tarjetas y patrones de navegación. Cada uno cuenta con variantes y estados definidos para cubrir todos los casos de uso de manera predecible.',
    puntos: [
      'Tokens de diseño: colores, tipografía y espaciados',
      'Componentes atómicos y organismos reutilizables',
      'Estados y variantes definidos para cada componente',
      'Documentación que guía el uso correcto de cada pieza'
    ]
  },
  {
    id: 3,
    titulo: 'Problemas sin un sistema de diseño',
    descripcion: 'Sin un sistema de diseño, los equipos suelen enfrentar inconsistencias, duplicación de esfuerzos y una curva de mantenimiento que crece sin control.',
    contenido: 'Cuando no existe una fuente única de verdad, cada desarrollador y cada equipo termina creando sus propias versiones de un mismo componente, lo que genera interfaces desalineadas, estilos dispersos y código duplicado. Esto incrementa el tiempo de desarrollo, dificulta la escalabilidad y degrada la experiencia del usuario final.',
    puntos: [
      'Inconsistencia visual entre pantallas y módulos',
      'Duplicación de código y esfuerzos redundantes',
      'Dificultad para escalar y mantener la aplicación',
      'Experiencia de usuario irregular y poco profesional'
    ]
  }
];
