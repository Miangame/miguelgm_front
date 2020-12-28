const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = {
  images: {
    domains: ['res.cloudinary.com']
  }
}

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    runtimeCaching
  }
})
