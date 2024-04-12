document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formularioRegistro").addEventListener("submit", function(event) {
        event.preventDefault();

        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var correo = document.getElementById("correo").value;
        var celular = document.getElementById("celular").value;
        var contrasena = document.getElementById("contra").value;
        var confirmarContrasena = document.getElementById("confirmar-contra").value;

        if (contrasena !== confirmarContrasena) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        if (nombre === "" || apellido === "" || correo === "" || celular === "" || contrasena === "" || confirmarContrasena === "") {
            document.getElementById("alerta").style.display = "block";
            return;
        }

        var telefonoValido = /^\d{10}$/.test(celular);
        if (!telefonoValido) {
            alert("Por favor, introduce un número de teléfono válido de 10 dígitos.");
            return;
        }
        
        document.getElementById("alertaCorrecta").style.display = "block";
    });
});
