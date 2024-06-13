/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
let dataBuscadores = {};
const formBuscar = document.getElementById("formBuscar");
const formPrincipal = document.getElementById("formBuscador");
const botonEliminar = document.getElementById("eliminar");
const botonActualizar = document.getElementById("actualizar");

// Captura cuando se presiona boton actualizar
formPrincipal.addEventListener("submit", function (event) {
    event.preventDefault();

    dataBuscadores.pagoHecho = document.getElementById("EstadoPagoBuscador").value;

    // Actualizacion de datos
    sendRequest("buscadores", dataBuscadores, "PUT").then(() => {
        alert("Registro actualizado");
        limpiarForm();
    });
});

// Captura cuando se busca un id
formBuscar.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Obtiene los datos del buscador que se buscó

    await sendRequest(`buscadores/${document.getElementById("inputId").value}`, {}, "GET")
        .then((data) => {
            dataBuscadores = data;

            botonActualizar.disabled = false;
            botonEliminar.disabled = false;

            document.getElementById("NombreBuscador").value = dataBuscadores.nombre;
            document.getElementById("ApellidoBuscador").value = dataBuscadores.apellido;
            document.getElementById("GeneroBuscador").value = dataBuscadores.identidadGenero;
            document.getElementById("ProfesionBuscador").value = dataBuscadores.profesion;
            document.getElementById("CorreoBuscador").value = dataBuscadores.correo;
            document.getElementById("NumeroBuscador").value = dataBuscadores.telefono;
            document.getElementById("EstadoPagoBuscador").value = dataBuscadores.pagoHecho;
        })
        .catch((error) => {
            alert("No hubo coincidencias");
            limpiarForm();
            console.error("Error:", error);
        });
});

// Maneja evento de presionar boton eliminar
botonEliminar.addEventListener("click", async function () {
    await sendRequest("buscadores", dataBuscadores, "DELETE")
        .then(() => {
            alert("Registro eliminado");
            limpiarForm();
        })
        .catch((err) => {
            console.error("Error: " + err);
        });
});

function limpiarForm() {
    botonActualizar.disabled = true;
    botonEliminar.disabled = true;
    formPrincipal.reset();
}
