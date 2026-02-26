import { REDES_SOCIAIS } from '../constants/Social';

interface SocialLinksProps {
  className?: string;
  size?: number; 
  iconSize?: number; 
  showTooltip?: boolean;
}

export const SocialLinks = ({ 
  className = "", 
  size = 48, 
  iconSize,
  showTooltip = true 
}: SocialLinksProps) => {
  
  const finalIconSize = iconSize || Math.round(size * 0.42);

  return (
    <div className={`flex items-center justify-center gap-2 w-fit ${className}`}>
      {REDES_SOCIAIS.map((social) => (
        <div key={social.label} className="relative flex flex-col items-center group/social">
          
          {/* Tooltip (Balão) - Visível apenas no Desktop via Hover */}
          {showTooltip && (
            <div className="absolute bottom-full gap-6 mb-3 flex flex-col items-center opacity-0 translate-y-2 group-hover/social:opacity-100 group-hover/social:translate-y-0 transition-all duration-300 pointer-events-none z-[110] hidden lg:flex">
              <div className="bg-[#1A1F2C] text-white text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap uppercase tracking-wider">
                {social.label}
              </div>
            </div>
          )}

          <a
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="relative flex items-center justify-center rounded-full bg-gray-100 transition-all duration-300 hover:scale-110 overflow-hidden"
            style={{ width: size, height: size }}
          >
            {/* Background Colorido no Hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover/social:opacity-100 transition-all duration-300"
              style={{ backgroundColor: social.color }}
            />

            {/* Ícone SVG */}
            <svg
              viewBox="0 0 24 24"
              className="relative z-10 transition-colors duration-300 fill-[#1A1F2C] group-hover/social:fill-white"
              style={{ width: finalIconSize, height: finalIconSize }}
            >
              <path d={social.path} />
            </svg>
          </a>

          {/* Nome fixo abaixo - Apenas Mobile */}
          <span className="mt-2 text-[10px] font-bold text-gray-500 uppercase tracking-tighter block lg:hidden">
            {social.label}
          </span>
        </div>
      ))}
    </div>
  );
};