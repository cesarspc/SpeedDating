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

    const numBuscadores = dataBuscador.length;
    const numPostulantes = dataPostulante.length;

    let gustosEnComun = Array.from({ length: numBuscadores }, () => Array(numPostulantes).fill(0));

    dataBuscador.forEach((buscador, i) => {
        dataPostulante.forEach((postulante, j) => {
            if (buscador.gustoContextura === postulante.contextura) {
                gustosEnComun[i][j] += 1;
            }

            if (compararValores(buscador.gustoEstatura, postulante.estatura, 7)) {
                gustosEnComun[i][j] += 1;
            }
        });
    });

    console.log(gustosEnComun);
});

function compararValores(String1, String2, diferenciaEsperada) {
    const num1 = parseInt(String1.match(/\d+/)[0]);
    const num2 = parseInt(String2.match(/\d+/)[0]);

    const diferencia = Math.abs(num1 - num2);

    return diferencia <= diferenciaEsperada;
}
