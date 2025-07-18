const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const routes = require('../infrastructure/routes');

const app = express();
app.use(cors());
app.use(express.json());
//Servicios Externos

app.use('/imagenes', createProxyMiddleware({
  target: 'http://75.101.189.104:3001/imagen',
  changeOrigin: true,
}));

app.use('/productos', createProxyMiddleware({
  target: 'http://3.214.95.5:3002/api/v1/producto',
  changeOrigin: true,
}));

app.use('/', routes);

module.exports = app;
