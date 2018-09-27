<?php  

	session_start() or die("cannot start session. We're having server issues here");

	date_default_timezone_set('America/Vancouver');

	$password = "987-2018";

	if ($_POST["mode"]=="practice" ) {
	
	 	$_SESSION["mode"]="practice";
	 	
	}

	if ($_POST["mode"]=="test") {
	
	 	$_SESSION["mode"]="test";
	}

	if (isset($_POST["username"]) && $_POST["keycode"]==$password) {
		// begin test session
		//record start time TODO
		$_SESSION["username"] = $_POST["username"];
	}

	//log session details at start

	//$line = date('Y-m-d H:i:s') . " - $_SERVER[REMOTE_ADDR]";//.$_SERVER['REQUEST_URI'];
	//file_put_contents('visitors.log', $line . PHP_EOL, FILE_APPEND);

	$mode = isset($_SESSION["mode"])? $_SESSION["mode"]: "ERRMODE";

	$usrname = isset($_SESSION["username"]) ? $_SESSION["username"] : "ANON";

	if (isset($_SESSION["username"]) || $_SESSION["mode"]=="practice") {
		$file = "log.txt";
		$message = date("Y-m-d H:i:s").','."$_SERVER[REMOTE_ADDR]"
		.','.$usrname.',START,'.$mode."\r\n";
		file_put_contents('results/'.$file, $message, FILE_APPEND);
	}

	// if none of the two are met, mode isnt defined and we hang out in authenticaion screeen

	  
	header('Location: index.php');
	exit();
 ?>
