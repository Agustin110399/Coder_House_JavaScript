const libros = document.getElementById("cards");
const items = document.getElementById("items");
const footer = document.getElementById("footer");
const templateCard = document.getElementById("template-card").content
const templateFooter = document.getElementById("template-footer").content
const templateCarrito = document.getElementById("template-carrito").content

const fragment = document.createDocumentFragment();
let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})



libros.addEventListener("click", e => { 
    

    addCarrito(e);

})

items.addEventListener("click", e => {
    btnAccion(e)
})


const fetchData = async () => {
    try {
        const res = await fetch("api.json")
        const data = await res.json();
        pintarCards(data);
    } catch (error) {
        console.log(error);
    }
}




const pintarCards = data => {
    data.forEach(libro => {



        templateCard.querySelector(".titulo").textContent = libro.titulo;
        templateCard.querySelector(".precio").textContent = libro.precio;
        templateCard.querySelector("img").setAttribute("src", libro.img);
        templateCard.querySelector(".autor").textContent = libro.autor;
        templateCard.querySelector(".editorial").textContent = libro.editorial;
        templateCard.querySelector(".btn-dark").dataset.id = libro.id;
        /* templateCard.querySelector(".descripcion").textContent = libro.descripcion;
         const descripcion = libro.descripcion;*/



        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);

    })

    libros.appendChild(fragment);



}





const addCarrito = e => {



    if (e.target.classList.contains("btn-dark")) {
        setCarrito(e.target.parentElement);

    }

    e.stopPropagation();




}

const setCarrito = objeto => {

    const libro = {
        id: objeto.querySelector(".btn-dark").dataset.id,
        titulo: objeto.querySelector(".titulo").textContent,
        precio: objeto.querySelector(".precio").textContent,
        autor: objeto.querySelector(".autor").textContent,
        editorial: objeto.querySelector(".editorial").textContent,
        cantidad: 1,
    }

    if (carrito.hasOwnProperty(libro.id)) {
        libro.cantidad = carrito[libro.id].cantidad + 1;
    }

    carrito[libro.id] = {
        ...libro
    };
    pintarCarrito();

}

const pintarCarrito = () => {
    items.innerHTML = "";
    Object.values(carrito).forEach(libro => {
        templateCarrito.querySelector("th").textContent = libro.id,
            templateCarrito.querySelectorAll("td")[0].textContent = libro.titulo,
            templateCarrito.querySelectorAll("td")[1].textContent = libro.cantidad,
            //botones
            templateCarrito.querySelector('.btn-info').dataset.id = libro.id
        templateCarrito.querySelector('.btn-danger').dataset.id = libro.id

        templateCarrito.querySelector("span").textContent = libro.cantidad * libro.precio

        const clone = templateCarrito.cloneNode(true);
        fragment.appendChild(clone);
    })

    items.appendChild(fragment);

    pintarFooter();
}

const pintarFooter = () => {
    footer.innerHTML = "";
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `
        return;
    }

    const sumaCantidad = Object.values(carrito).reduce((acc, {
        cantidad
    }) => acc + cantidad, 0);
    const sumaPrecio = Object.values(carrito).reduce((acc, {
        cantidad,
        precio
    }) => acc + cantidad * precio, 0);

    templateFooter.querySelectorAll("td")[0].textContent = sumaCantidad;
    templateFooter.querySelector("span").textContent = sumaPrecio;

    const clone = templateFooter.cloneNode(true);
    fragment.appendChild(clone);
    footer.appendChild(fragment);

    const btnVaciar = document.getElementById("vaciar-carrito");
    btnVaciar.addEventListener("click", () => {
        carrito = {}
        pintarCarrito();
        swal("Vaciando carrito...", "Carrito vaciado", "success");
    })
}

const btnAccion = e => {

    //accion de agregar el mismo producto al carrito
    if(e.target.classList.contains("btn-info")){        
        const producto = carrito[e.target.dataset.id];
        producto.cantidad = carrito[e.target.dataset.id].cantidad+1;
        carrito[e.target.dataset.id] = {...producto};
        pintarCarrito();
    }


    //accion de restar un producto del carrito
    if(e.target.classList.contains("btn-danger")){        
        const producto = carrito[e.target.dataset.id];
        producto.cantidad--;
        if(producto.cantidad === 0){
            delete carrito[e.target.dataset.id];
        }        
        pintarCarrito();
    }

    e.stopPropagation();

}