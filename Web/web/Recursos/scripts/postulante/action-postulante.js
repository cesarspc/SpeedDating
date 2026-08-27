const form = document.getElementById("formPostulante");

function validarRango(id, minimo, maximo, mensaje) {
    const campo = document.getElementById(id);
    const valor = Number(campo.value);
    campo.setCustomValidity(Number.isInteger(valor) && valor >= minimo && valor <= maximo ? "" : mensaje);
}

// Maneja evento de agregar postulante
form.addEventListener("submit", async function (event) {
    event.preventDefault();

    validarRango("EdadPostulante", 25, 35, "La edad debe estar entre 25 y 35.");
    validarRango("EstaturaPostulante", 100, 250, "La estatura debe estar entre 100 y 250 cm.");

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    let data = {
        nombre: document.getElementById("NombrePostulante").value,
        apellido: document.getElementById("ApellidoPostulante").value,
        edad: document.getElementById("EdadPostulante").value,
        estatura: document.getElementById("EstaturaPostulante").value,
        profesion: document.getElementById("ProfesionPostulante").value,
        contextura: document.getElementById("ContexturaPostulante").value,
        estadoCivil: document.getElementById("EstadoCivilPostulante").value,
        identidadGenero: document.getElementById("GeneroBPostulante").value,
        correo: document.getElementById("CorreoPostulante").value,
        telefono: document.getElementById("NumeroPostulante").value,
        interesPrincipal: document.getElementById("InteresPrincipal").value,
        disponibilidad: document.getElementById("Disponibilidad").value,
    };

    if (data.edad < 25 || data.edad > 35) {
        alert("Edad invalida para la inscripcion. Debe ser de 25 a 35.");
        return;
    }

    if (data.estatura < 100 || data.estatura > 250) {
        alert("Estatura invalida para la inscripcion.");
        return;
    }

    try {
        await sendRequest("postulantes", data, "POST");
        alert("Datos registrados");
        form.reset();
    } catch (error) {
        console.error("Error al registrar postulante:", error);
        alert(error.message || "No fue posible registrar los datos.");
    }
});
