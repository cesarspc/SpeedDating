/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
datacitas = [];
resultados = [];

document.getElementById("botonForm").addEventListener("click", async function (event) {
    event.preventDefault();
    alert("Enviando correos");
    enviarCorreos();
});

async function enviarCorreos() {
    // Buscadores
    dataCitas = await obtenerCitas();

    if (!comprobarCitas()) {
        return;
    }

    obtenerResultados()
        .then((result) => {
            // para cada cita, envia correo segun el resultado
            resultados.forEach((dataResultado) => {
                // 0 para buscador, 1 para postulante
                for (i = 0; i < 2; i++) {
                    let asunto = "RESULTADOS DE CITA - SPEED DATING";
                    let mensaje = "";
                    switch (dataResultado[2]) {
                        // PAREJA
                        case 1:
                            mensaje = `Estamos felices de que hayas encontrado el amor en Speed Dating, a continuación te damos los datos de tu ser amado!! Nombre: ${dataResultado[i].nombre}, Apellido: ${dataResultado[i].apellido}, Celular: ${dataResultado[i].telefono}, Correo: ${dataResultado[i].correo}`;
                            break;

                        // AMISTAD
                        case 2:
                            mensaje = `Estamos felices de que hayas encontrado una amistad en Speed Dating, a continuación te damos sus datos de contacto!! Nombre: ${dataResultado[i].nombre}, Apellido: ${dataResultado[i].apellido}, Celular: ${dataResultado[i].telefono}, Correo: ${dataResultado[i].correo}`;
                            break;

                        default:
                            break;
                    }

                    // Los datos de contacto de buscador van a postulante y viceversa
                    let destinatario = i === 0 ? 1 : 0;

                    postCorreo(dataResultado[destinatario].correo, asunto, mensaje);
                }
            });
        })
        .catch((err) => {});
}

function postCorreo(destinatario, asunto, mensaje) {
    let campos = {};

    campos.destinatario = destinatario;
    campos.asunto = asunto;
    campos.mensaje = mensaje;

    fetch("http://localhost:8081/send-email", {
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
        .catch(() => alert("Error al enviar correo"));
}

function comprobarCitas() {
    const nCitas = dataCitas.length;
    let calificadas = 0;
    dataCitas.forEach((cita) => {
        if (cita.resultadoCita != 0) {
            calificadas += 1;
        }
    });

    if (nCitas != calificadas) {
        mensajeError();
        return false;
    }
    return true;
}

async function obtenerResultados() {
    const promesas = dataCitas.map(async (cita) => {
        try {
            const buscador = await obtenerPersona(0, cita.idBuscador);
            const postulante = await obtenerPersona(1, cita.idPostulante);
            if (!!buscador && !!postulante) {
                return [buscador, postulante, cita.resultadoCita];
            }
        } catch (err) {
            console.error(err);
        }
    });

    // Esperar a que todas las promesas se resuelvan
    resultados = await Promise.all(promesas);
}

async function obtenerCitas() {
    try {
        const peticion = await fetch(`http://localhost:8081/api/citas`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        const data = await peticion.json();

        if (data.length === 0) {
            mensajeError();
            return [];
        }

        return data;
    } catch (error) {
        mensajeError();
        return [];
    }
}

async function obtenerPersona(repositorio, id) {
    repositorios = ["buscadores", "postulantes"];
    try {
        const peticion = await fetch(`http://localhost:8081/api/${repositorios[repositorio]}/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        const data = await peticion.json();

        return data;
    } catch (error) {
        mensajeError();
        return null;
    }
}

function mensajeError() {
    alert("No se pudo finalizar. Revise gestión de citas");
}
