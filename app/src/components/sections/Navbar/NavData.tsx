export interface NavLinkData {
  name: string;
  href: string;
}

export const NAV_LINKS: NavLinkData[] = [
  { name: "Início", href: "/" }, // Vai direto pro topo da home
  { name: "Planos", href: "/#planos" },
  { name: "Para Empresas", href: "/#para-empresas" },
  { name: "Sobre Nós", href: "/#sobre-nos" },
  { name: "Fale Conosco", href: "/#fale-conosco" },
];