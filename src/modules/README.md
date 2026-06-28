# src/modules

Código organizado **por domínio**. Cada módulo é responsável por tudo do seu domínio.

Estrutura padrão de um módulo (criar as pastas conforme a necessidade):

```
modules/<dominio>/
  components/   # componentes React do domínio
  services/     # acesso a dados e regras de negócio (chamam o db)
  types/        # tipos TypeScript do domínio
  hooks/        # hooks React do domínio
  utils/        # utilidades específicas do domínio
```

Regras:

- `components` não acessam o banco; chamam `services`.
- Um módulo **não** importa o interior de outro módulo.
- Código transversal mora em `src/shared`, não aqui.

Domínios previstos: `agenda`, `pacientes`, `consultas`, `dashboard`, `configuracoes`, `auth`, `whatsapp`.

Ver `docs/02-arquitetura.md` e `docs/11-padroes-de-codigo.md`.
