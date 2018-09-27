module8PopulateSelectors = function() {
	
	var moduleNumber =8;

	//root note
	
	var noteSelector='<option value=-10 selected></option>';
  	for (i=0; i<uCaseNoteNames.length; i++) {
		noteSelector += "<option>" + uCaseNoteNames[i] +"</option>";
	}
	// prepare quality selector
	var qualitySelector='<option value=-10 selected></option>';
	for (i=0; i<triadTypes.length; i++) 	{
		qualitySelector += '<option>' + triadTypes[i][0] +'</option>';
	}


	// prepare inversion selector
	var inversionSelector='<option value=-10 selected></option>';
		for (i=0; i<inversionTypes.length; i++) {
		inversionSelector += '<option value=' + i +'>' + inversionTypes[i] +'</option>';
	}

	/* from module 2 - just to make the things sit pretty inline

	for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).setAttribute('class','form-inline');
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).innerHTML += '<select class="form-control" id="module2Selector' + i + '-0">' + selector_meter_type + '</select>';
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).innerHTML += '<select class="form-control" id="module2Selector' + i + '-1">' + selector_meter_ticks + '</select>';
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).innerHTML += '<select class="form-control" id="module2Selector' + i + '-2">' + selector_time_signature_upper + '</select>';
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).innerHTML += '/';
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).innerHTML += '<select class="form-control" id="module2Selector' + i + '-3">' + selector_time_signature_lower + '</select>';
	} */


	for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).setAttribute('class','form-inline');
		document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += '<div class="form-group"><label>Root note: </label><select class="form-control morphing-selector" id="module' + moduleNumber +'Selector' + i +'-1">' + noteSelector + '</select></div>';
		document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += '<div class="form-group"><label>Quality: </label><select class="form-control morphing-selector" id="module' + moduleNumber +'Selector' + i +'-2">' + qualitySelector + '</select></div>';
		document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += '<div class="form-group"><label>Inversion: </label><select class="form-control morphing-selector" id="module' + moduleNumber +'Selector' + i +'-3">' + inversionSelector + '</select></div>';
	}	

	//
				
}

module8Randomize = function(pullFromServer) {

	var moduleNumber = 8;
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
		'inversions': [],
	}

	if (pullFromServer == undefined) {pullFromServer = NO_PULL_FROM_SERVER};
		
	if (!pullFromServer) {

		var randomTriadArray = [];
		var clefs = moduleOptions[moduleNumber].clefArray();
		for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
			randomTriadArray.push(getRandomTriad(clefs[i])); // edits 01/31/2016 no triads with more than 1 double 
			// algorithm - add up accidentals - if total of 2 stacked notes >4 or <-4, redo.

			
		}

		var infoArray = randomTriadArray;

		// randomize inversions. dont use getrandomarray since inversions will repeat inevitably!
		var randomInversionsArray = [];
		for(i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
			randomInversionsArray[i] = getRandomInt(0,2);

		}

		for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
			results.verbalCorrectAnswers[i] = { root: randomTriadArray[i][0].getRootName() + accidentalNames[randomTriadArray[i][0].getAccidental()], type: triadTypes[randomTriadArray[i][3]][0] , inversion: randomInversionsArray[i] };
			// triads are all in root pos so far so its ok to assume 0 index = root
			//inversions are a number
		}


		results.inversions = randomInversionsArray;

		
		results.renderInfo = infoArray; // DEPR but easier to leave for now

		return results;
	}

	else {
		//actually pull the information from the server - this might actually be easier if I set up the result array properly
	}

}

module8ShowAnswers = function() {

	var moduleNumber = 8;
	// optional - show answers

	/*for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) { 
	var tmpBottomNote = infoArray[i][1].getRootName() + accidentalNames[infoArray[i][1].getAccidental()]+infoArray[i][1].getOctave();
	var tmpTopNote = infoArray[i][3].getRootName() + accidentalNames[infoArray[i][3].getAccidental()]+infoArray[i][3].getOctave();

	results.verbalCorrectAnswers[i] = { bottomNote: tmpBottomNote , topNote: tmpTopNote, interval: infoArray[i][2], direction:'below', quality: getFullIntervalName(infoArray[i][2]).quality, size: getFullIntervalName(infoArray[i][2]).size };


	// var testText = 'Answer: ' + topNote + ' is ' + infoArray[i][2] + ' above ' + bottomNote;
		document.getElementById('module' + moduleNumber +'Answer'+i).innerHTML+= 'Root: ' + noteRoot + ' Quality: ' + triadTypes[randomTriadArray[i][3]][0] + '<br> Inversion: ' + inversionTypes[randomInversionsArray[i]];
		// should modify the random triad thing to spit out also the quality
		document.getElementById('module' + moduleNumber +'Check'+i).innerHTML+='<span class="glyphicon glyphicon-ok"></span>'; // ' remove for X'

	// optional - show answers

	for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) { 
		
		var noteRoot = infoArray[i][0].getRootName() + accidentalNames[infoArray[i][0].getAccidental()]+"/"+infoArray[i][0].getOctave();
		var note3rd = infoArray[i][1].getRootName() + accidentalNames[infoArray[i][1].getAccidental()]+"/"+infoArray[i][1].getOctave();
		var note5th = infoArray[i][2].getRootName() + accidentalNames[infoArray[i][2].getAccidental()]+"/"+infoArray[i][2].getOctave();
	}



	*/
}

module8Render = function(renderInfo, randomInversionsArray) {

	var moduleNumber = 8;

	clefs = moduleOptions[moduleNumber].clefArray();

	
// build graphical representation of the randomIntervalArray

	for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
		canvasName = 'module' + moduleNumber + 'Canvas'+i;
		var newCanvas = document.getElementById(canvasName)
		var renderer = new Vex.Flow.Renderer(newCanvas,Vex.Flow.Renderer.Backends.CANVAS);
		var ctx = renderer.getContext();
		var stave = new Vex.Flow.Stave(0, 0,120);
		//clefNames = clefArray();
		//stave.addClef(clefNames[i]).setContext(ctx).draw();

		// Create the notes using values from the randomIntervalArray

		var bumpRoot = 0;
		if (randomInversionsArray[i]>0) { bumpRoot = 1}

		var bump3rd = 0;
		if (randomInversionsArray[i]>1) { bump3rd = 1}

		var rootOctave = renderInfo[i][0].getOctave()+bumpRoot;
		//alert(rootOctave);	

		var thirdOctave = renderInfo[i][1].getOctave()+bump3rd;


		var noteRoot = renderInfo[i][0].getRootName() + accidentalNames[renderInfo[i][0].getAccidental()]+"/"+rootOctave;
		var note3rd = renderInfo[i][1].getRootName() + accidentalNames[renderInfo[i][1].getAccidental()]+"/"+thirdOctave;
		var note5th = renderInfo[i][2].getRootName() + accidentalNames[renderInfo[i][2].getAccidental()]+"/"+renderInfo[i][2].getOctave();

		
		//slight fix up - lets not screw up the accidentals

		var orderArray = [];
		switch (randomInversionsArray[i]) {
			case 0: orderArray = [0,1,2]; break;
			case 1: orderArray = [2,0,1]; break;
			case 2: orderArray = [1,2,0]; break;
		}


		var tmp = new Vex.Flow.StaveNote({ clef:clefs[i], keys: [noteRoot,note3rd,note5th], duration: "w" });
		if (renderInfo[i][0].getAccidental()!=0) { 
			tmp.addAccidental(orderArray[0], new Vex.Flow.Accidental(accidentalNames[renderInfo[i][0].getAccidental()]));
		}
		if (renderInfo[i][1].getAccidental()!=0) { 
			tmp.addAccidental(orderArray[1], new Vex.Flow.Accidental(accidentalNames[renderInfo[i][1].getAccidental()]));
		}
		if (renderInfo[i][2].getAccidental()!=0) { 
			tmp.addAccidental(orderArray[2], new Vex.Flow.Accidental(accidentalNames[renderInfo[i][2].getAccidental()]));
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
		   
		stave.addClef(clefs[i]).setContext(ctx).draw(); 
		// Render voice
			 
		voice.draw(ctx, stave);
		// voice2.draw(ctx, stave);
	}
}

module8GetAnswers = function() {
	// pushes values from sleector into the results array
	var moduleNumber =8;
	moduleResults[moduleNumber].userAnswers =[];
	moduleResults[moduleNumber].userAnswers.length =0;
	moduleResults[moduleNumber].scoring.length =0;
	moduleResults[moduleNumber].totalCorrect =0;
	moduleResults[moduleNumber].totalPossible = 3* moduleOptions[moduleNumber].totalQuestions();

	moduleResults[moduleNumber].totalQuestions = moduleOptions[moduleNumber].totalQuestions();

	for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
		// dumpt majors into "major" and minors into minor


		//results.verbalCorrectAnswers[i] = { root: randomTriadArray[i][0].getRootName() + accidentalNames[randomTriadArray[i][0].getAccidental()], type: randomTriadArray[i][3] , inversion: randomInversionsArray[i] };
		// includes root (1-2 characters, type (text, first letter capitalized, which is the same as answer), inversion (numerical))
		var _root = document.getElementById('module' + moduleNumber + 'Selector'+i+'-1').value;
		var _type = document.getElementById('module' + moduleNumber + 'Selector'+i+'-2').value;
		var _inversion = document.getElementById('module' + moduleNumber + 'Selector'+i+'-3').value;
		_root = _root.stripAccidentalAscii(); //alert(maj);
		
		// the rest of the 2 are ok

		moduleResults[moduleNumber].userAnswers.push( {root: { value: _root, grade: 0 } , type: { value: _type, grade:0 }, inversion: { value: _inversion, grade:0 }  });
		
		var newCanvas = document.getElementById('module' + moduleNumber +'Canvas' +i);
		
		moduleResults[moduleNumber].renderDataUrl.push(encodeURIComponent(newCanvas.toDataURL('image/png',1.0))); // quality 0-1

		// compare answers and calculate score

		//results.verbalCorrectAnswers[i] = { bottomNote: tmpBottomNote , topNote: tmpTopNote, quality: infoArray[i][3], size: infoArray[i][4], direction:'above' };
		var tmpCorrectRoot = moduleResults[moduleNumber].verbalCorrectAnswers[i].root;
		var tmpCorrectType = moduleResults[moduleNumber].verbalCorrectAnswers[i].type;
		var tmpCorrectInversion = moduleResults[moduleNumber].verbalCorrectAnswers[i].inversion;

		var tmpUserRoot = moduleResults[moduleNumber].userAnswers[i].root.value;
		var tmpUserType = moduleResults[moduleNumber].userAnswers[i].type.value; 
		var tmpUserInversion = moduleResults[moduleNumber].userAnswers[i].inversion.value; 
		

		if (tmpCorrectRoot == tmpUserRoot) {
			moduleResults[moduleNumber].userAnswers[i].root.grade=1;
			moduleResults[moduleNumber].totalCorrect +=1;
		}

		if (tmpCorrectType == tmpUserType) {
			moduleResults[moduleNumber].userAnswers[i].type.grade=1;
			moduleResults[moduleNumber].totalCorrect +=1;
		}

		if (tmpCorrectInversion == tmpUserInversion) {
			moduleResults[moduleNumber].userAnswers[i].inversion.grade=1;
			moduleResults[moduleNumber].totalCorrect +=1;
		}

	}
	
}