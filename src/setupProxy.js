var proxy = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(
    '/index.php',
    proxy({
       target: 'http://dev_www.qdtech.ai/', changeOrigin: true
    })
  )
}
