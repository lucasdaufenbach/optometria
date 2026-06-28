# 06 — Fluxos

Fluxos principais do sistema, em alto nível.

## Paciente — Autoagendamento

1. Acessa link público (mobile).
2. Escolhe o tipo de consulta.
3. Vê dias/horários disponíveis (já filtrados).
4. Escolhe um horário.
5. Informa nome + telefone (dados mínimos).
6. Confirma.
7. Recebe confirmação na tela e (futuramente) no WhatsApp.

Regras aplicadas: ver [05-regras-de-negocio.md](05-regras-de-negocio.md) (disponibilidade, anti-abuso).

## Admin — Login

1. Acessa área administrativa.
2. Informa email + senha.
3. Sistema valida hash, cria sessão (cookie httpOnly).
4. Redireciona para o dashboard.

## Admin — Gerenciar agenda

1. Abre agenda (visão semanal/mensal).
2. Vê consultas e bloqueios.
3. Cria/edita/cancela consulta; cria bloqueio.
4. Sistema valida sobreposição e bloqueios antes de salvar.

## Admin — Gerenciar paciente

1. Busca paciente (por nome/telefone) em um grid com filtros.
2. Abre ficha: dados, histórico de consultas, anotações, arquivos.
3. Adiciona anotação ou arquivo.

## Admin — Atender consulta

1. Abre a consulta do dia.
2. Marca como realizada.
3. Registra anotações clínicas e anexa arquivos/exames.

## WhatsApp — Mensagens automáticas (futuro)

1. Evento dispara mensagem (confirmação, lembrete).
2. Camada de abstração envia via provedor configurado.
3. Resultado registrado.

Detalhes de telas em [07-ui-ux.md](07-ui-ux.md).
