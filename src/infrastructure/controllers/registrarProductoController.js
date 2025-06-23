const registrarProductoUseCase = require('../../application/use_cases/registrarProducto');
const imagenService = require('../services/imagenService');
const productoService = require('../services/productoService');

exports.registrarProducto = async (req, res) => {
  try {
    const data = await registrarProductoUseCase({ imagenService, productoService }, {
      file: req.file,
      body: req.body
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el producto', detalle: error.message });
  }
};
