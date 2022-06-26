// Clases

class libro {

    constructor(nombre, autor, precio, editorial, imagen, sinopsis) {

        this.nombre = nombre;
        this.autor = autor;
        this.precio = precio;
        this.editorial = editorial;
        this.img = imagen;
        this.sinopsis = sinopsis;
    }

}

// Variables

const libros = [
    new libro("Harry potter y la piedra filosofal", "J.K Rowling", 2300, "Salamandra", "https://static.wikia.nocookie.net/esharrypotter/images/9/9a/Harry_Potter_y_la_Piedra_Filosofal_Portada_Espa%C3%B1ol.PNG/revision/latest?cb=20151020165725", "Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y el insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el Colegio Hogwarts de Magia. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos, trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de Quidditch, especie de fútbol aéreo que se juega montado sobre escobas, y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero, sobre todo, conocerá los secretos que le permitirán cumplir su destino. Pues, aunque no lo parezca a primera vista, Harry no es un chico común y corriente: ¡es un verdadero mago!"),
    new libro("IT", "Stephen King", 3900, "De Bolsillo", "https://images.cdn2.buscalibre.com/fit-in/360x360/58/cc/58cce335a364ed961fd7edb0ab9a2c75.jpg", "It (en español, «Eso») es una novela de terror publicada en 1986 por el escritor estadounidense Stephen King. Cuenta la historia de un grupo de siete niños que son aterrorizados por un malvado monstruo -al que llaman «Eso»- que es capaz de cambiar de forma, alimentándose del terror que produce en sus víctimas."),
    new libro("A song of fire and ice A game of Thrones", "Geore R. R. Martin", 2500, "bantam Books", "./src/A Game Of Thrones-img.jpg"),
]

// Funciones

function mostrarLibros(libros) {
    const contenedorDeLibros = document.getElementById("contenedorDeLibros");
    contenedorDeLibros.innerHTML = "";
    libros.forEach(libro => {
        const divLibro = document.createElement("div");
        divLibro.classList.add("libro");
        divLibro.innerHTML = `
        <img src="${libro.img}" alt="${libro.nombre}">
        <h3>${libro.nombre}</h3>
        <p>${libro.autor}</p>
        <p>${libro.editorial}</p>
        <p>${libro.precio}</p>
        `;
        const btnSinopsis = document.createElement("button");
        btnSinopsis.innerText = "Ver Sinipsis";
        btnSinopsis.addEventListener("click", () => {
            mostrarSinopsis(libro);
            volverInicio();
        })
        divLibro.appendChild(btnSinopsis);
        contenedorDeLibros.appendChild(divLibro);
    });

}

function mostrarSinopsis(libro) {

    const contenedorDeLibros = document.getElementById("contenedorDeLibros");
    contenedorDeLibros.innerHTML = "";

    contenedorDeLibros.innerHTML = `
        <img src="${libro.img}" alt="${libro.nombre}">
        <h3>${libro.nombre}</h3>
        <p>${libro.autor}</p>
        <p>${libro.sinopsis}</p>
    `;

}

function volverInicio() {

    const btnVolver = document.createElement("button");
    btnVolver.classList.add("boton-volver");
    btnVolver.innerText = "Volver";
    btnVolver.addEventListener("click", () => {
        mostrarLibros(libros);
    })
    document.getElementById("contenedorDeLibros").appendChild(btnVolver);
}

mostrarLibros(libros);