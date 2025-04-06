'use client';

import { useState, useEffect } from 'react';
import { getInstitutions, realWorldOpenFinanceFlow } from '../services/openFinance/service';
import { Button } from './Button';
import Card from './Card';

export default function BankConnection() {
  const [institutions, setInstitutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBank, setSelectedBank] = useState(null);
  const [bankData, setBankData] = useState(null);
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const data = await getInstitutions();
        setInstitutions(data);
      } catch (err) {
        setError('Erro ao carregar instituições financeiras');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchInstitutions();
  }, []);

  const connectToBank = async (bankId) => {
    setConnecting(true);
    setError(null);
    setBankData(null);

    try {
      // Dados do usuário (em um app real, viriam de um formulário ou estado de autenticação)
      const userData = {
        name: 'Usuário Teste',
        cpf: '123.456.789-00',
        email: 'usuario@teste.com',
      };

      const data = await realWorldOpenFinanceFlow(bankId, userData);
      setBankData(data);
      setSelectedBank(bankId);
    } catch (err) {
      setError(`Erro ao conectar com o banco: ${err.message}`);
      console.error(err);
    } finally {
      setConnecting(false);
    }
  };

  if (loading) {
    return <div className="p-6">Carregando instituições financeiras...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Conectar Conta Bancária</h2>

      {!bankData ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {institutions.map((institution) => (
            <Card key={institution.OrganisationId}>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{institution.OrganisationName}</h3>
                <p className="text-sm text-gray-500 mb-4">Status: {institution.Status}</p>
                <Button
                  onClick={() => connectToBank(institution.OrganisationId)}
                  disabled={connecting}
                >
                  {connecting ? 'Conectando...' : 'Conectar'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Dados do Banco</h3>
            <Button onClick={() => setBankData(null)}>Voltar</Button>
          </div>

          <div className="space-y-6">
            {/* Informações das contas */}
            <Card>
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-4">Contas</h4>
                {bankData.accounts.data.brand.companies[0].accounts.map((account) => (
                  <div key={account.accountId} className="border p-3 rounded mb-2">
                    <p className="font-medium">{account.displayName}</p>
                    <p className="text-sm">
                      Agência: {account.branchCode} | Conta: {account.accountNumber}
                    </p>
                    <p className="text-sm">Tipo: {account.accountType}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Transações */}
            <Card>
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-4">Últimas Transações</h4>
                <div className="space-y-2">
                  {bankData.transactions.data.transactions.map((transaction) => (
                    <div
                      key={transaction.transactionId}
                      className="border p-3 rounded flex justify-between"
                    >
                      <div>
                        <p className="font-medium">{transaction.transactionName}</p>
                        <p className="text-sm">{transaction.partieName}</p>
                        <p className="text-xs">{transaction.transactionDate}</p>
                      </div>
                      <div
                        className={`font-semibold ${transaction.creditDebitType === 'CREDITO' ? 'text-green-600' : 'text-red-600'}`}
                      >
                        {transaction.creditDebitType === 'CREDITO' ? '+' : '-'} R${' '}
                        {transaction.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Perfil Financeiro */}
            <Card>
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-4">Perfil Financeiro</h4>
                <p>
                  <span className="font-medium">Cliente desde:</span>{' '}
                  {bankData.financialProfile.data.financialRelations.startDate}
                </p>
                <p className="mt-2">
                  <span className="font-medium">Produtos contratados:</span>
                </p>
                <ul className="list-disc pl-5">
                  {bankData.financialProfile.data.financialRelations.productsServicesType.map(
                    (product, index) => (
                      <li key={index}>{product}</li>
                    )
                  )}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
