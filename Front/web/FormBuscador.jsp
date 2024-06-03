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
                        
                        
                        
                        <form class="row g-3" id="formBuscador">
                            <div class="col-md-4 pt-15">
                                <label for="NombreBuscador" class="form-label">Nombres:</label>
                                <input type="text" name="NombreBuscador" class="form-control" id="NombreBuscador" required>
                            </div>
                            <div class="col-md-4">
                                <label for="ApellidoBuscador" class="form-label">Apellidos:</label>
                                <input type="text" name="ApellidoBuscador" class="form-control" id="ApellidoBuscador" required>
                            </div>
                            <div class="col-md-4">
                                <label for="GeneroBuscador" class="form-label">G�nero:</label>
                                <select id="GeneroBuscador" class="form-select" name="GeneroBuscador" required>
                                    <option selected disabled value="">Seleccione:</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                    <option value="Otro" disabled="">Otro</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="EdadBuscador" class="form-label">Edad:</label>
                                <input type="number" name="EdadBuscador" class="form-control" id="EdadBuscador" placeholder="Ejemplo: 25" required>
                            </div>
                            <div class="col-md-4">
                                <label for="EstaturaBuscador" class="form-label">Estatura:</label>
                                <input type="number" name="EstaturaBuscador" class="form-control" id="EstaturaBuscador" placeholder="Ejemplo: 180" required>
                            </div>
                            <div class="col-md-4">
                                <label for="ContexturaBuscador" class="form-label">Contextura Corporal:</label>
                                <select id="ContexturaBuscador" class="form-select" name="ContexturaBuscador" required>
                                    <option selected disabled value="">Seleccione su contextura</option>
                                    <option value="Delgada">Delgada</option>
                                    <option value="Media">Media</option>
                                    <option value="Ancha">Ancha</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="ProfesionBuscador" class="form-label">Profesi�n/Oficio:</label>
                                <input type="text" name="ProfesionBuscador" id="ProfesionBuscador" class="form-control" required>
                            </div>
                            <div class="col-md-6">
                                <label for="EstadoCivilB" class="form-label">Estado Civil:</label>
                                <select id="EstadoCivilB" class="form-select" name="EstadoCivilB" required>
                                    <option selected disabled value="">Seleccione:</option>
                                    <option value="Soltero">Soltero</option>
                                    <option value="Separado">Separado</option>
                                    <option value="Viudo">Viudo</option>
                                    <option value="Complicado">Es Complicado</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="CorreoBuscador" class="form-label">Correo:</label>
                                <input type="email" name="CorreoBuscador" class="form-control" id="CorreoBuscador" required>
                            </div>
                            <div class="col-md-6">
                                <label for="NumeroBuscador" class="form-label">Tel�fono:</label>
                                <input type="text" name="NumeroBuscador" id="NumeroBuscador"class="form-control" required>
                            </div>


                            <div id="lab" class="col-md-12">
                                <label>Gustos personales:</label>
                            </div>


                            <div class="col-md-6">
                                <label for="ContexPrefeBuscador" class="form-label">Contextura:</label>
                                <select id="ContexPrefeBuscador" class="form-select" name="ContexPrefeBuscador" required>
                                    <option selected disabled value="">Seleccione</option>
                                    <option value="Delgada">Delgada</option>
                                    <option value="Media">Media</option>
                                    <option value="Ancha">Ancha</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="EstaturaPreferidaBuscador" class="form-label">Estatura:</label>
                                <input type="number" name="EstaturaPreferidaBuscador" class="form-control" id="EstaturaPreferidaBuscador" placeholder="Ejemplo: 180" required>
                            </div>
                            <div class="col-md-4">
                                <label for="EdadPreferidaBuscador" class="form-label">Edad:</label>
                                <input type="number" name="EdadPreferidaBuscador" class="form-control" id="EdadPreferidaBuscador" placeholder="Ejemplo: 170" required>
                            </div>
                            <div class="col-md-4">
                                <label for="GeneroPreferido" class="form-label">G�nero:</label>
                                <select id="GeneroPreferido" class="form-select" name="GeneroPreferido" required>
                                    <option selected disabled value="">Seleccione:</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                    <option value="disabled" disabled="">Otro</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="GustoInteres" class="form-label">Inter�s:</label>
                                <select id="GustoInteres" class="form-select" name="GustoInteres" required>
                                    <option selected disabled value="">Seleccione:</option>
                                    <option value="Amigos">Amigos</option>
                                    <option value="Pareja">Pareja</option>
                                    <option value="Intimidad" >Intimidad</option>
                                    <option value="Folliamigos">Folliamigos</option>
                                </select>
                                
                            </div>
                            <div id="Boton" class="col-12">
                                <button type="submit" id="botonForm" class="btn btn-primary" name="EnviarDatos">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <script src="form-action-buscador.js"></script>
            
            <footer class="bg-dark text-center text-white mt-auto">
                <div class="text-center p-3" style="background-color: #F29A80">
                    � 2024 Universidad Distrital

                </div>
            </footer>
        </div>
    </body>
</html>
