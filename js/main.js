// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "../img/vestido 2.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 70000
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "../img/vestido1.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 70000
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "../img/conjunto 1M.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 65000
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "../img/conjunto 2M.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 75000
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "../img/CONJUNTO 3M.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 70000
    },
    {
        id: "abrigo-06",
        titulo: "Abrigo 06",
        imagen: "../img/SACOS.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 70000
    },
    {
        id: "abrigo-07",
        titulo: "Abrigo 07",
        imagen: "../img/saco blanco.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 70000
    },
    {
        id: "abrigo-08",
        titulo: "Abrigo 08",
        imagen: "../img/chaq1h.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 70000
    },
    {
        id: "abrigo-09",
        titulo: "Abrigo 09",
        imagen: "../img/chaq2h.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 70000
    },
    {
        id: "abrigo-10",
        titulo: "Abrigo 10",
        imagen: "../img/chaq3h.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 70000
    },
    {
        id: "abrigo-11",
        titulo: "Abrigo 11",
        imagen: "../img/chaq4h.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 75000
    },
    {
        id: "abrigo-12",
        titulo: "Abrigo 12",
        imagen: "../img/chaq5h.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 70000
    },
    // Camisetas
    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "../img/CONJUNTO 4M.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 45000
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "../img/top.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 40000
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "../img/camisa con sol.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 35000
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "../img/chaleco.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 37000
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "../img/conj1h.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 40000
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "../img/conj2h.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 50000
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "../img/conj3h.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 45000
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "../img/conj4h.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 45000
    },
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "../img/pantalon.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 45000
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "../img/conj5h.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 50000
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        imagen: "../img/conj6h.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 40000
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "../img/conj7h.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 38000
    },
        // ACCESORIOS
        {
            id: "accesorio-01",
            titulo: "Accesorio 01",
            imagen: "../img/accesorio 1.jpg",
            categoria: {
                nombre: "Accesorios",
                id: "accesorios"
            },
            precio: 70000
        },
        {
            id: "accesorio-02",
            titulo: "Accesorio 02",
            imagen: "../img/accesorio 2.jpg",
            categoria: {
                nombre: "Accesorios",
                id: "accesorios"
            },
            precio: 70000
        },
        {
            id: "accesorio-03",
            titulo: "Accesorio 03",
            imagen: "../img/accesorio 3.jpg",
            categoria: {
                nombre: "Accesorios",
                id: "accesorios"
            },
            precio: 65000
        },
        {
            id: "accesorio-04",
            titulo: "Accesorio 04",
            imagen: "../img/accesorio 4.jpg",
            categoria: {
                nombre: "Accesorios",
                id: "accesorios"
            },
            precio: 75000
        },
        {
            id: "accesorio-05",
            titulo: "Accesorio 05",
            imagen: "../img/accesorio 5.jpg",
            categoria: {
                nombre: "Accesorios",
                id: "accesorios"
            },
            precio: 70000
        },
        {
            id: "accesorio-06",
            titulo: "Accesorio 06",
            imagen: "../img/accesorio 6.jpg",
            categoria: {
                nombre: "Accesorios",
                id: "accesorios"
            },
            precio: 70000
        },
        {
            id: "accesorio-07",
            titulo: "Accesorio 07",
            imagen: "../img/accesorio 7.jpg",
            categoria: {
                nombre: "Accesorios",
                id: "accesorios"
            },
            precio: 70000
        },
        {
            id: "accesorio-08",
            titulo: "Accesorio 08",
            imagen: "../img/accesorio 8.jpg",
            categoria: {
                nombre: "Accesorios",
                id: "accesorios"
            },
            precio: 70000
        },
        {
            id: "accesorio-09",
            titulo: "Accesorio 09",
            imagen: "../img/accesorio 9.jpg",
            categoria: {
                nombre: "Accesorios",
                id: "accesorios"
            },
            precio: 70000
        },
        {
            id: "accesorio-10",
            titulo: "Accesorio 10",
            imagen: "../img/accesorio 10.jpg",
            categoria: {
                nombre: "Accesorios",
                id: "accesorios"
            },
            precio: 70000
        },
        {
            id: "accesorio-11",
            titulo: "Accesorio 11",
            imagen: "../img/accesorio 11.jpg",
            categoria: {
                nombre: "Accesorios",
                id: "accesorios"
            },
            precio: 75000
        },
        {
            id: "accesorio-12",
            titulo: "Accesorio 12",
            imagen: "../img/accesorio 12.jpg",
            categoria: {
                nombre: "Accesorios",
                id: "accesorios"
            },
            precio: 70000
        },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}