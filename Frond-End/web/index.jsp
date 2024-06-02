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
    <link rel="stylesheet" href="Public/css/paneles.css">
    <title>Panel de Control</title>
    <style>
      a{
        text-decoration: none;
        color: black;
      }
      
    </style>
</head>
<body>
    
  <nav class="navbar navbar-dark navbar-expand-md sticky-top" style="background-color: #FFC2B5">
        <div class="container-fluid">
          <a href="index.jsp">
              <img class="brand_logo" src="Public/images/IconoCircular.png " class="brand_logo" alt="Logo">
          </a>
            <a class="navbar-brand flex-grow-1" href="#" id="titulo" style="">
            Speed Dating Colombia
          </a>
          <div >
            <div class="navbar-nav">
                <li><a class="nav-link active" aria-current="page" href="index.php">INICIO</a></li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      SEDES
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="sedea.php">SEDE A</a></li>
                      <li><a class="dropdown-item" href="sedeb.php">SEDE B</a></li> 
                    </ul>
                </li>
                <li><a class="nav-link" href="nosotros.php" style="color: white">NOSOTROS</a></li>
                <li><a class="nav-link" href="login.php" style="color: white">INGRESAR</a></li>
            </div>
          </div>
        </div>
    </nav>
    
    <!--GESTIONAR ESTUDIANTE-->
    <div class="row row-cols-1 row-cols-md-2 col-md-7 g-4" id="ficha">
        <div class="col" >
          <div class="card h-100">
            <center><img src="..//Public//Images//estudent.png" class="card-img-top" alt="..." id="foto"></center>
            <div class="card-body " >
              <h5 class="card-title">Gestionar Estudiantes</h5>
              <p class="card-text">A partir de las siguientes opciones seleccione la que acción que desea realizar</p>
            </div>
            <ul class="list-group list-group-flush">

                <div class="dropdown list-group-item">
                  <button class="btn dropdown-toggle" id="fondo" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="fondo">
                    Consulta Estudiantes
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" id="fondo1" href="consultaEstudiante.php">Consulta General</a></li>
                    <li><a class="dropdown-item" id="fondo2" href="CEEstudiante.php">Consulta Especifica</a></li>
                  </ul>
                </div>

                <li class="list-group-item"><a href="formestudiante.php">Agregar Estudiante</a> </li>
              </ul>
          </div>
        </div>

        <!--GESTIONAR SUPERVISOR-->
        <div class="col">
          <div class="card h-100">
            <center><img src="..//Public//Images//supervisor.png" class="card-img-top" alt="..." id="foto" ></center>
            <div class="card-body">
              <h5 class="card-title">Gestionar Supervisor</h5>
              <p class="card-text">A partir de las siguientes opciones seleccione la que acción que desea realizar</p>
            </div>
            <ul class="list-group list-group-flush">

                <div class="dropdown list-group-item">
                  <button class="btn dropdown-toggle" id="fondo" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="fondo">
                    Consulta Supervisores
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" id="fondo1" href="consultaSupervisor.php">Consulta General</a></li>
                    <li><a class="dropdown-item" id="fondo2" href="CESupervisor.php">Consulta Especifica</a></li>
                  </ul>
                </div>

                <li class="list-group-item"><a  href="formsuper.php" >Crear Supervisor</a> </li>

              </ul>
          </div>
        </div>

        <!--GESTIONAR CANDIDATOS-->
        <div class="col">
          <div class="card h-100">
            <center><img src="..//Public//Images//candi.png" class="card-img-top" alt="..." id="foto"></center>
            <div class="card-body">
              <h5 class="card-title">Gestionar Candidatos</h5>
              <p class="card-text">A partir de las siguientes opciones seleccione la que acción que desea realizar</p>
            </div>
            <ul class="list-group list-group-flush">

                <div class="dropdown list-group-item">
                  <button class="btn dropdown-toggle" id="fondo" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="fondo">
                    Consulta Candidatos
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" id="fondo1" href="consultaCandidatos.php">Consulta General</a></li>
                    <li><a class="dropdown-item" id="fondo2" href="CECandidato.php">Consulta Especifica</a></li>
                  </ul>
                </div>

                <li class="list-group-item"><a href="formcandidato.php">Agregar Candidato</a> </li>
              </ul>
          </div>
        </div>
        
        <!--GESTIONAR TARJETON-->
        <div class="col">
          <div class="card h-100">
            <center><img src="..//Public//Images//tarjeton.png" class="card-img-top" alt="..." id="foto" ></center>
            <div class="card-body">
              <h5 class="card-title">Gestionar Tarjetones</h5>
              <p class="card-text">A partir de las siguientes opciones seleccione la que acción que desea realizar</p>
            </div>
            <ul class="list-group list-group-flush">

                <div class="dropdown list-group-item">
                  <button class="btn dropdown-toggle" id="fondo" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="fondo">
                    Consulta Tarjetones
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" id="fondo1" href="consultaTarjetones.php">Consulta General</a></li>
                    <li><a class="dropdown-item" id="fondo2" href="CETarjeton.php">Consulta Especifica</a></li>
                  </ul>
                </div>

                <li class="list-group-item"><a  href="formTarjet.php" >Crear Tarjeton</a> </li>

              </ul>
          </div>
        </div>
    </div>
    <footer class="bg-dark text-center text-white" >
      <!-- Grid container -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2021 Instituto Técnico Industrial Piloto IED - Taller de Sistemas
        <a class="text-white" href="https://www.tecnicopiloto.edu.co/">tecnicopiloto.edu.co</a>
      </div>
      <!-- Copyright -->
    </footer>
</body>
</html>
