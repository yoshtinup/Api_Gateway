module.exports = async function eliminarProductoUseCase({ imagenService, productoService }, { id }) {
  // 1. Obtén el producto para saber si tiene una imagen asociada
  const producto = await productoService.obtenerProductoPorId(id);

  if (!producto) {
    throw new Error('Producto no encontrado');
  }

  // 2. Si tiene imagen, elimínala
  if (producto.imagen) {
    await imagenService.eliminarImagen(producto.imagen);
  }
  
  // 3. Elimina el producto
  await productoService.eliminarProducto(id);

  return { mensaje: 'Producto eliminado exitosamente' };
};
