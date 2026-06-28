# 08 — API

A "API" do projeto é interna ao Next.js: Server Actions e Route Handlers que chamam services dos módulos.

## Princípios

- A UI nunca acessa o banco direto. Chama um service (via server action / route handler).
- Services retornam dados já validados e tipados.
- Validação de entrada acontece na borda (antes do service confiar nos dados).
- Erros previsíveis viram respostas claras; erros inesperados são logados.

## Padrão de service

```ts
// modules/<dominio>/services/<acao>.ts
export async function nomeDaAcao(input: Tipo): Promise<Resultado> {
  // 1. validar input
  // 2. aplicar regras de negócio
  // 3. acessar db (Prisma)
  // 4. retornar resultado tipado
}
```

Funções pequenas, uma responsabilidade. Sem regra de negócio dentro de componentes.

## Route Handlers (quando usar)

- Endpoints públicos (ex.: autoagendamento, webhooks do WhatsApp).
- Integrações externas.

Local: `app/api/<recurso>/route.ts`, finos — apenas adaptam request/response e chamam o service.

## Server Actions (quando usar)

- Ações da área administrativa disparadas pela UI (criar paciente, salvar consulta).
- Preferidas para formulários internos.

## Autenticação na borda

- Rotas/ações administrativas verificam a sessão antes de executar.
- Helper único de "exigir usuário autenticado" em `modules/auth`.

## Convenções

- Nomes de ações: verbo + substantivo (`criarPaciente`, `listarConsultas`).
- Entrada e saída sempre tipadas. Sem `any`.
- Contratos relevantes documentados aqui quando estabilizarem.
