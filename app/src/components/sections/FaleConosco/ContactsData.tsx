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
      link: "https://wa.me/5513996371382",
      hours: [
        { day: "Segunda a Sábado", time: "08h30 até 17h30" }
      ],
      primary: false
    },
    {
      title: "Comercial",
      icon: <ShoppingCart className="w-8 h-8" />,
      phone: "(13) 3372-1548",
      link: "https://wa.me/551333721548",
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
      link: "https://wa.me/5513996351382",
      hours: [
        { day: "Segunda à Sexta", time: "08h30 até 17h30" },
        { day: "Sábado", time: "08h30 até 12h30" }
      ],
      primary: false
    }
  ];
