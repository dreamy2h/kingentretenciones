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
 		}
	});
}
$(document).ready(function() {
	cargar_eventos();
});

jQuery(window).load(function () {
    $('#preloader-container').delay(650).fadeOut('slow');
});

jQuery(document).ready(function ($) {
    $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        titleSrc: 'title',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function (openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                // return openerElement.is('img') ? openerElement : openerElement.find('img');
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
});