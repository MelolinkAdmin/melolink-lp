import React from 'react';
import dynamic from 'next/dynamic';

// Componentes críticos (Carregamento imediato - Primeira dobra da tela)
import Hero from './src/components/sections/Hero/Index';
import ServicosSection from './src/components/sections/Servicos/Index';

// OTIMIZAÇÃO: Seções pesadas e que exigem rolagem vão pro dynamic
const PlansSection = dynamic(() => import('./src/components/sections/Planos/Index'));
const TiposDePlanos = dynamic(() => import('./src/components/sections/TiposDePlanos/Index'));
const Cobertura = dynamic(() => import('./src/components/sections/Cobertura/Index'));
const ProjetosEpeciais = dynamic(() => import('./src/components/sections/ProjetosEspeciais/Index'));
const FibraOptica = dynamic(() => import('./src/components/sections/FibraOptica'));
const Sobre = dynamic(() => import('./src/components/sections/Sobre/Index'));
const FaleConosco = dynamic(() => import('./src/components/sections/FaleConosco/Index'));

const SpeedTestSection = dynamic(() => import('./src/components/sections/SpeedTestSection').then(mod => mod.SpeedTestSection)); 

export default function LandingPage() {
  return (
    <main className="bg-white text-gray-800 font-sans overflow-x-hidden antialiased">
      
      <Hero />
      
      <ServicosSection />

      <section className="relative">
        <PlansSection />
        <TiposDePlanos />
      </section>

      <Cobertura />

      <ProjetosEpeciais />

      <FibraOptica />

      <Sobre />

      <FaleConosco />

      <SpeedTestSection />
    </main>
  );
}