/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
let dataPostulantes = {};
document.getElementById("formPostulante").addEventListener("submit", async function (event) {
    event.preventDefault();

    dataPostulantes.pagoHecho = document.getElementById("EstadoPagoPostulante").value;

    try {
        const peticion = await fetch("http://localhost:8081/api/postulantes", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataPostulantes),
        }).then(() => {
            alert("Registro actualizado");
            limpiarForm();
        });
    } catch (error) {
        console.error(error);
        return;
    }
});

document.getElementById("formBuscar").addEventListener("submit", async function (event) {
    event.preventDefault();

    try {
        fetch(`http://localhost:8081/api/postulantes/${document.getElementById("inputId").value}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status === 400) {
                    limpiarForm();
                    alert("No hubo coincidencias");
                }
                return response.json();
            })
            .then((data) => {
                dataPostulantes = data;

                document.getElementById("actualizar").disabled = false;
                document.getElementById("eliminar").disabled = false;

                document.getElementById("NombrePostulante").value = dataPostulantes.nombre;
                document.getElementById("ApellidoPostulante").value = dataPostulantes.apellido;
                document.getElementById("GeneroPostulante").value = dataPostulantes.identidadGenero;
                document.getElementById("ProfesionPostulante").value = dataPostulantes.profesion;
                document.getElementById("CorreoPostulante").value = dataPostulantes.correo;
                document.getElementById("NumeroPostulante").value = dataPostulantes.telefono;
                document.getElementById("EstadoPagoPostulante").value = dataPostulantes.pagoHecho;
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    } catch (error) {
        console.error(error);
        limpiarForm();
        return;
    }
});

document.getElementById("eliminar").addEventListener("click", async function () {
    try {
        const peticion = await fetch("http://localhost:8081/api/postulantes", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataPostulantes),
        }).then(() => {
            alert("Registro eliminado");
            limpiarForm();
        });
    } catch (error) {
        console.error(error);
        return;
    }
});

function limpiarForm() {
    document.getElementById("actualizar").disabled = true;
    document.getElementById("eliminar").disabled = true;
    document.getElementById("formPostulante").reset();
}
