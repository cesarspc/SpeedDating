/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

mostrarCitas();

document.getElementById("formCita").addEventListener("submit", async function (event) {
    event.preventDefault();

    enviarCitas(document.getElementById("cuerpoTabla")).then(() => {
        alert("Registrando");
        window.location.href = "index.jsp";
    });
});

async function enviarCitas(cuerpoTabla) {
    let filas = cuerpoTabla.getElementsByTagName("tr");

    console.log(filas.length);

    for (let i = 0; i < filas.length; i++) {
        let campos = {};

        campos.id = document.getElementById(`id${i}`).value;
        campos.fechaHora = document.getElementById(`Fecha${i}`).value;
        campos.nombreCompletoBuscador = document.getElementById(`NombreB${i}`).value;
        campos.nombreCompletoPostulante = document.getElementById(`NombreP${i}`).value;
        campos.calificacionBuscador = document.getElementById(`CalificacionB${i}`).value;
        campos.calificacionPostulante = document.getElementById(`CalificacionP${i}`).value;

        const peticion = await fetch("http://localhost:8081/api/citas", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(campos),
        })
                .then((response) => {
                    respuesta = response.json;
                    console.log(respuesta);
                })
                .catch(() => alert("Error al registrar cita"));
    }
}

function agregarFila(id, fechaHora, nombreCompletoBuscador, nombreCompletoPostulante, resB, resP, resR, indice) {
    let cuerpoTabla = document.getElementById("cuerpoTabla");
    // Crear una nueva fila
    let fila = document.createElement("tr");

    // Crear celdas para la nueva fila
    let celda1 = document.createElement("td");
    let celda2 = document.createElement("td");
    let celda3 = document.createElement("td");
    let celda4 = document.createElement("td");
    let celda5 = document.createElement("td");
    let celda6 = document.createElement("td");
    let celda7 = document.createElement("td");

    let inputId = document.createElement("input");
    inputId.setAttribute("type", "number");
    inputId.setAttribute("name", "id");
    inputId.setAttribute("id", `id${indice}`);
    inputId.setAttribute("value", id);
    inputId.setAttribute("disabled", "true");
    inputId.classList.add("form-control");
    celda1.appendChild(inputId);

    // Crear inputs para cada celda
    let inputFecha = document.createElement("input");
    inputFecha.setAttribute("type", "datetime-local");
    inputFecha.setAttribute("name", "Fecha");
    inputFecha.setAttribute("id", `Fecha${indice}`);
    inputFecha.setAttribute("disabled", "true");
    inputFecha.setAttribute("value", fechaHora);
    inputFecha.classList.add("form-control");
    celda2.appendChild(inputFecha);

    let inputNombreB = document.createElement("input");
    inputNombreB.setAttribute("type", "text");
    inputNombreB.setAttribute("name", "NombreB");
    inputNombreB.setAttribute("id", `NombreB${indice}`);
    inputNombreB.setAttribute("value", nombreCompletoBuscador);
    inputNombreB.setAttribute("disabled", "true");
    inputNombreB.classList.add("form-control");
    celda3.appendChild(inputNombreB);

    let inputNombreP = document.createElement("input");
    inputNombreP.setAttribute("type", "text");
    inputNombreP.setAttribute("name", "NombreP");
    inputNombreP.setAttribute("id", `NombreP${indice}`);
    inputNombreP.setAttribute("value", nombreCompletoPostulante);
    inputNombreP.setAttribute("disabled", "true");
    inputNombreP.classList.add("form-control");
    celda4.appendChild(inputNombreP);

    let calificacionB = document.createElement("select");
    calificacionB.setAttribute("id", `CalificacionB${indice}`);
    calificacionB.setAttribute("name", "CalificacionB");
    calificacionB.setAttribute("required", "true");
    calificacionB.classList.add("form-select");

    let optionB1 = document.createElement("option");
    optionB1.setAttribute("disabled", "true");
    optionB1.setAttribute("value", 0);
    optionB1.textContent = "Seleccione";
    calificacionB.appendChild(optionB1);

    let optionB2 = document.createElement("option");
    optionB2.setAttribute("value", 3);
    optionB2.textContent = "No Conexion";
    calificacionB.appendChild(optionB2);

    let optionB3 = document.createElement("option");
    optionB3.setAttribute("value", 2);
    optionB3.textContent = "Amistad";
    calificacionB.appendChild(optionB3);

    let optionB4 = document.createElement("option");
    optionB4.setAttribute("value", 1);
    optionB4.textContent = "Pareja";
    calificacionB.appendChild(optionB4);

    calificacionB.value = resB;
    calificacionB.appendChild(optionB4);

    celda5.appendChild(calificacionB);

    let calificacionP = document.createElement("select");
    calificacionP.setAttribute("id", `CalificacionP${indice}`);
    calificacionP.setAttribute("name", "CalificacioP");
    calificacionP.setAttribute("required", "true");
    calificacionP.classList.add("form-select");

    let optionP1 = document.createElement("option");
    optionP1.setAttribute("disabled", "true");
    optionP1.setAttribute("value", 0);
    optionP1.textContent = "Seleccione";
    calificacionP.appendChild(optionP1);

    let optionP2 = document.createElement("option");
    optionP2.setAttribute("value", 3);
    optionP2.textContent = "No Conexion";
    calificacionP.appendChild(optionP2);

    let optionP3 = document.createElement("option");
    optionP3.setAttribute("value", 2);
    optionP3.textContent = "Amistad";
    calificacionP.appendChild(optionP3);

    let optionP4 = document.createElement("option");
    optionP4.setAttribute("value", 1);
    optionP4.textContent = "Pareja";
    calificacionP.appendChild(optionP4);

    console.log(resP);
    calificacionP.value = resP;
    calificacionP.appendChild(optionP4);

    celda6.appendChild(calificacionP);

    let resultado = document.createElement("select");
    resultado.setAttribute("id", `CalificacionR${indice}`);
    resultado.setAttribute("name", "CalificacioR");
    resultado.setAttribute("disabled", "true");
    resultado.classList.add("form-select");

    let optionR1 = document.createElement("option");
    optionR1.setAttribute("disabled", "true");
    optionR1.setAttribute("value", "");
    optionR1.textContent = "Seleccione";
    resultado.appendChild(optionR1);

    let optionR2 = document.createElement("option");
    optionR2.setAttribute("value", 3);
    optionR2.textContent = "No Conexion";
    resultado.appendChild(optionR2);

    let optionR3 = document.createElement("option");
    optionR3.setAttribute("value", 2);
    optionR3.textContent = "Amistad";
    resultado.appendChild(optionR3);

    let optionR4 = document.createElement("option");
    optionR4.setAttribute("value", 1);
    optionR4.textContent = "Pareja";
    calificacionB.appendChild(optionR4);
    resultado.appendChild(optionR4);

    resultado.value = resR;
    celda7.appendChild(resultado);

    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);
    fila.appendChild(celda5);
    fila.appendChild(celda6);
    fila.appendChild(celda7);

    cuerpoTabla.appendChild(fila);
}

async function mostrarCitas() {
    try {
        const peticion = await fetch("http://localhost:8081/api/citas", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        const dataCitas = await peticion.json();

        if (dataCitas.length === 0) {
            mensajeError();
            return;
        }

    } catch (error) {
        mensajeError();
        return;
    }

    dataCitas.forEach((cita, indice) => {
        agregarFila(
                cita.id,
                cita.fechaHora,
                cita.nombreCompletoBuscador,
                cita.nombreCompletoPostulante,
                cita.calificacionBuscador,
                cita.calificacionPostulante,
                cita.resultadoCita,
                indice
                );
    });
}

function mensajeError() {
    const div = document.getElementById("bonito");

    const form = document.getElementById("formCita");

    if (form) {
        form.remove();
    }

    // Crear un nuevo elemento de párrafo para el mensaje
    const message = document.createElement("p");
    message.textContent = "No hay citas para mostrar";
    message.setAttribute("class", "cabecera");

    // Agregar el mensaje al contenedor de la tabla
    div.appendChild(message);
}
