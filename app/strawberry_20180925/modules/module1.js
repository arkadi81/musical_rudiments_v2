module1PopulateSelectors = function() {
	// this one is too specialized to make general, EVERY SELECTOR HAS TO BE INDIVIDUALLY ID'D TO PULL INFO FROM IT!!!
	// has to be run after all DOM stuff is ready

	// root note selector, no accidentals
	var selectionOptions = '';
  	for (i=0; i<rootNames.length; i++) 	{
		selectionOptions += '<option>' + rootNames[i] +'</option>';
	}

	// only the ID changes, selectors are always the same, all selectors for the questions go in "SelectorPanelY"
	
	for (i=0; i<moduleOptions[1].totalQuestions(); i++) {
		document.getElementById('module1SelectorPanel' + i).innerHTML += '<select class="form-control" id="module1Selector' + i +'">' + selectionOptions + '</select>';
	}
				
}

module1Randomize = function(pullFromServer) {
	/* pullfrom server = boolean
	default is false
	true = session already began, pull saved values (and maybe answers??) from session variables.
	false = no session started, randomize values for realsies. for the time being not dealing with true

	the function returns an array of results to pass to the rendering function to draw canvases,
	and (hopefully) an array of answers in order to populate the answer mesh (if visible) and compare with user answers
	for scoring */

	var results = {
		'renderInfo': [],
		'renderDataUrl': [], // possibly helpful for pushing to server later
		'verbalCorrectAnswers': [],
		'userAnswers': [],
		'scoring': [], // per question 0 for no 1 for yes
		'totalCorrect': 0, //couldbe calculated by summation etc
		'totalPossible': 0,
		'totalPercent': 0
	}

	var moduleNumber = 1; //this is DEPRECATED, but is local to the function so might come in handy, and doesn't interfere with anything



	if (pullFromServer == undefined) {pullFromServer = NO_PULL_FROM_SERVER};
		
	if (!pullFromServer) {

		// errything goes here
		var res = getRandomArray(moduleOptions[moduleNumber].totalQuestions(),0,moduleOptions[moduleNumber].clefSpan); 
		// for each random element of the array, create an associated note object
		var randomNotes = []; // this is our array to fill with random pitches for display
		var clefs = moduleOptions[moduleNumber].clefArray(); // array stores clefs for all quesions
	
		for (i=0; i < moduleOptions[moduleNumber].totalQuestions(); i++) {
		
			/*function createNoteInClef(clef,stepsAbove) {
			//accepts a clef and creates a single note object based on a clef bottom and a random number which signifies the
			//nnumber of root steps to go up. this is a modification of createRandomNote to accomodate for a group of random
			// notes without repeats */
		
			results.renderInfo[i] = createNoteInClef(clefs[i],res[i]); // may be optional later. could just convert and output in single step
			//console.log("the random number " + res[i] + " corresponds to " +randomNotes[i].getFullName());
			//Note.prototype.render = function(clef, canvasColor, targetID,canvasWidth)
			//randomNotes[i].render("bleh","bleh","module1Canvas"+i+1,200);

			// dump answers here - in the form of note roots (C, D). there is no concern for accidentals in this question

			//answerArray[moduleNumber][i] = randomNotes[i].getRootName();
			//console.log ('q number ' + i + ' note name ' +answerArray[moduleNumber][i]);

			// build up the rest of the result array

			results.verbalCorrectAnswers[i] = { note: results.renderInfo[i].getRootName() };


		}

		return results;
	}

	else {
		//actually pull the information from the server - this might actually be easier if I set up the result array properly
	}

}

module1getAnswers = function(results) {
	// pushes values from sleector into the results array
	var moduleNumber = 1;
	for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
		// dumpt majors into "major" and minors into minor
		results.userAnswers[i] = { note: document.getElementById('module' + moduleNumber + 'Selector'+i).value };
			// minor.getElementById('module' + moduleNumber + 'Selector'+i+'-2').value }; 		}
	}
}

module1GradeAnswers = function (results) {
	/* compares all the notes. the files in results (verbalCorrectAnswer, userAnswer, scoring)
	 all have the same structure of { note }.
	 totalCorrect,totalPossible and totalPercentage are integers and are calculated as well */

	 var moduleNumber = 1;
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

module1VisualizeAnswers = function(results) {
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

module1Render = function(renderInfo) {

	// in this module, renderInfo contains an array of Note objects

	var moduleNumber = 1; //this is DEPRECATED, but is local to the function so might come in handy, and doesn't interfere with anything

	var clefs = moduleOptions[moduleNumber].clefArray();

	for (i=0; i < moduleOptions[moduleNumber].totalQuestions(); i++) {
			
		canvasName = 'module' + moduleNumber + 'Canvas'+i;
		var newCanvas = document.getElementById(canvasName);
		var renderer = new Vex.Flow.Renderer(newCanvas,Vex.Flow.Renderer.Backends.CANVAS);
		var ctx = renderer.getContext();
		var stave = new Vex.Flow.Stave(0, 0,100);
		//stave.addKeySignature('C').setContext(ctx).draw();

	  	// Create the notes
	  	var notes = [
    		new Vex.Flow.StaveNote({ clef:clefs[i], keys: [renderInfo[i].getRootName()+"/"+renderInfo[i].getOctave()], duration: "w", color:"black" })];

    	var voice = new Vex.Flow.Voice ({
    		num_beats: 1,
    		beat_value: 1,
    		resolution: Vex.Flow.RESOLUTION
  		});

  		// Add notes to voice
  		voice.addTickables(notes);

  		// Format and justify the notes to 500 pixels
  		var formatter = new Vex.Flow.Formatter().
  		joinVoices([voice]).format([voice], 200);

		//attempt at changing color
		//ctx.setStrokeStyle('yellow');
		//ctx.setFillStyle('red');// woooo

  		stave.addClef(clefs[i]).setContext(ctx).draw();
  		// Render voice
   		voice.draw(ctx, stave);
   	}
}

function exportSVG() {
  	var s = new XMLSerializer();
  
  	var newCanvas = document.getElementById('module1Canvas0');
  	var ctx = newCanvas.getContext('2d');
	var renderer = new Vex.Flow.Renderer(newCanvas,Vex.Flow.Renderer.Backends.CANVAS);
	//var ctx = renderer.getContext();
	var dataURL = newCanvas.toDataURL();
	document.getElementById('xx').value = dataURL
	console.log(dataURL);

  return s.serializeToString(ctx.canvas); //ctx is the VexFlow SVG rendering context
}

function downloadSVG() {
  var content = exportSVG();
  var fileName = "vexflow-export.svg";
  var a = document.createElement("a");
  var file = new Blob([content], {type: 'text/plain'});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();

}

postToURL = function() {
	var newCanvas = document.getElementById('module1Canvas0');
	var dataURL = newCanvas.toDataURL();
	$.post("dataurltest.php", { key1: dataURL });
}
  
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"

