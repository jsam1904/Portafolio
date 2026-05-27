import { Mail, MapPin } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../../components/Icons/Icons'
import styles from './SobreMi.module.css'

const SKILLS = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MongoDB',
  'REST APIs',
  'Git',
  'Docker',
  'Linux',
  'HTML',
  'CSS',
  'Vite',
]

interface TimelineItem {
  year: string
  title: string
  institution: string
  description: string
}

const FORMATION: TimelineItem[] = [
  {
    year: '[AÑO]',
    title: '[Título o certificación]',
    institution: '[Institución, bootcamp o plataforma]',
    description:
      'Describe brevemente qué aprendiste, qué proyectos construiste y qué habilidades desarrollaste.',
  },
  {
    year: '[AÑO]',
    title: '[Título o certificación]',
    institution: '[Institución, bootcamp o plataforma]',
    description:
      'Describe brevemente qué aprendiste, qué proyectos construiste y qué habilidades desarrollaste.',
  },
]

export function SobreMi() {
  return (
    <main id="main-content">
      <div className="container">
        <div className={styles.pageLayout}>
          {/* ── Bio ── */}
          <section className={styles.bioSection} aria-labelledby="bio-heading">
            <header className={styles.pageHeader}>
              <h1 id="bio-heading" className={styles.pageTitle}>
                Sobre mí
              </h1>
            </header>

            <div className={styles.bioCard}>
              <div className={styles.avatarWrapper} aria-hidden="true">
                <div className={styles.avatarPlaceholder}>
                  <span className={styles.avatarInitials}>[TN]</span>
                </div>
              </div>

              <div className={styles.bioContent}>
                <h2 className={styles.bioName}>[TU NOMBRE]</h2>
                <p className={styles.bioRole}>Full-Stack Developer Junior</p>

                <p className={styles.bioLocation}>
                  <MapPin size={14} aria-hidden="true" />
                  [Tu ciudad], Guatemala
                </p>

                <div className={styles.bioText}>
                  <p>
                    [Escribe aquí tu historia en primera persona. ¿Cuándo y por
                    qué empezaste a programar? ¿Qué te motivó a elegir el
                    desarrollo web? Sé genuino — los evaluadores distinguen
                    entre una historia real y una plantilla.]
                  </p>
                  <p>
                    [¿Qué te diferencia? ¿Qué tipo de problemas disfrutas más
                    resolver? ¿En qué proyectos o áreas quieres crecer? Dos o
                    tres párrafos bien escritos valen más que diez líneas
                    genéricas.]
                  </p>
                </div>
              </div>
            </div>

            {/* ── Contacto ── */}
            <section className={styles.contactSection} aria-labelledby="contact-heading">
              <h2 id="contact-heading" className={styles.sectionTitle}>
                Contacto
              </h2>
              <ul className={styles.contactList}>
                <li>
                  <a
                    href="mailto:tu@email.com"
                    className={styles.contactLink}
                    aria-label="Enviar correo"
                  >
                    <Mail size={18} aria-hidden="true" />
                    tu@email.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/TU_USUARIO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                    aria-label="Perfil de LinkedIn"
                  >
                    <LinkedInIcon size={18} />
                    linkedin.com/in/[tu-usuario]
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/TU_USUARIO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                    aria-label="Perfil de GitHub"
                  >
                    <GitHubIcon size={18} />
                    github.com/[tu-usuario]
                  </a>
                </li>
              </ul>
            </section>
          </section>

          {/* ── Sidebar ── */}
          <aside className={styles.sidebar}>
            {/* Formación */}
            <section aria-labelledby="formation-heading">
              <h2 id="formation-heading" className={styles.sectionTitle}>
                Formación
              </h2>
              <ol className={styles.timeline}>
                {FORMATION.map((item, i) => (
                  <li key={i} className={styles.timelineItem}>
                    <span className={styles.timelineYear}>{item.year}</span>
                    <div className={styles.timelineContent}>
                      <h3 className={styles.timelineTitle}>{item.title}</h3>
                      <p className={styles.timelineInstitution}>
                        {item.institution}
                      </p>
                      <p className={styles.timelineDesc}>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Skills */}
            <section aria-labelledby="skills-heading" className={styles.skillsSection}>
              <h2 id="skills-heading" className={styles.sectionTitle}>
                Habilidades técnicas
              </h2>
              <ul className={styles.skillsList} aria-label="Tecnologías que manejo">
                {SKILLS.map((skill) => (
                  <li key={skill}>
                    <span className="badge">{skill}</span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </main>
  )
}
