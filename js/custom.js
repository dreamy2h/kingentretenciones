function enviar_correo(nombre, apellido, email, mensaje){
    var parametros = {
            "nombre" : nombre,
            "apellido" : apellido,
            "email" : email,
            "mensaje" : mensaje
    };

    console.log(parametros);

    $.ajax({
            data:  parametros, //datos que se envian a traves de ajax
            url:   'enviar_form.php', //archivo que recibe la peticion
            type:  'post', //método de envio
            /*beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
            },*/
            success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                // alert("Su mensaje a sido enviado.");
                $("#txt_primer_nombre").val("");
                $("#txt_primer_apellido").val("");
                $("#txt_email").val("");
                $("#txt_mensaje").val("");
                alert(response);
            }
    });
}
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });


    $("#toggle").click(function () {
        $(this).toggleClass("on");
        $("#menu").slideToggle();
    });

    $('.carousel').carousel({
        interval:3000
    });

    $("#btn_enviar").click(function() {
        var nombre = $("#txt_primer_nombre").val();
        var apellido = $("#txt_primer_apellido").val();
        var email = $("#txt_email").val();
        var mensaje = $("#txt_mensaje").val();

        if (nombre != '' && apellido != '' && email != '' && mensaje != '') {
            enviar_correo(nombre, apellido, email, mensaje);
        } else {
            alert("Complete todos los campos");
        }
        // alert("nombre: " + nombre + ", apellido: " + apellido + ", email: " + email + ", mensaje: " + mensaje);
    });
});




