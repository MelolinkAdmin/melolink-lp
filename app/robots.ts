import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/wp-content/', 
        '/elementor/',
        '/*?*', // Bloqueia URLs com parâmetros de busca antigos
      ],
    },
    sitemap: 'https://www.melolink.com.br/sitemap.xml',
  }
}