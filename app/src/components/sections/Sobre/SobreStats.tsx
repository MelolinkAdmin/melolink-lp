'use client';
import React, { memo } from 'react';
import { motion } from 'framer-motion';
    
const stats = [
  { label: 'Fibra Óptica', value: '100%' },
  { label: 'Tecnologia', value: '+Veloz' },
  { label: 'Licença Anatel', value: 'SCM' },
];

const SobreStats = memo(() => (
  <div 
    role="list"
    aria-label="Estatísticas da empresa"
    className="flex justify-between items-center mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100"
  >
    {stats.map((stat, index) => (
      <React.Fragment key={stat.label}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + (index * 0.1), type: 'spring', stiffness: 100 }}
          className="text-center px-1"
        >
          <span className="block text-xl sm:text-2xl md:text-3xl font-black text-[#FF0000] leading-none mb-1">
            {stat.value}
          </span>
          <span className="text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
            {stat.label}
          </span>
        </motion.div>
        {index < stats.length - 1 && <div className="w-px h-8 sm:h-10 bg-gray-200 shrink-0" aria-hidden="true" />}
      </React.Fragment>
    ))}
  </div>
));

SobreStats.displayName = 'SobreStats';
export default SobreStats;