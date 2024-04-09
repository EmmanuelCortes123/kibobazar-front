import React, { useState, useEffect } from "react";

function Products() {
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        const productosLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];
        setPublicaciones(productosLocalStorage);
    }, []);

    const borrarPublicacion = (i) => {
        if (i >= 0 && i < publicaciones.length) {
            const newPublicaciones = [...publicaciones];
            newPublicaciones.splice(i, 1);
            localStorage.setItem("productos", JSON.stringify(newPublicaciones));
            setPublicaciones(newPublicaciones);
        }
    };

    return (
        <div>
            <h1 className="text-center mt-4">Productos</h1>
            <div className="container mt-5">
                <div className="row justify-content-center text-center">
                    {publicaciones.map((producto, index) => (
                        <div key={index} className="col-sm-4 mb-4">
                            <div className="card">
                                <img src={producto.image} className="card-img-top" alt={producto.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.name}</h5>
                                    <p className="card-text">{producto.description}</p>
                                    <p className="card-text">Precio: {producto.price}</p>
                                    <button onClick={() => borrarPublicacion(index)} className="btn btn-danger">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;