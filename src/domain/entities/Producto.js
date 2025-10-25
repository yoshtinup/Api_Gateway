class Producto {
  constructor({ nombre, cantidad, precio, imagen, precioUnitario }) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
    this.imagen = imagen;
    this.precioUnitario = precioUnitario;
  }
}

module.exports = Producto;
