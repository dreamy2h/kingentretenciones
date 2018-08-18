<?php 
	ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $from = $email;
    $to = "contacto@kingentretenciones.cl";
    $subject = "Mensaje de contacto";
    $message = "Nombre del Usuario: $nombre $apellido. ";
    $message .= "Correo electrónico: $email. ";
    $message .= "Mensaje: $mensaje.";
    
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    echo "El mensaje ha sido enviado.";
?>