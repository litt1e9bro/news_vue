module.exports = {
    devServer: {
        host: 'localhost',
        port: '8081',
        open: true,
        https: false,
        proxy: {
          '/api': {
            target: 'http://news.test/',
            ws: true,
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        }
    }
}