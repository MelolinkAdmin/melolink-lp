  import { MapPin, ExternalLink } from 'lucide-react';

  const GOOGLE_MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=R.+Quinze+de+Novembro,+131+-+Vila+Nova,+Cubatão+-+SP";

  export default function LocalizacaoInfo() {
    return (
      <div className="mt-12 md:mt-20 bg-[#0B0E24] rounded-[2rem] md:rounded-[50px] p-6 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group/loc">
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left w-full">
              <div className="bg-[#EE1D23] p-4 md:p-6 rounded-[25px] md:rounded-[35px] shadow-2xl transition-transform duration-500 group-hover/loc:scale-110 group-hover/loc:rotate-3 shrink-0" aria-hidden="true">
                  <MapPin size={32} className="text-white md:w-10 md:h-10" />
              </div>
              <div>
                  <h4 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter mb-2">Visite nossa unidade física</h4>
                  <p className="text-zinc-400 text-xs md:text-sm max-w-sm font-medium leading-relaxed mx-auto md:mx-0">
                      R. Quinze de Novembro, 131 - Vila Nova, Cubatão - SP. <br/>
                      <span className="text-[#EE1D23] font-bold">Venha tomar um café conosco!</span>
                  </p>
              </div>
          </div>
          
          <a 
            href={GOOGLE_MAPS_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative z-10 w-full md:w-auto bg-white text-zinc-900 px-8 py-4 rounded-2xl font-black uppercase text-sm hover:bg-[#EE1D23] hover:text-white transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 group/btn shrink-0"
          >
              Como Chegar
              <ExternalLink size={18} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" aria-hidden="true" />
          </a>
        </div>
    )
  }