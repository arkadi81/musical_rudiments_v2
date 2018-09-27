<?php session_start();
	//ob_start();
	date_default_timezone_set('America/Vancouver');
//phpinfo(); ?>

<!doctype html>
<html>
<head>
	<meta charset="utf-8" name="viewport">
	<!--content="device=device-width, initial-scale=1">-->

	<title>UVic Music Rudiments</title>

	<!-- <script data-main="/" src="require.js"></script>  -->
	<!--
	Dependencies:
	Bootstrap, Jquery, Vexflow, Vextab, Vextab debug, external css (my own), raphael, ajax/part of jquery api
	20160901 now all local links
	TODO, move to git to eliminate internal version control remarks
	-->
	
	<script src="scripts/jquery/jquery-3.1.0.js"></script>
	<script src="scripts/knockout/knockout-3.4.2.js"></script>
	
    <!-- <script src="http://knockoutjs.com/downloads/knockout-3.0.0.debug.js"></script> -->

	<!-- <script src="scripts/knockout-amd-helpers/knockout-amd-helpers.js"></script>	 -->

	
	<!--<script src="vexflow/releases/vexflow-min.js"></script>-->
	<script src="scripts/raphael/raphael.js"></script>
	<script src="vextab/releases/vextab-div.js"></script> <!-- MUST COME BEFORE VEXFLOW-DEBUG-->
	
	
	<script type="text/javascript" src="vexflow/releases/vexflow-debug.js"></script>

	
	 <!-- for some reason, vexflow debug MUST be placed after vextab-div. vexflow debug has a color modification
	and if vextab comes after it clears that modification. vextab is only currently necessary for the rhtyhm part (mod2) -->
	  
	<script type="text/javascript" src="theory.js"></script>
	<script type="text/javascript" src="modules/timer.js"></script>
	<!-- <script type="text/javascript" src="jsPDF/dist/jspdf.debug.js"></script> --> <!-- for some reason Module 2 rendering depends on this?!???? -->
	<!--<script type="text/javascript" src="jsPDF/plugins/canvas.js"></script>-->
	<!--<script type="text/javascript" src="jsPDF/plugins/addimage.js"></script>
	<script type="text/javascript" src="jsPDF/plugins/javascript.js"></script>-->
		  
	<!-- <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet"> -->
	<!-- <link rel="stylesheet" href="main.css"> -->


	<!-- 20160901 local bootstrap source-->
	<link rel="stylesheet" type="text/css" href="scripts/bootstrap-3.3.7-dist/css/bootstrap.min.css" media="all" />
	<link rel="stylesheet" type="text/css" href="scripts/bootstrap-3.3.7-dist/css/bootstrap-theme.min.css" media="all" />

	<!-- my very own custom print media type sheet. place after bootstrap-->
	<!--<link rel="stylesheet" type="text/css" href="styles/print.css">-->


	<!-- Latest compiled and minified CSS -deprecated 20160901 now using local source -->
	<!--
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	-->
	<!-- Optional theme -->
	<!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
	-->
	
	

	<script type="text/javascript" src="global_options.js"></script>
	<script type="text/javascript" src="module_functions.js"></script>

	<!-- my very own custom print media type sheet. place after bootstrap-->
	<link rel="stylesheet" type="text/css" href="styles/print.css" media="all" />
	<link rel="stylesheet" type="text/css" href="styles/screen.css">

	<script type="text/javascript" src="init.js"></script>

</head>
<body>




	<!--20160901 now using local jquery and bootstrap -->
	<script type="text/javascript" src="scripts/jquery/jquery-3.1.0.js"></script>
	<script type="text/javascript" src="scripts/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>


	<!-- link deprecated 20160901 -->
	<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> -->

	<div class="modal fade" id="aboutDialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button class="close" data-dismiss="modal"><span>&times;</span></button>
					<h3 class="modal-title">About</h3>
				</div>
				<div class="modal-body">
					<div> 
						This project is currently in advanced testing stages. If you encounter any
						problems or bugs, please report these to <a href="mailto:futerman@uvic.ca?Subject=Strawberry user feedback">Arkady Futerman</a>
						at <b>futerman at uvic dot ca</b>.
					</div>
					<div>
						<h4>Techny things</h4>
						The following technologies are in under their respective lincense agreements:
						<ul>
							<li>
								HTML5
								<p>
							      <a href="http://validator.w3.org/check?uri=referer">
							      	<img src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0!" height="31" width="88" />
							      </a>
								</p>
								<a href="http://www.w3.org/html/logo/">
									<img src="https://www.w3.org/html/logo/badge/html5-badge-h-connectivity-css3-graphics.png" width="197" height="64" alt="HTML5 Powered with Connectivity / Realtime, CSS3 / Styling, and Graphics, 3D &amp; Effects" title="HTML5 Powered with Connectivity / Realtime, CSS3 / Styling, and Graphics, 3D &amp; Effects">
								</a>
							</li>
							<li>Javascript</li>
							<li><a href="https://jquery.com/">jQuery</a></li>
							<li><a href="http://www.vexflow.com/">Vexflow</a>, a music rendering library by <a href="http://0xfe.blogspot.com/">0xfe</a></li>
							<li><a href="http://getbootstrap.com/">CSS Bootstrap</a></li>
						</ul>									
					</div>
					<div>
						<h4>Copyright</h4>
						All rights pertaining exclusively to the code for this project are reserved to<br>
						<a href="mailto:futerman@uvic.ca">Arkady Futerman</a>
						&copy <?php echo date("Y"); ?>. If you are interested in using any of this code for your project, in either original or modified version, please contact me first for<br> permission
						( I will most likely be happy to grant it).
					</div>
				</div>
				<div class="modal-footer">
					<button class="btn btn-primary pull-center" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div> <!-- the about dialog-->

	<div class="modal fade" id="timeOutDialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<!--<button class="close" data-dismiss="modal"><span>&times;</span></button>-->
					<h3 class="modal-title">Assessment Complete</h3>
				</div>
				<div class="modal-body">
					<div> 
						Time's up! Don't worry - We've saved all of your answers and they will be forwarded to the UVic School of Music Faculty.
						<br>
						Thank you for participating in the assessment. You may now close this window.
						<br><br>
						<!--For demonstration purposes only: <a href="test.html">Click here to see the results</a>-->
					</div>
				</div>
				<div class="modal-footer">
					<!--<button class="btn btn-primary pull-center" data-dismiss="modal">Close</button>-->
					<!-- todo, add feedback form -->
				</div>
			</div>
		</div>
	</div> <!-- the about dialog-->


	<div class="modal fade" id="completeDialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<!--<button class="close" data-dismiss="modal"><span>&times;</span></button>-->
					<h3 class="modal-title">Assessment Complete</h3>
				</div>
				<div class="modal-body">
					<div> 
						Thank you for submitting your results. We've saved all of your answers and they will be forwarded to the UVic School of Music Faculty.
						<br>
						Thank you for participating in the assessment. You may now close this window.
						<br><br>
						<!--For demonstration purposes only: <a href="test.html">Click here to see the results</a>-->
					</div>
				</div>
				<div class="modal-footer">
					<!--<button class="btn btn-primary pull-center" data-dismiss="modal">Close</button>-->
					<!-- todo, add feedback form -->
				</div>
			</div>
		</div>
	</div> <!-- the about dialog-->


	<!--TESTING
	<a class="btn btn-success" onClick='exportSVG()'>download stuff</a>
	<form action="dataurltest.php" method="POST" class="form-group" target="_blank">
	<input type="hidden" name="x" id="xx" value="">	
	<input type="submit" onclick="" value="Go!" style="form-control inline">
	</form>
	END TESTING-->

	<?php
		//$test_taker_name = (isset($_SESSION["username"])) ? $_SESSION["username"] : "ANON";

		//$file_name = date("Ymd").'_'.date("His")."_ID_".$test_taker_name;
		//echo $test_taker_name;
		//echo $file_name;
	?>
		<!-- hat -->
		<nav class="navbar navbar-default navbar-fixed-top" >
		    <div class="container-fluid form-inline bgimage">
				<a class="navbar-brand" href="#">Rudiments</a>
				<p class="navbar-text pull-center">Welcome, 
					<?php 
						if (isset($_SESSION["username"])) {
							echo $_SESSION["username"].'.'; 
						}
						else {
							echo 'guest.';
						}

					?>
				</p>
				<?php // include logout button if we are in an actual session
					if (isset($_SESSION["mode"])) {include("logout_button.php"); } 
				?>
				<!--<a class="navbar-btn btn btn-default" onClick="submit()" style="display:none" id="checkAnswersButton">Check Answers</a>-->
				<!--<div id="timer">
   					Days: <span class="days"></span><br>
    				Hours: <span class="hours"></span><br>
   					Minutes: <span class="minutes"></span><br>
   					Seconds: <span class="seconds"></span>
				</div>-->
				<div class="input-group" id="timer2Group" style="display:none">
  					<span class="input-group-addon" id="timer2Label">Time remaining:</span>
  					<input type="text" id="timer2" class="form-control text-center" aria-describedby="timer2Label" placeholder="" readonly="readonly">
  				</div>

				
				
				<p class="navbar-text pull-right">version 1.21, last updated 08/08/2018</p>
		    </div>
		</nav>

		<br>

		<!-- content -->
		<div class="container">
			<div class="panel panel-default" style="display:block" id="module0">
				<div class="panel-heading text-center">
					<span class="panel-heading">
						<?php 
							if (!isset($_SESSION["mode"])) {
								echo "Welcome" ;
							}
							else {
								// session in place, either practice or test
								echo ucfirst($_SESSION["mode"])." mode"; //DEPRECATED. Uncomment to reinstate
							}

							
						?>
					</span>
				</div>

				
				
				<?php
					if (!isset($_SESSION["mode"])) {
						include("welcome.php");
						$dumpModules = 0; // dont display stuff
						// kill session timer cookie if exists
						echo ('<script>document.cookie="myClock=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=\'/\'; ";</script>');

						/*echo('<script>cookie.set( "myClock" , "John Smith", {
   expires: "Thu, 18 Dec 2013 12:00:00 UTC", domain: "", path: "/", secure: false });</script>');
				*/	}
					else {
						//echo $_SESSION["mode"];
						if ($_SESSION["mode"]=="practice") {
							include("practice_mode.php");
							$dumpModules = 1;
						}
						
						if ($_SESSION["mode"]=="test" && !isset($_SESSION["username"])) {
							include("test_mode.php");
							$dumpModules = 0;
						}
					
						if ($_SESSION["mode"]=="test" && isset($_SESSION["username"])) {
							$dumpModules = 1;
						}

					}
		 		?>
			</div>
		</div>
		<div class="test-div">
			<!-- test to see if knockout injection works -->
			<div data-bind="template: { name: 'test-template', data: testData, afterRender: draw}"></div>
			
		</div>
		<?php
			if ($dumpModules) {
				// in session, ok to print everything
				include("home.php");

			}
		?>
		<!-- phone test module -->
		<div class="flex-container">
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>6</div>
					<div>7</div>
					<div>8</div>
					<div>9</div>
				</div>
		<!-- end phone test module -->

		<!-- bottom navbar -->
		<div class="navbar navbar-default navbar-fixed-bottom">
			<div class="container-fluid">
				<p class="navbar-text pull-left">&copy; <?php echo date("Y"); ?> Arkady Futerman. Some Rights Reserved</p>
				<!--<p><a href="http://validator.w3.org/check?uri=referer"><img
          			src="http://www.w3.org/Icons/valid-html401"
          			alt="Valid XHTML 1.0!" height="31" width="88" /></a>
    			</p>-->
    			<a class="navbar-btn btn btn-default pull-right" data-toggle="modal" data-target="#aboutDialog" data-backdrop="static">Techy Stuff</a>
    			<?php
					if ($dumpModules && ($_SESSION["mode"]=="practice")) {
						// in session, ok to show check results / submit button
				
						
						echo('<a class="navbar-btn btn btn-default pull-right" onClick="submit()" id="checkAnswersButton">Check Answers</a>');
						/*echo(
							'<div class="navbar-btn progress">
  								<div class="progress-bar progress-bar-success progress-bar-striped pull-center" role="progressbar" aria-valuenow="80"
  								aria-valuemin="0" aria-valuemax="100" style="width:80%">
    							<span>Module 1 of 10</span>
  								</div>
							</div>'
						);*/
					}
					
					
					if ($dumpModules && ($_SESSION["mode"]=="test")) {
						echo('<a class="navbar-btn btn btn-default pull-right" onClick="test_complete_submission()" id="submitButton">Submit Answers</a>');
					}
				?> 
    			
			</div>
		</div>

		
		<!-- deprecated 20160901 now using local source, see top of body section 
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script> -->
		
  		<!--<script src="bootstrap/js/bootstrap.min.js"></script>-->
  		
		<!--<script src="vextab/releases/vextab-div.js"></script>-->
		<?
			//echo "hi";
			//file_put_contents('yourpage.html', ob_get_contents()); 
		?>
	

		<script>
			// tell js whether we are testing
			var isTesting = <?php echo (isset($_SESSION["mode"]) && ($_SESSION["mode"]=="test")) ? 'true' : 'false';?>;
			
			//document.getElementById("test1").innerHTML=['stave notation=true',
			//'time=4/4',
			//'notes :8 C-E/4 :16 A-A-A/4 ^3^ :8 A/4 :8d A/4 :16 A/4 :16 A-A-A-A-A/4 ^5^ =|='].join('\n');
		</script>

		<script type="text/html" id="test-template">
			<div class="test-grid-container">
				<div class="header red" data-bind="text: questionHeader">header here</div>
				<div class="instruction red">instruction</div>
				<div class="example red">example</div>
				<div class="lpanel red">left</div>
				<canvas class="canvaspanel red" data-bind="updataCanvasOnChange: note"></canvas>
				<div class="rpanel red">right</div>
				<div class="answercheck red" data-bind="text: note">answer</div>
				<div class="controls red">controls here</div>
				<div class="footer red">
					footer here
					<div class="btn" data-bind="click: $root.randomizeNote">I'm a button, click me to randomize</div>
				</div>
			</div>
		</script>
		

	</body>
</html>

