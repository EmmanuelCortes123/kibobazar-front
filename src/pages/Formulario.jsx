import React, { useState } from 'react';

function Formulario() {
    const [mensajeError, setMensajeError] = useState(false);
    const [mensajeValidado, setMensajeValidado] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const nombreForm = document.getElementById("nombre");
        const imagenForm = document.getElementById("imagen");
        const categoriasForm = document.getElementById("categoria");
        const medidasForm = document.getElementById("medidas");
        const tallasForm = document.getElementById("tallas");
        const materialForm = document.getElementById("material");
        const descripcionForm = document.getElementById("descripcion");
        const precioForm = document.getElementById("precio");

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
            setMensajeError(false); // Ocultar el mensaje de error si está visible
            setMensajeValidado(true);

            const nombre = nombreForm.value;
            const tallas = tallasForm.value;
            const imagen = imagenForm.files[0];
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

            event.target.reset();
        } else {
            setMensajeValidado(false);
            setMensajeError(true);
        }
    };

    return (
        <div>
            <h1 className="text-center mt-4">Formulario de producto</h1>
            <p className="text-center mt-4">
                Formulario de creación y modificación de productos.
            </p>
            <div
                id="alerta"
                className="alert alert-danger alert-dismissible fade show"
                role="alert"
                style={{ display: mensajeError ? "block" : "none" }}
            >
                <strong>Error:</strong> Por favor, completa todos los campos
                obligatorios.
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                />
            </div>
            <div
                id="alertaCorrecta"
                className="alert alert-success alert-dismissible fade show"
                role="alert"
                style={{ display: mensajeValidado ? "block" : "none" }}
            >
                <strong>Correcto:</strong> Formulario enviado con exito
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                />
            </div>
            <main className="container mt-5">
                <div className="row justify-content-center text-center">
                    <div className="col-md-12">
                        <form id="formularioContacto" className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-6 img-fluid">
                                <img
                                    className="imgForm col-md-6 d-none d-md-block"
                                    src={require('../img/ban.png')}
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="nombre" className="form-label">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            className="inpu-form form-control"
                                            id="nombre"
                                            name="nombre"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="tallas" className="form-label">
                                            Tallas
                                        </label>
                                        <input
                                            type="text"
                                            className="inpu-form form-control"
                                            id="tallas"
                                            name="tallas"
                                        />
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-6">
                                        <label htmlFor="imagen" className="form-label">
                                            Imagen
                                        </label>
                                        <input
                                            type="file"
                                            className="inpu-form form-control"
                                            id="imagen"
                                            name="imagen"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="material" className="form-label">
                                            Material
                                        </label>
                                        <input
                                            type="text"
                                            className="inpu-form form-control"
                                            id="material"
                                            name="material"
                                        />
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-6">
                                        <label htmlFor="categoria" className="form-label">
                                            Categoría
                                        </label>
                                        <select
                                            className="form-select"
                                            id="categoria"
                                            name="categoria"
                                        >
                                            <option value="">Seleccionar...</option>
                                            <option value="mujer">Mujer</option>
                                            <option value="hombre">Hombre</option>
                                            <option value="niño">Niño</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="descripcion" className="form-label">
                                            Descripción del producto
                                        </label>
                                        <textarea
                                            className="inpu-form form-control"
                                            id="descripcion"
                                            name="descripcion"
                                            rows={3}
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-md-6">
                                        <label htmlFor="medidas" className="form-label">
                                            Medidas
                                        </label>
                                        <input
                                            type="text"
                                            className="inpu-form form-control"
                                            id="medidas"
                                            name="medidas"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="precio" className="form-label">
                                            Precio
                                        </label>
                                        <input
                                            type="number"
                                            className="inpu-form form-control"
                                            id="precio"
                                            name="precio"
                                        />
                                    </div>
                                </div>
                                <button
                                    id="formulario-producto"
                                    type="submit"
                                    className="btn btn-primary mt-3"
                                >
                                    Crear Producto
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Formulario;