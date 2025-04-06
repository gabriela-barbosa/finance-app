import { Geist, Geist_Mono } from 'next/font/google';
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
    <html lang="pt-BR" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
