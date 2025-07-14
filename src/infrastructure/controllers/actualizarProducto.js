const actualizarProductoUseCase = require('../../application/use_cases/actualizarProducto');
const imagenService = require('../services/imagenService');
const productoService = require('../services/productoService');

exports.actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params; 
    const data = await actualizarProductoUseCase(
      { imagenService, productoService }, 
      {
        id,              
        file: req.file,  
        body: req.body  
      }
    );
    res.json(data); 
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto', detalle: error.message });
  }
};