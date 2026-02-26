"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link'; 
import { Logo } from '../../ui/Logo';
import { NavLink } from './NavLink';
import { NavButton } from './NavButton';
import { NAV_LINKS } from './NavData';
import { Menu, X, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // <-- NOVO ESTADO AQUI

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  // Controle de fundo no scroll (Glassmorphism)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu com a tecla Esc para acessibilidade
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeMenu();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeMenu]);

  // Scroll Lock quando o menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  // Define se o menu deve exibir a versão compacta (scrollado E sem hover)
  const isCompact = scrolled && !isHovered;

  return (
    <>
      <nav 
        onMouseEnter={() => setIsHovered(true)}  // <-- EVENTO DE ENTRADA DO MOUSE
        onMouseLeave={() => setIsHovered(false)} // <-- EVENTO DE SAÍDA DO MOUSE
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isCompact 
            ? "bg-white/90 backdrop-blur-md shadow-md py-0" 
            : "bg-white shadow-sm py-1"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-[72px]">
          
          {/* Logo agora usando o Link do Next.js */}
          <Link 
            href="/" 
            aria-label="Ir para a página inicial"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-md transition-transform active:scale-95"
            onClick={closeMenu}
          >
            <Logo variant="black" height={60}/>
          </Link>

          {/* Desktop Menu */}
          <div className="flex gap-6 items-center">
            <div className="hidden lg:flex gap-8">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <NavButton href="https://melolink.portalinternet.com.br/radiusnet/cda/login.php" target='_blank' variant="outline">
                <User size={18} /> Área do assinante
              </NavButton>
              <NavButton href="https://wa.me/551333721548" target='_blank'>Assinar Agora</NavButton>
            </div>
          </div>

          {/* Hamburger Button */}
          <button 
            aria-label="Menu principal"
            aria-expanded={isOpen}
            className="lg:hidden text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 p-2 z-50 transition-colors hover:text-red-600 rounded-md"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={30} strokeWidth={2.5} /> : <Menu size={30} strokeWidth={2.5} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`
          absolute top-full left-0 w-full bg-white border-t shadow-xl lg:hidden
          transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}
        `}>
          <div className="flex flex-col p-6 gap-2 bg-white">
            
            {/* Links do Menu Mobile renderizados com Next.js Link */}
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="block text-lg font-semibold text-gray-700 hover:text-red-600 border-b border-gray-100 py-3 transition-colors"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col gap-3 mt-4">
              <NavButton href="/area-assinante" variant="outline" onClick={closeMenu}>
                <User size={18} /> Área do assinante
              </NavButton>
              <NavButton href="/planos" onClick={closeMenu}>
                Assinar Agora
              </NavButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div 
        className={`
          fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden z-40
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
        onClick={closeMenu} 
        aria-hidden="true"
      />
    </>
  );
}