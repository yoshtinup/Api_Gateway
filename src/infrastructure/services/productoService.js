const axios = require('axios');
require('dotenv').config();
exports.crearProducto = async (producto) => {
  const response = await axios.post(`${process.env.API_EMPRESA}/producto`, producto);
  return response.data;
};
exports.obtenerProductoPorId = async (id) => {
  const response = await axios.get(`${process.env.API_EMPRESA}/producto/${id}`);
  return response.data;
};


exports.actualizarProducto = async (id, producto) => {
  const response = await axios.put(`${process.env.API_EMPRESA}/producto/${id}`, producto);
  return response.data;
}

exports.eliminarProducto = async (id) => {
  const response = await axios.delete(`${process.env.API_EMPRESA}/producto/${id}`);
  return response.data;
};
