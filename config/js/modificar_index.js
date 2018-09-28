function validar_form() {
	$("#frm_crear_carpeta").validate({
 		debug: true,
 		errorClass: "my-error-class",
		rules:  {
			txt_nombre_carpeta: {
				required: true
			}
		},
		messages: {
			txt_nombre_carpeta: {
				required: "Ingrese el nombre de la carpeta"
			}
		}
 	});

 	if ($("#frm_crear_carpeta").valid()) {
 		crear_carpeta();
 	}
}

function crear_carpeta() {
	var nombre_carpeta = $("#txt_nombre_carpeta").val();
	var tipo_carpeta = $("#cmb_tipo_carpeta").val();

	$.ajax({
 		url: "sql/insert/carpetas_add.php",
 		data: {
 			nombre_carpeta:nombre_carpeta,
 			tipo_carpeta:tipo_carpeta 
 		},
 		type: "POST",
 		success: function(data) {
 			if (data==1) {
            	actualizar_grid_carpetas();
            	$("#alerta_mensaje").text("Carpeta ingresada de forma correcta.");
            	$(".alert-success").removeClass("hidden");
            	$('#frm_crear_carpeta')[0].reset();
            	window.setTimeout(ocultar_alert,3000,"alert-success");
            } else {
            	$("#alerta_error").text(data);
            	$(".alert-danger").removeClass("hidden");
				window.setTimeout(ocultar_alert,3000,"alert-success");
            }
 		}
 	});
}

function ocultar_alert(id_classalert) {
	$(".alert-danger" ).addClass("hidden");
	$(".alert-success" ).addClass("hidden");
}

function actualizar_grid_carpetas() {
	 $("#grid_carpeta").dataTable().fnReloadAjax();
}

$(document).ready(function() {
	$("#btn_crear_carpeta").click(validar_form);
	var i = 0;
	var grid_carpeta = $('#grid_carpeta').DataTable({
        "responsive": true,
        "ajax": "sql/consultas/datagrid_carpetas.php",
        "columns": [
            { "data": "id" },
            { "data": "carpeta" },
            { "data": "tipo" },
            { "defaultContent": "<button type='button' class='adjuntar btn btn-default' title='Adjuntar Imágenes'><i class='material-icons' style='font-size:25px;color:green'>attach_file</i></button>" },
            { "defaultContent": "<button type='button' class='editar btn btn-default' title='Editar Datos Carpeta'><i class='material-icons' style='font-size:25px;color:blue'>update</i></button>" },
            { "defaultContent": "<button type='button' class='eliminar btn btn-default' title='Eliminar Carpeta'><i class='material-icons' style='font-size:25px;color:red'>delete</i></button>"},
            { 
                "data": "id_tipo",
                "render": function(data, type, row)
                {
                    const PRODUCTOS = 3;
                    var boton_disabled;
                    if (data == PRODUCTOS) {
                        boton_disabled = "<button type='button' class='descripcion btn btn-default' title='Agregar Descripción a los Productos'><i class='material-icons' style='font-size:25px;'>settings</i></button>";
                    } else {
                        boton_disabled = "...";
                    }

                    return boton_disabled;
                }
            }
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

    $("#grid_carpeta tbody").on("click", "button.adjuntar", function () {
        var data = grid_carpeta.row( $(this).parents("tr") ).data();

        var id=data['id'];
        var carpeta=data['carpeta'];
        var tipo=data['tipo'];

        $("#prf_subttl_carpeta").text(carpeta + ", " + tipo + ". Máximo 20 imágenes.");
        $("#divContentSubirImg").load(
            "subir_imagenes.php",
            {
                "id_carpeta": id,
                "nombre_carpeta": carpeta,
                "tipo_carpeta": tipo
            }
        );
        $('#dlg_adjuntar_img').modal('show');
    });

    $("#grid_carpeta tbody").on("click", "button.descripcion", function () {
        var data = grid_carpeta.row( $(this).parents("tr") ).data();

        // var id=data['id'];
        // var carpeta=data['carpeta'];
        // var tipo=data['tipo'];

        // $("#prf_subttl_carpeta").text(carpeta + ", " + tipo + ". Máximo 20 imágenes.");
        // $("#divContentSubirImg").load(
        //     "subir_imagenes.php",
        //     {
        //         "id_carpeta": id,
        //         "nombre_carpeta": carpeta,
        //         "tipo_carpeta": tipo
        //     }
        // );
        
        $('#dlg_descripcion_productos').modal('show');
    });
});