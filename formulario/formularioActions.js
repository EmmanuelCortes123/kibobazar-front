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
let favorit = JSON.parse(localStorage.getItem("favorite")) || [];
let carrit= JSON.parse(localStorage.getItem("carrito")) || [];

// DEJAR ESTE EMN LOCALSTORAGE
let detalles = JSON.parse(localStorage.getItem("detalles")) || [];


function inicializarProductos() {
  renderizarProductos(); // Solo renderiza los productos existentes en Local Storage al inicializar
}




const updateFavoritesInLocalStorage = () => {
	localStorage.setItem('favorites', JSON.stringify(favorites));
};

const updateCarritoInLocalStorage = () => {
	localStorage.setItem('carrito', JSON.stringify(carritos));
};



//----------------- CREAR PRODUCTO DE PRODUCTOS
function crearProducto(name, image, category, material, sizes, description, measurements, price) {
  let producto = { name, image, category, material, sizes, description, measurements, price };
  publicaciones.push(producto);
  localStorage.setItem("productos", JSON.stringify(publicaciones));
  renderizarProductos(); // Actualiza la vista cada vez que se crea un producto
}

//------------------------ FUNCION INSERVIBLE -------------------

let publicaciones2 = JSON.parse(localStorage.getItem("productos")) || [];

// Función para inicializar productos
function inicializarProductos() {
  // Si no hay productos en el almacenamiento local, crea algunos productos de ejemplo
  if (!publicaciones2.length) {
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

//----------------- CREAR PRODUCTO DE PRODUCTOS
function crearProducto(
  nombre,
  imagen,
  categoria,
  material,
  tallas,
  descripcion,
  medidas,
  precio,
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
  renderizarProductos(); // Actualiza la vista cada vez que se crea un producto
  
}



//--------------------------------TERMINA LA FUNCIÓN INSERVIBLE-------------------------------


//--------------- BORRAR PRODUCTO DE PRODUCTOS
function borrarPublicacion(i) {
  if (i >= 0 && i < publicaciones.length) {
    publicaciones.splice(i, 1);
    localStorage.setItem("productos", JSON.stringify(publicaciones));
    renderizarProductos(); // Actualiza la vista cada vez que se borra un producto
  }
}

//-------------------PRECARGAOS -----------------------------------------



function renderizarProductos() {
  const contenedorProductos = document.getElementById("contenedorProductos");
  contenedorProductos.innerHTML = ""; // Limpia el contenedor de productos antes de renderizar

  publicaciones.forEach((producto, indice) => {
    const tarjetaProducto = `
<div class="col-sm-4 mb-4">
  <div class="card h-100 border-0">
    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.descripcion}</p>
      <p class="card-text">${producto.precio}MXN</p>
    </div>
    <div class="card-footer">
      <button onclick="borrarProducto(${indice})" class="btn btn-danger">Eliminar</button>
      <!-- Aquí puedes agregar más botones o información -->
    </div>
    <div class="overlay"></div>
  </div>
</div>


    `;
    contenedorProductos.innerHTML += tarjetaProducto;
  });
}

// Llama a inicializarProductos cuando se carga la página
document.addEventListener("DOMContentLoaded", inicializarProductos);

//--------------------MODIFICAR PRODUCTO DE PRODUCTOS
function modificarProducto(i, name, image, category, material, sizes, description, measurements, price) {
  if (i >= 0 && i < publicaciones.length) {
    publicaciones[i] = { name, image, category, material, sizes, description, measurements, price };
    localStorage.setItem("productos", JSON.stringify(publicaciones));
    renderizarProductos(); // Actualiza la vista cada vez que se modifica un producto
  }
}




 // <button onclick="agFavorito(${indice})" class="favorite">Me gusta</button>

document.addEventListener("DOMContentLoaded", inicializarProductos);





document.addEventListener('DOMContentLoaded', () => {
  const contenedorProductos = document.getElementById('contenedorProductos');
  
  // Función para renderizar los productos
  function renderizarProductos() {
    // Obtiene los productos del Local Storage
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    
    // Limpia el contenedor de productos
    contenedorProductos.innerHTML = '';
    
    

    // button onclick ="funcDetallesImpl(${indice})"
// href="../product details/productDetails.html"
    // Itera sobre el array de productos y crea la estructura HTML para cada uno
    productos.forEach((producto, indice) => {
      const tarjetaProducto = `
        <div class="col-sm-4 mb-4">
<<<<<<< HEAD
          <div class="card">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
              <h5 class="card-title text-center">${producto.nombre}</h5>
              <hr>
              <p class="card-text text-center">${producto.descripcion}</p>
              <hr>
              <ul class="list-unstyled mb-3">
                <li><strong>Categoría:</strong> ${producto.categoria}</li>
                <li><strong>Material:</strong> ${producto.material}</li>
                <li><strong>Medidas:</strong> ${producto.medidas}</li>
                <li><strong>Tallas:</strong> ${producto.tallas}</li>
              <li><strong>Precio:</strong> ${producto.precio}</p>
              </ul>
=======

        

        <div class="card">
        <a class="image-link" href="../product details/productDetails.html" >
        <button onclick ="funcDetallesImpl(${indice})"> 
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        </button>
        </a>
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <p class="card-text">${producto.categoria}</p>
          <p class="card-text">${producto.material}</p>
          <p class="card-text">${producto.medidas}</p>
          <p class="card-text">${producto.tallas}</p>
          <p class="card-text">${producto.precio} MXN</p>

              <div class="container-buttons-card">

              <button class="btnsNew fa-solid fa-envelope" onclick ="borrarProducto(${indice})" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 748 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                
              </button>

              <button onclick="agFavorito(${indice})"  class="favorite">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 748 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
                <i
                  class="fa-solid fa-heart"
                  id="added-favorite"
                > favorito</i>
              </button>

              <button onclick="agCarrito(${indice})" class="cart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 748 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
                
              </button>
>>>>>>> 39aa74f9ec8eb74b7d6d0520e1392c254d2419e7

              

              <div class="container-buttons-card d-flex justify-content-between">
                <div class="d-flex align-items-center">

                  <button class="btnsNew fa-solid fa-envelope " onclick ="borrarProducto(${indice})" >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 748 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                  <title>Eliminar Producto</title>
                  </svg>
                  </button>

                  <button onclick="agFavorito(${indice})"  class="favorite">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  <title>Agregar a Favoritos</title>
                  </svg>
                    <i
                      class="fa-solid fa-heart"
                      id="added-favorite"
                    > favorito</i>
                  </button>

                  <button onclick="agCarrito(${indice})" class="cart">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 748 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                  <title>Agregar al Carrito</title>
                  </svg>
                  </button>
                </div>
							</div>
          </div>
        </div>`;
      
      // Agrega la tarjeta al contenedor de productos
      contenedorProductos.innerHTML += tarjetaProducto;
    });
  }


  const updateFavoritesInLocalStorage = () => {
    localStorage.setItem('favorite', JSON.stringify(favorit));
  };

  const updateCarritoInLocalStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrit));
  };

  const updateDetallesInLocalStorage = () => {
    localStorage.setItem('detalles', JSON.stringify(detalles));
  };


 
  
//-------------------------------------------------------- PARTE DE FAVORITOS AGREGAR ----------------------------------
 const agregarFav=(favo)=>{
    const index= favorit.findIndex(
      element => element.name === favo.name
    );

    console.log("el resultado de la prueba es"+index);
    if (index > -1) {
      favorit.splice(index, 1);
      alert(`¡"${favo.name}" ha sido eliminado de favoritos`);
      updateFavoritesInLocalStorage();
    } else {
      favorit.push(favo);
      alert(`¡"${favo.name}" ha sido agregado del favoritos`);
      updateFavoritesInLocalStorage();
    }

  };
  window.agFavorito = (indice) => {
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    let nombreProducto = productos[indice].nombre;

  // Agregar el producto al carrito
  let favo = {
    name: nombreProducto,
  };
    agregarFav(favo);

    // Mostrar la alerta
 
    renderizarProductos(); // Re-renderiza los productos después de borrar
  };

//----------------------------------------------------------PARTE DE FAVORITOS AGREGAR --------------------------------------------


window.funcDetallesImpl=(indice)=>{
  let det={
    id:indice,
  };
// borra el local storage de detalles
  detalles.splice(0,1);
  // falta funcion hacerla
  // actualiza local storage detalles
  updateDetallesInLocalStorage();
// agrega el valor del indice a detalles en localstorage
  detalles.push(det);
  // actualiza el local
  updateDetallesInLocalStorage();

};



//-------------------------------------------------------- PARTE DE CARRITO AGREGAR ----------------------------------
const agregarCarr=(fav)=>{
  const index= carrit.findIndex(
    element => element.name === fav.name
  );

  console.log("el resultado de la prueba es"+index);
  if (index > -1) {
    carrit.splice(index, 1);
    alert(`¡"${fav.name}" ha sido eliminado al carrito!`);
    updateCarritoInLocalStorage();
   
  } else {
    carrit.push(fav);
    alert(`¡"${fav.name}" ha sido agregado del carrito!`);
    updateCarritoInLocalStorage();
    
  }

};
window.agCarrito = (indice) => {
  let productos = JSON.parse(localStorage.getItem('productos')) || [];
  let nombreProducto = productos[indice].nombre;

  // Agregar el producto al carrito
  let fav = {
    name: nombreProducto,
  };
  agregarCarr(fav);

  // Mostrar la alerta
  

  renderizarProductos(); // Re-renderiza los productos después de borrar
};

//----------------------------------------------------------PARTE DE CARRITO AGREGAR --------------------------------------------



  //  el boton de borrar producto
  window.borrarProducto = (indice) => {
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    productos.splice(indice, 1);
    localStorage.setItem('productos', JSON.stringify(productos));
    renderizarProductos(); // Re-renderiza los productos después de borrar
  };

  
  // Llama a renderizarProductos al cargar la página
  renderizarProductos();
});