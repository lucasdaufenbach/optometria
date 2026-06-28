# CLAUDE.md

Orientações para a IA trabalhar neste projeto. Ler antes de qualquer alteração.

## Contexto

Sistema web de gestão para clínica de optometria. Monolito Next.js + TypeScript + Tailwind + Postgres + Prisma. Duas áreas: paciente (simples, mobile first) e admin (ERP). Documentação completa em `docs/` — `docs/00-visao-geral.md` é o ponto de entrada.

## Regras inegociáveis

- Nunca alterar a arquitetura sem necessidade clara e justificada.
- Nunca instalar bibliotecas sem justificativa registrada em `docs/03-stack.md`.
- Nunca duplicar código. Antes de criar, verificar se já existe algo semelhante.
- Sempre reutilizar componentes (`src/shared/ui`).
- Sempre documentar alterações relevantes na mesma sessão.
- Nunca remover funcionalidades existentes sem combinar antes.
- Priorizar simplicidade e legibilidade sobre esperteza.
- Sempre manter compatibilidade desktop e mobile.
- Sempre finalizar a sessão com o projeto compilando (build/typecheck/lint sem erros).
- Evitar grandes refatorações dentro de uma única sessão.
- Preferir funções pequenas e arquivos pequenos.
- Comentar apenas quando agregar contexto.

## Organização (resumo)

- Por domínio, não por tipo de arquivo. Ver `docs/02-arquitetura.md`.
- Código de um domínio → `src/modules/<dominio>`. Transversal → `src/shared`. Rotas finas → `src/app`.
- UI não acessa o banco; chama services. Regras de negócio vivem em services.
- Um módulo não importa o interior de outro módulo.

## Como conduzir uma sessão

Cada sessão segue `docs/09-roadmap.md` e deve ter:

1. **Objetivo** — o que entrega.
2. **Escopo** — o que está dentro e fora.
3. **Checklist** — passos.
4. **Critérios de aceite** — como saber que terminou.
5. **Testes** — o que rodar (ver `docs/12-testes.md`).
6. **Commit sugerido** — mensagem.
7. **Próxima etapa**.

Regras de ouro:
- Uma funcionalidade por vez. Nunca iniciar várias ao mesmo tempo.
- Nenhuma etapa deixa o projeto quebrado.
- Cada sessão entrega algo utilizável.

## Prioridades (em ordem)

1. Estrutura 2. Estabilidade 3. Clareza 4. Documentação 5. Novas funcionalidades

## Antes de finalizar

- [ ] Projeto compila, sem erros de tipo/lint.
- [ ] Testes da etapa executados.
- [ ] Documentação atualizada (incl. `docs/03-stack.md` se houve nova dependência).
- [ ] Commit feito com mensagem clara.
- [ ] Próxima etapa anotada.

## Decisões já tomadas

- Banco em dev: PostgreSQL via Docker (`docker-compose.yml`).
- Auth: solução própria simples (cookie de sessão + hash). Sem Auth.js na largada.
- WhatsApp e armazenamento: camadas de abstração próprias.
