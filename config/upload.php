<?php
	session_start();
	$carpeta_nueva = $_GET['ruta']."/";
	$carpetaAdjunta="imagenes/";
	$estructura = $carpetaAdjunta.$carpeta_nueva;

	function guardar_imagenes($estructura) {
		// Contar envían por el plugin
		$Imagenes =count(isset($_FILES['imagenes']['name'])?$_FILES['imagenes']['name']:0);
		$infoImagenesSubidas = array();
		for($i = 0; $i < $Imagenes; $i++) {
			// El nombre y nombre temporal del archivo que vamos para adjuntar
			$nombreArchivo=isset($_FILES['imagenes']['name'][$i])?$_FILES['imagenes']['name'][$i]:null;
			$nombreTemporal=isset($_FILES['imagenes']['tmp_name'][$i])?$_FILES['imagenes']['tmp_name'][$i]:null;
			
			$rutaArchivo=$estructura.$nombreArchivo;
			
			move_uploaded_file($nombreTemporal,$rutaArchivo);
			
			$infoImagenesSubidas[$i]=array("caption"=>"$nombreArchivo","height"=>"120px","url"=>"borrar.php","key"=>$nombreArchivo);
			$ImagenesSubidas[$i]="<img  height='120px'  src='$rutaArchivo' class='file-preview-image'>";
			}
		$arr = array("file_id"=>0,"overwriteInitial"=>true,"initialPreviewConfig"=>$infoImagenesSubidas,
					 "initialPreview"=>$ImagenesSubidas);
		echo json_encode($arr);	
	}

	if (file_exists($estructura)) {
		guardar_imagenes($estructura);	
	} else {
		if (!mkdir($estructura, 0777, true)) {
			echo "Fallo al crear las carpetas.";
			exit();
		}

		guardar_imagenes($estructura);
	}
	
	
?>