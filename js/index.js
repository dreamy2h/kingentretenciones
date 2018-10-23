function cargar_eventos() {
	$.ajax({
 		type: "GET",
 		dataType: "json",
 		url: "config/sql/consultas/consulta_eventos.php",
 		async: false,
 		success: function(data) {
 			var eventos = "<ol class='carousel-indicators'>";
 			for (var i = 0; i < data.length; i++) {
 				if (i === 0) {
 					eventos += "<li data-target='#miSlide' data-slide-to='" + i + "' class='active'></li>";
 				} else {
 					eventos += "<li data-target='#miSlide' data-slide-to='" + i + "'></li>";
 				}
			}

			eventos += "</ol>";
			eventos += "<div class='carousel-inner'>";

			for (var i = 0; i < data.length; i++) {
				if (i === 0) {
					eventos += "<div class='item active'>";
	                eventos += "<img src='config/imagenes/" + data[i].id_carpeta + "/" + data[i].nombre_imagen + "' class='adaptar'>";
                    eventos += "</div>";
				} else {
					eventos += "<div class='item'>";
	                eventos += "<img src='config/imagenes/" + data[i].id_carpeta + "/" + data[i].nombre_imagen + "' class='adaptar'>";
                    eventos += "</div>";
				}
			}

			eventos += "</div>";
			$("#eventos").append(eventos);

			return true;
 		}
	});
}

function cargar_promociones() {
	$.ajax({
 		type: "GET",
 		dataType: "json",
 		url: "config/sql/consultas/consulta_promociones.php",
 		async: false,
 		success: function(data) {
 			var promociones = "<ol class='carousel-indicators'>";
 			for (var i = 0; i < data.length; i++) {
 				if (i === 0) {
 					promociones += "<li data-target='#miSlide2' data-slide-to='" + i + "' class='active'></li>";
 				} else {
 					promociones += "<li data-target='#miSlide2' data-slide-to='" + i + "'></li>";
 				}
			}

			promociones += "</ol>";
			promociones += "<div class='carousel-inner'>";

			for (var i = 0; i < data.length; i++) {
				if (i === 0) {
					promociones += "<div class='item active'>";
	                promociones += "<img src='config/imagenes/" + data[i].id_carpeta + "/" + data[i].nombre_imagen + "' class='adaptar'>";
                    promociones += "</div>";
				} else {
					promociones += "<div class='item'>";
	                promociones += "<img src='config/imagenes/" + data[i].id_carpeta + "/" + data[i].nombre_imagen + "' class='adaptar'>";
                    promociones += "</div>";
				}
			}

			promociones += "</div>";
			console.warn(promociones);
			$("#promociones").append(promociones);
			return true;
 		}
	});
}

$(document).ready(function() {
	cargar_eventos();
	cargar_promociones();
});

jQuery(window).load(function () {
    $('#preloader-container').delay(650).fadeOut('slow');
});