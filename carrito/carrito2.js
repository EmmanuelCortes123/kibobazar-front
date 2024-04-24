const btnsCarrito = document.querySelectorAll('.carrito');
const products = document.querySelectorAll('.card-product');
const counterCarritos = document.querySelector('.counter-carrito');





// Arreglo global que contendrá los productos


function inicializarProductos() {
  renderizarProductosC(); // Solo renderiza los productos existentes en Local Storage al inicializar
}




document.addEventListener("DOMContentLoaded", inicializarProductos);

document.addEventListener('DOMContentLoaded', () => {
  const contenedorProductos = document.getElementById('contenedorProductos');
  
  // Función para renderizar los productos
  function renderizarProductosCarritos() {
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
		if(producto.nombre === carrito.name){
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
								<button onclick="borrarProducto(${indice})"  class="cart">
									<i
										class="fa-solid fa-bag-shopping"
										id="favorite-regular"
										<abbr title="Elimiar de carrito"  ></abbr>
										
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

 // BORRA LOS ELEMENTOS QUE YA NO ME GUSTAN
  window.borrarProducto = (indice) => {
    let carrit = JSON.parse(localStorage.getItem('carrito')) || [];
	console.log(indice);
    carrit.splice(indice, 1);
    localStorage.setItem('carrito', JSON.stringify(carrit));
    renderizarProductosCarritos(); // Re-renderiza los productos después de borrar
  };

  // Llama a renderizarProductos al cargar la página
  renderizarProductosCarritos();
});


