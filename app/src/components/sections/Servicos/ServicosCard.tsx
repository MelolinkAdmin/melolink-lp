'use client';

import React, { memo, useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // <-- IMPORTANTE
import { IconMap } from './ServicosData';
import { X } from 'lucide-react'; 
import { SocialLinks } from '../../ui/SociaisLinks';

export interface ServicoItem {
  id: number;
  title: string;
  description: string;
  iconSlug: string;
  href: string;
  isSocial?: boolean;
}

// Sub-componente para o conteúdo interno do card (visual)
const CardInnerContent = ({ item, isOpen, Icon }: { item: ServicoItem, isOpen: boolean, Icon: React.ElementType }) => (
  <div className="group flex flex-col items-center text-center flex-1 p-2 w-full h-full justify-start">
    <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-3 lg:mb-4 transition-all duration-500 shadow-lg relative shrink-0 group-hover:scale-110 group-hover:rotate-6 ${isOpen ? 'bg-white text-[#FF0033]' : 'bg-white/10 text-white group-hover:bg-white group-hover:text-[#FF0033]'}`}>
      <div className="relative w-full h-full flex items-center justify-center">
        <div className={`absolute transition-all duration-300 ${isOpen ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}`}>
          <Icon size={24} strokeWidth={1.5} className="lg:w-8 lg:h-8" />
        </div>
        <div className={`absolute transition-all duration-300 flex items-center justify-center ${isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`}>
          <X size={24} strokeWidth={2.5} className="lg:w-8 lg:h-8" />
        </div>
      </div>
    </div>
    <h4 className="text-white font-bold text-sm lg:text-lg leading-tight mb-1">{item.title}</h4>
    <p className="text-white/80 text-xs lg:text-sm group-hover:text-white transition-colors">{item.description}</p>
  </div>
);

const ServicoCard = memo(({ item }: { item: ServicoItem; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // Para evitar erro de SSR no Portal
  const Icon = IconMap[item.iconSlug] || IconMap['default'];

  useEffect(() => {
    setMounted(true);
    if (!isOpen) return;
    
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden'; // Trava o scroll do app

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (item.isSocial) {
    const modalJSX = (
      <>
        {/* Overlay - Ocupa a tela inteira do navegador */}
        <div 
          className={`fixed inset-0 w-full h-full bg-black/80 backdrop-blur-md z-[9998] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Modal - Centralizado no viewport (janela) */}
        <div
          className={`fixed inset-0 m-auto w-fit h-fit z-[9999] px-6 transition-all duration-300 ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none'}`}
        >
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 flex flex-col items-center min-w-[300px] border border-white/20">
            <span className="text-gray-400 uppercase text-[10px] font-black tracking-[0.2em] mb-8">Siga a MeloLink</span>
            
            <div className="flex gap-8 items-center justify-center">
               <SocialLinks size={40} />
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-10 w-full py-4 bg-red-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest active:scale-95 transition-transform shadow-lg shadow-red-600/20"
            >
              FECHAR
            </button>
          </div>
        </div>
      </>
    );

    return (
      <li className="flex-1 w-full list-none">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="w-full bg-transparent border-none p-0 cursor-pointer focus:outline-none group"
        >
          <CardInnerContent item={item} isOpen={isOpen} Icon={Icon} />
        </button>

        {/* Renderiza o modal fora da sessão, direto no body */}
        {mounted && isOpen && createPortal(modalJSX, document.body)}
      </li>
    );
  }

  // Links normais (Fatura, Teste, etc)
  const handleInternalScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        e.preventDefault();
        window.scrollTo({ top: element.getBoundingClientRect().top + window.pageYOffset - 100, behavior: 'smooth' });
      }
    }
  };

  return (
    <li className="flex-1 w-full list-none">
      <a 
        href={item.href} 
        target={item.href.startsWith('#') ? "_self" : "_blank"} 
        rel="noopener noreferrer" 
        className="block group"
        onClick={(e) => handleInternalScroll(e, item.href)}
      >
        <CardInnerContent item={item} isOpen={false} Icon={Icon} />
      </a>
    </li>
  );
});

export default ServicoCard;