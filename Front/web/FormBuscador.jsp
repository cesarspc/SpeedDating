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
                            <img src="Recursos/Images/Buscador2.png" class="brand_logo" id="brand_logo1" alt="Logo">
                        </div>
                    </div>
                    <div class="d-flex justify-content-center form_container pt-5">
                        <form class="row g-3" method="POST" action="//AQUI VA EL ACTION DE DONDE SE DIRIJE LA INFO//">
                            <div class="col-md-4 pt-15">
                                <label for="Nombre" class="form-label">Nombres:</label>
                                <input type="text" name="NombreBuscador" class="form-control" id="NombreBuscador" required>
                            </div>
                            <div class="col-md-4">
                                <label for="inputPassword4" class="form-label">Apellidos:</label>
                                <input type="text" name="ApellidoBuscador" class="form-control" id="inputApellido" required>
                            </div>
                            <div class="col-md-4">
                                <label for="inputPassword4" class="form-label">Género:</label>
                                <select id="inputState" class="form-select" name="EstadoCivilBuscador" required>
                                    <option selected disabled>Seleccione:</option>
                                    <option value="first">Masculino</option>
                                    <option value="second">Femenino</option>
                                    <option value="third" disabled="">Otro</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="inputAddress" class="form-label">Edad:</label>
                                <input type="number" name="EdadBuscador" class="form-control" id="inputAddress" placeholder="Ejemplo: 25" required>
                            </div>
                            <div class="col-md-4">
                                <label for="inputAddress2" class="form-label">Estatura:</label>
                                <input type="text" name="EstaturaBuscador" class="form-control" id="inputAddress2" placeholder="Ejemplo: 180" required>
                            </div>
                            <div class="col-md-4">
                                <label for="inputCity" class="form-label">Contextura Corporal:</label>
                                <select id="inputState" class="form-select" name="ContexturaBuscador" required>
                                    <option selected disabled>Seleccione su contextura</option>
                                    <option value="first">Delgada</option>
                                    <option value="second">Media</option>
                                    <option value="third">Ancha</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="inputState" class="form-label">Profesión/Oficio:</label>
                                <input type="text" name="ProfesionBuscador" class="form-control" required>
                            </div>
                            <div class="col-md-6">
                                <label for="EstadoCivil" class="form-label">Estado Civil:</label>
                                <select id="inputState" class="form-select" name="EstadoCivilBuscador" required>
                                    <option selected disabled>Seleccione:</option>
                                    <option value="first">Soltero</option>
                                    <option value="second">Separado</option>
                                    <option value="third">Viudo</option>
                                    <option value="four">Es Complicado</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail14" class="form-label">Correo:</label>
                                <input type="email" name="CorreoBuscador" class="form-control" id="inputEmal14" required>
                            </div>
                            <div class="col-md-6">
                                <label for="inputState" class="form-label">Teléfono:</label>
                                <input type="text" name="NumeroBuscador" class="form-control" required>
                            </div>
                            <div id="lab" class="col-md-12">
                                <label>Gustos personales:</label>
                            </div>
                            <div class="col-md-6">
                                <label for="inputCity" class="form-label">Contextura:</label>
                                <select id="inputState" class="form-select" name="ContexPrefeBuscador" required>
                                    <option selected disabled>Seleccione</option>
                                    <option value="first">Delgada</option>
                                    <option value="second">Media</option>
                                    <option value="third">Ancha</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="inputAddress2" class="form-label">Estatura:</label>
                                <input type="text" name="EstaturaPreferidaBuscador" class="form-control" id="inputAddress2" placeholder="Ejemplo: 180" required>
                            </div>
                            <div class="col-md-6">
                                <label for="inputAddress2" class="form-label">Edad:</label>
                                <input type="text" name="EdadPreferidaBuscador" class="form-control" id="inputAddress2" placeholder="Ejemplo: 170" required>
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Género:</label>
                                <select id="inputState" class="form-select" name="GeneroPreferido" required>
                                    <option selected disabled>Seleccione:</option>
                                    <option value="first">Masculino</option>
                                    <option value="second">Femenino</option>
                                    <option value="third" disabled="">Otro</option>
                                </select>
                            </div>
                            <div id="Boton" class="col-12">
                                <button type="submit" class="btn btn-primary" name="EnviarDatos">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <footer class="bg-dark text-center text-white mt-auto">
                <div class="text-center p-3" style="background-color: #F29A80">
                    © 2024 Universidad Distrital
                    <a class="text-white" href="https://www.tecnicopiloto.edu.co/">tecnicopiloto.edu.co</a>
                </div>
            </footer>
        </div>
    </body>
</html>
