const formulario =
document.getElementById("productoForm");



let productosAdmin =
JSON.parse(localStorage.getItem("productos")) || [];



if(formulario){


formulario.addEventListener(
"submit",

(e)=>{


e.preventDefault();



const producto = {


id: Date.now(),


nombre:
document.getElementById("nombre").value,


categoria:
document.getElementById("categoria").value,


precio:
Number(
document.getElementById("precio").value
),


imagen:
document.getElementById("imagen").value


};



productosAdmin.push(producto);



localStorage.setItem(
"productos",
JSON.stringify(productosAdmin)
);



alert(
"Producto agregado"
);



formulario.reset();



mostrarAdmin();


});


}





function mostrarAdmin(){


const lista =
document.getElementById("listaAdmin");


if(!lista) return;



lista.innerHTML="";



productosAdmin.forEach(producto=>{


lista.innerHTML += `

<div class="producto-admin">

<img src="${producto.imagen}">

<h3>
${producto.nombre}
</h3>

<p>
$${producto.precio}
</p>


</div>

`;


});


}



mostrarAdmin();