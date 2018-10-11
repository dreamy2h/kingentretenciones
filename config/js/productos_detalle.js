$(document).ready(function() {
	var grid_carpeta = $('#grid_productos_det').DataTable({
		"responsive": true,
        "ajax": "sql/consultas/datagrid_productos_det.php",
        "columns": [
            { "data": "id" },
            { "data": "nombre_imagen" },
            { "defaultContent": "<button type='button' class='descripcion btn btn-default' title='Descripción de productos'><i class='material-icons' style='font-size:25px;'>create</i></button>" }
        ],
        "language": {
        	"decimal": "",
        	"emptyTable": "No hay información",
        	"info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
        	"infoEmpty": "Mostrando 0 a 0 de 0 Entradas",
        	"infoFiltered": "(Filtrado de _MAX_ total entradas)",
	        "infoPostFix": "",
	        "thousands": ",",
	        "lengthMenu": "Mostrar _MENU_ Entradas",
	        "loadingRecords": "Cargando...",
	        "processing": "Procesando...",
	        "search": "Buscar:",
	        "zeroRecords": "Sin resultados encontrados",
	        "paginate": {
	            "first": "Primero",
	            "last": "Ultimo",
	            "next": "Siguiente",
	            "previous": "Anterior"
	        }
        }
	});
});