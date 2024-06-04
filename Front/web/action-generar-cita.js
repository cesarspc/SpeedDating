/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

// Agregar filas
obtenerParejas()
    .then((parejas) => {
        if (parejas.length === 0) {
            mensajeError();
            return;
        }

        parejas.forEach((pareja, indice) => {
            agregarFila(pareja[0], pareja[1], indice);
        });
    })
    .catch(() => {
        mensajeError();
    });

async function obtenerParejas() {
    const peticion = await fetch("http://localhost:8081/api/buscadores", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });

    const dataBuscador = await peticion.json();

    const peticion2 = await fetch("http://localhost:8081/api/postulantes", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });

    const dataPostulante = await peticion2.json();

    const matrizGustos = await calcularGustos(dataBuscador, dataPostulante);

    let parejas = [];

    let mapeo = await mapeoCitas();

    // Asignar parejas
    matrizGustos.forEach((fila, i) => {
        fila.forEach((gustosEncontrados, j) => {
            let buscador = `${dataBuscador[i].nombre} ${dataBuscador[i].apellido}`;
            let postulante = `${dataPostulante[j].nombre} ${dataPostulante[j].apellido}`;

            if (gustosEncontrados > 2 && !esCitaDuplicada(mapeo, buscador, postulante)) {
                parejas.push([buscador, postulante]);
            }
        });
    });

    return parejas;
}

// Manejo de evento de submit
document.getElementById("formCita").addEventListener("submit", async function (event) {
    event.preventDefault();

    enviarCitas(document.getElementById("cuerpoTabla")).then(() => {
        alert("Registrando");
        window.location.href = "index.jsp";
    });
});

async function mapeoCitas() {
    try {
        const peticion3 = await fetch("http://localhost:8081/api/citas", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        const dataCitas = await peticion3.json();

        const citasMap = {};

        dataCitas.forEach((cita) => {
            const key = `${cita.nombreCompletoBuscador}-${cita.nombreCompletoPostulante}`;
            citasMap[key] = true;
        });
        return citasMap;
    } catch (error) {
        console.error("Error al obtener citas: ", error);
        return {};
    }
}

function esCitaDuplicada(citasExistentes, buscador, postulante) {
    const key = `${buscador}-${postulante}`;

    // Evalua si no es null o undefined
    return !!citasExistentes[key];
}

function compararValores(String1, String2, diferenciaEsperada) {
    const num1 = parseInt(String1.match(/\d+/)[0]);
    const num2 = parseInt(String2.match(/\d+/)[0]);

    const diferencia = Math.abs(num1 - num2);

    return diferencia <= diferenciaEsperada;
}

function calcularGustos(dataBuscador, dataPostulante) {
    const numBuscadores = dataBuscador.length;
    const numPostulantes = dataPostulante.length;

    let gustosEnComun = Array.from({ length: numBuscadores }, () => Array(numPostulantes).fill(0));

    dataBuscador.forEach((buscador, i) => {
        dataPostulante.forEach((postulante, j) => {
            if (buscador.gustoContextura === postulante.contextura) {
                gustosEnComun[i][j] += 1;
            }

            if (compararValores(buscador.gustoEstatura, postulante.estatura, 3)) {
                gustosEnComun[i][j] += 1;
            }

            if (compararValores(buscador.gustoEdad, postulante.edad, 2)) {
                gustosEnComun[i][j] += 1;
            }

            if (buscador.gustoIdentidad === postulante.identidadGenero) {
                gustosEnComun[i][j] += 1;
            }

            if (buscador.gustoInteres === postulante.interesPrincipal) {
                gustosEnComun[i][j] += 1;
            }
        });
    });
    return gustosEnComun;
}

async function enviarCitas(cuerpoTabla) {
    let filas = cuerpoTabla.getElementsByTagName("tr");

    for (let i = 0; i < filas.length; i++) {
        let campos = {};

        campos.fechaHora = document.getElementById(`Fecha${i}`).value;
        campos.nombreCompletoBuscador = document.getElementById(`NombreB${i}`).value;
        campos.nombreCompletoPostulante = document.getElementById(`NombreP${i}`).value;

        const peticion = await fetch("http://localhost:8081/api/citas", {
            method: "POST",
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
    document.getElementById("formCita").reset();
}

// Agrega fila al body de la tabla con nombres de pareja
function agregarFila(nombreBuscador, nombrePostulante, indice) {
    let cuerpoTabla = document.getElementById("cuerpoTabla");
    // Crear una nueva fila
    let fila = document.createElement("tr");

    // Crear celdas para la nueva fila
    let celda1 = document.createElement("td");
    let celda2 = document.createElement("td");
    let celda3 = document.createElement("td");

    // Crear inputs para cada celda
    let inputFecha = document.createElement("input");
    inputFecha.setAttribute("type", "datetime-local");
    inputFecha.setAttribute("name", "Fecha");
    inputFecha.setAttribute("id", `Fecha${indice}`);
    inputFecha.setAttribute("required", "true");
    inputFecha.setAttribute("value", ``);
    inputFecha.classList.add("form-control");
    celda1.appendChild(inputFecha);

    let inputNombreB = document.createElement("input");
    inputNombreB.setAttribute("type", "text");
    inputNombreB.setAttribute("name", "NombreB");
    inputNombreB.setAttribute("id", `NombreB${indice}`);
    inputNombreB.setAttribute("value", nombreBuscador);
    inputNombreB.setAttribute("disabled", "true");
    inputNombreB.classList.add("form-control");
    celda2.appendChild(inputNombreB);

    let inputNombreP = document.createElement("input");
    inputNombreP.setAttribute("type", "text");
    inputNombreP.setAttribute("name", "NombreP");
    inputNombreP.setAttribute("id", `NombreP${indice}`);
    inputNombreP.setAttribute("value", nombrePostulante);
    inputNombreP.setAttribute("disabled", "true");
    inputNombreP.classList.add("form-control");
    celda3.appendChild(inputNombreP);

    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);

    cuerpoTabla.appendChild(fila);
}

function mensajeError() {
    const div = document.getElementById("bonito");

    const form = document.getElementById("formCita");

    if (form) {
        form.remove();
    }

    // Crear un nuevo elemento de párrafo para el mensaje
    const message = document.createElement("p");
    message.textContent = "No hay citas para agendar";
    message.setAttribute("class", "cabecera");

    // Agregar el mensaje al contenedor de la tabla
    div.appendChild(message);
}
