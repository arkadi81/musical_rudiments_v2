<!--

// 12/23/2015 - this part works - just need to automate randomization and add some sample strings. its fairly annoying to read to begin with so can stay server side for now
// TODO: currently using the stupid easy vextab API - this is workable, but we may want to do the proper implementation or the vexflow version later

// this module is the rhythm testing thing
// concept - uses vextab-div.js for simplicity
// an array of random strings and associations with rhythm and meters is saved in the options file. 
// rannomize pulls out several lines from the prescripted rhythms and builds a selector for time signatures and meter

-->
<script src="modules/module2.js"></script>




<div class="panel panel-default" style="display:none" id="module2"></div>
<div class="page-break-here"></div>



	
<script>


	moduleDOMConstructor(2);
	modulePopulateHeader(2);
	modulePopulateBottom(2);
	
	module2PopulateSelectors(); // this one is specialized to module 1 and doesnt require any arguments
	moduleResults[2] = module2Randomize(false) // dont pull from server. this variable NEEDS TO BE PULIC FOR LATER - THIS IS GOOD!!!
	module2Render(moduleResults[2].renderInfo); // optional - this function is empty
</script> 

<!--<script src="/strawberry/vextab/releases/vextab-div.js"></script>-->




