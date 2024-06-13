/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
datacitas = [];
resultados = [];

const botonFinalizar = document.getElementById("botonForm");

botonFinalizar.addEventListener("click", async function (event) {
    event.preventDefault();
    alert("Enviando correos");
    enviarCorreos();
});

async function enviarCorreos() {
    dataCitas = await sendRequest("citas", {}, "GET");

    if (!comprobarCitas()) {
        return;
    }

    await obtenerResultados();

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
                    continue;
            }

            // Los datos de contacto de buscador van a postulante y viceversa
            let destinatario = i === 0 ? 1 : 0;

            postCorreo(dataResultado[destinatario].correo, asunto, mensaje);
        }
    });

    
}

function postCorreo(destinatario, asunto, mensaje) {
    let campos = {};

    campos.destinatario = destinatario;
    campos.asunto = asunto;
    campos.mensaje = mensaje;

    sendRequest("send-email", campos, "POST")
        .then(() => {})
        .catch(() => console.log("Error al enviar correo"));
}

function comprobarCitas() {
    const nCitas = dataCitas.length;
    let calificadas = 0;
    dataCitas.forEach((cita) => {
        if (cita.resultadoCita != 0) {
            calificadas += 1;
        }
    });

    if(nCitas == 0){
        mensajeError();
        return false;
    }

    if (nCitas != calificadas) {
        mensajeError();
        return false;
    }
    
    return true;
}

async function obtenerResultados() {
    const promesas = dataCitas.map(async (cita) => {
        try {
            const buscador = await sendRequest(`buscadores/${cita.idBuscador}`, {}, "GET");
            const postulante = await sendRequest(`postulantes/${cita.idPostulante}`, {}, "GET");
            if (!!buscador && !!postulante) {
                return [buscador, postulante, cita.resultadoCita];
            }
        } catch (err) {
            console.error(err);
        }
    });

    // Esperar a que llegue toda la informacion
    resultados = await Promise.all(promesas);
}

function mensajeError() {
    alert("No se pudo finalizar. Revise gestión de citas");
}
