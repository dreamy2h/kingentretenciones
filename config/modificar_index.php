<?php
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<div class="col-sm-12">
		<h2>Administrar carpetas de imágenes</h2>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12">
				<form class="form-group" id="frm_crear_carpeta">
					<div class="row">
						<div class="col-lg-5 col-md-5 col-sm-12">
							<input type="text" name="txt_nombre_carpeta" id="txt_nombre_carpeta" class="form-control" placeholder="Nombre de carpeta">
						</div>

						<div class="col-lg-3 col-md-3 col-sm-12">
							<select class="form-control" id="cmb_tipo_carpeta" name="cmb_tipo_carpeta">
							    <option value="1">Eventos</option>
							    <option value="2">Promociones</option>
							    <option value="3">Productos</option>
							</select>
						</div>

						<div class="col-lg-2 col-md-2 col-sm-12">
							<input type="button" class="btn btn-primary form-control" value="Crear Carpeta" id="btn_crear_carpeta" name="btn_crear_carpeta">
						</div>

						<div class="col-lg-2 col-md-2 col-sm-12">
							<input type="button" class="btn btn-primary form-control" value="Cancelar" id="btn_cancelar" name="btn_crear_carpeta">
						</div>
					</div>
				</form>
			</div>
		</div>

		<div class="container-fluid">
            <br>
            <table id="grid_carpeta" class="table table-striped table-bordered nowrap" width="100%">
                <thead>
                    <tr>
                        <th width="10%">Identificador</th>
                        <th width="50%">Nombre de la Carpeta</th>
                        <th width="25%">Tipo de Carpeta</th>
                        <th width="5%"></th>
                        <th width="5%"></th>
                        <th width="5%"></th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Identificador</th>
                        <th>Nombre de la Carpeta</th>
                        <th>Tipo de Carpeta</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tfoot>
            </table> 
        </div>
	</div>

	<div id="dlg_adjuntar_img" class="modal fade" role="dialog">
		<div class="modal-dialog">
		    <div class="modal-content">
		      	<div class="modal-header">
		        	<button type="button" class="close" data-dismiss="modal">&times;</button>
		        	<h4 class="modal-title">Subir imágenes a la carpeta: </h4>
		      	</div>
		      	<div class="modal-body">
		        	<p id="prf_subttl_carpeta"></p>
		        	<input id="imagen_1" type="file" multiple="true" name="imagenes[]" class="file-loading">
		      	</div>
		      	<div class="modal-footer">
		        	<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		      	</div>
		    </div>
		</div>
	</div>
	<script type="text/javascript" src="js/modificar_index.js"></script>
</body>
</html>