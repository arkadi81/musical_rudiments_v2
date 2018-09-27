<?php 

	session_start();
	//header("content-type: text/html; charset=UTF-8");
	//require_once('PHPMailer/class.phpmailer.php');
	//require_once('dompdf/dompdf_config.inc.php');

	
	date_default_timezone_set('America/Vancouver');

	$end_timeStamp=date("Y-m-d H:i:s");
	$ip = $_SERVER["REMOTE_ADDR"];
	$mode = isset($_SESSION["mode"])? $_SESSION["mode"]: "ERRMODE";

	$usrname = isset($_SESSION["username"]) ? $_SESSION["username"] : "ANON";

	$test_taker_name = (isset($_SESSION["username"])) ? $_SESSION["username"] : "ANON";

	$file_name = date("Ymd").'_'.date("His")."_ID_".$usrname;

	$full_name = $file_name.".html";


	$totalPoints = 0;
	$totalSolved = 0;

	$p = stripslashes($_POST['moduleResults']);
	$res =  json_decode($p,true);

	$timeGiven = stripslashes($_POST['timeGiven']); // will be in seconds
	$timeLeft = stripslashes($_POST['timeLeft']); // will be in mm:ss format
	//$timeLeft =  json_decode($q,true); time left is NOT JSON ENCODED. NO NEED TO DECODE IT!!

	//echo('<h1>time left is:'.$timeLeft.'</h1>');


	//echo ("json error code is ". json_last_error());
	
	//$img = $res[3]['renderDataUrl'][0];

	// ----------------------- THIS SECTION FOR CALCULATING TIME DIFFERENCE GIVEN THE GLOBAL 
	// TIME ALLOCATED (IN SECONDS) AND THE TIME SHOWING ON CLOCK AT SUBMISSION


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


	if ($mode == 'test') {
		$display_time_given = convert_seconds_to_MStime($timeGiven);

		//only calculate difference if timed!
		 
		$remaining_in_seconds = convert_MStime_to_seconds($timeLeft);


		$diff_in_seconds = get_time_diff_in_seconds($timeGiven,$remaining_in_seconds);

		$display_time_elapsed = convert_seconds_to_MStime($diff_in_seconds);	
	}
	else {
		// paractice, no timeing
		$display_time_given = 'untimed';
		$display_time_elapsed = 'untimed';
	}

	

	
	//echo $display_time_elapsed; for testing

	// -------------------------- END TIME CALCULATIONS

	function evalGrade($int) {
		if ($int == 0) { return '&#x2717';}
		if ($int == 1) { return '&#10004';}
		//spits out an x or check mark respectively for 0 and 1

	}

	function showModule3($res) {
		

		$GLOBALS['moo'] .= '<table class ="table" text-centered>';
		$GLOBALS['moo'] .= '<tr><td colspan = "4"><h2><center>Key Signatures</center></h2></td><tr>';

	
		for ($i=0; $i<$res[3]['totalQuestions']; $i++) {


			$GLOBALS['moo'] .= '<td><img src="'.$res[3]['renderDataUrl'][$i].'"><br>
			Correct answer: '.$res[3]['verbalCorrectAnswers'][$i]['majKey'].' major,
			'.$res[3]['verbalCorrectAnswers'][$i]['minKey'].' minor<br>
			User answer is: '.$res[3]['userAnswers'][$i]['majKey']['value'].' <b>'. evalGrade($res[3]['userAnswers'][$i]['majKey']['grade']).'</b> major,
			'.$res[3]['userAnswers'][$i]['minKey']['value'].' <b>'. evalGrade($res[3]['userAnswers'][$i]['minKey']['grade']).'</b> minor<br></td>';
			//echo ($moo);*/
		}

		$GLOBALS['totalPoints'] += $res[3]['totalPossible']; // temp solution - weigh each correct answer at 1/2 a point
		$GLOBALS['totalSolved'] += $res[3]['totalCorrect'];

		$GLOBALS['moo'] .= '<tr><td colspan="4"><center>Score: '.$res[3]['totalCorrect'].'/'.$res[3]['totalPossible'].' = '. floor(100*$res[3]['totalCorrect']/$res[3]['totalPossible']).'%.</center>';
		$GLOBALS['moo'] .= '<br> (0.5 point for each correct answer)</td>';
		$GLOBALS['moo'] .= '<tr></table><br>';

	}

	function showModule2($res) {


		$GLOBALS['moo'] .= '<table class ="table" text-centered>';
		$GLOBALS['moo'] .= '<tr><td colspan = "4"><h2><center>Rhythm and meter</center></h2></td>';

	
		for ($i=0; $i<$res[2]['totalQuestions']; $i++) {

			$GLOBALS['moo'] .='<tr>';
			

			$tmp = base64_decode($res[2]['renderDataUrl'][$i]); // now holds the svg drawing, nothing further needed, just include at will


			$GLOBALS['moo'] .= '<td>'.$tmp.'<br>
			Correct answer: '.$res[2]['verbalCorrectAnswers'][$i][0].' '.$res[2]['verbalCorrectAnswers'][$i][1].
			', '.$res[2]['verbalCorrectAnswers'][$i][2].'/'.$res[2]['verbalCorrectAnswers'][$i][3].
			'<br>
			User answer is: '
			.$res[2]['userAnswers'][$i][0][0].' <b>'. evalGrade($res[2]['userAnswers'][$i][0][1]).'</b>'
			.$res[2]['userAnswers'][$i][1][0].' <b>'. evalGrade($res[2]['userAnswers'][$i][1][1]).'</b>'
			.$res[2]['userAnswers'][$i][2][0].' <b>'. evalGrade($res[2]['userAnswers'][$i][2][1]).'</b>'
			.$res[2]['userAnswers'][$i][3][0].' <b>'. evalGrade($res[2]['userAnswers'][$i][3][1]).'</b>';
			

		}
		//print_r($res[2]['userAnswers'][0][0][0]);

		$GLOBALS['totalPoints'] += $res[2]['totalPossible'];
		$GLOBALS['totalSolved'] += $res[2]['totalCorrect'];

		$GLOBALS['moo'] .= '<tr><td colspan="4"><center>Score: '.$res[2]['totalCorrect'].'/'. $res[2]['totalPossible'].' = '. floor(100*$res[2]['totalCorrect']/$res[2]['totalPossible']).'%.</center>';
		$GLOBALS['moo'] .= '<br> (The entire key signature is worth 1 point. The point is only awarded if both top and bottom are correct)';
		$GLOBALS['moo'] .= '</td><tr></table><br>';
		//results structure: array of ixjx2 (1 = result, 2 = t/f)
		 
	
		//echo "hihi";
		//phpInfo();
	}

	function showModule4($res) {


		$GLOBALS['moo'] .= '<table class ="table" text-centered>';
		$GLOBALS['moo'] .= '<tr><td colspan = "4"><h2><center>Scales</center></h2></td><tr>';

	
		for ($i=0; $i<$res[4]['totalQuestions']; $i++) {

				
			$GLOBALS['moo'] .= '<tr><td><img src="'.$res[4]['renderDataUrl'][$i].'"><br>';

			$GLOBALS['moo'] .= $res[4]['verbalCorrectAnswers'][$i]['rootName']. ' '. $res[4]['verbalCorrectAnswers'][$i]['scaleType'].
			'. Correct pitches: ';

			for ($j=0; $j<8; $j++) {
				$GLOBALS['moo'] .= $res[4]['verbalCorrectAnswers'][$i]['scalePitches'][$j].' ';
			}
			$GLOBALS['moo'] .='<br>User pitches: ';

			for ($j=0; $j<8; $j++) {
				$GLOBALS['moo'] .= $res[4]['userAnswers'][$i][$j][0].' '
				.evalGrade($res[4]['userAnswers'][$i][$j][1]). ' ';
			}
		}

		$GLOBALS['totalPoints'] += $res[4]['totalPossible'];
		$GLOBALS['totalSolved'] += $res[4]['totalCorrect'];

		//print_r($res[4]['userAnswers'][0][3][0]);

		$GLOBALS['moo'] .= '<tr><td colspan="4"><center>Score: '.$res[4]['totalCorrect'].'/'. $res[4]['totalPossible'].' = '. floor(100*$res[4]['totalCorrect']/$res[4]['totalPossible']).'%.</center>';
		$GLOBALS['moo'] .= '<br> (Each correct scale is worth 3 points. Every mistake docks 1 point. If a scale has 3 or more mistakes, it earns no points.)';
		$GLOBALS['moo'] .= '</td><tr></table><br>';

		
	}

	function showModule5($res) {



		$GLOBALS['moo'] .= '<table class ="table" text-centered>';
		$GLOBALS['moo'] .= '<tr><td colspan = "4"><h2><center>Interval Identification</center></h2></td>';

	
		for ($i=0; $i<$res[5]['totalQuestions']; $i++) {

			if (($i % 3) == 0) {
				$GLOBALS['moo'] .='<tr>';
			}
				
			$GLOBALS['moo'] .= '<td><img src="'.$res[5]['renderDataUrl'][$i].'"><br>';

			$GLOBALS['moo'] .='Correct interval: ';

			$GLOBALS['moo'] .= $res[5]['verbalCorrectAnswers'][$i]['quality']. $res[5]['verbalCorrectAnswers'][$i]['size'].'.';
			
			$GLOBALS['moo'] .='<br>User interval: ';
			$GLOBALS['moo'] .= $res[5]['userAnswers'][$i]['quality']['value'].' <b>'. evalGrade($res[5]['userAnswers'][$i]['quality']['grade']).'</b> ';
			$GLOBALS['moo'] .= $res[5]['userAnswers'][$i]['size']['value'].' <b>'. evalGrade($res[5]['userAnswers'][$i]['size']['grade']).'</b></td>';

			// dont overload too many things, skip line at 4
			
			//echo ($moo);*/
	
		}

		$GLOBALS['totalPoints'] += $res[5]['totalPossible'];
		$GLOBALS['totalSolved'] += $res[5]['totalCorrect'];

		//print_r($res[5]['userAnswers'][0]['quality']);

		$GLOBALS['moo'] .= '<tr><td colspan="4"><center>Score: '.$res[5]['totalCorrect'].'/'. $res[5]['totalPossible'].' = '. floor(100*$res[5]['totalCorrect']/$res[5]['totalPossible']).'%.</center>';
		$GLOBALS['moo'] .= '<br> (Each correct interval earns 1 point. Point is awarded only if both interval and size are correct)';
		$GLOBALS['moo'] .= '</td><tr></table><br>';

	}	
	
	function showModule6($res) {



		$GLOBALS['moo'] .= '<table class ="table text-centered" class="vertical-align:middle" ><tbody>';
		$GLOBALS['moo'] .= '<tr><td colspan = "2"><h2><center>Interval construction (ABOVE given note)</center></h2></td>';

	
		for ($i=0; $i<$res[6]['totalQuestions']; $i++) {

			/*if (($i % 2) == 0) {
				$GLOBALS['moo'] .='<tr>';
			}*/
				
			$GLOBALS['moo'] .='<tr>';
			$GLOBALS['moo'] .='<td>Initial note: <img src="'.$res[6]['renderDataUrl'][$i].'">';
			$GLOBALS['moo'] .=' Required interval: '. $res[6]['verbalCorrectAnswers'][$i]['quality'].$res[6]['verbalCorrectAnswers'][$i]['size']. ' above. ';

			//$GLOBALS['moo'] .='<tr>';
			$GLOBALS['moo'] .='Correct note: '. $res[6]['verbalCorrectAnswers'][$i]['root']. $res[6]['verbalCorrectAnswers'][$i]['accidental'].$res[6]['verbalCorrectAnswers'][$i]['octave'].'.';
			//echo ("moo");
			
			$GLOBALS['moo'] .='User note: ';
			$GLOBALS['moo'] .='<img src="'.$res[6]['renderAnswers'][$i].'">';
			$GLOBALS['moo'] .= '('.$res[6]['userAnswers'][$i]['value'].') <b>'. evalGrade($res[6]['userAnswers'][$i]['grade']).'</b></td> ';
			//$GLOBALS['moo'] .= $res[6]['userAnswers'][$i]['accidental']['value'].' <b>'. evalGrade($res[6]['userAnswers'][$i]['accidental']['grade']).'</b></td>';
			
			// dont overload too many things, skip line at 4
			
			//echo ($moo);
	
		}

		$GLOBALS['totalPoints'] += $res[6]['totalPossible'];
		$GLOBALS['totalSolved'] += $res[6]['totalCorrect'];

		//print_r($res[5]['userAnswers'][0]['quality']);

		$GLOBALS['moo'] .= '<tr><td colspan="4"><center>Score: '.$res[6]['totalCorrect'].'/'. $res[6]['totalPossible'].' = '. floor(100*$res[6]['totalCorrect']/$res[6]['totalPossible']).'%.</center>';
		$GLOBALS['moo'] .= '</td><tr></tbody></table><br>';

	}


	function showModule7($res) {



		$GLOBALS['moo'] .= '<table class ="table" text-centered><tbody>';
		$GLOBALS['moo'] .= '<tr><td colspan = "2"><h2><center>Interval construction (BELOW given note)</center></h2></td>';

	
		for ($i=0; $i<$res[7]['totalQuestions']; $i++) {

			/*if (($i % 3) == 0) {
				$GLOBALS['moo'] .='<tr>';
			}*/


			$GLOBALS['moo'] .='<tr>';
			$GLOBALS['moo'] .='<td>Initial note: <img src="'.$res[7]['renderDataUrl'][$i].'">';
			$GLOBALS['moo'] .=' Required interval: '. $res[7]['verbalCorrectAnswers'][$i]['quality'].$res[7]['verbalCorrectAnswers'][$i]['size']. ' below. ';

			//$GLOBALS['moo'] .='<tr>';
			$GLOBALS['moo'] .='Correct note: '. $res[7]['verbalCorrectAnswers'][$i]['root']. $res[7]['verbalCorrectAnswers'][$i]['accidental'].$res[7]['verbalCorrectAnswers'][$i]['octave'].'.';
			//echo ("moo");
			
			$GLOBALS['moo'] .='User note: ';
			$GLOBALS['moo'] .='<img src="'.$res[7]['renderAnswers'][$i].'">';
			$GLOBALS['moo'] .= '('.$res[7]['userAnswers'][$i]['value'].') <b>'. evalGrade($res[7]['userAnswers'][$i]['grade']).'</b></td> ';
				
			/*$GLOBALS['moo'] .='<tr>';
			$GLOBALS['moo'] .= '<td> Required interval: '. $res[7]['verbalCorrectAnswers'][$i]['quality'].$res[7]['verbalCorrectAnswers'][$i]['size'];

			$GLOBALS['moo'] .='<br><img src="'.$res[7]['renderDataUrl'][$i].'"><br>';

			$GLOBALS['moo'] .='Correct note: ';

			$GLOBALS['moo'] .= $res[7]['verbalCorrectAnswers'][$i]['root']. $res[7]['verbalCorrectAnswers'][$i]['accidental'].'.';
			
			$GLOBALS['moo'] .='<br>User note: ';
			$GLOBALS['moo'] .= $res[7]['userAnswers'][$i]['root']['value'].' <b>'. evalGrade($res[7]['userAnswers'][$i]['root']['grade']).'</b> ';
			$GLOBALS['moo'] .= $res[7]['userAnswers'][$i]['accidental']['value'].' <b>'. evalGrade($res[7]['userAnswers'][$i]['accidental']['grade']).'</b></td>';
			*/

			// dont overload too many things, skip line at 4
			
			//echo ($moo);*/
	
		}

		$GLOBALS['totalPoints'] += $res[7]['totalPossible'];
		$GLOBALS['totalSolved'] += $res[7]['totalCorrect'];
		//print_r($res[5]['userAnswers'][0]['quality']);

		$GLOBALS['moo'] .= '<tr><td colspan="4"><center>Score: '.$res[7]['totalCorrect'].'/'. $res[7]['totalPossible'].' = '. floor(100*$res[7]['totalCorrect']/$res[7]['totalPossible']).'%.</center>';
		$GLOBALS['moo'] .= '</td><tr></tbody></table><br>';

	}

	function showModule12($res) {



		//print_r($res[12]['userAnswers'][0]['quality']);

		$GLOBALS['moo'] .= '<table class ="table" text-centered><tbody>';
		$GLOBALS['moo'] .= '<tr><td colspan = "3"><h2><center>Inversions of intervals</center></h2></td>';

	
		for ($i=0; $i<$res[12]['totalQuestions']; $i++) {

			if (($i % 3) == 0) {
				$GLOBALS['moo'] .='<tr>';
			}
				
			$GLOBALS['moo'] .= '<td> Original interval: '. $res[12]['renderInfo'][$i]['quality']['value'].$res[12]['renderInfo'][$i]['size']['value'];

			//$GLOBALS['moo'] .='<br><img src="'.$res[12]['renderDataUrl'][$i].'"><br>';

			$GLOBALS['moo'] .='Correct inversion: ';

			$GLOBALS['moo'] .= $res[12]['verbalCorrectAnswers'][$i]['quality'].$res[12]['verbalCorrectAnswers'][$i]['size'].'.';
			
			$GLOBALS['moo'] .='<br>User inversion: ';
			$GLOBALS['moo'] .= $res[12]['userAnswers'][$i]['quality']['value'].' <b>'. evalGrade($res[12]['userAnswers'][$i]['quality']['grade']).'</b> ';
			$GLOBALS['moo'] .= $res[12]['userAnswers'][$i]['size']['value'].' <b>'. evalGrade($res[12]['userAnswers'][$i]['size']['grade']).'</b></td>';

			// dont overload too many things, skip line at 4
			
			//echo ($moo);*/
	
		}

		$GLOBALS['totalPoints'] += $res[12]['totalPossible'];
		$GLOBALS['totalSolved'] += $res[12]['totalCorrect'];

		//print_r($res[5]['userAnswers'][0]['quality']);

		$GLOBALS['moo'] .= '<tr><td colspan="4"><center>Score: '.$res[12]['totalCorrect'].'/'. $res[12]['totalPossible'].' = '. floor(100*$res[12]['totalCorrect']/$res[12]['totalPossible']).'%.</center>';
		$GLOBALS['moo'] .= '<br> (Each correct inversion earns 1 point. Point is awarded only if both interval and size are correct)';
		$GLOBALS['moo'] .= '</td><tr></tbody></table><br>';

	}


	function showModule8($res) {



		$GLOBALS['moo'] .= '<table class ="table" text-centered><tbody>';
		$GLOBALS['moo'] .= '<tr><td colspan = "4"><h2><center>Triads</center></h2></td>';

	
		for ($i=0; $i<$res[8]['totalQuestions']; $i++) {

			if (($i % 3) == 0) {
				$GLOBALS['moo'] .='<tr>';
			}
				
			//$GLOBALS['moo'] .= '<td> Required interval: '. $res[7]['verbalCorrectAnswers'][$i]['quality'].$res[7]['verbalCorrectAnswers'][$i]['size'];

			$GLOBALS['moo'] .='<td><img src="'.$res[8]['renderDataUrl'][$i].'"><br>';

			$GLOBALS['moo'] .='Correct triad: '; 

			$GLOBALS['moo'] .= $res[8]['verbalCorrectAnswers'][$i]['root'].' '.$res[8]['verbalCorrectAnswers'][$i]['type'].' Inversion: '.$res[8]['verbalCorrectAnswers'][$i]['inversion'];
			
			$GLOBALS['moo'] .='<br>User triad: ';
			$GLOBALS['moo'] .= $res[8]['userAnswers'][$i]['root']['value'].' <b>'. evalGrade($res[8]['userAnswers'][$i]['root']['grade']).'</b> ';
			$GLOBALS['moo'] .= $res[8]['userAnswers'][$i]['type']['value'].' <b>'. evalGrade($res[8]['userAnswers'][$i]['type']['grade']).'</b> ';
			$GLOBALS['moo'] .= 'Inversion '.$res[8]['userAnswers'][$i]['inversion']['value'].' <b>'. evalGrade($res[8]['userAnswers'][$i]['inversion']['grade']).'</b></td>';

			// dont overload too many things, skip line at 4
			
			//echo ($moo);*/
	
		}

		$GLOBALS['totalPoints'] += $res[8]['totalPossible'];
		$GLOBALS['totalSolved'] += $res[8]['totalCorrect'];

		//print_r($res[5]['userAnswers'][0]['quality']);

		$GLOBALS['moo'] .= '<tr><td colspan="4"><center>Score: '.$res[8]['totalCorrect'].'/'. $res[8]['totalPossible'].' = '. floor(100*$res[8]['totalCorrect']/$res[8]['totalPossible']).'%.</center>';
		$GLOBALS['moo'] .= '</td><tr></tbody></table><br>';

	}

	function showModule10($res) {



		$GLOBALS['moo'] .= '<table class ="table" text-centered><tbody>';
		$GLOBALS['moo'] .= '<tr><td colspan = "4"><h2><center>Dominant seventh chords</center></h2></td>';

	
		for ($i=0; $i<$res[10]['totalQuestions']; $i++) {

			if (($i % 3) == 0) {
				$GLOBALS['moo'] .='<tr>';
			}
				
			//$GLOBALS['moo'] .= '<td> Required interval: '. $res[7]['verbalCorrectAnswers'][$i]['quality'].$res[7]['verbalCorrectAnswers'][$i]['size'];

			$GLOBALS['moo'] .='<td><img src="'.$res[10]['renderDataUrl'][$i].'"><br>';

			$GLOBALS['moo'] .='Correct chord: '; 

			$GLOBALS['moo'] .= $res[10]['verbalCorrectAnswers'][$i]['root'].' Inversion: '.$res[10]['verbalCorrectAnswers'][$i]['inversion'].' <br>Tonic: '.$res[10]['verbalCorrectAnswers'][$i]['majHomeKey'];
			//.' Minor key: '.$res[10]['verbalCorrectAnswers'][$i]['minHomeKey'];
			$GLOBALS['moo'] .='<br>User chord: ';
			$GLOBALS['moo'] .= $res[10]['userAnswers'][$i]['root']['value'].' <b>'. evalGrade($res[10]['userAnswers'][$i]['root']['grade']).'</b> ';
			$GLOBALS['moo'] .= ' Inversion: '.$res[10]['userAnswers'][$i]['inversion']['value'].' <b>'. evalGrade($res[10]['userAnswers'][$i]['inversion']['grade']).'</b> ';
			$GLOBALS['moo'] .= '<br>Tonic: '.$res[10]['userAnswers'][$i]['majHomeKey']['value'].' <b>'. evalGrade($res[10]['userAnswers'][$i]['majHomeKey']['grade']).'</b>';
			//$GLOBALS['moo'] .= 'Minor key: '.$res[10]['userAnswers'][$i]['minHomeKey']['value'].' <b>'. evalGrade($res[10]['userAnswers'][$i]['minHomeKey']['grade']).'</b></td>';
			$GLOBALS['moo'] .= '</td>';
			// dont overload too many things, skip line at 4
			
			//echo ($moo);*/
	
		}

		$GLOBALS['totalPoints'] += $res[10]['totalPossible'];
		$GLOBALS['totalSolved'] += $res[10]['totalCorrect'];

		//print_r($res[5]['userAnswers'][0]['quality']);

		$GLOBALS['moo'] .= '<tr><td colspan="4"><center>Score: '.$res[10]['totalCorrect'].'/'. $res[10]['totalPossible'].' = '. floor(100*$res[10]['totalCorrect']/$res[10]['totalPossible']).'%.</center>';
		$GLOBALS['moo'] .= '</td><tr></tbody></table><br>';

	}

	function showModule11($res) { // scale degree names



		//print_r($res[11]['userAnswers'][0]);

		$GLOBALS['moo'] .= '<table class ="table" text-centered><tbody>';
		$GLOBALS['moo'] .= '<tr><td colspan = "3"><h2><center>Scale degree names</center></h2></td>';

	
		for ($i=0; $i<$res[11]['totalQuestions']; $i++) {

			if (($i % 3) == 0) {
				$GLOBALS['moo'] .='<tr>';
			}
				
			$GLOBALS['moo'] .= '<td> Original question: '. $res[11]['renderInfo'][$i]['degree'].' of '. $res[11]['renderInfo'][$i]['key'].' '.$res[11]['renderInfo'][$i]['scaleType'].' '.$res[11]['verbalCorrectAnswers'][$i]['minorType'].'<br>';

			//$GLOBALS['moo'] .='<br><img src="'.$res[12]['renderDataUrl'][$i].'"><br>';

			$GLOBALS['moo'] .='Correct note: ';

			$GLOBALS['moo'] .= $res[11]['verbalCorrectAnswers'][$i]['result'].'.';
			
			$GLOBALS['moo'] .='<br>User note: ';
			$GLOBALS['moo'] .= $res[11]['userAnswers'][$i]['note']['value'].' <b>'. evalGrade($res[11]['userAnswers'][$i]['note']['grade']).'</b></td> ';


			// dont overload too many things, skip line at 4
			
			//echo ($moo);*/
	
		}

		$GLOBALS['totalPoints'] += $res[11]['totalPossible'];
		$GLOBALS['totalSolved'] += $res[11]['totalCorrect'];

		//print_r($res[5]['userAnswers'][0]['quality']);

		$GLOBALS['moo'] .= '<tr><td colspan="4"><center>Score: '.$res[11]['totalCorrect'].'/'. $res[11]['totalPossible'].' = '. floor(100*$res[11]['totalCorrect']/$res[11]['totalPossible']).'%.</center>';
		$GLOBALS['moo'] .= '</td><tr></tbody></table><br>';

	}


	// build a total summary table:				
	function showSummary () {

		//echo $GLOBALS['totalSolved'];
		//echo $GLOBALS['totalPoints'];


		$GLOBALS['moo'] .= '<table class ="table" text-centered><tbody>';
		$GLOBALS['moo'] .= '<tr><td colspan = ""><h2><center>Totals</center></h2></td>';
		$GLOBALS['moo'] .= '<tr><td colspan=""><center>Score: '.$GLOBALS['totalSolved'].'/'.$GLOBALS['totalPoints'];
		$GLOBALS['moo'] .= ' = '. floor(100*$GLOBALS['totalSolved']/$GLOBALS['totalPoints']).'%.</center>';
		$GLOBALS['moo'] .= '</td><tr></tbody></table><br>';

	}

	function showHeader () {

		//echo $GLOBALS['totalSolved'];
		//echo $GLOBALS['totalPoints'];

		$GLOBALS['moo'] .= '<table class ="table"><tbody>';
		$GLOBALS['moo'] .= '<tr><td colspan = ""><h2><center>Test result report for ';
		$GLOBALS['moo'] .= $GLOBALS['test_taker_name'].'<br/> Submitted ';
		$GLOBALS['moo'] .= date('Y-m-d H:i:s');
		
		$GLOBALS['moo'] .= '</td><tr></tbody></table><br>';

	}




	//stream begins here ------------------------------------------------------------
	
	
	//20160907

	$moo = "";

	$foo = '<html>
				<head>
					<meta charset="UTF-8">
					<link rel="stylesheet" type="text/css" href="scripts/bootstrap-3.3.7-dist/css/bootstrap.min.css" media="all" />
					<link rel="stylesheet" type="text/css" href="scripts/bootstrap-3.3.7-dist/css/bootstrap-theme.min.css" media="all" />
					<link rel="stylesheet" type="text/css" href="styles/print.css" media="all" />
				</head>
				<body>
					<script type="text/javascript" src="scripts/jquery/jquery-3.1.0.js"></script>
					<script type="text/javascript" src="scripts/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>';

					

	//showHeader();

	showModule3($res);
	showModule2($res);
	showModule4($res);
	showModule5($res);
	showModule6($res);
	showModule7($res);
	showModule12($res);
	showModule8($res);
	showModule10($res);
	showModule11($res);
	//showSummary(); //at this point the totals are all tallied up and moo contains all content

	

	$foo .= '<table class ="table"><tbody>'
		.'<tr><td colspan = ""><center>'
		.'<h2>Submission time: '.$end_timeStamp.' '
		.' IP: '.$ip.' '
		.$mode.'<br>'
		.'Time Allocated: '
		.$display_time_given.'<br>'
		.'Time elapsed at submission: '
		.$display_time_elapsed
		.'</h2><br>'
		.'<h1>Result report for '
		.$usrname
		.'</h1></center></td><tr></tbody></table><br>';

	$foo .= '<table class ="table" text-centered><tbody>'
		.'<tr><td colspan = ""><h2><center>Totals</center></h2></td>'
		.'<tr><td colspan=""><h2><center>Score: '.$GLOBALS['totalSolved'].'/'.$GLOBALS['totalPoints']
		." = ". floor(100*$GLOBALS['totalSolved']/$GLOBALS['totalPoints']).'%.</center></h2>'
		.'</td><tr></tbody></table><br>';
	
	//phpInfo();

	$foo .= $moo;

	$foo .="</body></html>";
	
	echo ($foo);
	

	/*$dompdf = new DOMPDF();

	$dompdf->load_html($moo);
	$dompdf->render();
	$output = $dompdf->output();
	file_put_contents("test.pdf",$output);*/

	

	

	// ----- WRITE REPORT ----------------------------------------
	
	file_put_contents('results/'.$GLOBALS['full_name'],$foo);


	// ------------------------------------------------------
	

	// ----------- LOG TO GRADES FILE ----------------------------------
	//commas everywhere so its easier to delimit
	$grade_file = "grades.txt";
	
	

	$grade_message = $end_timeStamp.','.$ip.','.$usrname.','.$mode.','
	.'Allocated time,'.$display_time_given.',Time elapsed at submission,'.$display_time_elapsed
	.',Grade:,'
	.$GLOBALS['totalSolved'].',of,'.$GLOBALS['totalPoints']
	.",=,".floor(100*$GLOBALS['totalSolved']/$GLOBALS['totalPoints']).',%.'
	."\r\n";
	file_put_contents('results/'.$grade_file, $grade_message, FILE_APPEND);
	
	// ----------------------------------------------------------------

	//$bodytext = 'omg';
	/*$email = new PHPMailer();
	$email->From      = 'yomama@example.com';
	$email->FromName  = 'Project Strawberry';
	$email->Subject   = 'Test results';
	$email->Body      = $bodytext;
	$email->AddAddress( 'arkadi81@gmail.com' );

	$file_to_attach = 'test.pdf';
	
	$email->IsHTML(true);
	$email->AddAttachment( $file_to_attach , 'testfile.pdf' ); */

	//$email->Send();
	
	//echo $res;
	//echo json_last_error();
	//print_r($res[3]['renderDataUrl'][0]);
	//print_r($res[3]['userAnswers'][0]['majKey']);

	//file_put_con
	//session_start();
	include('session_destroy.php');
	
 ?>

<!-- recycled 
<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
			</head><body>'; //<meta charset="UTF-8">
-->