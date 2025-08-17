const axios = require('axios');
const FormData = require('form-data');

exports.subirExcel = async (file) => {
  const formData = new FormData();
  formData.append('excel', file.buffer, {
    filename: file.originalname,
    contentType: file.mimetype,
  });

  // mismo host/puerto que imagen, endpoint /excel
  const response = await axios.post('http://75.101.189.104:3001/excel', formData, {
    headers: formData.getHeaders(),
  });

  // La API devuelve { filename, url } según capturas
  return response.data.url || response.data.filename;
};
