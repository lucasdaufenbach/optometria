# 02 — Arquitetura

## Decisão central

Monolito Next.js (App Router) com TypeScript. Front-end e back-end no mesmo projeto, usando Route Handlers / Server Actions para a API. Permanece monolítico enquanto isso fizer sentido.

**Não usar** (evitar complexidade desnecessária): Clean Architecture completa, DDD completo, CQRS, Event Sourcing, microservices.

## Organização por domínio, não por tipo

Errado (por tipo de arquivo):

```
components/  hooks/  services/  pages/  utils/
```

Certo (por domínio):

```
src/
  modules/
    agenda/
    pacientes/
    consultas/
    dashboard/
    configuracoes/
    auth/
  shared/        # código realmente transversal (ui, db, utils genéricos)
  app/           # rotas Next.js (App Router) — fino, só conecta UI aos módulos
```

Cada módulo é responsável por tudo do seu domínio:

```
modules/agenda/
  components/   # componentes React do domínio
  services/     # acesso a dados e regras (chama o db)
  types/        # tipos TypeScript do domínio
  hooks/        # hooks React do domínio
  utils/        # utilidades específicas do domínio
```

Regra: se um código serve a um único domínio, mora no módulo. Se serve a vários, mora em `shared/`.

## Camadas dentro de um módulo

Fluxo de dados previsível e de mão única:

```
UI (components) → hook/server action → service → db (Prisma) → PostgreSQL
```

- **components** não acessam o banco diretamente. Chamam services (via server actions/route handlers ou hooks).
- **services** concentram regras de negócio e acesso a dados. São funções pequenas e testáveis.
- **shared/db** expõe o cliente Prisma único.

## As duas aplicações

Mesmo código-base, dois layouts/áreas separadas no App Router:

- `app/(paciente)/` — área pública/paciente, mobile first.
- `app/(admin)/` — área administrativa, protegida por auth.

Detalhes de UI em [07-ui-ux.md](07-ui-ux.md). Stack em [03-stack.md](03-stack.md).

## Baixo acoplamento

Um módulo não importa internamente de outro módulo. Se precisar, expõe pela "porta da frente" (um index/serviço público do módulo). Tipos compartilhados sobem para `shared/`.
