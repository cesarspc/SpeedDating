const form = document.getElementById("formCita");
const submit = document.getElementById("disponibilidad");

let dataPostulante = [];
let dataBuscador = [];
let idsBuscador = [];
let idsPostulante = [];

// Manejo de evento de submit
form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const cuerpoTabla = document.getElementById("cuerpoTabla");
    enviarCitas(cuerpoTabla).then(() => {
        alert("Registrando");
        window.location.href = "index.jsp";
    });
});

// Agregar filas segun las parejas que haya
obtenerParejas()
    .then((parejas) => {
        if (parejas.length === 0) {
            mensajeError();
            return;
        }
        parejas.forEach((pareja, indice) => {
            addRow(pareja[0], pareja[1], pareja[2], indice);
        });
    })
    .catch(() => {
        mensajeError();
    });

// Obtiene las parejas que hacen MATCH
async function obtenerParejas() {
    dataBuscador = await sendRequest("buscadores", {}, "GET");

    dataPostulante = await sendRequest("postulantes", {}, "GET");

    const matrizGustos = calcularGustos();

    let dataParejas = [];

    let mapeo = await mapeoCitas();

    // Asignar parejas
    matrizGustos.forEach((fila, i) => {
        fila.forEach((gustosEncontrados, j) => {
            let buscador = `${dataBuscador[i].nombre} ${dataBuscador[i].apellido}`;
            let postulante = `${dataPostulante[j].nombre} ${dataPostulante[j].apellido}`;

            if (
                gustosEncontrados > 2 &&
                !esCitaDuplicada(mapeo, buscador, postulante) &&
                dataBuscador[i].pagoHecho &&
                dataPostulante[j].pagoHecho
            ) {
                dataParejas.push([buscador, postulante, dataPostulante[j].disponibilidad]);
                idsBuscador.push(dataBuscador[i].id);
                idsPostulante.push(dataPostulante[j].id);
            }
        });
    });

    return dataParejas;
}

// Calcula los gustos de las parejas
function calcularGustos() {
    const numBuscadores = dataBuscador.length;
    const numPostulantes = dataPostulante.length;

    let gustosEnComun = Array.from({ length: numBuscadores }, () => Array(numPostulantes).fill(0));

    // Para cada pareja suma los gustos en comun
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

// Para dos String que contienen valores numericos retorna si son cercanos en la diferencia dada
function compararValores(String1, String2, diferenciaEsperada) {

    // Obtiene solo los valores numericos de los parametros
    const num1 = parseInt(String1.match(/\d+/)[0]);
    const num2 = parseInt(String2.match(/\d+/)[0]);

    const diferencia = Math.abs(num1 - num2);

    return diferencia <= diferenciaEsperada;
}

// Obtiene un mapeo de nombre y apellidos de los participantes de la cita para evitar duplicados
async function mapeoCitas() {
    try {
        const dataCitas = await sendRequest("citas", {}, "GET");

        // Asigna claves
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

// Funcion para validar que la cita se agende en disponibilidad deseada
function validarDisponibilidad(opcion, dateTime) {
    let validacion = true;
    let mensaje = "";
    let day = new Date(dateTime.value).getUTCDay();

    switch (opcion) {
        case "Fines de Semana":
            validacion = !(day === 0 || day === 6);
            mensaje = "La disponibilidad del postulante es fines de semana";
            break;
        case "Entre Semana":
            validacion = day === 0 || day === 6;
            mensaje = "La disponibilidad del postulante es entre semana";
            break;
        default:
            validacion = false;
            mensaje = "";
            break;
    }

    dateTime.setCustomValidity("");

    // Dependiendo la opcion valida
    if (validacion) {
        dateTime.setCustomValidity(mensaje);
    } else {
        dateTime.setCustomValidity("");
    }
    if (!form.checkValidity()) {
        submit.click();
    }
}

async function enviarCitas(cuerpoTabla) {
    let filas = cuerpoTabla.getElementsByTagName("tr");

    for (let i = 0; i < filas.length; i++) {
        let fechaHora = document.getElementById(`Fecha${i}`).value;
        let nomBuscador = document.getElementById(`NombreB${i}`).value;
        let nomPostulante = document.getElementById(`NombreP${i}`).value;

        let campos = {};

        campos.fechaHora = fechaHora;
        campos.nombreCompletoBuscador = nomBuscador;
        campos.nombreCompletoPostulante = nomPostulante;
        campos.idBuscador = idsBuscador[i];
        campos.idPostulante = idsPostulante[i];

        console.log(JSON.stringify(campos));

        sendRequest("citas", campos, "POST")
            .then((response) => {
                console.log("Se envio una cita");
            })
            .catch((err) => console.error("Error enviando cita: " + err));
    }
    document.getElementById("formCita").reset();
}

// Agrega fila al body de la tabla con nombres de pareja
function addRow(nombreBuscador, nombrePostulante, disponibilidad, indice) {
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

    document.getElementById(`Fecha${indice}`).addEventListener("change", async function () {
        validarDisponibilidad(disponibilidad, document.getElementById(`Fecha${indice}`));
    });

    document.getElementById(`Fecha${indice}`).addEventListener("blur", async function () {
        validarDisponibilidad(disponibilidad, document.getElementById(`Fecha${indice}`));
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
    message.textContent = "No hay citas para agendar. Agregue buscadores y postulantes con respectivos pagos.";
    message.setAttribute("class", "cabecera");

    // Agregar el mensaje al contenedor de la tabla
    div.appendChild(message);
}
