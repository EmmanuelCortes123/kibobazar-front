
 
 //   <button onclick="agregarAlCarrito('${producto.nombre}')" class="btn btn-primary">Agregar al carrito</button> Arreglo global que contendrá los productos en el carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar un producto al carrito
function agregarAlCarrito(publicaciones) {
    // Simplemente mostramos una alerta de que el producto fue agregado al carrito
    alert(`¡"${publicaciones}" ha sido agregado al carrito!`);

    // Agregamos el producto al arreglo del carrito
    carrito.push(publicaciones);

    // Guardamos el carrito actualizado en el localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function borrarProducto(nombreProducto) {
    // Filtramos el arreglo del carrito para excluir el producto a eliminar
    carrito = carrito.filter(producto => producto !== nombreProducto);

    // Guardamos el carrito actualizado en el localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Volvemos a renderizar el carrito para reflejar los cambios
    renderizarCarrito();
}



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
                <button onclick="borrarProducto('${producto}')" class="btn btn-danger">Eliminar</button>
                        <h5 class="card-title">${producto}</h5>
                    </div>
                </div>
            </div>
        `;
        contenedorCarrito.innerHTML += productoHTML;
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



