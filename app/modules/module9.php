<script src="modules/module9.js"></script>

<div class="panel panel-default" style="display:none" id="module9"></div>

<script>

	moduleDOMConstructor(9);
	modulePopulateHeader(9);
	modulePopulateBottom(9);
	
	module9PopulateSelectors(); // this one is specialized to module 1 and doesnt require any arguments
	moduleResults[9] = module9Randomize(false) // dont pull from server. this variable NEEDS TO BE PULIC FOR LATER - THIS IS GOOD!!!
	module9Render(moduleResults[9].renderInfo, moduleResults[9].inversions, moduleResults[9].randomScaleArray ); // accepts info to render as parameter

</script>  