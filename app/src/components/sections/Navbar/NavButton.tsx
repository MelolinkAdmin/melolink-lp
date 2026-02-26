import React from 'react';

interface NavButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href: string; 
}

export const NavButton = ({ children, variant = "primary", href, className = "", ...props }: NavButtonProps) => {
  const styles = {
    primary: "bg-red-600 text-white border-2 border-transparent shadow-lg shadow-red-200 hover:bg-red-700 active:scale-95 justify-center",
    outline: "border-2 border-gray-800 text-gray-800 hover:bg-gray-50 hover:border-red-600 hover:text-red-600 justify-center",
  };

  return (
    <a 
      href={href}
      className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};