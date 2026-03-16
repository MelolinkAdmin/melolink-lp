export default function sitemap() {
  const baseUrl = 'https://melolink.com.br';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0, // 1. Link Principal
    },
    {
      url: `${baseUrl}/assinante`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9, // 2. Área do Assinante (Maior peso após a home)
    },
    {
      url: `${baseUrl}/planos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8, // 3. Planos
    },
    {
      url: `${baseUrl}/para-empresas`,
      priority: 0.75, // 4. Para Empresas (fica entre Planos e Sobre)
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7, // 4. Sobre
    },
    {
      url: `${baseUrl}/contato`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6, // 5. Contato
    },
    {
      url: `${baseUrl}/politica-de-privacidade`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3, // 6. Política de Privacidade
    },
  ]
}