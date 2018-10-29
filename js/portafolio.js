function cargar_productos() {
	$.ajax({
 		type: "GET",
 		dataType: "json",
 		url: "config/sql/consultas/consulta_productos.php",
 		async: false,
 		success: function(data) {
 			var productos = "<div class='row'>";
 			for (var i = 0; i < data.length; i++) {
 				console.warn("id_carpeta: " + data[i].id_carpeta + ", nombre_imagen: " + data[i].nombre_imagen);
				productos += "<div class='col-md-4 col-sm-4 col-xs-12 gallery-list'>";
				productos += "<img src='config/imagenes/" + data[i].id_carpeta + "/" + data[i].nombre_imagen +"' alt='Gallery-Image' class='img-responsive' style='height: 364px; width:395px;'>";
				productos += "<div class='overlay'>";
				productos += "<div class='text'>";
				productos += "<a href='config/imagenes/" + data[i].id_carpeta + "/" + data[i].nombre_imagen +"' class='image-popup' title='<h3>" + data[i].nombre_producto + "</h3><h4>" + data[i].descripcion_producto + "</h4>'>";
				productos += "<img src='images/pin.png'>";
				productos += "</a></div></div>";
				productos += "<h1 class='port-title'>" + data[i].nombre_producto + "</h1>";
				productos += "</div>";
				console.warn("2");
			}

console.warn("3");
			$("#productos").append(productos);

			
 		}
	});
	return true;
}

function magnifico_plugin() {
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
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    return true;
}

$(document).ready(function() {
	if (cargar_productos()) {
		console.warn("4");
		if (magnifico_plugin()) {
			// console.warn("5");
	  //       // var myButton = $('#mybutton');
	  //       var userFeed = new Instafeed({
	  //           get: 'user',
	  //           userId: '4828631159',
	  //           accessToken: '4828631159.1677ed0.79cec29b3ab94404ad45f640b87dc4ef',
	  //           limit: '20',
	  //           sortBy: 'most-recent',
	  //           after: function () {
	  //               var images = $("#instafeed").find('a');
	  //               $.each(images, function (index, image) {
	  //                   var delay = (index * 75) + 'ms';
	  //                   $(image).css('-webkit-animation-delay', delay);
	  //                   $(image).css('-moz-animation-delay', delay);
	  //                   $(image).css('-ms-animation-delay', delay);
	  //                   $(image).css('-o-animation-delay', delay);
	  //                   $(image).css('animation-delay', delay);
	  //                   $(image).addClass('animated flipInX');
	  //               });

	  //           },
	  //           template: ' <div class="col-md-2 col-sm-3 col-xs-6"><div class="insta-image"><a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a></div></div>'
	  //       });
	  //       userFeed.run();
	  //       console.warn("6");
		}
	}
});