'use client';
import { motion, Variants } from 'framer-motion';
import { MessageCircle, Clock, Phone, Headset, ShoppingCart, Wallet } from 'lucide-react';
// Importamos o JSON dinâmico
import contactsDataJson from "@/public/data/contatos.json";

// Mapeamento de nomes para Componentes Lucide
const IconMap = {
  'headset': <Headset className="w-8 h-8" />,
  'shopping-cart': <ShoppingCart className="w-8 h-8" />,
  'wallet': <Wallet className="w-8 h-8" />
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" }
  })
};

export default function ContactCard() {
  // Pegamos a lista de canais do JSON
  const channels = contactsDataJson.channels;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 m-0 p-0">
      {channels.map((channel, index) => (
        <motion.li 
          key={channel.title}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="list-none flex flex-col group relative bg-white border border-gray-100 rounded-[24px] p-6 sm:p-8 transition-shadow duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgb(238,29,35,0.12)]"
        >
          {channel.primary && (
             <div className="absolute inset-0 rounded-[24px] border-2 border-[#EE1D23]/20 animate-pulse pointer-events-none" />
          )}

          <div className="flex items-start justify-between mb-6 relative z-10">
            <motion.div 
              whileHover={{ rotate: 10 }}
              className="p-3.5 rounded-2xl bg-[#EE1D23]/10 text-[#EE1D23] shrink-0"
            >
              {/* Aqui usamos o mapa para mostrar o ícone correto */}
              {IconMap[channel.iconName as keyof typeof IconMap] || <Phone className="w-8 h-8" />}
            </motion.div>
            
            {channel.primary && (
              <span className="bg-[#EE1D23] text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg">
                Urgente
              </span>
            )}
          </div>

          <div className="mb-6 relative z-10">
            <h3 className="text-xl font-black text-gray-900 tracking-tight italic uppercase">{channel.title}</h3>
          </div>

          <ul className="space-y-4 mb-8 m-0 p-0 relative z-10">
            {channel.hours.map((h, i) => (
              <li key={i} className="flex items-start gap-3 list-none group/item">
                <Clock className="w-5 h-5 mt-0.5 text-[#EE1D23] transition-transform group-hover/item:scale-110" />
                <div>
                  <p className="text-xs font-black text-gray-800 uppercase tracking-tight">{h.day}</p>
                  <p className="text-sm text-gray-500 font-medium">{h.time}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-4 relative z-10">
            <div className="flex items-center gap-3 text-gray-700 px-2 font-black italic">
              <Phone className="w-5 h-5 text-[#EE1D23]" />
              <span className="text-lg">{channel.phone}</span>
            </div>

            <motion.a 
              href={channel.link}
              target="_blank"
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-black uppercase text-xs transition-all bg-[#0B1120] text-white hover:bg-[#EE1D23] shadow-lg"
            >
              <MessageCircle size={18} />
              Entre em contato
            </motion.a>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}