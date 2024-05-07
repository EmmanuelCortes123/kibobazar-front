// Arreglo global que contendrá los productos


function inicializarProductos() {
	renderizarProductosCarrito(); // Solo renderiza los productos existentes en Local Storage al inicializar
  }
  
  
  
  
  document.addEventListener("DOMContentLoaded", inicializarProductos);
  
  document.addEventListener('DOMContentLoaded', () => {
	const contenedorProductos = document.getElementById('contenedorProductos');
	
	// Función para renderizar los productos
	function renderizarProductosCarrito() {
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
				  <img src="${producto.imagen}" class="card-img-top border border-dark border-2" alt="${producto.nombre}">
				  <div class="card-body">
				 	<h5 id="titulo" class="card-title text-center "><strong>${producto.nombre}</strong></h5>
					 <hr>
					 	<p class="card-text text-center ">${producto.descripcion}</p>
					 <hr>
					 <ul class="list-unstyled mb-3">
						<li><strong>Categoría:</strong> ${producto.categoria}</li>
						<li><strong>Material:</strong> ${producto.material}</li>
						<li><strong>Medidas:</strong> ${producto.medidas}</li>
						<li><strong>Tallas:</strong> ${producto.tallas}</li>
						<li><strong>Precio:</strong> ${producto.precio} MXN</p>
				  	 </ul>
							  <div class="container-buttons-card">
								  
								  <button onclick="borrarProductoCarrito(${indice})"class="cart">
									  <i class="fa-solid fa-bag-shopping" <abbr title="Quitar de la bolsa"></abbr> </i>
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
	window.borrarProductoCarrito = (indice) => {
	  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
	  console.log(indice);
	  carrito.splice(indice, 1);
	  localStorage.setItem('carrito', JSON.stringify(carrito));
	  renderizarProductosCarrito(); // Re-renderiza los productos después de borrar
	};
  
	// Llama a renderizarProductos al cargar la página
	renderizarProductosCarrito();
  });