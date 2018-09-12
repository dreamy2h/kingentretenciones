<?php
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<div class="container-fluid">
		<div class="col-sm-12">
			<h1>Ingresar imágenes para slider</h1>
		</div>
		<form class="form-group">
			<div class="row">
				<div class="col-lg-6 col-md-6 col-sm-12">
					<div class="col-lg-12 col-md-12 col-sm-12">
						<h2>Slider 1</h2>
					</div>
					
					<div class="col-lg-8 col-md-8 col-sm-12">
						<input type="text" name="txt_num_sliders_1" id="txt_num_sliders_1" class="form-control" placeholder="Ingresar cantidad de imágenes (slider 1)">
					</div>

					<div class="col-lg-4 col-md-4 col-sm-12">
						<input type="button" class="btn btn-warning form-control" value="Agregar">
					</div>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-12">
					<div class="col-lg-12 col-md-12 col-sm-12">
						<h2>Slider 2</h2>
					</div>
					
					<div class="col-lg-8 col-md-8 col-sm-12">
						<input type="text" name="txt_num_sliders_2" id="txt_num_sliders_2" class="form-control" placeholder="Ingresar cantidad de imágenes (slider 2)">
					</div>

					<div class="col-lg-4 col-md-4 col-sm-12">
						<input type="button" class="btn btn-warning form-control" value="Agregar">
					</div>
				</div>
			</div>
		</form>
		<br><br>
	</div>
	<script type="text/javascript" src="js/modificar_index.js"></script>
</body>
</html>