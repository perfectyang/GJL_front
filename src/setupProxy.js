var proxy = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(
    '/index.php',
    proxy({
       target: 'http://www.web2.com/',
       changeOrigin: true
    })
  )
}
