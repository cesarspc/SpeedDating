const form = document.getElementById("formBuscador");

function validarRango(id, minimo, maximo, mensaje) {
    const campo = document.getElementById(id);
    const valor = Number(campo.value);
    campo.setCustomValidity(Number.isInteger(valor) && valor >= minimo && valor <= maximo ? "" : mensaje);
}

// Captura cuando se envia el formulario
form.addEventListener("submit", async function (event) {
    event.preventDefault();

    validarRango("EdadBuscador", 25, 35, "La edad debe estar entre 25 y 35.");
    validarRango("EdadPreferidaBuscador", 25, 35, "La edad preferida debe estar entre 25 y 35.");
    validarRango("EstaturaBuscador", 100, 250, "La estatura debe estar entre 100 y 250 cm.");
    validarRango("EstaturaPreferidaBuscador", 100, 250, "La estatura preferida debe estar entre 100 y 250 cm.");

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const data = {
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

    try {
        await sendRequest("buscadores", data, "POST");
        alert("Datos registrados");
        form.reset();
    } catch (error) {
        console.error("Error al registrar buscador:", error);
        alert(error.message || "No fue posible registrar los datos.");
    }
});
