var id_carpeta = $("#id_carpeta").val();
var id_producto = null;

function limpiar_data(valor) {
    if (valor == null) {
        return "";
    } else {
        return valor;
    }
}

function guardar_det() {
    $("#frm_producto_det").validate({
        debug: true,
        errorClass: "my-error-class",
        rules:  {
            txt_nombre_producto: {
                required: true
            },
            txt_descripcion_producto: {
                required: true
            }
        },
        messages: {
            txt_nombre_producto: {
                required: "Campo nombre es obligatorio"
            },
            txt_descripcion_producto: {
                required: "campo descripcion es obligatorio",
            }
        }
    });

    if ($("#frm_producto_det").valid()) {
        var nombre_producto = $("#txt_nombre_producto").val();
        var descripcion_producto = $("#txt_descripcion_producto").val();

        $.ajax({
            url: "sql/insert/producto_det_add.php",
            data: {
                id_producto:id_producto,
                nombre_producto:nombre_producto,
                descripcion_producto:descripcion_producto 
            },
            type: "POST",
            success: function(data) {
                if (data==1) {
                    actualizar_grid_productos();
                    $("#alerta_mensaje").text("Detalle del producto fue ingresado con éxito.");
                    $(".alert").alert()
                } else {
                    $("#alerta_error").text(data);
                    $(".alert").alert()
                }
            }
        });
    }
}

$(document).ready(function() {
    $("#btn_guardar_det").click(guardar_det);
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

        var id_producto = data["id"];
        var nombre_producto = data["nombre_producto"];
        var descripcion_producto = data["descripcion_producto"];

        nombre_producto = limpiar_data(nombre_producto);
        descripcion_producto = limpiar_data(descripcion_producto);

        $("#txt_nombre_producto").text(nombre_producto);
        $("#txt_descripcion_producto").text(descripcion_producto);
        $("#txt_nombre_producto").attr("disabled",false);
        $("#txt_descripcion_producto").attr("disabled",false);

        $("#btn_guardar_det").removeClass("disabled");
        $("#btn_cancelar_det").removeClass("disabled");

        $("#txt_nombre_producto").focus();
    });
});