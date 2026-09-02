import { Principio } from "../../modules/principios-de-arquitectura-de-software/interfaces/principio.interface";

/**
 * Listado de principios de arquitectura de software.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * la información de los principales principios de arquitectura,
 * utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {Principio[]}
 */
export const PRINCIPIOS: Principio[] = [
  {
    id: 1,
    titulo: 'Modularidad',
    descripcion: 'Consiste en dividir un sistema de software en módulos independientes y autónomos, cada uno con una responsabilidad clara y bien definida. Estos módulos interactúan entre sí mediante interfaces bien establecidas.',
    caracteristicas: [
      'División del sistema en módulos independientes',
      'Responsabilidades claras y delimitadas',
      'Interacción mediante interfaces definidas',
      'Posibilidad de desarrollo en paralelo'
    ],
    beneficios: [
      'Mejora la mantenibilidad del código',
      'Facilita la reutilización de componentes',
      'Permite escalar el sistema de forma progresiva',
      'Simplifica las pruebas y el despliegue'
    ]
  },
  {
    id: 2,
    titulo: 'Cohesión Alta',
    descripcion: 'Indica el grado en el que los elementos de un mismo módulo están relacionados entre sí y enfocados en una sola responsabilidad. Un módulo con alta cohesión agrupa elementos que trabajan juntos para lograr un propósito único.',
    caracteristicas: [
      'Elementos fuertemente relacionados entre sí',
      'Enfoque en una única responsabilidad',
      'Código agrupado de forma lógica y coherente',
      'Reducción de dependencias dentro del módulo'
    ],
    beneficios: [
      'Facilita la comprensión del código',
      'Mejora la mantenibilidad del sistema',
      'Hace que cada módulo sea más fácil de probar',
      'Reduce la duplicación de lógica'
    ]
  },
  {
    id: 3,
    titulo: 'Acoplamiento',
    descripcion: 'Se refiere al grado de dependencia que existe entre los módulos de un sistema. Un buen diseño busca un acoplamiento bajo, donde los módulos dependan de otros lo menos posible y se comuniquen mediante interfaces estables.',
    caracteristicas: [
      'Nivel de dependencia entre módulos',
      'Comunicación mediante interfaces estables',
      'Un bajo acoplamiento es el objetivo deseable',
      'Cambios aislados dentro de cada módulo'
    ],
    beneficios: [
      'Aumenta la independencia entre módulos',
      'Permite modificar un módulo sin afectar a otros',
      'Facilita el mantenimiento del sistema',
      'Mejora la capacidad de realizar pruebas'
    ]
  },
  {
    id: 4,
    titulo: 'Separación de Responsabilidades',
    descripcion: 'Consiste en asignar a cada componente, servicio o módulo una única responsabilidad específica, evitando que una misma pieza de código cumpla múltiples funciones. En la práctica, separa la presentación de la lógica de negocio y los datos.',
    caracteristicas: [
      'Cada componente cumple una única función',
      'Separación entre presentación y lógica de negocio',
      'Uso de servicios para la gestión de datos',
      'Interfaces para el tipado de la información'
    ],
    beneficios: [
      'Simplifica el mantenimiento del código',
      'Mejora la legibilidad de la aplicación',
      'Facilita la testabilidad de cada pieza',
      'Permite reutilizar componentes y servicios'
    ]
  }
];
