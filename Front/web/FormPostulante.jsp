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
        <link rel="stylesheet" href="Recursos/css/FormBuscador.css">
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
                            <li><a class="nav-link active" aria-current="page" href="index.php">INICIO</a></li>
                            <li><a class="nav-link" href="nosotros.php" style="color: white">NOSOTROS</a></li>
                        </div>
                    </div>
                </div>
            </nav>
            <div id="ficha" class="d-flex justify-content-center flex-grow-1">
                <div class="user_card">
                    <div class="d-flex justify-content-center" id="PosicionLogo">
                        <div class="brand_logo_container">
                            <img src="Recursos/Images/Postulante.png" class="brand_logo" id="brand_logo1" alt="Logo">
                        </div>
                    </div>
                    <div class="d-flex justify-content-center form_container pt-5">
                        <form class="row g-3 " method="POST" action="//AQUI VA EL ACTION DE DONDE SE DIRIJE LA INFO//">
                            <div class="col-md-4 pt-15">
                                <label for="NombrePostulante" class="form-label">Nombres:</label>
                                <input type="text" name="NombrePostulante" class="form-control" id="NombrePostulante" required>
                            </div>
                            <div class="col-md-4">
                                <label for="ApellidoPostulante" class="form-label">Apellidos:</label>
                                <input type="text" name="ApellidoPostulante" class="form-control" id="ApellidoPostulante" required>
                            </div>
                            <div class="col-md-4">
                                <label for="GeneroPostulante" class="form-label">Género:</label>
                                <select id="GeneroBPostulante" class="form-select" name="GeneroPostulante" required>
                                    <option selected disabled value="">Seleccione:</option>
                                    <option value="first">Masculino</option>
                                    <option value="second">Femenino</option>
                                    <option value="third" disabled="">Otro</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="EdadPostulante" class="form-label">Edad:</label>
                                <input type="number" name="EdadPostulante" class="form-control" id="EdadPostulante" placeholder="Ejemplo: 25" required>
                            </div>
                            <div class="col-md-4">
                                <label for="EstaturaPostulante" class="form-label">Estatura:</label>
                                <input type="number" name="EstaturaPostulante" class="form-control" id="EstaturaPostulante" placeholder="Ejemplo: 180" required>
                            </div>
                            <div class="col-md-4">
                                <label for="ContexturaPostulante" class="form-label">Contextura Corporal:</label>
                                <select id="ContexturaPostulante" class="form-select" name="ContexturaPostulante" required>
                                    <option selected disabled value="">Seleccione su contextura</option>
                                    <option value="first">Delgada</option>
                                    <option value="second">Media</option>
                                    <option value="third">Ancha</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="ProfesionPostulante" class="form-label">Profesión/Oficio:</label>
                                <input type="text" name="ProfesionPostulante" id="ProfesionPostulante" class="form-control" required>
                            </div>
                            <div class="col-md-6">
                                <label for="EstadoCivilPostulante" class="form-label">Estado Civil:</label>
                                <select id="EstadoCivilPostulante" class="form-select" name="EstadoCivilPostulante" required>
                                    <option selected disabled value="">Seleccione:</option>
                                    <option value="first">Soltero</option>
                                    <option value="second">Separado</option>
                                    <option value="third">Viudo</option>
                                    <option value="four">Es Complicado</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="CorreoPostulante" class="form-label">Correo:</label>
                                <input type="email" name="CorreoPostulante" class="form-control" id="CorreoPostulante" required>
                            </div>
                            <div class="col-md-6">
                                <label for="NumeroPostulante" class="form-label">Teléfono:</label>
                                <input type="text" name="NumeroPostulante" id="NumeroPostulante"class="form-control" required>
                            </div>


                          
                            <div class="col-md-4">
                                <label for="InteresPrincipal" class="form-label">Interés Principal:</label>
                                <select id="InteresPrincipal" class="form-select" id name="InteresPrincipal" required>
                                    <option selected disabled value="">Seleccione:</option>
                                    <option value="first">Amigos</option>
                                    <option value="second">Pareja</option>
                                    <option value="third" >Intimidad</option>
                                    <option value="four">Folliamigos</option>
                                </select>
                                
                            </div>
                            
                            <div class="col-md-4">
                                <label for="InteresPrincipal" class="form-label">Disponibilidad 1:</label>
                                <input class="form-control" type="datetime-local" id="fecha1" name="fecha1" required>
                            </div>
                            
                            <div class="col-md-4">
                                <label for="InteresPrincipal" class="form-label">Disponibilidad 2:</label>
                                <input class="form-control" type="datetime-local" id="fecha1" name="fecha1" required>
                            </div>
                            
                            <div id="Boton" class="col-12">
                                <button type="submit" id="botonForm" class="btn btn-primary" name="EnviarDatos">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <footer class="bg-dark text-center text-white mt-auto">
                <div class="text-center p-3" style="background-color: #F29A80">
                    © 2024 Universidad Distrital

                </div>
            </footer>
        </div>
    </body>
</html>
