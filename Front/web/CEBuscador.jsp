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
                <div><center><h1>Consulta Específica Buscador</h1></center></div>
                <div class="d-flex justify-content-center form_container">
                    <form class="row row-cols-lg-auto g-3 align-items-center" id="formBuscar">
                        <div class="col-12">
                            <div class="input-group">
                                <div class="input-group-text"><span class="material-symbols-outlined">
                                        person
                                    </span></div>
                                <input required="" type="number" class="form-control" id="inputId" placeholder="ID Buscador" name="txtCodigo" value="" >
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-dark" >Consultar</button>
                        </div>
                </div> 
                </form>




                <!-- A PARTI DE ACA SE DEBERIA DESPLEGAR EL FORM SOLO SI LA CONSULTA ES CORRECTA -->   

                <div id="ficha" class="d-flex justify-content-center flex-grow-1">
                    <div class="user_card">
                        <div class="d-flex justify-content-center" id="PosicionLogo">
                            <div class="brand_logo_container">
                                <img src="Recursos/Images/Buscador2.png" class="brand_logo" id="brand_logo1" alt="Logo">
                            </div>
                        </div>


                        <div class="d-flex justify-content-center form_container pt-5">



                            <form class="row g-3" id="formBuscador">
                                <input id="idBuscador" name="prodId" type="hidden" value=0 />
                                <div class="col-md-4 pt-15">
                                    <label for="NombreBuscador" class="form-label">Nombres:</label>
                                    <input type="text" name="NombreBuscador" class="form-control" id="NombreBuscador" disabled value="">
                                </div>
                                <div class="col-md-4">
                                    <label for="ApellidoBuscador" class="form-label">Apellidos:</label>
                                    <input type="text" name="ApellidoBuscador" class="form-control" id="ApellidoBuscador" disabled value="">
                                </div>

                                <div class="col-md-4">
                                    <label for="GeneroBuscador" class="form-label">Género:</label>
                                    <input type="text" name="GeneroBuscador" class="form-control" id="GeneroBuscador" disabled value="">
                                </div>


                                <div class="col-md-6">
                                    <label for="ProfesionBuscador" class="form-label">Profesión/Oficio:</label>
                                    <input type="text" name="ProfesionBuscador" id="ProfesionBuscador" class="form-control" disabled value="">
                                </div>

                                <div class="col-md-6">
                                    <label for="CorreoBuscador" class="form-label">Correo:</label>
                                    <input type="email" name="CorreoBuscador" class="form-control" id="CorreoBuscador" disabled value="">
                                </div>
                                <div class="col-md-6">
                                    <label for="NumeroBuscador" class="form-label">Teléfono:</label>
                                    <input type="text" name="NumeroBuscador" id="NumeroBuscador"class="form-control" disabled value="">
                                </div>

                                <div class="col-md-6">
                                    <label for="EstadoPagoBuscador" class="form-label">Estado Pago:</label>
                                    <select id="EstadoPagoBuscador" class="form-select" name="EstadoPagoBuscador" required value="">
                                        <option selected disabled value="">Seleccione:</option>
                                        <option value=true>Pagado</option>
                                        <option value=false>Sin pagar</option>
                                    </select>
                                </div><br>
                                <div id="Boton" class="col-6">
                                    <button disabled="" type="submit" id="actualizar" class="btn btn-light" >Actualizar</button>
                                </div> 
                                <div id="Boton" class="col-6">
                                    <input type="button" value="Eliminar" id="eliminar" class="btn btn-light" " disabled="">
                                </div> 
                                <script src="action-especifica-buscador.js"></script>

                            </form>
                        </div>
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
