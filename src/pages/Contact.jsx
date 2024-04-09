import React, { useState } from 'react';

function Contact() {
    const [nombre, setNombre] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [mensajeError, setMensajeError] = useState('');
    const [resultado, setResultado] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        let valido = true;
        let mensajeError = '';

        if (nombre.trim() === '') {
            valido = false;
            mensajeError += 'El nombre es obligatorio. ';
        }

        if (!/^[\p{L}\s]+$/u.test(nombre)) {
            valido = false;
            mensajeError += 'El nombre solo puede contener letras y espacios. ';
        }

        if (!/^([a-zA-Z0-9_\-\.]+)@((\[[a-zA-Z0-9\-]+\])|([a-zA-Z0-9\-]+)\.)+[a-zA-Z]{2,}$/.test(correoElectronico)) {
            valido = false;
            mensajeError += 'El formato del correo electrónico no es válido. ';
        }

        if (!/^\d{10}$/.test(telefono.trim())) {
            valido = false;
            mensajeError += 'El número de teléfono debe tener 10 dígitos numéricos y sin espacios.';
        }

        if (!valido) {
            setMensajeError(mensajeError);
            setResultado('');
        } else {
            try {
                const formData = new FormData();
                formData.append('nombre', nombre);
                formData.append('correo', correoElectronico);
                formData.append('telefono', telefono);
                formData.append('mensaje', mensaje);

                const requestOptions = {
                    method: 'POST',
                    body: formData,
                };

                const response = await fetch('https://formsubmit.co/ajax/ad39dfe6b83f6bcb40cb83243329729f', requestOptions);
                const result = await response.json();

                setMensajeError('');
                setResultado('Formulario enviado con éxito.');
                console.log(result); // Imprimir la respuesta para depuración

                setNombre('');
                setCorreoElectronico('');
                setTelefono('');
                setMensaje('');
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                setResultado('');
            }
        }
    };

    return (
        <div>
            <h1 className="text-center mt-4">Contáctanos</h1>
            <p className="text-contact text-center mt-4">En Kibobazar nos interesa tu opinión</p>
            <main className="container mt-5">
                <div className="row justify-content-center text-center">
                    <div className="col-md-6">
                        <form id="formularioContacto" className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-12">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input name="nombre" type="text" className="inpu-form form-control text-center" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Kristian Hernández" required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                                <input name="correo" type="email" className="inpu-form form-control text-center" id="correo" value={correoElectronico} onChange={(e) => setCorreoElectronico(e.target.value)} placeholder="tucorreo@correo.com" required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="telefono" className="form-label">Teléfono</label>
                                <input name="telefono" type="tel" className="inpu-form form-control text-center" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder={5520206268} required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                <textarea className="inpu-form form-control text-center" id="mensaje" name="mensaje" rows={5} value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Escriba su mensaje" required />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-light" style={{ backgroundColor: '#7A88F2' }} type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            {mensajeError && <div className="resultado">{mensajeError}</div>}
            {resultado && <div className="resultado">{resultado}</div>}
        </div>
    );
}

export default Contact;
