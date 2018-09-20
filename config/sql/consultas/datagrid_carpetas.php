<?php
	session_start();
	require("../../conexion.php");

	$consulta="SELECT id, glosa as carpeta, IFNULL(ELT(FIELD(tipo, 1, 2, 3),'Eventos','Promociones','Productos'), 'Sin categoría') as tipo, tipo as id_tipo FROM carpeta_imagenes order by id asc";
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