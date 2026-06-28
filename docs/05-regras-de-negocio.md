# 05 — Regras de Negócio

Regras que o sistema deve garantir. Servem de base para services e testes.

## Agendamento

- Uma consulta tem início e fim. O fim pode ser derivado da `duracao_minutos` do tipo de consulta.
- Não pode haver duas consultas sobrepostas para o mesmo profissional.
- Não pode haver consulta dentro de um `agenda_bloqueio` do profissional.
- Agendamentos respeitam o horário de funcionamento (em `configuracoes`).
- Status válidos: `agendada → confirmada → realizada`; ou `cancelada` / `faltou`. Transições inválidas são rejeitadas.

## Autoagendamento (paciente)

- Paciente só enxerga horários realmente livres (sem sobreposição, sem bloqueio, dentro do funcionamento).
- Fluxo curto: escolher tipo → escolher dia/horário → informar dados mínimos → confirmar.
- Identificação do paciente por telefone (chave prática). Se já existir, reaproveitar cadastro; se não, criar.
- Limites anti-abuso configuráveis (ex.: nº de agendamentos futuros por telefone).

## Pacientes

- Telefone é o identificador prático principal; evitar duplicar paciente com mesmo telefone.
- Exclusão de paciente com histórico deve ser evitada (preferir inativar) — definir ao implementar.

## Autenticação / acesso

- Área administrativa exige usuário autenticado e ativo.
- Senhas nunca em texto puro: sempre hash.
- Sessão expira e pode ser revogada (logout).
- Área do paciente não exige login na largada (autoagendamento aberto), salvo regra futura.

## Consultas e histórico

- Anotações e arquivos pertencem sempre a um paciente; opcionalmente a uma consulta.
- Histórico é somente-acréscimo na prática: editar/excluir anotação é exceção e deve ser auditável no futuro.

## Configurações

- Horário de funcionamento, duração padrão e regras de autoagendamento vivem em `configuracoes`, não hardcoded.

> Estas regras evoluem. Ao alterar uma regra, atualizar este documento na mesma sessão.
