import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Layers, Terminal } from 'lucide-react'
import styles from './Home.module.css'

const HERO_STACK = [
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Docker',
  'Git',
]

export function Home() {
  return (
    <main id="main-content">
      {/* ── Hero ── */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroBadge}>
            <span className={styles.dot} aria-hidden="true" />
            Disponible para trabajar
          </div>

          <h1 id="hero-heading" className={styles.heroTitle}>
            Hola, soy
            <br />
            <span className={styles.heroName}>[TU NOMBRE]</span>
          </h1>

          <p className={styles.heroRole}>
            <Terminal size={18} aria-hidden="true" />
            Full-Stack Developer Junior
          </p>

          <p className={styles.heroDesc}>
            Construyo aplicaciones web modernas con React y Node.js. Aprendo
            rápido, escribo código limpio y me importa el producto final tanto
            como la arquitectura detrás.{' '}
            <span className={styles.heroLocation}>
              Basado en [TU CIUDAD], Guatemala.
            </span>
          </p>

          <div className={styles.heroCtas}>
            <Link to="/proyectos" className={styles.btnPrimary}>
              Ver proyectos
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/sobre-mi" className={styles.btnSecondary}>
              Sobre mí
            </Link>
          </div>

          <div className={styles.stackRow} aria-label="Stack principal">
            {HERO_STACK.map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.glow1} />
          <div className={styles.glow2} />
        </div>
      </section>

      {/* ── Proposición de valor ── */}
      <section className={styles.values} aria-labelledby="values-heading">
        <div className="container">
          <h2 id="values-heading" className="sr-only">
            Qué ofrezco
          </h2>
          <ul className={styles.valuesList}>
            <li className={styles.valueItem}>
              <Code2 size={24} className={styles.valueIcon} aria-hidden="true" />
              <div>
                <h3 className={styles.valueTitle}>Código limpio y tipado</h3>
                <p className={styles.valueDesc}>
                  TypeScript estricto, componentes con responsabilidad única y
                  cero código muerto en el entregable.
                </p>
              </div>
            </li>
            <li className={styles.valueItem}>
              <Layers size={24} className={styles.valueIcon} aria-hidden="true" />
              <div>
                <h3 className={styles.valueTitle}>Full-Stack real</h3>
                <p className={styles.valueDesc}>
                  Cubro frontend, API REST, base de datos y deploy. Entiendo el
                  sistema completo, no solo una capa.
                </p>
              </div>
            </li>
            <li className={styles.valueItem}>
              <Terminal size={24} className={styles.valueIcon} aria-hidden="true" />
              <div>
                <h3 className={styles.valueTitle}>DevOps básico</h3>
                <p className={styles.valueDesc}>
                  Docker para entornos reproducibles, CI/CD en GitHub Actions y
                  deploy en plataformas cloud.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ── CTA de tecnologías ── */}
      <section className={styles.techCta}>
        <div className="container">
          <div className={styles.techCtaInner}>
            <div>
              <h2 className={styles.techCtaTitle}>¿Por qué este stack?</h2>
              <p className={styles.techCtaDesc}>
                No uso tecnologías porque están de moda. Cada herramienta de mi
                stack tiene una razón de ser que puedo defender.
              </p>
            </div>
            <Link to="/tecnologias" className={styles.btnPrimary}>
              Ver razonamiento técnico
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
