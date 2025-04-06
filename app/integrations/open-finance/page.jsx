import BankConnection from '../../components/BankConnection';

export const metadata = {
  title: 'Integração Open Finance - Finance App',
  description: 'Conecte suas contas bancárias via Open Finance',
};

export default function OpenFinancePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-2">Integração Open Finance</h1>
        <p className="text-gray-600 mb-8">
          Conecte suas contas bancárias via Open Finance para visualizar seus dados financeiros em
          um só lugar.
        </p>

        <BankConnection />
      </div>
    </main>
  );
}
