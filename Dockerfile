# ─────────────────────────────────────────────────────────────────
# Stage 1: development
# Vite dev server con hot-reload, expuesto en 0.0.0.0 para Docker
# ─────────────────────────────────────────────────────────────────
FROM node:22-alpine AS development

WORKDIR /app

# Instalar dependencias primero para aprovechar la caché de capas
COPY package*.json ./
RUN npm ci

# El código fuente se monta como volumen en docker-compose.yml
# por eso no hacemos COPY . . aquí; solo copiamos lo mínimo:
COPY vite.config.ts tsconfig*.json index.html ./
COPY src ./src
COPY public ./public

EXPOSE 5173

CMD ["npm", "run", "dev"]

# ─────────────────────────────────────────────────────────────────
# Stage 2: builder
# Genera el build estático optimizado para producción
# ─────────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# El archivo .env no se copia (está en .dockerignore).
# Las variables se inyectan en tiempo de build como ARG/ENV:
ARG VITE_GITHUB_USERNAME
ARG VITE_GITHUB_API_URL=https://api.github.com
ENV VITE_GITHUB_USERNAME=$VITE_GITHUB_USERNAME
ENV VITE_GITHUB_API_URL=$VITE_GITHUB_API_URL

RUN npm run build

# ─────────────────────────────────────────────────────────────────
# Stage 3: production
# nginx Alpine sirve el build estático — imagen final mínima
# ─────────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS production

# Copiar build estático
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuración de nginx (SPA: redirige todo a index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
