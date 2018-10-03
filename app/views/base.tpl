<!DOCTYPE html>
<html>
<head>
	<title>Strawberry V{{data['version_num']}}</title>
	<!-- under current configuration, just linking the file name will fire route which will find filename in static and link it -->
	<meta charset="utf-8" name="viewport">
	<!--content="device=device-width, initial-scale=1">-->

	<!-- <script data-main="/" src="require.js"></script>  -->
	<!--
	Dependencies:
	Bootstrap, Jquery, Vexflow, Vextab, Vextab debug, external css (my own), raphael, ajax/part of jquery api
	20160901 now all local links
	TODO, move to git to eliminate internal version control remarks
	-->
	
	<script src="lib/jquery/jquery-3.3.1.js"></script>
	<script src="lib/knockout/knockout-3.4.2.js"></script>
	
    <!-- <script src="http://knockoutjs.com/downloads/knockout-3.0.0.debug.js"></script> -->

	<!-- <script src="scripts/knockout-amd-helpers/knockout-amd-helpers.js"></script>	 -->

	
	<!--<script src="vexflow/releases/vexflow-min.js"></script>-->
	<script src="lib/raphael/raphael.js"></script>
	<script src="lib/vextab/releases/vextab-div.js"></script> <!-- MUST COME BEFORE VEXFLOW-DEBUG-->
	
	
	<script type="text/javascript" src="lib/vexflow/releases/vexflow-debug.js"></script>

	
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
	<link rel="stylesheet" type="text/css" href="lib/bootstrap-3.3.7-dist/css/bootstrap.min.css" media="all" />
	<link rel="stylesheet" type="text/css" href="lib/bootstrap-3.3.7-dist/css/bootstrap-theme.min.css" media="all" />

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

	<script type="text/javascript" src="js/main.js"></script>

	<link rel="stylesheet" type="text/css" href="css/main.css"> 
	
</head>
<body>
	HALLO23
	<div class="test-div">
			<!-- test to see if knockout injection works -->
			<div data-bind="template: { name: 'test-template', data: testData, afterRender: draw}"></div>
			
		</div>

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