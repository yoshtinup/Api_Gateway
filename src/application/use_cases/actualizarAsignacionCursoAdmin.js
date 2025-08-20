const AsignacionCurso = require('../../domain/entities/AsignacionCurso');

// Actualiza una asignación de curso. Soporta:
// - Body en form-data con campos: id (required) y cualquiera de:
//   - iduser, idproduc
//   - o id_curso, id_encargado (se mapean a idproduc/iduser respectivamente)
// - Archivo opcional 'excel' que se sube al servicio de archivos; el backend actual puede ignorarlo.
module.exports = async function actualizarAsignacionCursoAdminUseCase(
  { archivosService, asignacionCursoService },
  { file, body }
) {
  // Validaciones mínimas
  const id = body?.id || body?.id_asignacion || body?.asignacion_id;
  if (!id) {
    const err = new Error('El campo id es requerido para actualizar');
    err.status = 400;
    throw err;
  }

  // Si viene archivo, subirlo; si no, usar body.excel (URL o ruta)
  let excelUrl = body?.excel;
  if (file) {
    excelUrl = await archivosService.subirExcel(file);
  }

  // Acepta dos nomenclaturas y las normaliza
  // Preferir iduser/idproduc si vienen, si no mapear desde id_encargado/id_curso
  const iduser = body.iduser ?? body.id_encargado;
  const idproduc = body.idproduc ?? body.id_curso;

  // Construimos un objeto flexible para enviar aguas abajo
  const payload = {
    iduser: iduser != null && iduser !== '' ? parseInt(iduser) : undefined,
    idproduc: idproduc != null && idproduc !== '' ? parseInt(idproduc) : undefined,
    // También incluimos el modelo actual por compatibilidad futura
    id_curso: idproduc != null && idproduc !== '' ? parseInt(idproduc) : undefined,
    id_encargado: iduser != null && iduser !== '' ? parseInt(iduser) : undefined,
    excel: excelUrl || null,
  };

  // El servicio se encargará de llamar al endpoint correcto con :id
  return await asignacionCursoService.actualizarAsignacionCurso(id, payload);
}
