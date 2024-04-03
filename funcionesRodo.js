// Arreglo global que contendrá los productos
let publicaciones = JSON.parse(localStorage.getItem('productos')) || [];

// Función para crear y agregar un producto al arreglo y al almacenamiento local
function crearProducto(name, image, category, material, size, description, measurement, price) {
  var producto = {
    name: name,
    image: image,
    category: category,
    material: material,
    sizes: size,
    description: description,
    measurements: measurement,
    price: price
  };
  publicaciones.push(producto);
  // Actualizar el almacenamiento local con el nuevo arreglo de publicaciones
  localStorage.setItem('productos', JSON.stringify(publicaciones));
  console.log('Producto creado y guardado en el almacenamiento local.');
}

// Función para borrar una publicación basándose en su índice en el arreglo.
function borrarPublicacion(i) {
  if (i >= 0 && i < publicaciones.length) {
    publicaciones.splice(i, 1);
    // Actualizar el almacenamiento local después de borrar
    localStorage.setItem('productos', JSON.stringify(publicaciones));
    console.log("Publicación eliminada exitosamente.");
  } else {
    console.log("El índice está fuera de rango.");
  }
}

// Función para modificar un producto
function modificarProducto(i, name, image, category, material, size, description, measurement, price) {
  if (i >= 0 && i < publicaciones.length) {
    // Actualizar la publicación en el índice dado con los nuevos valores
    publicaciones[i] = { name, image, category, material, sizes: size, description, measurements: measurement, price };
    // Actualizar el almacenamiento local después de modificar
    localStorage.setItem('productos', JSON.stringify(publicaciones));
    console.log("Producto modificado exitosamente.");
  } else {
    console.log("El índice proporcionado está fuera de rango.");
  }
}

// Ahora puedes usar las funciones como se muestra en los ejemplos siguientes:

// Crear un nuevo producto
crearProducto('Camiseta', 'imagen_camiseta.png', 'Ropa', 'Algodón', ['S', 'M', 'L'], 'Camiseta de algodón con estampado', '32x28', '$19.99');
crearProducto('Camiseta', 'imagen_camiseta.png', 'Ropa', 'Algodón', ['S', 'M', 'L'], 'Camiseta de algodón con estampado', '32x28', '$19.99');
crearProducto('Camiseta', 'imagen_camiseta.png', 'Ropa', 'Algodón', ['S', 'M', 'L'], 'Camiseta de algodón con estampado', '32x28', '$19.99');
crearProducto('Camiseta', 'imagen_camiseta.png', 'Ropa', 'Algodón', ['S', 'M', 'L'], 'Camiseta de algodón con estampado', '32x28', '$19.99');
crearProducto('Camiseta', 'imagen_camiseta.png', 'Ropa', 'Algodón', ['S', 'M', 'L'], 'Camiseta de algodón con estampado', '32x28', '$19.99');
crearProducto('Camiseta', 'imagen_camiseta.png', 'Ropa', 'Algodón', ['S', 'M', 'L'], 'Camiseta de algodón con estampado', '32x28', '$19.99');
crearProducto('Camiseta', 'imagen_camiseta.png', 'Ropa', 'Algodón', ['S', 'M', 'L'], 'Camiseta de algodón con estampado', '32x28', '$19.99');
crearProducto('Camiseta', 'imagen_camiseta.png', 'Ropa', 'Algodón', ['S', 'M', 'L'], 'Camiseta de algodón con estampado', '32x28', '$19.99');
crearProducto('Camiseta', 'imagen_camiseta.png', 'Ropa', 'Algodón', ['S', 'M', 'L'], 'Camiseta de algodón con estampado', '32x28', '$19.99');
crearProducto('Camiseta', 'imagen_camiseta.png', 'Ropa', 'Algodón', ['S', 'M', 'L'], 'Camiseta de algodón con estampado', '32x28', '$19.99');
crearProducto('Camiseta', 'imagen_camiseta.png', 'Ropa', 'Algodón', ['S', 'M', 'L'], 'Camiseta de algodón con estampado', '32x28', '$19.99');

// Modificar el producto en la posición 0
modificarProducto(1, 'Sudadera', 'imagen_sudadera.png', 'Ropa deportiva', 'Poliéster', ['M'], 'Sudadera cómoda con capucha', '60x40', '$29.99');

// Borrar el producto en la posición 0
borrarPublicacion(0);
