const eliminarProductoUseCase = require("../../application/use_cases/eliminarProductoUseCase")
const imagenService = require('../services/imagenService');
const productoService = require('../services/productoService');

exports.eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await eliminarProductoUseCase(
      { imagenService, productoService },
      { id }
    );

    res.json({ mensaje: 'Producto eliminado correctamente', data });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto', detalle: error.message });
  }
};
