import type { Technology } from '../../data/technologies'
import styles from './TechCard.module.css'

const LEVEL_LABEL: Record<Technology['level'], string> = {
  learning: 'Aprendiendo',
  comfortable: 'Cómodo',
  proficient: 'Dominado',
}

const LEVEL_CLASS: Record<Technology['level'], string> = {
  learning: 'badge--warning',
  comfortable: 'badge--accent',
  proficient: 'badge--success',
}

interface TechCardProps {
  tech: Technology
}

export function TechCard({ tech }: TechCardProps) {
  return (
    <article className={styles.card} id={tech.id}>
      <header className={styles.header}>
        <span className={styles.icon} aria-hidden="true">
          {tech.icon}
        </span>
        <div className={styles.meta}>
          <h3 className={styles.name}>{tech.name}</h3>
          <span className={`badge ${LEVEL_CLASS[tech.level]}`}>
            {LEVEL_LABEL[tech.level]}
          </span>
        </div>
      </header>

      <section className={styles.section}>
        <h4 className={styles.sectionTitle}>¿Por qué lo elegí?</h4>
        <p className={styles.text}>{tech.whyChose}</p>
      </section>

      <section className={styles.section}>
        <h4 className={styles.sectionTitle}>¿Cómo lo aplico?</h4>
        <p className={styles.text}>{tech.howApplied}</p>
      </section>
    </article>
  )
}
