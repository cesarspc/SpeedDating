<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

        <!--CSS-->
        <link rel="stylesheet" href="Recursos/css/FormBuscador.css">
        <title>Consulta Especifica Buscador</title>
        <style>
            a {
                text-decoration: none;
                color: black;
            }
            #Ocultar2{
                display: none;
            }
        </style>
    </head>
    <body>
        <div class="d-flex flex-column min-vh-100">
            <nav class="navbar navbar-dark navbar-expand-md sticky-top" style="background-color: #F29A80">
                <div class="container-fluid">
                    <a href="index.php">
                        <img class="brand_logo" src="Recursos/Images/iconoPCircuLar.png" alt="Logo">
                    </a>
                    <a id="titulo" class="navbar-brand flex-grow-1" href="index.jsp">
                        Speed Dating Colombia
                    </a>
                    <div>
                        <div class="navbar-nav">
                            <li><a class="nav-link active" aria-current="page" href="index.php">INICIO</a></li>
                            <li><a class="nav-link" href="nosotros.php" style="color: white">NOSOTROS</a></li>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="container-fluid" id="bonito">
                <div><center><h1>Consulta Espec�fica Postulante</h1></center></div>
                <div class="d-flex justify-content-center form_container">
                    <form class="row row-cols-lg-auto g-3 align-items-center" id="formBuscar">
                        <div class="col-12">
                            <div class="input-group">
                                <div class="input-group-text"><span class="material-symbols-outlined">
                                        person
                                    </span></div>
                                <input type="text" class="form-control" id="inputId" placeholder="ID Postulante" name="txtCodigo"  >
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-dark" >Consultar</button>
                        </div>
                </div> 
                </form>




                <!-- A PARTI DE ACA SE DEBERIA DESPLEGAR EL FORM SOLO SI LA CONSULTA ES CORRECTA -->   

                <div id="ficha"  class="d-flex justify-content-center flex-grow-1">
                    <div id="Ocultar2" class="user_card">
                        <div class="d-flex justify-content-center" id="PosicionLogo">
                            <div class="brand_logo_container">
                                <img src="Recursos/Images/Postulante.png" class="brand_logo" id="brand_logo1" alt="Logo">
                            </div>
                        </div>


                        <div class="d-flex justify-content-center form_container pt-5">



                            <form class="row g-3" id="formPostulante">
                                <div class="col-md-4 pt-15">
                                    <label for="NombrePostulante" class="form-label">Nombres:</label>
                                    <input type="text" name="NombrePostulante" class="form-control" id="NombrePostulante" disabled value="">
                                </div>
                                <div class="col-md-4">
                                    <label for="ApellidoPostulante" class="form-label">Apellidos:</label>
                                    <input type="text" name="ApellidoPostulante" class="form-control" id="ApellidoPostulante" disabled value="">
                                </div>

                                <div class="col-md-4">
                                    <label for="GeneroPostulante" class="form-label">Genero: </label>
                                    <input type="text" name="GeneroPostulante" class="form-control" id="GeneroPostulante" disabled value="">
                                </div>


                                <div class="col-md-6">
                                    <label for="ProfesionPostulante" class="form-label">Profesi�n/Oficio:</label>
                                    <input type="text" name="ProfesionPostulante" id="ProfesionPostulante" class="form-control" disabled value="">
                                </div>

                                <div class="col-md-6">
                                    <label for="CorreoPostulante" class="form-label">Correo:</label>
                                    <input type="email" name="CorreoPostulante" class="form-control" id="CorreoPostulante" disabled value="">
                                </div>
                                <div class="col-md-6">
                                    <label for="NumeroPostulante" class="form-label">Tel�fono:</label>
                                    <input type="text" name="NumeroPostulante" id="NumeroPostulante"class="form-control" disabled value="">
                                </div>

                                <div class="col-md-6">
                                    <label for="EstadoPagoPostulante" class="form-label">Estado Pago:</label>
                                    <select id="EstadoPagoPostulante" class="form-select" name="EstadoPagoPostulante" required value="">
                                        <option selected disabled value="">Seleccione:</option>
                                        <option value=true>Pagado</option>
                                        <option value=false>Sin pagar</option>
                                    </select>
                                </div>

                                <div id="Boton" class="col-6">
                                    <input type="submit" value="Actualizar" id="actualizar" class="btn btn-light" disabled="">
                                </div> 
                                <div id="Boton" class="col-6">
                                    <input type="button" value="Eliminar" id="eliminar" class="btn btn-light" disabled="">
                                </div> 
                                <script src="postulante/action-especifica-postulante.js"></script>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <footer class="bg-dark text-center text-white mt-auto">
                <div class="text-center p-3" style="background-color: #F29A80">
                    � 2024 Universidad Distrital

                </div>
            </footer>
            <script>
            function consultar(event) {
                event.preventDefault();
                // Simulaci�n de una consulta
                var codigo = document.querySelector('input[name="txtCodigo"]').value;
                if (codigo === "12345") { // Aqu� va la l�gica de la consulta real
                    document.getElementById("Ocultar2").style.display = "block";
                    // Aqu� puedes rellenar el formulario con los datos obtenidos
                    document.getElementById("NombreBuscador").value = "Juan";
                    document.getElementById("ApellidoBuscador").value = "P�rez";
                    document.getElementById("GeneroBuscador").value = "Masculino";
                    document.getElementById("ProfesionBuscador").value = "Ingeniero";
                    document.getElementById("CorreoBuscador").value = "juan.perez@example.com";
                    document.getElementById("NumeroBuscador").value = "123456789";
                    document.getElementById("EstadoPagoBuscador").value = "Pagado";
                } else {
                    alert("No se encontraron datos para el ID ingresado.");
                }
            }
        </script>
        </div>
    </body>
</html>
