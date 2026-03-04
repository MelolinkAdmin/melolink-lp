"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState("");

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
      
      {/* H1 Estratégico para SEO: 
          Invisível visualmente, mas lido por motores de busca e leitores de tela.
      */}
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
          Seu navegador não suporta vídeos.
        </video>
      )}

      {/* Camada de Detalhes Neon */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#FF0033] rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FF0033] rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FF0033] shadow-[0_0_20px_2px_#FF0033] opacity-80"></div>
      </div>
    </section>
  );
}