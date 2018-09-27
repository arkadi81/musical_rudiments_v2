<?php 
	session_start();
?>


<script>
	document.cookie="myClock=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC";
</script>

<?php  
	//session_start();
	$mode = isset($_SESSION["mode"])? $_SESSION["mode"]: "ERRMODE";
	$usrname = isset($_SESSION["username"]) ? $_SESSION["username"] : "ANON";
	date_default_timezone_set('America/Vancouver');
	
	if (isset($_SESSION["username"]) || $_SESSION["mode"]=="practice" ) {
		$file = "log.txt";

		
		$message = date("Y-m-d H:i:s").",$_SERVER[REMOTE_ADDR]"
		.','.$usrname.',END,'.$mode."\r\n";
		file_put_contents('results/'.$file, $message, FILE_APPEND);
		
	}
	session_destroy();
	
	
	header('Location: index.php');
	exit();
 ?>