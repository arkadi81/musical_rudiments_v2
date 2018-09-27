<script src="modules/module12.js"></script>

<div class="panel panel-default" style="display:none" id="module12"></div>

<script>

	moduleDOMConstructor(12);
	modulePopulateHeader(12);
	modulePopulateBottom(12);

	module12PopulateSelectors(); // this one is specialized to module 1 and doesnt require any arguments
	moduleResults[12] = module12Randomize(false) // dont pull from server. this variable NEEDS TO BE PULIC FOR LATER - THIS IS GOOD!!!
	module12Render(moduleResults[12].renderInfo); // accepts info to render as parameter

</script>  