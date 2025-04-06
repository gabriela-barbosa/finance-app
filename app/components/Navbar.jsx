'use client';

import { Button } from './Button';

export const Navbar = () => {
  return (
    <header className="bg-gray-900 shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="text-xl font-bold text-primary">
            Finance
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="/dashboard" className="text-sm font-medium text-gray-200 hover:text-primary">
              Dashboard
            </a>
            <a
              href="/transactions"
              className="text-sm font-medium text-gray-200 hover:text-primary"
            >
              Transações
            </a>
            <a href="/reports" className="text-sm font-medium text-gray-200 hover:text-primary">
              Relatórios
            </a>
            <a
              href="/integrations/open-finance"
              className="text-sm font-medium text-gray-200 hover:text-primary"
            >
              Open Finance
            </a>
            <a href="/profile" className="text-sm font-medium text-gray-200 hover:text-primary">
              Perfil
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="small" className="text-gray-300 hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </Button>

            <div className="relative">
              <Button variant="ghost" size="small" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                <span className="text-sm font-medium text-gray-200 hidden md:block">Ana Silva</span>
              </Button>
            </div>

            <Button variant="ghost" size="small" className="md:hidden text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
