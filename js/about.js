function cargar_portada() {
	$.ajax({
 		type: "GET",
 		dataType: "json",
 		url: "config/sql/consultas/consulta_portada.php",
 		async: false,
 		success: function(data) {
 			console.log("background" + "rgba(0, 0, 0, 0) url('config/" + data[0].id_carpeta + "/" + data[0].nombre_imagen + "') no-repeat scroll center top / cover");

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

$(document).ready(function() {
	cargar_portada();
});