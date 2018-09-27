<!DOCTYPE html>
<html>
<head>
	<title>responsive design test</title>

	<script type="text/javascript" src="jquery.js"></script>
	<script type="text/javascript" src="../vexflow/releases/vexflow-debug.js"></script>

	<style type="text/css">

		/*mobile first*/
		
		* {
			padding: 0;
			margin: 0;
		}

		html,body { 
			box-sizing: border-box;
			height:100%; 
			font-size: 100%;
			
		}

		body {
			font-size: 36px;
		}

		div {
			border: 1px solid;
		}

		h1 {
			font-size: 250%;
		}

		#target {
			/*height: 100%;*/
			/*width: 100%;*/
			/*width: 50% will scale along;*/
			border: 1px solid;
		}
		/*html {
			background-color: #9ff;
			display:block;
		}*/

		
		#status {
			text-align: center;
			font-size:72px
		}
		#container {
				/*position:/*relative*/
				/*display: grid;*/
				/*grid-template-columns: 1fr 4fr 1fr;*/

				/* autoprefixer */
				display: -webkit-line-grid;
				display: grid;
				-webkit-grid-columns: 1fr 4fr 1fr;
	    		grid-template-columns: 1fr 4fr 1fr;

				/* end autoprefixer */

				/*flex-direction: column;*/
				/*align-items: center;*/
				/*align-content: center;*/
			}
		}

		@media(max-width:60em){html{font-size: 50%}}

		
	</style>

</head>
<body>
	<textarea id="status"></textarea>
	<!-- <div id="status"></div> -->
	<div id="container" class="flex">
		<div>
			<p>ctrl1</p>
		</div>
		<div>
			<canvas id="target"></canvas>
		</div>
		<div>
			<p>ctrl2</p>
		</div>
		
	</div>
	<script type="text/javascript">
		$(function() {

			// feature support test
			// console.log("Broweser supports flex: " +CSS.supports("display", "flex"));
			document.getElementById("status").value +="Browser supports flex: " +CSS.supports("display", "flex");

			document.getElementById("status").value +="Browser supports grid: " +CSS.supports("display", "grid");

			var canvasName = "target";
			var newCanvas = document.getElementById(canvasName);

			init(newCanvas);
			
			


		    console.log("hi2");
			var w = $("#container").width();
			var h = $("#container").height();

			// $("#target").outerHeight($(window).height()-$("#target").offset().top-Math.abs($("#target").outerHeight(true) - $("#target").outerHeight()));

			document.getElementById("status").value += "w "+w + " h = " + h;

			
			var newCanvas = document.getElementById(canvasName);
			var renderer = new Vex.Flow.Renderer(newCanvas,Vex.Flow.Renderer.Backends.CANVAS);
			
			var ctx = renderer.getContext();
			ctx.scale(6,6); // this works, just need to figure out how much to scale now
			var stave = new Vex.Flow.Stave(5,0,100);
			stave.addClef('treble').setContext(ctx).draw();
			stave.addKeySignature("B").setContext(ctx).draw();

			

			
		});


		function init(canvas) {
		    if (canvas.getContext) { // if canvas supported
		    	// var testctx = canvas.getContext("2d"); 

				window.addEventListener('resize', resizeCanvas, false);
				window.addEventListener('orientationchange', resizeCanvas, false);
				console.log("hi");
				resizeCanvas(canvas);
				var e;
				console.log("this is %o, event is %o, host is %s", this, e, location.host);
				
		    }
		}

		function resizeCanvas(canvas) {
			// canvas.width = window.innerWidth;
			canvas.width = $("#target").parent().width();
			console.log("width is: " + canvas.width);
		    canvas.height = window.innerHeight;


		}
	</script>

</body>
</html>