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
  const [isHovered, setIsHovered] = useState(false);


  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {

    if (href.includes('#')) {
      const id = href.split('#')[1];
      const element = document.getElementById(id);

      if (element) {
        e.preventDefault(); // Evita que o Next.js apenas mude a URL
        const offset = 80; // Altura da sua navbar para não cobrir o título
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        closeMenu(); // Fecha o menu mobile se estiver aberto
      }
    }
  };

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleScrollEvent = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  // ... (mantenha seus outros useEffects de Esc e Scroll Lock iguais)

  const isCompact = scrolled && !isHovered;

  return (
    <>
      <nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isCompact ? "bg-white/90 backdrop-blur-md shadow-md py-0" : "bg-white shadow-sm py-1"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-[72px]">
          
          <Link href="/" onClick={(e) => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            closeMenu();
          }}>
            <Logo variant="black" height={60} />
          </Link>

          {/* Desktop Menu */}
          <div className="flex gap-6 items-center">
            <div className="hidden lg:flex gap-8">
              {NAV_LINKS.map((link) => (
                <NavLink 
                  key={link.name} 
                  href={link.href}
                  onClick={(e: any) => handleScroll(e, link.href)} // Aplica o scroll manual
                >
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

          <button onClick={toggleMenu} className="lg:hidden p-2 z-50">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu corrigido e com funcionalidade de scroll */}
        <div className={`
          absolute top-full left-0 w-full bg-white border-t shadow-xl lg:hidden transition-all duration-300
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}
        `}>
          <div className="flex flex-col p-6 gap-2 bg-white">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="block text-lg font-semibold text-gray-700 py-3 border-b border-gray-100"
                onClick={(e) => handleScroll(e, link.href)} // Aplica o scroll manual no mobile
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col gap-3 mt-4">
              <NavButton href="https://melolink.portalinternet.com.br/radiusnet/cda/login.php" target="_blank" variant="outline">
                <User size={18} /> Área do assinante
              </NavButton>
              <NavButton href="https://wa.me/551333721548" target="_blank">
                Assinar Agora
              </NavButton>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-black/50 lg:hidden z-40 ${isOpen ? "visible" : "invisible"}`} onClick={closeMenu} />
    </>
  );
}