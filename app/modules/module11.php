<!-- PURPOSE:
	Question 1: given a clef and a pitch, identify the pitch
-->

<!-- DOM constructor 
	All i need in the .php file is an anchorage to hang the rest of the content from. 
	the rest can be filled in dynamically
-->
<script src="modules/module11.js"></script>

<div class="panel panel-default" style="display:none" id="module11"></div>

<script>

	moduleDOMConstructor(11);
	modulePopulateHeader(11);
	modulePopulateBottom(11);

	module11PopulateSelectors(); // this one is specialized to module 1 and doesnt require any arguments
	moduleResults[11] = module11Randomize(false) // dont pull from server. this variable NEEDS TO BE PULIC FOR LATER - THIS IS GOOD!!!
	module11Render(moduleResults[11].renderInfo); // accepts info to render as parameter

</script>  


  		
	
		




 	