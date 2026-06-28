# 11 — Padrões de Código

Regras práticas para manter o código previsível.

## Geral

- TypeScript em modo estrito. Sem `any` (usar tipos ou `unknown` + narrowing).
- Funções pequenas, uma responsabilidade.
- Arquivos pequenos. Componente grande = quebrar em partes.
- Sem duplicação: antes de criar, verificar se já existe algo semelhante.
- Nomes claros e descritivos. Código em inglês para identificadores técnicos; domínio em português quando ajudar a clareza (ser consistente dentro do módulo).
- Comentários só quando agregam contexto que o código não expressa.

## Organização

- Código de um único domínio mora no módulo (`src/modules/<dominio>`).
- Código transversal mora em `src/shared`.
- Um módulo não importa o interior de outro módulo — só sua interface pública.

## Estrutura de um módulo

```
modules/<dominio>/
  components/   types/   hooks/   utils/   services/
```

- `components` não acessam o banco; chamam services.
- `services` concentram regras e acesso a dados (Prisma).

## Nomenclatura

- Componentes React: PascalCase (`PacienteForm`).
- Funções/variáveis: camelCase.
- Services: verbo + substantivo (`criarPaciente`, `listarConsultas`).
- Arquivos de componente: PascalCase; demais: kebab-case ou camelCase, consistente por pasta.

## Estilos

- Tailwind. Sem CSS solto/espalhado.
- Reaproveitar componentes de `shared/ui`.
- Responsivo sempre (desktop e mobile).

## Erros

- Validar entrada na borda.
- Falhas previsíveis viram mensagens claras; inesperadas são logadas.

## Antes de finalizar uma sessão

- Projeto compila (`build`/`typecheck` sem erros).
- Lint sem erros.
- Documentação atualizada.
- Testes da etapa executados (ver [12-testes.md](12-testes.md)).
- Commit feito.
