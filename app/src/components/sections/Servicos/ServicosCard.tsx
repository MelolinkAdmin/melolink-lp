'use client';

import React, { memo, useState, useEffect } from 'react';
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

interface CardInnerContentProps {
  item: ServicoItem;
  isOpen: boolean;
  Icon: React.ElementType;
}

const CardInnerContent = ({ item, isOpen, Icon }: CardInnerContentProps) => (
  <div className="group flex flex-col items-center text-center flex-1 p-2 w-full h-full justify-start">
    
    {/* Container do Ícone com animação puramente via Tailwind CSS */}
    <div
      className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-3 lg:mb-4 
                  transition-all duration-500 shadow-lg relative shrink-0
                  group-hover:scale-110 group-hover:rotate-6
                  ${isOpen
          ? 'bg-white text-[#FF0033]'
          : 'bg-white/10 text-white group-hover:bg-white group-hover:text-[#FF0033] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'}`}
    >
      {/* Container relativo para fazer a troca (crossfade) perfeita entre o Ícone e o X */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Estado: Fechado (Mostra o Ícone) */}
        <div className={`absolute transition-all duration-300 ${isOpen ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}`}>
          <Icon size={24} strokeWidth={1.5} className="lg:w-8 lg:h-8" />
        </div>

        {/* Estado: Aberto (Mostra o X) */}
        <div className={`absolute transition-all duration-300 flex items-center justify-center ${isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`}>
          <span className="text-[10px] font-bold uppercase lg:hidden">Fechar</span>
          <X size={24} strokeWidth={2.5} className="hidden lg:block lg:w-8 lg:h-8" />
        </div>
      </div>
    </div>

    <h4 className="text-white font-bold text-sm lg:text-lg leading-tight mb-1">{item.title}</h4>
    <p className="text-white/80 text-xs lg:text-sm group-hover:text-white transition-colors line-clamp-2">
      {item.description}
    </p>
  </div>
);

const ServicoCard = memo(({ item }: { item: ServicoItem; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = IconMap[item.iconSlug] || IconMap['default'];

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', handleEsc);

    if (window.innerWidth < 1024) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const cardClasses = "flex-1 w-full list-none outline-none";

  if (item.isSocial) {
    return (
      <li className={`${cardClasses} relative flex flex-col items-center`}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-transparent border-none p-0 cursor-pointer focus:outline-none group rounded-2xl"
        >
          <CardInnerContent item={item} isOpen={isOpen} Icon={Icon} />
        </button>

        {/* Overlay e Modal com transição Tailwind pura */}
        <div 
          className={`fixed inset-0 z-[100] transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsOpen(false)} />
        </div>

        <div
          className={`fixed inset-0 m-auto z-[101] flex items-center justify-center px-4 transition-all duration-300
                      lg:absolute lg:inset-auto lg:bottom-[125%] lg:left-1/2 lg:-translate-x-1/2 lg:flex lg:items-end lg:px-0
                      ${isOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}`}
        >
          <div className="bg-white rounded-[2rem] shadow-2xl p-6 lg:p-3 flex flex-col items-center min-w-[280px] lg:min-w-0 w-fit">
            <span className="text-gray-400 uppercase text-[9px] font-bold tracking-widest mb-6 lg:hidden">
              Siga-nos
            </span>

            <div className="flex gap-6 lg:gap-4 items-center justify-center">
               <SocialLinks />
            </div>

            {/* Seta Tooltip Desktop */}
            <div
              className="hidden lg:block absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"
              style={{ clipPath: 'polygon(100% 100%, 0% 100%, 100% 0%)' }}
            />
            
            <button
              onClick={() => setIsOpen(false)}
              className="mt-8 px-10 py-3 bg-red-600 text-white rounded-full lg:hidden text-[10px] font-black uppercase tracking-widest"
            >
              FECHAR
            </button>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className={cardClasses}>
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="block group">
        <CardInnerContent item={item} isOpen={false} Icon={Icon} />
      </a>
    </li>
  );
});

export default ServicoCard;