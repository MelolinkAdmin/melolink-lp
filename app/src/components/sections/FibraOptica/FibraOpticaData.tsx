import { Zap, Gamepad2, Network, LucideIcon } from 'lucide-react';

export interface TechFeature {
  id: number;
  title: string;
  desc: string;
  Icon: LucideIcon;
  colorClass: string;
}

export const FIBRA_FEATURES: TechFeature[] = [
  {
    id: 1,
    title: "Velocidade da Luz",
    desc: "Transmissão de dados sem interferências eletromagnéticas para downloads instantâneos.",
    Icon: Zap,
    colorClass: "bg-blue-50 text-blue-600",
  },
  {
    id: 2,
    title: "Latência Zero",
    desc: "Ideal para jogos online competitivos e streaming em 4K/8K sem travamentos.",
    Icon: Gamepad2,
    colorClass: "bg-green-50 text-green-600",
  },
  {
    id: 3,
    title: "Estabilidade Total",
    desc: "Conexão que não cai, mesmo com múltiplos dispositivos conectados simultaneamente.",
    Icon: Network,
    colorClass: "bg-purple-50 text-purple-600",
  },
];