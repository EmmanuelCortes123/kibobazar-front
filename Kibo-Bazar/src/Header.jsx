import React from 'react'
import './index.css';


export const Header = () => {
    return (
        <header>
          <div className="row">
            <div className="col-md-12 col-12" style={{ backgroundColor: '#CAC9F2' }}>
              <div className="col-md-12 mt-3 text-end text-md-end" style={{ backgroundColor: '#CAC9F2' }}>
                <a className="icon-link col-md text-decoration-none" href="../login/login.html">
                  <img className="iconos m-2" src="../assets/img/icono-login.png" width="25" height="25" alt="Login" />
                </a>
                <a className="icon-link col-md" href="#">
                  <img className="iconos m-2" src="../assets copy/img/carrito.png" width="25" height="25" alt="Carrito" />
                </a>
                <a className="icon-link" href="#">
                  <img className="iconos m-2" src="../assets/img/fav.png" width="25" height="25" alt="Favorito" />
                </a>
              </div>
            </div>
            <div className="col-md-12 col-12 text-center">
              <img src="../assets/img/logo-kibobazar.png" alt="Logo" height="80" className="d-inline-block align-top" />
            </div>
            <nav className="navbar navbar-expand-md" style={{ backgroundColor: '#CAC9F2' }}>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto me-auto">
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="../home/home.html">INICIO</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="../contacto/contacto.html">CONTACTO</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="../index.html">NOSOTROS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="../formulario/formulario.html">FORMULARIO</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="../products/productos.html">
                        PRODUCTOS
                      </a>
                    </li>
                  </ul>
                  <form className="d-flex position-static" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light" style={{ backgroundColor: '#7A88F2' }} type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </header>
      );
    }
    export default Header;