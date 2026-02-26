// Cobertura.tsx (Server Component por padrão)
import React from 'react';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';
import BairroItem from './BairroItem';
import { BAIRROS_CUBATAO } from './CoberturaData';
import { FadeIn, StaggerContainer, StaggerItem } from '../../animations/motion-wraper'; // Seu wrapper

export default function Cobertura() {
  const whatsappUrl = `https://wa.me/551333721548?text=${encodeURIComponent("Olá! Vi no site...")}`;

  return (
    <section id="cobertura" className="w-full lg:h-[500px] bg-[#FF0000] relative overflow-hidden text-white flex items-center py-10 lg:py-0 antialiased">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          <div>
            <FadeIn>
              <header className="mb-6">
                 <h3 className="font-bold tracking-[0.2em] uppercase text-[10px] flex items-center gap-2 mb-2 text-white/90">
                  <span className="w-8 h-[2px] bg-white"></span>
                  Expansão Constante
                </h3>
                <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black leading-[1.1] tracking-[-0.03em]">
                  Cobertura <span className="text-white">MeloLink</span><br/> 
                  <span className="opacity-95">Cubatão</span>
                </h2>
              </header>
            </FadeIn>

            {/* Aqui usamos o wrapper para a lista de bairros */}
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-1.5 text-[11px] md:text-[12.5px] font-bold text-white/90 mb-8">
              {BAIRROS_CUBATAO.map((bairro) => (
                <StaggerItem key={bairro}>
                  <BairroItem nome={bairro} />
                </StaggerItem>
              ))}
            </StaggerContainer>
            
            <FadeIn>
              <div className="flex justify-start">
                <a href={whatsappUrl} className="group bg-[#0B1120] text-white px-8 py-4 rounded-full font-black text-[12px] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                  <MessageCircle size={18} fill="currentColor" />
                  CONSULTAR DISPONIBILIDADE
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Lado Direito: CSS PURO para performance máxima */}
          <div className="relative h-[450px] hidden lg:flex items-center justify-end">
            {/* A classe animate-float resolve o "vivo" sem JS */}
            <div className="relative w-full h-[480px] top-4 animate-float will-change-transform">
              <Image 
                src="/CelularLocalizacao.webp" 
                alt="Smartphone MeloLink"
                fill
                className="object-contain object-right-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}