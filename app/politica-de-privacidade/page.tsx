"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/app/src/components/ui/Button";
import { ArrowLeft, List, ArrowUp } from "lucide-react";
import { politicaConteudo } from "../src/components/constants/Politica";

export default function PoliticaDePrivacidade() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitora o scroll para mostrar/esconder o botão de voltar ao topo
  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="flex-grow bg-white text-slate-900 scroll-smooth pt-5 relative">
      
      {/* 1. Botão Flutuante Lateral (Apenas Desktop) */}
      <div className="hidden xl:block fixed left-10 top-1/2 -translate-y-1/2 z-50">
        <Link href="/">
          <button className="flex flex-col items-center gap-2 text-slate-400 hover:text-[#E60000] transition-all group cursor-pointer">
            <div className="p-3 rounded-full border border-slate-200 group-hover:border-[#E60000] bg-white shadow-sm transition-all">
              <ArrowLeft size={20} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest vertical-text">Sair da página</span>
          </button>
        </Link>
      </div>

      {/* 2. Botão Voltar ao Topo (Mobile e Desktop) */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#E60000] text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={24} />
      </button>

      {/* Header com Link de Saída Rápido */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4 text-slate-950">
              POLÍTICA DE <span className="text-[#E60000]">PRIVACIDADE</span>
            </h1>
            <p className="text-slate-500 text-sm md:text-base">
              Última atualização: <time dateTime="2023-01-02" className="text-slate-700 font-semibold">{politicaConteudo.ultimaAtualizacao}</time>
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Introdução */}
        <div className="border-l-4 border-slate-200 pl-6 mb-12 text-slate-700 leading-relaxed italic">
          {politicaConteudo.introducao.map((paragrafo, index) => (
            <p key={index} className="mb-4 last:mb-0 text-base md:text-lg">
              {paragrafo}
            </p>
          ))}
        </div>

        {/* Sumário */}
        <nav className="mb-16 p-6 md:p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold uppercase text-xs tracking-[0.2em]">
            <List size={16} className="text-[#E60000]" />
            <span>Sumário do Documento</span>
          </div>
          
          <div className="columns-1 md:columns-2 gap-8 space-y-3">
            {politicaConteudo.secoes.map((secao) => (
              <div key={secao.id} className="break-inside-avoid">
                <a 
                  href={`#secao-${secao.id}`} 
                  onClick={(e) => handleScroll(e, `secao-${secao.id}`)}
                  className="group flex items-start gap-2 py-1 text-sm text-slate-600 hover:text-[#E60000] transition-colors leading-snug"
                >
                  <span className="font-bold text-[#E60000]/40 group-hover:text-[#E60000] tabular-nums">
                    {String(secao.id).padStart(2, '0')}.
                  </span>
                  <span className="capitalize">{secao.titulo.toLowerCase()}</span>
                </a>
              </div>
            ))}
          </div>
        </nav>

        {/* Conteúdo */}
        <article className="prose prose-slate max-w-none prose-p:text-slate-600 prose-headings:uppercase">
          <div className="space-y-20">
            {politicaConteudo.secoes.map((secao) => (
              <section 
                key={secao.id} 
                id={`secao-${secao.id}`} 
                className="scroll-mt-28"
              >
                <div className="flex items-center gap-4 mb-8">
                   <span className="flex-none flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 text-white text-sm font-bold italic">
                    {secao.id}
                  </span>
                  <h2 className="text-xl md:text-2xl font-black italic text-slate-950 m-0">
                    {secao.titulo}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {secao.conteudo.map((paragrafo, idx) => (
                    <p key={idx} className="text-base md:text-[1.05rem] leading-relaxed">
                      {paragrafo}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Rodapé Final */}
          <footer className="mt-32 pt-12 border-t border-slate-100 flex flex-col items-center text-center">
            <p className="text-slate-400 text-[10px] mb-8 uppercase tracking-[0.3em] font-bold">
              Certificado de Transparência MeloLink
            </p>
            <div className="flex gap-4">
               <Link href="/" passHref>
                <Button variant="red" className="font-bold italic uppercase tracking-wider">
                  Voltar para o Início
                </Button>
              </Link>
            </div>
          </footer>
        </article>
      </section>


    </main>
  );
}