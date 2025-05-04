/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
      unoptimized: true,
      domains: [
        'imakesite.s3.eu-north-1.amazonaws.com',
        process.env.STRAPI_API_URL ? new URL(process.env.STRAPI_API_URL).hostname : 'localhost'
      ]
    },
    assetPrefix: process.env.NODE_ENV === 'production' 
      ? 'https://imakesite.s3.eu-north-1.amazonaws.com/templates/cake' 
      : '/templates/cake',
    trailingSlash: true,
    basePath: '',
    env: {
      STRAPI_API_URL: process.env.STRAPI_API_URL || 'http://localhost:1337',
      GRAPESJS_ENABLED: process.env.GRAPESJS_ENABLED || 'false'
    },
    experimental: {
      appDir: true
    }
  }
  
  
  module.exports = nextConfig