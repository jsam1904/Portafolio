import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeProvider'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home/Home'
import { SobreMi } from './pages/SobreMi/SobreMi'
import { Tecnologias } from './pages/Tecnologias/Tecnologias'
import { Proyectos } from './pages/Proyectos/Proyectos'
import './App.css'

function NotFound() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        gap: '1rem',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '3rem',
          background: 'var(--color-gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        404
      </h1>
      <p style={{ color: 'var(--color-text-muted)' }}>
        Página no encontrada.{' '}
        <a href="/" style={{ color: 'var(--color-accent)' }}>
          Volver al inicio
        </a>
      </p>
    </main>
  )
}

function AppLayout() {
  return (
    <div className="layout">
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppLayout />
      </ThemeProvider>
    </BrowserRouter>
  )
}
