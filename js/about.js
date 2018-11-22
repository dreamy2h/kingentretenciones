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

function cargar_texto() {
	$.ajax({
 		type: "GET",
 		dataType: "json",
 		url: "config/sql/consultas/consulta_datos_about.php",
 		async: false,
 		success: function(data) {
 			var url_imagen = "config/imagenes/" + data[0].id_carpeta + "/" + data[0].nombre_imagen;
 			$("#imagen_quienes_somos").attr("src", url_imagen);
 			$("#nombre_encargado").text(data[0].nombre_producto);
 			$("#texto_descripcion").append(data[0].descripcion_producto);
 		}
	});
}

$(document).ready(function() {
	cargar_portada();
	cargar_texto();
});