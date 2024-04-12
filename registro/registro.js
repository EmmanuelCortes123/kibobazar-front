document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formularioRegistro").addEventListener("submit", function (event) {
        event.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let correo = document.getElementById("correo").value;
        let celular = document.getElementById("celular").value;
        let contrasena = document.getElementById("contra").value;
        let confirmarContrasena = document.getElementById("confirmar-contra").value;

        if (contrasena !== confirmarContrasena) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        if (nombre === "" || apellido === "" || correo === "" || celular === "" || contrasena === "" || confirmarContrasena === "") {
            document.getElementById("alerta").style.display = "block";
            return;
        }

        let telefonoValido = /^\d{10}$/.test(celular);
        if (!telefonoValido) {
            alert("Por favor, introduce un número de teléfono válido de 10 dígitos.");
            return;
        }

        let registrosGuardados = JSON.parse(localStorage.getItem('registros')) || [];
        let correoExistente = registrosGuardados.find(function (registro) {
            return registro.correo === correo;
        });

        if (correoExistente) {
            alert("El correo electrónico ya está registrado. Por favor, utiliza otro correo electrónico.");
            return;
        }

        const nuevoRegistro = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            celular: celular,
            contrasena: contrasena
        };

        registrosGuardados.push(nuevoRegistro);

        localStorage.setItem('registros', JSON.stringify(registrosGuardados));

        document.getElementById("formularioRegistro").reset();

        document.getElementById("alertaCorrecta").style.display = "block";

        setTimeout(function() {
            document.getElementById("alertaCorrecta").style.display = "none";
        }, 3000);
    });
});
