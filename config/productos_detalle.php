<?php 
	session_start();
	$id_carpeta = $_POST["id_carpeta"];
	$nombre_carpeta = $_POST["nombre_carpeta"];
?>
<!DOCTYPE html>
<html>
<body>
	<input type="hidden" name="id_carpeta" id="id_carpeta" value="<?php echo $id_carpeta; ?>">
	<div class="container-fluid">
		<h3><?php echo $nombre_carpeta ?></h3>
        <br>
        <table id="grid_productos_det" class="table table-striped table-bordered nowrap" width="100%">
            <thead>
                <tr>
                    <th width="35%">Identificador</th>
                    <th width="45%">Nombre de la Imagen</th>
                    <th width="20%"></th
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th width="35%">Identificador</th>
                    <th width="45%">Nombre de la Imagen</th>
                    <th width="20%"></th>
                </tr>
            </tfoot>
        </table> 
    </div>
    <script type="text/javascript" src="js/productos_detalle.js"></script>   
</body>
</html>