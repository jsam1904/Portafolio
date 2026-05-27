import { ExternalLink, GitFork, Star } from 'lucide-react'
import { GitHubIcon } from '../Icons/Icons'
import type { Project } from '../../types/project'
import styles from './ProjectCard.module.css'

const STATUS_LABELS: Record<Project['status'], string> = {
  completed: 'Completado',
  'in-progress': 'En progreso',
  archived: 'Archivado',
}

const STATUS_CLASS: Record<Project['status'], string> = {
  completed: 'badge--success',
  'in-progress': 'badge--warning',
  archived: 'badge',
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={`badge ${STATUS_CLASS[project.status]}`}>
            {STATUS_LABELS[project.status]}
          </span>
        </div>
        <p className={styles.description}>{project.description}</p>
      </div>

      {project.longDescription && (
        <p className={styles.longDesc}>{project.longDescription}</p>
      )}

      <div className={styles.footer}>
        <ul className={styles.tags} aria-label="Tecnologías usadas">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <span className="badge">{tech}</span>
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={`Repositorio de ${project.title}`}
          >
            <GitHubIcon size={15} />
            Código
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} ${styles.linkPrimary}`}
              aria-label={`Demo de ${project.title}`}
            >
              <ExternalLink size={15} aria-hidden="true" />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

/* ── Variante para repos de GitHub ── */
interface GitHubRepoCardProps {
  name: string
  description: string | null
  htmlUrl: string
  homepage: string | null
  language: string | null
  stars: number
  forks: number
  topics: string[]
}

export function GitHubRepoCard({
  name,
  description,
  htmlUrl,
  homepage,
  language,
  stars,
  forks,
  topics,
}: GitHubRepoCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <h3 className={styles.repoName}>{name}</h3>
          {language && <span className="badge">{language}</span>}
        </div>
        {description && <p className={styles.description}>{description}</p>}
      </div>

      {topics.length > 0 && (
        <ul className={styles.tags} aria-label="Temas del repositorio">
          {topics.slice(0, 4).map((t) => (
            <li key={t}>
              <span className="badge badge--accent">{t}</span>
            </li>
          ))}
        </ul>
      )}

      <div className={styles.footer}>
        <div className={styles.repoStats}>
          <span className={styles.stat}>
            <Star size={13} aria-hidden="true" />
            {stars}
          </span>
          <span className={styles.stat}>
            <GitFork size={13} aria-hidden="true" />
            {forks}
          </span>
        </div>

        <div className={styles.links}>
          <a
            href={htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={`Repositorio ${name} en GitHub`}
          >
            <GitHubIcon size={15} />
            Ver repo
          </a>
          {homepage && (
            <a
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} ${styles.linkPrimary}`}
              aria-label={`Demo de ${name}`}
            >
              <ExternalLink size={15} aria-hidden="true" />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
