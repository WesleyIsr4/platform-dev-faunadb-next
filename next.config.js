require('dotenv').config()

const { v4: uid } = require('uuid')
const withPWA = require('next-pwa')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  generateBuildId: async () => uid(),
  pwa: {
    dest: 'public',
    disable: !isProduction,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  env: {
    FAUNA_KEY: process.env.FAUNA_KEY,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    SIGNING_KEY: process.env.SIGNING_KEY,
  },
  images: {
    domains: ['localhost', 'avatars.githubusercontent.com'],
  },
})
