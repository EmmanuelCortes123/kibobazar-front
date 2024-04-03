
 function crear( nombre, talla, imagen, material, categoria, descripcion, medida, precio ) {
    const producto = {
        nombre: nombre,
        talla: talla,
        imagen: imagen,
        material: material,
        categoria: categoria,
        descripcion: descripcion,
        medidad: medida,
        precio: precio
    };
  return producto
};

const ejemploUno = crear("Camiseta", "M","Imagen","Algodon","Jersey", "Una bonita camiseta de color azul.", "32" , "$500");
const ejemploDos = crear("Pantalon", "M","Imagen","Tela","Pantalones", "Un bonito pantalon color azul.", "30" , "$250");
const ejemploTres = crear("Calcetas", "S","Imagen","Algodon","Calcetas", "Calcetas color blanco.", "28" , "$150");
const ejemploCuatro = crear("Falda", "G","Imagen","Mezclilla","Faldas", "Falda tipo mezclilla", "26" , "$300");
const ejemploCinco = crear("Gorra", "S","Imagen","Algodon","Gorras", "Gorra del equipo NewYork", "28" , "$150");
const ejemploSeis = crear("Calcetas", "S","Imagen","Algodon","Calcetas", "Calcetas color blanco.", "28" , "$150");
const ejemploSiete = crear("Calcetas", "S","Imagen","Algodon","Calcetas", "Calcetas color blanco.", "28" , "$150");
const ejemploOcho = crear("Calcetas", "S","Imagen","Algodon","Calcetas", "Calcetas color blanco.", "28" , "$150");
const ejemploNueve = crear("Calcetas", "S","Imagen","Algodon","Calcetas", "Calcetas color blanco.", "28" , "$150");
const ejemploDiez = crear("Calcetas", "S","Imagen","Algodon","Calcetas", "Calcetas color blanco.", "28" , "$150");

console.log(ejemploUno);
console.log(ejemploDos);
console.log(ejemploTres);
console.log(ejemploCuatro);
console.log(ejemploCinco);
console.log(ejemploSeis);
console.log(ejemploSiete);
console.log(ejemploOcho);
console.log(ejemploNueve);
console.log(ejemploDiez);

/*

 function modificar() {
    
};

 function eliminar() {
    
};

 function eliminarTodo() {
    
};
*/

/*  const itemsDeRopa = [
  { name: "Vestido", color: "Rojo", size: "Grande", img: "https://picsum.photos/100" },
  { name: "Blusa", color: "Azul", size: "Mediano", img: "https://picsum.photos/100" },
  { name: "Jeans", color: "Negro", size: "Pequeño", img: "https://picsum.photos/100" },
  { name: "Falda", color: "Verde", size: "Grande", img: "https://picsum.photos/100" },
  { name: "Camiseta", color: "Blanco", size: "Mediano", img: "https://picsum.photos/100" },
  { name: "Chaqueta", color: "Gris", size: "Pequeño", img: "https://picsum.photos/100" },
  { name: "Suéter", color: "Rosa", size: "Grande", img: "https://picsum.photos/100" },
  { name: "Shorts", color: "Amarillo", size: "Mediano", img: "https://picsum.photos/100" },
  { name: "Top", color: "Morado", size: "Pequeño", img: "https://picsum.photos/100" },
  { name: "Abrigo", color: "Marrón", size: "Grande", img: "https://picsum.photos/100" }
    ];
*/


/*
// Definir una lista de objetos de muestra
let publicaciones = [
    { 'name': 'Tayto', 'img': 'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg', 'description': 'Cheese & Onion Chips' },
    // Agrega más objetos aquí si lo deseas
];

// Función para mostrar la lista de publicaciones en formato JSON
function mostrarPublicaciones() {
    const listaPublicaciones = document.getElementById('publicaciones-list');
    listaPublicaciones.innerHTML = '';
    publicaciones.forEach((publicacion, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = JSON.stringify(publicacion);
        listaPublicaciones.appendChild(listItem);
    });
}

// Función para agregar una nueva publicación
function agregarPublicacion(publicacion) {
    publicaciones.push(publicacion);
    mostrarPublicaciones();
}

// Función para modificar una publicación existente por su índice
function modificarPublicacion(index, nuevaPublicacion) {
    if (index >= 0 && index < publicaciones.length) {
        publicaciones[index] = nuevaPublicacion;
        mostrarPublicaciones();
    } else {
        console.error('Índice de publicación fuera de rango');
    }
}

// Función para borrar una publicación por su índice
function borrarPublicacion(index) {
    if (index >= 0 && index < publicaciones.length) {
        publicaciones.splice(index, 1);
        mostrarPublicaciones();
    } else {
        console.error('Índice de publicación fuera de rango');
    }
}

// Función para borrar todas las publicaciones
function borrarTodasLasPublicaciones() {
    publicaciones = [];
    mostrarPublicaciones();
}

// Agregar listeners a los botones
document.getElementById('agregar-btn').addEventListener('click', () => {
    agregarPublicacion({ 'name': 'Nueva Publicación', 'img': '', 'description': '' });
});

document.getElementById('borrar-todo-btn').addEventListener('click', () => {
    borrarTodasLasPublicaciones();
});

// Mostrar las publicaciones al cargar la página
mostrarPublicaciones();
*/