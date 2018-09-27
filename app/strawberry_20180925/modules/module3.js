module3PopulateSelectors = function() {

	var moduleNumber = 3;

	var majorKeySelector="";
	majorKeySelector += '<option value=-1 selected></option>';
  	for (i=0; i<mod3AllMajorKeys.length; i++) {
  		// DEPRECATED 2/4/2016
		//majorKeySelector += "<option>" + uCaseNoteNames[i] +"</option>";
		majorKeySelector += "<option>" + mod3AllMajorKeys[i].AddAccidentalAscii() +"</option>";
	}
		
	var minorKeySelector="";
	minorKeySelector += '<option value=-1 selected></option>'
	for (i=0; i<mod3AllMinorKeys.length; i++) {
		// DEPRECATED 2/4/2016
		// minorKeySelector += "<option>" + lCaseNoteNames[i] +"</option>"; // randomize the keys later
		minorKeySelector += "<option>" + mod3AllMinorKeys[i].AddAccidentalAscii() +"</option>"; // randomize the keys later

	}


	for (i=0; i<moduleOptions[3].totalQuestions(); i++) {
		document.getElementById('module3SelectorPanel' + i).innerHTML += '<label class = "selector-label">Major key:</label> <select class="bloc form-control col-sm-4 morphing-selector" id="module3Selector' + i +'-1">' + majorKeySelector + '</select><br><br>';
		document.getElementById('module3SelectorPanel' + i).innerHTML += '<label class = "selector-label">Relative minor key:</label> <select class="form-control col-sm-4 morphing-selector" id="module3Selector' + i +'-2">' + minorKeySelector + '</select><br>';
	}

}

module3Randomize = function(pullFromServer) {

	var moduleNumber = 3;
	/* pullfrom server = boolean
	default is false
	true = session already began, pull saved values (and maybe answers??) from session variables.
	false = no session started, randomize values for realsies. for the time being not dealing with true

	the function returns an array of results to pass to the rendering function to draw canvases,
	and (hopefully) an array of answers in order to populate the answer mesh (if visible) and compare with user answers
	for scoring */

	var results = {
		'totalQuestions': 0,
		'numberOfSelectors':2,
		'renderInfo': [],
		'renderDataUrl': [], // possibly helpful for pushing to server later
		'verbalCorrectAnswers': [],
		'userAnswers': [],
		'scoring': [], // per question 0 for no 1 for yes
		'totalCorrect': 0, //couldbe calculated by summation etc
		'totalPossible': 0,
	}

	results.totalQuestions = moduleOptions[moduleNumber].totalQuestions();

	if (pullFromServer == undefined) {pullFromServer = NO_PULL_FROM_SERVER};
		
	if (!pullFromServer) {

		var res = getRandomArray(moduleOptions[moduleNumber].totalQuestions(),2,keySignatures.length-1)
		// this array contains Cnat as the 1 element (starts at Cb. shit)

		// build up the rest of the result array

		for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
			results.renderInfo[i]=keySignatures[res[i]];
			//console.log(results.renderInfo[i]);

			/* there are two cells in the correct answer: major (given in the rendering sequence)
			and minor which needs to be calculated through notes (M6 up). */

			results.verbalCorrectAnswers.push( { majKey: results.renderInfo[i], minKey: getRelativeMinor(results.renderInfo[i]).toLowerCase() });
			//console.log(getRelativeMinor(results.renderInfo[i])); // same thing for this one.
		}

		return results;
	}

	else {
		//actually pull the information from the server - this might actually be easier if I set up the result array properly
	}

}

module3Render = function(renderInfo) {

	var moduleNumber = 3;

	var clefs = moduleOptions[moduleNumber].clefArray();

	// in this module, renderInfo contains an array of keys (C, D, etc)

	for (i=0; i < moduleOptions[moduleNumber].totalQuestions(); i++) {
		canvasName = 'module3Canvas'+i;
		var newCanvas = document.getElementById(canvasName);
		var renderer = new Vex.Flow.Renderer(newCanvas,Vex.Flow.Renderer.Backends.CANVAS);
		var ctx = renderer.getContext();
		var stave = new Vex.Flow.Stave(10, 0,120);
		stave.addClef(clefs[i]).setContext(ctx).draw();
		stave.addKeySignature(renderInfo[i]).setContext(ctx).draw();
	}
}

module3GetAnswers = function() {
	// pushes values from sleector into the results array
	var moduleNumber = 3;
	moduleResults[3].userAnswers.length =0;
	moduleResults[moduleNumber].scoring.length =0;
	moduleResults[moduleNumber].totalCorrect =0;
	moduleResults[moduleNumber].totalPossible = 2* 0.5* moduleOptions[moduleNumber].totalQuestions();

	for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
		// dumpt majors into "major" and minors into minor
		var maj = document.getElementById('module' + moduleNumber + 'Selector'+i+'-1').value;
		var min = document.getElementById('module' + moduleNumber + 'Selector'+i+'-2').value;
		maj = maj.stripAccidentalAscii(); //alert(maj);
		min = min.stripAccidentalAscii();


		moduleResults[3].userAnswers.push( {majKey: { value: maj, grade: 0 } , minKey: { value: min, grade:0 }  });
		var newCanvas = document.getElementById('module' + moduleNumber +'Canvas' +i);
		var ctx = newCanvas.getContext('2d');
		moduleResults[3].renderDataUrl.push(encodeURIComponent(newCanvas.toDataURL('image/png',1.0))); // quality 0-1

		moduleResults[moduleNumber].totalQuestions = moduleOptions[moduleNumber].totalQuestions();
		
		var counter1 =0;
		var counter2 =0;
		if (moduleResults[moduleNumber].userAnswers[i].majKey.value == moduleResults[moduleNumber].verbalCorrectAnswers[i].majKey) {
			var counter1 =1;
			moduleResults[3].userAnswers[i].majKey.grade = 1;
		}
		if (moduleResults[moduleNumber].userAnswers[i].minKey.value == moduleResults[moduleNumber].verbalCorrectAnswers[i].minKey) {
			var counter2 =1;
			moduleResults[3].userAnswers[i].minKey.grade = 1;
		}

		moduleResults[moduleNumber].totalCorrect += 0.5*moduleResults[moduleNumber].userAnswers[i].majKey.grade; // weigh 1/2 point for correct
		moduleResults[moduleNumber].totalCorrect += 0.5*moduleResults[moduleNumber].userAnswers[i].minKey.grade;

		//moduleResults[moduleNumber].scoring.push({ majKey: {counter1, minKey: counter2 });

		
			
			// minor.getElementById('module' + moduleNumber + 'Selector'+i+'-2').value }; 		}
	}
	/*$.each(moduleResults[moduleNumber].scoring ,function() {
    	moduleResults[moduleNumber].totalCorrect += this.majKey;
    	moduleResults[moduleNumber].totalCorrect += this.minKey;
    });*/
	//console.log(moduleResults[3].renderDataUrl[0]);

	//alert (moduleResults[3].renderDataUrl);
}

module3GradeAnswers = function (results) {
	/* compares all the notes. the files in results (verbalCorrectAnswer, userAnswer, scoring)
	 all have the same structure of { note }.
	 totalCorrect,totalPossible and totalPercentage are integers and are calculated as well */

	 var moduleNumber = 3;
	 for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
	 	// 0 for nope 1 for yep
	 	results.scoring[i].note = (results.userAnswers[i].note == results.verbalCorrectAnswers[i]);
	 }

	 results.totalPossible = moduleOptions[moduleNumber].totalQuestions();

	 // calculate correct questions;
	 for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
	 	 	results.totalCorrect += results.scoring[i];
	 }

	 results.totalPercent = 100*results.totalCorrect / results.totalPossible;

}

module3VisualizeAnswers = function(results) {
	// colors the check boxes green / red, displays the correct answer

	var moduleNumber = 1;

	// display answer in the ANSWER field.
	for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
			var testText = 'Answer: ' + moduleResults[moduleNumber].verbalCorrectAnswers[i].note;
			document.getElementById('module' + moduleNumber +'Answer'+i).innerHTML = ' ' +testText;
			//document.getElementById('module' + moduleNumber +'Check'+i).innerHTML ='<span class="glyphicon glyphicon-ok"></span>'; // ' remove for X'
	}
		
	// color changes

	/*for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
		if (moduleResults[1].verbalCorrectAnswers[i].note == moduleResults[1].userAnswers[i].note) {
				document.getElementById('module'+moduleNumber+'Selector'+i+'-1').setAttribute('class','form-control btn-success');
			}
			else {
				document.getElementById('module'+moduleNumber+'Selector'+i+'-1').setAttribute('class','form-control btn-danger');
			}

			if (moduleResults[5].verbalCorrectAnswers[i].size == moduleResults[5].userAnswers[i].size) {
				document.getElementById('module'+moduleNumber+'Selector'+i+'-2').setAttribute('class','form-control btn-success');
			}
			else {
				document.getElementById('module'+moduleNumber+'Selector'+i+'-2').setAttribute('class','form-control btn-danger');
			}


			$( "select[id*='module5Selector']" ).prop('disabled', true); // this does work!
		}


	}*/
}
