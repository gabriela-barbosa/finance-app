'use client';

import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  fullWidth = false,
  ...props
}) => {
  const baseStyles =
    'rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 hover:cursor-pointer';

  const variantStyles = {
    primary:
      'bg-primary hover:bg-primary-dark hover:border-primary-dark text-white focus:ring-primary',
    secondary: 'bg-neutral-200 hover:bg-neutral-300 text-neutral-800 focus:ring-neutral-300',
    success: 'bg-success hover:bg-green-600 text-white focus:ring-success',
    danger: 'bg-danger hover:bg-red-600 text-white focus:ring-danger',
    outline:
      'bg-transparent border border-primary text-primary hover:bg-primary/10 focus:ring-primary',
    ghost: 'bg-transparent text-foreground hover:bg-neutral-100 focus:ring-neutral-200',
  };

  const sizeStyles = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={buttonStyles} {...props}>
      {children}
    </button>
  );
};
