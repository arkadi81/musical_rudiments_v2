<script src="modules/module3.js"></script>

<div class="panel panel-default" style="display:none" id="module3"></div>
<div class="page-break-here"></div>

<script>

	moduleDOMConstructor(3);
	modulePopulateHeader(3);
	modulePopulateBottom(3);
	module3PopulateSelectors(); // this one is specialized to module 1 and doesnt require any arguments
	moduleResults[3] = module3Randomize(false) // dont pull from server. this variable NEEDS TO BE PULIC FOR LATER - THIS IS GOOD!!!
	module3Render(moduleResults[3].renderInfo); // accepts info to render as parameter

</script>