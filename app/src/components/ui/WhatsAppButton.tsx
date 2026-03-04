"use client";

import { useEffect, useState } from "react";
// Importação do JSON de contatos
import contactsDataJson from "@/public/data/contatos.json";

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState("");

  // Lógica para pegar o link do WhatsApp dinamicamente
  // Busca o canal marcado como 'primary' ou pega o primeiro da lista
  const primaryChannel = contactsDataJson.channels.find(c => c.primary) || contactsDataJson.channels[0];
  
  // Tratativa para o link (garantindo o domínio oficial do WhatsApp)
  const whatsappLink = primaryChannel.link.replace('wa.me', 'api.whatsapp.com/send');

  const videoVertical = "https://ccyqgy0z7ev3otst.public.blob.vercel-storage.com/videoverticalsite.mp4";
  const videoHorizontal = "https://ccyqgy0z7ev3otst.public.blob.vercel-storage.com/site.mp4";

  useEffect(() => {
    const handleResize = () => {
      setVideoSrc(window.innerWidth < 768 ? videoVertical : videoHorizontal);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="inicio" className="relative h-[60vh] md:h-[80vh] pt-20 bg-black flex flex-col justify-center items-center overflow-hidden mb-10 md:mb-20">
      
      {/* H1 Acessível para SEO */}
      <h1 className="sr-only">
        MeloLink Internet Fibra Óptica - Conectividade e Ultra Velocidade em Cubatão e Região
      </h1>

      {videoSrc && (
        <video 
          key={videoSrc}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 z-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Botão Flutuante ou Call to Action Dinâmico (Exemplo) */}
      <div className="relative z-[20] flex flex-col items-center">
         <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF0033] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,0,51,0.4)]"
        >
          ASSINE AGORA: {primaryChannel.phone}
        </a>
      </div>

      {/* Camada de Detalhes Neon */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#FF0033] rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FF0033] rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FF0033] shadow-[0_0_20px_2px_#FF0033] opacity-80"></div>
      </div>
    </section>
  );
}