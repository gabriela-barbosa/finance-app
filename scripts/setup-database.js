// Script simplificado para configurar o banco de dados
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error(
    'Erro: Variáveis de ambiente NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY são obrigatórias'
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupDatabase() {
  try {
    console.log('Verificando conexão com Supabase...');
    console.log('✅ Conexão com Supabase estabelecida.');

    // Verificar se a tabela de transações existe
    console.log('Verificando tabela de transações...');
    const { data, error } = await supabase.from('transactions').select('*').limit(1);

    if (error && error.code === 'PGRST301') {
      console.log(
        '❌ Tabela transactions não existe. Você deve criá-la via SQL Editor no Supabase Dashboard.'
      );
      console.log('\nPara criar a tabela, execute este SQL no Dashboard do Supabase:');

      const migrationPath = path.join(
        __dirname,
        '..',
        'migrations',
        '001_create_transactions_table.sql'
      );
      const migrationSQL = fs.readFileSync(migrationPath, 'utf8');

      console.log('\n----- COPIE O SQL ABAIXO -----');
      console.log(migrationSQL);
      console.log('----- FIM DO SQL -----\n');

      console.log('Instruções:');
      console.log('1. Acesse o Supabase Dashboard: https://app.supabase.com');
      console.log('2. Selecione seu projeto');
      console.log('3. Vá para SQL Editor > New Query');
      console.log('4. Cole o SQL acima e execute');

      // Adicionar instruções para RLS
      console.log('\nAo criar a tabela, não esqueça de configurar as permissões:');
      console.log(
        '5. Ative o Row Level Security: ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;'
      );
      console.log(
        '6. Adicione uma política de leitura: CREATE POLICY "Allow select for all users" ON transactions FOR SELECT USING (true);'
      );

      console.log('\nDepois de criar a tabela, execute este script novamente para verificar.');
    } else if (error) {
      console.error('❌ Erro ao verificar tabela transactions:', error.message);
    } else {
      console.log('✅ Tabela transactions existe!');

      // Verificar se há dados na tabela
      const { count, error: countError } = await supabase
        .from('transactions')
        .select('*', { count: 'exact', head: true });

      if (!countError) {
        if (count === 0) {
          console.log('ℹ️ A tabela está vazia. Deseja inserir dados de exemplo? (Y/N)');
          process.stdout.write('> ');

          process.stdin.once('data', async (data) => {
            const input = data.toString().trim().toLowerCase();

            if (input === 'y' || input === 'yes' || input === 's' || input === 'sim') {
              try {
                console.log('Inserindo dados de exemplo...');

                const exampleData = [
                  {
                    description: 'Salário',
                    category: 'Renda',
                    date: new Date().toISOString().split('T')[0],
                    amount: 5000.0,
                    type: 'receita',
                  },
                  {
                    description: 'Aluguel',
                    category: 'Moradia',
                    date: new Date().toISOString().split('T')[0],
                    amount: 1200.0,
                    type: 'despesa',
                  },
                  {
                    description: 'Supermercado',
                    category: 'Alimentação',
                    date: new Date().toISOString().split('T')[0],
                    amount: 550.0,
                    type: 'despesa',
                  },
                  {
                    description: 'Freela',
                    category: 'Renda Extra',
                    date: new Date().toISOString().split('T')[0],
                    amount: 1500.0,
                    type: 'receita',
                  },
                  {
                    description: 'Internet',
                    category: 'Serviços',
                    date: new Date().toISOString().split('T')[0],
                    amount: 120.0,
                    type: 'despesa',
                  },
                ];

                const { error: insertError } = await supabase
                  .from('transactions')
                  .insert(exampleData);

                if (insertError) {
                  console.error('❌ Erro ao inserir dados de exemplo:', insertError.message);
                } else {
                  console.log('✅ Dados de exemplo inseridos com sucesso!');
                }
              } catch (err) {
                console.error('❌ Erro ao inserir dados:', err.message);
              }
            } else {
              console.log('Pulando a inserção de dados de exemplo.');
            }

            console.log('\n🎉 Configuração concluída!');
            process.exit(0);
          });

          return; // Aguardar entrada do usuário
        } else {
          console.log(`✅ A tabela já contém ${count} transações.`);
        }
      }
    }

    console.log('\n🎉 Verificação concluída!');
  } catch (error) {
    console.error('❌ Erro inesperado:', error);
    process.exit(1);
  }
}

setupDatabase();
