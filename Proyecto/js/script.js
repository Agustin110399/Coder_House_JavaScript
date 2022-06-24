// Clases

class libro {

    constructor(id, nombre, autor, precio, editorial) {

        this.id = id;
        this.nombre = nombre;
        this.autor = autor;
        this.precio = precio;
        this.editorial = editorial;

    }

}

class carritoDeCompras {

    constructor(libro, cantidad) {
        this.libros = libro;
        this.cantidad = cantidad;
    }


}


// Variables globales

const libro1 = new libro("1", "Harry potter y la piedra filosofal", "J.K Rowling", 2300, "Salamandra");
const libro2 = new libro("2", "IT", "Stephen King", 3900, "De Bolsillo");
const libro3 = new libro("3", "A song of fire and ice A game of Thrones", "Geore R. R. Martin", 2500, "bantam Books");

const libros = [libro1, libro2, libro3];
const carritoParaLosLibros = [];


// Funciones

function mostrarYSeleccionarLosLibros() {
    let menuDeLibros = "¿Que libro desea comprar?\n";
    libros.forEach(libro => {
        menuDeLibros += libro.id + ") " + libro.nombre + " - " + libro.precio + " - " + libro.autor + " - " + libro.editorial + "\n";
    })
    let respuesta = prompt(menuDeLibros);
    return respuesta;
}

function confirmarCompra() {
    let respuesta = prompt("¿Desea comprar algo?\n1) Si \n2) No");
    respuesta = respuesta.toLowerCase();
    console.log(respuesta);
    if (respuesta == "si" ) {
        return true;
    } else {
        return false;
    }
}

function agregarlibroAlCarrito(id) {
    const libroEncontrado = libros.find(libro => libro.id == id);
    if (libroEncontrado == undefined) {
        alert("No encontre lo que estas buscando");
    } else {
        const cantidad = prompt("Ok, ingrese la cantidad de libros de " + libroEncontrado.nombre + " del autor " + libroEncontrado.autor + " desea comprar.");
        const libroAAgregarAlCarrito = new carritoDeCompras(libroEncontrado, cantidad);
        carritoParaLosLibros.push(libroAAgregarAlCarrito);
    }
}

function mostrarCarritoActual() {

    const contenidoDelCarrito = carritoParaLosLibros.reduce((acc, el) => acc + el.cantidad, 0); //obtengo la cantidad de libros comprados.


    let precio = carritoParaLosLibros.reduce((acc, el) => acc + el.libros.precio, 0);
    precioTotal=precio*contenidoDelCarrito; // multimplica el precio del libro elegido y lo multiplica por la cantidad de libros comprados.
    
    
    alert("El carrito tiene actualmente " + contenidoDelCarrito + " libros y en total cada uno cuesta: " +precio+ "$.\nEl total de su compra es de : " + precioTotal + " $.\nGracias por su compra.");

  }

function comprarProducto() {
    while (confirmarCompra()) {
      let libroSeleccionado = mostrarYSeleccionarLosLibros();
      
      agregarlibroAlCarrito(libroSeleccionado);
      
      mostrarCarritoActual();
    }
  }

// Ejecutar programa

comprarProducto();