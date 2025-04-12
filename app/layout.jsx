import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

import { Navbar, Footer } from '@/components';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Finance - Controle Financeiro',
  description: 'Aplicativo de controle financeiro pessoal',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
