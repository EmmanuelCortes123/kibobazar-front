

 //   <button onclick="agregarAlCarrito('${producto.nombre}')" class="btn btn-primary">Agregar al carrito</button> Arreglo global que contendrá los productos en el carrito
 let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// Función para agregar un producto al carrito


function borrarProductoCarrito(nombreProducto) {
    // Filtramos el arreglo del carrito para excluir el producto a eliminar
    carrito = carrito.filter(producto => producto !== nombreProducto);

    // Guardamos el carrito actualizado en el localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Volvemos a renderizar el carrito para reflejar los cambios
    renderizarCarrito();
}


/*
// Función para renderizar los productos en el carrito
function renderizarCarrito() {
    const contenedorCarrito = document.getElementById("contenedorCarrito");
    contenedorCarrito.innerHTML = ""; // Limpiamos el contenedor del carrito


    

    // Iteramos sobre el arreglo del carrito y generamos la tarjeta HTML para cada producto
    carrito.forEach(producto => {
        const productoHTML = `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text">Precio: ${producto.precio}</p>
                <button onclick="borrarProductoCarrito('${producto}')" class="btn btn-danger">Eliminar</button>
                        <h5 class="card-title">${producto}</h5>
                    </div>
                </div>
            </div>
        `;
        contenedorCarrito.innerHTML += productoHTML;
    }); 

  
}
*/

function renderizarCarrito() {
    // Obtiene los productos del Local Storage
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    
    // Limpia el contenedor de productos
    contenedorProductos.innerHTML = '';
    
    // Itera sobre el array de productos y crea la estructura HTML para cada uno
    productos.forEach((producto, indice) => {
      //console.log(prendas[indice]);
	   
	let carritos=JSON.parse(localStorage.getItem('carrito') )|| [];
	
	  /////
	  carritos.forEach((carrito,indice)=>{
		

		console.log(carrito);
		if(producto.nombre === carrito){
			console.log("si jala");
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
								<button onclick="borrarProductoCarrito(${indice})"  class="favorite">
									<i
										class="fa-regular fa-heart"
										id="favorite-regular"
										<abbr title="Elimiar de favoritos"  ></abbr>
										
									</i>
									<i
										class="fa-solid fa-heart"
										id="added-favorite"
									></i>
								</button>
								<button class="cart">
									<i class="fa-solid fa-bag-shopping" <abbr title="Agregar a la bolsa"></abbr> </i>
									
								</button>
							</div>

				</div>
			  </div>
			</div>`;
		  
		  // Agrega la tarjeta al contenedor de productos
		  contenedorProductos.innerHTML += tarjetaProducto;
			console.log(indice);
		  }

	  })
      
     });
  }


// Llamamos a la función de renderizarCarrito para mostrar los productos en el carrito al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    // Renderizamos los productos en el carrito
    renderizarCarrito();
}); 

function irAlCarrito() {
    window.location.href = "./carrito.html";
}  



