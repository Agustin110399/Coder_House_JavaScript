const contenedorDeLibros = document.querySelector("#contenedorDeLibros");

let carrito = {}

fetch("api.json")

    .then((res) => res.json())
    .then((data) => {

        data.forEach((book) => {

            // Creando los elementos HTML
            const divLibro = document.createElement("div");
            const nombreDeLibro = document.createElement("h2");
            const autorDeLibro = document.createElement("h3");
            const imgDeLibro = document.createElement("img");
            const precioDeLibro = document.createElement("p");
            const editorialDeLibro = document.createElement("p");
            const btnComprar = document.createElement("button");
            const btnSinopsis = document.createElement("button");
            const cardBody = document.createElement("div");

            // Asignacion de clases para los estilos CSS y Bootstrap

            divLibro.className = "card"
            imgDeLibro.className = "img-fluid card-img-top"
            nombreDeLibro.className = "card-title nombre-libro"
            autorDeLibro.className = "card-text autor-libro"
            precioDeLibro.className = "card-text precio-libro"
            editorialDeLibro.className = "card-text editorial-libro"
            btnComprar.className = "btn btn-primary"
            btnSinopsis.className = "btn btn-primary"
            cardBody.className = "card-body"

            divLibro.id = book.id;
            imgDeLibro.src = book.img;
            nombreDeLibro.append(book.titulo);
            precioDeLibro.append(`$${book.precio}`);
            editorialDeLibro.append(book.editorial);
            autorDeLibro.append(book.autor);
            btnComprar.id = `${book.id}`

            
            //asignando texto interno a los botones


            btnComprar.innerText = "Agregar al carrito";
            btnSinopsis.innerText = "Ver Sinopsis";

            cardBody.append(imgDeLibro, nombreDeLibro, precioDeLibro, autorDeLibro, editorialDeLibro, btnComprar, btnSinopsis);
            divLibro.append(cardBody);
            contenedorDeLibros.append(divLibro);


            // asignacion de funcionalidad en los botones

            
            btnComprar.addEventListener("click", () => {
                swal("Procesando la compra...", "Producto agregado al carrito", "success");
            })
                        
            btnSinopsis.addEventListener("click", () => {
                swal(book.descripcion);
            })

            
           
        });
    })