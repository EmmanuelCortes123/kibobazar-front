import React from 'react'
import './header.css'

const header = () => {
  return (
    <div>
      <header>
  <div className='header'>
    <div
      className="col-md-12 col-12"
      style={{
        backgroundColor: '#CAC9F2'
      }}
    >
      <div
        className="col-md-12 mt-3 text-end text-md-end"
        style={{
          backgroundColor: '#CAC9F2'
        }}
      >
        <a
          className="icon-link col-md text-decoration-none"
          href="#"
        >
          <img
            className="iconos m-2"
            height="25"
            src="./assets/img/icono-login.png"
            width="25"
          />
        </a>
        <a
          className="icon-link col-md"
          href="#"
        >
          <img
            className="iconos m-2"
            height="25"
            src="./assets/img/carrito.png"
            width="25"
          />
        </a>
        <a
          className="icon-link"
          href="#"
        >
          <img
            className="iconos m-2"
            height="25"
            src="./assets/img/fav.png"
            width="25"
          />
        </a>
      </div>
    </div>
    <div className="col-md-12 col-12 text-center">
      <img
        alt="Logo"
        className="d-inline-block align-top"
        height="80"
        src="./assets/img/logo-kibobazar.png"
      />
    </div>
    <nav
      className="navbar navbar-expand-md"
      style={{
        backgroundColor: '#CAC9F2'
      }}
    >
      <button
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className="navbar-toggler "
        data-bs-target="#navbarSupportedContent"
        data-bs-toggle="collapse"
        type="button"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto me-auto">
            <li className="nav-item">
              <a
                aria-current="page"
                className="nav-link"
                href="./home/home.html"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="./contacto/contacto.html"
              >
                CONTACT
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="./aboutUs.html"
              >
                ABOUT US
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                aria-expanded="false"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
              >
                PRODUCTS
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form
            className="d-flex position-static"
            role="search"
          >
            <input
              aria-label="Search"
              className="form-control me-2"
              placeholder="Search"
              type="search"
            />
            <button
              className="btn btn-outline-light"
              style={{
                backgroundColor: '#7A88F2'
              }}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</header>
    </div>
  )
}

export default header
