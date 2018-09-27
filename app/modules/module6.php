<script src="modules/module6.js"></script>

<div class="panel panel-default" style="display:none" id="module6"></div>
<div class="page-break-here"></div>
<script>

	moduleDOMConstructor(6);
	modulePopulateHeader(6);
	modulePopulateBottom(6);
	
	module6PopulateSelectors(); // this one is specialized to module 1 and doesnt require any arguments
	moduleResults[6] = module6Randomize(false) // dont pull from server. this variable NEEDS TO BE PULIC FOR LATER - THIS IS GOOD!!!
	module6Render(moduleResults[6].renderInfo); // accepts info to render as parameter

</script>  




