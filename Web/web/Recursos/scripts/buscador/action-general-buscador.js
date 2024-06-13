mostrarBuscadores();

let cuerpoTabla = document.getElementById("cuerpoTabla");
let dataBuscadores = [];

// Muestra segun los buscadores en el repositorio, por filas cada buscador
async function mostrarBuscadores() {
    try {
        dataBuscadores = await sendRequest("buscadores", {}, "GET");

        if (dataBuscadores.length === 0) {
            mensajeError();
            return;
        }

        dataBuscadores.forEach((buscador) => {

            // Uso funcion en common.js
            addRow(buscador, cuerpoTabla);
        });
    } catch (error) {
        console.error("Error: " + error);
        mensajeError();
        return;
    }
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
