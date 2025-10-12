const axios = require('axios');
require('dotenv').config();
exports.crearAsignacionCurso = async (asignacion) => {
  try {
    console.log('=== ENVIANDO A APIEMPRESA ===');
  console.log('URL:', `${process.env.API_EMPRESA}/asignar-curso`);
    console.log('Datos:', asignacion);

  const response = await axios.post(`${process.env.API_EMPRESA}/asignar-curso`, asignacion);

    console.log('=== RESPUESTA DE APIEMPRESA ===');
    console.log('Status:', response.status);
    console.log('Data:', response.data);
    
    return response.data;
  } catch (error) {
    console.error('=== ERROR EN ASIGNACIONCURSOSERVICE ===');
    console.error('Error completo:', error.response?.data || error.message);
    console.error('Status:', error.response?.status);
    console.error('Headers:', error.response?.headers);
    throw error;
  }
};

// PUT /api/v1/asignar-curso/:id
exports.actualizarAsignacionCurso = async (id, asignacion) => {
  try {
  const url = `${process.env.API_EMPRESA}/asignar-curso/${id}`;
    console.log('=== ENVIANDO UPDATE A APIEMPRESA ===');
    console.log('URL:', url);
    console.log('Datos:', asignacion);

    const response = await axios.put(url, asignacion);

    console.log('=== RESPUESTA UPDATE DE APIEMPRESA ===');
    console.log('Status:', response.status);
    console.log('Data:', response.data);

    return response.data;
  } catch (error) {
    console.error('=== ERROR EN UPDATE ASIGNACIONCURSOSERVICE ===');
    console.error('Error completo:', error.response?.data || error.message);
    console.error('Status:', error.response?.status);
    console.error('Headers:', error.response?.headers);
    throw error;
  }
};
