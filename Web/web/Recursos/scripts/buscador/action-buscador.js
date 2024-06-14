form = document.getElementById("formBuscador");

// Captura cuando se envia el formulario
form.addEventListener("submit", async function (event) {
    event.preventDefault();

    data = {
        nombre: document.getElementById("NombreBuscador").value,
        apellido: document.getElementById("ApellidoBuscador").value,
        edad: document.getElementById("EdadBuscador").value,
        estatura: document.getElementById("EstaturaBuscador").value,
        profesion: document.getElementById("ProfesionBuscador").value,
        contextura: document.getElementById("ContexturaBuscador").value,
        estadoCivil: document.getElementById("EstadoCivilB").value,
        identidadGenero: document.getElementById("GeneroBuscador").value,
        correo: document.getElementById("CorreoBuscador").value,
        telefono: document.getElementById("NumeroBuscador").value,

        gustoContextura: document.getElementById("ContexPrefeBuscador").value,
        gustoInteres: document.getElementById("GustoInteres").value,
        gustoEstatura: document.getElementById("EstaturaPreferidaBuscador").value,
        gustoIdentidad: document.getElementById("GeneroPreferido").value,
        gustoEdad: document.getElementById("EdadPreferidaBuscador").value,
    };

    // Validaciones para el formulario
    if (data.edad < 25 || data.edad > 35) {
        alert("Edad invalida para la inscripcion. Debe ser de 25 a 35.");
        return;
    }

    if (data.gustoEdad < 25 || data.gustoEdad > 35) {
        alert("Gusto edad invalido para la inscripcion. Debe ser de 25 a 35.");
        return;
    }

    if (data.estatura < 100 || data.estatura > 250) {
        alert("Estatura invalida para la inscripcion.");
        return;
    }

    if (data.gustoEstatura < 100 || data.gustoEstatura > 250) {
        alert("Gusto estatura invalido para la inscripcion.");
        return;
    }

    // Llama al metodo en common.js
    sendRequest("buscadores", data, "POST")
        .then((result) => {
            alert("Datos registrados");
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Error al registrar datos");
        });
    
    form.reset();
});
