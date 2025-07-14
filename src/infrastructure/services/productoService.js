const axios = require('axios');

exports.crearProducto = async (producto) => {
  const response = await axios.post('http://3.230.107.32:3002/api/v1/producto', producto);
  return response.data;
};
exports.obtenerProductoPorId = async (id) => {
  const response = await axios.get(`http://3.230.107.32:3002/api/v1/producto/${id}`);
  return response.data;
};


exports.actualizarProducto = async (id, producto) => {
  const response = await axios.put(`http://3.230.107.32:3002/api/v1/producto/${id}`, producto);
  return response.data;
}

exports.eliminarProducto = async (id) => {
  const response = await axios.delete(`http://3.230.107.32:3002/api/v1/producto/${id}`);
  return response.data;
};
