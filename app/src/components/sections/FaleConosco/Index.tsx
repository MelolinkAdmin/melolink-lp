import React from 'react';
import ContactCard from './ContactCard';
import LocalizacaoInfo from './LocalizacaoInfo';
import { Reveal } from '../../animations/Reveal'; // Usando o wrapper que criamos

const FaleConoscoSection = () => {
  return (
    <section id="fale-conosco" className="min-h-screen md:min-h-0 py-16 md:py-24 px-6 bg-white font-sans text-slate-900 relative overflow-hidden">
      {/* Detalhe de fundo "Vivo" - Sutil pulso de luz */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#EE1D23]/20 to-transparent" />
      
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-10 md:mb-12">
            <header className="text-center md:text-left flex flex-col items-center md:items-start w-full">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2 w-full">
                <div className="w-8 h-1 bg-[#EE1D23] rounded-full" />
                <span className="text-[#EE1D23] font-black uppercase tracking-widest text-xs italic">Canais de Atendimento</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter">FALE CONOSCO</h2>
            </header>
          </div>
        </Reveal>
        
        <ContactCard />
        <LocalizacaoInfo />
      </div>
    </section>
  );
};

export default FaleConoscoSection;