
<!doctype html>
<html>
<head>

	<!--<script data-main="/" src="require.js"></script>  -->
	<!--<script src="jquery.js"></script>-->
	<!--<script src="vexflow/releases/vexflow-min.js"></script>-->
	<script src="/strawberry/raphael.js"></script>
	<script src="/strawberry/vextab/releases/vextab-div.js"></script>
	 <!-- MUST COME BEFORE VEXFLOW-DEBUG-->
	<script type="text/javascript" src="/strawberry/vexflow/releases/vexflow-debug.js"></script> <!-- for some reason, vexflow debug MUST be placed after vextab-div. vexflow debug has a color modification
	and if vextab comes after it clears that modification. vextab is only currently necessary for the rhtyhm part (mod2) -->
	  

</head>
<body>
  		<div class="vex-tabdiv"> 
			tabstave notation = true
			notes :q C/4
		</div>
		
		<!--<script src="vextab/releases/vextab-div.js"></script>-->
	</body>
</html>