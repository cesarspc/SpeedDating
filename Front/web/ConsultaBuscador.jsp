<%-- 
    Document   : ConsulaBuscador
    Created on : 3/06/2024, 1:18:21?p.?m.
    Author     : Familia Mora
--%>

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
        <title>Consultar Buscador</title>
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
                            <li><a class="nav-link active" aria-current="page" href="index.php">INICIO</a></li>
                            <li><a class="nav-link" href="nosotros.php" style="color: white">NOSOTROS</a></li>
                        </div>
                    </div>
                </div>
            </nav>

            <div class="container-fluid" id="bonito">

                <div><h1 class="texto" ><center>Consulta Buscador</center></h1></div>

                    <table class="table table-bordered" id="tablaB">
                        <thead class="cabecera">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Edad</th>
                                <th scope="col">Estatura</th>
                                <th scope="col">Profesion</th>
                                <th scope="col">Contextura</th>
                                <th scope="col">Estado Civil</th>
                                <th scope="col">Genero</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Gusto Contextura</th>
                                <th scope="col">Gusto Interes</th>
                                <th scope="col">Gusto Estatura</th>
                                <th scope="col">Gusto Identidad</th>
                                <th scope="col">Gusto Edad</th>
                                <th scope="col">Pago</th>
                                

                            </tr>
                        </thead>
                        <tbody class="cuerpoTabla" id="cuerpoTabla">

                        </tbody>
                    </table>
            </div>
            <script src="buscador/action-general-buscador.js"></script>
            <footer class="bg-dark text-center text-white mt-auto">
                <div class="text-center p-3" style="background-color: #F29A80">
                    © 2024 Universidad Distrital
                </div>
            </footer>
        </div>
    </body>
</html>
