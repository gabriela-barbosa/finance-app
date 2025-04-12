'use client';

import { useState } from 'react';
import { PDFExtractor } from './PDFExtractor';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from './ui/table';

export const ImportTransactionsModal = ({ onImport }) => {
  const [open, setOpen] = useState(false);
  const [extractedTransactions, setExtractedTransactions] = useState([]);
  const [step, setStep] = useState('paste');

  const handleExtractComplete = (transactions) => {
    setExtractedTransactions(transactions);
    setStep('review');
  };

  const handleImport = () => {
    onImport(extractedTransactions);
    setOpen(false);
    setStep('paste');
    setExtractedTransactions([]);
  };

  const handleCancel = () => {
    setOpen(false);
    setStep('paste');
    setExtractedTransactions([]);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="default">
          Importar Transações
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>
            {step === 'paste' ? 'Importar Transações da Fatura' : 'Revisar Transações Extraídas'}
          </DialogTitle>
          {step === 'paste' && (
            <DialogDescription>
              Copie e cole as transações da sua fatura de cartão de crédito para importá-las
              automaticamente.
            </DialogDescription>
          )}
          {step === 'review' && (
            <DialogDescription>
              {extractedTransactions.length} transações foram encontradas. Revise-as antes de
              importar.
            </DialogDescription>
          )}
        </DialogHeader>

        {step === 'paste' ? (
          <div className="py-2">
            <PDFExtractor onExtractComplete={handleExtractComplete} />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="border rounded-md overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Data</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead className="w-[80px] text-center">Parcela</TableHead>
                    <TableHead className="w-[80px] text-center">Total</TableHead>
                    <TableHead className="w-[100px] text-right">Valor (R$)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {extractedTransactions.map((transaction, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-mono text-xs">{transaction.date}</TableCell>
                      <TableCell className="font-medium">{transaction.description}</TableCell>
                      <TableCell className="text-center text-muted-foreground">
                        {transaction.installment ? transaction.installment.current : '-'}
                      </TableCell>
                      <TableCell className="text-center text-muted-foreground">
                        {transaction.installment ? transaction.installment.total : '-'}
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        {transaction.amount.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <DialogFooter>
              <Button variant="ghost" onClick={handleCancel}>
                Cancelar
              </Button>
              <Button onClick={handleImport}>
                Importar {extractedTransactions.length} Transações
              </Button>
            </DialogFooter>
          </div>
        )}

        {step === 'paste' && (
          <DialogFooter>
            <Button variant="ghost" onClick={handleCancel}>
              Cancelar
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};
