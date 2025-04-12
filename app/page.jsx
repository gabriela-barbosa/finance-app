import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex-grow">
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Controle financeiro inteligente e simples
            </h1>
            <p className="text-lg mb-6 text-muted-foreground">
              Assuma o controle das suas finanças com um aplicativo pensado para facilitar sua vida
              financeira.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/dashboard">Começar agora</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#features">Saiba mais</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 bg-background">
        <div className="container px-4">
          <h2 className="text-2xl font-bold text-center mb-10">
            Recursos que simplificam sua vida financeira
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="bg-primary/10 text-primary w-10 h-10 rounded-md flex items-center justify-center mb-3">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path
                      d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H3.5ZM2 2.5C2 1.67157 2.67157 1 3.5 1H11.5C12.3284 1 13 1.67157 13 2.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H10.5C10.7761 5 11 4.77614 11 4.5C11 4.22386 10.7761 4 10.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg">Controle simplificado</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">
                  Acompanhe suas despesas e receitas com facilidade, categorizando e visualizando
                  seus gastos de forma intuitiva.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="bg-primary/10 text-primary w-10 h-10 rounded-md flex items-center justify-center mb-3">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path
                      d="M10.5 1C10.7761 1 11 1.22386 11 1.5C11 1.77614 10.7761 2 10.5 2H7V13H10.5C10.7761 13 11 13.2239 11 13.5C11 13.7761 10.7761 14 10.5 14H4.5C4.22386 14 4 13.7761 4 13.5C4 13.2239 4.22386 13 4.5 13H6V2H4.5C4.22386 2 4 1.77614 4 1.5C4 1.22386 4.22386 1 4.5 1H10.5ZM12.8536 6.14645C13.0488 6.34171 13.0488 6.65829 12.8536 6.85355L11.8536 7.85355C11.6583 8.04882 11.3417 8.04882 11.1465 7.85355C10.9512 7.65829 10.9512 7.34171 11.1465 7.14645L11.7929 6.5L11.1465 5.85355C10.9512 5.65829 10.9512 5.34171 11.1465 5.14645C11.3417 4.95118 11.6583 4.95118 11.8536 5.14645L12.8536 6.14645ZM3.85355 5.14645C4.04882 5.34171 4.04882 5.65829 3.85355 5.85355L3.20711 6.5L3.85355 7.14645C4.04882 7.34171 4.04882 7.65829 3.85355 7.85355C3.65829 8.04882 3.34171 8.04882 3.14645 7.85355L2.14645 6.85355C1.95118 6.65829 1.95118 6.34171 2.14645 6.14645L3.14645 5.14645C3.34171 4.95118 3.65829 4.95118 3.85355 5.14645Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg">Planejamento inteligente</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">
                  Crie metas financeiras realistas e receba dicas personalizadas para atingir seus
                  objetivos de curto e longo prazo.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="bg-primary/10 text-primary w-10 h-10 rounded-md flex items-center justify-center mb-3">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path
                      d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <CardTitle className="text-lg">Relatórios detalhados</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">
                  Visualize de forma clara a evolução das suas finanças com relatórios e gráficos
                  personalizados que ajudam nas suas decisões.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container px-4">
          <h2 className="text-2xl font-bold text-center mb-10">O que nossos usuários dizem</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-3 text-xs font-medium">
                    MS
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Maria Silva</h4>
                    <p className="text-xs text-muted-foreground">Empresária, 32 anos</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Finalmente consigo entender para onde vai meu dinheiro e como poupar de forma
                  eficiente. Em apenas três meses, já consegui criar uma reserva de emergência!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-3 text-xs font-medium">
                    CP
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Camila Pereira</h4>
                    <p className="text-xs text-muted-foreground">Médica, 28 anos</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "O Finance me ajudou a organizar minhas finanças durante a residência médica.
                  Agora consigo planejar meus investimentos para o futuro com mais tranquilidade."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-3 text-xs font-medium">
                    LM
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Luciana Mendes</h4>
                    <p className="text-xs text-muted-foreground">Professora, 45 anos</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Depois que comecei a usar o aplicativo, consegui identificar gastos
                  desnecessários e economizar o suficiente para realizar o sonho de viajar nas
                  férias com minha família."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/90 text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Comece sua jornada para liberdade financeira</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram sua relação com o dinheiro usando
            nossa plataforma.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/dashboard">Criar conta gratuita</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
