import React, { useState, useEffect } from 'react';


const Carrito = () => {
  // Variable para almacenar los productos en el carrito
  const [carrito, setCarrito] = useState([]);

  // Función para inicializar el carrito
  const inicializarCarrito = () => {
    const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];
    setCarrito(productosGuardados);
  }

  // Función para eliminar un producto del carrito
  const eliminarProducto = (indice) => {
    const nuevosProductos = [...carrito];
    nuevosProductos.splice(indice, 1);
    setCarrito(nuevosProductos);
    // Guardar los cambios en el localStorage
    localStorage.setItem("productos", JSON.stringify(nuevosProductos));
  }

  // Llama a inicializarCarrito cuando se monta el componente
  useEffect(() => {
    inicializarCarrito();
  }, []);

  return (
    <div className="carrito-container">
      <h2>Carrito de compras</h2>
      {carrito.length > 0 ? (
        <ul className="carrito-list">
          {carrito.map((producto, index) => (
            <li key={index} className="carrito-item">
              <img src={producto.imagen} alt={producto.nombre} className="carrito-imagen" />
              <div className="carrito-info">
                <h3>{producto.nombre}</h3>
                <p>Precio: {producto.precio}</p>
              </div>
              <button onClick={() => eliminarProducto(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  );
}

export default Carrito;