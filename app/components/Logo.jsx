import React from 'react';
import { cn } from '@/lib/utils';

export const Logo = ({ className, size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="relative">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn('text-primary', sizeClasses[size])}
        >
          {/* Elegant coin/flower shape */}
          <path
            d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z"
            className="fill-accent/80"
          />
          <path
            d="M16 28C9.373 28 4 22.627 4 16C4 9.373 9.373 4 16 4"
            className="stroke-primary"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 4C22.627 4 28 9.373 28 16C28 22.627 22.627 28 16 28"
            className="stroke-primary-dark"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Middle F letter for Finance */}
          <path
            d="M12 10H20M12 10V22M12 10V16H18"
            className="stroke-primary"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Decorative elements */}
          <path
            d="M20 16L22 14M20 16L22 18"
            className="stroke-primary-dark/70"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Subtle currency symbol */}
          <circle cx="16" cy="19" r="1.5" className="fill-primary-dark/90" />
        </svg>
      </div>
      <span className="font-bold text-xl bg-gradient-to-br from-primary-dark via-primary to-accent bg-clip-text text-transparent">
        Finance
      </span>
    </div>
  );
};
