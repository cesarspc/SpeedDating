/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

mostrarCitas();
let idsBuscador = [];
let idsPostulante = [];
const form = document.getElementById("formCita");
const cuerpoTabla = document.getElementById("cuerpoTabla");

async function mostrarCitas() {
    try {
        const dataCitas = await sendRequest("citas", {}, "GET");

        if (dataCitas.length === 0) {
            mensajeError();
            return;
        }

        dataCitas.forEach((cita, indice) => {
            addRow(cita, indice);
            idsBuscador.push(cita.idBuscador);
            idsPostulante.push(cita.idPostulante);
        });
    } catch (error) {
        console.error("Error: " + error);
        mensajeError();
        return;
    }
}

// Maneja evento de actualizar cita
form.addEventListener("submit", async function (event) {
    event.preventDefault();

    enviarCitas().then(() => {
        alert("Registrando");
        window.location.href = "index.jsp";
    });
});

function addRow(data, indice) {
    // Crear una nueva fila
    let fila = document.createElement("tr");
    const claves = Object.keys(data);

    // Crear celdas para la nueva fila
    let celdas = [];
    for (i = 0; i < 7; i++) {
        celdas.push(document.createElement("td"));
    }

    // Inputs
    for (j = 0; j < 4; j++) {
        let input = document.createElement("input");
        input.setAttribute("id", `row${indice}col${j}`);
        input.setAttribute("value", data[claves[j]]);
        input.setAttribute("disabled", "true");
        input.classList.add("form-control");

        if (claves[j] === "fechaHora") {
            input.setAttribute("type", "datetime-local");
        } else {
            input.setAttribute("type", "text");
        }

        celdas[j].appendChild(input);
    }

    // Selects

    let selects = [];

    for (j = 4; j < 7; j++) {
        let select = document.createElement("select");
        select.setAttribute("id", `row${indice}col${j}`);
        select.setAttribute("name", "CalificacionB");
        if (j === 6) {
            select.setAttribute("disabled", "true");
        } else {
            select.setAttribute("required", "true");
        }
        select.classList.add("form-select");
        celdas[j].appendChild(select);
        selects.push(select);
    }

    let optionValues = [0, 3, 2, 1];
    let optionTextContents = ["", "No Conexion", "Amistad", "Pareja"];

    for (j = 0; j < 3; j++) {
        for (k = 0; k < 4; k++) {
            let option = document.createElement("option");

            if (k === 0) {
                option.setAttribute("disabled", "true");
            }

            option.setAttribute("value", optionValues[k]);
            option.textContent = optionTextContents[k];

            selects[j].appendChild(option);
        }
        selects[j].value = data[claves[j + 4]];
    }

    // Agregar a fila
    for (j = 0; j < 7; j++) {
        fila.appendChild(celdas[j]);
    }

    cuerpoTabla.appendChild(fila);
}

// Actualiza por PUT citas
async function enviarCitas() {
    let filas = cuerpoTabla.getElementsByTagName("tr");

    for (let i = 0; i < filas.length; i++) {
        let campos = {};

        campos.id = document.getElementById(`row${i}col0`).value;
        campos.fechaHora = document.getElementById(`row${i}col1`).value;
        campos.nombreCompletoBuscador = document.getElementById(`row${i}col2`).value;
        campos.nombreCompletoPostulante = document.getElementById(`row${i}col3`).value;
        campos.calificacionBuscador = document.getElementById(`row${i}col4`).value;
        campos.calificacionPostulante = document.getElementById(`row${i}col5`).value;
        campos.idBuscador = idsBuscador[i];
        campos.idPostulante = idsPostulante[i];

        await sendRequest("citas", campos, "PUT")
            .then((response) => console.log(response))
            .catch((err) => console.error("Error al registrar cita" + err));
    }
}

function mensajeError() {
    const div = document.getElementById("bonito");

    if (form) {
        form.remove();
    }

    // Crear un nuevo elemento de párrafo para el mensaje
    const message = document.createElement("p");
    message.textContent = "No hay citas para mostrar. Agende una cita.";
    message.setAttribute("class", "cabecera");

    // Agregar el mensaje al contenedor de la tabla
    div.appendChild(message);
}
