"use client";

import { ReactNode, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Função utilitária para combinar classes (boa prática em Next.js)
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'dark' | 'red';
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  href?: string; // Se você passar essa prop, ele vira um Link automaticamente
}

export const Button = ({ 
  children, 
  variant = 'red', 
  iconLeft, 
  iconRight, 
  className, 
  href,
  ...props 
}: ButtonProps) => {
  
  const variants = {
    // Adicionamos 'hover:bg-none' para garantir que o gradiente do CSS não bloqueie a cor sólida
    red: "bg-[#FF0000] hover:!bg-gray-800 hover:bg-none hover:shadow-gray-900/30",
    dark: "bg-gray-900 hover:!bg-[#FF0000] hover:shadow-red-500/30"
  };

  // Todas as classes de estilo concentradas aqui
  const styles = cn(
    "group relative text-white px-10 py-4 rounded-full font-black text-sm cursor-pointer",
    "transition-all duration-300 shadow-xl flex items-center justify-center gap-3",
    "active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    className
  );

  // O conteúdo que vai dentro (ícones + texto)
  const content = (
    <>
      {iconLeft && (
        <span className="transition-transform group-hover:-translate-x-1 flex items-center">
          {iconLeft}
        </span>
      )}
      {children}
      {iconRight && (
        <span className="transition-transform group-hover:translate-x-1 flex items-center">
          {iconRight}
        </span>
      )}
    </>
  );

  // LÓGICA DE OURO: Se tiver href, renderiza como Link. Se não, como Button.
  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button {...props} className={styles}>
      {content}
    </button>
  );
};