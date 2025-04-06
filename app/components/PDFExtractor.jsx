'use client';

import { useState } from 'react';
import { extractTransactionsFromText } from '@/app/helpers/transactionExtractor';
import { Button } from './Button';

export const PDFExtractor = ({ onExtractComplete }) => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleExtractTransactions = () => {
    try {
      setIsLoading(true);
      setError(null);

      if (!text.trim()) {
        setError('Por favor, cole o texto da fatura.');
        setIsLoading(false);
        return;
      }

      const transactions = extractTransactionsFromText(text);

      if (transactions.length === 0) {
        setError(
          'Não foi possível extrair transações deste texto. Verifique se você colou as transações corretamente.'
        );
        setIsLoading(false);
        return;
      }

      onExtractComplete(transactions);
      setText('');
    } catch (err) {
      setError(`Erro ao processar as transações: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-3">
      <div className="p-4 bg-[#3a3444] rounded-lg">
        <p className="text-sm text-neutral-300 mb-2">
          Cole o texto das transações da sua fatura de cartão abaixo:
        </p>
        <textarea
          className="w-full h-40 p-3 rounded-md ring-primary bg-neutral-200 text-white border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-primary text-base leading-relaxed"
          placeholder="Cole aqui o texto das transações da sua fatura (suporta diversos formatos)"
          value={text}
          onChange={handleTextChange}
        ></textarea>
        <div className="flex justify-end mt-2">
          <Button
            onClick={handleExtractTransactions}
            disabled={isLoading || !text.trim()}
            variant="primary"
            size="medium"
          >
            {isLoading ? 'Processando...' : 'Extrair Transações'}
          </Button>
        </div>
      </div>

      {error && <div className="text-sm text-danger text-center">{error}</div>}

      <div className="text-xs text-neutral-400">
        <p>Formatos suportados:</p>
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li>
            Santander/BB:{' '}
            <span className="text-neutral-300">
              04/04/2025 Shopee *Webcontinent(01/12) US$ 0,00 R$ 180,88
            </span>
          </li>
          <li>
            Nubank:{' '}
            <span className="text-neutral-300">27 JAN Petlove - NuPay - Parcela 2/3 R$ 19,80</span>
          </li>
          <li>O sistema identifica automaticamente estornos, pagamentos e compras parceladas</li>
          <li>Certifique-se de incluir a data, descrição completa e valor</li>
        </ul>
      </div>
    </div>
  );
};
