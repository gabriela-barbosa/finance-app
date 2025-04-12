'use client';

import { useState } from 'react';
import { extractTransactionsFromText } from '@/app/helpers/transactionExtractor';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Textarea } from './ui/textarea';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

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
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Extrair Transações</CardTitle>
        <CardDescription>
          Cole o texto das transações da sua fatura de cartão abaixo
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          className="min-h-32"
          placeholder="Cole aqui o texto das transações da sua fatura (suporta diversos formatos)"
          value={text}
          onChange={handleTextChange}
        />

        <div className="flex justify-end">
          <Button onClick={handleExtractTransactions} disabled={isLoading || !text.trim()}>
            {isLoading ? 'Processando...' : 'Extrair Transações'}
          </Button>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="text-xs text-muted-foreground border rounded-md p-3 bg-muted/20">
          <p className="font-medium mb-1">Formatos suportados:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-medium">Santander/BB:</span>{' '}
              <span className="text-foreground/80">
                04/04/2025 Shopee *Webcontinent(01/12) US$ 0,00 R$ 180,88
              </span>
            </li>
            <li>
              <span className="font-medium">Nubank:</span>{' '}
              <span className="text-foreground/80">
                27 JAN Petlove - NuPay - Parcela 2/3 R$ 19,80
              </span>
            </li>
            <li>O sistema identifica automaticamente estornos, pagamentos e compras parceladas</li>
            <li>Certifique-se de incluir a data, descrição completa e valor</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
