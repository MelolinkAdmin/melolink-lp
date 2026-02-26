import React from 'react';
import ServicoCard from './ServicosCard';
import { SERVICOS_DATA } from './ServicosData';

export default function ServicosSection() {
  return (
    <section className="w-full pb-16 px-4 bg-white relative z-30 antialiased">
      <div className="max-w-[1200px] mx-auto">
        <ul className="relative bg-gradient-to-r from-[#FF0033] to-[#8C001C] rounded-[2.5rem] p-6 sm:p-8 lg:p-12 shadow-2xl grid grid-cols-2 lg:flex lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-4 m-0">
          {SERVICOS_DATA.map((servico, index) => (
            <React.Fragment key={servico.id}>
              {/* Passamos o index para controlar o delay da animação individualmente */}
              <ServicoCard item={servico} index={index} />
              
              {index < SERVICOS_DATA.length - 1 && (
                <li 
                  className="hidden lg:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent self-center shrink-0 list-none" 
                  aria-hidden="true"
                  role="presentation"
                />
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}