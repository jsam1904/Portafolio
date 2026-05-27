# Javier Sebastián Alvarado Monzón — Portafolio Personal

> Portafolio web para demostrar habilidades como Desarrollador Full-Stack Junior.
> SPA construida con React 19 + TypeScript + Vite, con consumo de la API de GitHub,
> tema claro/oscuro (Context API), y configuración Docker completa.

🌐 **Deploy:** [https://tu-portafolio.vercel.app](https://tu-portafolio.vercel.app)
*(reemplaza con tu link real después de publicar)*

---

## Screenshot / Preview

<!--
  Para agregar una captura:
  1. Levanta el proyecto localmente con `npm run dev`
  2. Graba un GIF de 5-10s navegando el sitio (usa ShareX, LICEcap o el Recorte de Windows)
  3. Guarda el archivo en /docs/preview.gif
  4. Descomenta la línea de abajo:
-->

<!-- ![Preview del portafolio](docs/preview.gif) -->

> **Pendiente:** agrega aquí un screenshot antes de la entrega final.

---

## Stack y por qué lo elegí

| Tecnología | Razón |
|---|---|
| **React 19** | Modelo de componentes declarativo, concurrent features, ecosistema maduro y adoptado en la industria. |
| **TypeScript** | Tipos en compile-time eliminan bugs antes del navegador. Interfaces como documentación viviente. Cero `any`. |
| **Vite 8** | HMR instantáneo via ESM nativo. Cold start ~10× más rápido que webpack. Native TypeScript. |
| **CSS Modules** | Scope automático de clases, cero overhead de runtime, CSS idiomático colocado con el componente. |
| **React Router v7** | Estándar de routing declarativo para SPAs. `NavLink` con estado activo, `useLocation` para efectos. |
| **Context API** | Para estado simple como tema (dark/light), Context es suficiente. Zustand sería over-engineering aquí. |
| **Docker multi-stage** | Stage dev = Vite con hot-reload. Stage prod = build estático + nginx Alpine (~25 MB final). |
| **lucide-react** | Icons tree-shakeable, sin runtime overhead, 0 CSS adicional. |

---

## Estructura del proyecto

```
portafolio/
├── src/
│   ├── components/
│   │   ├── ErrorMessage/     # Estado de error con botón de reintento
│   │   ├── Footer/           # Footer con links sociales
│   │   ├── GitHubRepos/      # Consumo de API con 3 estados visibles
│   │   ├── LoadingSpinner/   # Spinner con mensaje accesible
│   │   ├── Navbar/           # Nav responsiva con hamburger móvil
│   │   ├── ProjectCard/      # Card de proyecto + variante GitHub repo
│   │   ├── TechCard/         # Card con ¿por qué? y ¿cómo lo aplico?
│   │   └── ThemeToggle/      # Switch animado claro/oscuro
│   ├── context/
│   │   └── ThemeContext.tsx  # Estado global del tema + localStorage
│   ├── data/
│   │   ├── projects.ts       # ← EDITA AQUÍ tus proyectos
│   │   └── technologies.ts   # ← EDITA AQUÍ tu stack con argumentación
│   ├── hooks/
│   │   └── useGitHub.ts      # fetch + async/await + AbortController
│   ├── pages/
│   │   ├── Home/             # Hero + propuesta de valor
│   │   ├── Proyectos/        # GitHub API + proyectos destacados
│   │   ├── SobreMi/          # Bio + formación + contacto
│   │   └── Tecnologias/      # Stack con justificación detallada
│   └── types/
│       ├── github.ts         # GitHubUser, GitHubRepo
│       └── project.ts        # Project, ProjectStatus
├── Dockerfile                # 3 stages: development / builder / production
├── docker-compose.yml        # Dev: Vite + volumen montado
├── docker-compose.prod.yml   # Prod: nginx puerto 80
├── nginx.conf                # SPA fallback + cache de assets
└── .env.example              # Variables de entorno necesarias
```

---

## Variables de entorno

```bash
cp .env.example .env
```

| Variable | Descripción | Default |
|---|---|---|
| `VITE_GITHUB_USERNAME` | Tu usuario de GitHub | `jsam1904` |
| `VITE_GITHUB_API_URL` | Base URL de la API (no cambiar) | `https://api.github.com` |

> Vite solo expone al cliente variables con prefijo `VITE_`. Nunca pongas tokens privados aquí.

---

## Instalación y uso local

### Prerrequisitos

- Node.js 20+
- npm 10+

### Comandos

```bash
# Clonar
git clone https://github.com/TU_USUARIO/portafolio.git
cd portafolio

# Instalar
npm install

# Variables de entorno
cp .env.example .env   # edita VITE_GITHUB_USERNAME

# Desarrollo (http://localhost:5173)
npm run dev

# Lint
npm run lint

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## Uso con Docker

### Desarrollo — hot-reload activo

Los cambios en `src/` se reflejan en tiempo real gracias al volumen montado.

```bash
docker compose up
# → http://localhost:5173
```

### Producción — nginx estático

```bash
# Con .env configurado:
docker compose -f docker-compose.prod.yml up --build
# → http://localhost:80

# O pasando el username como argumento:
VITE_GITHUB_USERNAME=tu-usuario docker compose -f docker-compose.prod.yml up --build
```

---

## Rutas de la SPA

| Ruta | Página | Qué muestra |
|---|---|---|
| `/` | Home | Hero, propuesta de valor, CTA |
| `/sobre-mi` | Sobre mí | Bio, formación, habilidades, contacto |
| `/tecnologias` | Tecnologías | Stack con justificación técnica real |
| `/proyectos` | Proyectos | Repos de GitHub (API en vivo) + proyectos destacados |

---

## Personalización rápida

### Información personal (busca y reemplaza `[TU NOMBRE]` etc.)

- **`index.html`** — `<title>` y `<meta description>`
- **`src/pages/Home/Home.tsx`** — nombre, rol, descripción, ciudad
- **`src/pages/SobreMi/SobreMi.tsx`** — bio, formación, email, LinkedIn
- **`src/components/Footer/Footer.tsx`** — links sociales

### Agregar proyectos → `src/data/projects.ts`

```ts
{
  title: 'Nombre del proyecto',
  description: 'Una línea: qué problema resuelve.',
  longDescription: 'Descripción técnica: arquitectura, decisiones, retos.',
  technologies: ['React', 'Node.js', 'PostgreSQL'],
  repoUrl: 'https://github.com/TU_USUARIO/repo',
  demoUrl: 'https://demo.vercel.app',   // opcional
  status: 'completed',                  // | 'in-progress' | 'archived'
}
```

### Actualizar stack → `src/data/technologies.ts`

Cada entrada requiere:
- `whyChose` — por qué la elegiste (es lo que pesa en la evaluación técnica)
- `howApplied` — cómo la aplicaste en proyectos concretos

---

## Deploy recomendado

### Vercel

```bash
npm i -g vercel
vercel --prod
```

Agrega las variables de entorno en el dashboard de Vercel (Settings → Environment Variables).

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Variables de entorno: igual que `.env`

---

## Licencia

MIT
