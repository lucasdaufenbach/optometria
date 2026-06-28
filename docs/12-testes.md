# 12 — Testes

Testes proporcionais ao risco. Sem dogma, sem cobertura artificial. Foco em proteger regras de negócio e fluxos críticos.

## O que testar primeiro

1. **Regras de negócio** (services): sobreposição de consultas, disponibilidade do autoagendamento, transições de status, hash/validação de senha.
2. **Fluxos críticos**: login, criar consulta, autoagendar.
3. **Utilidades** com lógica não trivial (datas, validações).

## O que não precisa de teste

- Componentes triviais de apresentação.
- Código gerado (Prisma client).

## Estratégia

- **Unit/integration** nos services — onde mora a lógica. Preferir testar service contra um banco de teste ou com dados controlados.
- Testes de UI só para fluxos realmente críticos, se/quando agregarem valor.

## Ferramenta

A definir na primeira sessão que exigir testes (provável: Vitest, leve e simples). Registrar a escolha em [03-stack.md](03-stack.md) ao instalar.

## Regras

- Toda regra de negócio nova nasce com pelo menos um teste que a cobre.
- Ao corrigir um bug de lógica, adicionar um teste que o reproduza.
- Cada sessão executa seus testes antes do commit.
