/*module7PopulateSelectors = function() {
	
	var moduleNumber = 7;

	
	//root note
	var rootNoteSelector = '<option value=-10 selected></option>';
  	for (i=0; i<rootNames.length; i++) 	{
		rootNoteSelector += '<option>' + rootNames[i] +'</option>';
	}

	
	// prepare accidental selector
	var accidentalSelector='<option value=-10 selected></option>';
	
	for (i=0; i<accidentalGlyphs.length ; i++) {
		accidentalSelector += '<option value="' + accidentalGlyphs[i].value +'">' + accidentalGlyphs[i].name +'</option>';
	}

	//root note
	var noteSelector="";
  	for (i=0; i<uCaseNoteNames.length; i++) {
		noteSelector += "<option>" + uCaseNoteNames[i] +"</option>";
	}


	for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).setAttribute('class','form-inline');
		document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += '<select class="form-control" id="module' + moduleNumber + 'Selector' + i +'-1">' + rootNoteSelector + '</select>';
		document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += '<select class="form-control" id="module' + moduleNumber + 'Selector' + i +'-2">' + accidentalSelector + '</select>';
	}	
				
}*/

function module7ModifierPanel(questionNumber) {
	/* these buttons do not need individual ID's - the information is kept inside a separate variable
	with the pitch values, hopefully in text form */

	var modifierPanel = ''; //'<input type="button" value="Previous note" onClick="moveLeft(' + questionNumber +')">'; //&#8592
	//modifierPanel += '<input type="button" value="Next note" onClick="moveRight(' + questionNumber +')">'; //&#8594
	//modifierPanel += '<span>   </span>'
	modifierPanel += '<input type="button" class="hidden-print" value="↑" onClick="module7MoveDegUp(' + questionNumber +')">';
	modifierPanel += '<input type="button" class="hidden-print" value="↓" onClick="module7MoveDegDown(' + questionNumber + ')">';
	modifierPanel += '<input type="button" class="hidden-print" value=&#9839 onClick="module7SharpDeg(' + questionNumber + ')">';
	modifierPanel += '<input type="button" class="hidden-print" value=&#9837 onClick="module7FlatDeg(' + questionNumber + ')">';
	modifierPanel += '<input type="button" class="hidden-print" value="X" onClick="module7DblSharpDeg(' + questionNumber + ')">';
	modifierPanel += '<input type="button" class="hidden-print" Value=&#9837&#9837 onClick="module7DblFlatDeg(' + questionNumber + ')">';
	modifierPanel += '<input type="button" class="hidden-print" Value=&#9838 onClick="module7NaturalizeDeg(' + questionNumber + ')">';	

	return modifierPanel;
}

module7PopulateSelectors = function() {
	// this one is too specialized to make general, EVERY SELECTOR HAS TO BE INDIVIDUALLY ID'D TO PULL INFO FROM IT!!!
	// has to be run after all DOM stuff is ready

	var moduleNumber = 7;

  	for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
  			//dynamically build up the array of instruction spacers and canvases inside divs
  			document.getElementById('module' + moduleNumber + 'SelectorPanel'+i).innerHTML+='<table class="table" style="text-align:right">'+module7ModifierPanel(i)+'</table>';
	}
}


module7Randomize = function(pullFromServer) {

	var moduleNumber = 7;
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
		'renderAnswers': [],
		'verbalCorrectAnswers': [],
		'userAnswers': [],
		'scoring': [], // per question 0 for no 1 for yes
		'totalCorrect': 0,
		'totalPossible': 0, //couldbe calculated by summation etc

	}


	if (pullFromServer == undefined) {pullFromServer = NO_PULL_FROM_SERVER};
		
	if (!pullFromServer) {

		//var randomIntervalArray = buildIntervalArray(moduleOptions[moduleNumber].totalQuestions(),moduleOptions[moduleNumber].clefArray());
		var randomIntervalArray = buildIntervalArray(moduleOptions[moduleNumber].totalQuestions(),moduleOptions[moduleNumber].clefArray(),moduleOptions[moduleNumber].maxIntervalSize, 'below');
		//randomIntervalArray: 0 = clefs, 1 = bottomNote, 2= topNote, 3 = rndQuality, 4 = rndSize, 5 = direction]);

		var infoArray = randomIntervalArray; // DEPRECATED but easier to keep than remove

		// optional - show answers

		for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) { 
		var tmpBottomNote = infoArray[i][1].getRootName() + accidentalNames[infoArray[i][1].getAccidental()]+ '/' + infoArray[i][1].getOctave();
		var tmpTopNote = infoArray[i][2].getRootName() + accidentalNames[infoArray[i][2].getAccidental()]+ '/' + infoArray[i][2].getOctave();

		//results.verbalCorrectAnswers[i] = { bottomNote: tmpBottomNote , topNote: tmpTopNote, interval: infoArray[i][2], quality: infoArray[i][3], size: infoArray[i][4], direction:'below', root: infoArray[i][2].getRootName(), accidental: accidentalNames[infoArray[i][2].getAccidental()] };

		//res.push([clefs[i],bottomNote, topNote, rndQuality, rndSize, direction]);
		results.verbalCorrectAnswers[i] = { bottomNote: tmpBottomNote , topNote: tmpTopNote, interval: infoArray[i][2], quality: infoArray[i][3], size: infoArray[i][4], direction:'below', root: infoArray[i][2].getRootName(), accidental: accidentalNames[infoArray[i][2].getAccidental()], octave: infoArray[i][2].getOctave()  };
		results.userAnswers.push( { value: tmpBottomNote,  grade: 0, offset: 0 });

		}

		results.renderInfo = infoArray; // DEPR but easier to leave for now
		

		return results;
	}

	else {
		//actually pull the information from the server - this might actually be easier if I set up the result array properly
	}

}

module7ShowAnswers = function() {

	var moduleNumber = 7;


	// use global moduleResults[6].verbalCorrectAnswers()
	// getFullIntervalName returns a wordy interval name: P5->Perfect 5th


	for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
			var testText = 'Answer: ' + moduleResults[moduleNumber].verbalCorrectAnswers[i].topNote + ' is a <b>' +  moduleResults[5].verbalCorrectAnswers[i].quality + ' ' + moduleResults[5].verbalCorrectAnswers[i].size + '</b> above ' + moduleResults[5].verbalCorrectAnswers[i].bottomNote;
			document.getElementById('module' + moduleNumber +'Answer'+i).innerHTML = ' ' +testText;
			//document.getElementById('module' + moduleNumber +'Check'+i).innerHTML ='<span class="glyphicon glyphicon-ok"></span>'; // ' remove for X'
	}
	
	// get information from selectors
	for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
		moduleResults[moduleNumber].userAnswers[i] = { quality: document.getElementById('module' + moduleNumber + 'Selector'+i+'-1').value, size: document.getElementById('module' + moduleNumber + 'Selector'+i+'-2').value };
	}

	// compare
	for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
		console.log('Q'+i+': Correct:' + moduleResults[5].verbalCorrectAnswers[i].quality + ' ' + moduleResults[5].verbalCorrectAnswers[i].size + '. User: ' + moduleResults[5].userAnswers[i].quality + ' ' + moduleResults[5].userAnswers[i].size);
	}
	
	/*	


for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) { 
		var bottomNote = infoArray[i][1].getRootName() + accidentalNames[infoArray[i][1].getAccidental()]+"/"+infoArray[i][1].getOctave();
		var topNote = infoArray[i][3].getRootName() + accidentalNames[infoArray[i][3].getAccidental()]+"/"+infoArray[i][3].getOctave();

		var testText = 'Answer: ' + topNote + ' is ' + infoArray[i][2] + ' below ' + bottomNote;
		document.getElementById('module' + moduleNumber +'Answer'+i).innerHTML+= ' ' +testText;
		document.getElementById('module' + moduleNumber +'Check'+i).innerHTML+='<span class="glyphicon glyphicon-ok"></span>'; // ' remove for X'	*/
}

module7Render = function(renderInfo) {

	var moduleNumber = 7;

	for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {

		// display interval
		var intervalText = renderInfo[i][3] + renderInfo[i][4] + ' below' + '<br> \u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u23AF\u27F6';
		document.getElementById('module' + moduleNumber +'Question' + i + 'Prompt').innerHTML+= intervalText;

		canvasName = 'module' + moduleNumber + 'Canvas'+i;
		var newCanvas = document.getElementById(canvasName)
		var renderer = new Vex.Flow.Renderer(newCanvas,Vex.Flow.Renderer.Backends.CANVAS);
		var ctx = renderer.getContext();
		var stave = new Vex.Flow.Stave(0, 0,100, {space_above_staff_ln: 6, space_below_staff_ln: 6});
		//clefNames = clefArray();
		//stave.addClef(clefNames[i]).setContext(ctx).draw();

		// Create the notes using values from the randomIntervalArray

		var bottomNote = renderInfo[i][1].getRootName() + accidentalNames[renderInfo[i][1].getAccidental()]+"/"+renderInfo[i][1].getOctave();
		var topNote = renderInfo[i][2].getRootName() + accidentalNames[renderInfo[i][2].getAccidental()]+"/"+renderInfo[i][2].getOctave();

		
		tmp = new Vex.Flow.StaveNote({ clef:renderInfo[i][0], keys: [bottomNote /*no top note here*/] , duration: "w" });
			if (renderInfo[i][1].getAccidental()!=0) { 
				tmp.addAccidental(0, new Vex.Flow.Accidental(accidentalNames[renderInfo[i][1].getAccidental()]));
		}
		/*if (infoArray[i][3].getAccidental()!=0) { 
			tmp.addAccidental(1, new Vex.Flow.Accidental(accidentalNames[infoArray[i][3].getAccidental()]));
		}*/
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
		// voice2.draw(ctx, stave);

		// edits 10/31/2016. ALSO draw the answerCanvas with same note
		/*AnswerCanvasName = 'module' + moduleNumber + 'AnswerCanvas'+i;
		var newAnswerCanvas = document.getElementById(AnswerCanvasName)
		var answerRenderer = new Vex.Flow.Renderer(newAnswerCanvas,Vex.Flow.Renderer.Backends.CANVAS);
		var answerCtx = answerRenderer.getContext();

		stave.setContext(answerCtx).draw(); 
		voice.draw(answerCtx,stave);*/

		// EDITS 2/5/2016, make editable note blue
		var curNote = moduleResults[moduleNumber].userAnswers[i].value;
		var r = parseVexFlowString(curNote);

		var newStr = createVexFlowString(r);
		moduleResults[moduleNumber].userAnswers[i].value = newStr;

		module7RenderResult(i);

		//20160907 add an empty stave for printing
		canvasName = 'module' + moduleNumber + 'AnswerCanvas'+i+'printable';
		var newCanvas = document.getElementById(canvasName)
		var renderer = new Vex.Flow.Renderer(newCanvas,Vex.Flow.Renderer.Backends.CANVAS);
		var ctx = renderer.getContext();
		var stave = new Vex.Flow.Stave(0, 0,100);
		stave.addClef(renderInfo[i][0]).setContext(ctx).draw();
	}
}

module7GetAnswers = function() {
	// pushes values from sleector into the results array
	var moduleNumber =7;
	//moduleResults[moduleNumber].userAnswers =[];
	//moduleResults[moduleNumber].userAnswers.length =0;
	moduleResults[moduleNumber].scoring.length =0;
	moduleResults[moduleNumber].totalCorrect =0;
	moduleResults[moduleNumber].totalPossible = 1* moduleOptions[moduleNumber].totalQuestions();

	moduleResults[moduleNumber].totalQuestions = moduleOptions[moduleNumber].totalQuestions();

	for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
		// dumpt majors into "major" and minors into minor
		//var _root = document.getElementById('module' + moduleNumber + 'Selector'+i+'-1').value;
		//var _acc = document.getElementById('module' + moduleNumber + 'Selector'+i+'-2').value;
		
		//moduleResults[moduleNumber].userAnswers.push( {root: { value: _root, grade: 0 } , accidental: { value: _acc, grade:0 }  });
		
		var newCanvas = document.getElementById('module' + moduleNumber +'Canvas' +i);
		
		moduleResults[moduleNumber].renderDataUrl.push(encodeURIComponent(newCanvas.toDataURL('image/png',1.0))); // quality 0-1

		var answerCanvas = document.getElementById('module' + moduleNumber +'AnswerCanvas' +i);

		moduleResults[moduleNumber].renderAnswers.push(encodeURIComponent(answerCanvas.toDataURL('image/png',1.0)));

		// compare answers and calculate score

		//results.verbalCorrectAnswers[i] = { bottomNote: tmpBottomNote , topNote: tmpTopNote, quality: infoArray[i][3], size: infoArray[i][4], direction:'above', root: infoArray[i][2].getRootName(), accidental: accidentalNames[infoArray[i][2].getAccidental()] };
		var tmpDestNote = moduleResults[moduleNumber].verbalCorrectAnswers[i].topNote;
		var tmpUserDest = moduleResults[moduleNumber].userAnswers[i].value;

		if (tmpDestNote == tmpUserDest) {
			moduleResults[moduleNumber].userAnswers[i].grade=1;
			moduleResults[moduleNumber].totalCorrect +=1;
		}

	}
	
}


module7MoveDegUp = function(questionNumber) {

	var moduleNumber = 7;
	
	//alert(r[0]);
	// r[0] = root, r[1] = accidental, r[2] = octave

	//var n = getScaleNumber(r);
	//var n = offstes[questioNumber][activeNotes[questionNumber]];

	if (moduleResults[moduleNumber].userAnswers[questionNumber].offset<=2) {

		var curNote = moduleResults[moduleNumber].userAnswers[questionNumber].value;

		curNote = curNote.slice(0,-1) + "/" + curNote.slice(-1);
		//alert(curNote);
		var r = parseVexFlowString(curNote);
		//alert(n);
		// construct new note
		var newRoot = getNextNaturalNote(r[0]);
		var newAccidental = "";
		var newOctave = r[2];
		if (r[0]=='b' || r[0]=='B') { newOctave++; }


		var newNote = [newRoot, newAccidental,newOctave]
		//alert(newNote[0]);

		var newStr = createVexFlowString(newNote);


		moduleResults[moduleNumber].userAnswers[questionNumber].value = newStr;

		module7RenderResult(questionNumber);

		moduleResults[moduleNumber].userAnswers[questionNumber].offset++;
	}
	
}

module7MoveDegDown =function(questionNumber) {
	
	var moduleNumber = 7;
	
	if (moduleResults[moduleNumber].userAnswers[questionNumber].offset>=-12) {

		var curNote = moduleResults[moduleNumber].userAnswers[questionNumber].value;

		curNote = curNote.slice(0,-1) + "/" + curNote.slice(-1);
		//alert(curNote);
		var r = parseVexFlowString(curNote);

		var newRoot = getPrevNaturalNote(r[0]);
		var newAccidental = "";
		var newOctave = r[2];
		if (r[0]=='c' || r[0]=='C') { newOctave--; }

		var newNote = [newRoot, newAccidental,newOctave];

		var newStr = createVexFlowString(newNote);

		moduleResults[moduleNumber].userAnswers[questionNumber].value = newStr;

		module7RenderResult(questionNumber);

		moduleResults[moduleNumber].userAnswers[questionNumber].offset--;
	}
}	

module7FlatDeg =function(questionNumber) {
	
	var moduleNumber = 7;

	var curNote = moduleResults[moduleNumber].userAnswers[questionNumber].value;
	//alert(curNote);
	var r = parseVexFlowString(curNote);

	// if already have flat, remove it. if not, add it
	
	if (r[1]!='b') {
		r[1]='b';
		
	}
	else { 
		r[1]='';
	}

	var newStr = createVexFlowString(r);
	//alert(r[0]);

	moduleResults[moduleNumber].userAnswers[questionNumber].value = newStr;

	module7RenderResult(questionNumber);
}

module7SharpDeg =function(questionNumber) {
	var moduleNumber = 7;

	var curNote = moduleResults[moduleNumber].userAnswers[questionNumber].value;
	//alert(curNote);
	var r = parseVexFlowString(curNote);

	// if already have flat, remove it. if not, add it
	
	if (r[1]!='#') {
		r[1]='#';
		
	}
	else { 
		r[1]='';
	}

	var newStr = createVexFlowString(r);
	//alert(r[0]);

	moduleResults[moduleNumber].userAnswers[questionNumber].value = newStr;

	module7RenderResult(questionNumber);
}				

module7DblFlatDeg =function(questionNumber) {
	var moduleNumber = 7;

	var curNote = moduleResults[moduleNumber].userAnswers[questionNumber].value;
	//alert(curNote);
	var r = parseVexFlowString(curNote);

	// if already have flat, remove it. if not, add it
	
	if (r[1]!='bb') {
		r[1]='bb';
		
	}
	else { 
		r[1]='';
	}

	var newStr = createVexFlowString(r);
	//alert(r[0]);

	moduleResults[moduleNumber].userAnswers[questionNumber].value = newStr;

	module7RenderResult(questionNumber);
}

module7DblSharpDeg =function(questionNumber) {
	var moduleNumber = 7;

	var curNote = moduleResults[moduleNumber].userAnswers[questionNumber].value;
	//alert(curNote);
	var r = parseVexFlowString(curNote);

	// if already have flat, remove it. if not, add it
	
	if (r[1]!='##') {
		r[1]='##';
		
	}
	else { 
		r[1]='';
	}

	var newStr = createVexFlowString(r);
	//alert(r[0]);

	moduleResults[moduleNumber].userAnswers[questionNumber].value = newStr;

	module7RenderResult(questionNumber);
	
}

module7NaturalizeDeg =function(questionNumber) {
	var moduleNumber = 7;

	var curNote = moduleResults[moduleNumber].userAnswers[questionNumber].value;
	//alert(curNote);
	var r = parseVexFlowString(curNote);

	// if already have flat, remove it. if not, add it
	
	r[1]='';
	
	var newStr = createVexFlowString(r);
	//alert(r[0]);

	moduleResults[moduleNumber].userAnswers[questionNumber].value = newStr;

	module7RenderResult(questionNumber);

}

module7RenderResult = function (questionNumber) {
	// uses module4Results as global
	//activeNotes[questionNumber] stores the info for which one to redden
	// only responsible for the rendering stage, NOT the array generation stage
	// scaleData is an array of vexflow formatted notes ,8 textual pitches that will be converted to vextab objects
	var moduleNumber = 7;

	var canvasName = 'module7AnswerCanvas'+questionNumber;
	var newCanvas = document.getElementById(canvasName)

	// clear each time it is redrawn
	var context = newCanvas.getContext('2d');
    context.clearRect(0, 0, newCanvas.width, newCanvas.height);

	var renderer = new Vex.Flow.Renderer(newCanvas,Vex.Flow.Renderer.Backends.CANVAS);
	var ctx = renderer.getContext();
	var stave = new Vex.Flow.Stave(0, 0,100, {space_above_staff_ln: 6, space_below_staff_ln: 6});
	//stave.setBegBarType(Vex.Flow.Barline.type.NONE); // SUCCESS!!!
	//stave.setEndBarType(Vex.Flow.Barline.type.END);
	stave.addClef(moduleResults[moduleNumber].renderInfo[questionNumber][0]).setContext(ctx).draw(); 
	//stave.addClef(module4Clefs[questionNumber]).setContext(ctx).draw();
	

	var notes = []; // workaround for VexFlow API
	var note = moduleResults[moduleNumber].userAnswers[questionNumber].value; // these are in vexflow format so not super useful for manipulation
	var tmpNoteArr =[]; // 3 cell array [root, accidental, octave] used to grab accidental for each note
	//for (j=0; j<scaleData.length; j++) {
	tmpNoteArr = parseVexFlowString(note);
	var tmp = new Vex.Flow.StaveNote({ clef: moduleResults[moduleNumber].renderInfo[questionNumber][0], keys: [note], duration: "w", color: "blue" });		
	if (tmpNoteArr[1]!="") { // there is an accidental 
		tmp.addAccidental(0, new Vex.Flow.Accidental(tmpNoteArr[1]));
	}
	notes.push(tmp); // candidate for DEPRECATION later

	var voice = new Vex.Flow.Voice({
    	num_beats: 4,
    	beat_value: 4,
    	resolution: Vex.Flow.RESOLUTION
  	});
  	// Add notes to voice
  	voice.addTickables(notes);
	// Format and justify the notes to 500 pixels
  	var formatter = new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 100);
  	// Render voice
  	voice.draw(ctx, stave);
}

	
