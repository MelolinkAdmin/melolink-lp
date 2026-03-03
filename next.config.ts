/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Quando alguém acessar melolink.com.br/admin
        source: '/admin',
        // Ele será levado para o link do Netlify que funciona
        destination: 'https://melolink.netlify.app/admin/index.html',
        // 'permanent: true' diz aos buscadores que esse é o caminho definitivo (status 301)
        permanent: true,
      },
    ];
  },
};

export default nextConfig;