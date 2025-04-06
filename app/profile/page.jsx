'use client';

import { useState } from 'react';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    nome: 'Ana Silva',
    email: 'ana.silva@email.com',
    dataNascimento: '15/04/1988',
    profissao: 'Designer Gráfica',
    rendaMensal: 5000,
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailTransacoes: true,
    emailRelatorios: true,
    pushAlertasDespesas: true,
    pushLembretesPagamentos: true,
    emailDicas: false,
  });

  const [financialGoals, setFinancialGoals] = useState([
    {
      id: 1,
      titulo: 'Fundo de emergência',
      valorAlvo: 15000,
      valorAtual: 8400,
      dataLimite: '31/12/2024',
      categoria: 'Poupança',
      prioridade: 'Alta',
    },
    {
      id: 2,
      titulo: 'Viagem para Europa',
      valorAlvo: 12000,
      valorAtual: 3500,
      dataLimite: '30/06/2025',
      categoria: 'Lazer',
      prioridade: 'Média',
    },
    {
      id: 3,
      titulo: 'Curso de especialização',
      valorAlvo: 8000,
      valorAtual: 2000,
      dataLimite: '31/03/2025',
      categoria: 'Educação',
      prioridade: 'Alta',
    },
  ]);

  const [newGoal, setNewGoal] = useState({
    titulo: '',
    valorAlvo: '',
    dataLimite: '',
    categoria: 'Poupança',
    prioridade: 'Média',
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({
      ...userProfile,
      [name]: value,
    });
  };

  const handleNotificationChange = (setting) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting],
    });
  };

  const handleNewGoalChange = (e) => {
    const { name, value } = e.target;
    setNewGoal({
      ...newGoal,
      [name]: value,
    });
  };

  const handleAddGoal = (e) => {
    e.preventDefault();

    if (!newGoal.titulo || !newGoal.valorAlvo || !newGoal.dataLimite) {
      // We should implement a proper error message component in the future
      return;
    }

    const newGoalObject = {
      id: Date.now(),
      ...newGoal,
      valorAtual: 0,
    };

    setFinancialGoals([...financialGoals, newGoalObject]);
    setNewGoal({
      titulo: '',
      valorAlvo: '',
      dataLimite: '',
      categoria: 'Poupança',
      prioridade: 'Média',
    });
  };

  const calculateProgress = (current, target) => {
    return (current / target) * 100;
  };

  return (
    <div className="container px-auto px-4 py-8 bg-background min-w-full">
      <h1 className="text-2xl font-bold text-primary mb-8">Meu Perfil</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-[#2a2532] rounded-lg shadow mb-8">
            <div className="p-6">
              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                  {userProfile.nome
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
              </div>

              <h2 className="text-xl font-bold text-center mb-1 text-white">{userProfile.nome}</h2>
              <p className="text-neutral-300 text-center mb-6">{userProfile.profissao}</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={userProfile.nome}
                    onChange={handleProfileChange}
                    className="w-full p-2 border border-[#3a3444] rounded-md bg-[#3a3444] text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={userProfile.email}
                    onChange={handleProfileChange}
                    className="w-full p-2 border border-[#3a3444] rounded-md bg-[#3a3444] text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1">
                    Data de Nascimento
                  </label>
                  <input
                    type="text"
                    name="dataNascimento"
                    value={userProfile.dataNascimento}
                    onChange={handleProfileChange}
                    className="w-full p-2 border border-[#3a3444] rounded-md bg-[#3a3444] text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1">
                    Profissão
                  </label>
                  <input
                    type="text"
                    name="profissao"
                    value={userProfile.profissao}
                    onChange={handleProfileChange}
                    className="w-full p-2 border border-[#3a3444] rounded-md bg-[#3a3444] text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1">
                    Renda Mensal (R$)
                  </label>
                  <input
                    type="number"
                    name="rendaMensal"
                    value={userProfile.rendaMensal}
                    onChange={handleProfileChange}
                    className="w-full p-2 border border-[#3a3444] rounded-md bg-[#3a3444] text-white"
                  />
                </div>

                <button className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                  Salvar Alterações
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#2a2532] rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Preferências de Notificações
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-300">
                    Notificações de transações por email
                  </span>
                  <button
                    onClick={() => handleNotificationChange('emailTransacoes')}
                    className={`w-10 h-6 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${
                      notificationSettings.emailTransacoes
                        ? 'bg-primary justify-end'
                        : 'bg-[#3a3444] justify-start'
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full bg-white mx-1"></span>
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-300">Relatórios mensais por email</span>
                  <button
                    onClick={() => handleNotificationChange('emailRelatorios')}
                    className={`w-10 h-6 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${
                      notificationSettings.emailRelatorios
                        ? 'bg-primary justify-end'
                        : 'bg-[#3a3444] justify-start'
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full bg-white mx-1"></span>
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-300">Alertas de despesas altas</span>
                  <button
                    onClick={() => handleNotificationChange('pushAlertasDespesas')}
                    className={`w-10 h-6 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${
                      notificationSettings.pushAlertasDespesas
                        ? 'bg-primary justify-end'
                        : 'bg-[#3a3444] justify-start'
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full bg-white mx-1"></span>
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-300">Lembretes de pagamentos</span>
                  <button
                    onClick={() => handleNotificationChange('pushLembretesPagamentos')}
                    className={`w-10 h-6 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${
                      notificationSettings.pushLembretesPagamentos
                        ? 'bg-primary justify-end'
                        : 'bg-[#3a3444] justify-start'
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full bg-white mx-1"></span>
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-300">Dicas financeiras por email</span>
                  <button
                    onClick={() => handleNotificationChange('emailDicas')}
                    className={`w-10 h-6 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${
                      notificationSettings.emailDicas
                        ? 'bg-primary justify-end'
                        : 'bg-[#3a3444] justify-start'
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full bg-white mx-1"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-[#2a2532] rounded-lg shadow mb-8">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">Minhas Metas Financeiras</h3>

              <div className="space-y-6">
                {financialGoals.map((goal) => (
                  <div
                    key={goal.id}
                    className="border border-[#3a3444] rounded-lg p-4 bg-[#3a3444]"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-white">{goal.titulo}</h4>
                        <p className="text-sm text-neutral-300">
                          Categoria: {goal.categoria} • Prioridade: {goal.prioridade}
                        </p>
                      </div>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                        {goal.dataLimite}
                      </span>
                    </div>

                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1 text-white">
                        <span>Progresso</span>
                        <span>
                          R$ {goal.valorAtual.toFixed(2)} / R$ {goal.valorAlvo.toFixed(2)}
                        </span>
                      </div>
                      <div className="w-full bg-[#2a2532] rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{
                            width: `${calculateProgress(goal.valorAtual, goal.valorAlvo)}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <button className="text-secondary hover:text-primary text-sm transition-colors">
                        Editar
                      </button>
                      <button className="text-danger hover:text-red-600 text-sm transition-colors">
                        Excluir
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#2a2532] rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">Adicionar Nova Meta</h3>

              <form onSubmit={handleAddGoal}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-1">
                      Título da Meta*
                    </label>
                    <input
                      type="text"
                      name="titulo"
                      value={newGoal.titulo}
                      onChange={handleNewGoalChange}
                      className="w-full p-2 border border-[#3a3444] rounded-md bg-[#3a3444] text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-1">
                      Valor Alvo (R$)*
                    </label>
                    <input
                      type="number"
                      name="valorAlvo"
                      value={newGoal.valorAlvo}
                      onChange={handleNewGoalChange}
                      className="w-full p-2 border border-[#3a3444] rounded-md bg-[#3a3444] text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-1">
                      Data Limite*
                    </label>
                    <input
                      type="text"
                      name="dataLimite"
                      value={newGoal.dataLimite}
                      onChange={handleNewGoalChange}
                      placeholder="DD/MM/AAAA"
                      className="w-full p-2 border border-[#3a3444] rounded-md bg-[#3a3444] text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-1">
                      Categoria
                    </label>
                    <select
                      name="categoria"
                      value={newGoal.categoria}
                      onChange={handleNewGoalChange}
                      className="w-full p-2 border border-[#3a3444] rounded-md bg-[#3a3444] text-white"
                    >
                      <option value="Poupança">Poupança</option>
                      <option value="Investimento">Investimento</option>
                      <option value="Educação">Educação</option>
                      <option value="Lazer">Lazer</option>
                      <option value="Moradia">Moradia</option>
                      <option value="Transporte">Transporte</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-1">
                      Prioridade
                    </label>
                    <select
                      name="prioridade"
                      value={newGoal.prioridade}
                      onChange={handleNewGoalChange}
                      className="w-full p-2 border border-[#3a3444] rounded-md bg-[#3a3444] text-white"
                    >
                      <option value="Alta">Alta</option>
                      <option value="Média">Média</option>
                      <option value="Baixa">Baixa</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                >
                  Adicionar Meta
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
