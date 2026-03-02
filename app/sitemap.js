export default function sitemap() {
  return [
    {
      url: 'https://melolink.com.br',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://melolink.com.br/politica-de-privacidade',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}