#ETAPA 1: Instalação de Dependências
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ETAPA 2: Construção (Build) do Projeto
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ETAPA 3: Execução (Runner) - Imagem final super leve
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# A porta padrão que o Next.js vai expor
ENV PORT 3000 

# Copia apenas os arquivos necessários da etapa de Build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

# Comando para iniciar o servidor do Next.js no formato standalone
CMD ["node", "server.js"]