import { GitHubRepos } from '../../components/GitHubRepos/GitHubRepos'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'
import styles from './Proyectos.module.css'

export function Proyectos() {
  return (
    <main id="main-content">
      <div className="container">
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Proyectos</h1>
          <p className={styles.pageDesc}>
            Lo que he construido: proyectos propios y ejercicios que demuestran
            cómo pienso y cómo resuelvo problemas técnicos.
          </p>
        </header>

        {/* ── GitHub Activity (API en vivo) ── */}
        <section className={styles.section} aria-labelledby="github-section-heading">
          <h2 id="github-section-heading" className={styles.sectionTitle}>
            <span className={styles.sectionTitleAccent}>GitHub</span> — Actividad reciente
          </h2>
          <p className={styles.sectionDesc}>
            Datos en tiempo real desde la API de GitHub. Muestra los últimos
            repositorios actualizados.
          </p>
          <GitHubRepos />
        </section>

        {/* ── Proyectos destacados ── */}
        <section className={styles.section} aria-labelledby="featured-heading">
          <h2 id="featured-heading" className={styles.sectionTitle}>
            Proyectos <span className={styles.sectionTitleAccent}>destacados</span>
          </h2>
          <p className={styles.sectionDesc}>
            Proyectos donde puedo mostrar decisiones de arquitectura, retos
            técnicos concretos y criterio de producto.
          </p>

          <ul className={styles.projectsGrid} role="list">
            {projects.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
