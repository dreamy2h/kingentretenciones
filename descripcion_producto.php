<?php 
	require("config/conexion.php");
	$id_producto = $_POST["id"];

	$consulta = "SELECT 
					id,
                    id_carpeta,
                    nombre_imagen,
                    nombre_producto,
                    descripcion_producto 
                FROM 
                	carpeta_imagenes_det 
                WHERE 
                	id = ?";

	$st = $mysqli->prepare($consulta);
    $st->bind_param("i", $id_producto);
    $st->execute();
    $st->store_result();
	$st->bind_result($id, $id_carpeta, $nombre_imagen, $nombre_producto, $descripcion_producto);
    $st->fetch();

	$ruta = "config/imagenes/" . $id_carpeta . "/" . $nombre_imagen;
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<div class="container">
		<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			<img src="<?php echo $ruta; ?>" class="img-responsive" title="<?php echo $nombre_producto; ?>">
		</div>
		<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
			<h4><?php echo $descripcion_producto; ?></h4>
		</div>
	</div>
</body>
</html>