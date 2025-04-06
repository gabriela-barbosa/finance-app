const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="flex-grow">
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Controle financeiro inteligente e simples
              </h1>
              <p className="text-xl mb-8">
                Assuma o controle das suas finanças de forma simples e intuitiva com um aplicativo
                pensado para facilitar sua vida financeira.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/dashboard"
                  className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-neutral-100 transition-colors"
                >
                  Começar agora
                </a>
                <a
                  href="#features"
                  className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-neutral-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Recursos que simplificam sua vida financeira
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-neutral-200 rounded-lg shadow">
                <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Controle simplificado
                </h3>
                <p className="text-foreground/80">
                  Acompanhe suas despesas e receitas com facilidade, categorizando e visualizando
                  seus gastos de forma intuitiva.
                </p>
              </div>

              <div className="text-center p-6 bg-neutral-200 rounded-lg shadow">
                <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Planejamento inteligente
                </h3>
                <p className="text-foreground/80">
                  Crie metas financeiras realistas e receba dicas personalizadas para atingir seus
                  objetivos de curto e longo prazo.
                </p>
              </div>

              <div className="text-center p-6 bg-neutral-200 rounded-lg shadow">
                <div className="bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Relatórios detalhados
                </h3>
                <p className="text-foreground/80">
                  Visualize de forma clara a evolução das suas finanças com relatórios e gráficos
                  personalizados que ajudam nas suas decisões.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              O que nossos usuários dizem
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-100 p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    MS
                  </div>
                  <div>
                    <h4 className="font-medium">Maria Silva</h4>
                    <p className="text-xs text-foreground/80">Empresária, 32 anos</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  "Finalmente consigo entender para onde vai meu dinheiro e como poupar de forma
                  eficiente. Em apenas três meses, já consegui criar uma reserva de emergência!"
                </p>
              </div>

              <div className="bg-neutral-100 p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    CP
                  </div>
                  <div>
                    <h4 className="font-medium">Camila Pereira</h4>
                    <p className="text-xs text-foreground/80">Médica, 28 anos</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  "O Finance me ajudou a organizar minhas finanças durante a residência médica.
                  Agora consigo planejar meus investimentos para o futuro com mais tranquilidade."
                </p>
              </div>

              <div className="bg-neutral-100 p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    LM
                  </div>
                  <div>
                    <h4 className="font-medium">Luciana Mendes</h4>
                    <p className="text-xs text-foreground/80">Professora, 45 anos</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  "Depois que comecei a usar o aplicativo, consegui identificar gastos
                  desnecessários e economizar o suficiente para realizar o sonho de viajar nas
                  férias com minha família."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Comece sua jornada para liberdade financeira
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Junte-se a milhares de pessoas que já transformaram sua relação com o dinheiro usando
              nossa plataforma.
            </p>
            <a
              href="/dashboard"
              className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-neutral-100 transition-colors inline-block"
            >
              Criar conta gratuita
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
