<?php
	date_default_timezone_set('America/Vancouver');

	$line = date('Y-m-d H:i:s') ." $_SERVER[REMOTE_ADDR]";//.$_SERVER['REQUEST_URI'];
	file_put_contents('visitors.log', $line . PHP_EOL, FILE_APPEND);
?>