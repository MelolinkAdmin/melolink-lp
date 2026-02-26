"use client"; // Necessário para detectar o tamanho da tela do usuário

import { useEffect, useState } from "react";

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState("");

  const videoVertical = "https://ccyqgy0z7ev3otst.public.blob.vercel-storage.com/videoverticalsite.mp4";
  const videoHorizontal = "https://ccyqgy0z7ev3otst.public.blob.vercel-storage.com/site.mp4";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVideoSrc(videoVertical);
      } else {
        setVideoSrc(videoHorizontal);
      }
    };

    // Define o vídeo inicial
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="inicio" className="relative h-[60vh] md:h-[80vh] pt-20 bg-black flex flex-col justify-center items-center overflow-hidden mb-10 md:mb-20">
      
      {/* Só renderiza o vídeo quando o Src estiver definido para evitar erro de hidratação */}
      {videoSrc && (
        <video 
          key={videoSrc} // O 'key' força o vídeo a recarregar se o usuário girar o celular
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
        {/* 1. Brilho nas quinas */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#FF0033] rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FF0033] rounded-full blur-[120px] opacity-40"></div>

        {/* 2. Linha de "Energia" na base */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FF0033] shadow-[0_0_20px_2px_#FF0033] opacity-80"></div>
      </div>
    </section>
  );
}