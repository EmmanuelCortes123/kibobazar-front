
// Función para crear un objeto producto con las propiedades especificadas.
function crearProducto(name, image, category, material, size, description, measurement, price) {
    // Creando un nuevo objeto producto con las propiedades recibidas como parámetros
    var producto = {
      name: name,               // Nombre del producto
      image: image,             // Imagen o ruta de la imagen del producto
      category: category,       // Categoría a la que pertenece el producto
      material: material,       // Material del producto
      sizes: size,              // Tallas disponibles para el producto
      description: description, // Descripción del producto
      measurements: measurement, // Medidas del producto
      price: price              // Precio del producto
    };
    
    // Devuelve el objeto producto creado.
    return producto;
  }
  
  // Función para guardar un producto en el almacenamiento local del navegador.
  function guardarProducto(producto) {
    // Obtener la lista de productos actual del almacenamiento local.
    let productos = localStorage.getItem('productos');
    // Si hay productos ya almacenados, los parseamos, si no, iniciamos un array vacío.
    productos = productos ? JSON.parse(productos) : [];
  
    // Añadimos el nuevo producto al array de productos existente.
    productos.push(producto);
  
    // Guardamos la lista de productos actualizada en el almacenamiento local.
    // Convertimos el array de productos a una cadena JSON.
    localStorage.setItem('productos', JSON.stringify(productos));
  
    // Informamos en la consola que el producto se guardó correctamente.
    console.log('Producto guardado correctamente.');
  }
  
  // Función para obtener la lista de productos en formato JSON del almacenamiento local.
  function obtenerProductosJSON() {
    // Obtenemos la lista de productos del almacenamiento local.
    let productos = localStorage.getItem('productos');
    
    // Si hay productos, los retornamos como una cadena JSON, si no, retornamos un array vacío en formato JSON.
    return productos ? productos : '[]';
  }
  
  // Ejemplo de uso de las funciones
  // Creación de un nuevo producto con datos de ejemplo
  var nuevoProducto = crearProducto(
    'Camiseta',
    'imagen_camiseta.png',
    'Ropa',
    'Algodón',
    ['S', 'M', 'L'],
    'Camiseta de algodón con estampado',
    '32x28',
    '$19.99'
  );
  
  // Guarda el producto en el almacenamiento local
  guardarProducto(nuevoProducto);
  
  // Imprime la lista de productos en formato JSON en la consola
  console.log(obtenerProductosJSON());






























/*let publicaciones = [];

// función agregarPublicacion
function agregarPublicacion(name, image, category, material, size, description, measurement, price) {
    let producto = {
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
    
}

// Función para guardar un producto en el almacenamiento local del navegador.
function guardarProducto(producto) {
    // Obtener la lista de productos actual del almacenamiento local.
    let productos = localStorage.getItem('productos');
    // Si hay productos ya almacenados, los parseamos, si no, iniciamos un array vacío.
    productos = productos ? JSON.parse(productos) : [];
}

// Función para borrar una publicación
function borrarPublicacion(i) {
    if (i >= 0 && i < publicaciones.length) {
        publicaciones.splice(i, 1);
        console.log("Publicación eliminada exitosamente.");
    } else {
        console.log("El índice está fuera de rango.");
    }
}

// Función para modificar un producto
function modificarProducto(i, nuevoProducto) {
    if (i >= 0 && i < publicaciones.length) {
        publicaciones[i] = nuevoProducto;
        console.log("Producto modificado exitosamente.");
    } else {
        console.log("El índice proporcionado está fuera de rango.");
    }
}


agregarPublicacion("Camiseta", "imagen_camiseta.jpg", "Ropa", "Algodón", "M", "Camiseta de algodón blanco", "M: 50cm (ancho) x 70cm (alto)", 15.99);
agregarPublicacion("Pantalón", "imagen_pantalon.jpg", "Ropa", "Denim", "L", "Pantalón vaquero azul", "L: 32 (cintura) x 34 (largo)", 29.99);
agregarPublicacion("Zapatillas", "imagen_zapatillas.jpg", "Calzado", "Cuero sintético", "US 9", "Zapatillas deportivas blancas", "US 9: 27cm (longitud del pie)", 49.99);
agregarPublicacion("Gorra", "imagen_gorra.jpg", "Accesorios", "Algodón", "Única", "Gorra negra con logo", "-", 9.99);
agregarPublicacion("Vestido", "imagen_vestido.jpg", "Ropa", "Seda", "S", "Vestido de fiesta rojo", "S: 80cm (busto) x 90cm (largo)", 59.99);
agregarPublicacion("Reloj", "imagen_reloj.jpg", "Accesorios", "Acero inoxidable", "Única", "Reloj de pulsera plateado", "-", 79.99);
agregarPublicacion("Mochila", "imagen_mochila.jpg", "Accesorios", "Nylon", "Única", "Mochila escolar negra", "-", 39.99);
agregarPublicacion("Bufanda", "imagen_bufanda.jpg", "Ropa", "Lana", "Única", "Bufanda de lana gris", "-", 19.99);
agregarPublicacion("Sudadera", "imagen_sudadera.jpg", "Ropa", "Poliéster", "XL", "Sudadera con capucha azul", "XL: 60cm (ancho) x 75cm (alto)", 34.99);
agregarPublicacion("Botines", "imagen_botines.jpg", "Calzado", "Cuero genuino", "US 8", "Botines de cuero marrón", "US 8: 26cm (longitud del pie)", 69.99);



// imprimimos 2 productos
console.log("Producto 1: ", publicaciones[0]);
console.log("Producto 2 ", publicaciones[1]);

// borramos 1 producto
borrarPublicacion(0)

//imprimimos para ver si se borro el producto
console.log(publicaciones);

// ejemplo de modificar un producto
let productoModificado = {
    name: "Nuevo Pantalón",
    image: "nueva_imagen_camiseta.jpg",
    category: "Ropa",
    material: "Algodón",
    sizes: "L",
    description: "Camiseta de algodón negra",
    measurements: "L: 55cm (ancho) x 75cm (alto)",
    price: 19.99
};

modificarProducto(0, productoModificado);

// comprobamos en consola que se modifico el producto
console.log(publicaciones[0]);


//Sugerencia para el localStorage

/* let publicaciones = [];

// Función para agregar una publicación
function agregarPublicacion(name, image, category, material, size, description, measurement, price) {
    let nuevaPublicacion = {
        name: name,
        image: image,
        category: category,
        material: material,
        sizes: size,
        description: description,
        measurements: measurement,
        price: price
    };
    publicaciones.push(nuevaPublicacion);

    // Convertir el arreglo de publicaciones a JSON y almacenarlo en localStorage
    actualizarLocalStorage();
}

// Función para borrar una publicación
function borrarPublicacion(index) {
    if (index >= 0 && index < publicaciones.length) {
        publicaciones.splice(index, 1);
        console.log("Publicación eliminada exitosamente.");

        // Convertir el arreglo de publicaciones a JSON y almacenarlo en localStorage
        actualizarLocalStorage();
    } else {
        console.log("El índice está fuera de rango.");
    }
}

// Función para modificar un producto
function modificarProducto(index, nuevoProducto) {
    if (index >= 0 && index < publicaciones.length) {
        publicaciones[index] = nuevoProducto;
        console.log("Producto modificado exitosamente.");

        // Convertir el arreglo de publicaciones a JSON y almacenarlo en localStorage
        actualizarLocalStorage();
    } else {
        console.log("El índice proporcionado está fuera de rango.");
    }
}

// Función para actualizar el almacenamiento local del navegador con el arreglo de publicaciones
function actualizarLocalStorage() {
    let publicacionesJSON = JSON.stringify(publicaciones);
    localStorage.setItem('publicaciones', publicacionesJSON);
}

// Ejemplo de uso de las funciones
agregarPublicacion("Camiseta", "imagen_camiseta.jpg", "Ropa", "Algodón", "M", "Camiseta de algodón blanco", "M: 50cm (ancho) x 70cm (alto)", 15.99);
agregarPublicacion("Pantalón", "imagen_pantalon.jpg", "Ropa", "Denim", "L", "Pantalón vaquero azul", "L: 32 (cintura) x 34 (largo)", 29.99);

// Borrar la publicación en el índice 0
borrarPublicacion(0);

// Modificar la publicación en el índice 0
let productoModificado = {
    name: "Nueva Camiseta",
    image: "nueva_imagen_camiseta.jpg",
    category: "Ropa",
    material: "Algodón",
    sizes: "L",
    description: "Camiseta de algodón negra",
    measurements: "L: 55cm (ancho) x 75cm (alto)",
    price: 19.99
};
modificarProducto(0, productoModificado);

// Mostrar todas las publicaciones en la consola después de la modificación
console.log("Lista de todas las publicaciones después de la modificación:");
console.log(publicaciones); */