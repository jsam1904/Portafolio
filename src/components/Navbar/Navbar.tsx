import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/sobre-mi', label: 'Sobre mí', end: false },
  { to: '/tecnologias', label: 'Tecnologías', end: false },
  { to: '/proyectos', label: 'Proyectos', end: false },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const closeMobileMenu = () => setIsOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo} aria-label="Ir al inicio">
          <span className={styles.logoText}>
            {'<'}
            <span className={styles.logoAccent}>TN</span>
            {' />'}
          </span>
        </NavLink>

        <nav className={styles.desktopNav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            {NAV_LINKS.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <button
            className={styles.menuBtn}
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            type="button"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={styles.mobileOverlay} onClick={closeMobileMenu}>
          <nav
            className={styles.mobileNav}
            aria-label="Navegación móvil"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className={styles.mobileList}>
              {NAV_LINKS.map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
