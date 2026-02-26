import React from 'react';
import { ShieldCheck, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../../ui/Button';
import { FadeIn, StaggerContainer, StaggerItem } from '../../animations/motion-wraper';

const EMPRESA_FEATURES = [
  { title: "Níveis de Serviço (SLA):", desc: "Monitoramento contínuo e garantia de estabilidade." },
  { title: "Soluções Personalizadas:", desc: "Projetos que atendem à necessidade específica da sua empresa." },
  { title: "Cobertura Empresarial:", desc: "Atendemos a todos os portes de empresas na nossa região." }
];

const WHATSAPP_URL = `https://wa.me/551333721548?text=${encodeURIComponent("Olá! Gostaria de falar com um consultor sobre Links Dedicados...")}`;

export default function ProjetosEspeciais() {
  return (
    <section 
      id="empresarial"
      className="w-full py-16 lg:py-24 bg-white relative overflow-hidden antialiased"
      aria-labelledby="b2b-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* COLUNA 1: IMAGEM (Agora fixada à esquerda no código e no layout) */}
          <div className="relative">
            <FadeIn>
              <div className="relative group h-[320px] md:h-[400px] lg:h-[500px] w-full">
                <Image
                  src="/LINKS-DEDICADOS.webp"
                  alt="Infográfico de Links Dedicados"
                  fill
                  className="object-contain transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                />

                {/* Card Flutuante */}
                <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 bg-white border border-gray-100 p-4 lg:p-5 rounded-2xl animate-float shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10 max-w-[85%] sm:max-w-none will-change-transform">
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#FF0000] flex items-center justify-center text-white shadow-lg shadow-red-500/40 shrink-0">
                      <ShieldCheck size={20} className="lg:w-6 lg:h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-gray-900 font-black tracking-tight text-sm lg:text-base">SLA Garantido</p>
                      <p className="text-gray-500 text-[10px] lg:text-xs font-medium">Monitoramento Contínuo</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* COLUNA 2: TEXTO E CONTEÚDO */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <header className="space-y-4 w-full">
              <FadeIn>
                <h3 className="text-[#FF0000] font-black tracking-[0.2em] uppercase text-sm flex items-center justify-center lg:justify-start gap-3 w-full">
                  <span className="w-12 h-[2px] bg-[#FF0000]" aria-hidden="true" />
                  B2B & Enterprise
                </h3>
              </FadeIn>
              
              <FadeIn>
                <h2 id="b2b-heading" className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                  Links Dedicados e <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-[#900000]">
                    Projetos Especiais
                  </span>
                </h2>
              </FadeIn>

              <FadeIn>
                <p className="text-gray-600 text-lg leading-relaxed max-w-xl font-medium mx-auto lg:mx-0">
                  A Melolink entrega tecnologia de ponta em fibra óptica para quem não pode parar.
                  Conexão estável, segura e com suporte prioritário para o seu negócio.
                </p>
              </FadeIn>
            </header>

            <StaggerContainer className="space-y-5 w-fit mx-auto lg:mx-0 text-left my-8 list-none">
              {EMPRESA_FEATURES.map((f, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-[#FF0000]" aria-hidden="true">
                      <Check size={14} className="text-[#FF0000] group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-gray-700 leading-snug">
                      <strong className="text-gray-900 font-bold">{f.title}</strong> {f.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn>
              <div className="pt-4 flex justify-center lg:justify-start w-full">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none focus:ring-4 focus:ring-red-500/20 rounded-xl inline-block hover:scale-105 transition-transform active:scale-95"
                >
                  <Button variant='dark' iconRight={<ArrowRight size={20} />}>
                    Falar com consultor
                  </Button>
                </a>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}