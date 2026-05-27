import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../Icons/Icons'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          &copy; {year}{' '}
          <span className={styles.name}>[TU NOMBRE]</span>
          {' — '}
          <span className={styles.muted}>Construido con React + Vite + TypeScript</span>
        </p>

        <nav aria-label="Redes sociales" className={styles.social}>
          <a
            href="https://github.com/TU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.socialLink}
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/TU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.socialLink}
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="mailto:tu@email.com"
            aria-label="Email"
            className={styles.socialLink}
          >
            <Mail size={18} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  )
}
