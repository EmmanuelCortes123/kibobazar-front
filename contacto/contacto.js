
document.addEventListener('DOMContentLoaded', () => {
    const formularioContacto = document.getElementById('formularioContacto');
    const nombreInput = document.getElementById('nombre');
    const correoElectronicoInput = document.getElementById('correo');
    const telefonoInput = document.getElementById('telefono');
    const mensajeResultado = document.createElement('div');
    mensajeResultado.classList.add('resultado');
 
    formularioContacto.after(mensajeResultado);

    formularioContacto.addEventListener('submit', (event) => {
        event.preventDefault();

        let valido = true;
        let mensajeError = "";

        if (nombreInput.value.trim() === "") {
            valido = false;
            mensajeError += "El nombre es obligatorio. ";
        }

        if (!/^[\p{L}\s]+$/u.test(nombreInput.value)) {
            valido = false;
            mensajeError += "El nombre solo puede contener letras y espacios. ";
        }

        if (!/^([a-zA-Z0-9_\-\.]+)@((\[[a-zA-Z0-9\-]+\])|([a-zA-Z0-9\-]+)\.)+[a-zA-Z]{2,}$/.test(correoElectronicoInput.value)) {
            valido = false;
            mensajeError += "El formato del correo electrónico no es válido. ";
        }

        if (!/^\d{10}$/.test(telefonoInput.value.trim())) {
            valido = false;
            mensajeError += "El número de teléfono debe tener 10 dígitos numéricos y sin espacios.";
        }

        if (!valido) {
            mensajeResultado.textContent = alert(mensajeError);
            mensajeResultado.style.display = "block";
        } else {
            // Mostrar una alerta de éxito
            alert("Formulario enviado con éxito.");
            
            const formData = new FormData(formularioContacto);
            enviarFormulario(formData);
            formularioContacto.reset();
            
        }
    });
});

const formData = new FormData();
formData.append('nombre', 'FormSubmit');
formData.append('mensaje', 'Soy de Devro LABS');

function enviarFormulario(formData) {
    const requestOptions = {
        method: 'POST',
        body: formData,
    };

    // Realizar la solicitud HTTP POST a FormSubmit.co
    fetch('https://formsubmit.co/ajax/ad39dfe6b83f6bcb40cb83243329729f', requestOptions) 
        .then(response => response.json()) 
        .then(result => {
            // Manejar la respuesta aquí
            console.log(result); // Imprimir la respuesta para depuración

        })
        .catch(error => console.error('Error al enviar el formulario:', error));
}

