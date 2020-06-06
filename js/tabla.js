document.addEventListener('DOMContentLoaded', tablaDinamica);

function tablaDinamica() {
    "use strict";
    // DECLARO VARIABLES PARA LOS BOTONES Y SUS EVENTOS CLICK
    let btnRandom = document.getElementById("btn-random");
    btnRandom.addEventListener("click", cargarTabla);
    let btnAgregar = document.getElementById("btn-agregar");
    btnAgregar.addEventListener("click", agregarFila);
    let btnReset = document.getElementById("btn-reset");
    btnReset.addEventListener("click", borrarTabla);

    let tabla = [];
    //console.log(tabla)

    // CREO ARREGLO DE OBJETOS
    let cine = [{
        "pelicula": "Grandes Espias",
        "asientos": 1,
        "complejo": "Cinemacenter Tandil",
        "precio": 200,
    },
    {
        "pelicula": "BloodShot",
        "asientos": 1,
        "complejo": "Hoyts Abasto",
        "precio": 520,
    },
    {
        "pelicula": "El Precio de la Verdad",
        "asientos": 1,
        "complejo": "Hoyts Abasto",
        "precio": 520,
    },
    {
        "pelicula": "Ni Heroe, ni Traidor",
        "asientos": 1,
        "complejo": "Cinemacenter Tandil",
        "precio": 200,
    }];

    window.onload = cargarTabla;


    //console.log(cine)
    
    // DEFINO VARIABLES PARA LA TABLA
    let boleteria = document.getElementById("boleteria");
    let tbody = document.createElement("tbody");
    let total = 0;
    let subtotal = 0;
    let tr, td1, td2, td3, td4, td5;
    let total_head = document.getElementById("total");

    // INSERTO EL TBODY EN LA TABLA
    boleteria.appendChild(tbody);

    /*CARGA DE DATOS ALEATORIA*/
    function cargarTabla() {
        for (let i = 0; i < cine.length; i++) {
            tabla.push(cine);
            //console.log(tabla)
            // CREO ELEMENTOS DE LA TABLA
            tr = document.createElement("tr");
            td1 = document.createElement("td");
            td2 = document.createElement("td");
            td3 = document.createElement("td");
            td4 = document.createElement("td");
            td5 = document.createElement("td");

            // INSERTO LA FILA EN EL TBODY
            tbody.appendChild(tr);

            // INGRESO LOS ELEMENTOS DEL OBJETO EN LA TABLA
            td1.innerText = cine[i].pelicula;
            td2.innerText = cine[i].asientos;
            td3.innerHTML = cine[i].complejo;
            td4.innerHTML = cine[i].precio;
            td5.innerHTML = cine[i].asientos * cine[i].precio;
            total += cine[i].asientos * cine[i].precio;
            total_head.innerText = total;


            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
        }
    }

    function agregarFila() {
        // DECLARO VARIABLES PARA LOS INPUT
        let pelicula = document.getElementById("pelicula").value;
        let asientos = document.getElementById("asientos").value;
        let complejo = document.getElementById("complejo").value;
        let valor = document.getElementById("valor").value;

        subtotal = parseInt(valor)*parseInt(asientos);
        subtotal = parseInt(asientos) >= 3 ? subtotal * 0.8 : subtotal;
        total += subtotal;

        console.log(total);
        console.log(valor);

        // DECLARO ARREGLO
        let datos = [pelicula, asientos, complejo, valor];
        cine.peliculas = datos[0];
        cine.asientos = datos[1];
        cine.complejo = datos[2];
        cine.precio = datos[4];

        tabla.push(datos);

        // ARMO TABLA CON LOS VALORES QUE SE INGRESAN POR TECLADO

        tr = document.createElement("tr");
        if (datos[1] >= 3)
            tr.className = "oferta";
        tbody.appendChild(tr);

        td1 = document.createElement("td");
        td2 = document.createElement("td");
        td3 = document.createElement("td");
        td4 = document.createElement("td");
        td5 = document.createElement("td");

        td1.innerText = parseInt(asientos) >= 3 ? datos[0].toUpperCase() : datos[0];;
        td2.innerText = datos[1];
        td3.innerText = datos[2];
        td4.innerText = datos[3];
        td5.innerText = subtotal;

        total_head.innerText = total;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        //console.log(tabla)
}

    function borrarTabla(){
        let items = tbody.querySelectorAll("tr");

        for (let item of items){
            item.remove();
            tabla.pop();
        }
        total=0;
        total_head.innerText = total;
        
    }

}

