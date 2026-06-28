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

- next, react, react-dom
- typescript, @types/*
- tailwindcss
- prisma, @prisma/client

Qualquer adição além desta lista deve ser justificada aqui antes de instalar.
