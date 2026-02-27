"use client";

import { Star, ArrowRight } from 'lucide-react';
import { Reviews } from './ReviewsData';

export default function ReviewsSection() {
    // Quadruplicamos para garantir preenchimento em telas gigantes
    const scrollReviews = [...Reviews, ...Reviews, ...Reviews, ...Reviews];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 mb-16 text-center">
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full mb-8 border border-red-100 animate-bounce">
                    <Star fill="currentColor" size={14} />
                    <span className="text-xs font-bold tracking-widest uppercase">Feedback dos Clientes</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black text-[#0a0a14] tracking-tighter mb-6">
                    O que dizem sobre a <span className="text-red-600">MeloLink</span>
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                    Nossa maior satisfação é conectar você com qualidade e velocidade. Confira os depoimentos verificados no Google.
                </p>
            </div>

            {/* Container com justify-center para evitar o bug da esquerda em telas 4K */}
            <div className="relative flex overflow-x-hidden justify-center group">
                {/* Máscaras laterais */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

                {/* A MÁGICA ESTÁ AQUI:
                   Usamos uma classe arbitrária para definir a animação sem precisar de config.
                   O 'translateX(-50%)' é o segredo do loop infinito.
                */}
                <div className="flex gap-8 py-4 w-max animate-[marquee_50s_linear_infinite] hover:[animation-play-state:paused]">
                    {scrollReviews.map((review, index) => (
                        <div
                            key={`${review.id}-${index}`}
                            className="w-[300px] md:w-[450px] flex-shrink-0 bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm transition-all duration-500 flex flex-col justify-between hover:scale-[1.02] hover:border-red-400 hover:shadow-[0_0_30px_rgba(255,0,0,0.15)] cursor-default"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">
                                            <svg width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <div className="flex text-yellow-500">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star key={i} fill="currentColor" size={14} />
                                                ))}
                                            </div>
                                            <span className="text-[10px] uppercase font-bold text-gray-400">Avaliação Verificada</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium italic text-left">
                                    "{review.comment}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                                <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                                    {review.initial}
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-[#0a0a14] leading-tight">{review.name}</h4>
                                    <p className="text-xs text-gray-400 font-medium">{review.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-16">
                <a 
                    href="https://search.google.com/local/writereview?placeid=SEU_ID_DO_GOOGLE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 bg-[#0a0a14] text-white px-10 py-4 rounded-full font-bold hover:bg-red-600 transition-all duration-300 shadow-2xl hover:shadow-red-500/40"
                >
                    Deixar minha avaliação 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </section>
    );
}