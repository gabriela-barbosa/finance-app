# Migrations do Banco de Dados

Este diretório contém todas as migrations SQL para o banco de dados Supabase do projeto.

## Como funciona

- As migrations são arquivos SQL que são executados em ordem numérica
- Cada arquivo é executado apenas uma vez
- O controle é feito pela tabela `_migrations` no banco de dados

## Como criar uma nova migration

1. Crie um novo arquivo com o formato `NNN_nome_descritivo.sql`

   - Numere sequencialmente (001, 002, 003, etc.)
   - Use um nome descritivo que explique o propósito da migration

2. Escreva as instruções SQL necessárias no arquivo

## Como executar as migrations

Para executar todas as migrations pendentes:

```bash
npm run db:migrate
```

## Requisitos

- As variáveis de ambiente devem estar configuradas no arquivo `.env.local`
- É necessária a chave de serviço do Supabase (`SUPABASE_SERVICE_KEY`)

## Estrutura atual das migrations

- `001_create_transactions_table.sql`: Cria a tabela principal de transações
- `002_add_initial_data.sql`: Adiciona dados iniciais para demonstração

## Observações importantes

- Nunca modifique uma migration já executada em produção
- Para corrigir um problema, crie uma nova migration
- Sempre teste as migrations em um ambiente de desenvolvimento antes de aplicá-las em produção
