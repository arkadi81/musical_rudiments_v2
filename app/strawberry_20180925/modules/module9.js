
module9PopulateSelectors = function() {
	
	moduleNumber = 9;
		
	var romanNumeralSelector='';
	for (i=0; i<romanNumerals.length; i++) 	{
		romanNumeralSelector += '<option>' + romanNumerals[i] +'</option>';
	}
	
	// prepare figured bass selector
	
	var figuredBassSelector='';
	for (i=0; i<figuredBassOptions.length; i++) 	{
		figuredBassSelector += '<option>' + figuredBassOptions[i] +'</option>';
	}
	
	// prepare inversion selector
	var inversionSelector="";
	for (i=0; i<inversionTypes.length; i++) {
		inversionSelector += "<option>" + inversionTypes[i] +"</option>";
	}

	for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
		document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += [
		'<div class="form-inline ">',
		'<div class="form-group has-success"><select class="form-control" id="module' + moduleNumber +'Selector' + i +'-1">' + romanNumeralSelector + '</select></div>',
		//'<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>',
		'<select class="form-control" id="module' + moduleNumber +'Selector' + i +'-2">' + figuredBassSelector + '</select>',
		'</div></div>',
		].join('\n');
		//document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += '<div class="col-sm-6"><select class="form-control" id="module' + moduleNumber +'Selector' + i +'-4">' + inversionSelector + '</select></div></div>';
	}	
	
}	

module9Randomize = function(pullFromServer) {

	var moduleNumber = 9;
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
		'total': 0, //couldbe calculated by summation etc
		'inversions': [],
		'randomScaleArray': [],
	}

	if (pullFromServer == undefined) {pullFromServer = NO_PULL_FROM_SERVER};
		
	if (!pullFromServer) {

		var majorMinor = []; // only major and minor scale analysis for now 0 for major, 1 for minor
		var randomScaleArray = []; // these are the scales we will derive from
		var randomDegreeArray = []; // indicates appropriate scale degree for each question. the 'correct' forms of each degree for major and minor are outlined as constants
		var randomInversionsArray = [];
		var randomTriadTypes = [];
		var randomTriadRootsArray = [];
		var triadArray = []; // this is where the triads for rendering go


		for(i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
			majorMinor[i] = getRandomInt(0,1);
			randomDegreeArray[i] = getRandomInt(1,7);
			randomInversionsArray[i] = getRandomInt(0,2);
		}

		for(i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
			if (majorMinor[i]==0) { //major scale // problem: note roots are numberical 0 2 etc. the roots we have for choice of major and minor sigs are letters, often with modifiers
				// we need to convert say "bb" to a root and accidental
				randomScaleArray[i] = getRandomArrayElement(keySignatures);
			}
			else {
			// minor
			randomScaleArray[i] = getRandomArrayElement(minorKeySignatures);
			}

			//root note is always first character
			var rootName = randomScaleArray[i].slice(0,1).toUpperCase();
			// find corresponding number to make a note;

			var indexOfRoot = rootNames.indexOf(rootName);
			//var rootPc = rootValues[indexOfRoot];
			//alert(rootPc);

			//convert nada, #, b to accidental
			var accidentalText = randomScaleArray[i].slice(1); // hopefully all the way to the end

			var accidental=0;

			console.log('question '+ i +'scale is ' + randomScaleArray[i] + ' accidental is '+ accidentalText + 'inversion is ' +randomInversionsArray[i]);
			switch (accidentalText) {
				case 'b': accidental =-1; break;
				case '': accidental = 0; break;
				case '#': accidental =1; break;
			}

			// now we got a root in numerical format, an accidental and octave = 4 ready to create a note
			//
			var rootNote = new Note(indexOfRoot, accidental,4);
			console.log(i +': ' + rootNote.getFullName()); //ok

			// now, find a note relative to this root which is removed at random based on randomDegreeArray 

			randomTriadRootsArray[i]=rootNote.findInterval(scaleDegrees[majorMinor[i]][randomDegreeArray[i]-1],"above");


			// lets get a triad

			// function createTriad(rootNote, triadType, inversion) {
			// helper - the type of triad in mesh based on maj/min and scale degree
			randomTriadTypes[i] = diatonicTriadTypes[majorMinor[i]][randomDegreeArray[i]-1];
			// randomTriadTypes saves the types in verbal format. we need numbers to call createtriad

			var ind = 0;
			switch (randomTriadTypes[i]) {
				case 'Major': ind = 0; break;
				case 'Minor': ind = 1; break;
				case 'Diminished': ind = 2; break; // no augmented in diatonic
			}

			//function createTriad(rootNote, triadType, inversion)

			triadArray.push(createTriad(randomTriadRootsArray[i],ind,randomInversionsArray[i]));
		}
		
		// in this context, the indication 'above' isnt necessary
		var infoArray = triadArray;

		results.inversions = randomInversionsArray;

		results.randomScaleArray = randomScaleArray;

		results.renderInfo = infoArray; // DEPR but easier to leave for now

		return results;
	}

	else {
		//actually pull the information from the server - this might actually be easier if I set up the result array properly
	}

}

module9ShowAnswers = function() {

	var moduleNumber = 9;

	/*for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) { 

		
		var noteRoot = infoArray[i][0].getRootName() + accidentalNames[infoArray[i][0].getAccidental()]+"/"+infoArray[i][0].getOctave();
		var note3rd = infoArray[i][1].getRootName() + accidentalNames[infoArray[i][1].getAccidental()]+"/"+infoArray[i][1].getOctave();
		var note5th = infoArray[i][2].getRootName() + accidentalNames[infoArray[i][2].getAccidental()]+"/"+infoArray[i][2].getOctave();

			

		// var testText = 'Answer: ' + topNote + ' is ' + infoArray[i][2] + ' above ' + bottomNote;
		document.getElementById('module' + moduleNumber +'Answer'+i).innerHTML+= 'Scale Degree: ' + randomDegreeArray[i] + ' Root: ' + randomTriadRootsArray[i].getFullName() + '<br> Inversion: ' + inversionTypes[randomInversionsArray[i]]
		+ ' triad type: ' + randomTriadTypes[i] + ' Triad members: ' + infoArray[i][0].getFullName() +' '+ infoArray[i][1].getFullName() + ' '+ infoArray[i][2].getFullName() ;
		// should modify the random triad thing to spit out also the quality
		document.getElementById('module' + moduleNumber +'Check'+i).innerHTML+='<span class="glyphicon glyphicon-ok"></span>'; // ' remove for X'


	}*/
}
  
module9Render = function(renderInfo, randomInversionsArray, randomScaleArray) {

	var moduleNumber = 9;

	var clefs = moduleOptions[moduleNumber].clefArray();

	for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {

		var keyText = 'Key: ' + randomScaleArray[i];
		document.getElementById('module' + moduleNumber + 'Question' + i + 'LowerPrompt').innerHTML+= '<div class="col-sm-12 text-left">' + keyText + '</div>';

		canvasName = 'module' + moduleNumber + 'Canvas'+i;
		var newCanvas = document.getElementById(canvasName)
		//var canvas = $("div.one div.a canvas")[0];
		var renderer = new Vex.Flow.Renderer(newCanvas,Vex.Flow.Renderer.Backends.CANVAS);
		var ctx = renderer.getContext();
		var stave = new Vex.Flow.Stave(0, 0,120, {space_above_staff_ln: 6, space_below_staff_ln: 6});
		
		
		//stave.addClef(clefNames[i]).setContext(ctx).draw();

		// Create the notes using values from the randomIntervalArray

		/*var bumpRoot = 0;
		if (randomInversionsArray[i]>0) { bumpRoot = 1}

		var bump3rd = 0;
		if (randomInversionsArray[i]>1) { bump3rd = 1}

		var rootOctave = infoArray[i][0].getOctave()+bumpRoot;
		//alert(rootOctave);	

		var thirdOctave = infoArray[i][1].getOctave()+bump3rd;*/

		// slight fixup - if the notes shoot too far up, drop everything down an octave
		var octaveMarkers =[renderInfo[i][0].getOctave(),renderInfo[i][1].getOctave(),renderInfo[i][2].getOctave()];
		if (renderInfo[i][0].getOctave()>=6 || renderInfo[i][1].getOctave()>=6 || renderInfo[i][2].getOctave()>=6 ) {
			octaveMarkers[0]--;
			octaveMarkers[1]--;
			octaveMarkers[2]--;
		}


		var noteRoot = renderInfo[i][0].getRootName() + accidentalNames[renderInfo[i][0].getAccidental()]+"/"+ octaveMarkers[0];
		var note3rd = renderInfo[i][1].getRootName() + accidentalNames[renderInfo[i][1].getAccidental()]+"/"+ octaveMarkers[1];
		var note5th = renderInfo[i][2].getRootName() + accidentalNames[renderInfo[i][2].getAccidental()]+"/"+ octaveMarkers[2];

		
		// slight fixup. the renderer thinks 0 is always bottom note in chord, we need to rearrange
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