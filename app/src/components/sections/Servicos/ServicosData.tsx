// File 3: ServicosData.ts
import { FileText, Gauge, Headset, Share2 } from 'lucide-react';

export const IconMap: Record<string, any> = {
  fatura: FileText,
  teste: Gauge,
  suporte: Headset,
  redes: Share2,
  default: FileText
};

export const SERVICOS_DATA = [
  { id: 1, title: "2ª via de fatura", description: "Só retirar aqui!", iconSlug: "fatura", href: "https://melolink.portalinternet.com.br/radiusnet/cda/login.php" },
  {
    id: 2,
    title: "Teste de velocidade",
    description: "Faça o teste agora",
    iconSlug: "teste",
    href: "#teste-de-velocidade"
  },
  {
    id: 3,
    title: "Precisa de ajuda?",
    description: "Fale com o suporte",
    iconSlug: "suporte",
    href: "https://wa.me/5513996371382?text=Olá!%20Vim%20do%20site."
  },
  { id: 4, title: "Nossas redes", description: "Siga a Melolink", iconSlug: "redes", href: "#", isSocial: true }
];