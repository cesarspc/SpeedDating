/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

document.getElementById("AgendarCita").addEventListener("click", async function (event) {
    event.preventDefault();

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

    const matrizGustos = calcularGustos(dataBuscador, dataPostulante);

    let parejas = [];

    // Asignar parejas
    matrizGustos.forEach((fila, i) => {
        fila.forEach((gustosEncontrados, j) => {
            if (gustosEncontrados > 2) {
                parejas.push([`${dataBuscador[i].nombre} ${dataBuscador[i].apellido}`, `${dataPostulante[j].nombre} ${dataPostulante[j].apellido}`]);
            }
        });
    });

    enviarCitas(parejas);
});

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

async function enviarCitas(parejas, dataBuscador, dataPostulante) {
    let buscadores;
    parejas.forEach(async (pareja) => {
        let campos = {};

        campos.fechaHora = "2022-05-01T00:00:00";
        campos.nombreCompletoBuscador = pareja[0];
        campos.nombreCompletoPostulante = pareja[1];

        const peticion = await fetch("http://localhost:8081/api/citas", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(campos),
        }).then((response) => {
            respuesta = response.json;
            console.log(respuesta);
            alert("Registrado correctamente");
        });
    });
}
