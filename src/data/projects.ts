import type { Project } from '../types/project'

/**
 * Tus proyectos destacados.
 * Reemplaza cada campo con la información real de tu proyecto.
 * - repoUrl: Link al repositorio en GitHub (obligatorio)
 * - demoUrl: Link al deploy en producción (opcional pero recomendado)
 * - imageUrl: Ruta a captura de pantalla en /public/projects/ (opcional)
 */
export const projects: Project[] = [
  {
    id: 1,
    title: '[PROYECTO 1] — Nombre de tu proyecto',
    description:
      'Describe en una oración qué hace este proyecto y el problema que resuelve para el usuario.',
    longDescription:
      'Aquí va la descripción detallada: qué tecnologías elegiste, por qué las elegiste, cuál fue el reto técnico más importante que enfrentaste y cómo lo resolviste. Esto es lo que el evaluador leerá con más atención.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    repoUrl: 'https://github.com/TU_USUARIO/nombre-del-repo',
    demoUrl: 'https://tu-proyecto.vercel.app',
    status: 'completed',
    featured: true,
  },
  {
    id: 2,
    title: '[PROYECTO 2] — Nombre de tu proyecto',
    description:
      'Describe en una oración qué hace este proyecto y el problema que resuelve para el usuario.',
    longDescription:
      'Aquí va la descripción detallada: arquitectura, decisiones técnicas y retos resueltos. Sé específico sobre lo que construiste y las decisiones que tomaste.',
    technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'SQLite'],
    repoUrl: 'https://github.com/TU_USUARIO/nombre-del-repo',
    demoUrl: undefined,
    status: 'in-progress',
    featured: true,
  },
  {
    id: 3,
    title: '[PROYECTO 3] — Nombre de tu proyecto',
    description:
      'Describe en una oración qué hace este proyecto y el problema que resuelve para el usuario.',
    longDescription:
      'Aquí va la descripción detallada. Menciona si trabajaste en equipo, qué parte del sistema construiste tú, y qué aprendiste del proceso.',
    technologies: ['Express', 'MongoDB', 'JWT', 'REST API'],
    repoUrl: 'https://github.com/TU_USUARIO/nombre-del-repo',
    demoUrl: 'https://tu-api.railway.app',
    status: 'completed',
    featured: false,
  },
]
