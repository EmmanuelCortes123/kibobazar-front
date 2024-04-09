import { NavLink } from "react-router-dom";
function Header() {
    return (

        <header>
            <div className="row">
                <div className="col-md-12 col-12" style={{ backgroundColor: '#CAC9F2' }}>
                    <div className="col-md-12 mt-3 text-end text-md-end" style={{ backgroundColor: '#CAC9F2' }}>
                        <a className="icon-link col-md text-decoration-none" href="#">
                            <img className="iconos m-2" src={require('../img/icono-login.png')} width={25} height={25} />
                        </a>
                        <a className="icon-link col-md" href="#">
                            <img className="iconos m-2" src={require('../img/carrito.png')} width={25} height={25} />
                        </a>
                        <a className="icon-link" href="#">
                            <img className="iconos m-2" src={require('../img/fav.png')} width={25} height={25} />
                        </a>
                    </div>
                </div>
                <div className="col-md-12 col-12 text-center">
                    <img src={require('../img/logo-kibobazar.png')} alt="Logo" height={80} className="d-inline-block align-top" />
                </div>
                <nav className="navbar navbar-expand-md" style={{ backgroundColor: '#CAC9F2' }}>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto me-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/home">HOME</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/aboutUs">ABOUT US</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PRODUCTS
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
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