# 04 — Modelo de Dados

Banco simples. Novas tabelas só quando realmente necessárias.

## Princípio de escalabilidade

Mesmo com um único optometrista hoje, as entidades já preveem `clinica_id` / `profissional_id` onde fizer sentido, para permitir múltiplas clínicas/profissionais no futuro sem reestruturação. Esses campos podem começar com um valor padrão único.

## Entidades previstas (1ª onda)

### usuarios
Quem acessa a área administrativa (e futuramente profissionais).
- id, nome, email (único), senha_hash, papel (admin/profissional), ativo, criado_em, atualizado_em

### pacientes
- id, nome, telefone, data_nascimento, email (opcional), observacoes, criado_em, atualizado_em

### tipos_consulta
Catálogo de tipos (ex.: avaliação, retorno), com duração padrão.
- id, nome, duracao_minutos, ativo

### consultas
Agendamento + registro clínico.
- id, paciente_id, profissional_id, tipo_consulta_id, data_hora_inicio, data_hora_fim, status (agendada/confirmada/realizada/cancelada/faltou), origem (admin/autoagendamento), criado_em, atualizado_em

### agenda_bloqueios
Períodos indisponíveis (férias, almoço, folgas).
- id, profissional_id, inicio, fim, motivo

### anotacoes
Histórico clínico / notas livres por paciente ou consulta.
- id, paciente_id, consulta_id (opcional), autor_id, texto, criado_em

### arquivos
Imagens e documentos (exames, fotos).
- id, paciente_id, consulta_id (opcional), nome_original, caminho/chave, tipo_mime, tamanho, criado_em

### configuracoes
Configurações chave-valor da clínica (horário de funcionamento, regras de autoagendamento, etc.).
- id, chave (única), valor (json/texto), atualizado_em

## Relacionamentos principais

- paciente 1—N consultas
- paciente 1—N anotacoes, arquivos
- tipo_consulta 1—N consultas
- profissional (usuario) 1—N consultas, agenda_bloqueios
- consulta 0/1—N anotacoes, arquivos

## Convenções

- Chaves primárias: `id` (cuid/uuid via Prisma).
- Timestamps: `criado_em`, `atualizado_em` onde fizer sentido.
- Soft delete só quando necessário (campo `ativo` em catálogos). Evitar generalizar cedo.
- Nomes de tabela/coluna em português, snake_case no banco; mapear para camelCase no Prisma quando útil.

Schema canônico vive em `prisma/schema.prisma`. Este documento descreve a intenção; o schema é a fonte técnica.
