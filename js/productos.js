let productos = JSON.parse(localStorage.getItem("productos")) || [

    {
        id: 1,
        nombre: "Blazer Ivory Premium",
        categoria: "Blazers",
        precio: 129900,
        imagen: "img/productos/producto1.jpg"
    },

    {
        id: 2,
        nombre: "Vestido Noir",
        categoria: "Vestidos",
        precio: 159900,
        imagen: "img/productos/producto2.jpg"
    },

    {
        id: 3,
        nombre: "Conjunto Linen",
        categoria: "Conjuntos",
        precio: 119900,
        imagen: "img/productos/producto3.jpg"
    },

    {
        id: 4,
        nombre: "Camisa Silk",
        categoria: "Camisas",
        precio: 89900,
        imagen: "img/productos/producto4.jpg"
    }

];


localStorage.setItem(
    "productos",
    JSON.stringify(productos)
);



const contenedorProductos =
document.getElementById("contenedorProductos");



function mostrarProductos(lista = productos){


    if(!contenedorProductos) return;


    contenedorProductos.innerHTML = "";


    lista.forEach(producto => {


        contenedorProductos.innerHTML += `

        <article class="card-producto">


            <img src="${producto.imagen}">


            <div class="info">


                <h3>
                    ${producto.nombre}
                </h3>


                <p>
                    $${producto.precio.toLocaleString()}
                </p>


                <button onclick="agregarCarrito(${producto.id})">

                    Agregar

                </button>


            </div>


        </article>

        `;


    });


}



mostrarProductos();