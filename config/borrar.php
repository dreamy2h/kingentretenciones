<?php
	session_start();
	$carpeta_nueva = $_GET['ruta']."/";
	$carpetaAdjunta="imagenes/";
	$estructura = $carpetaAdjunta.$carpeta_nueva;

	if($_SERVER['REQUEST_METHOD']=="DELETE"){
		parse_str(file_get_contents("php://input"),$datosDELETE);
		$key= $datosDELETE['key'];
		unlink($estructura.$key);
		
		echo 0;
	}
?>