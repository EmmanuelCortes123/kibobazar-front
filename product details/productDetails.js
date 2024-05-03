

let carrit = JSON.parse(localStorage.getItem("carrito")) || [];
let favorit = JSON.parse(localStorage.getItem("favorite")) || [];
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
  const mensajeECarrito = document.getElementById("eliminadoCarrito");
  const mensajeACarrito = document.getElementById("agregadoCarrito");
  const mensajeEFavorito = document.getElementById("eliminadoFavorito");
  const mensajeAFavorito = document.getElementById("agregadoFavorito");
  function generarNumerosAleatorios() {
    var arreglo = [];
    
    // Generar números aleatorios únicos
    while (arreglo.length < 3) {
        var numeroAleatorio = Math.floor(Math.random() * (productos.length)); // Genera números entre 0 y 10
        
        // Verificar si el número generado ya está en el arreglo
        if (arreglo.indexOf(numeroAleatorio) === -1  && numeroAleatorio!= detalles[0].id) {
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
        <img src="${productos[deta].imagen}" class="m-1 w-100 sliderMainImage" data-bs-toggle="modal"
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
        <h1 class="mb-4" ><strong>${productos[deta].nombre}</strong></h1>
        <h2 class="mb-4">${productos[deta].categoria}</h2>
        <h3 class="mb-4">Material : ${productos[deta].material}</h3>
        <div class="Info">
        <h6 class="t1 mb-4">Talla: ${productos[deta].tallas}</h4>
        <h6 class="t2 mb-4">Medidas: ${productos[deta].medidas}</h4>
        </div>
        <h5 class="mb-4" ><strong> ${productos[deta].precio} MXN</strong></h5>
        <p class="mb-2">${productos[deta].descripcion}.</p>

        <div class="d-grid gap-2">
            <button onclick= "agCarrito(${deta})" type="button" class="btn btn-outline-light  btn-primary mt-5"
                    style="background-color: #7A88F2;">Agregar a tu carrito
            </button>
        </div>
        <div class="d-grid gap-2">
            <button onclick= "agFavorito(${deta})" type="button" class="btn btn-outline-light  btn-primary mt-5"
                    style="background-color: #pink;">Agregar a favoritos
            </button>
        </div>
    </div>
</div>



<div class="recomendations">
            <h4> TE RECOMENDAMOS LOS SIGUIENTES PRODUCTOS </h4>

</div>
`;
 contenedorProductos.innerHTML = tarjetaProducto;

 

// Ejemplo de uso
var numeros = generarNumerosAleatorios();
console.log(numeros);

for(let i=0; i<3; i++){
  const tarjetaSuger = `
  <div class="col-sm-4 mb-4">
 
  
 
  <div class="card" >
  <a class="image-link" href="../product details/productDetails.html" >
  <button onclick ="funcDetallesImpl(${numeros[i]})"> 
  <img src="${productos[numeros[i]].imagen}" class="card-img-top" alt="${productos[numeros[i]].nombre}">
  </button>
  </a>
  <div class="card-body">
    <h5 class="card-title">${productos[numeros[i]].nombre}</h5>
    <p class="card-text">${productos[numeros[i]].descripcion}</p>
    <p class="card-text">${productos[numeros[i]].categoria}</p>
    <p class="card-text">${productos[numeros[i]].material}</p>
    <p class="card-text">${productos[numeros[i]].medidas}</p>
    <p class="card-text">${productos[numeros[i]].tallas}</p>
    <p class="card-text">${productos[numeros[i]].precio}</p>
    
       
        
 
        
 
  
      
    </div>
  </div>`;
  contenedorProductos.innerHTML += tarjetaSuger;


}






  }




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
  // Re-renderiza los productos después de borrar
  };



  const agregarCarr=(fav)=>{
    const index= carrit.findIndex(
      element => element.name === fav.name
    );
  
    // FUNCION DE TIEMPO
   function mensajeDespuesDeSeisSegundos(index) {
      setTimeout(function() {
        if(index== -1){
          mensajeACarrito.style.display = "none";
          console.log("ya pasaron 6 segundos");
        }else{
          mensajeECarrito.style.display = "none";
          console.log("ya pasaron 6 segundos de que se elimino");
        }
          
      }, 6000); // 6000 milisegundos = 6 segundos
  }
  
    
  
    console.log("el resultado de la prueba es"+index);
    if (index > -1) {
      carrit.splice(index, 1);
      // AGREGAR ESTOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
  
      mensajeECarrito.style.display = "block";
      mensajeACarrito.style.display = "none";
      updateCarritoInLocalStorage();
      // IMPLEMENTACION DE FUNCION TIEMPO
      mensajeDespuesDeSeisSegundos(index);
     
    } else {
      carrit.push(fav);
      // IMPLEMENTAR FUNCION TIEMPO
      mensajeDespuesDeSeisSegundos(index);
      // AGREGAR ESTOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
      mensajeECarrito.style.display = "none";
      mensajeACarrito.style.display = "block";
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
    
  
   // Re-renderiza los productos después de borrar
  };


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
  


  // Función para actualizar el carrito en el Local Storage
  const updateCarritoInLocalStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrit));
  }
  updateFavoritesInLocalStorage= (favorito) => {
    localStorage.setItem('favorite', JSON.stringify(favorit));
  }

  // Llama a renderizarProductos al cargar la página
  console.log("Oncevo paso");
  renderizarProductDetails();
  console.log("Doceavo paso");
});