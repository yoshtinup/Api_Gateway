const axios = require('axios');
require('dotenv').config();
const FormData = require('form-data');

exports.subirImagen = async (file) => {
  const formData = new FormData();
  formData.append('imagen', file.buffer, {
    filename: file.originalname,
    contentType: file.mimetype
  });

  const response = await axios.post(`${process.env.API_ARCHIVOS}/imagen`, formData, {
    headers: formData.getHeaders()
  });

  return response.data.filename;
};

exports.actualizarImagen = async (id, file) => {
  const formData = new FormData();
  formData.append('imagen', file.buffer, {
    filename: file.originalname,
    contentType: file.mimetype
  });
  console.log('ID recibido:', id);
  console.log('Archivo recibido:', file);
  const response = await axios.put(`${process.env.API_ARCHIVOS}/imagen/${id}`, formData, {
    headers: formData.getHeaders()
  });

  return response.data.filename;
};

exports.eliminarImagen = async (id) => {
  try {
    const response = await axios.delete(`${process.env.API_ARCHIVOS}/imagen/${id}`);
    return response.data; 
  } catch (error) {
    console.error('Error al eliminar la imagen:', error.message);
    throw new Error('No se pudo eliminar la imagen');
  }
};
