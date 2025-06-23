const axios = require('axios');
const FormData = require('form-data');

exports.subirImagen = async (file) => {
  const formData = new FormData();
  formData.append('imagen', file.buffer, {
    filename: file.originalname,
    contentType: file.mimetype
  });

  const response = await axios.post('http://35.169.179.247:3001/imagen', formData, {
    headers: formData.getHeaders()
  });

  return response.data.filename;
};
