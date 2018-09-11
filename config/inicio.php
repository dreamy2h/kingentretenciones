<?php 
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title>Inicio KingEntretenciones</title>
	<meta charset="utf-8">
 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="images/favicon.png"/>
	<link href="../css/bootstrap.min.css" rel="stylesheet">
	<link href="css/estilo.css" rel="stylesheet">
	<script src="../js/jquery.min.js" type="text/javascript"></script>
	<script src="../js/bootstrap.min.js" type="text/javascript"></script>
</head>
<body>
	<nav class="navbar navbar-default">
  		<div class="container-fluid">
    		<div class="navbar-header">
    			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span class="sr-only">Toggle navigation</span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			    </button>
      			<a class="navbar-brand" href="#">King - Entretenciones</a>
    		</div>

	    	<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      			<ul class="nav navbar-nav">
        			<li class="active"><a href="#" id="btn_index" onclick="setlink('modificar_index.php')">Index</a></li>
        			<li><a href="#" id="btn_quienes_somos" onclick="setlink('modificar_quienes_somos.php')">Quienes somos</a></li>
        			<li><a href="#" id="btn_productos" onclick="setlink('modificar_productos.php')">Productos</a></li>
      			</ul>
      		
      			<ul class="nav navbar-nav navbar-right">
        			<li class="dropdown">
          				<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Usuario<span class="caret"></span></a>
          				<ul class="dropdown-menu">
            				<li><a href="#">Clave</a></li>
            				<li><a href="#">Nombre de usuario</a></li>
            				<li role="separator" class="divider"></li>
            				<li><a href="#">Cerrar sesión</a></li>
          				</ul>
        			</li>
      			</ul>
    		</div><!-- /.navbar-collapse -->
  		</div><!-- /.container-fluid -->
	</nav>

	<div class="container">
		<div id="contenido"></div>
	</div>
	<script type="text/javascript" src="js/inicio.js"></script>
</body>
</html>