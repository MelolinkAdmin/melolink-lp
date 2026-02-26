import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; 
}

export const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <Link 
    href={href} 
    onClick={onClick} // O clique agora é repassado para o Next.js Link
    className="text-slate-600 hover:text-red-600 transition-colors font-bold text-sm uppercase tracking-tight relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);