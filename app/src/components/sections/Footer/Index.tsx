"use client";

import React from 'react';
import Link from "next/link";
import { Logo } from "../../ui/Logo";
import { LogoAnatel } from "../../ui/LogoAnatel";
import { SocialLinks } from "../../ui/SociaisLinks";
import { MapPin, Mail, ExternalLink, Headset, ShoppingCart, Wallet, Phone } from "lucide-react";

// Importação do JSON de contatos
import contactsDataJson from "@/public/data/contatos.json";

// Mapeamento de ícones para os canais do JSON
const IconMap: Record<string, any> = {
    "headset": Headset,
    "shopping-cart": ShoppingCart,
    "wallet": Wallet,
    "default": Phone
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.includes('#')) {
            const id = href.split('#')[1];
            const element = document.getElementById(id);

            if (element) {
                e.preventDefault();
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-[#030000] text-white pt-16 md:pt-20 pb-10 relative overflow-hidden antialiased">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF0000] via-red-500 to-[#8C001C]" aria-hidden="true" />

            <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
                    
                    {/* Brand */}
                    <div className="md:col-span-1 space-y-6">
                        <Link
                            href="/"
                            onClick={(e) => handleScroll(e, "/")}
                            className="inline-block leading-none select-none cursor-pointer hover:opacity-80 transition-opacity"
                        >
                            <Logo variant="white" height={70} />
                        </Link>
                        
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Conectando você ao mundo com a velocidade da luz. Provedor 100% fibra óptica.
                        </p>
                        
                        <div className="flex justify-start">
                            <SocialLinks size={28} showTooltip={false} className="gap-2" />
                        </div>
                    </div>

                    {/* Institucional */}
                    <nav aria-label="Links Institucionais">
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6 border-l-4 border-[#FF0000] pl-3">Institucional</h4>
                        <ul className="space-y-3 text-sm text-gray-400 m-0 p-0">
                            <li className="list-none"><Link href="/" onClick={(e) => handleScroll(e, "/")} className="hover:text-[#FF0000] transition-colors">Início</Link></li>
                            <li className="list-none"><Link href="/#planos" onClick={(e) => handleScroll(e, "/#planos")} className="hover:text-[#FF0000] transition-colors">Planos</Link></li>
                            <li className="list-none"><Link href="/#sobre-nos" onClick={(e) => handleScroll(e, "/#sobre-nos")} className="hover:text-[#FF0000] transition-colors">Sobre Nós</Link></li>
                            <li className="list-none"><Link href="/politica-de-privacidade" className="hover:text-[#FF0000] transition-colors">Privacidade</Link></li>
                            <li className="list-none">
                                <a href="/docs/contrato-melolink.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors inline-flex items-center gap-2">
                                    Contratos <ExternalLink size={12} />
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Canais de Atendimento Dinâmicos */}
                    <div className="md:col-span-1">
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6 border-l-4 border-[#FF0000] pl-3">Atendimento</h4>
                        <ul className="space-y-4 text-sm text-gray-400 m-0 p-0">
                            {contactsDataJson.channels.map((channel, index) => {
                                const Icon = IconMap[channel.iconName] || IconMap.default;
                                return (
                                    <li key={index} className="list-none">
                                        <a 
                                            href={channel.link.replace('wa.me', 'api.whatsapp.com/send')} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center gap-3 hover:text-[#FF0000] transition-colors group"
                                        >
                                            <Icon size={18} className="text-[#FF0000] group-hover:scale-110 transition-transform shrink-0" />
                                            <div className="flex flex-col">
                                                <span className="text-[10px] uppercase font-bold text-gray-500">{channel.title}</span>
                                                <span>{channel.phone}</span>
                                            </div>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Localização e E-mail */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6 border-l-4 border-[#FF0000] pl-3">Onde Estamos</h4>
                        <ul className="space-y-4 text-sm text-gray-400 m-0 p-0">
                            <li className="list-none">
                                <a href="https://maps.app.goo.gl/..." target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-[#FF0000] transition-colors group">
                                    <MapPin size={18} className="text-[#FF0000] shrink-0" />
                                    <span>R. Quinze de Novembro, 131 - Vila Nova, Cubatão - SP</span>
                                </a>
                            </li>
                            <li className="list-none">
                                <a href="mailto:melolinkinternet@gmail.com" className="flex items-center gap-3 hover:text-[#FF0000] transition-colors group">
                                    <Mail size={18} className="text-[#FF0000] shrink-0" />
                                    <span>melolinkinternet@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Banner Anatel */}
                <div className="border-t border-gray-800 pt-8 pb-8">
                    <div className="bg-[#0B0E14] border border-gray-800 rounded-xl py-4 px-6 flex flex-col md:flex-row justify-center items-center gap-4 text-center">
                        <span className="text-gray-200 text-sm font-bold">Provedor licenciado pela</span>
                        <LogoAnatel className="h-7 w-auto opacity-90" />
                        <span className="hidden md:inline text-gray-700">|</span>
                        <p className="text-gray-400 text-xs font-medium">Ato nº 9463 de 09/06/2017</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-xs text-gray-600 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>Copyright © {currentYear} MELOLINK INTERNET FIBRA OPTICA LTDA</p>
                    <p>Desenvolvido por <a href="https://thiagomilitao.vercel.app/" className="text-gray-400 hover:text-white font-semibold">Thiago Militão</a></p>
                </div>
            </div>
        </footer>
    );
}