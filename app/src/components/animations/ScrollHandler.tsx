'use client';

import { useEffect } from 'react';

export default function ScrollHandler() {
  useEffect(() => {
    const path = window.location.pathname;
    const sectionMap: Record<string, string> = {
      '/planos': 'planos',
      '/para-empresas': 'para-empresas',
      '/sobre': 'sobre-nos',
      '/contato': 'fale-conosco',
    };

    const targetId = sectionMap[path];

    if (targetId) {
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 800);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  return null; 
}