<script src="modules/module5.js"></script>

<div class="panel panel-default" style="display:none" id="module5"></div>
<div class="page-break-here"></div>
<script>

	moduleDOMConstructor(5);
	modulePopulateHeader(5);
	modulePopulateBottom(5);
	module5PopulateSelectors(); // this one is specialized to module 1 and doesnt require any arguments
	moduleResults[5] = module5Randomize(false) // dont pull from server. this variable NEEDS TO BE PULIC FOR LATER - THIS IS GOOD!!!
	module5Render(moduleResults[5].renderInfo); // accepts info to render as parameter

</script>  