const asignarCursoAdminUseCase = require('../../application/use_cases/asignarCursoAdmin');
const actualizarAsignacionCursoAdminUseCase = require('../../application/use_cases/actualizarAsignacionCursoAdmin');
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

exports.actualizarAsignarCursoAdmin = async (req, res) => {
  try {
    console.log('=== REQUEST UPDATE RECIBIDO EN API GATEWAY ===');
    console.log('Body:', req.body);
    console.log('File:', req.file);

    // Permitir id en params o en body
    const mergedBody = { ...req.body };
    if (req.params && req.params.id && !mergedBody.id) {
      mergedBody.id = req.params.id;
    }

    const data = await actualizarAsignacionCursoAdminUseCase(
      { archivosService, asignacionCursoService },
      { file: req.file, body: mergedBody }
    );

    res.status(200).json(data);
  } catch (error) {
    console.error('=== ERROR EN UPDATE CONTROLADOR API GATEWAY ===');
    console.error('Error:', error.message);
    res.status(error.status || 500).json({ error: 'Error al actualizar la asignación', detalle: error.message });
  }
};
