import { TechCard } from '../../components/TechCard/TechCard'
import { technologies, type TechCategory } from '../../data/technologies'
import styles from './Tecnologias.module.css'

const CATEGORIES: { key: TechCategory; label: string; description: string }[] = [
  {
    key: 'frontend',
    label: 'Frontend',
    description:
      'Las herramientas con las que construyo interfaces. Priorizo DX, performance y mantenibilidad.',
  },
  {
    key: 'backend',
    label: 'Backend',
    description:
      'El lado del servidor: APIs, lógica de negocio y persistencia de datos.',
  },
  {
    key: 'devops',
    label: 'DevOps',
    description:
      'Infraestructura, contenedores y automatización. Entender el deploy es parte del trabajo.',
  },
  {
    key: 'tools',
    label: 'Herramientas',
    description:
      'El tooling que mejora mi flujo de trabajo diario como desarrollador.',
  },
]

export function Tecnologias() {
  return (
    <main id="main-content">
      <div className="container">
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Tecnologías</h1>
          <p className={styles.pageDesc}>
            No elijo herramientas porque están de moda. Cada una tiene una
            razón concreta de estar en mi stack. Aquí documento esa razón
            públicamente para que puedas evaluarla.
          </p>
        </header>

        <section className={styles.philosophy} aria-labelledby="philosophy-heading">
          <h2 id="philosophy-heading" className={styles.philosophyTitle}>
            ¿Cómo elijo una tecnología?
          </h2>
          <div className={styles.philosophyContent}>
            <p>
              Antes de adoptar una herramienta nueva, me hago tres preguntas:{' '}
              <strong>¿qué problema resuelve?</strong>{' '}
              <strong>¿qué trade-offs tiene?</strong> y{' '}
              <strong>¿qué alternativas existen y por qué descartarlas?</strong>
            </p>
            <p>
              Un desarrollador que no puede explicar por qué usa React en lugar
              de Svelte, o TypeScript en lugar de JSDoc types, probablemente
              está siguiendo tendencias. Yo prefiero entender mis herramientas
              lo suficiente para poder cambiarlas si la situación lo justifica.
            </p>
          </div>
        </section>

        {CATEGORIES.map(({ key, label, description }) => {
          const techs = technologies.filter((t) => t.category === key)
          if (techs.length === 0) return null

          return (
            <section
              key={key}
              className={styles.categorySection}
              aria-labelledby={`cat-${key}`}
            >
              <div className={styles.categoryHeader}>
                <h2 id={`cat-${key}`} className={styles.categoryTitle}>
                  {label}
                </h2>
                <p className={styles.categoryDesc}>{description}</p>
              </div>

              <ul className={styles.techGrid} role="list">
                {techs.map((tech) => (
                  <li key={tech.id}>
                    <TechCard tech={tech} />
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </main>
  )
}
