/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

document.getElementById("formPostulante").addEventListener("submit", async function (event) {
    event.preventDefault();
    let campos = {};

    campos.nombre = document.getElementById("NombrePostulante").value;
    campos.apellido = document.getElementById("ApellidoPostulante").value;
    campos.edad = document.getElementById("EdadPostulante").value;
    campos.estatura = document.getElementById("EstaturaPostulante").value;
    campos.profesion = document.getElementById("ProfesionPostulante").value;
    campos.contextura = document.getElementById("ContexturaPostulante").value;
    campos.estadoCivil = document.getElementById("EstadoCivilPostulante").value;
    campos.identidadGenero = document.getElementById("GeneroBPostulante").value;
    campos.correo = document.getElementById("CorreoPostulante").value;
    campos.telefono = document.getElementById("NumeroPostulante").value;
    campos.interesPrincipal = document.getElementById("InteresPrincipal").value;
    campos.disponibilidad = document.getElementById("Disponibilidad").value;
    
    if (campos.edad < 25 || campos.edad > 35){
        alert("Edad invalida para la inscripcion");
        return;
    }  

    if (campos.estatura < 100 || campos.estatura > 250){
        alert("Estatura invalida para la inscripcion");
        return;
    }
    
    
    const peticion = await fetch("http://localhost:8081/api/postulantes", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(campos)
    });

    const respuesta = await peticion.json();
    console.log(respuesta);
    alert("Registrado correctamente");
    document.getElementById('formPostulante').reset();
});
