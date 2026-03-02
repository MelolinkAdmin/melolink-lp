"use client";

import React from 'react';
import Link from "next/link";
import { Logo } from "../../ui/Logo";
import { LogoAnatel } from "../../ui/LogoAnatel";
import { SocialLinks } from "../../ui/SociaisLinks";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    // Função para forçar o scroll mesmo se o hash já estiver na URL
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.includes('#')) {
            const id = href.split('#')[1];
            const element = document.getElementById(id);

            if (element) {
                e.preventDefault();
                // Ajuste o offset (80) se o scroll parar muito em cima do título
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else if (href === "/") {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="bg-[#030000] text-white pt-16 md:pt-20 pb-10 relative overflow-hidden antialiased">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF0000] via-red-500 to-[#8C001C]" aria-hidden="true" />

            <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
                    
                    {/* Brand */}
                    <div className="md:col-span-2 space-y-6">
                        <Link
                            href="/"
                            onClick={(e) => handleScroll(e, "/")}
                            className="inline-block leading-none select-none cursor-pointer hover:opacity-80 transition-opacity"
                        >
                            <Logo variant="white" height={80} />
                        </Link>
                        
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Conectando você ao mundo com a velocidade da luz. Provedor de internet 100% fibra óptica com tecnologia de ponta.
                        </p>
                        
                        <div className="flex justify-start">
                            <SocialLinks size={32} showTooltip={false} className="gap-2" />
                        </div>
                    </div>

                    {/* Quick Links Corrigidos */}
                    <nav aria-label="Links Institucionais">
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6 border-l-4 border-[#FF0000] pl-3">Institucional</h4>
                        <ul className="space-y-3 text-sm text-gray-400 m-0 p-0">
                            <li className="list-none">
                                <Link href="/" onClick={(e) => handleScroll(e, "/")} className="hover:text-[#FF0000] transition-colors">Início</Link>
                            </li>
                            <li className="list-none">
                                <Link href="/#planos" onClick={(e) => handleScroll(e, "/#planos")} className="hover:text-[#FF0000] transition-colors">Planos</Link>
                            </li>
                            <li className="list-none">
                                <Link href="/#sobre-nos" onClick={(e) => handleScroll(e, "/#sobre-nos")} className="hover:text-[#FF0000] transition-colors">Sobre Nós</Link>
                            </li>
                            <li className="list-none">
                                <Link href="/#fale-conosco" onClick={(e) => handleScroll(e, "/#fale-conosco")} className="hover:text-[#FF0000] transition-colors">Sobre Nós</Link>
                            </li>
                            <li className="list-none">
                                <Link href="/politica-de-privacidade" className="hover:text-[#FF0000] transition-colors">Política de privacidade</Link>
                            </li>
                            <li className="list-none">
                                <a href="/docs/contrato-melolink.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors inline-flex items-center gap-2">
                                    Contratos <ExternalLink size={12} />
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6 border-l-4 border-[#FF0000] pl-3">Contato</h4>
                        <ul className="space-y-4 text-sm text-gray-400 m-0 p-0">
                            <li className="list-none">
                                <a href="https://maps.app.goo.gl/exemplo" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-[#FF0000] transition-colors group">
                                    <MapPin size={18} className="text-[#FF0000] group-hover:scale-110 transition-transform shrink-0" aria-hidden="true" />
                                    <span>R. Quinze de Novembro, 131 - Vila Nova, Cubatão - SP</span>
                                </a>
                            </li>
                            <li className="list-none">
                                <a href="https://wa.me/551333721548" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#FF0000] transition-colors group">
                                    <Phone size={18} className="text-[#FF0000] group-hover:scale-110 transition-transform shrink-0" aria-hidden="true" />
                                    <span>(13) 3372-1548</span>
                                </a>
                            </li>
                            <li className="list-none">
                                <a href="mailto:melolinkinternet@gmail.com" className="flex items-center gap-3 hover:text-[#FF0000] transition-colors group">
                                    <Mail size={18} className="text-[#FF0000] group-hover:scale-110 transition-transform shrink-0" aria-hidden="true" />
                                    <span>melolinkinternet@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Anatel Banner */}
                <div className="border-t border-gray-800 pt-8 pb-8">
                    <div className="bg-[#0B0E14] border border-gray-800 rounded-xl overflow-hidden hover:border-[#FF0000]/30 transition-all group">
                        <div className="flex flex-col md:flex-row justify-center items-center md:items-baseline py-5 px-4 sm:px-6 gap-3 md:gap-4 text-center">
                            <span className="text-gray-200 text-sm md:text-lg font-bold">Provedor licenciado pela</span>
                            <div className="flex items-center justify-center md:translate-y-[4px]">
                                <LogoAnatel className="h-8 md:h-7 w-auto opacity-90 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
                                <span className="hidden md:inline text-gray-700 text-xl font-light" aria-hidden="true">|</span>
                                <p className="text-gray-400 text-xs md:text-sm font-medium">
                                    Ato nº <span className="text-gray-300">9463</span> de 09/06/2017
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-xs text-gray-600 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>Copyright © {currentYear} MELOLINK INTERNET FIBRA OPTICA LTDA - ME</p>
                    <p className="flex items-center gap-2 group">
                        Desenvolvido por
                        <a
                            href="https://thiagomilitao.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#FF0000] font-semibold transition-all duration-300 flex items-center gap-1"
                        >
                            Thiago Militão
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px]" aria-hidden="true">↗</span>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}