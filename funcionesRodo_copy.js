// // Arreglo global que contendrá los productos
// let publicaciones = JSON.parse(localStorage.getItem("productos")) || [];

// function inicializarProductos() {
//   if (!publicaciones.length) {
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
//   publicaciones.push(producto);
//   localStorage.setItem("productos", JSON.stringify(publicaciones));
//   renderizarProductos(); // Llama a renderizarProductos cada vez que creas un producto para actualizar la vista
//   console.log(producto);
// }

// function borrarPublicacion(i) {
//   if (i >= 0 && i < publicaciones.length) {
//     publicaciones.splice(i, 1);
//     localStorage.setItem("productos", JSON.stringify(publicaciones));
//     renderizarProductos(); // Llama a renderizarProductos cada vez que borras un producto para actualizar la vista
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
//     renderizarProductos(); // Llama a renderizarProductos cada vez que modificas un producto para actualizar la vista
//   }
// }

// function renderizarProductos() {
//   const contenedorProductos = document.getElementById("contenedorProductos");
//   contenedorProductos.innerHTML = ""; // Limpia el contenedor de productos

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
//     contenedorProductos.innerHTML += tarjetaProducto; // Agrega la tarjeta al contenedor de productos
//   });
// }

// document.addEventListener("DOMContentLoaded", inicializarProductos);

document.addEventListener("DOMContentLoaded", () => {
  const formularioContacto = document.getElementById("formularioContacto");
  const imagenForm = document.getElementById("imagen");
  const categoriasForm = document.getElementById("categoria");
  const medidasForm = document.getElementById("medidas");
  const tallasForm = document.getElementById("tallas");
  const materialForm = document.getElementById("material");
  const descripcionForm = document.getElementById("descripcion");
  const precioForm = document.getElementById("precio");
  const nombreForm = document.getElementById("nombre");
  const mensajeError = document.getElementById("alerta");
  const mensajeValidado = document.getElementById("alertaCorrecta");
  const productosContainer = document.getElementById("contenedorProductos");

  formularioContacto.addEventListener("submit", (event) => {
    event.preventDefault();
    const regex = /^[a-zA-Z0-9\s]*$/;
    let valido = true;

    if (
      nombreForm.value.trim() === "" ||
      !regex.test(nombreForm.value.trim()) ||
      categoriasForm.value.trim() === "" ||
      !regex.test(categoriasForm.value.trim()) ||
      medidasForm.value.trim() === "" ||
      !regex.test(medidasForm.value.trim()) ||
      tallasForm.value.trim() === "" ||
      !regex.test(tallasForm.value.trim()) ||
      materialForm.value.trim() === "" ||
      !regex.test(materialForm.value.trim()) ||
      descripcionForm.value.trim() === "" ||
      !regex.test(descripcionForm.value.trim()) ||
      precioForm.value.trim() === "" ||
      !regex.test(precioForm.value.trim()) ||
      imagenForm.files.length === 0 // Verificar si se ha seleccionado una imagen
    ) {
      valido = false;
    }

    if (valido) {
      mensajeError.style.display = "none";
      mensajeValidado.style.display = "block";

      const producto = {
        nombre: nombreForm.value,
        tallas: tallasForm.value,
        imagen: "", // Aquí almacenaremos la URL de la imagen, pero aún no la tenemos
        material: materialForm.value,
        categoria: categoriasForm.value,
        descripcion: descripcionForm.value,
        medidas: medidasForm.value,
        precio: precioForm.value,
      };

      // Guardar la información del producto en el almacenamiento local
      let productos = JSON.parse(localStorage.getItem("productos")) || [];
      productos.push(producto);
      localStorage.setItem("productos", JSON.stringify(productos));

      // Limpiar el formulario
      formularioContacto.reset();

      // Renderizar los productos
      renderizarProductos();
    } else {
      mensajeValidado.style.display = "none";
      mensajeError.style.display = "block";
    }
  });

  // Función para cargar y mostrar la imagen seleccionada
  imagenForm.addEventListener("change", () => {
    const imagen = imagenForm.files[0]; // Obtener la imagen seleccionada
    const imagenURL = URL.createObjectURL(imagen); // Crear una URL para la imagen

    // Mostrar la imagen en una vista previa
    const imagenPreview = document.getElementById("imagenPreview");
    imagenPreview.src = imagenURL;
  });

  function renderizarProductos() {
    const productos = JSON.parse(localStorage.getItem("productos")) || [];
    productosContainer.innerHTML = "";

    productos.forEach((producto) => {
      const productoElement = document.createElement("div");
      productoElement.classList.add("col-md-4", "mb-4");
      productoElement.innerHTML = `
        <div class="card">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text"><small class="text-muted">Precio: ${producto.precio}</small></p>
            <p class="card-text"><small class="text-muted">Categoría: ${producto.categoria}</small></p>
            <p class="card-text"><small class="text-muted">Material: ${producto.material}</small></p>
            <p class="card-text"><small class="text-muted">Medidas: ${producto.medidas}</small></p>
            <p class="card-text"><small class="text-muted">Tallas: ${producto.tallas}</small></p>
          </div>
        </div>
      `;
      productosContainer.appendChild(productoElement);
    });
  }

  renderizarProductos();
});
