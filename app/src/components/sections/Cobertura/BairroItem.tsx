import { memo } from 'react';
import { MapPin } from 'lucide-react';

const BairroItem = memo(({ nome }: { nome: string }) => (
  // Mantemos o relative aqui para o absolute funcionar dentro dele
  <div className="relative flex items-start lg:items-center gap-2 group cursor-default h-4 py-0.5 lg:py-0">
    
    {/* Ícone: shrink-0 e z-20 para ficar sempre visível */}
    <MapPin size={13} className="text-yellow-300 mt-1 lg:mt-0 shrink-0 z-20" />
    
    {/* 1. TEXTO MOBILE (Leitura direta, sem efeito) */}
    <span className="lg:hidden text-white/90 leading-tight break-words">
      {nome}
    </span>

    {/* 2. TEXTO DESKTOP (Estado Normal: com dots, some no hover) */}
    <span className="hidden lg:block whitespace-nowrap overflow-hidden text-ellipsis border-b border-transparent group-hover:opacity-0 transition-opacity duration-200">
      {nome}
    </span>

    {/* 3. TEXTO DESKTOP (Efeito Expandido no Hover) */}
    <span className="
      /* Escondido por padrão */
      hidden lg:block absolute opacity-0 scale-95
      /* Aparece no hover da div pai */
      group-hover:opacity-100 group-hover:scale-100
      /* Posicionamento: começa onde o texto normal começa */
      left-5 top-1/2 -translate-y-1/2
      /* Estilo de Texto */
      whitespace-nowrap font-black text-white
      /* SOLUÇÃO DO PROBLEMA: Fundo sólido e Z-Index */
      bg-[#FF0000] /* Vermelho sólido idêntico ao fundo */
      px-2 py-0.5 /* Espaçamento interno para o fundo não colar na letra */
      z-30 /* Mais alto que tudo na lista */
      /* Efeito Visual para destacar */
      rounded /* Canto levemente arredondado */
      shadow-[5px_5px_15px_rgba(0,0,0,0.3)] /* Sombra para dar profundidade */
      /* Animação suave */
      transition-all duration-300 ease-out origin-left
      pointer-events-none /* Impede que o hover pisque se o mouse mover rápido */
    ">
      {nome}
    </span>
  </div>
));
export default BairroItem;