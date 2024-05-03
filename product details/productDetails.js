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
let detalles = JSON.parse(localStorage.getItem("detalles")) || [];
let productos = JSON.parse(localStorage.getItem('productos')) || [];
function inicializarProductos() {
  console.log("Treceavo paso");
  renderizarProductDetails(); // Solo renderiza los productos existentes en Local Storage al inicializar
  console.log("Catorceavo paso");
}
const updateDetallesInLocalStorage = () => {
  localStorage.setItem('detalles', JSON.stringify(detalles));
};

document.addEventListener("DOMContentLoaded", inicializarProductos);

document.addEventListener('DOMContentLoaded', () => {
  function generarNumerosAleatorios() {
    var arreglo = [];
    
    // Generar números aleatorios únicos
    while (arreglo.length < 3) {
        var numeroAleatorio = Math.floor(Math.random() * (productos.length)); // Genera números entre 0 y 10
        
        // Verificar si el número generado ya está en el arreglo
        if (arreglo.indexOf(numeroAleatorio) === -1  && arreglo.indexOf(numeroAleatorio)!= detalles[0].id) {
            arreglo.push(numeroAleatorio);
        }
    }
    
    return arreglo;
  }
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
        <img src="${productos[deta].imagen}" class="m-1 w-100 sliderMainImage border border-dark" data-bs-toggle="modal"
             data-bs-target="#imageModal"/>
        
    </div>
    <style>
            .Info {
              display: flex;
            }

            .t1{
              margin: 0px 5px;

            }
            .t2{
              margin: 00px 25px;
              
            }
        </style>
    <div class="col-12 col-lg-6">
        <h2 class="mb-4 card-title" ><strong>${productos[deta].nombre}</strong></h2>
        <hr>
        <p class="mb-2 card-text">${productos[deta].descripcion}.</p>
        <hr>

        <h5 class="mb-4 card-title"><strong>Categoría:</strong> ${productos[deta].categoria}</h5>
        <h5 class="mb-4"><strong>Material:</strong> ${productos[deta].material}</h5>
        <div class="Info">
        <h6 class="t1 mb-4"><strong>Talla:</strong> ${productos[deta].tallas}</h6>
        <h6 class="t2 mb-4"><strong>Medidas:</strong> ${productos[deta].medidas}</h6>
        </div>
        <div>
        <h5 class="mb-4 card-title"><strong>Precio:</strong> ${productos[deta].precio} MXN</h5>
        </div>

            <button type="button" class="btn btn-outline-light m-2"
                    style="background-color: #7A88F2;">Agregar a tu carrito
            </button>
       
        
            <button type="button" class="btn btn-outline-light m-2"
            style="background-color: #7A88F2;">Agregar a favoritos
            </button>
       
    </div>
</div>



<div class="recomendations">
    <h1 class=" text-center mt-4 mb-5"> Te recomendamos los siguiente productos  </h1>
</div>
`;
 contenedorProductos.innerHTML = tarjetaProducto;

 

// Ejemplo de uso
var numeros = generarNumerosAleatorios();
console.log(numeros);

for(let i=0; i<3; i++){
  const tarjetaSuger = `
  <div class="col-sm-4 mt-4 mb-4">
 
  
 
  <div class="card" >
  <a class="image-link" href="../product details/productDetails.html" >
  <button onclick ="funcDetallesImpl(${numeros[i]})"> 
  <img src="${productos[numeros[i]].imagen}" class="card-img-top" alt="${productos[numeros[i]].nombre}">
  </button>
  </a>
  <div class="card-body">

    <h5 class="mb-4 card-title text-center" ><strong>${productos[numeros[i]].nombre}</strong></h5>
      <hr>
    <p class="mb-2 card-text text-center">${productos[numeros[i]].descripcion}.</p>
      <hr>
    <ul class="list-unstyled mb-3">
    <p class="card-text"><strong>Categoría:</strong> ${productos[numeros[i]].categoria}</p>
    <p class="card-text"><strong>Material:</strong> ${productos[numeros[i]].material}</p>
    <p class="card-text"><strong>Medidas:</strong> ${productos[numeros[i]].medidas}</p>
    <p class="card-text"><strong>Talla:</strong> ${productos[numeros[i]].tallas}</p>
    <p class="card-text"><strong>Precio:</strong> ${productos[numeros[i]].precio} MXN</p>

    </ul>
      
    </div>
  </div>`;
  contenedorProductos.innerHTML += tarjetaSuger;


}






  }


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