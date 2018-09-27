hi

the dataurl is

<?php echo $_POST['x'];
echo '<img src="'.$_POST['x'].'">';
file_put_contents("test.html",'<img src="'.$_POST['x'].'">');


$to = 'arkadi81@gmail.com';

/* $subject = 'moooo';
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= "From: webmaster@example.com\r\nReply-To: webmaster@example.com"; */

$image = $_POST['x'];
echo $image;


$string = '<img src="'.$image.'">';
echo $string;


/* $message = '<html><body>';
$message .= '<img src="moo">';
$message .= "</body></html>";

mail('arkadi81@gmail.com','hai2u',$message, $headers) or die ('couldnt send'); */

$to = "arkadi81@gmail.com";
    $from = "Example@example.com";
    $subject = "Hello! This is HTML email";

    //begin of HTML message 
    $message ='
<html> 
  <body> 
    <img src="'. $image. '">
  </body>
</html>';
   //end of message 
    $headers  = "From: $from\n"; 
    $headers .= "Content-type: text/html\n";

    //options to send to cc+bcc 
    //$headers .= "Cc: [email]maa@p-i-s.cXom[/email]"; 
    //$headers .= "Bcc: [email]email@maaking.cXom[/email]"; 

    // now lets send the email. 
    //mail($to, $subject, $message, $headers); 

    echo "Message has been sent....!"; 

 ?>
