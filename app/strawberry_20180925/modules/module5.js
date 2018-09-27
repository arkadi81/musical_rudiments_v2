/* Establishes framework for finding and asking user about intervals in all clefs.
TBD make the theory functions in this group part of the theory module - later.
module 5 contains 3 sub questions: CORRECTION - MODULE 5 is now split into 5, 6,7
1. identifying a given 2 note interval (TBD no unison)
2. selecting the correct interval ABOVE a given one
3. selecting the correct interval Below a given one
the framework is able to evaluate the user's response and if necessary show the correct answer
*/

module5PopulateSelectors = function() {

	var moduleNumber = 5;

	// prepare interval quality selector
	var qualitySelector='<option value=-1 selected></option>';
	for (i=0; i<intervalQualities.length; i++) {
		qualitySelector += '<option value="' + intervalQualities[i].value +'">' + intervalQualities[i].name +'</option>';
	}

	// prepare interval size selector
	var sizeSelector='<option value=-1 selected></option>';
	for (i=0; i<moduleOptions[moduleNumber].maxIntervalSize; i++) {
		sizeSelector += '<option  value="' + intervalSizes[i].value +'">' + intervalSizes[i].name +"</option>"; // randomize the keys later
	}
		//sizeSelector = "<select>" + sizeSelector + "</select>"; // randomize the keys later


	for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).setAttribute('class','form-inline'); // has-success has-feedback
		document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += '<div class="form-inline"><label>Quality:</label><select class="form-control morphing-selector" id="module5Selector' + i +'-1">' + qualitySelector + '</select>';
		document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += '<label>Size: </label><select class="form-control morphing-selector" id="module5Selector' + i +'-2">' + sizeSelector + '</select></div>';
	}

}

module5Randomize = function(pullFromServer) {

	var moduleNumber = 5;
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
		'totalCorrect': 0,
		'totalPossible': 0, //couldbe calculated by summation etc
	}

	if (pullFromServer == undefined) {pullFromServer = NO_PULL_FROM_SERVER};
		
	if (!pullFromServer) {

		var randomIntervalArray = buildIntervalArray(moduleOptions[moduleNumber].totalQuestions(),moduleOptions[moduleNumber].clefArray(),moduleOptions[moduleNumber].maxIntervalSize);
		//randomIntervalArray: 0 = clefs, 1 = bottomNote, 2= topNote, 3 = rndQuality, 4 = rndSize, 5 = direction]);
	
		var infoArray = randomIntervalArray; // DEPRECATED but easier to keep than remove

		// optional - show answers

		for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) { 
		var tmpBottomNote = infoArray[i][1].getRootName() + accidentalNames[infoArray[i][1].getAccidental()]+infoArray[i][1].getOctave();
		var tmpTopNote = infoArray[i][2].getRootName() + accidentalNames[infoArray[i][2].getAccidental()]+infoArray[i][2].getOctave();

		results.verbalCorrectAnswers[i] = { bottomNote: tmpBottomNote , topNote: tmpTopNote, quality: infoArray[i][3], size: infoArray[i][4], direction:'above' };
	
		}

		results.renderInfo = infoArray; // DEPR but easier to leave for now

		return results;
	}

	else {
		//actually pull the information from the server - this might actually be easier if I set up the result array properly
	}

}

module5ShowAnswers = function() {

	var moduleNumber = 5;
	// use global moduleResults[5].verbalCorrectAnswers()
	// getFullIntervalName returns a wordy interval name: P5->Perfect 5th
	
	
}

module5Render = function(renderInfo) {

	var moduleNumber = 5;

	// in this module, renderInfo contains an array of keys (C, D, etc)

	for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
		canvasName = 'module' + moduleNumber + 'Canvas'+i;
		var newCanvas = document.getElementById(canvasName)
		//var canvas = $("div.one div.a canvas")[0];
		var renderer = new Vex.Flow.Renderer(newCanvas,Vex.Flow.Renderer.Backends.CANVAS);
		var ctx = renderer.getContext();
		var stave = new Vex.Flow.Stave(0, 20,100, {space_above_staff_ln: 6, space_below_staff_ln: 6}); // 20 is for top notes to not go out of bounds
		//clefNames = clefArray();
		//stave.addClef(clefNames[i]).setContext(ctx).draw();

		// Create the notes using values from the randomIntervalArray

		var bottomNote = renderInfo[i][1].getRootName() + accidentalNames[renderInfo[i][1].getAccidental()]+"/"+renderInfo[i][1].getOctave();
		var topNote = renderInfo[i][2].getRootName() + accidentalNames[renderInfo[i][2].getAccidental()]+"/"+renderInfo[i][2].getOctave();

		
		tmp = new Vex.Flow.StaveNote({ clef:renderInfo[i][0], keys: [bottomNote,topNote], duration: "w" });
		if (renderInfo[i][1].getAccidental()!=0) { 
			tmp.addAccidental(0, new Vex.Flow.Accidental(accidentalNames[renderInfo[i][1].getAccidental()]));
		}
		if (renderInfo[i][2].getAccidental()!=0) { 
			tmp.addAccidental(1, new Vex.Flow.Accidental(accidentalNames[renderInfo[i][2].getAccidental()]));
		}
		var notes = [tmp];
    
	    // Create a second voice, with just one whole note
		/* tmp2 = new Vex.Flow.StaveNote({ keys: [topNote], duration: "w" });
		if (infoArray[i][3].getAccidental()!=0) { 
		tmp2.addAccidental(0, new Vex.Flow.Accidental(accidentalNames[infoArray[i][3].getAccidental()]));
		}
		var notes2 = [tmp2];*/
 
		  
		// Create a voice in 4/4
  		function create_4_4_voice() {
			return new Vex.Flow.Voice({
				  num_beats: 4,
				  beat_value: 4,
				  resolution: Vex.Flow.RESOLUTION
			});
		  }
			  
		// Create voices and add notes to each of them.
		var voice = create_4_4_voice().addTickables(notes);
		// var voice2 = create_4_4_voice().addTickables(notes2);
		 
		// Format and justify the notes to 500 pixels
		var formatter = new Vex.Flow.Formatter().
		joinVoices([voice]).format([voice], 200);
		   
		stave.addClef(renderInfo[i][0]).setContext(ctx).draw(); 
		// Render voice
			 
		voice.draw(ctx, stave);
	}
}

module5GetAnswers = function() {
	// pushes values from sleector into the results array
	var moduleNumber =5;
	moduleResults[moduleNumber].userAnswers =[];
	moduleResults[moduleNumber].userAnswers.length =0;
	moduleResults[moduleNumber].scoring.length =0;
	moduleResults[moduleNumber].totalCorrect =0;
	// 20160320 each correct interval earns one point, and only if both interval and quality are correct.
	moduleResults[moduleNumber].totalPossible = 1* moduleOptions[moduleNumber].totalQuestions();

	moduleResults[moduleNumber].totalQuestions = moduleOptions[moduleNumber].totalQuestions();

	for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
		// dumpt majors into "major" and minors into minor
		var _quality = document.getElementById('module' + moduleNumber + 'Selector'+i+'-1').value;
		var _size = document.getElementById('module' + moduleNumber + 'Selector'+i+'-2').value;
		
		moduleResults[moduleNumber].userAnswers.push( {quality: { value: _quality, grade: 0 } , size: { value: _size, grade:0 }  });
		
		var newCanvas = document.getElementById('module' + moduleNumber +'Canvas' +i);
		
		moduleResults[moduleNumber].renderDataUrl.push(encodeURIComponent(newCanvas.toDataURL('image/png',1.0))); // quality 0-1

		// compare answers and calculate score

		//results.verbalCorrectAnswers[i] = { bottomNote: tmpBottomNote , topNote: tmpTopNote, quality: infoArray[i][3], size: infoArray[i][4], direction:'above' };
		var tmpCorrectQuality = moduleResults[moduleNumber].verbalCorrectAnswers[i].quality;
		var tmpCorrectSize = moduleResults[moduleNumber].verbalCorrectAnswers[i].size;

		var tmpUserQuality = moduleResults[moduleNumber].userAnswers[i].quality.value;
		var tmpUserSize = moduleResults[moduleNumber].userAnswers[i].size.value; 
		

		if (tmpCorrectQuality == tmpUserQuality) {
			moduleResults[moduleNumber].userAnswers[i].quality.grade=1;
			//moduleResults[moduleNumber].totalCorrect +=1;
		}

		if (tmpCorrectSize == tmpUserSize) {
			moduleResults[moduleNumber].userAnswers[i].size.grade=1;
			//moduleResults[moduleNumber].totalCorrect +=1;
		}

		if (tmpCorrectQuality == tmpUserQuality && tmpCorrectSize == tmpUserSize)
		{
			moduleResults[moduleNumber].totalCorrect +=1;
		}

	}
	
}