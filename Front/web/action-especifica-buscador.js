/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
let dataBuscadores = {};
document.getElementById("formBuscador").addEventListener("submit", async function (event) {
    event.preventDefault();

    dataBuscadores.pagoHecho = document.getElementById("EstadoPagoBuscador").value;

    try {
        const peticion = await fetch("http://localhost:8081/api/buscadores", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataBuscadores),
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
    idValor = document.getElementById("idBuscador");
    idValor.value = document.getElementById("inputId").value;

    try {
        fetch(`http://localhost:8081/api/buscadores/${idValor.value}`, {
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
                dataBuscadores = data;

                document.getElementById("actualizar").disabled = false;
                document.getElementById("eliminar").disabled = false;

                document.getElementById("NombreBuscador").value = dataBuscadores.nombre;
                document.getElementById("ApellidoBuscador").value = dataBuscadores.apellido;
                document.getElementById("GeneroBuscador").value = dataBuscadores.identidadGenero;
                document.getElementById("ProfesionBuscador").value = dataBuscadores.profesion;
                document.getElementById("CorreoBuscador").value = dataBuscadores.correo;
                document.getElementById("NumeroBuscador").value = dataBuscadores.telefono;
                document.getElementById("EstadoPagoBuscador").value = dataBuscadores.pagoHecho;
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
        const peticion = await fetch("http://localhost:8081/api/buscadores", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataBuscadores),
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
    document.getElementById("formBuscador").reset();
}
