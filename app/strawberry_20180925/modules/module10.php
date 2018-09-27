<script src="modules/module10.js"></script>

<div class="panel panel-default" style="display:none" id="module10"></div>
<div class="page-break-here"></div>

<script>

	moduleDOMConstructor(10);
	modulePopulateHeader(10);
	modulePopulateBottom(10);
	module10PopulateExample();
	
	module10PopulateSelectors(); // this one is specialized to module 1 and doesnt require any arguments
	moduleResults[10] = module10Randomize(false) // dont pull from server. this variable NEEDS TO BE PULIC FOR LATER - THIS IS GOOD!!!
	module10Render(moduleResults[10].renderInfo, moduleResults[10].inversions, moduleResults[10].randomScaleArray ); // accepts info to render as parameter

</script>  