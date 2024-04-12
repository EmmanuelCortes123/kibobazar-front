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

  formularioContacto.addEventListener("submit", (event) => {
    event.preventDefault();

    const regex = /^[a-zA-Z0-9\s]*$/;

    let valido = true;
    let archivoRuta = imagenForm.value;

    if (
      nombreForm.value.trim() === "" ||
      !regex.test(nombreForm.value.trim())
    ) {
      valido = false;
    }

    if (archivoRuta === "") {
      valido = false;
    }
    if (
      categoriasForm.value.trim() === "" ||
      !regex.test(categoriasForm.value.trim())
    ) {
      valido = false;
    }

    if (
      medidasForm.value.trim() === "" ||
      !regex.test(medidasForm.value.trim())
    ) {
      valido = false;
    }

    if (
      tallasForm.value.trim() === "" ||
      !regex.test(tallasForm.value.trim())
    ) {
      valido = false;
    }

    if (
      materialForm.value.trim() === "" ||
      !regex.test(materialForm.value.trim())
    ) {
      valido = false;
    }

    if (
      descripcionForm.value.trim() === "" ||
      !regex.test(descripcionForm.value.trim())
    ) {
      valido = false;
    }

    if (
      precioForm.value.trim() === "" ||
      !regex.test(precioForm.value.trim())
    ) {
      valido = false;
    }

    if (valido) {
      mensajeError.style.display = "none"; // Ocultar el mensaje de error si está visible
      mensajeValidado.style.display = "block";

      const nombre = nombreForm.value;
      const tallas = tallasForm.value;
      const imagen = imagenForm.value;
      const material = materialForm.value;
      const categoria = categoriasForm.value;
      const descripcion = descripcionForm.value;
      const medidas = medidasForm.value;
      const precio = precioForm.value;

      const producto = {
        nombre,
        tallas,
        imagen,
        material,
        categoria,
        descripcion,
        medidas,
        precio,
      };

      let productos = JSON.parse(localStorage.getItem("productos")) || [];
      productos.push(producto);
      localStorage.setItem("productos", JSON.stringify(productos));

      console.log("Producto agregado:", producto);

      formularioContacto.reset();
    } else {
      mensajeValidado.style.display = "none";
      mensajeError.style.display = "block";
    }
  });
});
