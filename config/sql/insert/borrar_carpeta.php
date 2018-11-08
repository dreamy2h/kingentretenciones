<?php
	session_start();
	require("../../conexion.php");
	$id_carpeta = $_POST['id_carpeta'];

	$delete = "DELETE FROM carpeta_imagenes WHERE id = ?";

		// echo $delete;
	$st = $mysqli->prepare($delete);
	$st->bind_param("i", $id_carpeta);

	if ($st->execute()) {
		if (is_dir("$id_carpeta")) {
		    rmdir("$id_carpeta");
		    // $data = array('respuesta' => 1);
		    // $filas[] = $data;
		    // echo '{"data":'.json_encode($filas).'}';
		    echo "1";
		} else {
			// $data = array('respuesta' => 1);
		 	// $filas[] = $data;
		 	// echo '{"data":'.json_encode($filas).'}';
			echo "1";
		}
	} else {
		// $data = array('respuesta' => "Falló al eliminar carpeta");
	 	// $filas[] = $data;
	 	// echo '{"data":'.json_encode($filas).'}';
	 	echo "Falló al eliminar carpeta";
	}

	$st->close();
	$mysqli->close();
?>