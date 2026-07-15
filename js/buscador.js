const buscador =
document.getElementById("busqueda");



if(buscador){


buscador.addEventListener(
"input",

()=>{


    const texto =
    buscador.value.toLowerCase();



    const resultados =
    productos.filter(producto =>


        producto.nombre
        .toLowerCase()
        .includes(texto)


    );



    mostrarProductos(resultados);



});


}