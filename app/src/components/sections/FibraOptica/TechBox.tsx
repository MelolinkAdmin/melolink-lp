import React, { memo } from 'react';
import { TechFeature } from './FibraOpticaData';

const TechBox = memo(({ feature }: { feature: TechFeature }) => {
  const { Icon } = feature;
  
  return (
    <div 
      role="listitem"
      tabIndex={0} // Permite que o usuário de teclado pare aqui para ler a informação
      className="group flex items-start text-left gap-4 p-4 sm:p-5 rounded-2xl bg-gray-50 border border-transparent 
                transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:border-red-500/20 w-full
                focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:bg-white focus:-translate-y-1"
    >
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${feature.colorClass}`}>
        <Icon size={24} strokeWidth={2} className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
      </div>
      <div>
        <h4 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-red-600 transition-colors">
          {feature.title}
        </h4>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-1">
          {feature.desc}
        </p>
      </div>
    </div>
  );
});

export default TechBox;