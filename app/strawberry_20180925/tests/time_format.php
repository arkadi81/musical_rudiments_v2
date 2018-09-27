<?php 
	$given = 1800;

	$remaining = 1750;

	$timeleft = "24:05";

	

	function convert_MStime_to_seconds($MStime) {
		$arr = explode(':',$MStime);	
		return $arr[0]*60 + $arr[1];
	}

	function get_time_diff_in_seconds($start_time, $end_time) {
		return abs($end_time-$start_time);
	}

	function convert_seconds_to_MStime ($seconds) {
		$hour = floor($seconds / 3600);
		$min = floor($seconds / 60 % 60);
		$sec = floor($seconds % 60);

		//fill up if necessary
		if ($min <10) {
			$min = '0'.$min;
		}

		if ($sec <10) {
			$sec = '0'.$sec;
		}

		return $min.':'.$sec;

	}

	function get_time_elapsed ($given,$remaining) {
		return convert_seconds_to_MStime(get_time_diff_in_seconds($given,convert_MStime_to_seconds($remaining)));
	}

	$remaining_in_seconds = convert_MStime_to_seconds($timeleft);


	$diff_in_seconds = get_time_diff_in_seconds($given,$remaining_in_seconds);

	$display_time_elapsed = convert_seconds_to_MStime($diff_in_seconds);

	echo $display_time_elapsed;
	

	//echo convert_MStime_to_seconds($timeleft);
	//echo date_format("c", $timeleft);

	//echo gmdate("i:s", $secs);

	//echo "elapsed:".$secs-$timeleft;

 ?>