const asignarCursoAdminUseCase = require('../../application/use_cases/asignarCursoAdmin');
const archivosService = require('../services/archivosService');
const asignacionCursoService = require('../services/asignacionCursoService');

exports.asignarCursoAdmin = async (req, res) => {
  try {
    console.log('=== REQUEST RECIBIDO EN API GATEWAY ===');
    console.log('Body:', req.body);
    console.log('File:', req.file);
    console.log('Headers:', req.headers);
    
    const data = await asignarCursoAdminUseCase(
      { archivosService, asignacionCursoService },
      { file: req.file, body: req.body }
    );
    
    console.log('=== RESPUESTA EXITOSA ===');
    console.log('Data:', data);
    
    res.status(201).json(data);
  } catch (error) {
    console.error('=== ERROR EN CONTROLADOR API GATEWAY ===');
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
    res.status(500).json({ error: 'Error al asignar el curso', detalle: error.message });
  }
};
