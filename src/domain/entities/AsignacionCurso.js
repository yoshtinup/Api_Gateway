class AsignacionCurso {
  constructor({ id_curso, id_encargado, excel }) {
    this.id_curso = id_curso;
    this.id_encargado = id_encargado;
    this.excel = excel; // URL del archivo Excel
  }
}

module.exports = AsignacionCurso;
