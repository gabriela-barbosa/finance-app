'use client';

import { useState } from 'react';
import { TransactionFilters, Button, Card, Table, ImportTransactionsModal } from '@/app/components';

const Transactions = () => {
  const [filters, setFilters] = useState({
    period: 'mes',
    type: 'todos',
    category: 'todas',
    sort: 'recentes',
  });

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      description: 'Salário',
      category: 'Renda',
      date: '05/05/2024',
      amount: 5000,
      type: 'receita',
    },
    {
      id: 2,
      description: 'Aluguel',
      category: 'Moradia',
      date: '10/05/2024',
      amount: 1200,
      type: 'despesa',
    },
    {
      id: 3,
      description: 'Supermercado',
      category: 'Alimentação',
      date: '12/05/2024',
      amount: 450.32,
      type: 'despesa',
    },
    {
      id: 4,
      description: 'Academia',
      category: 'Saúde',
      date: '15/05/2024',
      amount: 100,
      type: 'despesa',
    },
    {
      id: 5,
      description: 'Uber',
      category: 'Transporte',
      date: '18/05/2024',
      amount: 78.5,
      type: 'despesa',
    },
    {
      id: 6,
      description: 'Jantar com amigas',
      category: 'Lazer',
      date: '20/05/2024',
      amount: 120,
      type: 'despesa',
    },
    {
      id: 7,
      description: 'Cabeleireiro',
      category: 'Cuidados Pessoais',
      date: '22/05/2024',
      amount: 150,
      type: 'despesa',
    },
    {
      id: 8,
      description: 'Curso online',
      category: 'Educação',
      date: '25/05/2024',
      amount: 350,
      type: 'despesa',
    },
    {
      id: 9,
      description: 'Freelance',
      category: 'Renda',
      date: '28/05/2024',
      amount: 800,
      type: 'receita',
    },
    {
      id: 10,
      description: 'Farmácia',
      category: 'Saúde',
      date: '30/05/2024',
      amount: 45.7,
      type: 'despesa',
    },
  ]);

  const handleFilterChange = (filter, value) => {
    setFilters({
      ...filters,
      [filter]: value,
    });
  };

  const handleImportTransactions = (importedTransactions) => {
    // Add ID to each imported transaction
    const newTransactions = importedTransactions.map((transaction) => ({
      ...transaction,
      id: Date.now() + Math.floor(Math.random() * 1000),
    }));

    setTransactions([...transactions, ...newTransactions]);
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
      return (
        new Date(b.date.split('/').reverse().join('/')) -
        new Date(a.date.split('/').reverse().join('/'))
      );
    } else if (filters.sort === 'antigas') {
      return (
        new Date(a.date.split('/').reverse().join('/')) -
        new Date(b.date.split('/').reverse().join('/'))
      );
    } else if (filters.sort === 'maior') {
      return b.amount - a.amount;
    } else if (filters.sort === 'menor') {
      return a.amount - b.amount;
    }
    return 0;
  });

  const totalIncome = transactions
    .filter((t) => t.type === 'receita')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'despesa')
    .reduce((acc, curr) => acc + curr.amount, 0);

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
        </Card>
      </div>
    </main>
  );
};

export default Transactions;
