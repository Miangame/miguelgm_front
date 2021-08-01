const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const { i18n } = require('./next-i18next.config')

module.exports = withPWA({
  i18n,
  images: {
    domains: ['res.cloudinary.com']
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    runtimeCaching
  }
})
