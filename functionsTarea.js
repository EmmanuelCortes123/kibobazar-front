// GET USERS //

export const getUsers = async() => {
    const url = "http://50.18.20.206:8080/api/v1/users";

    try {
        const response = await fetch(url);
        const users = await response.json();
        return users;

    } catch (error) {
        console.error( error );
    }
}

// POST USER //

export const postUser = async ( newUser ) => {
    const url = "http://50.18.20.206:8080/api/v1/users";

    const options = {
        method: "POST", // POST, PUT, DELETE, GET
        headers: { "Content-Type":"application/json"},
        body:  JSON.stringify( newUser )
    }

    const response = await fetch( url, options  );
    console.log( response )
    if (response.status === 201){
        const userCreated = await response.json();
        console.log( userCreated)
        alert("Usuario creado con éxito el " + userCreated.createdAt);
        localStorage.setItem("userData", JSON.stringify( newUser ) ); 

    }
}

// Login //

document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = {
        username: username,
        password: password
    };

    try {
        // Realizar una solicitud para verificar las credenciales del usuario
        const response = await fetch('"http://50.18.20.206:8080/api/v1/users"', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            // Las credenciales son válidas, redirigir al usuario a la página principal o realizar alguna acción
            window.location.href = 'http://50.18.20.206:8080/api/v1/users';
        } else {
            // Las credenciales son inválidas, mostrar un mensaje de error o realizar alguna acción adicional
            console.error('Credenciales incorrectas');
        }
    } catch (error) {
        console.error('Error al verificar las credenciales:', error);
    }
});