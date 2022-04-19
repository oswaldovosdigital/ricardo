<?php

$destinatario = 'samilon3120@gmail.com';
$nombre = $_POST['nombre'];
$numero = %_POST['numero'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$header = "Enviado desde la pagina de Oswaldo_Herrera";
$mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

mail($destinatario, $asunto, $mensaje, $header);
echo "<script>alert('Correo enviado exitosamente')</script>";
echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";

?>