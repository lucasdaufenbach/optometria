# 03 — Stack

Tecnologias estáveis, simples e populares. Toda dependência precisa de justificativa.

## Núcleo

| Camada | Escolha | Justificativa |
|---|---|---|
| Framework | Next.js (App Router) | Front + back em um projeto, popular, estável |
| Linguagem | TypeScript | Tipagem forte, segurança em refatorações |
| Estilos | Tailwind CSS | Produtividade, padrão consistente, sem CSS espalhado |
| Banco | PostgreSQL | Robusto, relacional, padrão de mercado |
| ORM | Prisma | Tipagem forte, migrations simples, leitura clara |
| Auth | Solução própria simples | Cookie de sessão + hash de senha. Poucas dependências, controle total |

## Ambiente de desenvolvimento

- **Postgres via Docker** (`docker-compose.yml` na raiz). Reproduzível e isolado.
- Variáveis em `.env` (não versionado) — modelo em `.env.example`.

## Auth própria (resumo)

- Senhas com hash (algoritmo forte, ex. via `bcrypt` ou `argon2` — escolha registrada ao implementar).
- Sessão por cookie `httpOnly`, assinada/segura.
- Sem OAuth na largada. Se necessário no futuro, reavaliar Auth.js.
- Detalhes em [05-regras-de-negocio.md](05-regras-de-negocio.md) e [08-api.md](08-api.md).

## Integração WhatsApp

Camada de abstração própria (`modules/whatsapp` ou `shared/whatsapp`), com interface única e adaptadores trocáveis:

- WhatsApp Cloud API
- Evolution API
- Z-API

O resto do sistema fala com a interface, nunca com um provedor específico.

## Armazenamento de arquivos

- Interface compatível com S3.
- Em desenvolvimento: armazenamento local (pasta), atrás da mesma interface, para trocar por S3 sem mudar o resto.

## Dependências aprovadas até agora

Instaladas na Sessão 1:

- `next` (15.5.x), `react`, `react-dom`
- `typescript`, `@types/node`, `@types/react`, `@types/react-dom`
- `tailwindcss` (4.x) + `@tailwindcss/postcss`
- `eslint`, `eslint-config-next`, `@eslint/eslintrc`

Instaladas na Sessão 2:

- `prisma`, `@prisma/client` (7.x)
- `@prisma/adapter-pg` — driver adapter do Postgres. No Prisma 7 o adapter é o
  mecanismo padrão de conexão; o `PrismaClient` exige um adapter.
- `dotenv` (dev) — exigido pelo `prisma.config.ts` do Prisma 7 para carregar `.env`.
- `tsx` (dev) — runner de TypeScript para scripts (seed e utilitários).

Notas do Prisma 7 neste projeto:
- Configuração em `prisma.config.ts` (não mais a chave `prisma` no package.json).
- Client TypeScript gerado em `src/generated/prisma` (não versionado).
- Cliente único exposto em `src/shared/db`.

Qualquer adição além desta lista deve ser justificada aqui antes de instalar.

> Nota de segurança: `npm audit` aponta 2 vulnerabilidades moderadas em um
> `postcss` embutido dentro do próprio Next.js (build-time, não explorável em
> runtime). Só serão resolvidas quando o Next atualizar seu bundle. Next já
> está na versão de patch mais recente da linha 15.5.x.
