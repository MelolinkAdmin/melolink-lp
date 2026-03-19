import { FileText, ShoppingCart, Headset, Share2 } from 'lucide-react';
// Importamos o JSON para pegar os links dinâmicos
import contactsDataJson from "@/public/data/contatos.json";

export const IconMap: Record<string, any> = {
  fatura: FileText,
  contratar: ShoppingCart, // Alterado de 'teste' para 'contratar'
  suporte: Headset,
  redes: Share2,
  default: FileText
};

// Buscamos os links dinamicamente no JSON
const suporteChannel = contactsDataJson.channels.find(
  (c: any) => c.title.toLowerCase() === "suporte"
);

const comercialChannel = contactsDataJson.channels.find(
  (c: any) => c.title.toLowerCase() === "comercial"
);

const SUPORTE_URL = suporteChannel?.link || "https://wa.me/5513996371382?text=Olá!";
const COMERCIAL_URL = comercialChannel?.link || "https://wa.me/551333721548?text=Olá!";

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
    title: "Assinar Agora", 
    description: "Planos de Internet",
    iconSlug: "contratar",
    href: COMERCIAL_URL 
  },
  {
    id: 3,
    title: "Precisa de ajuda?",
    description: "Fale com o suporte",
    iconSlug: "suporte",
    href: SUPORTE_URL 
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