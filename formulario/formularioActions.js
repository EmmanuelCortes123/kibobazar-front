// // Arreglo global que contendrá los productos
// let publicaciones = JSON.parse(localStorage.getItem("productos")) || [];

// function inicializarProductos() {
//   renderizarProductos(); // Solo renderiza los productos existentes en Local Storage al inicializar
// }

// function crearProducto(
//   name,
//   image,
//   category,
//   material,
//   sizes,
//   description,
//   measurements,
//   price
// ) {
//   let producto = {
//     name,
//     image,
//     category,
//     material,
//     sizes,
//     description,
//     measurements,
//     price,
//   };
//   publicaciones.push(producto);
//   localStorage.setItem("productos", JSON.stringify(publicaciones));
//   renderizarProductos(); // Actualiza la vista cada vez que se crea un producto
// }

// function borrarPublicacion(i) {
//   if (i >= 0 && i < publicaciones.length) {
//     publicaciones.splice(i, 1);
//     localStorage.setItem("productos", JSON.stringify(publicaciones));
//     renderizarProductos(); // Actualiza la vista cada vez que se borra un producto
//   }
// }

// function modificarProducto(
//   i,
//   name,
//   image,
//   category,
//   material,
//   sizes,
//   description,
//   measurements,
//   price
// ) {
//   if (i >= 0 && i < publicaciones.length) {
//     publicaciones[i] = {
//       name,
//       image,
//       category,
//       material,
//       sizes,
//       description,
//       measurements,
//       price,
//     };
//     localStorage.setItem("productos", JSON.stringify(publicaciones));
//     renderizarProductos(); // Actualiza la vista cada vez que se modifica un producto
//   }
// }

// function renderizarProductos() {
//   const contenedorProductos = document.getElementById("contenedorProductos");
//   contenedorProductos.innerHTML = ""; // Limpia el contenedor de productos antes de renderizar

//   publicaciones.forEach((producto, indice) => {
//     const tarjetaProducto = `
//       <div class="col-sm-4 mb-4">
//         <div class="card">
//           <img src="${producto.image}" class="card-img-top" alt="${producto.name}">
//           <div class="card-body">
//             <h5 class="card-title">${producto.name}</h5>
//             <p class="card-text">${producto.description}</p>
//             <p class="card-text">Precio: ${producto.price}</p>
//             <button onclick="borrarPublicacion(${indice})" class="btn btn-danger">Eliminar</button>
//             <!-- Aquí puedes agregar más botones o información -->
//           </div>
//         </div>
//       </div>
//     `;
//     contenedorProductos.innerHTML += tarjetaProducto;
//   });
// }

// document.addEventListener("DOMContentLoaded", inicializarProductos);

// document.addEventListener("DOMContentLoaded", () => {
//   const contenedorProductos = document.getElementById("contenedorProductos");

//   // Función para renderizar los productos
//   function renderizarProductos() {
//     // Obtiene los productos del Local Storage
//     let productos = JSON.parse(localStorage.getItem("productos")) || [];

//     // Limpia el contenedor de productos
//     contenedorProductos.innerHTML = "";

//     // Itera sobre el array de productos y crea la estructura HTML para cada uno
//     productos.forEach((producto, indice) => {
//       const tarjetaProducto = `
//         <div class="col-sm-4 mb-4">
//           <div class="card">
//             <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
//             <div class="card-body">
//               <h5 class="card-title">${producto.nombre}</h5>
//               <p class="card-text">${producto.descripcion}</p>
//               <p class="card-text">${producto.categoria}</p>
//               <p class="card-text">${producto.material}</p>
//               <p class="card-text">${producto.medidas}</p>
//               <p class="card-text">${producto.tallas}</p>
//               <p class="card-text">${producto.precio}</p>
//               <button onclick="borrarProducto(${indice})" class="btn btn-danger">Eliminar</button>
//             </div>
//           </div>
//         </div>`;

//       // Agrega la tarjeta al contenedor de productos
//       contenedorProductos.innerHTML += tarjetaProducto;
//     });
//   }

//   // Función para borrar un producto
//   window.borrarProducto = (indice) => {
//     let productos = JSON.parse(localStorage.getItem("productos")) || [];
//     productos.splice(indice, 1);
//     localStorage.setItem("productos", JSON.stringify(productos));
//     renderizarProductos(); // Re-renderiza los productos después de borrar
//   };

//   // Llama a renderizarProductos al cargar la página
//   renderizarProductos();
// });

// // Arreglo global que contendrá los productos
// let publicacionesDos = JSON.parse(localStorage.getItem("productos")) || [];

// function inicializarProductos() {
//   if (!publicacionesDos.length) {
//     // Crear algunos productos de ejemplo
//     crearProducto(
//       "Camiseta Edición Limitada",
//       "https://via.placeholder.com/150",
//       "Ropa",
//       "Algodón",
//       ["S", "M"],
//       "Una camiseta exclusiva con diseño único.",
//       "Varias",
//       "$19.99"
//     );
//     crearProducto(
//       "Camiseta Edición Limitada",
//       "https://via.placeholder.com/150",
//       "Ropa",
//       "Algodón",
//       ["S", "M"],
//       "Una camiseta exclusiva con diseño único.",
//       "Varias",
//       "$19.99"
//     );
//     crearProducto(
//       "Camiseta Edición Limitada",
//       "https://via.placeholder.com/150",
//       "Ropa",
//       "Algodón",
//       ["S", "M"],
//       "Una camiseta exclusiva con diseño único.",
//       "Varias",
//       "$19.99"
//     );
//     crearProducto(
//       "Camiseta Edición Limitada",
//       "https://via.placeholder.com/150",
//       "Ropa",
//       "Algodón",
//       ["S", "M"],
//       "Una camiseta exclusiva con diseño único.",
//       "Varias",
//       "$19.99"
//     );
//     crearProducto(
//       "Camiseta Edición Limitada",
//       "https://via.placeholder.com/150",
//       "Ropa",
//       "Algodón",
//       ["S", "M"],
//       "Una camiseta exclusiva con diseño único.",
//       "Varias",
//       "$19.99"
//     );
//     crearProducto(
//       "Camiseta Edición Limitada",
//       "https://via.placeholder.com/150",
//       "Ropa",
//       "Algodón",
//       ["S", "M"],
//       "Una camiseta exclusiva con diseño único.",
//       "Varias",
//       "$19.99"
//     );
//     crearProducto(
//       "Camiseta Edición Limitada",
//       "https://via.placeholder.com/150",
//       "Ropa",
//       "Algodón",
//       ["S", "M"],
//       "Una camiseta exclusiva con diseño único.",
//       "Varias",
//       "$19.99"
//     );
//     crearProducto(
//       "Camiseta Edición Limitada",
//       "https://via.placeholder.com/150",
//       "Ropa",
//       "Algodón",
//       ["S", "M"],
//       "Una camiseta exclusiva con diseño único.",
//       "Varias",
//       "$19.99"
//     );
//     crearProducto(
//       "Camiseta Edición Limitada",
//       "https://via.placeholder.com/150",
//       "Ropa",
//       "Algodón",
//       ["S", "M"],
//       "Una camiseta exclusiva con diseño único.",
//       "Varias",
//       "$19.99"
//     );
//     crearProducto(
//       "Camiseta Edición Limitada",
//       "https://via.placeholder.com/150",
//       "Ropa",
//       "Algodón",
//       ["S", "M"],
//       "Una camiseta exclusiva con diseño único.",
//       "Varias",
//       "$19.99"
//     );
//     // Añade más productos aquí si lo deseas
//   }
//   renderizarProductos(); // Asegúrate de llamar a renderizarProductos aquí para mostrar los productos inicialmente
// }

// function crearProducto(
//   name,
//   image,
//   category,
//   material,
//   sizes,
//   description,
//   measurements,
//   price
// ) {
//   let producto = {
//     name,
//     image,
//     category,
//     material,
//     sizes,
//     description,
//     measurements,
//     price,
//   };
//   publicacionesDos.push(producto);
//   localStorage.setItem("productos", JSON.stringify(publicacionesDos));
//   renderizarProductos(); // Llama a renderizarProductos cada vez que creas un producto para actualizar la vista
//   console.log(producto);
// }

// function borrarPublicacion(i) {
//   if (i >= 0 && i < publicacionesDos.length) {
//     publicacionesDos.splice(i, 1);
//     localStorage.setItem("productos", JSON.stringify(publicacionesDos));
//     renderizarProductos(); // Llama a renderizarProductos cada vez que borras un producto para actualizar la vista
//   }
// }

// function modificarProducto(
//   i,
//   nombre,
//   image,
//   category,
//   material,
//   sizes,
//   description,
//   measurements,
//   price
// ) {
//   if (i >= 0 && i < publicacionesDos.length) {
//     publicacionesDos[i] = {
//       nombre,
//       image,
//       category,
//       material,
//       sizes,
//       description,
//       measurements,
//       price,
//     };
//     localStorage.setItem("productos", JSON.stringify(publicacionesDos));
//     renderizarProductos(); // Llama a renderizarProductos cada vez que modificas un producto para actualizar la vista
//   }
// }

// function renderizarProductosPrecargados() {
//   const contenedorProductos = document.getElementById("contenedorProductos");
//   contenedorProductos.innerHTML = ""; // Limpia el contenedor de productos

//   publicacionesDos.forEach((producto, indice) => {
//     const tarjetaProducto = `
//       <div class="col-sm-4 mb-4">
//         <div class="card">
//           <img src="${producto.image}" class="card-img-top" alt="${producto.nombre}">
//           <div class="card-body">
//             <h5 class="card-title">${producto.name}</h5>
//             <p class="card-text">${producto.description}</p>
//             <p class="card-text">Precio: ${producto.price}</p>
//             <button onclick="borrarPublicacion(${indice})" class="btn btn-danger">Eliminar</button>
//             <!-- Aquí puedes agregar más botones o información -->
//           </div>
//         </div>
//       </div>
//     `;
//     contenedorProductos.innerHTML += tarjetaProducto; // Agrega la tarjeta al contenedor de productos
//   });
//   renderizarProductosPrecargados();
// }

// Arreglo global que contendrá los productos
let publicaciones = JSON.parse(localStorage.getItem("productos")) || [];

// Función para inicializar productos
function inicializarProductos() {
  // Si no hay productos en el almacenamiento local, crea algunos productos de ejemplo
  if (!publicaciones.length) {
    crearProductosEjemplo();
  }

  renderizarProductos();
}

// Función para crear productos de ejemplo
function crearProductosEjemplo() {
  crearProducto(
    "Vestido Casual Rojo Con Flores",
    "https://i.pinimg.com/originals/72/15/48/721548d2a9590c76e7c51bd2d1057f6b.jpg",
    "Ropa",
    "Algodón",
    ["S", "M"],
    "Marca princess polly, Seminuevo",
    "Varias",
    "$300"
  );
  crearProducto(
    "Vestido De Noche Negro",
    "https://i.pinimg.com/originals/75/e0/08/75e008e3c34555e568828cad06412094.jpg",
    "Ropa",
    "Algodón",
    ["S", "M"],
    "Marca Aqua, Seminuevo",
    "Varias",
    "$300"
  );
  crearProducto(
    "Vestido Elegante Rosa Con Negro",
    "https://i.pinimg.com/originals/49/83/7d/49837d1615d806dee14301f191a1dc6a.jpg",
    "Ropa",
    "Algodón",
    ["S", "M"],
    "Marca Olive&Alice, Seminuevo",
    "Varias",
    "$550"
  );
  crearProducto(
    "Vestido Elegante Negro Con Manchas Blancas",
    "https://i.pinimg.com/originals/4d/7f/d9/4d7fd9397c38722de3578916d2de90a6.jpg",
    "Ropa",
    "Algodón",
    ["S", "M"],
    "Marca Mele, Usado",
    "Varias",
    "$250"
  );
  crearProducto(
    "Vestido Elegante Rosa Con Negro",
    "https://i.pinimg.com/originals/d0/32/53/d032539e7b06eab008e8b7b8a8073577.jpg",
    "Ropa",
    "Algodón",
    ["S", "M"],
    "Marca Olive&Alice, Seminuevo",
    "Varias",
    "$550"
  );
  crearProducto(
    "Short Blanco",
    "https://i.pinimg.com/originals/7c/b0/03/7cb00303b49429c987ad9ca9a94b2a62.jpg",
    "Ropa",
    "Algodón",
    ["S", "M"],
    "Marca M7, Seminuevo",
    "Varias",
    "$300"
  );
  crearProducto(
    "Vestido Elegante De Encaje",
    "https://i.pinimg.com/originals/ee/81/cb/ee81cbfe2acbe749a42079037cf6c0f8.jpg",
    "Ropa",
    "Algodón",
    ["S", "M"],
    "Marca Olive&Alice, Usado",
    "Varias",
    "$300"
  );
  crearProducto(
    "Vestido Rojo Floreado Sin Manga",
    "https://i.pinimg.com/originals/e1/b7/78/e1b778b5f64cabbd8abafb7b747fc5f9.jpg",
    "Ropa",
    "Algodón",
    ["S", "M"],
    "Marca Zara, Seminuevo",
    "Varias",
    "$250"
  );
  crearProducto(
    "Vestido Strapless Morado",
    "https://i.pinimg.com/originals/26/9b/e8/269be8210b4f3c062b400e3b029fbba2.jpg",
    "Ropa",
    "Algodón",
    ["S", "M"],
    "Marca Zara, Nuevo con etiqueta",
    "Varias",
    "$550"
  );
  crearProducto(
    "Vestido Rosa Mexicano",
    "https://i.pinimg.com/originals/9b/4b/cd/9b4bcd2ee54e9f8554651dea93a5d5b5.jpg",
    "Ropa",
    "Algodón",
    ["S", "M"],
    "Marca Zara, Nuevo con etiqueta",
    "Varias",
    "$450"
  );
  
  
  // Agrega más productos aquí si lo deseas
}

// Función para crear un producto
function crearProducto(
  nombre,
  imagen,
  categoria,
  material,
  tallas,
  descripcion,
  medidas,
  precio
) {
  let producto = {
    nombre,
    imagen,
    categoria,
    material,
    tallas,
    descripcion,
    medidas,
    precio,
  };
  publicaciones.push(producto);
  localStorage.setItem("productos", JSON.stringify(publicaciones));
  renderizarProductos(); // Llama a renderizarProductos cada vez que creas un producto para actualizar la vista

}

// Función para borrar un producto
function borrarProducto(indice) {
  if (indice >= 0 && indice < publicaciones.length) {
    publicaciones.splice(indice, 1);
    localStorage.setItem("productos", JSON.stringify(publicaciones));
    renderizarProductos(); // Re-renderiza los productos después de borrar
  }
}




// Función para renderizar los productos
function renderizarProductos() {
  const contenedorProductos = document.getElementById("contenedorProductos");
  contenedorProductos.innerHTML = ""; // Limpia el contenedor de productos antes de renderizar

  publicaciones.forEach((producto, indice) => {
    const tarjetaProducto = `
      <div class="col-sm-4 mb-4">
        <div class="card">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text">Precio: ${producto.precio}</p>
            <button onclick="borrarProducto(${indice})" class="btn btn-danger">Eliminar</button> 
            <button onclick="agregarAlCarrito('${producto.nombre}')" class="btn btn-primary">Agregar al carrito</button>
            <!-- Aquí puedes agregar más botones o información -->
          </div>
        </div>
      </div>
    `;
    contenedorProductos.innerHTML += tarjetaProducto;
  });
}

// Llama a inicializarProductos cuando se carga la página
document.addEventListener("DOMContentLoaded", inicializarProductos);

