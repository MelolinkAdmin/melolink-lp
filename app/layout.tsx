import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from '@next/third-parties/google'

import Navbar from './src/components/sections/Navbar/Index';

const Footer = dynamic(() => import('./src/components/sections/Footer/Index'));
const WhatsAppButton = dynamic(() => import('./src/components/ui/WhatsAppButton').then((mod) => mod.WhatsAppButton));

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Melolink – Dê um UP na sua conexão",
  description: "Conecte-se com a ultravelocidade da Melolink em Cubatão. Internet fibra óptica estável e moderna para sua casa ou empresa. Conheça nossos planos!",
  metadataBase: new URL('https://www.melolink.com.br'),
  alternates: {
    canonical: 'https://www.melolink.com.br',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: "Melolink – A internet que você merece",
    description: "Fibra óptica de alta performance em Cubatão.",
    url: 'https://www.melolink.com.br',
    siteName: 'Melolink',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "name": "Melolink",
                  "url": "https://www.melolink.com.br",
                },
                {
                  "@type": "SiteNavigationElement",
                  "hasPart": [
                    { "@type": "WebPage", "name": "Área do Assinante", "url": "https://www.melolink.com.br/assinante" },
                    { "@type": "WebPage", "name": "Planos de Internet", "url": "https://www.melolink.com.br/planos" },
                    { "@type": "WebPage", "name": "Para Empresas", "url": "https://www.melolink.com.br/para-empresas" },
                    { "@type": "WebPage", "name": "Sobre Nós", "url": "https://www.melolink.com.br/sobre" },
                    { "@type": "WebPage", "name": "Fale Conosco", "url": "https://www.melolink.com.br/contato" }
                  ]
                }
              ]
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
        <WhatsAppButton />
        <GoogleAnalytics gaId="G-5C53JBDXZ4" />
      </body>
    </html>
  );
}