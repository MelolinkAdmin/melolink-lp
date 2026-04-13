/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [];
  },
  async redirects() {
    return [
      {
        source: '/assinante',
        destination: 'https://melolink.portalinternet.com.br/radiusnet/cda/login.php',
        permanent: true,
      },
      {
        source: '/area-do-cliente',
        destination: 'https://melolink.portalinternet.com.br/radiusnet/cda/login.php',
        permanent: true,
      },
      {
        source: '/wp-content/:path*',
        destination: '/404',
        permanent: true,
      },
      {
        source: '/elementor-818',
        destination: '/#formulario',
        permanent: true, 
      },
    ];
  },
};


export default nextConfig;