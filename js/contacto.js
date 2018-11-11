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

function cargar_celu_correo() {
	$.ajax({
 		type: "GET",
 		dataType: "json",
 		url: "config/sql/consultas/consulta_portada_datos.php",
 		async: false,
 		success: function(data) {
 			var a_celular = data[0].celular;
 			var a_correo = data[0].correo;

 			$("#a_celular").text(a_celular);
 			$("#a_correo").text(a_correo);

 			$("#a_celular").attr("href", a_celular);
			$("#a_correo").attr("href", a_correo);
		}
	});
}

$(document).ready(function() {
	cargar_portada();
	cargar_celu_correo();
});