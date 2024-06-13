/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

mostrarPostulantes();

let cuerpoTabla = document.getElementById("cuerpoTabla");

// Muestra en la tabla los postulantes obtenidos
async function mostrarPostulantes() {
    try {
        const dataPostulantes = await sendRequest("postulantes", {}, "GET");

        if (dataPostulantes.length === 0) {
            mensajeError();
            return;
        }
        
        // Para cada postulante encontrado agrega fila
        dataPostulantes.forEach((postulante) => {
            addRow(postulante, cuerpoTabla);
        });
    } catch (error) {
        mensajeError();
        console.error(error);
        return;
    }
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
