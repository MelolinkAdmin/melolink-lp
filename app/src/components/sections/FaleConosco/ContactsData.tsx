import { 
  Headset, 
  ShoppingCart, 
  Wallet, 
} from 'lucide-react';

export const contactsData = [
    {
      title: "Suporte",
      icon: <Headset className="w-8 h-8" />,
      phone: "(13) 99637-1382",
      // Mensagem: Olá! Vim do site e preciso de suporte técnico.
      link: "https://wa.me/5513996371382?text=Olá!%20Vim%20do%20site%20e%20preciso%20de%20suporte%20técnico.",
      hours: [
        { day: "Segunda a Sábado", time: "08h30 até 17h30" }
      ],
      primary: false
    },
    {
      title: "Comercial",
      icon: <ShoppingCart className="w-8 h-8" />,
      phone: "(13) 3372-1548",
      // Mensagem: Olá! Vim do site e gostaria de conhecer os planos.
      link: "https://wa.me/551333721548?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20conhecer%20os%20planos.",
      hours: [
        { day: "Segunda à Sexta", time: "08h30 até 17h30" },
        { day: "Sábado", time: "08h30 até 12h30" }
      ],
      primary: false
    },
    {
      title: "Financeiro",
      icon: <Wallet className="w-8 h-8" />,
      phone: "(13) 99641-3376",
      // Mensagem: Olá! Vim do site e gostaria de falar com o financeiro.
      link: "https://wa.me/5513996413376?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20falar%20com%20o%20financeiro.",
      hours: [
        { day: "Segunda à Sexta", time: "08h30 até 17h30" },
        { day: "Sábado", time: "08h30 até 12h30" }
      ],
      primary: false
    }
  ];