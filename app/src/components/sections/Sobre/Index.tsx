import React from 'react';
import { Target } from 'lucide-react';
import { Logo } from '../../ui/Logo';
import SobreStats from './SobreStats';
import { Reveal } from '../../animations/Reveal'; // Wrapper reutilizável que criamos no início

export default function Sobre() {
  return (
    <section id="sobre" className="w-full py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Elemento vivo de fundo via CSS */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none animate-pulse" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Coluna de Texto */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Reveal>
              <div className="space-y-4 w-full mb-8">
                <h3 className="text-[#FF0000] font-black tracking-[0.2em] uppercase text-xs flex items-center justify-center lg:justify-start gap-3">
                  <span className="w-12 h-[2px] bg-[#FF0000]" />
                  Sobre Nós
                </h3>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                  Conectando você ao <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-[#990000]">
                    Mundo Digital
                  </span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                <p>
                  A Melolink é uma empresa de internet criada para oferecer ao mercado a melhor conexão de internet via fibra óptica, com a tecnologia mais moderna que existe atualmente. Possuímos licença Anatel (SCM) Serviço Comunicação Multimídia e oferecemos estabilidade e velocidade.
                </p>
                <p>
                  Esta empresa nasceu da determinação e experiência de seus fundadores e da crença de que podemos oferecer o melhor para nossos clientes e colaboradores.
                </p>
                <p>
                  Nosso maior desafio é levar até o cliente toda essa tecnologia com valores mais justos e atraentes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="group bg-white border-l-8 border-[#FF0000] p-6 sm:p-8 shadow-xl rounded-2xl transition-all duration-300 hover:translate-x-2 text-left w-full max-w-xl">
                <h4 className="text-[#FF0000] font-black text-lg md:text-xl mb-3 flex items-center gap-3">
                  <Target size={24} className="group-hover:rotate-12 transition-transform shrink-0" />
                  Nossa Missão
                </h4>
                <p className="text-gray-700 italic font-medium leading-relaxed text-sm md:text-base">
                  "Ser uma equipe reconhecida pelo seu diferencial de atendimento..."
                </p>
              </div>
            </Reveal>
          </div>

          {/* Coluna Visual (Card de Identidade) */}
          <Reveal delay={0.3} width="100%">
            <div className="relative mt-4 lg:mt-0 w-full max-w-xl mx-auto lg:max-w-none">
              <div className="relative z-10">
                <div className="absolute inset-0 bg-[#FF0000] transform rotate-3 rounded-[2rem] sm:rounded-[2.5rem] opacity-5 -z-10" />

                <div className="bg-white p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#FF0000 2px, transparent 2px)', backgroundSize: '24px 24px' }} />

                  <div className="flex flex-col items-center justify-center relative">
                    <div className="transform transition-all duration-700 hover:scale-105 active:scale-95">
                      <Logo variant="black" height={180} />
                    </div>
                  </div>

                  <SobreStats />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}