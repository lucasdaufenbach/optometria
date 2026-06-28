# 07 — UI / UX

Duas aplicações com prioridades opostas. Mesmo design system base, dois "modos".

## Área do Paciente

Público: idoso, pouca familiaridade, celular.

Prioridades:
- Mobile first.
- Extremamente simples: poucos passos, poucos textos, poucos botões.
- Fontes grandes, alto contraste, alvos de toque grandes.
- Linguagem simples e direta.
- Um objetivo por tela.

Evitar: tabelas, menus complexos, configurações, excesso de informação.

## Área Administrativa

Público: optometrista acostumado com ERP/Excel.

Prioridades:
- Produtividade e rapidez.
- Visão geral: dashboards.
- Grids com filtros e ordenação.
- Atalhos de teclado.
- Visão semanal e mensal da agenda.

Visual semelhante a um ERP. Densidade de informação maior é aceitável aqui.

## Componentes compartilhados

UI base reutilizável em `shared/ui` (botão, input, modal, tabela, etc.). Cada área compõe a partir dessa base, ajustando tamanho/densidade via Tailwind.

## Regras transversais

- Sempre compatível desktop e mobile (responsivo), mesmo que cada área tenha um foco.
- Acessibilidade básica: labels, contraste, foco visível.
- Sem componentes gigantes: quebrar em partes pequenas e reutilizáveis.
- Padrão visual consistente — não misturar estilos.
