<script src="modules/module7.js"></script>

<div class="panel panel-default" style="display:none" id="module7"></div>
<div class="page-break-here"></div>
<script>

	moduleDOMConstructor(7);
	modulePopulateHeader(7);
	modulePopulateBottom(7);
	
	module7PopulateSelectors(); // this one is specialized to module 1 and doesnt require any arguments
	moduleResults[7] = module7Randomize(false) // dont pull from server. this variable NEEDS TO BE PULIC FOR LATER - THIS IS GOOD!!!
	module7Render(moduleResults[7].renderInfo); // accepts info to render as parameter

</script>  




