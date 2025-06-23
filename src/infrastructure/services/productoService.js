const axios = require('axios');

exports.crearProducto = async (producto) => {
  const response = await axios.post('http://3.230.107.32:3002/api/v1/producto', producto);
  return response.data;
};

