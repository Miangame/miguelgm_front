const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  runtimeCaching
})

const { i18n } = require('./next-i18next.config')

module.exports = withPWA({
  i18n,
  images: {
    domains: ['res.cloudinary.com']
  },
  experimental: {
    appDir: true
  }
})
