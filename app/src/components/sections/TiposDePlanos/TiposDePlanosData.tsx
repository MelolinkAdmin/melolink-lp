import {
  Home, 
  Store,
  Building2, 
  LucideIcon } from 'lucide-react';

export interface TipoPlano {
  id: number;
  title: string;
  description: string;
  iconSlug: string;
}

export const IconMap: Record<string, LucideIcon> = {
  home: Home,
  store: Store,
  building: Building2,
};

export const TIPOS_PLANOS: TipoPlano[] = [
  {
    id: 1,
    title: "PLANOS RESIDENCIAIS",
    description: "Nossos planos vão de acordo com a sua necessidade. Você não precisa de linha telefônica e não paga excedentes!",
    iconSlug: "home",
  },
  {
    id: 2,
    title: "PLANOS COMERCIAIS",
    description: "Não importa o tamanho do seu comércio, o importante é ganhar tempo e agilidade para conquistar ainda mais negócios.",
    iconSlug: "store",
  },
  {
    id: 3,
    title: "PROJETOS ESPECIAIS",
    description: "Seja qual for a sua demanda, podemos te ajudar trazendo a conexão fibra óptica para o seu projeto.",
    iconSlug: "building",
  },
];  