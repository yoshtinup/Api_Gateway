const Producto = require('../../domain/entities/Producto');

module.exports = async function registrarProductoUseCase({ imagenService, productoService }, { file, body }) {
  const filename = await imagenService.subirImagen(file);

  const producto = new Producto({
    nombre: body.nombre,
    cantidad: body.cantidad,
    precio: body.precio,
    imagen: filename,
    precioUnitario: body.precioUnitario
  });

  return await productoService.crearProducto(producto);
};
