const createProxyMiddleware = require("http-proxy-middleware");
module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://129.154.58.244:8001",
      changeOrigin: true,
      ws: true,
    })
  );
};
