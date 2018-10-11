<?php
	session_start();
	require("../../conexion.php");

	$consulta="SELECT id, nombre_imagen FROM carpeta_imagenes_det WHERE id_carpeta = 3 order by id asc";
	$execute=$mysqli->query($consulta);

	while($data=$execute->fetch_assoc()){
		$filas[]=$data;
	}

	if(empty($filas)){
	    echo '{"data":[]}';
	}else{
		echo '{"data":'.json_encode($filas).'}';
	}

	$execute->free();
	$mysqli->close();
?>