let carrito = JSON.parse(localStorage.getItem("carrito")) || [];



function guardarCarrito(){

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

}



function agregarCarrito(id){


    const producto = productos.find(
        p => p.id === id
    );


    carrito.push(producto);


    guardarCarrito();


    actualizarContador();


    alert(
        "Producto agregado al carrito"
    );


}



function eliminarProducto(index){


    carrito.splice(index,1);


    guardarCarrito();


    mostrarCarrito();


    actualizarContador();


}




function actualizarContador(){


    const contador =
    document.getElementById("contadorCarrito");


    if(contador){

        contador.textContent =
        carrito.length;

    }

}



function mostrarCarrito(){


    const lista =
    document.getElementById("listaCarrito");


    if(!lista) return;


    lista.innerHTML="";


    carrito.forEach((producto,index)=>{


        lista.innerHTML += `

        <div class="item">


            <img src="${producto.imagen}">


            <div>

                <h2>
                ${producto.nombre}
                </h2>

                <p>
                $${producto.precio.toLocaleString()}
                </p>

            </div>


            <button onclick="eliminarProducto(${index})">

                Eliminar

            </button>


        </div>

        `;


    });


}



actualizarContador();

mostrarCarrito();