import { Component } from '@angular/core';
import { ArquitecturaInfo } from '../../interfaces/arquitectura.interface';

/**
 * Componente que muestra información sobre la Arquitectura de Software.
 *
 * Presenta conceptos fundamentales como atributos de calidad,
 * alineación estratégica y el rol del arquitecto de software.
 * 
 * @example
 * ```html
 * <app-info-arquitectura></app-info-arquitectura>
 * ```
 */
@Component({
  selector: 'app-info-arquitectura',
  standalone: false,
  templateUrl: './info-arquitectura.html',
  styleUrl: './info-arquitectura.scss',
})
export class InfoArquitectura {

  informacion: ArquitecturaInfo[] = [
    {
      title: 'Definición y Propósito Fundamental',
      icon: 'fas fa-sitemap',
      content: 'La arquitectura de software comprende el conjunto de decisiones estructurales que definen la organización de un sistema, sus elementos y cómo estos colaboran para cumplir objetivos funcionales y no funcionales. Más que un simple documento inicial o un conjunto de diagramas, la arquitectura vive en las decisiones continuas que impactan directamente el desempeño del sistema, la velocidad de desarrollo, la calidad del producto y la viabilidad del negocio. Sus objetivos principales son alinear el sistema con las necesidades, permitir que el software evolucione, asegurar los atributos de calidad y servir como guía compartida para el equipo.'
    },
    {
      title: 'Atributos de Calidad',
      icon: 'fas fa-shield-alt',
      content: 'Los atributos de calidad funcionan como el ADN del sistema, definiendo cómo opera en lugar de qué hace. Los más críticos incluyen:',
      list: [
        { label: 'Rendimiento', description: 'La capacidad del sistema para responder rápidamente y hacer un uso eficiente de los recursos.' },
        { label: 'Escalabilidad', description: 'La capacidad de manejar más usuarios o mayor carga sin fallar, pudiendo ser vertical (mejorando un servidor) u horizontal (agregando más servidores).' },
        { label: 'Disponibilidad y Seguridad', description: 'Garantizar el tiempo que el sistema está operativo y proteger la información mediante autenticación y cifrado.' },
        { label: 'Mantenibilidad y Usabilidad', description: 'La facilidad para modificar el sistema, corregir errores y asegurar que sea fácil de aprender y usar para el cliente.' }
      ],
      isOrderedList: false
    },
    {
      title: 'Alineación Estratégica con el Negocio',
      icon: 'fas fa-bullseye',
      content: 'La arquitectura es un medio para habilitar los objetivos del negocio y acelerar la entrega de valor. Las decisiones arquitectónicas deben estar impulsadas por los "Business Drivers", que son motivaciones comerciales como el crecimiento esperado, la velocidad de entrega, la optimización de costos y la experiencia del usuario. Una arquitectura desconectada de la estrategia genera rigidez, costos elevados de mantenimiento, complejidad innecesaria y dificultad para escalar. Asimismo, la arquitectura debe adaptarse al modelo de negocio de la empresa, ya sea un producto tradicional, un Software as a Service (SaaS) o una Plataforma as a Service (PaaS), ya que cada uno exige diferentes niveles de disponibilidad, control y escalabilidad.'
    },
    {
      title: 'El Rol del Arquitecto y la Toma de Decisiones',
      icon: 'fas fa-users-cog',
      content: 'El arquitecto de software es el profesional encargado de conectar las necesidades del negocio, la tecnología y el equipo de desarrollo. Sus responsabilidades abarcan desde definir la estructura general y garantizar los atributos de calidad, hasta identificar riesgos técnicos y seleccionar patrones. Para lograr esto sin caer en decisiones arbitrarias, se debe seguir un proceso de decisión arquitectónica estructurado:',
      list: [
        { label: '', description: 'Identificar el problema.' },
        { label: '', description: 'Generar múltiples alternativas técnicas viables.' },
        { label: '', description: 'Evaluar las consecuencias de cada opción a largo plazo.' },
        { label: '', description: 'Documentar el contexto, la decisión, la justificación y las consecuencias.' },
        { label: '', description: 'Validar la decisión mediante prototipos (como pruebas de carga o simulación de fallos).' },
        { label: '', description: 'Ajustar basándose en la retroalimentación.' }
      ],
      isOrderedList: true
    }
  ];

}
