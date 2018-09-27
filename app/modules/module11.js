module11PopulateSelectors = function() {
	// this one is too specialized to make general, EVERY SELECTOR HAS TO BE INDIVIDUALLY ID'D TO PULL INFO FROM IT!!!
	// has to be run after all DOM stuff is ready

	// root note selector, no accidentals

	moduleNumber = 11;
	var noteSelector='<option value=-1 selected></option>';
  	for (i=0; i<uCaseNoteNames.length; i++) {
		noteSelector += "<option>" + uCaseNoteNames[i] +"</option>";
	}

	// only the ID changes, selectors are always the same, all selectors for the questions go in "SelectorPanelY"
	
	for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).setAttribute('class','form-inline');
		document.getElementById('module11SelectorPanel' + i).innerHTML += '<label class="visible-print-inline">Select the correct note:</label><select class="form-control morphing-selector" id="module' + moduleNumber + 'Selector' + i +'">' + noteSelector + '</select>';
	}
				
}

module11Randomize = function(pullFromServer) {
	/* pullfrom server = boolean
	default is false
	true = session already began, pull saved values (and maybe answers??) from session variables.
	false = no session started, randomize values for realsies. for the time being not dealing with true

	the function returns an array of results to pass to the rendering function to draw canvases,
	and (hopefully) an array of answers in order to populate the answer mesh (if visible) and compare with user answers
	for scoring */

	var results = {
		'totalQuestions': 0,
		'renderInfo': [],
		'renderDataUrl': [], // possibly helpful for pushing to server later
		'verbalCorrectAnswers': [],
		'userAnswers': [],
		'scoring': [], // per question 0 for no 1 for yes
		'totalCorrect': 0, //couldbe calculated by summation etc
		'totalPossible': 0,
		'totalPercent': 0
	}

	var moduleNumber = 11; //this is DEPRECATED, but is local to the function so might come in handy, and doesn't interfere with anything



	if (pullFromServer == undefined) {pullFromServer = NO_PULL_FROM_SERVER};
		
	if (!pullFromServer) {

		// errything goes here

		// edits: 01/31/2016 No duplicates, substitute b/# for symbols, no C major scale

		var rndArray = getRandomArray(moduleOptions[moduleNumber].totalQuestions(),1,6); // 0 = tonic, exclude

		var j = 0;

		while (j < moduleOptions[moduleNumber].totalQuestions()) {


		//for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {

			var minorScaleType = '';

			//var _deg = rndArray[j];
			
			
			var majorMinor = ['major','minor'].getRandomElement(); 
			if (majorMinor=='major') {
				var tmpRoot = keySignatures.slice(1).getRandomElement(); // only use the non insane scales!, slice to exclude C maj
				var _deg = [1,2,3,4,5,6].getRandomElement(); // for majors, everything but tonic
			}
			else {
				minorScaleType = ['natural','harmonic',].getRandomElement()
				var tmpRoot = minorKeySignatures.slice(1).getRandomElement(); // slice to exclude Amin
				var _deg = [1,2,3,4].getRandomElement(); // no tonic, no submed, no leading
			}
			var tmpScaleDegree = scaleDegreeNames[_deg];


			_socializedName = tmpRoot;
			_socializedName = tmpRoot[0] + tmpRoot.slice(1).replace("b","\u266D"); // for some reason unicode works better than hex here, i dunno
			_socializedName = _socializedName[0] + _socializedName.slice(1).replace("#","\u266F");

			results.renderInfo.push({scaleType: majorMinor, key: _socializedName, degree:tmpScaleDegree, minorType: minorScaleType });

			// find the correct note:
			var _rt = tmpRoot[0].toUpperCase();
			var _accidental =0;
			if (tmpRoot.length == 2) { var _accidental = accidentalNames.indexOf(tmpRoot[1])}

			var tmpTonic = new Note(rootNames.indexOf(_rt),_accidental,4);

			if (majorMinor=='major') {
				var resultNote = tmpTonic.getInterval(scaleRecipes['major ascending'][_deg].quality, scaleRecipes['major ascending'][_deg].size, 'above');
			}
			else {
				var resultNote = tmpTonic.getInterval(scaleRecipes[minorScaleType + ' minor ascending'][_deg].quality, scaleRecipes[minorScaleType + ' minor ascending'][_deg].size, 'above');
			}

			var resultNoteName = resultNote.getRootName() + accidentalNames[resultNote.getAccidental()];
		

			results.verbalCorrectAnswers.push({ scaleType: majorMinor, key: tmpRoot, degree: tmpScaleDegree, result: resultNoteName, minorType: minorScaleType });

			j++;

		}
			//results.verbalCorrectAnswers[i] = { note: results.renderInfo[i].getRootName() };

		return results;
	}

	else {
		//actually pull the information from the server - this might actually be easier if I set up the result array properly
	}

}

module11getAnswers = function(results) {
	// pushes values from sleector into the results array
	var moduleNumber = 11;
	for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
		// dumpt majors into "major" and minors into minor
		results.userAnswers[i] = { note: document.getElementById('module' + moduleNumber + 'Selector'+i).value };
			// minor.getElementById('module' + moduleNumber + 'Selector'+i+'-2').value }; 		}
	}
}

module11GradeAnswers = function (results) {
	/* compares all the notes. the files in results (verbalCorrectAnswer, userAnswer, scoring)
	 all have the same structure of { note }.
	 totalCorrect,totalPossible and totalPercentage are integers and are calculated as well */

	 var moduleNumber = 11;
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

module11VisualizeAnswers = function(results) {
	// colors the check boxes green / red, displays the correct answer

	var moduleNumber = 11;

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

module11Render = function(renderInfo) {

	// in this module, renderInfo contains an array of Note objects

	var moduleNumber =11; //this is DEPRECATED, but is local to the function so might come in handy, and doesn't interfere with anything

	for (i=0; i < moduleOptions[moduleNumber].totalQuestions(); i++) {
		document.getElementById('module'+moduleNumber+'Question' + i +'Prompt').innerHTML += 'The ' + renderInfo[i].degree + ' of the key of ' + renderInfo[i].key + ' ' +renderInfo[i].scaleType;
		if (renderInfo[i].scaleType == 'minor') {
			document.getElementById('module'+moduleNumber+'Question' + i +'Prompt').innerHTML += ' [' + renderInfo[i].minorType + ']';
		}
		document.getElementById('module'+moduleNumber+'Question' + i +'Prompt').innerHTML += ' is : ';	
		
   	}
}

module11GetAnswers = function() {
	// pushes values from sleector into the results array
	var moduleNumber =11;
	moduleResults[moduleNumber].userAnswers =[];
	moduleResults[moduleNumber].userAnswers.length =0;
	moduleResults[moduleNumber].scoring.length =0;
	moduleResults[moduleNumber].totalCorrect =0;
	moduleResults[moduleNumber].totalPossible = moduleOptions[moduleNumber].totalQuestions();

	moduleResults[moduleNumber].totalQuestions = moduleOptions[moduleNumber].totalQuestions();

	for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
		// dumpt majors into "major" and minors into minor
		var _note = document.getElementById('module' + moduleNumber + 'Selector'+i).value;
		_note = _note.stripAccidentalAscii();

		//results.verbalCorrectAnswers[i] = { quality: tmpQuality.value, size: tmpSize.value };
		
		moduleResults[moduleNumber].userAnswers[i] = {note: { value: _note, grade: 0 } };
		
		//NO CANVAS TO RENDER HERE

		//var newCanvas = document.getElementById('module' + moduleNumber +'Canvas' +i);
		
		//moduleResults[moduleNumber].renderDataUrl.push(encodeURIComponent(newCanvas.toDataURL('image/png',1.0))); // quality 0-1

		// compare answers and calculate score

		//results.verbalCorrectAnswers.push({ scaleType: majorMinor, key: tmpRoot, degree: tmpScaleDegree, result: resultNoteName });
		var tmpCorrectNote = moduleResults[moduleNumber].verbalCorrectAnswers[i].result;
		
		var tmpUserNote = _note;
				

		if (tmpCorrectNote == tmpUserNote) {
			moduleResults[moduleNumber].userAnswers[i].note.grade=1;
			moduleResults[moduleNumber].totalCorrect +=1;
		}
	}
}




