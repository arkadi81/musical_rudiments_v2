<script src="modules/module8.js"></script>

<div class="panel panel-default" style="display:none" id="module8"></div>

<script>

	moduleDOMConstructor(8);
	modulePopulateHeader(8);
	modulePopulateBottom(8);
	
	module8PopulateSelectors(); // this one is specialized to module 1 and doesnt require any arguments
	moduleResults[8] = module8Randomize(false) // dont pull from server. this variable NEEDS TO BE PULIC FOR LATER - THIS IS GOOD!!!
	module8Render(moduleResults[8].renderInfo, moduleResults[8].inversions ); // accepts info to render as parameter

</script>  