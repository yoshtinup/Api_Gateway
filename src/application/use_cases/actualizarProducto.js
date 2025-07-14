const Producto = require('../../domain/entities/Producto.js');

module.exports = async function actualizarProductoUseCase({ imagenService, productoService }, { id, file, body }) {
  // 1. Obtén el producto actual para saber el id de la imagen
  const productoActual = await productoService.obtenerProductoPorId(id);
  let imagenId = productoActual.imagen; // id de la imagen actual

  // 2. Si se sube una nueva imagen, actualízala usando el id de la imagen actual
  if (file) {
    imagenId = await imagenService.actualizarImagen(imagenId, file);
  }

  // 3. Crea el producto actualizado
  const productoActualizado = new Producto({
    nombre: body.nombre,
    cantidad: body.cantidad,
    precio: body.precio,
    imagen: imagenId
  });

  // 4. Actualiza el producto
  return await productoService.actualizarProducto(id, productoActualizado);
};