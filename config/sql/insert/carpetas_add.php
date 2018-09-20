<?php 
	session_start();
	require("../../conexion.php");

	$nombre_carpeta = $_POST['nombre_carpeta'];
	$tipo_carpeta = $_POST['tipo_carpeta'];

	$insert = "INSERT INTO carpeta_imagenes (glosa, tipo)
			VALUES (?,?)";

	$st=$mysqli->prepare($insert);
	$st->bind_param("si", $nombre_carpeta, $tipo_carpeta);

	if ($st->execute()) {
		echo 1;
	} else {
		echo "Ocurrió un error al ingresar la carpeta.";
	}
	
	$st->close();
	$mysqli->close();
?>