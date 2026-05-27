import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import styles from './ThemeToggle.module.css'

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      title={isDark ? 'Tema claro' : 'Tema oscuro'}
      type="button"
    >
      <span className={styles.track}>
        <span className={`${styles.thumb} ${isDark ? styles.thumbDark : ''}`}>
          {isDark ? (
            <Moon size={12} aria-hidden="true" />
          ) : (
            <Sun size={12} aria-hidden="true" />
          )}
        </span>
      </span>
    </button>
  )
}
