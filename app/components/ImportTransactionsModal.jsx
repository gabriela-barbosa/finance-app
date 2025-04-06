'use client';

import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { PDFExtractor } from './';
import { Button } from './';

export const ImportTransactionsModal = ({ onImport }) => {
  const [open, setOpen] = useState(false);
  const [extractedTransactions, setExtractedTransactions] = useState([]);
  const [step, setStep] = useState('paste'); // 'paste' or 'review'

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
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button variant="outline" className="ml-2">
          Importar Transações
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#2a2532] rounded-lg shadow-lg p-6 w-[90%] max-w-2xl max-h-[90vh] overflow-auto z-50">
          <Dialog.Title className="text-xl font-bold text-white mb-4">
            {step === 'paste' ? 'Importar Transações da Fatura' : 'Revisar Transações Extraídas'}
          </Dialog.Title>

          {step === 'paste' ? (
            <div className="space-y-4">
              <p className="text-sm text-neutral-300">
                Copie e cole as transações da sua fatura de cartão de crédito para importá-las
                automaticamente.
              </p>
              <PDFExtractor onExtractComplete={handleExtractComplete} />
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-neutral-300 mb-4">
                {extractedTransactions.length} transações foram encontradas. Revise-as antes de
                importar.
              </p>

              <div className="max-h-[50vh] overflow-auto">
                <table className="w-full">
                  <thead className="bg-[#3a3444] text-neutral-300">
                    <tr>
                      <th className="p-2 text-left text-sm">Data</th>
                      <th className="p-2 text-left text-sm">Descrição</th>
                      <th className="p-2 text-center text-sm">Parcela</th>
                      <th className="p-2 text-center text-sm">Total</th>
                      <th className="p-2 text-right text-sm">Valor (R$)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {extractedTransactions.map((transaction, index) => (
                      <tr key={index} className="border-b border-[#3a3444] last:border-0">
                        <td className="p-2 text-sm text-neutral-300">{transaction.date}</td>
                        <td className="p-2 text-sm text-white">{transaction.description}</td>
                        <td className="p-2 text-sm text-neutral-300 text-center">
                          {transaction.installment ? transaction.installment.current : '-'}
                        </td>
                        <td className="p-2 text-sm text-neutral-300 text-center">
                          {transaction.installment ? transaction.installment.total : '-'}
                        </td>
                        <td className="p-2 text-sm text-danger text-right">
                          {transaction.amount.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <Button variant="ghost" onClick={handleCancel}>
                  Cancelar
                </Button>
                <Button onClick={handleImport}>
                  Importar {extractedTransactions.length} Transações
                </Button>
              </div>
            </div>
          )}

          {step === 'paste' && (
            <div className="flex justify-end mt-4">
              <Button variant="ghost" onClick={handleCancel}>
                Cancelar
              </Button>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
