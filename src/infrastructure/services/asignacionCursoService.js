const axios = require('axios');

exports.crearAsignacionCurso = async (asignacion) => {
  try {
    console.log('=== ENVIANDO A APIEMPRESA ===');
    console.log('URL:', 'http://3.214.95.5:3002/api/v1/asignar-curso');
    console.log('Datos:', asignacion);

    const response = await axios.post('http://3.214.95.5:3002/api/v1/asignar-curso', asignacion);

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
