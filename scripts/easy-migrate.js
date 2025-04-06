// Script que exibe o SQL para migração
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Leitura do arquivo SQL
const sqlFilePath = path.join(__dirname, '..', 'complete_sql_setup.sql');
const sqlContent = fs.readFileSync(sqlFilePath, 'utf8');

// Exibir conteúdo
console.log('\n===================== SQL PARA MIGRAÇÃO =====================');
console.log(sqlContent);
console.log('===================== FIM DO SQL =====================\n');

// Instruções
console.log('Para criar a tabela no Supabase:');
console.log('1. Acesse o dashboard do Supabase: https://app.supabase.com');
console.log('2. Selecione seu projeto');
console.log('3. Vá para "SQL Editor" e clique em "New Query"');
console.log('4. Cole o SQL acima e clique em "Run"\n');

// Tentar copiar para a área de transferência se estiver em um ambiente que suporta
const copyToClipboard = () => {
  const command =
    process.platform === 'darwin'
      ? `echo "${sqlContent.replace(/"/g, '\\"')}" | pbcopy`
      : process.platform === 'win32'
        ? `echo ${sqlContent.replace(/"/g, '\\"')} | clip`
        : `echo "${sqlContent.replace(/"/g, '\\"')}" | xclip -selection clipboard`;

  exec(command, (error) => {
    if (error) {
      console.log('Não foi possível copiar o SQL para a área de transferência.');
      console.log('Por favor, copie manualmente o SQL acima.\n');
    } else {
      console.log('✅ SQL copiado para a área de transferência!\n');
    }
  });
};

// Perguntar se quer copiar para a área de transferência
console.log('Deseja copiar o SQL para a área de transferência? (Y/N)');
process.stdin.once('data', (data) => {
  const input = data.toString().trim().toLowerCase();
  if (input === 'y' || input === 'yes' || input === 's' || input === 'sim') {
    copyToClipboard();
  } else {
    console.log('SQL não copiado. Copie manualmente o código acima.\n');
  }

  // Encerrar após resposta
  setTimeout(() => process.exit(0), 500);
});
