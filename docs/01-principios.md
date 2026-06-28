# 01 — Princípios

Estes princípios valem para todas as decisões do projeto. Em caso de dúvida, eles vencem.

## 1. Clareza acima de tudo

Todo código deve ser fácil de entender. Uma pessoa nova deve compreender um módulo em poucos minutos de leitura.

Entre uma solução simples e uma sofisticada que resolvem o mesmo problema, escolher a simples.

## 2. Código previsível

Sempre o mesmo padrão. Não misturar estilos. Qualquer funcionalidade deve ser encontrada rapidamente porque está sempre no mesmo lugar.

## 3. Poucas dependências

> Se conseguimos implementar algo com poucas linhas de código próprio, não instalamos uma biblioteca só para isso.

Bibliotecas apenas quando agregam valor significativo. Toda nova dependência precisa de justificativa registrada em [03-stack.md](03-stack.md).

## 4. Facilidade de manutenção

O sistema deve evoluir por anos. Novas funcionalidades são adicionadas sem reescrever módulos existentes.

## 5. Escalabilidade gradual

Começa com um optometrista, mas o modelo de dados é pensado para futuramente permitir múltiplos profissionais, clínicas e agendas — sem reconstrução completa. (Ver [04-modelo-de-dados.md](04-modelo-de-dados.md).)

## 6. Entrega incremental

Desenvolvimento em etapas pequenas. Cada etapa deixa o projeto funcionando, sem erros, documentado e commitado. Nenhuma etapa quebra o projeto. (Ver [09-roadmap.md](09-roadmap.md).)

## Prioridades, nesta ordem

1. Estrutura
2. Estabilidade
3. Clareza
4. Documentação
5. Novas funcionalidades
