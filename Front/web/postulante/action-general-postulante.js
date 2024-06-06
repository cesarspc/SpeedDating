/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

mostrarPostulantes();

// Muestra en la tabla los postulantes obtenidos
async function mostrarPostulantes() {
    try {
        const peticion = await fetch("http://localhost:8081/api/postulantes", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        const dataPostulantes = await peticion.json();

        if (dataPostulantes.length === 0) {
            mensajeError();
            return;
        }
        
        // Para cada postulante encontrado agrega fila
        dataPostulantes.forEach((cita) => {
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
    for (i = 0; i < 14; i++) {
        celdas.push(document.createElement("td"));
    }

    // Agregar a fila
    for (j = 0; j < 13; j++) {
        celdas[j].textContent = data[claves[j]];
        fila.appendChild(celdas[j]);
    }

    celdas[13].textContent = data[claves[13]] ? "Si" : "No";
    fila.appendChild(celdas[13]);

    cuerpoTabla.appendChild(fila);
}

function mensajeError() {
    const div = document.getElementById("bonito");

    const tabla = document.getElementById("tablaP");

    if (tabla) {
        tabla.remove();
    }

    // Crear un nuevo elemento de párrafo para el mensaje
    const message = document.createElement("p");
    message.textContent = "No hay postulantes para mostrar. Registre uno.";
    message.setAttribute("class", "cabecera");

    // Agregar el mensaje al contenedor de la tabla
    div.appendChild(message);
}
