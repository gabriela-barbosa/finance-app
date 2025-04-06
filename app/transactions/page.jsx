'use client';

import { useState, useEffect } from 'react';
import { TransactionFilters, Button, Card, Table, ImportTransactionsModal } from '@/app/components';
import { getTransactions, createTransaction } from '@/app/services/transactionService';

const Transactions = () => {
  const [filters, setFilters] = useState({
    period: 'mes',
    type: 'todos',
    category: 'todas',
    sort: 'recentes',
  });

  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      setIsLoading(true);
      const data = await getTransactions();
      setTransactions(data);
      setError(null);
    } catch {
      setError('Erro ao carregar transações. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (filter, value) => {
    setFilters({
      ...filters,
      [filter]: value,
    });
  };

  const handleImportTransactions = async (importedTransactions) => {
    try {
      setIsLoading(true);

      // Process each transaction and save to the database
      const savedTransactions = [];
      for (const transaction of importedTransactions) {
        const savedTransaction = await createTransaction(transaction);
        savedTransactions.push(savedTransaction);
      }

      // Refresh the transactions list after importing
      await fetchTransactions();
    } catch {
      setError('Erro ao importar transações.');
    } finally {
      setIsLoading(false);
    }
  };

  const filteredTransactions = transactions.filter((transaction) => {
    if (filters.type !== 'todos' && transaction.type !== filters.type) {
      return false;
    }
    if (filters.category !== 'todas' && transaction.category !== filters.category) {
      return false;
    }
    return true;
  });

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (filters.sort === 'recentes') {
      return new Date(b.date) - new Date(a.date);
    } else if (filters.sort === 'antigas') {
      return new Date(a.date) - new Date(b.date);
    } else if (filters.sort === 'maior') {
      return b.amount - a.amount;
    } else if (filters.sort === 'menor') {
      return a.amount - b.amount;
    }
    return 0;
  });

  const totalIncome = transactions
    .filter((t) => t.type === 'receita')
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'despesa')
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  const balance = totalIncome - totalExpenses;

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-primary">Minhas Transações</h1>
          <div className="flex">
            <Button>+ Nova Transação</Button>
            <ImportTransactionsModal onImport={handleImportTransactions} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card title="Receitas Totais">
            <p className="text-2xl font-bold text-success">R$ {totalIncome.toFixed(2)}</p>
          </Card>

          <Card title="Despesas Totais">
            <p className="text-2xl font-bold text-danger">R$ {totalExpenses.toFixed(2)}</p>
          </Card>

          <Card title="Saldo">
            <p className={`text-2xl font-bold ${balance >= 0 ? 'text-success' : 'text-danger'}`}>
              R$ {balance.toFixed(2)}
            </p>
          </Card>
        </div>
        <Card>
          <TransactionFilters filters={filters} onFilterChange={handleFilterChange} />

          {isLoading ? (
            <div className="flex justify-center py-8">
              <p>Carregando transações...</p>
            </div>
          ) : error ? (
            <div className="bg-danger/10 p-4 rounded-md text-danger text-center my-4">{error}</div>
          ) : (
            <Table
              columns={[
                {
                  key: 'description',
                  label: 'Descrição',
                  render: (row) => (
                    <div className="flex items-center">
                      <span className="text-white">{row.description}</span>
                      {row.installment && (
                        <span className="ml-2 px-1.5 py-0.5 text-xs font-medium rounded bg-secondary/20 text-secondary">
                          {row.installment.current}/{row.installment.total}
                        </span>
                      )}
                    </div>
                  ),
                },
                {
                  key: 'category',
                  label: 'Categoria',
                  render: (row) => (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary/10 text-primary">
                      {row.category}
                    </span>
                  ),
                },
                {
                  key: 'date',
                  label: 'Data',
                  render: (row) => <div className="text-sm text-muted-foreground">{row.date}</div>,
                },
                {
                  key: 'amount',
                  label: 'Valor',
                  render: (row) => (
                    <div
                      className={`text-sm font-medium ${row.type === 'receita' ? 'text-success' : 'text-danger'}`}
                    >
                      {row.type === 'receita' ? '+' : '-'} R$ {row.amount.toFixed(2)}
                    </div>
                  ),
                },
                {
                  key: 'type',
                  label: 'Tipo',
                  render: (row) => (
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        row.type === 'receita'
                          ? 'bg-success/10 text-success'
                          : 'bg-danger/10 text-danger'
                      }`}
                    >
                      {row.type === 'receita' ? 'Receita' : 'Despesa'}
                    </span>
                  ),
                },
                {
                  key: 'actions',
                  label: '',
                  render: () => (
                    <div className="text-right">
                      <Button
                        variant="ghost"
                        size="small"
                        className="text-primary hover:text-primary/80 mr-2"
                      >
                        Editar
                      </Button>
                      <Button
                        variant="ghost"
                        size="small"
                        className="text-danger hover:text-danger/80"
                      >
                        Excluir
                      </Button>
                    </div>
                  ),
                },
              ]}
              data={sortedTransactions}
              emptyMessage="Nenhuma transação encontrada com os filtros atuais."
            />
          )}
        </Card>
      </div>
    </main>
  );
};

export default Transactions;
