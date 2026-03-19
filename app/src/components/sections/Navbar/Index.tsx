'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Logo } from '../../ui/Logo';
import { NavLink } from './NavLink';
import { NavButton } from './NavButton';
import { NAV_LINKS } from './NavData';
import { Menu, X, User } from 'lucide-react';
import { sendGAEvent } from '@next/third-parties/google';
import contactsDataJson from "@/public/data/contatos.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Bloqueio de Scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup para garantir que o scroll volte se o componente desmontar
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const comercialChannel = contactsDataJson.channels.find(
    (c: any) => c.title.toLowerCase() === "comercial"
  );
  
  const WHATSAPP_PLANOS_URL = comercialChannel?.link || "https://wa.me/551333721548?text=Olá!";

  const trackClick = (eventName: string, label: string) => {
    sendGAEvent('event', eventName, {
      event_category: 'navigation',
      event_label: label,
    });
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      const id = href.split('#')[1];
      const element = document.getElementById(id);

      if (element) {
        e.preventDefault();
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        closeMenu();
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

          <div className="flex gap-6 items-center">
            <div className="hidden lg:flex gap-8">
              {NAV_LINKS.map((link) => (
                <NavLink 
                  key={link.name} 
                  href={link.href}
                  onClick={(e: any) => handleScroll(e, link.href)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <NavButton 
                href="https://melolink.portalinternet.com.br/radiusnet/cda/login.php" 
                target='_blank' 
                variant="outline"
                onClick={() => trackClick('login_area_assinante', 'Navbar Desktop')}
              >
                <User size={18} /> Área do assinante
              </NavButton>
              
              <NavButton 
                href={WHATSAPP_PLANOS_URL} 
                target='_blank'
                onClick={() => trackClick('contact_whatsapp', 'Botão Assinar Navbar Desktop')}
              >
                Assinar Agora
              </NavButton>
            </div>
          </div>

          <button onClick={toggleMenu} className="lg:hidden p-2 z-50 relative">
            {isOpen ? <X size={30} className="text-[#EE1D23]" /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`
          fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-white lg:hidden transition-all duration-300 z-50 overflow-y-auto
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}
        `}>
          <div className="flex flex-col p-8 gap-4 bg-white min-h-full">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Navegação</span>
            
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="block text-2xl font-black text-slate-900 py-2 border-b border-gray-50 italic uppercase tracking-tighter"
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col gap-4 mt-8">
              <NavButton 
                href="https://melolink.portalinternet.com.br/radiusnet/cda/login.php" 
                target="_blank" 
                variant="outline"
                className="py-5 text-base"
                onClick={() => trackClick('login_area_assinante', 'Navbar Mobile')}
              >
                <User size={20} /> Área do assinante
              </NavButton>

              <NavButton 
                href={WHATSAPP_PLANOS_URL} 
                target="_blank"
                className="py-5 text-base"
                onClick={() => trackClick('contact_whatsapp', 'Botão Assinar Navbar Mobile')}
              >
                Assinar Agora
              </NavButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} 
        onClick={closeMenu} 
      />
    </>
  );
}