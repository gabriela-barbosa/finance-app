'use client';

import Link from 'next/link';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-base font-semibold text-primary mb-3">Finance</h3>
            <p className="text-sm text-muted-foreground">
              Sua solução para controle financeiro pessoal inteligente.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Recursos</h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/dashboard"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/transactions"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Transações
              </Link>
              <Link
                href="/reports"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Relatórios
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Empresa</h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Sobre nós
              </Link>
              <Link
                href="/blog"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contato
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Termos de Uso
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacidade
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-border mt-6 pt-6 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {year} Finance. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M2 3C2 2.44772 2.44772 2 3 2H12C12.5523 2 13 2.44772 13 3V12C13 12.5523 12.5523 13 12 13H3C2.44772 13 2 12.5523 2 12V3ZM3 3L3 12H12V3H3ZM4.5 8.5C4.5 8.22386 4.72386 8 5 8H10C10.2761 8 10.5 8.22386 10.5 8.5C10.5 8.77614 10.2761 9 10 9H5C4.72386 9 4.5 8.77614 4.5 8.5ZM5 5.5C4.72386 5.5 4.5 5.72386 4.5 6C4.5 6.27614 4.72386 6.5 5 6.5H5.5C5.77614 6.5 6 6.27614 6 6C6 5.72386 5.77614 5.5 5.5 5.5H5ZM7 5.5C6.72386 5.5 6.5 5.72386 6.5 6C6.5 6.27614 6.72386 6.5 7 6.5H7.5C7.77614 6.5 8 6.27614 8 6C8 5.72386 7.77614 5.5 7.5 5.5H7ZM9 5.5C8.72386 5.5 8.5 5.72386 8.5 6C8.5 6.27614 8.72386 6.5 9 6.5H9.5C9.77614 6.5 10 6.27614 10 6C10 5.72386 9.77614 5.5 9.5 5.5H9Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM6.90866 11.8995C6.88686 11.8757 6.864 11.8436 6.84249 11.803H6.84133C5.76008 10.1373 4.30713 7.77578 4.06346 6.29043L4.06351 6.29034C3.9583 5.71497 4.00963 5.2444 4.19062 4.91089C4.39359 4.53207 4.83437 4.27283 5.43404 4.17932L5.43388 4.17928C5.74259 4.13393 6.10893 4.16263 6.4389 4.35655C6.78787 4.56349 7.16248 4.96218 7.50076 5.64706L7.50051 5.64618C7.82704 6.30301 8.19599 6.70379 8.54216 6.91042C8.87155 7.10486 9.23443 7.13269 9.5412 7.08742C9.84294 7.04295 10.0949 6.93098 10.2488 6.79267C10.4006 6.6559 10.5335 6.47322 10.5826 6.1988C10.6351 5.90087 10.5929 5.50596 10.3345 4.98282C10.0921 4.49276 9.67526 4.10491 9.21281 3.74384L9.21277 3.7438C9.1962 3.7322 9.17954 3.72291 9.16297 3.71486C8.81197 3.5347 8.10098 3.26523 7.42442 3.23948C6.75439 3.21397 6.08059 3.43171 5.61172 3.97004L5.61167 3.97C5.0865 4.56898 4.8521 5.51064 4.99063 6.63327V6.63325C5.25245 8.44731 6.84611 11.018 7.9376 12.6504C7.99099 12.7333 8.06455 12.7333 8.11794 12.6504C9.20943 11.018 10.8031 8.44731 11.0649 6.63325L11.0649 6.63327C11.2034 5.51064 10.969 4.56898 10.4438 3.97L10.4438 3.97004C9.95274 3.41192 9.24718 3.19211 8.55586 3.2321C7.88353 3.27053 7.19103 3.54446 6.85873 3.71486C6.84214 3.72292 6.82546 3.7322 6.80888 3.74384M6.90866 11.8995C6.90438 11.8936 6.90012 11.8854 6.89592 11.875C6.90011 11.8854 6.90437 11.8935 6.90866 11.8995Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M4.5 1C4.22386 1 4 1.22386 4 1.5C4 1.77614 4.22386 2 4.5 2H10.5C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H4.5ZM2 4C2 3.44772 2.44772 3 3 3H12C12.5523 3 13 3.44772 13 4V12C13 12.5523 12.5523 13 12 13H3C2.44772 13 2 12.5523 2 12V4ZM3 4H12V12H3V4Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
