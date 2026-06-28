# 09 — Roadmap

Desenvolvimento em etapas pequenas. Cada sessão entrega algo utilizável e deixa o projeto compilando, sem erros, documentado e commitado.

Ordem de prioridade: estrutura → estabilidade → clareza → documentação → novas funcionalidades.

## Sessões planejadas

### Sessão 0 — Documentação e fundação (em andamento)
Documento mestre traduzido em `docs/`. Definição de stack, arquitetura, modelo de dados e roadmap. Sem código de aplicação ainda.

### Sessão 1 — Scaffold do projeto
Projeto Next.js + TypeScript + Tailwind rodando. Estrutura `src/modules`, `src/shared`, `src/app`. `docker-compose.yml` do Postgres. Prisma configurado conectando no banco. Página inicial mínima. `git init`.

### Sessão 2 — Modelo de dados + migrations
`schema.prisma` com as entidades da 1ª onda. Primeira migration aplicada. Seed mínimo (1 usuário admin, tipos de consulta). Cliente Prisma em `shared/db`.

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
