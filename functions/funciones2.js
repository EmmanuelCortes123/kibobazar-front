
const fs = require('fs');
const path = require('path');

const archivoProductos = path.join(__dirname, 'productos.json');

function crearProducto(nombre, precio, descripcion) {
  var producto = {
    nombre: nombre,
    precio: precio,
    descripcion: descripcion
  };
  
  return producto;
}

function guardarProducto(producto) {
  fs.readFile(archivoProductos, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }
    let productos = JSON.parse(data);
    productos.push(producto);
    fs.writeFile(archivoProductos, JSON.stringify(productos, null, 2), (err) => {
      if (err) {
        console.error('Error al escribir en el archivo:', err);
        return;
      }
      console.log('Producto guardado correctamente.');
    });
  });
}

