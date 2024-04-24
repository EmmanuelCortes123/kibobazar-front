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




//--------------- BORRAR PRODUCTO DE PRODUCTOS
function borrarPublicacion(i) {
  if (i >= 0 && i < publicaciones.length) {
    publicaciones.splice(i, 1);
    localStorage.setItem("productos", JSON.stringify(publicaciones));
    renderizarProductos(); // Actualiza la vista cada vez que se borra un producto
  }
}



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
    
    // Itera sobre el array de productos y crea la estructura HTML para cada uno
    productos.forEach((producto, indice) => {
      const tarjetaProducto = `
        <div class="col-sm-4 mb-4">
          <div class="card">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">${producto.descripcion}</p>
              <p class="card-text">${producto.categoria}</p>
              <p class="card-text">${producto.material}</p>
              <p class="card-text">${producto.medidas}</p>
              <p class="card-text">${producto.tallas}</p>
              <p class="card-text">${producto.precio}</p>
              
     
              <div class="container-buttons-card">

                <button onclick ="borrarProducto(${indice})" class="cart">
									<i class="fa-solid fa-bag-shopping"</i> X
									
								</button>

								<button onclick="agFavorito(${indice})"  class="favorite">
									<i
										class="fa-regular fa-heart"
										id="favorite-regular"
										<abbr title="Elimiar de favoritos"  > MG</abbr>					
									</i>
								</button>

								<button onclick="agCarrito(${indice})" class="cart">
									<i class="fa-solid fa-bag-shopping" <abbr title="Agregar a la bolsa">B</abbr> </i>
									
								</button>

                <button onclick="verProducto(${indice})" class="btn btn-outline-light  btn-primary" style="background-color: #7A88F2;">
                  V
                </button>

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


 
  
//-------------------------------------------------------- PARTE DE FAVORITOS AGREGAR ----------------------------------
 const agregarFav=(favo)=>{
    const index= favorit.findIndex(
      element => element.name === favo.name
    );

    console.log("el resultado de la prueba es"+index);
    if (index > -1) {
      favorit.splice(index, 1);
      updateFavoritesInLocalStorage();
    } else {
      favorit.push(favo);
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
  alert(`¡"${nombreProducto}" ha sido agregado afavorito!`);
    renderizarProductos(); // Re-renderiza los productos después de borrar
  };

//----------------------------------------------------------PARTE DE FAVORITOS AGREGAR --------------------------------------------


//-------------------------------------------------------- PARTE DE CARRITO AGREGAR ----------------------------------
const agregarCarr=(fav)=>{
  const index= carrit.findIndex(
    element => element.name === fav.name
  );

  console.log("el resultado de la prueba es"+index);
  if (index > -1) {
    carrit.splice(index, 1);
    updateCarritoInLocalStorage();
  } else {
    carrit.push(fav);
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
  alert(`¡"${nombreProducto}" ha sido agregado al carrito!`);

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