function Contact() {
    return (
        <>
            <div>
                <h1 className="text-center mt-4">Contáctanos</h1>
                <p className="text-center mt-4">En Kibobazar nos interesa tu opinión</p>
                <main className="container mt-5">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-6">
                            <form id="formularioContacto" className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input name="nombre" type="text" className="inpu-form form-control text-center" id="nombre" placeholder="Kristian Hernández" required />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                                    <input name="correo" type="email" className="inpu-form form-control text-center" id="correo" placeholder="tucorreo@correo.com" required />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                                    <input name="telefono" type="tel" className="inpu-form form-control text-center" id="telefono" placeholder={5520206268} required />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                    <textarea className="inpu-form form-control text-center" id="mensaje" name="mensaje" rows={5} placeholder="Escriba su mensaje" required defaultValue={""} />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-outline-light" style={{ backgroundColor: '#7A88F2' }} type="submit">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>

        </>
    );
}

export default Contact;