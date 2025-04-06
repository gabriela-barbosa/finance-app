// Script para executar as migrações do banco de dados
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY; // Chave com permissões administrativas
const supabaseUrlParts = supabaseUrl.match(/https:\/\/([^.]+)\.supabase\.co/);
const supabaseId = supabaseUrlParts ? supabaseUrlParts[1] : null;

if (!supabaseUrl || !supabaseServiceKey || !supabaseId) {
  console.error(
    'Erro: Variáveis de ambiente NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_KEY são obrigatórias'
  );
  process.exit(1);
}

// Configurar conexão direta com PostgreSQL do Supabase
const pool = new Pool({
  host: `db.${supabaseId}.supabase.co`,
  database: 'postgres',
  user: 'postgres',
  password: supabaseServiceKey,
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function runMigrations() {
  let client;

  try {
    // Conectar ao PostgreSQL
    client = await pool.connect();
    console.log('Conexão estabelecida com o PostgreSQL');

    // Criar tabela de migrações se não existir
    await client.query(`
      CREATE TABLE IF NOT EXISTS _migrations (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL UNIQUE,
        executed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);

    // Ler arquivos de migração
    const migrationsDir = path.join(__dirname, '..', 'migrations');
    const migrationFiles = fs
      .readdirSync(migrationsDir)
      .filter((file) => file.endsWith('.sql'))
      .sort(); // Garantir que as migrações sejam executadas em ordem

    console.log(`Encontradas ${migrationFiles.length} migrações.`);

    // Verificar quais migrações já foram executadas
    const { rows: executedMigrations } = await client.query('SELECT name FROM _migrations');

    const executedMigrationNames = executedMigrations.map((m) => m.name);

    // Executar migrações pendentes
    for (const migrationFile of migrationFiles) {
      if (executedMigrationNames.includes(migrationFile)) {
        console.log(`Migração ${migrationFile} já foi executada. Pulando...`);
        continue;
      }

      console.log(`Executando migração: ${migrationFile}`);
      const migrationContent = fs.readFileSync(path.join(migrationsDir, migrationFile), 'utf8');

      try {
        // Iniciar uma transação para cada migração
        await client.query('BEGIN');

        // Executar o SQL da migração
        await client.query(migrationContent);

        // Registrar a migração
        await client.query('INSERT INTO _migrations (name) VALUES ($1)', [migrationFile]);

        // Confirmar a transação
        await client.query('COMMIT');

        console.log(`Migração ${migrationFile} executada com sucesso.`);
      } catch (error) {
        // Reverter a transação em caso de erro
        await client.query('ROLLBACK');
        throw new Error(`Falha na migração ${migrationFile}: ${error.message}`);
      }
    }

    console.log('Todas as migrações foram executadas com sucesso!');
  } catch (error) {
    console.error('Erro durante as migrações:', error);
    process.exit(1);
  } finally {
    // Sempre fechar a conexão
    if (client) {
      client.release();
    }
    // Encerrar o pool
    pool.end();
  }
}

runMigrations();
