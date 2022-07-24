const { createProxyMiddleware } = require('http-proxy-middleware');

// proxy 설정
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3500',
      changeOrigin: true,
    })
  );
};
