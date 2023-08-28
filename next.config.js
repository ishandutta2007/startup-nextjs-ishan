/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true,
  },
  exportPathMap: async function (defaultPathMap) {
    return {
      '/index.html': { page: '/' },
    };
  }
};

module.exports = nextConfig;
