import React, { useState, useEffect } from 'react';

function Producto() {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    inicializarProductos();
  }, []);

  function inicializarProductos() {
    const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
    if (!productosGuardados.length) {
      crearProductosEjemplo();
    } else {
      setPublicaciones(productosGuardados);
    }
  }

  function crearProductosEjemplo() {
    const ejemplos = [
      {
        nombre: "Vestido Casual Rojo Con Flores",
        imagen: "https://i.pinimg.com/originals/72/15/48/721548d2a9590c76e7c51bd2d1057f6b.jpg",
        categoria: "Ropa",
        material: "Algodón",
        tallas: ["S", "M"],
        descripcion: "Marca princess polly, Seminuevo",
        medidas: "Varias",
        precio: "$300"
      },
      // Aquí puedes agregar más ejemplos de productos
    ];

    setPublicaciones(ejemplos);
    localStorage.setItem("productos", JSON.stringify(ejemplos));
  }

  function borrarProducto(indice) {
    if (indice >= 0 && indice < publicaciones.length) {
      const nuevosProductos = [...publicaciones];
      nuevosProductos.splice(indice, 1);
      setPublicaciones(nuevosProductos);
      localStorage.setItem("productos", JSON.stringify(nuevosProductos));
    }
  }

  return (
    <div>
      <div className="row">
        {publicaciones.map((producto, indice) => (
          <div className="col-sm-4 mb-4" key={indice}>
            <div className="card">
              <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text">Precio: {producto.precio}</p>
                <button onClick={() => borrarProducto(indice)} className="btn btn-danger">Eliminar</button>
                {/* Aquí puedes agregar más botones o información */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Producto;