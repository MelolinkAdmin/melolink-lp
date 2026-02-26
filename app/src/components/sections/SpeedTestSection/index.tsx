import React from 'react';

export function SpeedTestSection() {
  const speedTestUrl = "https://melolink.speedtestcustom.com/"; 

  return (
    <section id="teste-de-velocidade" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        
        {/* Cabeçalho da Sessão */}
        <div className="mb-10">
    
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tighter">
            Confira a velocidade da sua  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-[#990000]">
                    conexão
                  </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Faça o teste agora e comprove a estabilidade, baixa latência e a verdadeira velocidade da fibra óptica da MeloLink.
          </p>
        </div>

        {/* Container do Iframe (Aspect Ratio 16:9 para responsividade) */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl shadow-gray-200 border border-gray-100 bg-white aspect-[4/3] md:aspect-video">
          
          {/* Skeleton/Loader de fundo enquanto o iframe carrega */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 -z-10">
            <span className="animate-pulse text-gray-400 font-medium">Carregando teste de velocidade...</span>
          </div>

          <iframe 
            src={speedTestUrl}
            title="Teste de Velocidade MeloLink"
            className="absolute top-0 left-0 w-full h-full border-none"
            allow="geolocation" // Permite que o teste encontre o servidor mais próximo
            loading="lazy" // Otimiza a performance da página (não carrega até o usuário rolar até aqui)
          />
        </div>

        <p className="text-xs text-gray-400 mt-6">
          Para resultados mais precisos, feche outros downloads, conecte-se via cabo de rede (RJ45) e pause serviços de streaming durante o teste.
        </p>

      </div>
    </section>
  );
}