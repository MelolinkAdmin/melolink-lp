import planosJson from '@/public/data/planos.json';

export interface Plan {
  id: string;
  title: string;
  speed: string;
  unit: string;
  price: string;
  benefits: string[];
  iconClass: string;
  theme: 'light' | 'dark';
  color: 'indigo' | 'red' | 'purple';
  isBestSeller?: boolean;
}

export const PLANS_DATA = planosJson.plans as Plan[];

