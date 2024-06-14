form = document.getElementById("formPostulante");

// Maneja evento de agregar postulante
form.addEventListener("submit", async function (event) {
    event.preventDefault();

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

    sendRequest("postulantes", data, "POST")
        .then((result) => {
            alert("Datos registrados");
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Error al registrar datos");
        });

    form.reset();
});
