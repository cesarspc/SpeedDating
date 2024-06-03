<%-- 
    Document   : index
    Created on : 1/06/2024, 10:49:52 p. m.
    Author     : Familia Mora
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
    <head>
        <!-- Required meta tags -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>

        <!--CSS-->
        <link rel="stylesheet" href="Recursos/css/paneles.css">
        <title>Panel de Control</title>
        <style>
            a {
                text-decoration: none;
                color: black;
            }
        </style>
    </head>
    <body class="d-flex flex-column min-vh-100">
        <nav class="navbar navbar-dark navbar-expand-md sticky-top" style="background-color: #F29A80">
            <div class="container-fluid">
                <a href="index.php">
                    <img class="brand_logo" src="Recursos/Images/iconoPCircuLar.png" class="brand_logo" alt="Logo">
                </a>
                <a id="titulo" class="navbar-brand flex-grow-1" href="#">
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

        <div class="container flex-grow-1">
            <div class="row row-cols-1 row-cols-md-3 col-md-15 g-4" id="ficha">
                <div class="col">
                    <div class="card h-100" id="tarjeta1">
                        <center><img src="Recursos/Images/Buscador2.png" class="card-img-top" alt="..." id="foto"></center>
                        <div class="card-body">
                            <h5 class="card-title">Gestionar Buscadores</h5>
                            <p class="card-text">A partir de las siguientes opciones seleccione la que acción que desea realizar</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <div class="dropdown list-group-item" id="Subindice3">
                                <button class="btn dropdown-toggle" id="fondo" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Consulta Buscadores
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" id="fondo1" href="consultaEstudiante.php">Consulta General</a></li>
                                    <li><a class="dropdown-item" id="fondo2" href="CEEstudiante.php">Gestión Específica</a></li>
                                </ul>
                            </div>
                            <li class="list-group-item"><a href="FormBuscador.jsp">Agregar Buscador</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100" id="tarjeta2">
                        <center><img src="Recursos/Images/Postulante.png" class="card-img-top" alt="..." id="foto"></center>
                        <div class="card-body">
                            <h5 class="card-title">Gestionar Postulantes</h5>
                            <p class="card-text">A partir de las siguientes opciones seleccione la que acción que desea realizar</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <div class="dropdown list-group-item" id="Subindice2">
                                <button class="btn dropdown-toggle" id="fondo" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Consulta Postulantes
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" id="fondo1" href="consultaSupervisor.php">Consulta General</a></li>
                                    <li><a class="dropdown-item" id="fondo2" href="CESupervisor.php">Gestión Especifica</a></li>
                                </ul>
                            </div>
                            <li class="list-group-item"><a href="FormPostulante.jsp">Agregar Postulante</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100" id="tarjeta3">
                        <center><img src="Recursos/Images/Cita2.png" class="card-img-top" alt="..." id="foto"></center>
                        <div class="card-body">
                            <h5 class="card-title">Gestionar Citas</h5>
                            <p class="card-text">A partir de las siguientes opciones seleccione la que acción que desea realizar</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><a href="GestionCita.jsp">Gestionar Cita</a> </li>
                            <li class="list-group-item" id="AgendarCita"><a href="">Agendar Cita</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <footer class="bg-dark text-center text-white mt-auto">
            <div class="text-center p-3" style="background-color: #F29A80">
                © 2024 Universidad Distrital
            </div>
        </footer>
    </body>
</html>
