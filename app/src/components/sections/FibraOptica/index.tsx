import React from 'react';
import Image from 'next/image';
import TechBox from './TechBox';
import { FIBRA_FEATURES } from './FibraOpticaData';
import { FadeIn, StaggerContainer, StaggerItem } from '../../animations/motion-wraper';

export default function FibraOptica() {
  return (
    <section 
      id="tecnologia"
      className="w-full py-16 lg:py-24 px-6 bg-white relative overflow-hidden antialiased"
      aria-labelledby="fibra-heading"
    >     
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <header className="space-y-4 w-full">
              <FadeIn>
                <h3 className="text-[#FF0000] font-black tracking-[0.2em] uppercase text-xs flex items-center justify-center lg:justify-start gap-3 w-full">
                  <span className="w-10 h-[2px] bg-[#FF0000]" aria-hidden="true"></span>
                  Tecnologia de Ponta
                </h3>
              </FadeIn>
              
              <FadeIn>
                <h2 id="fibra-heading" className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tighter">
                  O Poder da <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-[#990000]">Fibra Óptica</span>
                </h2>
              </FadeIn>

              <FadeIn>
                <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  A tecnologia <strong>FTTH (Fiber to the Home)</strong> leva o sinal de luz diretamente para seu roteador, eliminando perdas de sinal.
                </p>
              </FadeIn>
            </header>

            {/* Lista de diferenciais com efeito cascata */}
            <StaggerContainer className="grid gap-4 w-full max-w-md lg:max-w-none mt-8 list-none">
              {FIBRA_FEATURES.map((feature) => (
                <StaggerItem key={feature.id}>
                  <TechBox feature={feature} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="relative flex justify-center items-center mt-4 lg:mt-0" aria-hidden="true">
            {/* Efeito de brilho pulsante no fundo (CSS Puro) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-red-100/40 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
            
            <div className="relative flex justify-center items-center mt-4 lg:mt-0" aria-hidden="true">
  {/* O brilho de fundo pode estar cobrindo a imagem? Reduzi o Z-index do brilho para garantir */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-red-100/40 rounded-full blur-[100px] pointer-events-none animate-pulse-slow z-0" />
  
  <FadeIn>
    {/* A DIV precisa de largura e altura definidas para o 'fill' funcionar */}
    <div className="relative z-10 w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] group">
      <Image 
        src="/CaboFibraOptica.webp"
        alt="Ilustração de cabo de fibra óptica Melolink"
        fill
        className="object-contain transition-transform duration-1000 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />
    </div>
  </FadeIn>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}