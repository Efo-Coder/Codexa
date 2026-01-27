import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-semibold rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';

  const variants = {
    primary:
      'gradient-bg-blue text-white hover:opacity-95 shadow-[0_16px_36px_-26px_rgba(47,123,255,0.45)] disabled:opacity-50 disabled:cursor-not-allowed',
    secondary:
      'bg-white/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-600/80 text-slate-700 dark:text-slate-200 hover:border-[var(--theme-primary)] hover:text-[var(--theme-primary)]',
    danger:
      'bg-gradient-to-r from-red-500 to-red-600 text-white hover:opacity-90 focus-visible:ring-red-500',
    ghost:
      'bg-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
