document.addEventListener("DOMContentLoaded", () => {

    console.log("SALVA cargado correctamente");

    const botones = document.querySelectorAll(".btn");

    botones.forEach(boton => {

        boton.addEventListener("mouseenter", () => {
            boton.style.transform = "translateY(-3px)";
        });

        boton.addEventListener("mouseleave", () => {
            boton.style.transform = "translateY(0)";
        });

    });

});