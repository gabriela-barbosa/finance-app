/**
 * Mapping of month names to numbers
 */
const mesesMap = {
  JAN: '01',
  FEV: '02',
  MAR: '03',
  ABR: '04',
  MAI: '05',
  JUN: '06',
  JUL: '07',
  AGO: '08',
  SET: '09',
  OUT: '10',
  NOV: '11',
  DEZ: '12',
};

/**
 * Extraction patterns for different statement formats
 */
const extractionPatterns = [
  {
    regex: /(\d{2}\/\d{2}\/\d{4})\s+(.+?)\s+US\$\s+[\d.,]+\s+R\$\s+(-?[\d.,]+)/g,
    process: (match) => {
      const description = match[2].trim();
      let installmentInfo = null;
      let cleanDescription = description;

      const installmentMatch = description.match(/[(s](\d{1,2})\/(\d{1,2})[)s]?$/);
      if (installmentMatch) {
        installmentInfo = {
          current: parseInt(installmentMatch[1]),
          total: parseInt(installmentMatch[2]),
        };
        cleanDescription = description.replace(/[(s]\d{1,2}\/\d{1,2}[)s]?$/, '').trim();
      }

      return {
        date: match[1],
        description: cleanDescription,
        amount: parseFloat(match[3].replace(/\s+/g, '').replace(',', '.')),
        installment: installmentInfo,
        isNegative: match[3].includes('-') || match[3].includes('−'),
      };
    },
  },

  {
    regex:
      /(\d{1,2})\s+(JAN|FEV|MAR|ABR|MAI|JUN|JUL|AGO|SET|OUT|NOV|DEZ)\s+(.+?)\s+(?:−)?R\$\s+([0-9.,]+)/gi,
    process: (match) => {
      if (match[3].trim().toLowerCase().startsWith('pagamento em')) {
        return null;
      }

      if (match[3].trim().toLowerCase().startsWith('saldo restante')) {
        return null;
      }

      const dia = match[1].padStart(2, '0');
      const mes = mesesMap[match[2].toUpperCase()];
      const ano = new Date().getFullYear();
      const dataFormatada = `${dia}/${mes}/${ano}`;

      let descricao = match[3].trim();
      let installmentInfo = null;

      const parcelaMatch = descricao.match(/\s*[-\s]?\s*Parcela\s+(\d+)\/(\d+)$/i);
      const parcelaMatch2 = !parcelaMatch && descricao.match(/\s*[-\s]?\s*(\d+)\/(\d+)$/);
      const parcelaMatch3 =
        !parcelaMatch && !parcelaMatch2 && descricao.match(/\s*\((\d+)\/(\d+)\)$/);
      const parcelaMatch4 =
        !parcelaMatch &&
        !parcelaMatch2 &&
        !parcelaMatch3 &&
        descricao.match(/\s*\[(\d+)\/(\d+)\]$/);

      let matchFound = parcelaMatch || parcelaMatch2 || parcelaMatch3 || parcelaMatch4;

      if (matchFound) {
        installmentInfo = {
          current: parseInt(matchFound[1]),
          total: parseInt(matchFound[2]),
        };

        if (parcelaMatch) {
          descricao = descricao.replace(/\s*[-\s]?\s*Parcela\s+\d+\/\d+$/i, '');
        } else if (parcelaMatch2) {
          descricao = descricao.replace(/\s*[-\s]?\s*\d+\/\d+$/, '');
        } else if (parcelaMatch3) {
          descricao = descricao.replace(/\s*\(\d+\/\d+\)$/, '');
        } else if (parcelaMatch4) {
          descricao = descricao.replace(/\s*\[\d+\/\d+\]$/, '');
        }

        descricao = descricao.trim();
      }

      const isPagamento =
        !descricao.toLowerCase().startsWith('pagamento') &&
        descricao.toLowerCase().includes('pagamento');

      let valor = match[4].replace(/\./g, '').replace(',', '.');
      const amount = parseFloat(valor);

      return {
        date: dataFormatada,
        description: descricao,
        amount: amount,
        isNegative: match[0].includes('−') || isPagamento,
        installment: installmentInfo,
      };
    },
  },
];

/**
 * Extracts transactions from statement text
 * @param {string} text - Statement text
 * @returns {Array} List of extracted transactions
 */
export function extractTransactionsFromText(text) {
  const transactions = [];

  for (const pattern of extractionPatterns) {
    let match;

    pattern.regex.lastIndex = 0;

    while ((match = pattern.regex.exec(text)) !== null) {
      const processed = pattern.process(match);

      if (!processed) continue;

      const type = processed.isNegative ? 'receita' : 'despesa';

      const isDuplicate = transactions.some(
        (t) =>
          t.description === processed.description &&
          t.date === processed.date &&
          t.amount === Math.abs(processed.amount)
      );

      if (!isDuplicate) {
        transactions.push({
          description: processed.description,
          date: processed.date,
          amount: Math.abs(processed.amount),
          type: type,
          category: type === 'receita' ? 'Receita' : 'Cartão de Crédito',
          installment: processed.installment,
        });
      }
    }
  }

  return transactions;
}
