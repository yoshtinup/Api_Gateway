const AsignacionCurso = require('../../domain/entities/AsignacionCurso');

module.exports = async function asignarCursoAdminUseCase(
  { archivosService, asignacionCursoService },
  { file, body }
) {
  // 1) Si viene archivo, subirlo; si no, usar body.excel (URL).
  let excelUrl = body?.excel;
  if (file) {
    excelUrl = await archivosService.subirExcel(file);
  }

  const asignacion = new AsignacionCurso({
    id_curso: body.id_curso,
    id_encargado: body.id_encargado,
    excel: excelUrl,
  });

  return await asignacionCursoService.crearAsignacionCurso(asignacion);
};
