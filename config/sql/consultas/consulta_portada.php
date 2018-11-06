 <?php
    require("../../conexion.php");
    define("PORTADA", 4);
    define("ACTIVADA", 1);

    $tipo_carpeta = PORTADA;
    $estado = ACTIVADA;

    $consulta = "SELECT id, nombre_imagen, id_carpeta FROM carpeta_imagenes_det WHERE id_carpeta = (SELECT id FROM carpeta_imagenes WHERE tipo = ? and activa = ?)";

    $st = $mysqli->prepare($consulta);
    $st->bind_param("ii", $tipo_carpeta, $estado);
    $st->execute();
    $st->store_result();
	$st->bind_result($id, $nombre_imagen, $id_carpeta);
    $st->fetch();
    
    echo $id_carpeta . "/" . $nombre_imagen;

    $st->close();
    $mysqli->close();
?>