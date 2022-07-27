const contenedorDeLibros = document.querySelector("#contenedorDeLibros");

let carrito = {}

fetch("api.json")

    .then((res) => res.json())
    .then((data) => {

        data.forEach((book) => {
            const divLibro = document.createElement("div");
            divLibro.classList.add("libro");
            divLibro.innerHTML = `
        <img src="${book.img}" alt="${book.titulo}">
        <h3>${book.titulo}</h3>
        <p>${book.autor}</p>
        <p>${book.editorial}</p>
        <p>${book.precio}</p>
        `;


            const btnComprar = document.createElement("button");
            btnComprar.innerText = "Comprar";
            btnComprar.addEventListener("click", () => {
                swal("Procesando la compra...", "Producto agregado al carrito", "success");
            })
            const btnSinopsis = document.createElement("button");
            btnSinopsis.innerText = "Ver Sinopsis";
            btnSinopsis.addEventListener("click", () => {
                swal(book.descripcion);
            })
            divLibro.appendChild(btnComprar);
            divLibro.appendChild(btnSinopsis);

            contenedorDeLibros.appendChild(divLibro);
        });
    })