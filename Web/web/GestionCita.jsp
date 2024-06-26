<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>

        <!--CSS-->
        <link rel="stylesheet" href="Recursos/css/GestionCita.css">
        <title>Ingresar Buscador</title>
        <style>
            a {
                text-decoration: none;
                color: black;
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
                        <li><a class="nav-link active" aria-current="page" href="index.jsp">INICIO</a></li>
                        
                    </div>
                    </div>
                </div>
            </nav>

            <div class="container-fluid" id="bonito">

                <div><h1 class="texto" ><center>Gestión de Citas</center></h1></div>

                <form method="post" class="" id="formCita">
                    <table class="table table-bordered">
                        <thead class="cabecera">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Fecha y Hora</th>
                                <th scope="col">Nombre Buscador</th>
                                <th scope="col">Nombre Postulante</th>
                                <th scope="col">Calificación Cita Buscador</th>
                                <th scope="col">Calificación Cita Postulante</th>
                                <th scope="col">Resultado</th>
                            </tr>
                        </thead>
                        <tbody class="cuerpoTabla" id="cuerpoTabla">



                        </tbody>
                    </table>
                    <div id="Boton" class="col-12">
                        <button type="submit" id="calificacion" class="btn btn-dark" >Guardar Calificaciones</button>
                    </div>
                    
                </form>
                
            </div>
            <script src="Recursos/scripts/common.js"></script>
            <script src="Recursos/scripts/cita/action-gestion-cita.js"></script>
            <footer class="bg-dark text-center text-white mt-auto">
                <div class="text-center p-3" style="background-color: #F29A80">
                    © 2024 Universidad Distrital

                </div>
            </footer>
        </div>

    </body>
</html>
