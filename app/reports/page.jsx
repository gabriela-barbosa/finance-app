'use client';

import { useState } from 'react';
import { Button } from '@/app/components';

const Reports = () => {
  const [activePeriod, setActivePeriod] = useState('mensal');
  const [activeMonth, setActiveMonth] = useState('maio');

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

  const monthlyCategories = {
    janeiro: [
      { nome: 'Moradia', valor: 1150, porcentagem: 36 },
      { nome: 'Alimentação', valor: 780, porcentagem: 24 },
      { nome: 'Transporte', valor: 420, porcentagem: 13 },
      { nome: 'Saúde', valor: 320, porcentagem: 10 },
      { nome: 'Lazer', valor: 330, porcentagem: 10 },
      { nome: 'Outros', valor: 200, porcentagem: 7 },
    ],
    fevereiro: [
      { nome: 'Moradia', valor: 1150, porcentagem: 37 },
      { nome: 'Alimentação', valor: 750, porcentagem: 24 },
      { nome: 'Transporte', valor: 400, porcentagem: 13 },
      { nome: 'Saúde', valor: 300, porcentagem: 10 },
      { nome: 'Lazer', valor: 300, porcentagem: 10 },
      { nome: 'Outros', valor: 200, porcentagem: 6 },
    ],
    março: [
      { nome: 'Moradia', valor: 1150, porcentagem: 35 },
      { nome: 'Alimentação', valor: 800, porcentagem: 24 },
      { nome: 'Transporte', valor: 450, porcentagem: 14 },
      { nome: 'Saúde', valor: 350, porcentagem: 11 },
      { nome: 'Lazer', valor: 320, porcentagem: 10 },
      { nome: 'Outros', valor: 230, porcentagem: 6 },
    ],
    abril: [
      { nome: 'Moradia', valor: 1150, porcentagem: 35 },
      { nome: 'Alimentação', valor: 780, porcentagem: 24 },
      { nome: 'Transporte', valor: 420, porcentagem: 13 },
      { nome: 'Saúde', valor: 340, porcentagem: 10 },
      { nome: 'Lazer', valor: 330, porcentagem: 10 },
      { nome: 'Outros', valor: 230, porcentagem: 8 },
    ],
    maio: [
      { nome: 'Moradia', valor: 1200, porcentagem: 37 },
      { nome: 'Alimentação', valor: 800, porcentagem: 25 },
      { nome: 'Transporte', valor: 400, porcentagem: 12 },
      { nome: 'Saúde', valor: 350, porcentagem: 11 },
      { nome: 'Cuidados Pessoais', valor: 300, porcentagem: 9 },
      { nome: 'Outros', valor: 197.52, porcentagem: 6 },
    ],
    junho: [],
    julho: [],
    agosto: [],
    setembro: [],
    outubro: [],
    novembro: [],
    dezembro: [],
  };

  const handlePeriodChange = (period) => {
    setActivePeriod(period);
  };

  const handleMonthChange = (month) => {
    setActiveMonth(month);
  };

  const currentMonthData = monthlyData[activeMonth];
  const currentCategories = monthlyCategories[activeMonth];
  const balance = currentMonthData.receitas - currentMonthData.despesas;
  const savingsRate =
    ((currentMonthData.receitas - currentMonthData.despesas) / currentMonthData.receitas) * 100;

  return (
    <div className="min-h-screen bg-neutral-900 text-foreground">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-primary mb-8">Relatórios Financeiros</h1>

        <div className="bg-neutral-800 rounded-lg shadow-lg mb-8">
          <div className="p-6 border-b border-neutral-700">
            <div className="flex space-x-4">
              <Button
                onClick={() => handlePeriodChange('mensal')}
                variant={activePeriod === 'mensal' ? 'primary' : 'secondary'}
                size="small"
              >
                Mensal
              </Button>
              <Button
                onClick={() => handlePeriodChange('trimestral')}
                variant={activePeriod === 'trimestral' ? 'primary' : 'secondary'}
                size="small"
              >
                Trimestral
              </Button>
              <Button
                onClick={() => handlePeriodChange('anual')}
                variant={activePeriod === 'anual' ? 'primary' : 'secondary'}
                size="small"
              >
                Anual
              </Button>
            </div>
          </div>

          {activePeriod === 'mensal' && (
            <div className="p-6">
              <div className="grid grid-cols-6 gap-2 mb-8">
                {Object.keys(monthlyData).map((month, index) => (
                  <Button
                    key={month}
                    onClick={() => handleMonthChange(month)}
                    disabled={index >= 5 && monthlyData[month].receitas === 0}
                    variant={activeMonth === month ? 'primary' : 'secondary'}
                    size="small"
                    className={index >= 5 && monthlyData[month].receitas === 0 ? 'opacity-50' : ''}
                  >
                    {month.charAt(0).toUpperCase() + month.slice(1)}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-neutral-700 rounded-lg shadow-sm border border-neutral-600 p-6">
                  <h3 className="text-sm font-semibold text-foreground mb-1">Receitas</h3>
                  <p className="text-2xl font-bold text-success">
                    R$ {currentMonthData.receitas.toFixed(2)}
                  </p>
                </div>

                <div className="bg-neutral-700 rounded-lg shadow-sm border border-neutral-600 p-6">
                  <h3 className="text-sm font-semibold text-foreground mb-1">Despesas</h3>
                  <p className="text-2xl font-bold text-danger">
                    R$ {currentMonthData.despesas.toFixed(2)}
                  </p>
                </div>

                <div className="bg-neutral-700 rounded-lg shadow-sm border border-neutral-600 p-6">
                  <h3 className="text-sm font-semibold text-foreground mb-1">Saldo</h3>
                  <p
                    className={`text-2xl font-bold ${balance >= 0 ? 'text-success' : 'text-danger'}`}
                  >
                    R$ {balance.toFixed(2)}
                  </p>
                </div>

                <div className="bg-neutral-700 rounded-lg shadow-sm border border-neutral-600 p-6">
                  <h3 className="text-sm font-semibold text-foreground mb-1">Taxa de Economia</h3>
                  <p className="text-2xl font-bold text-primary">
                    {isNaN(savingsRate) ? '0' : savingsRate.toFixed(1)}%
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-6">
                    Despesas por Categoria
                  </h3>
                  <div className="space-y-4">
                    {currentCategories.map((category) => (
                      <div key={category.nome}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-foreground">
                            {category.nome}
                          </span>
                          <span className="text-sm font-medium text-foreground">
                            R$ {category.valor.toFixed(2)} ({category.porcentagem}%)
                          </span>
                        </div>
                        <div className="w-full bg-neutral-600 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${category.porcentagem}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-6">
                    Receitas vs Despesas
                  </h3>
                  <div className="bg-neutral-700 rounded-lg p-6 h-64 flex items-center justify-center">
                    <div className="w-full max-w-sm">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Receitas</span>
                        <span className="text-sm font-medium text-foreground">
                          R$ {currentMonthData.receitas.toFixed(2)}
                        </span>
                      </div>
                      <div className="w-full bg-neutral-600 rounded-full h-6 mb-4">
                        <div
                          className="bg-success h-6 rounded-full"
                          style={{ width: '100%' }}
                        ></div>
                      </div>

                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Despesas</span>
                        <span className="text-sm font-medium text-foreground">
                          R$ {currentMonthData.despesas.toFixed(2)}
                        </span>
                      </div>
                      <div className="w-full bg-neutral-600 rounded-full h-6">
                        <div
                          className="bg-danger h-6 rounded-full"
                          style={{
                            width: `${(currentMonthData.despesas / currentMonthData.receitas) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mt-8 mb-4">
                    Sugestões de Economia
                  </h3>

                  <div className="space-y-3">
                    <div className="bg-neutral-700 p-4 rounded-lg">
                      <h4 className="font-medium text-foreground mb-1">Alimentação</h4>
                      <p className="text-sm text-foreground">
                        Planeje refeições semanais e faça lista de compras para evitar gastos
                        desnecessários no supermercado.
                      </p>
                    </div>

                    <div className="bg-neutral-700 p-4 rounded-lg">
                      <h4 className="font-medium text-foreground mb-1">Transporte</h4>
                      <p className="text-sm text-foreground">
                        Considere transporte público ou compartilhado para economizar em combustível
                        e estacionamento.
                      </p>
                    </div>

                    <div className="bg-neutral-700 p-4 rounded-lg">
                      <h4 className="font-medium text-foreground mb-1">Cuidados Pessoais</h4>
                      <p className="text-sm text-foreground">
                        Busque alternativas mais econômicas para produtos de beleza e considere
                        espaçar serviços estéticos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;
