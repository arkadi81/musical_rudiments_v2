/*  The only things that change from module to module are: selectors,
random data generation and rendering process. */



module2PopulateSelectors = function() {

	/* in this instance, since vextab is in use, rendering and selector placement takes place in turns
	I haven't found a way around this yet */

	var moduleNumber = 2;

	//var selector_meter_type='<option value=-1 selected disabled style="display:none;">simple / compound</option><option>Simple</option><option>Compound</option>';
	//var selector_meter_ticks='<option value=-1 selected disabled style="display:none;">Duple / Triple / Quadruple</option><option>duple</option><option>triple</option><option>quadruple</option>'
	var selector_meter_type='<option value=-1 selected disabled style="display:none;"></option><option>Simple</option><option>Compound</option>';
	var selector_meter_ticks='<option value=-1 selected disabled style="display:none;"></option><option>Duple</option><option>Triple</option><option>Quadruple</option>'
	var selector_time_signature_upper = '<option value=-1 selected></option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option>'; // maybe just a numerical input field?
	var selector_time_signature_lower = '<option value=-1 selected></option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>16</option>';



	for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).setAttribute('class','form-inline' ); //has-success has-feedback'
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).innerHTML += '<div class="form-inline"><label class="">Simple/Compound: </label><select class="form-control morphing-selector" id="module2Selector' + i + '-0">' + selector_meter_type + '</select></div>';
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).innerHTML += '<div class="form-inline"><label class="">Duple/Triple/Quadruple: </label><select class="form-control morphing-selector" id="module2Selector' + i + '-1">' + selector_meter_ticks + '</select></div>';
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).innerHTML += '<div class="form-inline">'; // spacer
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).innerHTML += '<label class="">Time Signature: </label><select class="form-control morphing-selector" id="module2Selector' + i + '-2">' + selector_time_signature_upper + '</select>';
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).innerHTML += '/';
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).innerHTML += '<select class="form-control morphing-selector" id="module2Selector' + i + '-3">' + selector_time_signature_lower + '</select></div>';
	}
}

module2Randomize = function(pullFromServer) {
	/* pullfrom server = boolean
	default is false
	true = session already began, pull saved values (and maybe answers??) from session variables.
	false = no session started, randomize values for realsies. for the time being not dealing with true

	the function returns an array of results to pass to the rendering function to draw canvases,
	and (hopefully) an array of answers in order to populate the answer mesh (if visible) and compare with user answers
	for scoring */

	var moduleNumber = 2;
	// this one is too specialized to make general, EVERY SELECTOR HAS TO BE INDIVIDUALLY ID'D TO PULL INFO FROM IT!!!
	// has to be run after all DOM stuff is ready

	// only the ID changes, selectors are always the same, all selectors for the questions go in "SelectorPanelY"

	// prepare modifiers buttons: Simple / compound, duple/triple/quadruple, time signature
	

	
	var results = {
		'totalQuestions': 0,
		'numberOfSelectors':4,
		'renderInfo': [],
		'renderDataUrl': [], // possibly helpful for pushing to server later
		'verbalCorrectAnswers': [],
		'userAnswers': [],
		'scoring': [], // per question 0 for no 1 for yes
		'totalCorrect': 0, //couldbe calculated by summation etc
		'totalPossible': 0,
		
	}

	
	if (pullFromServer == undefined) {pullFromServer = NO_PULL_FROM_SERVER};
		
	if (!pullFromServer) {
		
		results.totalQuestions = moduleOptions[moduleNumber].totalQuestions();

		// randomize questions (bank must have at least as many options as number of questions)
		var res = getRandomArray(moduleOptions[moduleNumber].totalQuestions(),0,moduleOptions[moduleNumber].questionBank.length-1); 
	
		for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {

			var str = moduleOptions[moduleNumber].questionBank[res[i]][0];
			console.log(str);
			var timesig = moduleOptions[moduleNumber].questionBank[res[i]][3]+'/' + moduleOptions[moduleNumber].questionBank[res[i]][4];;
			//alert(timesig);
			/*results.renderInfo[i] = '<div class="vex-tabdiv" width=680 scale=1.0 editor="false" \n ' +
				    'editor_width=680 editor_height=330>options space=20 \n' +
				    'stave\n' +
				    //'key=A time=6/8\n' + // remove the time sig later but whaterver, this is just a sample. make it into sample bank
				    //'time='+ moduleOptions[moduleNumber].questionBank[res[i]][4] + '/' + moduleOptions[moduleNumber].questionBank[res[i]][5] +' \n'+
				    'time=' + timesig + '\n' +
				    'notes ' + str +'\n' +
					//'notes :8 t12p7/4 s5s3/4 :8 3s:16:5-7/5 :h p5/4\n ' +
					'options space=25\n ' +
					'</div>';*/
			
			results.renderInfo[i] =
				['options beam-rests = false ', // 20170130 
   			'stave notation=true ', //'<div id="vextab-div">'
    		'time=' + timesig,
    		'notes ' + str,
    		].join('\n');

    		/*results.renderInfo[i] = 
   			['stave notation=true', //'<div id="vextab-div">'
    		'time=4/4',
    		'notes :8 C-E/4 :16 A-A-A/4 ^3^ :8 A/4 :8d A/4 :16 A/4 :16 A-A-A-A-A/4 ^5^ =|='].join('\n');
			 // this is essentially the entire rendering procedure!*/
			
	
			// format: 4 element array [compound/simple, duple/triple, upper, lower]
			// this is an ok data format
			results.verbalCorrectAnswers[i] = [moduleOptions[moduleNumber].questionBank[res[i]][1], moduleOptions[moduleNumber].questionBank[res[i]][2], moduleOptions[moduleNumber].questionBank[res[i]][3], moduleOptions[moduleNumber].questionBank[res[i]][4]];

		}

		//document.getElementById('module'+2+'Canvas + i').className ='col-sm-12 col-xs-12 center';


		return results;
	}

	else {
		//actually pull the information from the server - this might actually be easier if I set up the result array properly
	}

}

module2Render = function(renderInfo) {

	var moduleNumber = 2;

	for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
		document.getElementById('module'+moduleNumber+'Canvas'+i).innerHTML=renderInfo[i];
		//document.getElementById('test1').innerHTML=renderInfo[i];
	}
}

module2RenderFull = function(renderInfo) { // NOT IN USE!
	
	var moduleNumber = 2;

	for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {

		canvasName = 'module' + moduleNumber +'Canvas'+i;
		var newCanvas = document.getElementById(canvasName);

		var vextab = require(["vextab/releases/vextab-div"]);

		var renderer = new Vex.Flow.Renderer(canvasName,
			Vex.Flow.Renderer.Backends.CANVAS);
		//artist = new Vex.Flow.Artist(10,10,600, {scale: 1});
		var ctx = renderer.getContext();
		vextab = new Vex.Flow.Vextab(/*artist*/);


		/*function render() {
	        try {
	          vextab.reset();
	          artist.reset();
	          vextab.parse($("#blah").val());
	          artist.render(renderer);
	          $("#error").text("");
	        } catch (e) {
	          console.log(e);
	          $("#error").html(e.message.replace(/[\n]/g, '<br/>'));
	        }
	      }

	    $("#blah").keyup(_.throttle(render, 250));
	    render();*/


		/*vexTab = new Vextab;
		Artist = vextab.Artist;
		Renderer = vextab.Vex.Flow.Renderer;

		// Create VexFlow Renderer from canvas element with id #boo.
		renderer = new Renderer(newCanvas, Renderer.Backends.CANVAS);

		// Initialize VexTab artist and parser.
		artist = new Artist(10, 10, 600, {scale: 0.8});
		vextab = new VexTab(artist);

		try {
		  // Parse VexTab music notation passed in as a string.
		  vextab.parse("tabstave notation=true\n notes :q 4/4\n")

		  // Render notation onto canvas.
		  artist.render(renderer);
		} catch (e) {
		  console.log(e);
		}*/
	}
}

module2GetAnswers = function() {
	// pushes values from sleector into the results array
	var moduleNumber = 2;
	moduleResults[moduleNumber].userAnswers.length =0;
	moduleResults[moduleNumber].scoring.length =0;
	moduleResults[moduleNumber].totalCorrect =0;
	//20160320 compound / duple selectors 1 pt each. the time sig is total 1 point, and only scored if both top and bottom are correct
	moduleResults[moduleNumber].totalPossible = 3 * moduleOptions[moduleNumber].totalQuestions(); 
	for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
		// dumpt majors into "major" and minors into minor
		var selectors = [];
		for (j = 0; j< moduleResults[moduleNumber].numberOfSelectors; j++ ) {
			selectors.push([document.getElementById('module' + moduleNumber + 'Selector'+i+'-'+j).value,0]); // second parameter is individual grades
		}
		// so far this matches the data format in correctVerbalAnswers
		
		
		moduleResults[moduleNumber].userAnswers.push( selectors );
		//var newCanvas = document.getElementById('module' + moduleNumber +'Canvas' +i);
		var newCanvas = $(".vex-canvas")[i];
		//var s = new XMLSerializer().serializeToString(newCanvas);
		var s=newCanvas.innerHTML;
		var encodedData = window.btoa(s);
		//console.log(encodedData);
		//var encodedData = 'data:image/svg+xml;base64,' + encodedData;

		//var ctx = newCanvas.getContext('2d');
		moduleResults[moduleNumber].renderDataUrl[i] = encodeURIComponent(encodedData); // quality 0-1

		moduleResults[moduleNumber].totalQuestions = moduleOptions[moduleNumber].totalQuestions();
		
		// edits 20160901, make sure the meter type is all lowercase so no capitalization errors screw up grading

		if (moduleResults[moduleNumber].userAnswers[i][0][0].toLowerCase() == moduleResults[moduleNumber].verbalCorrectAnswers[i][0].toLowerCase()) {
				moduleResults[moduleNumber].userAnswers[i][0][1] = 1; // grade is 1
				moduleResults[moduleNumber].totalCorrect++;
			}

		if (moduleResults[moduleNumber].userAnswers[i][1][0].toLowerCase() == moduleResults[moduleNumber].verbalCorrectAnswers[i][1].toLowerCase()) {
				moduleResults[moduleNumber].userAnswers[i][1][1] = 1; // grade is 1
				moduleResults[moduleNumber].totalCorrect++;
			}

		// the two next ones (2,3) are 1 point worth, TOGETHER, and are only scored if both are correct

		if (moduleResults[moduleNumber].userAnswers[i][2][0] == moduleResults[moduleNumber].verbalCorrectAnswers[i][2] && moduleResults[moduleNumber].userAnswers[i][3][0] == moduleResults[moduleNumber].verbalCorrectAnswers[i][3]) {
			 
				moduleResults[moduleNumber].userAnswers[i][2][1] = 1; // grade is 1
				moduleResults[moduleNumber].userAnswers[i][3][1] = 1; // grade is 1
				moduleResults[moduleNumber].totalCorrect++;
			}
		/*for (j = 0; j< moduleResults[moduleNumber].numberOfSelectors; j++ ) {
			if (moduleResults[moduleNumber].userAnswers[i][j][0] == moduleResults[moduleNumber].verbalCorrectAnswers[i][j]) {
				moduleResults[moduleNumber].userAnswers[i][j][1] = 1; // grade is 1
				moduleResults[moduleNumber].totalCorrect++;
			}*/
		 
		
		
	}
}