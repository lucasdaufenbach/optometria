# src/shared

Código **transversal**, usado por mais de um domínio.

- `ui/` — componentes de interface reutilizáveis (Button, Input, etc.).
- `db/` — cliente Prisma único (a ser adicionado na Sessão 2).
- demais utilidades genéricas conforme a necessidade.

Regra: se algo serve a um único domínio, mora em `src/modules/<dominio>`, não aqui.

Ver `docs/02-arquitetura.md`.
