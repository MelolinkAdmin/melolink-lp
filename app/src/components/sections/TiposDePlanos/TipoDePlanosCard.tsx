import React, { memo } from 'react';
import { TipoPlano, IconMap } from './TiposDePlanosData';

interface Props {
  item: TipoPlano;
  index: number;
}

const TipoPlanoCard = memo(({ item, index }: Props) => {
  const Icon = IconMap[item.iconSlug] || IconMap['home'];

  const whatsappMessages: Record<string, string> = {
    home: "Olá! Gostaria de saber mais sobre os Planos Residenciais da MeloLink.",
    store: "Olá! Tenho interesse nos Planos Comerciais para minha empresa.",
    building: "Olá! Preciso de um orçamento para um Projeto Especial."
  };

  const message = encodeURIComponent(whatsappMessages[item.iconSlug] || "Olá! Gostaria de mais informações.");
  const whatsappUrl = `https://wa.me/551333721548?text=${message}`;

  return (
    <li 
      className="list-none animate-fade-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        /* AJUSTE NO CLASSNAME: 
           - Removido o hover: inicial e aplicado estilos fixos que viram hover apenas no MD (Desktop)
        */
        className="flex flex-col items-center group p-6 rounded-2xl transition-all duration-300 outline-none focus-visible:ring-4 focus-visible:ring-[#FF0000]/20 
                   bg-white shadow-xl md:bg-transparent md:shadow-none md:hover:bg-white md:hover:shadow-xl"
        aria-label={`Saber mais sobre ${item.title}`}
      >
        {/* Ícone Decorativo */}
        <div 
          className="mb-6 text-[#FF0000] transition-all duration-500 scale-110 md:scale-100 md:group-hover:scale-110"
          aria-hidden="true"
        >
          <Icon 
            strokeWidth={1.2} 
            className="w-14 h-14 md:w-16 md:h-16 transition-transform duration-700 ease-in-out will-change-transform"
          />
        </div>

        <h3 className="text-xl font-black uppercase tracking-wider mb-4 text-[#FF0000] md:text-gray-800 
                       after:content-[''] after:block after:h-1 after:bg-[#FF0000] 
                       after:mx-auto after:mt-3 after:rounded-full after:transition-all 
                       after:w-20 md:after:w-12 md:group-hover:after:w-20 md:group-hover:text-[#FF0000]">
          {item.title}
        </h3>

        <p className="text-gray-900 md:text-gray-600 leading-relaxed max-w-xs transition-colors md:group-hover:text-gray-900 mb-4 text-center">
          {item.description}
        </p>

        {/* Indicador Visual: Sempre visível no mobile (opacity-100), escondido por padrão no desktop */}
        <span className="text-[#FF0000] font-bold text-sm inline-flex items-center gap-2 
                         opacity-100 translate-y-0 
                         md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all">
          SAIBA MAIS 
          <span className="text-lg">→</span>
        </span>
      </a>
    </li>
  );
});
export default TipoPlanoCard;