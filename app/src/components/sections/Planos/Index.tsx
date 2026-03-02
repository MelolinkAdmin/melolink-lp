'use client';

import React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion'; 
import PlanCard from './PlanoCard'; 
import { PLANS_DATA } from './PlanoData'; 

export default function PlansSection() {
  return (
    <section id="planos" className="w-full py-16 px-4 bg-white relative z-30">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-[#FF0000] font-medium italic text-xl mb-1">
            Planos
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold italic text-black tracking-tight">
            Encontre a velocidade perfeita
          </h3>
        </div>

        {/* LazyMotion com domAnimation direto resolve o problema de invisibilidade */}
        <LazyMotion features={domAnimation} strict>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch m-0 p-0">
            {PLANS_DATA.map((plan, index) => (
              <PlanCard 
                key={plan.id} 
                plan={plan} 
                index={index} 
              />
            ))}
          </ul>
        </LazyMotion>
        
      </div>
    </section>
  );
}