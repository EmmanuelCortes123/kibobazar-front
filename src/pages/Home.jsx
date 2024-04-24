import { NavLink } from 'react-router-dom';
function Home() {
    return (
        <>
            <div className='container col-md-12 mt-4'>
                <div className="jumbotron jumbotron-custom">
                    <div className="container">
                        <h1 className="display-4">Bienvenido a Kibobazar</h1>
                        <h2 className="lead">Inserte frase de kibo</h2>
                        <hr className="my-4" />
                        <p>Descubre nuestras grandes ofertas</p>
                        <div className='text-center'>
                            <p className="lead">
                                <NavLink className="btn btn-primary btn-lg" to="/products" role="button">Comprar</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container col-md-12 mt-4'>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className='carousel-item active'>
                            <div className='row'>
                                <div class="col-md-4">
                                    <img src={require('../img/ropa1.jpeg')} className="d-block w-100" alt="..." />
                                </div>
                                <div class="col-md-4">
                                    <img src={require('../img/ropa2.jpeg')} className="d-block w-100" alt="..." />
                                </div>
                                <div class="col-md-4">
                                    <img src={require('../img/ropa3.jpeg')} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div className='row'>
                                <div class="col-md-4">
                                    <img src={require('../img/ropa4.jpeg')} className="d-block w-100" alt="..." />
                                </div>
                                <div class="col-md-4">
                                    <img src={require('../img/ropa5.jpeg')} className="d-block w-100" alt="..." />
                                </div>
                                <div class="col-md-4">
                                    <img src={require('../img/ropa6.jpeg')} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container col-md-12 mt-4'>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className='carousel-item active'>
                            <div className='row'>
                                <div class="col-md-3">
                                    <img src={require('../img/bbdakota-logo.jpg')} className="d-block w-100" alt="..." />
                                </div>
                                <div class="col-md-3">
                                    <img src={require('../img/intermix.jpg')} className="d-block w-100" alt="..." />
                                </div>
                                <div class="col-md-3">
                                    <img src={require('../img/jcrew-logo.jpg')} className="d-block w-100" alt="..." />
                                </div>
                                <div class="col-md-3">
                                    <img src={require('../img/madewell-logo.jpg')} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div className='row'>
                                <div class="col-md-3">
                                    <img src={require('../img/reformation-logo.jpg')} className="d-block w-100" alt="..." />
                                </div>
                                <div class="col-md-3">
                                    <img src={require('../img/rq13-logo.jpg')} className="d-block w-100" alt="..." />
                                </div>
                                <div class="col-md-3">
                                    <img src={require('../img/topshop-logo.jpg')} className="d-block w-100" alt="..." />
                                </div>
                                <div class="col-md-3">
                                    <img src={require('../img/wild-logo.jpg')} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div className='row'>
                                <div class="col-md-3">
                                    <img src={require('../img/princes-logo.jpg')} className="d-block w-100" alt="..." />
                                </div>
                                <div class="col-md-3">
                                    <img src={require('../img//zara-logo.jpg')} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Home;
