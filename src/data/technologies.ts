export type TechCategory = 'frontend' | 'backend' | 'devops' | 'tools'
export type TechLevel = 'learning' | 'comfortable' | 'proficient'

export interface Technology {
  id: string
  name: string
  category: TechCategory
  icon: string
  level: TechLevel
  whyChose: string
  howApplied: string
}

/**
 * Stack del portafolio — tecnologías documentadas con justificación real.
 * Agrega, elimina o modifica entradas para reflejar tu stack personal.
 */
export const technologies: Technology[] = [
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    icon: '⚛️',
    level: 'proficient',
    whyChose:
      'Elegí React por su modelo de componentes declarativos: el estado describe la UI, no los pasos para llegar a ella. Eso hace el código más predecible y fácil de testear. Su ecosistema maduro y la adopción masiva en la industria también garantizan que las habilidades que desarrollo aquí son directamente transferibles a cualquier empresa.',
    howApplied:
      'En este portafolio uso React 19 con hooks funcionales, Context API para estado global del tema, y componentes modulares organizados por responsabilidad. Aplico patrones como custom hooks para separar la lógica de fetching del renderizado.',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    icon: '🔷',
    level: 'comfortable',
    whyChose:
      'TypeScript me da confianza al refactorizar: el compilador atrapa errores de tipo antes de llegar al navegador. Más importante aún, las interfaces actúan como documentación viviente — un equipo nuevo puede entender la forma de los datos sin leer implementaciones. En proyectos con API, tipar las respuestas elimina toda una categoría de bugs en runtime.',
    howApplied:
      'Uso interfaces estrictas para los tipos de la GitHub API y los proyectos. Cero uso de `any`. Los custom hooks están tipados con generics donde aplica, y el compilador me obliga a manejar los casos `null | undefined` explícitamente.',
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'tools',
    icon: '⚡',
    level: 'comfortable',
    whyChose:
      'Vite nació para corregir el cuello de botella de webpack en development: al usar ESM nativo del navegador, el HMR es instantáneo sin importar el tamaño del proyecto. El cold start que en webpack tomaba segundos, en Vite toma milisegundos. Para un portafolio moderno, este DX más rápido se traduce en más iteraciones por hora.',
    howApplied:
      'Uso Vite con el plugin oficial de React y TypeScript. Configuro `server.host: "0.0.0.0"` para que funcione dentro de contenedores Docker. Las variables de entorno con prefijo `VITE_` se exponen al cliente de forma segura a través de `import.meta.env`.',
  },
  {
    id: 'css-modules',
    name: 'CSS Modules',
    category: 'frontend',
    icon: '🎨',
    level: 'proficient',
    whyChose:
      'Elegí CSS Modules sobre Tailwind o styled-components porque quería demostrar conocimiento real de CSS sin depender de utilidades. Los módulos dan scope automático de clases —sin colisiones— y cero overhead de runtime frente a CSS-in-JS. El resultado es CSS idiomático, colocado junto al componente, que el bundler procesa al build time.',
    howApplied:
      'Cada componente tiene su propio `.module.css` con clases locales. Las variables CSS globales viven en `index.css` y se consumen desde cualquier módulo con `var(--token)`. El tema claro/oscuro se implementa con `[data-theme]` en el elemento raíz — sin ningún JS adicional en runtime para el swapping de colores.',
  },
  {
    id: 'react-router',
    name: 'React Router',
    category: 'frontend',
    icon: '🔀',
    level: 'comfortable',
    whyChose:
      'React Router es el estándar de facto para routing en React SPAs. Usarlo demuestra comprensión del modelo de historia del navegador y del concepto de routing declarativo. La alternativa (Next.js) trae routing de archivos pero agrega SSR y otras capas que no necesito para un portafolio estático.',
    howApplied:
      'Implemento rutas `/`, `/sobre-mi`, `/proyectos` y `/tecnologias` con `BrowserRouter`. Uso `NavLink` con `className` activo para el estado de la nav activa. El componente `Navbar` lee `useLocation` para cerrar el menú móvil en cada navegación.',
  },
  {
    id: 'context-api',
    name: 'Context API',
    category: 'frontend',
    icon: '🔄',
    level: 'proficient',
    whyChose:
      'Para el estado del tema claro/oscuro, Context API es la solución correcta: es global, simple, y no requiere instalar Zustand o Redux. La regla que sigo es: si el estado se comparte entre muchos componentes no relacionados jerárquicamente y cambia poco, usa Context. Si el estado es complejo y frecuentemente actualizado, usa Zustand.',
    howApplied:
      'ThemeProvider envuelve toda la app, expone `isDark` y `toggleTheme`. La preferencia del usuario se persiste en `localStorage` y se inicializa respetando `prefers-color-scheme` del sistema operativo.',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    icon: '🐳',
    level: 'comfortable',
    whyChose:
      'Docker elimina el problema de "en mi máquina funciona". Para un portafolio, incluir Docker demuestra que entiendo la diferencia entre un ambiente de desarrollo y uno de producción, y que puedo entregar artefactos reproducibles. El multi-stage build es un patrón esencial: la imagen de producción no carga las devDependencies.',
    howApplied:
      'Dockerfile con dos stages: `development` usa Vite dev server con volumen montado para HMR; `production` hace el build estático y lo sirve con nginx en una imagen Alpine mínima. Los archivos `docker-compose.yml` y `docker-compose.prod.yml` permiten levantar cada ambiente con un solo comando.',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    icon: '🟢',
    level: 'comfortable',
    whyChose:
      '[Reemplaza con tu propia justificación de por qué elegiste Node.js para tu stack de backend. ¿Qué frameworks usas? ¿Express, Fastify, NestJS? ¿Por qué ese y no otro?]',
    howApplied:
      '[Describe cómo lo aplicas en proyectos concretos: APIs REST, autenticación con JWT, conexión a base de datos, manejo de errores. Sé específico.]',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'backend',
    icon: '🐘',
    level: 'learning',
    whyChose:
      '[Reemplaza con tu justificación real. ¿Por qué una base de datos relacional? ¿Cuándo elegirías MongoDB en cambio? Mostrar que entiendes el trade-off es lo que busca el evaluador.]',
    howApplied:
      '[Describe los proyectos donde lo usaste, qué ORM o driver usas, y algún reto específico que resolviste con SQL.]',
  },
]
