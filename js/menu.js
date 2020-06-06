document.addEventListener("DOMContentLoaded", menuDesplegable);

function menuDesplegable(){
    "use strict"
    let menu = document.getElementById("menu");
    let btnAbrir = document.getElementById("btn-abrir");
    btnAbrir.addEventListener("click", abrirMenu);
    let btnCerrar = document.getElementById("btn-cerrar");
    btnCerrar.addEventListener("click", cerrarMenu);

    function abrirMenu(){
        menu.classList.toggle("visible")
    }

    function cerrarMenu(){
        menu.classList.toggle("visible")
    }
}