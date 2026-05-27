import styles from './LoadingSpinner.module.css'

interface LoadingSpinnerProps {
  message?: string
  size?: 'sm' | 'md' | 'lg'
}

export function LoadingSpinner({
  message = 'Cargando...',
  size = 'md',
}: LoadingSpinnerProps) {
  return (
    <div className={styles.wrapper} role="status" aria-live="polite">
      <div className={`${styles.spinner} ${styles[size]}`} aria-hidden="true" />
      {message && <p className={styles.message}>{message}</p>}
      <span className="sr-only">{message}</span>
    </div>
  )
}
