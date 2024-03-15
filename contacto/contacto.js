/* const formularioContacto = document.getElementById('formularioContacto');
const nombreInput = document.getElementById('nombre');
const correoElectronicoInput = document.getElementById('correo');
const telefonoInput = document.getElementById('telefono');
const mensajeInput = document.getElementById('mensaje');
const enviarBtn = document.getElementById('btn');
const mensajeResultado = document.getElementById('mensajeResultado');
const mensajeResultadoTexto = document.getElementById('mensajeResultadoTexto'); */

// Validación de campos
/* document.addEventListener('DOMContentLoaded', () => {
    const formularioContacto = document.getElementById('formularioContacto');
    const nombreInput = document.getElementById('nombre');
    const correoElectronicoInput = document.getElementById('correo');
    const telefonoInput = document.getElementById('telefono');
    const mensajeResultado = document.createElement('div');
    mensajeResultado.classList.add('resultado');
    // Asumiendo que quieres mostrar el mensaje de resultado después del formulario
    formularioContacto.after(mensajeResultado);

    formularioContacto.addEventListener('submit', (event) => {
        event.preventDefault();

        let valido = true;
        let mensajeError = "";

        if (nombreInput.value.trim() === "") {
            valido = false;
            mensajeError += "El nombre es obligatorio. ";
        }

        if (!/^[a-zA-Z ]+$/.test(nombreInput.value)) {
            valido = false;
            mensajeError += "El nombre solo puede contener letras y espacios. ";
        }

        if (!/^([a-zA-Z0-9_\-\.]+)@((\[[a-zA-Z0-9\-]+\])|([a-zA-Z0-9\-]+)\.)+[a-zA-Z]{2,}$/.test(correoElectronicoInput.value)) {
            valido = false;
            mensajeError += "El formato del correo electrónico no es válido. ";
        }

        if (!/^\d{10}$/.test(telefonoInput.value)) {
            valido = false;
            mensajeError += "El número de teléfono debe tener 10 dígitos numéricos. ";
        }

        if (!valido) {
            mensajeResultado.textContent = mensajeError;
            mensajeResultado.style.display = "block";
        } else {
            // Aquí puedes implementar el código para procesar/enviar el formulario.
            mensajeResultado.alert = alert("Formulario enviado con éxito.");
            mensajeResultado.style.display = "none";
        }
    });
});
*/

/* document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos el formulario por su ID
    const formularioContacto = document.getElementById('formularioContacto');
    // Seleccionamos los campos del formulario por su ID
    const nombreInput = document.getElementById('nombre');
    const correoElectronicoInput = document.getElementById('correo');
    const telefonoInput = document.getElementById('telefono');
    const mensajeResultado = document.getElementById('mensajeResultado'); // Asegúrate de tener este ID en tu HTML o ajusta según corresponda

    // Añadimos un 'listener' al evento 'submit' del formulario
    formularioContacto.addEventListener('submit', (event) => {
        // Prevenimos el comportamiento por defecto del formulario (envío directo)
        event.preventDefault();

        let valido = true;
        let mensajeError = "";

        // Verificamos si el campo nombre está vacío
        if (nombreInput.value.trim() === "") {
            valido = false;
            mensajeError += "El nombre es obligatorio. ";
        }

        // Verificamos si el nombre contiene solo letras y espacios
        if (!/^[a-zA-Z ]+$/.test(nombreInput.value)) {
            valido = false;
            mensajeError += "El nombre solo puede contener letras y espacios. ";
        }

        // Verificamos el formato del correo electrónico
        if (!/^([a-zA-Z0-9_\-\.]+)@((\[[a-zA-Z0-9\-]+\])|([a-zA-Z0-9\-]+)\.)+[a-zA-Z]{2,}$/.test(correoElectronicoInput.value)) {
            valido = false;
            mensajeError += "El formato del correo electrónico no es válido. ";
        }

        // Verificamos que el teléfono tenga 10 dígitos
        if (!/^\d{10}$/.test(telefonoInput.value)) {
            valido = false;
            mensajeError += "El número de teléfono debe tener 10 dígitos numéricos. ";
        }

        // Si el formulario no es válido, mostramos el mensaje de error
        if (!valido) {
            mensajeResultado.textContent = mensajeError;
            mensajeResultado.style.display = "block";
        } else {
            // Si el formulario es válido, mostramos un alert de éxito
            alert("Formulario enviado con éxito.");

            // Reseteamos los campos del formulario
            formularioContacto.reset();

            // Ocultamos el mensaje de resultado por si se mostró anteriormente
            mensajeResultado.style.display = "none";
        }
    });
});
 */

document.addEventListener('DOMContentLoaded', () => {
    const formularioContacto = document.getElementById('formularioContacto');
    const nombreInput = document.getElementById('nombre');
    const correoElectronicoInput = document.getElementById('correo');
    const telefonoInput = document.getElementById('telefono');
    const mensajeResultado = document.createElement('div');
    mensajeResultado.classList.add('resultado');
    // Asumiendo que quieres mostrar el mensaje de resultado después del formulario
    formularioContacto.after(mensajeResultado);

    formularioContacto.addEventListener('submit', (event) => {
        event.preventDefault();

        let valido = true;
        let mensajeError = "";

        if (nombreInput.value.trim() === "") {
            valido = false;
            mensajeError += "El nombre es obligatorio. ";
        }

        if (!/^[a-zA-Z ]+$/.test(nombreInput.value)) {
            valido = false;
            mensajeError += "El nombre solo puede contener letras y espacios. ";
        }

        if (!/^([a-zA-Z0-9_\-\.]+)@((\[[a-zA-Z0-9\-]+\])|([a-zA-Z0-9\-]+)\.)+[a-zA-Z]{2,}$/.test(correoElectronicoInput.value)) {
            valido = false;
            mensajeError += "El formato del correo electrónico no es válido. ";
        }

        if (!/^\d{10}$/.test(telefonoInput.value.trim())) {
            valido = false;
            mensajeError += "El número de teléfono debe tener 10 dígitos numéricos. ";
        }

        if (!valido) {
            mensajeResultado.textContent = alert(mensajeError);
            mensajeResultado.style.display = "block";
        } else {
            // Aquí puedes implementar el código para procesar/enviar el formulario.
            // Mostrar una alerta de éxito
            alert("Formulario enviado con éxito.");
            // Reiniciar el formulario después de un breve retraso (por ejemplo, 2 segundos)
            setTimeout(() => {
                formularioContacto.reset();
                mensajeResultado.style.display = "none";
            }, 1000);
        }
    });
});



// Aquí podrías enviar el formulario o realizar otras acciones si es válido
        // Por ejemplo,
        // formularioContacto.submit();
        
      /*   function validarFormulario(event) {
            event.preventDefault();
        
            const nombreInput = document.getElementById('nombre');
            const correoElectronicoInput = document.getElementById('correo');
            const telefonoInput = document.getElementById('telefono');
            const mensajeInput = document.getElementById('mensaje');
            const mensajeResultado = document.getElementById('mensajeResultado');
            const mensajeResultadoTexto = document.getElementById('mensajeResultadoTexto');
        
            let valido = true;
            let mensajeError = "";
        
            if (nombreInput.value.trim() === "") {
                valido = false;
                mensajeError += "El nombre es obligatorio. ";
            }
        
            if (!/^[a-zA-Z ]+$/.test(nombreInput.value)) {
                valido = false;
                mensajeError += "El nombre solo puede contener letras y espacios. ";
            }
        
            if (!/^([a-zA-Z0-9_\-\.]+)@((\[[a-zA-Z0-9\-]+\])|([a-zA-Z0-9\-]+)\.)+[a-zA-Z]{2,}$/.test(correoElectronicoInput.value)) {
                valido = false;
                mensajeError += "El correo electrónico no es válido. ";
            }
        
            if (!/^\d{10}$/.test(telefonoInput.value)) {
                valido = false;
                mensajeError += "El número de teléfono debe tener 10 dígitos numéricos. ";
            }
        
            if (valido) {
                mensajeResultadoTexto.innerHTML = "Formulario enviado correctamente.";
                mensajeResultado.classList.remove('text-danger');
                mensajeResultado.classList.add('text-success');
            } else {
                mensajeResultadoTexto.innerHTML = mensajeError;
                mensajeResultado.classList.remove('text-success');
                mensajeResultado.classList.add('text-danger');
            }
        }
        
        // Exporta la función para que pueda ser utilizada desde otro archivo
        export default validarFormulario; */