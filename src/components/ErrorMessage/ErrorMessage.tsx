import { AlertTriangle } from 'lucide-react'
import styles from './ErrorMessage.module.css'

interface ErrorMessageProps {
  message: string
  onRetry?: () => void
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className={styles.wrapper} role="alert">
      <AlertTriangle className={styles.icon} size={28} aria-hidden="true" />
      <p className={styles.message}>{message}</p>
      {onRetry && (
        <button className={styles.retryBtn} onClick={onRetry} type="button">
          Reintentar
        </button>
      )}
    </div>
  )
}
