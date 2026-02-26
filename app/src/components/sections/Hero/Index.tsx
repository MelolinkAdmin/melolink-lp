export default function Hero() {
  return (
    <section id="inicio" className="relative h-[60vh] md:h-[80vh] pt-20 bg-black flex flex-col justify-center items-center overflow-hidden mb-10 md:mb-20">
      
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        {/* Vídeo Vertical para Celulares (telas menores que 768px) */}
        <source 
          src="/videoverticalsite.mp4" 
          type="video/mp4" 
          media="(max-width: 767px)" 
        />
        
        {/* Vídeo Horizontal para Desktop (telas de 768px ou mais) */}
        <source 
          src="/site.mp4" 
          type="video/mp4" 
          media="(min-width: 768px)" 
        />
        
        Seu navegador não suporta vídeos.
      </video>

      {/* Camada de Detalhes Neon */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        
        {/* 1. Brilho nas quinas para dar profundidade */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#FF0033] rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FF0033] rounded-full blur-[120px] opacity-40"></div>

        {/* 2. Linha de "Energia" na base para separar da próxima seção */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FF0033] shadow-[0_0_20px_2px_#FF0033] opacity-80"></div>
      </div>

    </section>
  );
}