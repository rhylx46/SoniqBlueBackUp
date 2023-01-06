<?php
if(empty($_POST['fname'])  		||
   empty($_POST['lname'])  		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$message = $_POST['message'];
	
$to = 'leicgm@yahoo.com';
$email_subject = "New message from your website";
$email_body = '
<html>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <h2>Test</h2>
    '.$fname.'
</html>
';
$email_content = "
    ";
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Return-Path: $email\r\n";
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= "X-Priority: 3\r\n";
$headers .= "X-Mailer: PHP". phpversion() ."\r\n" ;
mail($to,$email_subject,$email_body,$headers);
return true;			
?>