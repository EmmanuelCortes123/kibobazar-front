// // Obtener referencia al formulario de inicio de sesión y al div para mostrar la información del usuario
// const loginForm = document.getElementById("loginForm");
// const userInfoDiv = document.getElementById("userInfo");
// const loggedInUserSpan = document.getElementById("loggedInUser");

// // Función para manejar el evento de envío del formulario de inicio de sesión
// loginForm.addEventListener("submit", function (event) {
//   event.preventDefault(); // Evitar que el formulario se envíe de manera tradicional

//   // Obtener los valores del nombre de usuario (correo electrónico) y la contraseña del formulario
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   // Validar que se ingresen ambos valores
//   if (username.trim() === "" || password.trim() === "") {
//     alert("Por favor, ingrese un correo electrónico y una contraseña.");
//     return; // Salir de la función si no se ingresan ambos valores
//   }

//   // Validar que el correo electrónico sea válido (puedes usar una expresión regular para esto)
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(username)) {
//     alert("Por favor, ingrese un correo electrónico válido.");
//     return; // Salir de la función si el correo electrónico no es válido
//   }

//   // Validar que la contraseña tenga al menos 6 caracteres (por ejemplo)
//   if (password.length < 6) {
//     alert("La contraseña debe tener al menos 6 caracteres.");
//     return; // Salir de la función si la contraseña no cumple con los requisitos
//   }

//   // Obtener usuarios almacenados del localStorage o inicializar un array vacío si no hay usuarios almacenados
//   const storedUsersJSON = localStorage.getItem("users");
//   let users = storedUsersJSON ? JSON.parse(storedUsersJSON) : [];

//   // Verificar si el usuario ya existe en la lista de usuarios
//   const existingUserIndex = users.findIndex(
//     (user) => user.usuario === username
//   );
//   if (existingUserIndex !== -1) {
//     // El usuario ya existe, verificar si la contraseña coincide con la contraseña existente
//     if (users[existingUserIndex].contraseña !== password) {
//       alert("La contraseña ingresada no es correcta.");
//       return; // Salir de la función si la contraseña no coincide
//     }
//   } else {
//     // Agregar el nuevo usuario a la lista de usuarios
//     users.push({ usuario: username, contraseña: password });
//     // Guardar la lista actualizada de usuarios en el localStorage
//     localStorage.setItem("users", JSON.stringify(users));
//   }

//   // Mostrar el nombre de usuario en la página después de iniciar sesión
//   loggedInUserSpan.textContent = username;
//   // Mostrar el div que contiene la información del usuario
//   userInfoDiv.style.display = "block";
//   // Limpiar el formulario
//   loginForm.reset();
// });

// // Verificar si hay un usuario almacenado en el localStorage al cargar la página
// document.addEventListener("DOMContentLoaded", function () {
//   const storedUsersJSON = localStorage.getItem("users");
//   if (storedUsersJSON) {
//     // Convertir la cadena JSON de vuelta a un array de objetos JavaScript
//     const users = JSON.parse(storedUsersJSON);
//     // Mostrar el nombre de usuario del primer usuario en la lista (si hay alguno)
//     if (users.length > 0) {
//       loggedInUserSpan.textContent = users[0].usuario;
//       userInfoDiv.style.display = "block";
//     }
//   }
// });

// // Obtener referencia al botón de cerrar sesión
// const logoutButton = document.getElementById("logoutButton");

// // Función para manejar el evento de clic en el botón de cerrar sesión
// logoutButton.addEventListener("click", function () {
//   // Limpiar el localStorage eliminando la clave "user"
//   localStorage.removeItem("user");

//   // Ocultar el div de información del usuario
//   userInfoDiv.style.display = "none";
// });

// // Verificar si hay un usuario almacenado en el localStorage al cargar la página
// document.addEventListener("DOMContentLoaded", function () {
//   const storedUserJSON = localStorage.getItem("user");
//   if (storedUserJSON) {
//     // Convertir la cadena JSON de vuelta a un objeto JavaScript
//     const storedUserObject = JSON.parse(storedUserJSON);
//     // Mostrar el nombre de usuario en la página si hay un usuario almacenado
//     loggedInUserSpan.textContent = storedUserObject.usuario;
//     userInfoDiv.style.display = "block";
//   }
// });

// Obtener referencia al formulario de inicio de sesión y al div para mostrar la información del usuario
const loginForm = document.getElementById("loginForm");
const userInfoDiv = document.getElementById("userInfo");
const loggedInUserSpan = document.getElementById("loggedInUser");

// Función para manejar el evento de envío del formulario de inicio de sesión
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe de manera tradicional

  // Obtener los valores del nombre de usuario (correo electrónico) y la contraseña del formulario
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Validar que se ingresen ambos valores
  if (username.trim() === "" || password.trim() === "") {
    alert("Por favor, ingrese un correo electrónico y una contraseña.");
    return; // Salir de la función si no se ingresan ambos valores
  }

  // Validar que el correo electrónico sea válido (puedes usar una expresión regular para esto)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(username)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return; // Salir de la función si el correo electrónico no es válido
  }

  // Validar que la contraseña tenga al menos 6 caracteres (por ejemplo)
  if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return; // Salir de la función si la contraseña no cumple con los requisitos
  }

  // Obtener usuarios almacenados del localStorage o inicializar un array vacío si no hay usuarios almacenados
  const storedUsersJSON = localStorage.getItem("users");
  let users = storedUsersJSON ? JSON.parse(storedUsersJSON) : [];

  // Verificar si el usuario ya existe en la lista de usuarios
  const existingUserIndex = users.findIndex(
    (user) => user.correo === username // cambie lo usuario a correo para verificar
  );
  if (existingUserIndex !== -1) {
    // El usuario ya existe, verificar si la contraseña coincide con la contraseña existente
    if (users[existingUserIndex].contrasena !== password) {
      // cambie el nombre a contrasena
      alert("La contraseña ingresada no es correcta.");
      return; // Salir de la función si la contraseña no coincide
    }
  } else {
    // Agregar el nuevo usuario a la lista de usuarios
    //users.push({ usuario: username, contraseña: password });
    // Guardar la lista actualizada de usuarios en el localStorage
    // localStorage.setItem("users", JSON.stringify(users));
    alert("El usuario no está registrado.");
    return; // Salir de la función si el usuario no está registrado
  }

  // Mostrar el nombre de usuario en la página después de iniciar sesión
  loggedInUserSpan.textContent = users[existingUserIndex].nombre; // cambie para que aparezca el nombre y no el correo
  //loggedInUserSpan.textContent = username;
  // Mostrar el div que contiene la información del usuario
  userInfoDiv.style.display = "block";
  // Limpiar el formulario
  loginForm.reset();

  // Redirigir al home después de 2 segundos
  setTimeout(function () {
    window.location.href = "../home/home.html"; // Cambia "home.html" por la URL de tu página de inicio
  }, 2000); // 2000 milisegundos = 2 segundos
});

// Verificar si hay un usuario almacenado en el localStorage al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  const storedUsersJSON = localStorage.getItem("users");
  if (storedUsersJSON) {
    // Convertir la cadena JSON de vuelta a un array de objetos JavaScript
    const users = JSON.parse(storedUsersJSON);
    // Mostrar el nombre de usuario del primer usuario en la lista (si hay alguno)
    if (users.length > 0) {
      loggedInUserSpan.textContent = users[0].usuario;
      // userInfoDiv.style.display = "block";
    }
  }
});

// Obtener referencia al botón de cerrar sesión
const logoutButton = document.getElementById("logoutButton");

/*
// Función para manejar el evento de clic en el botón de cerrar sesión
logoutButton.addEventListener("click", function () {
  // Limpiar el localStorage eliminando la clave "users"
  localStorage.removeItem("users");

  // Ocultar el div de información del usuario
  userInfoDiv.style.display = "none";
});
*/

logoutButton.addEventListener("click", function () {
  // Establecer una bandera en el localStorage para indicar que se cerró la sesión
  localStorage.setItem("loggedIn", "false");

  // Ocultar el div de información del usuario
  userInfoDiv.style.display = "none";
});

// Verificar si hay un usuario almacenado en el localStorage al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  const storedUserJSON = localStorage.getItem("users");
  if (storedUserJSON) {
    // Convertir la cadena JSON de vuelta a un objeto JavaScript
    const storedUserObject = JSON.parse(storedUserJSON);
    // Mostrar el nombre de usuario en la página si hay un usuario almacenado
    loggedInUserSpan.textContent = storedUserObject.usuario;
    // userInfoDiv.style.display = "block";
  }
});
