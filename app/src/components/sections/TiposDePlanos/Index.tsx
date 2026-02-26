import React from 'react';
import TipoPlanoCard from './TipoDePlanosCard';
import { TIPOS_PLANOS } from './TiposDePlanosData';

export default function TiposDePlanos() {
  return (
    <section className="w-full py-20 px-4 bg-gray-50 relative z-30 overflow-hidden antialiased">
      <div className="max-w-[1200px] mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center m-0 p-0">
          {TIPOS_PLANOS.map((item, index) => (
            <TipoPlanoCard key={item.id} item={item} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}