var id_carpeta = $("#id_carpeta").val();

$(document).ready(function() {
	var grid_productos_det = $('#grid_productos_det').DataTable({
		"responsive": true,
        "ajax": "sql/consultas/datagrid_productos_det.php?id_carpeta=" + id_carpeta,
        "columns": [
            { "data": "id" },
            { "data": "nombre_imagen" },
            { "data": "nombre_producto" },
            { "data": "descripcion_producto" },
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

	$("#grid_productos_det tbody").on("click", "button.descripcion", function () {
        var data = grid_productos_det.row( $(this).parents("tr") ).data();

        var id=data['id'];
        
        
    });
});