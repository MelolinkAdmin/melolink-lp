import { FileText, Gauge, Headset, Share2 } from 'lucide-react';
// Importamos o JSON para pegar o link do suporte
import contactsDataJson from "@/public/data/contatos.json";

export const IconMap: Record<string, any> = {
  fatura: FileText,
  teste: Gauge,
  suporte: Headset,
  redes: Share2,
  default: FileText
};

// Buscamos o link do suporte dinamicamente
const suporteChannel = contactsDataJson.channels.find(
  (c: any) => c.title.toLowerCase() === "suporte"
);

const SUPORTE_URL = suporteChannel?.link || "https://wa.me/5513996371382?text=Olá!";

export const SERVICOS_DATA = [
  { 
    id: 1, 
    title: "2ª via de fatura", 
    description: "Só retirar aqui!", 
    iconSlug: "fatura", 
    href: "https://melolink.portalinternet.com.br/radiusnet/cda/login.php" 
  },
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
    href: SUPORTE_URL // <--- Agora é dinâmico!
  },
  { 
    id: 4, 
    title: "Nossas redes", 
    description: "Siga a Melolink", 
    iconSlug: "redes", 
    href: "#", 
    isSocial: true 
  }
];