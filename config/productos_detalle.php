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
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12">
				<form class="form-group" id="frm_crear_carpeta">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12">
							<input type="text" name="txt_nombre_producto" id="txt_nombre_producto" class="form-control disabled" placeholder="Nombre del Producto">
						</div>

						<div class="col-lg-12 col-md-12 col-sm-12">
							<textarea class="form-control disabled" placeholder="Descripción del Producto"></textarea>
						</div>
					</div>

					<br>
					<div class="row">
						<div class="col-lg-6 col-md-6 col-sm-12">
							<input type="button" class="btn btn-primary form-control disabled" value="Crear Carpeta" id="btn_crear_carpeta" name="btn_crear_carpeta">
						</div>

						<div class="col-lg-6 col-md-6 col-sm-12">
							<input type="button" class="btn btn-danger form-control disabled" value="Cancelar" id="btn_cancelar" name="btn_crear_carpeta">
						</div>
					</div>
				</form>
			</div>
		</div>
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