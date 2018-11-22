function cargar_productos() {
	$.ajax({
 		type: "GET",
 		dataType: "json",
 		url: "config/sql/consultas/consulta_productos.php",
 		async: false,
 		success: function(data) {
 			var productos = "<div class='row'>";
 			var ruta;
 			for (var i = 0; i < data.length; i++) {
 				ruta = "config/imagenes/" + data[i].id_carpeta + "/" + data[i].nombre_imagen;
				productos += "<div class='col-md-4 col-sm-4 col-xs-12 img_animacion'>";
				productos += "<div onclick='descripcion_producto(" + data[i].id +", \"" + data[i].nombre_producto + "\")'>";
				productos += "<img src='" + ruta + "' alt='Gallery-Image' class='img-responsive' style='height: 364px; width:395px; padding: 10px;' title='Click para ver detalle'>";
				productos += "</div>";
				productos += "<h1 class='port-title'>" + data[i].nombre_producto + "</h1>";
				productos += "</div>";
			}

			$("#productos").append(productos);
 		}
	});
}

function cargar_portada() {
	$.ajax({
 		type: "GET",
 		dataType: "json",
 		url: "config/sql/consultas/consulta_portada.php",
 		async: false,
 		success: function(data) {
 			var classFullImagen = { 
 				"background-color": "rgba(0, 0, 0, 0)",
 				"background-image": "url('config/imagenes/" + data[0].id_carpeta + "/" + data[0].nombre_imagen + "')",
			    "background-repeat": "no-repeat",
			    "background-position": "center top",
			    "background-size": "cover",
			    "background-attachment": "scroll",
			    "background-attachment": "fixed",
			    "height": "480px",
			    "position": "relative"
 			}

 			$("#imagen_portada").css(classFullImagen);
 		}
	});
}

function descripcion_producto(id, nombre_producto) {
	$("#divContenedorProductos").load(
        "descripcion_producto.php",
        { "id": id }
    );
	
	$("#tlt_text_prod").text(nombre_producto);
	$("#dlg_descripcion_productos").modal("show");
}

$(document).ready(function() {
	cargar_portada();
	cargar_productos();
});