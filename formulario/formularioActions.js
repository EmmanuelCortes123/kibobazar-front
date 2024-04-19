// Arreglo global que contendrá los productos
let publicaciones = JSON.parse(localStorage.getItem("productos")) || [];
let favorit = JSON.parse(localStorage.getItem("favorite")) || [];

function inicializarProductos() {
  renderizarProductos(); // Solo renderiza los productos existentes en Local Storage al inicializar
}

const updateFavoritesInLocalStorage = () => {
	localStorage.setItem('favorites', JSON.stringify(favorites));
};

function crearProducto(name, image, category, material, sizes, description, measurements, price) {
  let producto = { name, image, category, material, sizes, description, measurements, price };
  publicaciones.push(producto);
  localStorage.setItem("productos", JSON.stringify(publicaciones));
  renderizarProductos(); // Actualiza la vista cada vez que se crea un producto
}

function borrarPublicacion(i) {
  if (i >= 0 && i < publicaciones.length) {
    publicaciones.splice(i, 1);
    localStorage.setItem("productos", JSON.stringify(publicaciones));
    renderizarProductos(); // Actualiza la vista cada vez que se borra un producto
  }
}

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
									<i
										class="fa-solid fa-heart"
										id="added-favorite"
									> favorito</i>
								</button>

								<button class="cart">
									<i class="fa-solid fa-bag-shopping" <abbr title="Agregar a la bolsa">B</abbr> </i>
									
								</button>
							</div>

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


 
  
/////prueba 1 SE QUEDA
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
///prueba 1 SE QUEDA
  window.agFavorito = (indice) => {
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    let palabra= productos[indice].nombre;
    let favo={
      name:palabra,
    };
    agregarFav(favo);
    renderizarProductos(); // Re-renderiza los productos después de borrar
  };


///propuesta 2
  window.agregarFavorito = (indice) => {
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    let palabra= productos[indice].nombre;
    let favo={
      name:palabra,
    };
    favorit.push(favo);
    localStorage.setItem('favorite', JSON.stringify(favorit));
    renderizarProductos(); // Re-renderiza los productos después de borrar
  };

  //  el boton de borrar producto
  window.borrarProducto = (indice) => {
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    productos.splice(indice, 1);
    localStorage.setItem('productos', JSON.stringify(productos));
    renderizarProductos(); // Re-renderiza los productos después de borrar
  };

//propuesta 2
 window.borrarFavorito = (indice) => {
    let productos = JSON.parse(localStorage.getItem('favorite')) || [];
    productos.splice(indice, 1);
    localStorage.setItem('favorite', JSON.stringify(productos));

    renderizarProductos(); // Re-renderiza los productos después de borrar
  };
 
  


 


  
  // Llama a renderizarProductos al cargar la página
  renderizarProductos();
});
