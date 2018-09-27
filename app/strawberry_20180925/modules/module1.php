<!-- PURPOSE:
	Question 1: given a clef and a pitch, identify the pitch
-->

<!-- DOM constructor 
	All i need in the .php file is an anchorage to hang the rest of the content from. 
	the rest can be filled in dynamically
-->
<script src="modules/module1.js"></script>

<div class="panel panel-default" style="display:none" id="module1"></div>

<script>

	moduleDOMConstructor(1);
	modulePopulateHeader(1);
	modulePopulateBottom(1);
	module1PopulateSelectors(); // this one is specialized to module 1 and doesnt require any arguments
	moduleResults[1] = module1Randomize(false) // dont pull from server. this variable NEEDS TO BE PULIC FOR LATER - THIS IS GOOD!!!
	module1Render(moduleResults[1].renderInfo); // accepts info to render as parameter

</script>  


  		
	
		




 	