'use client';

import { useState } from 'react';
import { Button } from '@/app/components';

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('maio');

  const months = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];

  const monthlyData = {
    janeiro: { receitas: 4800, despesas: 3200 },
    fevereiro: { receitas: 4900, despesas: 3100 },
    março: { receitas: 5100, despesas: 3300 },
    abril: { receitas: 4950, despesas: 3250 },
    maio: { receitas: 5000, despesas: 3247.52 },
    junho: { receitas: 0, despesas: 0 },
    julho: { receitas: 0, despesas: 0 },
    agosto: { receitas: 0, despesas: 0 },
    setembro: { receitas: 0, despesas: 0 },
    outubro: { receitas: 0, despesas: 0 },
    novembro: { receitas: 0, despesas: 0 },
    dezembro: { receitas: 0, despesas: 0 },
  };

  const calculateSavingsRate = (income, expenses) => {
    if (income === 0) return 0;
    return ((income - expenses) / income) * 100;
  };

  const currentMonthData = monthlyData[selectedMonth];
  const balance = currentMonthData.receitas - currentMonthData.despesas;
  const savingsRate = calculateSavingsRate(currentMonthData.receitas, currentMonthData.despesas);

  const categoriesData = {
    Moradia: 1200,
    Alimentação: 800,
    Transporte: 400,
    Saúde: 350,
    'Cuidados Pessoais': 300,
    Outros: 197.52,
  };

  const totalExpenses = Object.values(categoriesData).reduce((acc, val) => acc + val, 0);

  const upcomingExpenses = [
    {
      id: 1,
      description: 'Aluguel',
      amount: 1200,
      dueDate: '10/06/2024',
      category: 'Moradia',
      isPaid: false,
    },
    {
      id: 2,
      description: 'Plano de saúde',
      amount: 350,
      dueDate: '15/06/2024',
      category: 'Saúde',
      isPaid: false,
    },
    {
      id: 3,
      description: 'Academia',
      amount: 100,
      dueDate: '20/06/2024',
      category: 'Saúde',
      isPaid: false,
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      description: 'Salário',
      amount: 5000,
      date: '05/05/2024',
      category: 'Renda',
      type: 'receita',
    },
    {
      id: 2,
      description: 'Supermercado',
      amount: 450.32,
      date: '12/05/2024',
      category: 'Alimentação',
      type: 'despesa',
    },
    {
      id: 3,
      description: 'Uber',
      amount: 78.5,
      date: '18/05/2024',
      category: 'Transporte',
      type: 'despesa',
    },
    {
      id: 4,
      description: 'Jantar com amigas',
      amount: 120,
      date: '20/05/2024',
      category: 'Lazer',
      type: 'despesa',
    },
    {
      id: 5,
      description: 'Freelance',
      amount: 800,
      date: '28/05/2024',
      category: 'Renda',
      type: 'receita',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-2xl font-bold text-primary mb-4 md:mb-0">Dashboard Financeiro</h1>

          <div className="flex flex-wrap gap-2">
            {months.map((month, index) => (
              <Button
                key={month}
                onClick={() => setSelectedMonth(month)}
                disabled={index > 4}
                variant={selectedMonth === month ? 'primary' : 'secondary'}
                size="small"
                className={index > 4 ? 'opacity-50 cursor-not-allowed' : ''}
              >
                {month.charAt(0).toUpperCase() + month.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-neutral-100 rounded-lg shadow p-6">
            <h3 className="text-sm font-semibold text-foreground mb-1">Receitas</h3>
            <p className="text-2xl font-bold text-success">
              R$ {currentMonthData.receitas.toFixed(2)}
            </p>
          </div>

          <div className="bg-neutral-100 rounded-lg shadow p-6">
            <h3 className="text-sm font-semibold text-foreground mb-1">Despesas</h3>
            <p className="text-2xl font-bold text-danger">
              R$ {currentMonthData.despesas.toFixed(2)}
            </p>
          </div>

          <div className="bg-neutral-100 rounded-lg shadow p-6">
            <h3 className="text-sm font-semibold text-foreground mb-1">Saldo</h3>
            <p className={`text-2xl font-bold ${balance >= 0 ? 'text-success' : 'text-danger'}`}>
              R$ {balance.toFixed(2)}
            </p>
          </div>

          <div className="bg-neutral-100 rounded-lg shadow p-6">
            <h3 className="text-sm font-semibold text-foreground mb-1">Taxa de Economia</h3>
            <p className="text-2xl font-bold text-primary">{savingsRate.toFixed(1)}%</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-neutral-100 rounded-lg shadow mb-8">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-6">Despesas por Categoria</h3>

                <div className="space-y-4">
                  {Object.entries(categoriesData).map(([category, amount]) => {
                    const percentage = (amount / totalExpenses) * 100;
                    return (
                      <div key={category}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-foreground">{category}</span>
                          <span className="text-sm font-medium text-foreground">
                            R$ {amount.toFixed(2)} ({percentage.toFixed(0)}%)
                          </span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-neutral-100 rounded-lg shadow">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-6">Transações Recentes</h3>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-neutral-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                          Descrição
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                          Categoria
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                          Data
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-semibold text-foreground uppercase tracking-wider">
                          Valor
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      {recentTransactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                            {transaction.description}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                            {transaction.category}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-foreground">
                            {transaction.date}
                          </td>
                          <td
                            className={`px-4 py-4 whitespace-nowrap text-sm text-right font-medium ${
                              transaction.type === 'receita' ? 'text-success' : 'text-danger'
                            }`}
                          >
                            {transaction.type === 'receita' ? '+' : '-'} R${' '}
                            {transaction.amount.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-neutral-100 rounded-lg shadow mb-8">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-6">Dicas de Economia</h3>

                <div className="space-y-4">
                  <div className="bg-neutral-200 p-4 rounded-lg">
                    <h4 className="font-medium text-foreground mb-1">Diversifique investimentos</h4>
                    <p className="text-sm text-foreground">
                      Considere distribuir seu dinheiro em diferentes tipos de investimentos para
                      reduzir riscos e potencializar ganhos.
                    </p>
                  </div>

                  <div className="bg-neutral-200 p-4 rounded-lg">
                    <h4 className="font-medium text-foreground mb-1">
                      Crie um fundo de emergência
                    </h4>
                    <p className="text-sm text-foreground">
                      Reserve de 3 a 6 meses de despesas em uma conta de fácil acesso para
                      imprevistos.
                    </p>
                  </div>

                  <div className="bg-neutral-200 p-4 rounded-lg">
                    <h4 className="font-medium text-foreground mb-1">Reduza gastos supérfluos</h4>
                    <p className="text-sm text-foreground">
                      Identifique e elimine gastos desnecessários como assinaturas não utilizadas ou
                      compras por impulso.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-100 rounded-lg shadow">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-6">Próximas Despesas</h3>

                <div className="space-y-4">
                  {upcomingExpenses.map((expense) => (
                    <div
                      key={expense.id}
                      className="flex items-center justify-between p-3 bg-neutral-200 rounded-lg"
                    >
                      <div>
                        <h4 className="font-medium text-foreground">{expense.description}</h4>
                        <p className="text-xs text-foreground">
                          Vencimento: {expense.dueDate} • {expense.category}
                        </p>
                      </div>
                      <p className="font-semibold text-danger">R$ {expense.amount.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
