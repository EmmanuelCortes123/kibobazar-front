/*
// Arreglo global que contendrá los productos


function inicializarProductos() {
    console.log("Treceavo paso");
    renderizarProductDetails(); // Solo renderiza los productos existentes en Local Storage al inicializar
    console.log("Catorceavo paso");
}


document.addEventListener("DOMContentLoaded", inicializarProductos);

document.addEventListener('DOMContentLoaded', () => {
    console.log("Primer paso");
  const contenedorProductos = document.getElementById('contenedorProductos');
  console.log("Segundo paso");
  // Función para renderizar los productos
  function renderizarProductDetails() {
    console.log("Tercer paso");
    // Obtiene los productos del Local Storage
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    console.log("Cuarto paso");
    // Limpia el contenedor de productos
    contenedorProductos.innerHTML = '';
    console.log("Quinto paso");
    // Itera sobre el array de productos y crea la estructura HTML para cada uno
    productos.forEach((producto, indice) => {
      //console.log(prendas[indice]);
      console.log("Sexto paso");
	let carritos=JSON.parse(localStorage.getItem('carrito') )|| [];
    console.log("Septimo paso");
	  /////
	  
      let prueba = carritos[1].name;
      console.log("Octavo paso");

		console.log(prueba);
        console.log(producto.nombre +"este es el nombre de producto " + typeof(producto.nombre));
        console.log(carritos[1].name +"este es el nombre de prueba " + typeof(carritos[1].name));
		if(producto.nombre === prueba){

            console.log("Noveno paso");

			console.log("si jala");
			const tarjetaProducto = `
            
            <h1 class="text-center m-4" >Detalles de compra</h1>
            <!-- Product section start -->
             <div class="container">
              <div class="row py-5 g-5">
                <div class="col-12 col-lg-6">
                  <img src="${producto.imagen}" class="m-1 w-100 sliderMainImage" data-bs-toggle="modal" data-bs-target="#imageModal" alt="${producto.nombre}"/>
                  <div>
                    <img src="${producto.imagen}" width="60" class="m-1 sliderThumb"/>
                    <img src="${producto.imagen}" width="60" class="m-1 sliderThumb"/>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <h2 class="mb-4">${producto.nombre}</h2>
                  <h5 class="mb-4"><strong>${producto.precio}</strong></h5>
                  <p class="mb-2">${producto.descripcion}</p>
                  <h3 class="mb-4">${producto.categoria}</h3>
                  <h5 class="mb-4"> ${producto.tallas}</h5>
                  <h5 class="mb-4"> ${producto.material}</h5> 
                  <p class="mb-2 ">${producto.medidas}</p>
                  
        
                  <div class="d-grid gap-2">
                    <button type="button" class="btn btn-outline-light  btn-primary mt-5" style="background-color: #7A88F2;">Agregar a tu carrito</button>
                  </div>
            </div>
          </div>
          
          <div class="text-center">
          <h2 class="display-6 py-5">Te recomendamos</h2>
          <div class="d-flex justify-content-between align-items-center flex-column flex-lg-row my-5" >
            <div class="card m-2">
              <a href="#"><img class="card-img-top" height="300" src="../assets/img/ropa5.jpeg"/></a>
              <div class="card-body">
                <p class="card-text fw-bold">
                  Falda
                </p>
                <p class="small text-secondary">$100.00</p>
              </div>
            </div>
      
            <div class="card m-2">
              <a href="#"><img class="card-img-top" height="300" src="../assets/img/ropa5.jpeg"/></a>
              <div class="card-body">
                <p class="card-text fw-bold">
                  Falda
                </p>
                <p class="small text-secondary">$100.00</p>
              </div>
            </div>
      
            <div class="card m-2">
              <a href="#"><img class="card-img-top" height="300" src="../assets/img/ropa5.jpeg"/></a>
              <div class="card-body">
                <p class="card-text fw-bold">
                  Falda
                </p>
                <p class="small text-secondary">$100.00</p>
              </div>
            </div>
      
          </div>
      
        </div>
          
          `;

		  // Agrega la tarjeta al contenedor de productos
		  contenedorProductos.innerHTML += tarjetaProducto;
			console.log(indice);

            console.log("Decimo paso");

		  }
      
     });
  }

 // BORRA LOS ELEMENTOS QUE YA NO ME GUSTAN
  window.borrarProductoCarrito = (indice) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
	console.log(indice);
    carrito.splice(indice, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderizarProductDetails(); // Re-renderiza los productos después de borrar
  };

  // Llama a renderizarProductos al cargar la página
  console.log("Oncevo paso");
  renderizarProductDetails();
   console.log("Doceavo paso");
});

*/


/*
// Arreglo global que contendrá los productos

function inicializarProductos() {
  console.log("Treceavo paso");
  renderizarProductDetails(); // Solo renderiza los productos existentes en Local Storage al inicializar
  console.log("Catorceavo paso");
}

document.addEventListener("DOMContentLoaded", inicializarProductos);

document.addEventListener('DOMContentLoaded', () => {
  console.log("Primer paso");
  const contenedorProductos = document.getElementById('contenedorProductos');
  console.log("Segundo paso");
  // Función para renderizar los productos
  function renderizarProductDetails() {
    console.log("Tercer paso");
    // Obtiene los productos del Local Storage
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    console.log("Cuarto paso");
    // Obtiene el carrito del Local Storage
    let carritos = JSON.parse(localStorage.getItem('carrito')) || [];
    console.log("Quinto paso");
    // Limpia el contenedor de productos
    contenedorProductos.innerHTML = '';
    console.log("Sexto paso");
    // Itera sobre el array de productos y crea la estructura HTML para cada uno
    productos.forEach((producto, indice) => {
      console.log("Sexto paso");
      let encontrado = carritos.find(item => item.name === producto.nombre);
      console.log("Septimo paso");
      if (encontrado) {
        console.log("Octavo paso");
        console.log("si jala");
        const tarjetaProducto = `
          <h1 class="text-center m-4">Detalles de compra</h1>
          <!-- Product section start -->
          <div class="container">
            <div class="row py-5 g-5">
              <div class="col-12 col-lg-6">
                <img src="${producto.imagen}" class="m-1 w-100 sliderMainImage" data-bs-toggle="modal" data-bs-target="#imageModal" alt="${producto.nombre}" />
                <div>
                  <img src="${producto.imagen}" width="60" class="m-1 sliderThumb" />
                  <img src="${producto.imagen}" width="60" class="m-1 sliderThumb" />
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <h2 class="mb-4">${producto.nombre}</h2>
                <h5 class="mb-4"><strong>${producto.precio}</strong></h5>
                <p class="mb-2">${producto.descripcion}</p>
                <h3 class="mb-4">${producto.categoria}</h3>
                <h5 class="mb-4">${producto.tallas}</h5>
                <h5 class="mb-4">${producto.material}</h5>
                <p class="mb-2 ">${producto.medidas}</p>
        
                <div class="d-grid gap-2">
                  <button type="button" class="btn btn-outline-light  btn-primary mt-5" style="background-color: #7A88F2;">Agregar a tu carrito</button>
                </div>
              </div>
            </div>
          
            <div class="text-center">
              <h2 class="display-6 py-5">Te recomendamos</h2>
              <div class="d-flex justify-content-between align-items-center flex-column flex-lg-row my-5">
                <div class="card m-2">
                  <a href="#"><img class="card-img-top" height="300" src="../assets/img/ropa5.jpeg"/></a>
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      Falda
                    </p>
                    <p class="small text-secondary">$100.00</p>
                  </div>
                </div>
                <div class="card m-2">
                  <a href="#"><img class="card-img-top" height="300" src="../assets/img/ropa5.jpeg"/></a>
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      Falda
                    </p>
                    <p class="small text-secondary">$100.00</p>
                  </div>
                </div>
                <div class="card m-2">
                  <a href="#"><img class="card-img-top" height="300" src="../assets/img/ropa5.jpeg"/></a>
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      Falda
                    </p>
                    <p class="small text-secondary">$100.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
        // Agrega la tarjeta al contenedor de productos
        contenedorProductos.innerHTML += tarjetaProducto;
        console.log(indice);
        console.log("Decimo paso");
      }
    });
  }

  // BORRA LOS ELEMENTOS QUE YA NO ME GUSTAN
  window.borrarProductoCarrito = (indice) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    console.log(indice);
    carrito.splice(indice, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderizarProductDetails(); // Re-renderiza los productos después de borrar
  };

  // Llama a renderizarProductos al cargar la página
  console.log("Oncevo paso");
  renderizarProductDetails();
  console.log("Doceavo paso");
});

*/

/*
function inicializarProductos() {
  console.log("Treceavo paso");
  renderizarProductDetails(); // Solo renderiza los productos existentes en Local Storage al inicializar
  console.log("Catorceavo paso");
}

document.addEventListener("DOMContentLoaded", inicializarProductos);

document.addEventListener('DOMContentLoaded', () => {
  console.log("Primer paso");
  const contenedorProductos = document.getElementById('contenedorProductos');
  console.log("Segundo paso");
  // Función para renderizar los productos
  function renderizarProductDetails() {
    console.log("Tercer paso");
    // Obtiene los productos del Local Storage
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    console.log("Cuarto paso");
    // Obtiene el carrito del Local Storage
    let carritos = JSON.parse(localStorage.getItem('carrito')) || [];
    console.log("Quinto paso");
    // Limpia el contenedor de productos
    contenedorProductos.innerHTML = '';
    console.log("Sexto paso");
    // Itera sobre el array de productos y crea la estructura HTML para cada uno
    productos.forEach((producto, indice) => {
      console.log("Sexto paso");
      let encontrado = carritos.find(item => item.name === producto.nombre);
      console.log("Septimo paso");
      if (encontrado) {
        console.log("Octavo paso");
        console.log("si jala");
        const tarjetaProducto = `
          <h1 class="text-center m-4">Detalles de compra</h1>
          <!-- Product section start -->
          <div class="container">
            <div class="row py-5 g-5">
              <div class="col-12 col-lg-6">
                <img src="${producto.imagen}" class="m-1 w-100 sliderMainImage" data-bs-toggle="modal" data-bs-target="#imageModal" alt="${producto.nombre}" />
                <div>
                  <img src="${producto.imagen}" width="60" class="m-1 sliderThumb" />
                  <img src="${producto.imagen}" width="60" class="m-1 sliderThumb" />
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <h2 class="mb-4">${producto.nombre}</h2>
                <h5 class="mb-4"><strong>${producto.precio}</strong></h5>
                <p class="mb-2">${producto.descripcion}</p>
                <h3 class="mb-4">${producto.categoria}</h3>
                <h5 class="mb-4">${producto.tallas}</h5>
                <h5 class="mb-4">${producto.material}</h5>
                <p class="mb-2 ">${producto.medidas}</p>
        
                <div class="d-grid gap-2">
                  <button onclick="agregarAlCarrito(${indice})" class="btn btn-outline-light  btn-primary mt-5" style="background-color: #7A88F2;">Agregar a tu carrito</button>
                </div>
              </div>
            </div>
          
            <div class="text-center">
              <h2 class="display-6 py-5">Te recomendamos</h2>
              <div class="d-flex justify-content-between align-items-center flex-column flex-lg-row my-5">
                <div class="card m-2">
                  <a href="#"><img class="card-img-top" height="300" src="../assets/img/ropa5.jpeg"/></a>
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      Falda
                    </p>
                    <p class="small text-secondary">$100.00</p>
                  </div>
                </div>
                <div class="card m-2">
                  <a href="#"><img class="card-img-top" height="300" src="../assets/img/ropa5.jpeg"/></a>
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      Falda
                    </p>
                    <p class="small text-secondary">$100.00</p>
                  </div>
                </div>
                <div class="card m-2">
                  <a href="#"><img class="card-img-top" height="300" src="../assets/img/ropa5.jpeg"/></a>
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      Falda
                    </p>
                    <p class="small text-secondary">$100.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
        // Agrega la tarjeta al contenedor de productos
        contenedorProductos.innerHTML += tarjetaProducto;
        console.log(indice);
        console.log("Decimo paso");
      }
    });
  }

  // Agregar al carrito
  window.agregarAlCarrito = (indice) => {
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    let palabra = productos[indice].nombre;
    let fav = {
      name: palabra,
    };
    agregarAlCarrito(fav);
    renderizarProductDetails(); // Re-renderiza los productos después de agregar al carrito
  };

  // Agregar al carrito
  const agregarAlCarrito = (fav) => {
    const carritos = JSON.parse(localStorage.getItem('carrito')) || [];
    const index = carritos.findIndex(
      element => element.name === fav.name
    );

    console.log("el resultado de la prueba es" + index);
    if (index > -1) {
      carritos.splice(index, 1);
      updateCarritoInLocalStorage();
    } else {
      carritos.push(fav);
      updateCarritoInLocalStorage();
    }
  };

  // BORRA LOS ELEMENTOS QUE YA NO ME GUSTAN
  window.borrarProductoCarrito = (indice) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    console.log(indice);
    carrito.splice(indice, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderizarProductDetails(); // Re-renderiza los productos después de borrar
  };

  // Llama a renderizarProductos al cargar la página
  console.log("Oncevo paso");
  renderizarProductDetails();
  console.log("Doceavo paso");
});

*/

/*

function inicializarProductos() {
  console.log("Treceavo paso");
  renderizarProductDetails(); // Solo renderiza los productos existentes en Local Storage al inicializar
  console.log("Catorceavo paso");
}

document.addEventListener("DOMContentLoaded", inicializarProductos);

document.addEventListener('DOMContentLoaded', () => {
  console.log("Primer paso");
  const contenedorProductos = document.getElementById('contenedorProductos');
  console.log("Segundo paso");
  // Función para renderizar los productos
  function renderizarProductDetails() {
    console.log("Tercer paso");
    // Obtiene los productos del Local Storage
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    console.log("Cuarto paso");
    // Obtiene el carrito del Local Storage
    let carritos = JSON.parse(localStorage.getItem('carrito')) || [];
    console.log("Quinto paso");
    // Limpia el contenedor de productos
    contenedorProductos.innerHTML = '';
    console.log("Sexto paso");
    // Itera sobre el array de productos y crea la estructura HTML para cada uno
    productos.forEach((producto, indice) => {
      console.log("Sexto paso");
      let encontrado = carritos.find(item => item.name === producto.nombre);
      console.log("Septimo paso");
      if (encontrado) {
        console.log("Octavo paso");
        console.log("si jala");
        const tarjetaProducto = `
          <h1 class="text-center m-4">Detalles de compra</h1>
          <!-- Product section start -->
          <div class="container">
            <div class="row py-5 g-5">
              <div class="col-12 col-lg-6">
                <img src="${producto.imagen}" class="m-1 w-100 sliderMainImage" data-bs-toggle="modal" data-bs-target="#imageModal" alt="${producto.nombre}" />
                <div>
                  <img src="${producto.imagen}" width="60" class="m-1 sliderThumb" />
                  <img src="${producto.imagen}" width="60" class="m-1 sliderThumb" />
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <h2 class="mb-4">${producto.nombre}</h2>
                <h5 class="mb-4"><strong>${producto.precio}</strong></h5>
                <p class="mb-2">${producto.descripcion}</p>
                <h3 class="mb-4">${producto.categoria}</h3>
                <h5 class="mb-4">${producto.tallas}</h5>
                <h5 class="mb-4">${producto.material}</h5>
                <p class="mb-2 ">${producto.medidas}</p>
        
                <div class="d-grid gap-2">
                  <button onclick="agregarAlCarrito(${indice})" class="btn btn-outline-light  btn-primary mt-5" style="background-color: #7A88F2;">Agregar a tu carrito</button>
                </div>
              </div>
            </div>
          
            <div class="text-center">
              <h2 class="display-6 py-5">Te recomendamos</h2>
              <div class="d-flex justify-content-between align-items-center flex-column flex-lg-row my-5">
                <div class="card m-2">
                  <a href="#"><img class="card-img-top" height="300" src="../assets/img/ropa5.jpeg"/></a>
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      Falda
                    </p>
                    <p class="small text-secondary">$100.00</p>
                  </div>
                </div>
                <div class="card m-2">
                  <a href="#"><img class="card-img-top" height="300" src="../assets/img/ropa5.jpeg"/></a>
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      Falda
                    </p>
                    <p class="small text-secondary">$100.00</p>
                  </div>
                </div>
                <div class="card m-2">
                  <a href="#"><img class="card-img-top" height="300" src="../assets/img/ropa5.jpeg"/></a>
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      Falda
                    </p>
                    <p class="small text-secondary">$100.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
        // Agrega la tarjeta al contenedor de productos
        contenedorProductos.innerHTML += tarjetaProducto;
        console.log(indice);
        console.log("Decimo paso");
      }
    });
  }

  // Agregar al carrito
  window.agregarAlCarrito = (indice) => {
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    let palabra = productos[indice].nombre;
    let fav = {
      name: palabra,
    };
    agregarAlCarritoLocal(fav);
  };

  // Agregar al carrito
  const agregarAlCarritoLocal = (fav) => {
    const carritos = JSON.parse(localStorage.getItem('carrito')) || [];
    const index = carritos.findIndex(
      element => element.name === fav.name
    );

    console.log("el resultado de la prueba es" + index);
    if (index > -1) {
      carritos.splice(index, 1);
      updateCarritoInLocalStorage();
    } else {
      carritos.push(fav);
      updateCarritoInLocalStorage();
    }
    renderizarProductDetails(); // Re-renderiza los productos después de agregar al carrito
  };

  // BORRA LOS ELEMENTOS QUE YA NO ME GUSTAN
  window.borrarProductoCarrito = (indice) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    console.log(indice);
    carrito.splice(indice, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderizarProductDetails(); // Re-renderiza los productos después de borrar
  };

  // Llama a renderizarProductos al cargar la página
  console.log("Oncevo paso");
  renderizarProductDetails();
  console.log("Doceavo paso");
});

*/

/*

function inicializarProductos() {
  console.log("Treceavo paso");
  renderizarProductDetails(); // Solo renderiza los productos existentes en Local Storage al inicializar
  console.log("Catorceavo paso");
}

document.addEventListener("DOMContentLoaded", inicializarProductos);

document.addEventListener('DOMContentLoaded', () => {
  console.log("Primer paso");
  const contenedorProductos = document.getElementById('contenedorProductos');
  console.log("Segundo paso");
  // Función para renderizar los productos
  function renderizarProductDetails() {
    console.log("Tercer paso");
    // Obtiene los productos del Local Storage
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    console.log("Cuarto paso");
    // Obtiene el carrito del Local Storage
    let carritos = JSON.parse(localStorage.getItem('carrito')) || [];
    console.log("Quinto paso");
    // Limpia el contenedor de productos
    contenedorProductos.innerHTML = '';
    console.log("Sexto paso");
    // Itera sobre el array de productos y crea la estructura HTML para cada uno
    productos.forEach((producto, indice) => {
      console.log("Sexto paso");
      let encontrado = carritos.find(item => item.name === producto.nombre);
      console.log("Septimo paso");
      if (encontrado) {
        console.log("Octavo paso");
        console.log("si jala");
        const tarjetaProducto = `
          <h1 class="text-center m-4">Detalles de compra</h1>
          <!-- Product section start -->
          <div class="container">
            <div class="row py-5 g-5">
              <div class="col-12 col-lg-6">
                <img src="${producto.imagen}" class="m-1 w-100 sliderMainImage" data-bs-toggle="modal" data-bs-target="#imageModal" alt="${producto.nombre}" />
                <div>
                  <img src="${producto.imagen}" width="60" class="m-1 sliderThumb" />
                  <img src="${producto.imagen}" width="60" class="m-1 sliderThumb" />
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <h2 class="mb-4">${producto.nombre}</h2>
                <h5 class="mb-4"><strong>${producto.precio}</strong></h5>
                <p class="mb-2">${producto.descripcion}</p>
                <h3 class="mb-4">${producto.categoria}</h3>
                <h5 class="mb-4">${producto.tallas}</h5>
                <h5 class="mb-4">${producto.material}</h5>
                <p class="mb-2 ">${producto.medidas}</p>
    
                <div class="d-grid gap-2">
                  <button onclick="agregarAlCarrito(${indice})" class="btn btn-outline-light  btn-primary mt-5" style="background-color: #7A88F2;">Agregar a tu carrito</button>
                </div>
              </div>
            </div>
          
            <div class="text-center">
              <h2 class="display-6 py-5">Te recomendamos</h2>
              <div class="d-flex justify-content-between align-items-center flex-column flex-lg-row my-5">
                <div class="card m-2">
                  <a href="#"><img class="card-img-top" height="300" src="../assets/img/ropa5.jpeg"/></a>
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      Falda
                    </p>
                    <p class="small text-secondary">$100.00</p>
                  </div>
                </div>
                <div class="card m-2">
                  <a href="#"><img class="card-img-top" height="300" src="../assets/img/ropa5.jpeg"/></a>
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      Falda
                    </p>
                    <p class="small text-secondary">$100.00</p>
                  </div>
                </div>
                <div class="card m-2">
                  <a href="#"><img class="card-img-top" height="300" src="../assets/img/ropa5.jpeg"/></a>
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      Falda
                    </p>
                    <p class="small text-secondary">$100.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
        // Agrega la tarjeta al contenedor de productos
        contenedorProductos.innerHTML += tarjetaProducto;
        console.log(indice);
        console.log("Decimo paso");
      }
    });
  }

  // Agregar al carrito
  window.agregarAlCarrito = (indice) => {
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    let palabra = productos[indice].nombre;
    let fav = {
      name: palabra,
    };
    agregarAlCarritoLocal(fav);
  };

  // Agregar al carrito
  const agregarAlCarritoLocal = (fav) => {
    const carritos = JSON.parse(localStorage.getItem('carrito')) || [];
    const index = carritos.findIndex(
      element => element.name === fav.name
    );

    console.log("el resultado de la prueba es" + index);
    if (index > -1) {
      carritos.splice(index, 1);
      updateCarritoInLocalStorage(carritos); // Corrección
    } else {
      carritos.push(fav);
      updateCarritoInLocalStorage(carritos); // Corrección
    }
    renderizarProductDetails(); // Re-renderiza los productos después de agregar al carrito
  };

  // BORRA LOS ELEMENTOS QUE YA NO ME GUSTAN
  window.borrarProductoCarrito = (indice) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    console.log(indice);
    carrito.splice(indice, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderizarProductDetails(); // Re-renderiza los productos después de borrar
  };

  // Función para actualizar el carrito en el Local Storage
  const updateCarritoInLocalStorage = (carritos) => {
    localStorage.setItem('carrito', JSON.stringify(carritos));
  }

  // Llama a renderizarProductos al cargar la página
  console.log("Oncevo paso");
  renderizarProductDetails();
  console.log("Doceavo paso");
});
*/

function inicializarProductos() {
  console.log("Treceavo paso");
  renderizarProductDetails(); // Solo renderiza los productos existentes en Local Storage al inicializar
  console.log("Catorceavo paso");
}

document.addEventListener("DOMContentLoaded", inicializarProductos);

document.addEventListener('DOMContentLoaded', () => {
  console.log("Primer paso");
  const contenedorProductos = document.getElementById('contenedorProductos');
  console.log("Segundo paso");
  // Función para renderizar los productos
  function renderizarProductDetails() {
    console.log("Tercer paso");
    // Obtiene los productos del Local Storage
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    console.log("Cuarto paso");
    // Obtiene el carrito del Local Storage
    let detalles = JSON.parse(localStorage.getItem('detalles')) || [];
    console.log("Quinto paso");
    // Limpia el contenedor de productos
    contenedorProductos.innerHTML = '';
    
    let deta=detalles[0].id;
    console.log(productos[deta].nombre);
    
    // Itera sobre el array de productos y crea la estructura HTML para cada uno


    const tarjetaProducto = `
    <div class="row py-5 g-5">
    <div class="col-12 col-lg-6">
        <img src="${productos[deta].imagen}" class="m-1 w-100 sliderMainImage" data-bs-toggle="modal"
             data-bs-target="#imageModal"/>
        <div>
            <img src="../assets/img/ropa2.jpeg" width="60" class="m-1 sliderThumb"/>
            <img src="../assets/img/ropa3.jpeg" width="60" class="m-1 sliderThumb"/>
        </div>
    </div>
    <div class="col-12 col-lg-6">
        <h1 class="mb-4">Detalles de compra</h1>
        <h5 class="mb-4"><strong> ${productos[deta].precio} MXN</strong></h5>
        <p class="mb-2">${productos[deta].descripcion}.</p>
        <h6><small class="text-muted">by Dior</small></h6>

        <div class="d-grid gap-2">
            <button type="button" class="btn btn-outline-light  btn-primary mt-5"
                    style="background-color: #7A88F2;">Agregar a tu carrito
            </button>
        </div>
    </div>
</div>
`;

 
    contenedorProductos.innerHTML = tarjetaProducto;



  }

  // Agregar al carrito
  window.agregarAlCarrito = (indice) => {
    let productos = JSON.parse(localStorage.getItem('productos')) || [];
    let palabra = productos[indice].nombre;
    let fav = {
      name: palabra,
    };
    agregarAlCarritoLocal(fav);
  };

  // Agregar al carrito
  const agregarAlCarritoLocal = (fav) => {
    const carritos = JSON.parse(localStorage.getItem('carrito')) || [];
    const index = carritos.findIndex(
      element => element.name === fav.name
    );

    console.log("el resultado de la prueba es" + index);
    if (index > -1) {
      carritos.splice(index, 1);
    }
    carritos.push(fav);
    updateCarritoInLocalStorage(carritos); // Corrección
    renderizarProductDetails(); // Re-renderiza los productos después de agregar al carrito
  };

  // BORRA LOS ELEMENTOS QUE YA NO ME GUSTAN
  window.borrarProductoCarrito = (indice) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    console.log(indice);
    carrito.splice(indice, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderizarProductDetails(); // Re-renderiza los productos después de borrar
  };

  // Función para actualizar el carrito en el Local Storage
  const updateCarritoInLocalStorage = (carritos) => {
    localStorage.setItem('carrito', JSON.stringify(carritos));
  }

  // Llama a renderizarProductos al cargar la página
  console.log("Oncevo paso");
  renderizarProductDetails();
  console.log("Doceavo paso");
});