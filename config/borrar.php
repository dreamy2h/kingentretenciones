<?php
	session_start();
	require("conexion.php");
	$carpeta_nueva = $_GET['ruta']."/";
	$carpetaAdjunta="imagenes/";
	$estructura = $carpetaAdjunta.$carpeta_nueva;

	if($_SERVER['REQUEST_METHOD']=="DELETE"){
		parse_str(file_get_contents("php://input"),$datosDELETE);
		$key= $datosDELETE['key'];

		$delete = "DELETE FROM carpeta_imagenes_det WHERE nombre_imagen = ?";
		$st = $mysqli->prepare($delete);
		$st->bind_param("s", $key);

		if ($st->execute()) {
			if (unlink($estructura.$key)) {
				echo 0;
			} else {
				echo "Falló al eliminar imagen";
			}
		} else {
			echo "Falló al eliminar el registro";
		}
	}
?>