const axios = require('axios');
const FormData = require('form-data');
require('dotenv').config();

exports.subirExcel = async (file) => {
  const formData = new FormData();
  formData.append('excel', file.buffer, {
    filename: file.originalname,
    contentType: file.mimetype,
  });

  // En local, el servicio de archivos corre en 3001
  const response = await axios.post(`${process.env.API_ARCHIVOS}/excel`, formData, {
    headers: formData.getHeaders(),
  });

  // La API devuelve { filename, url } según capturas
  return response.data.url || response.data.filename;
};
