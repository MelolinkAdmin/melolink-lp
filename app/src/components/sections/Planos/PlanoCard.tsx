'use client';

import React, { memo } from 'react';
import { m, Variants } from 'framer-motion';
import { 
  Wifi, Gamepad2, Rocket, Zap, Star, Check, Home, MonitorPlay, Globe,
} from 'lucide-react'; 
import { Plan } from './PlanoData'; 

interface PlanCardProps {
  plan: Plan;
  index: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, 
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const IconMap: Record<string, React.ElementType> = {
  'wifi': Wifi, 'home': Home, 'game': Gamepad2, 
  'rocket': Rocket, 'zap': Zap, 'tv': MonitorPlay, 'globe': Globe
};

const colorMap: Record<string, { bg: string; text: string }> = {
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600' },
  red: { bg: 'bg-red-50', text: 'text-[#FF0000]' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600' },
};

const PlanCard = memo(({ plan, index }: PlanCardProps) => {
  const isDarkTheme = plan.theme === 'dark';
  const IconComponent = IconMap[plan.iconClass] || Zap; 
  const themeColor = colorMap[plan.color] || colorMap.indigo;

  const containerClasses = isDarkTheme
    ? "bg-[#0B0E24] border-2 border-[#FF0000] shadow-xl shadow-red-900/30"
    : "bg-white border-2 border-gray-200 shadow-md hover:bg-[#0B0E24] hover:border-[#FF0000] hover:shadow-xl hover:shadow-red-900/30"; 

  const textPrimaryClasses = isDarkTheme ? "text-white" : "text-gray-900 group-hover:text-white";
  const textSecondaryClasses = isDarkTheme ? "text-gray-200" : "text-gray-700 group-hover:text-gray-200";
  const tagClasses = isDarkTheme ? "bg-white text-black" : "bg-gray-100 text-gray-500 group-hover:bg-white group-hover:text-black";
  const iconContainerClasses = isDarkTheme ? "bg-[#FF0000] text-white" : `${themeColor.bg} ${themeColor.text} group-hover:bg-[#FF0000] group-hover:text-white`;

  const whatsappUrl = `https://wa.me/551333721548?text=${encodeURIComponent(
    `Olá! Tenho interesse no ${plan.title} de ${plan.speed} ${plan.unit}.`
  )}`;

  return (
    <m.li 
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      className={`group relative rounded-3xl p-6 h-full flex flex-col list-none transition-all duration-300 transform hover:-translate-y-2 focus-within:ring-4 focus-within:ring-red-500/30 ${containerClasses}`}
    >
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r -translate-x-full group-hover:animate-[sweep_1s_ease-in-out] transition-colors duration-300
          ${isDarkTheme ? "from-transparent via-white/5 to-transparent" : "from-transparent via-gray-100/40 to-transparent group-hover:via-white/5"}`}
        /> 
      </div>

      {plan.isBestSeller && (
        <div className="absolute -top-3 right-6 bg-[#FF0000] text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg z-20 flex items-center gap-1.5 uppercase tracking-tighter transform group-hover:scale-110 transition-transform">
          Mais vendido <Star size={12} className="fill-yellow-400 text-yellow-400" />
        </div>
      )}

      <div className="flex justify-between items-center mb-8 relative z-10">
        <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${tagClasses}`}>
          {plan.title}
        </span>
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:rotate-[15deg] ${iconContainerClasses}`}>
          <IconComponent size={24} strokeWidth={2.5} />
        </div>
      </div>

      <div className="mb-6 relative z-10 flex items-baseline gap-1">
        <span className={`text-6xl font-black tracking-tighter transition-colors duration-300 ${textPrimaryClasses}`}>{plan.speed}</span>
        <span className="text-2xl font-bold text-[#FF0000]">{plan.unit}</span>
      </div>

      <ul className="space-y-4 mb-8 flex-grow relative z-10">
        {plan.benefits.map((benefit, idx) => (
          <li key={idx} className={`text-sm font-medium flex items-start transition-colors duration-300 ${textSecondaryClasses}`}>
            <Check size={18} strokeWidth={3} className="mr-2 text-green-500 shrink-0" /> 
            <span className="leading-tight">{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto relative z-10">
        <div className="flex items-baseline mb-6">
          <span className={`text-sm font-bold mr-1 transition-colors duration-300 ${isDarkTheme ? "text-gray-400" : "text-gray-500 group-hover:text-gray-400"}`}>R$</span>
          <span className={`text-4xl font-black transition-colors duration-300 ${isDarkTheme ? "text-white" : "text-gray-800 group-hover:text-[#FF0000]"}`}>
            {plan.price}
          </span>
          <span className={`text-xs font-bold ml-1 transition-colors duration-300 ${isDarkTheme ? "text-gray-400" : "text-gray-500 group-hover:text-gray-400"}`}>/mês</span>
        </div>
        
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`block text-center w-full py-4 rounded-2xl font-black text-[11px] tracking-widest transition-all duration-300 active:scale-95
            ${isDarkTheme ? "bg-[#FF0000] text-white hover:bg-white hover:text-[#FF0000]" : "bg-gray-900 text-white group-hover:bg-[#FF0000] group-hover:text-white hover:!bg-white hover:!text-[#FF0000]"}`}
        >
          ASSINAR AGORA
        </a>
      </div>
    </m.li>
  );
});

PlanCard.displayName = 'PlanCard';
export default PlanCard;