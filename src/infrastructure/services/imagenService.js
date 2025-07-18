const axios = require('axios');
const FormData = require('form-data');

exports.subirImagen = async (file) => {
  const formData = new FormData();
  formData.append('imagen', file.buffer, {
    filename: file.originalname,
    contentType: file.mimetype
  });

  const response = await axios.post('http://75.101.189.104:3001/imagen', formData, {
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
  const response = await axios.put(`http://75.101.189.104:3001/imagen/${id}`, formData, {
    headers: formData.getHeaders()
  });

  return response.data.filename;
};

exports.eliminarImagen = async (id) => {
  try {
    const response = await axios.delete(`http://75.101.189.104:3001/imagen/${id}`);
    return response.data; // Puede devolver un mensaje o estado
  } catch (error) {
    console.error('Error al eliminar la imagen:', error.message);
    throw new Error('No se pudo eliminar la imagen');
  }
};
