// Arreglo global que contendrá los productos
let publicaciones = JSON.parse(localStorage.getItem('productos')) || [];

function inicializarProductos() {
  if (!publicaciones.length) {
    // Crear algunos productos de ejemplo
    crearProducto('Camiseta Edición Limitada', 'https://via.placeholder.com/150', 'Ropa', 'Algodón', ['S', 'M'], 'Una camiseta exclusiva con diseño único.', 'Varias', '$19.99');
    crearProducto('Camiseta Edición Limitada', 'https://via.placeholder.com/150', 'Ropa', 'Algodón', ['S', 'M'], 'Una camiseta exclusiva con diseño único.', 'Varias', '$19.99');
    crearProducto('Camiseta Edición Limitada', 'https://via.placeholder.com/150', 'Ropa', 'Algodón', ['S', 'M'], 'Una camiseta exclusiva con diseño único.', 'Varias', '$19.99');
    crearProducto('Camiseta Edición Limitada', 'https://via.placeholder.com/150', 'Ropa', 'Algodón', ['S', 'M'], 'Una camiseta exclusiva con diseño único.', 'Varias', '$19.99');
    crearProducto('Camiseta Edición Limitada', 'https://via.placeholder.com/150', 'Ropa', 'Algodón', ['S', 'M'], 'Una camiseta exclusiva con diseño único.', 'Varias', '$19.99');
    crearProducto('Camiseta Edición Limitada', 'https://via.placeholder.com/150', 'Ropa', 'Algodón', ['S', 'M'], 'Una camiseta exclusiva con diseño único.', 'Varias', '$19.99');
    crearProducto('Camiseta Edición Limitada', 'https://via.placeholder.com/150', 'Ropa', 'Algodón', ['S', 'M'], 'Una camiseta exclusiva con diseño único.', 'Varias', '$19.99');
    crearProducto('Camiseta Edición Limitada', 'https://via.placeholder.com/150', 'Ropa', 'Algodón', ['S', 'M'], 'Una camiseta exclusiva con diseño único.', 'Varias', '$19.99');
    crearProducto('Camiseta Edición Limitada', 'https://via.placeholder.com/150', 'Ropa', 'Algodón', ['S', 'M'], 'Una camiseta exclusiva con diseño único.', 'Varias', '$19.99');
    crearProducto('Camiseta Edición Limitada', 'https://via.placeholder.com/150', 'Ropa', 'Algodón', ['S', 'M'], 'Una camiseta exclusiva con diseño único.', 'Varias', '$19.99');
    // Añade más productos aquí si lo deseas
  }
  renderizarProductos(); // Asegúrate de llamar a renderizarProductos aquí para mostrar los productos inicialmente
}

function crearProducto(name, image, category, material, sizes, description, measurements, price) {
  let producto = { name, image, category, material, sizes, description, measurements, price };
  publicaciones.push(producto);
  localStorage.setItem('productos', JSON.stringify(publicaciones));
  renderizarProductos(); // Llama a renderizarProductos cada vez que creas un producto para actualizar la vista
}

function borrarPublicacion(i) {
  if (i >= 0 && i < publicaciones.length) {
    publicaciones.splice(i, 1);
    localStorage.setItem('productos', JSON.stringify(publicaciones));
    renderizarProductos(); // Llama a renderizarProductos cada vez que borras un producto para actualizar la vista
  }
}

function modificarProducto(i, name, image, category, material, sizes, description, measurements, price) {
  if (i >= 0 && i < publicaciones.length) {
    publicaciones[i] = { name, image, category, material, sizes, description, measurements, price };
    localStorage.setItem('productos', JSON.stringify(publicaciones));
    renderizarProductos(); // Llama a renderizarProductos cada vez que modificas un producto para actualizar la vista
  }
}

function renderizarProductos() {
  const contenedorProductos = document.getElementById('contenedorProductos');
  contenedorProductos.innerHTML = ''; // Limpia el contenedor de productos

  publicaciones.forEach((producto, indice) => {
    const tarjetaProducto = `
      <div class="col-sm-4 mb-4">
        <div class="card">
          <img src="${producto.image}" class="card-img-top" alt="${producto.name}">
          <div class="card-body">
            <h5 class="card-title">${producto.name}</h5>
            <p class="card-text">${producto.description}</p>
            <p class="card-text">Precio: ${producto.price}</p>
            <button onclick="borrarPublicacion(${indice})" class="btn btn-danger">Eliminar</button>
            <!-- Aquí puedes agregar más botones o información -->
          </div>
        </div>
      </div>
    `;
    contenedorProductos.innerHTML += tarjetaProducto; // Agrega la tarjeta al contenedor de productos
  });
}

document.addEventListener('DOMContentLoaded', inicializarProductos);
