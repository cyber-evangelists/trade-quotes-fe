/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: 'http://141.136.36.126/api/:path*'
    }
  ]
}

module.exports = nextConfig
