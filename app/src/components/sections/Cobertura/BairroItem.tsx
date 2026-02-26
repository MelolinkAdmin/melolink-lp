import { memo } from 'react';
import { MapPin } from 'lucide-react';

const BairroItem = memo(({ nome }: { nome: string }) => (
  <div className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300 group cursor-default whitespace-nowrap list-none">
    <MapPin size={14} className="text-yellow-300 group-hover:scale-125 transition-transform shrink-0" />
    <span className="border-b border-transparent group-hover:border-white/30 transition-colors">
      {nome}
    </span>
  </div>
));

export default BairroItem;