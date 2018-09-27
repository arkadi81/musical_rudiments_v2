<script src="modules/module4.js"></script>

<div class="panel panel-default" style="display:none" id="module4"></div>
<div class="page-break-here"></div>

<script>

	moduleDOMConstructor(4);
	modulePopulateHeader(4);
	modulePopulateBottom(4);
	module4PopulateSelectors(); // this one is specialized to module 1 and doesnt require any arguments
	moduleResults[4] = module4Randomize(false) // dont pull from server. this variable NEEDS TO BE PULIC FOR LATER - THIS IS GOOD!!!
	module4PopulatePrompts();
	module4Render(moduleResults[4].renderInfo); // accepts info to render as parameter

</script>  

