# 09 — Roadmap

Desenvolvimento em etapas pequenas. Cada sessão entrega algo utilizável e deixa o projeto compilando, sem erros, documentado e commitado.

Ordem de prioridade: estrutura → estabilidade → clareza → documentação → novas funcionalidades.

## Sessões planejadas

### Sessão 0 — Documentação e fundação (em andamento)
Documento mestre traduzido em `docs/`. Definição de stack, arquitetura, modelo de dados e roadmap. Sem código de aplicação ainda.

### Sessão 1 — Scaffold do projeto ✅
Projeto Next.js + TypeScript + Tailwind rodando. Estrutura `src/modules`, `src/shared`, `src/app` com áreas `(paciente)` e `(admin)`. `docker-compose.yml` do Postgres e `.env.example` prontos. Página inicial e placeholders. Build/typecheck/lint limpos.
Pendência levada para a Sessão 2: instalar Docker e conectar o Prisma ao banco (Docker ainda não estava instalado nesta máquina).

### Sessão 2 — Modelo de dados + migrations ⏳ (parcial)
Prisma 7 instalado e configurado. `schema.prisma` completo com as entidades da 1ª onda (valida e gera client). Cliente único em `src/shared/db`. Script de seed (`prisma/seed.ts`) com tipos de consulta e configurações básicas. Scripts npm: `db:up`, `db:migrate`, `db:seed`, `db:studio`.
**Pendente (requer Docker instalado):** subir o Postgres e rodar `npm run db:migrate` (primeira migration) + `npm run db:seed`. O **usuário admin** do seed foi adiado para a Sessão 3, pois depende do hash de senha.

### Sessão 3 — Autenticação administrativa
Auth própria: hash de senha, login, sessão por cookie, logout, proteção da área `(admin)`. Tela de login.

### Sessão 4 — Pacientes (CRUD admin)
Módulo `pacientes`: listar (grid + filtros), criar, editar, ver ficha. Services + UI.

### Sessão 5 — Tipos de consulta + Configurações básicas
Catálogo de tipos de consulta e configurações (horário de funcionamento, duração padrão).

### Sessão 6 — Agenda administrativa
Visão semanal/mensal. Criar/editar/cancelar consulta com validação de sobreposição e bloqueios.

### Sessão 7 — Autoagendamento (paciente)
Área `(paciente)` mobile first: fluxo curto de agendamento sobre horários realmente livres.

### Sessão 8 — Histórico clínico (anotações + arquivos)
Anotações por paciente/consulta. Upload de arquivos atrás de interface (local em dev).

### Sessão 9 — Dashboard
Indicadores principais para o admin.

### Sessão 10 — WhatsApp (camada de abstração + 1 provedor)
Interface única + um adaptador. Mensagem de confirmação.

### Sessões seguintes
Lembretes automáticos, relatórios, refinamentos de UX, múltiplos profissionais. Ver [13-futuras-funcionalidades.md](13-futuras-funcionalidades.md) e [10-backlog.md](10-backlog.md).

> O roadmap é um guia, não um contrato rígido. Reordenar quando fizer sentido — registrando aqui.
