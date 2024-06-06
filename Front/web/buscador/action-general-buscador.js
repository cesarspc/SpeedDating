/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

mostrarBuscadores();

async function mostrarBuscadores() {
    try {
        const peticion = await fetch("http://localhost:8081/api/buscadores", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        const dataBuscadores = await peticion.json();

        if (dataBuscadores.length === 0) {
            mensajeError();
            return;
        }

        dataBuscadores.forEach((cita) => {
            agregarFila(cita);
        });
    } catch (error) {
        mensajeError();
        return;
    }
}

function agregarFila(data) {
    let cuerpoTabla = document.getElementById("cuerpoTabla");
    // Crear una nueva fila
    let fila = document.createElement("tr");
    const claves = Object.keys(data);

    // Crear celdas para la nueva fila
    let celdas = [];
    for (i = 0; i < 17; i++) {
        celdas.push(document.createElement("td"));
    }

    // Agregar a fila
    for (j = 0; j < 16; j++) {
        celdas[j].textContent = data[claves[j]];
        fila.appendChild(celdas[j]);
    }

    celdas[16].textContent = data[claves[16]] ? "Si" : "No";
    fila.appendChild(celdas[16]);

    cuerpoTabla.appendChild(fila);
}

function mensajeError() {
    const div = document.getElementById("bonito");

    const tabla = document.getElementById("tablaB");

    if (tabla) {
        tabla.remove();
    }

    // Crear un nuevo elemento de párrafo para el mensaje
    const message = document.createElement("p");
    message.textContent = "No hay buscadores para mostrar. Registre uno.";
    message.setAttribute("class", "cabecera");

    // Agregar el mensaje al contenedor de la tabla
    div.appendChild(message);
}
