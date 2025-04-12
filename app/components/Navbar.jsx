'use client';

import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Logo } from './Logo';
import { ThemeToggle } from './ui/theme-toggle';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="border-b border-border bg-card shadow-md relative z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-lg font-semibold text-primary">
            <Logo />
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <Link href="/dashboard" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'text-primary',
                      pathname === '/dashboard' && 'border-b-2 border-primary font-medium'
                    )}
                  >
                    Dashboard
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/transactions" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'text-primary',
                      pathname === '/transactions' && 'border-b-2 border-primary font-medium'
                    )}
                  >
                    Transações
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/reports" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'text-primary',
                      pathname === '/reports' && 'border-b-2 border-primary font-medium'
                    )}
                  >
                    Relatórios
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/profile" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'text-primary',
                      pathname === '/profile' && 'border-b-2 border-primary font-medium'
                    )}
                  >
                    Perfil
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M8.60124 1.25086C8.60124 1.75459 8.26278 2.17927 7.80087 2.30989C10.1459 2.4647 12 4.41582 12 6.79998V10.25C12 11.0563 12.0329 11.7074 12.7236 12.0528C12.931 12.1565 13.0399 12.3892 12.9866 12.6149C12.9333 12.8406 12.7319 13 12.5 13H8.16144C8.36904 13.1832 8.5 13.4513 8.5 13.75C8.5 14.3023 8.05228 14.75 7.5 14.75C6.94772 14.75 6.5 14.3023 6.5 13.75C6.5 13.4513 6.63096 13.1832 6.83856 13H2.5C2.26809 13 2.06674 12.8406 2.01337 12.6149C1.96001 12.3892 2.06897 12.1565 2.27638 12.0528C2.96708 11.7074 3 11.0563 3 10.25V6.79998C3 4.41537 4.85481 2.46396 7.20042 2.3098C6.73867 2.17908 6.40024 1.75448 6.40024 1.25086C6.40024 0.643104 6.89304 0.150299 7.50079 0.150299C8.10854 0.150299 8.60124 0.643104 8.60124 1.25086Z"
                  fill="currentColor"
                />
              </svg>
            </Button>

            <ThemeToggle />

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="font-normal">
                <span className="size-8 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-2">
                  AS
                </span>
                <span className="hidden md:inline">Ana Silva</span>
              </Button>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
