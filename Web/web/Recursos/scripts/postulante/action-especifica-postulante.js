/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
let dataPostulantes = {};
const formPrincipal = document.getElementById("formPostulante");
const formBuscar = document.getElementById("formBuscar");
const botonEliminar = document.getElementById("eliminar");
const botonActualizar = document.getElementById("actualizar");

//Obtiene cuando se envia formulario de actualizar
formPrincipal.addEventListener("submit", async function (event) {
    event.preventDefault();

    dataPostulantes.pagoHecho = document.getElementById("EstadoPagoPostulante").value;

    await sendRequest("postulantes", dataPostulantes, "PUT")
        .then(() => {
            alert("Registro actualizado");
            limpiarForm();
        })
        .catch((err) => {
            limpiarForm();
            console.error(err);
        });
});

// Obtiene cuando se busca un id
formBuscar.addEventListener("submit", async function (event) {
    event.preventDefault();

    sendRequest(`postulantes/${document.getElementById("inputId").value}`, {}, "GET")
        .then((data) => {
            dataPostulantes = data;

            botonActualizar.disabled = false;
            botonEliminar.disabled = false;

            document.getElementById("NombrePostulante").value = dataPostulantes.nombre;
            document.getElementById("ApellidoPostulante").value = dataPostulantes.apellido;
            document.getElementById("GeneroPostulante").value = dataPostulantes.identidadGenero;
            document.getElementById("ProfesionPostulante").value = dataPostulantes.profesion;
            document.getElementById("CorreoPostulante").value = dataPostulantes.correo;
            document.getElementById("NumeroPostulante").value = dataPostulantes.telefono;
            document.getElementById("EstadoPagoPostulante").value = dataPostulantes.pagoHecho;
        })
        .catch((error) => {
            alert("No hubo coincidencias");
            limpiarForm();
            console.error("Error:", error);
        });
});

// Obtiene evento de presionar boton eliminar
botonEliminar.addEventListener("click", async function () {
    //Uso de metodo de DELETE
    sendRequest("postulantes", dataPostulantes, "DELETE")
        .then(() => {
            alert("Registro eliminado");
            limpiarForm();
        })
        .catch((err) => {
            alert("Error al eliminar");
            console.error(err);
        });
});

function limpiarForm() {
    document.getElementById("actualizar").disabled = true;
    botonEliminar.disabled = true;
    formPrincipal.reset();
}
