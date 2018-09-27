var activeNotes = []; // contains the highlighted notes in all questions

var offsets = []; // keeps track of the offsets of each note in each scale (no accidentlas, just how many steps off they are)
//start at 0 for all

var module4Results;

var module4Clefs = []; // this is a terrible solution

function modifierPanel(questionNumber) {
	/* these buttons do not need individual ID's - the information is kept inside a separate variable
	with the pitch values, hopefully in text form */

	var modifierPanel = '<input type="button" class="hidden-print" value="Previous note" onClick="moveLeft(' + questionNumber +')">'; //&#8592
	modifierPanel += '<input type="button" class="hidden-print" value="Next note" onClick="moveRight(' + questionNumber +')">'; //&#8594
	modifierPanel += '<span>   </span>'
	modifierPanel += '<input type="button" class="hidden-print" value="↑" onClick="moveDegUp(' + questionNumber +')">';
	modifierPanel += '<input type="button" class="hidden-print" value="↓" onClick="moveDegDown(' + questionNumber + ')">';
	modifierPanel += '<input type="button" class="hidden-print" value=&#9839 onClick="sharpDeg(' + questionNumber + ')">';
	modifierPanel += '<input type="button" class="hidden-print" value=&#9837 onClick="flatDeg(' + questionNumber + ')">';
	modifierPanel += '<input type="button" class="hidden-print" value="X" onClick="dblSharpDeg(' + questionNumber + ')">';
	modifierPanel += '<input type="button"  class="hidden-print" Value=&#9837&#9837 onClick="dblFlatDeg(' + questionNumber + ')">';
	modifierPanel += '<input type="button"  class="hidden-print" Value=&#9838 onClick="naturalizeDeg(' + questionNumber + ')">';	

	return modifierPanel;
}

module4PopulateSelectors = function() {
	// this one is too specialized to make general, EVERY SELECTOR HAS TO BE INDIVIDUALLY ID'D TO PULL INFO FROM IT!!!
	// has to be run after all DOM stuff is ready

	var moduleNumber = 4;

  	for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
  			//dynamically build up the array of instruction spacers and canvases inside divs
  			document.getElementById('module4SelectorPanel'+i).innerHTML+='<table class="table left"><tr></td>'+modifierPanel(i)+'</td></table>';
	}
}

module4Randomize = function(pullFromServer) {
	/* pullfrom server = boolean
	default is false
	true = session already began, pull saved values (and maybe answers??) from session variables.
	false = no session started, randomize values for realsies. for the time being not dealing with true

	the function returns an array of results to pass to the rendering function to draw canvases,
	and (hopefully) an array of answers in order to populate the answer mesh (if visible) and compare with user answers
	for scoring */

	var moduleNumber = 4;

	var results = {
		'totalQuestions': 0,
		'renderInfo': [],
		'renderDataUrl': [], // possibly helpful for pushing to server later
		'verbalCorrectAnswers': [],
			// { rootName, scaleType, scalePitches}
		'userAnswers': [],
		'scoring': [], // per question 0 for no 1 for yes
		'totalCorrect': 0,
		'totalPossible': 0, //couldbe calculated by summation etc
	}

	// for this module, 'verbalcorrectAnswers = { 'majmin': ?, scaleType: ?, pitches, in readable text format }


	if (pullFromServer == undefined) {pullFromServer = NO_PULL_FROM_SERVER};
		
	if (!pullFromServer) {



		// errything goes here

		results.totalQuestions = moduleOptions[moduleNumber].totalQuestions();

		// randomize between keys and major / minor / harmonic / melodic (taken care of in options. library of keys in theory.js
		//	FROM THEORY JS, the keys are: 
		//  var keySignatures = ["C", "C#", "Db" ,"D", "Eb" ,"E", "F", "F#", "Gb", "G", "Ab", "A", "Bb", "B", "Cb"]; // not in any particular order
		// var minorKeySignatures = ["a","bb","b","c","c#","d","eb","e","f","f#","g","g#"];
		
		//parameters: length, min, max	

		// allow repeats for now
		var randomKeys=[];
		var randomScales = getRandomArray(moduleOptions[moduleNumber].totalQuestions(),0,5)  // changed. 5 is static for now, needs changing depending on the content of theory.js / scaleDegreeRecipes
		var tmpRootName;
		var tmpScalePitches =[];

		var clefs = []; //assign the clefs to each question. first is treble.
		clefs[0] = 'treble';
		//clefs[1] = 'bass';
		//clefs[2] = 'alto';

		module4Clefs.push('treble');
		module4Clefs.push('bass');
		module4Clefs.push('alto');
		
		/* change 3/20/2016. Do not randomize - just use 3 different clefs - treble, bass, alto */
		/*if (moduleOptions[moduleNumber].alto) { clefs.push('alto'); }
		if (moduleOptions[moduleNumber].tenor) { clefs.push('tenor'); }
		if (moduleOptions[moduleNumber].bass) { clefs.push('bass'); }

		// randomize clefs
		module4Clefs.push('treble')
		for (i=1; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
			var rnd = getRandomInt(1,clefs.length-1);
			module4Clefs.push(clefs[rnd]);
		}*/


		if (randomScales[0]>1) { // stuff above 1 are variations of minor keys
				randomKeys[0] = getRandomInt(1,minorKeySignatures.length-1); // dont include c and a minor

		}
		else { // major
			randomKeys[0] = getRandomInt(1,keySignatures.length-1);

		}
		var i = 0;
		while (i<moduleOptions[moduleNumber].totalQuestions()) {
			if (randomScales[i]>1) { // if minor key
				testNumber = getRandomInt(1,minorKeySignatures.length-1); // from 1 so that we have no C, a

			}
			else {
				testNumber = getRandomInt(1,keySignatures.length-1);
			}

			// catch look - weed out issues
			var iffyScale = false;
			if (randomScales[i]>1 && testNumber==2) { iffyScale = true} // a#
			if (randomScales[i]>1 && testNumber==8) { iffyScale = true} // d#

			

			if (randomKeys.indexOf(testNumber)==-1 && !iffyScale) /*filter out d# and a# minors.. super clunky solution*/
			{
				// number is unique and doesnt exist in array yet (this is an overkill, it excludes majors with minors, kinda dumb but will work)
				randomKeys[i]=testNumber;

				if (randomScales[i]>1) { 
					//minor
					tmpRootName = minorKeySignatures[randomKeys[i]];
					tmpScalePitches = getScaleNotes(minorKeySignatures[randomKeys[i]], scaleTypes[randomScales[i]]);
				}
				else {
					// major
					tmpRootName = keySignatures[randomKeys[i]];
					tmpScalePitches =getScaleNotes(keySignatures[randomKeys[i]], scaleTypes[randomScales[i]]);

				}

				var tmpNoteNames = [];
				for (j=0; j<8; j++) {
					tmpNoteNames.push(tmpScalePitches[j].getFullName(false)); // no octave
				}

				

				results.verbalCorrectAnswers[i] = { clef: module4Clefs[i], rootName: tmpRootName, scaleType: scaleTypes[randomScales[i]], scalePitches: tmpNoteNames};

				++i;
			}
						
			//convert random numbers to scale root names and types


			

			//results.verbalcorrectAnswers[i].rootName

			// var x = { a:'hi', b: 'to'}; works

			/*tmpPitchArray = [];

			for (j=0; j<renderInfo[i].length; j++) {
				tmpPitchArray.push(renderInfo[i][j].getFullName().slice(-1)); // kill off the octave
			}*/


			

			
			

			//results.verbalcorrectAnswers[i] = { 
			//	'root: rootnames[i], type:scaleTypes[randomScales[i], pitches:tmpPitchArray };	

			
		}

		for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
			activeNotes[i]=0; 
			results.renderInfo[i] = noteInfoInit(i);
			offsets.push([0,0,0,0,0,0,0,0]);
		};
			
				
		//STILL HAVE TO LOAD RENDER INFO!!
		
		



		module4Results = results;

		return results;
	}

	else {
		//actually pull the information from the server - this might actually be easier if I set up the result array properly
	}

}

module4PopulatePrompts = function(scalePrompts) {
	//accepts an array of length defined in global_options with the correct scales to look for (part of result data)
	// seeds the prompt DOM elements
	var moduleNumber = 4;

	//TODO
	for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {

		document.getElementById('module'+moduleNumber+'Question'+i+'Prompt').innerHTML+= '<b>'+ module4Results.verbalCorrectAnswers[i].rootName.AddAccidentalAscii() + ' ' +module4Results.verbalCorrectAnswers[i].scaleType +'</b>'; 
	}
		
	/*	{}	//minor
			document.getElementById('module'+moduleNumber+'Question'+i+'Prompt').innerHTML+=minorKeySignatures[randomKeys[i]] +" "+ moduleOptions[moduleNumber].scaleOptions[randomScales[i]];
		}
		else {
			// major
			document.getElementById('module'+moduleNumber+'Question'+i+'Prompt').innerHTML+=keySignatures[randomKeys[i]] +" "+ moduleOptions[moduleNumber].scaleOptions[randomScales[i]];

		}
	}*/
}

noteInfoInit = function (questionNumber) {
	// returns an array of vexflow formatted notes for the renderer
	var moduleNumber = 4;
	var res = []
	for (i=0; i<8; i++) {
		res.push(moduleOptions[moduleNumber].starting_notes[module4Clefs[questionNumber]]);
	}
	return res;
	/*switch(module4Clefs[questionNumber]) {
		case 'treble': return ["c/4","c/4","c/4","c/4","c/4","c/4","c/4","c/4"]; break;
		case 'alto': return ["f/3","f/3","f/3","f/3","f/3","f/3","f/3","f/3"]; break;
		case 'tenor': return ["c/3","c/3","c/3","c/3","c/3","c/3","c/3","c/3"]; break;
		case 'bass': return ["e/2", "e/2","e/2","e/2","e/2","e/2","e/2","e/2"]; break;

	}*/
	/*

	for (i=0; i<moduleOptions[4].totalQuestions(); i++) {
			res.push(["c/4","c/4","c/4","c/4","c/4","c/4","c/4","c/4"]);
	}
	return res;*/
}


module4Render = function(renderInfo) {

	// in this module, renderInfo contains an array of Note objects

	var moduleNumber = 4; //this is DEPRECATED, but is local to the function so might come in handy, and doesn't interfere with anything

	//var clefs = moduleOptions[moduleNumber].clefArray();

	

	// set variables for active notes in each canvas
	

	/* these are the notes currently being displayed. they are used for answer checking and in order to 
	re-render the scale each time a button is pressed  - NEw: Not needed just yet. the notes variable has all the 
	necessary pitch information */

	// var noteInfo = []; // necessary to store all the 3 scales


  	for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
  			renderSingleScale(i,renderInfo[i]);
  	}

}


	// var boundingBoxArray = []; // will hold all bounding boxes of all 3 scales, necessary to separate due to accidentals

renderSingleScale = function (questionNumber,scaleData) {
	// uses module4Results as global
	//activeNotes[questionNumber] stores the info for which one to redden
	// only responsible for the rendering stage, NOT the array generation stage
	// scaleData is an array of vexflow formatted notes ,8 textual pitches that will be converted to vextab objects
	

	var canvasName = 'module4Canvas'+questionNumber;
	var newCanvas = document.getElementById(canvasName)

	// clear each time it is redrawn
	var context = newCanvas.getContext('2d');
    context.clearRect(0, 0, newCanvas.width, newCanvas.height);

	var renderer = new Vex.Flow.Renderer(newCanvas,Vex.Flow.Renderer.Backends.CANVAS);
	var ctx = renderer.getContext();
	var stave = new Vex.Flow.Stave(0, 0,600);
	stave.setBegBarType(Vex.Flow.Barline.type.NONE); // SUCCESS!!!
	stave.setEndBarType(Vex.Flow.Barline.type.END);
	stave.addClef(module4Clefs[questionNumber]).setContext(ctx).draw();
	

	var notes = []; // these are in vexflow format so not super useful for manipulation
	var tmpNoteArr =[]; // 3 cell array [root, accidental, octave] used to grab accidental for each note
	for (j=0; j<scaleData.length; j++) {
		tmpNoteArr = parseVexFlowString(scaleData[j]);
	    if (j == activeNotes[questionNumber]) {
	    	var tmp = new Vex.Flow.StaveNote({ clef: module4Clefs[questionNumber], keys: [scaleData[j]], duration: "w", color: "blue" });	
	    	}
	    	else {
	    		var tmp = new Vex.Flow.StaveNote({ clef: module4Clefs[questionNumber], keys: [scaleData[j]], duration: "w", color: "black" });		
	    	};
	    if (tmpNoteArr[1]!="") { // there is an accidental 
			tmp.addAccidental(0, new Vex.Flow.Accidental(tmpNoteArr[1]));
		}
	    notes.push(tmp); // candidate for DEPRECATION later

	}

	var voice = new Vex.Flow.Voice({
    	num_beats: scaleData.length,
    	beat_value: 1,
    	resolution: Vex.Flow.RESOLUTION
  		});
  		// Add notes to voice
  		voice.addTickables(notes);
		// Format and justify the notes to 500 pixels
  		var formatter = new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 600);
  		// Render voice
  		voice.draw(ctx, stave);



  	// 20160907 ALSO RENDER THE HIDDEN PRINT SCALE

  	var canvasName = 'module4Canvas'+questionNumber+'printable';
	var newCanvas = document.getElementById(canvasName)

	// clear each time it is redrawn
	var context = newCanvas.getContext('2d');
    context.clearRect(0, 0, newCanvas.width, newCanvas.height);

	var renderer = new Vex.Flow.Renderer(newCanvas,Vex.Flow.Renderer.Backends.CANVAS);
	var ctx = renderer.getContext();
	var stave = new Vex.Flow.Stave(0, 0,600);
	stave.setBegBarType(Vex.Flow.Barline.type.NONE); // SUCCESS!!!
	stave.setEndBarType(Vex.Flow.Barline.type.END);
	stave.addClef(module4Clefs[questionNumber]).setContext(ctx).draw();

}

changeActivePitch = function (questionNumber) {
	// changes the array of active notes for specific question
		
	//TODO	
}

// ---------------------------------- selector functionality ------------------------------

/* now in theory.js
parseVexFlowString = function(str) {
	//
	//slice usage: slice() extracts up to but not including endSlice. str.
	//slice(1, 4) extracts the second character through the fourth character (characters indexed 1, 2, and 3).

	// breaks down the vexflow string from the noteInfo array into root, accidental and octave
	// eg c@@/4 = root c, accidental dbl flat, octave 4
	var root = str.slice(0,1).toString(); // root is always first
	var accidental = '';
	var octave = str.slice(-1).toString(); // octave is always last character

	switch (str.length) {
		case 3: {  // no accidentals, only root and octave
			accidental = "";
			break;
		}
		case 4: { // one character accidental, one sharp or one flat
			accidental = str.slice(1,2).toString();
			break;
		}
		case 5: { // two character accidental, dbl sharp or dbl flat
			accidental = str.slice(1,3).toString();
			break;
		}
	}
	return ([root,accidental,octave]);
}

createVexFlowString = function(arr) {
	// uses the array from parseVexflowString [root,acccidental,octave] and stitches it back to vexflow format
	// reminder. #, ##, @, @@
	return (arr[0] + arr[1] + "/" + arr[2]);
}*/

getScaleNumber = function(str) {
	// input is 3 element array!
	// converts the vexflow text to a 'scale number' where c4 is 0, b5 = 12
	var res = parseVexFlowString(str);
	var scaleNumber = 0;

	if (Number(res[2])==5) { scaleNumber+=7};

	switch (res[0]) {
		case 'c': scaleNumber += 0; break;
		case 'd': scaleNumber += 1; break;
		case 'e': scaleNumber += 2; break;
		case 'f': scaleNumber += 3; break;
		case 'g': scaleNumber += 4; break;
		case 'a': scaleNumber += 5; break;
		case 'b': scaleNumber += 6; break;
	}	

	return scaleNumber;
}

parseScaleNumber = function (scaleNumber) {
	//converts scale number to pitch
	// returns a 3 sell array [root, '', octave] middle is kept blank to allow for accidentals
	var octave = 4;
	var root;

	if (scaleNumber>=7) { octave=5; scaleNumber-=7;}

	switch (scaleNumber) {
		case 0: root = 'c'; break;
		case 1: root = 'd'; break;
		case 2: root = 'e'; break;
		case 3: root = 'f'; break;
		case 4: root = 'g'; break;
		case 5: root = 'a'; break;
		case 6: root = 'b'; break;
	}
	return ([root,"",octave]);
}

/*function convert_scalenotes_array_to_vextab_string(scaleNotes) {
	// NOW ABSOLETE!
	var str="";
	for (i=0; i<scaleNotes.length; i++)
	{
		str += noteRootNames[scaleNotes[i][0]%7]; //now actually cycles through the G->A issue
		// fix the octave problem, add "/5 if needed"
		console.log(scaleNotes[i][0]/7);
		switch (scaleNotes[i][1]){
			case 0: break;
			case 1: str +="#"; break;
			case 2: str +="##"; break;
			case -1: str +="@"; break;
			case -2: str +="@@"; break;
		}
		switch (Math.floor(scaleNotes[i][0] / 7)) {
			case 0: str +="/4";; break;
			case 1: str += "/5"; break;
			case 2: str += "/6"; break;
		}
		str +="-";
	}
	var res = str.slice(0,-1);
	return res;
}*/

moveLeft = function(questionNumber) {
	//activeNotes contains the highlighted (1) note of every question in module 4
	if (activeNotes[questionNumber]>0) {
		activeNotes[questionNumber]--;
		renderSingleScale(questionNumber,module4Results.renderInfo[questionNumber]);
	}
}

moveRight = function(questionNumber) {
	if (activeNotes[questionNumber]<7) {
		activeNotes[questionNumber]++;
		renderSingleScale(questionNumber,module4Results.renderInfo[questionNumber]);

	}
}

moveDegUp = function(questionNumber) {
	var curNote = module4Results.renderInfo[questionNumber][activeNotes[questionNumber]];
	//alert(curNote);
	var r = parseVexFlowString(curNote);
	//alert(r[0]);
	// r[0] = root, r[1] = accidental, r[2] = octave

	//var n = getScaleNumber(r);
	//var n = offstes[questioNumber][activeNotes[questionNumber]];

	if (offsets[questionNumber][activeNotes[questionNumber]]<=12) {
		//alert(n);
		// construct new note
		var newRoot = getNextNaturalNote(r[0]);
		var newAccidental = "";
		var newOctave = r[2];
		if (r[0]=='b' || r[0]=='B') { newOctave++; }


		var newNote = [newRoot, newAccidental,newOctave]
		//alert(newNote[0]);

		var newStr = createVexFlowString(newNote);


		module4Results.renderInfo[questionNumber][activeNotes[questionNumber]] = newStr;

		renderSingleScale(questionNumber, module4Results.renderInfo[questionNumber]);

		offsets[questionNumber][activeNotes[questionNumber]]++;
	}
	
}

moveDegDown =function(questionNumber) {
	var curNote = module4Results.renderInfo[questionNumber][activeNotes[questionNumber]];
	//alert(curNote);
	var r = parseVexFlowString(curNote);
	//alert(r[0]);

	//var n = getScaleNumber(r);

	if (offsets[questionNumber][activeNotes[questionNumber]]>0) {
		//alert(n);
		
		//alert(newNote[0]);

		var newRoot = getPrevNaturalNote(r[0]);
		var newAccidental = "";
		var newOctave = r[2];
		if (r[0]=='c' || r[0]=='C') { newOctave--; }

		var newNote = [newRoot, newAccidental,newOctave];

		var newStr = createVexFlowString(newNote);


		module4Results.renderInfo[questionNumber][activeNotes[questionNumber]] = newStr;

		renderSingleScale(questionNumber,module4Results.renderInfo[questionNumber]);

		offsets[questionNumber][activeNotes[questionNumber]]--;
	}
}	

flatDeg =function(questionNumber) {
	var curNote = module4Results.renderInfo[questionNumber][activeNotes[questionNumber]];
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

	module4Results.renderInfo[questionNumber][activeNotes[questionNumber]] = newStr;

	renderSingleScale(questionNumber, module4Results.renderInfo[questionNumber]);
	
}

sharpDeg =function(questionNumber) {
	var curNote = module4Results.renderInfo[questionNumber][activeNotes[questionNumber]];
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

	module4Results.renderInfo[questionNumber][activeNotes[questionNumber]] = newStr;

	renderSingleScale(questionNumber, module4Results.renderInfo[questionNumber]);
	
}				

dblFlatDeg =function(questionNumber) {
	var curNote = module4Results.renderInfo[questionNumber][activeNotes[questionNumber]];
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

	module4Results.renderInfo[questionNumber][activeNotes[questionNumber]] = newStr;

	renderSingleScale(questionNumber, module4Results.renderInfo[questionNumber]);
	
}

dblSharpDeg =function(questionNumber) {
	var curNote = module4Results.renderInfo[questionNumber][activeNotes[questionNumber]];
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

	module4Results.renderInfo[questionNumber][activeNotes[questionNumber]] = newStr;

	renderSingleScale(questionNumber, module4Results.renderInfo[questionNumber]);
	
}

naturalizeDeg =function(questionNumber) {
	var curNote = module4Results.renderInfo[questionNumber][activeNotes[questionNumber]];
	//alert(curNote);
	var r = parseVexFlowString(curNote);

	// if already have flat, remove it. if not, add it
	
	r[1]="";

	var newStr = createVexFlowString(r);
	//alert(r[0]);

	module4Results.renderInfo[questionNumber][activeNotes[questionNumber]] = newStr;

	renderSingleScale(questionNumber, module4Results.renderInfo[questionNumber]);
	
}								

  		
activeBoundingBox =function(x,y,boundingBoxArray,sensitivity) { // not currently in use
	// experimental!
	// 20160101 WORKS!!!!
	// not currently in use since I am not using mouse pointer to select notes
	/* the following function determines whether a set of x,y coordinates is in any of the array bounding boxes
	returns 0-7 for a positive result indicating active box, or -1 if no active box found
	sensitivity is option and is set to size of bounding box (denote 0). each increment of 1 sensitivity point
	corresponds to +10% to bounding box */
	if (sensitivity == undefined) { sensitivity = 0};
	var res = -1;
	var s = 0;
	
	while (res==-1 && s<8) {
		var distance = Math.sqrt(Math.pow(boundingBoxArray[s].getX()+boundingBoxArray[s].getW()/2- x,2) + Math.pow(boundingBoxArray[s].getY()+boundingBoxArray[s].getH()/2 - y,2));

		var boxDiagonal = (1+0.1 * sensitivity) * Math.sqrt(Math.pow(boundingBoxArray[s].getW(),2) + Math.pow(boundingBoxArray[s].getH(),2));

		if (distance < boxDiagonal) { res = s};

		s++;

	};
	return res;
		
}

module4GetAnswers = function() {
	// pushes values from sleector into the results array
	var moduleNumber = 4;
	
	//module4Results.renderInfo[questionNumber] currently holds vexflow strings for user selected notes (8 of them)
	//in the format C#/5. we just don't need the octave

	//results.verbalCorrectAnswers[i] = { clef: module4Clefs[i], rootName: tmpRootName, scaleType: scaleTypes[randomScales[i]], scalePitches: tmpScalePitches};

	moduleResults[moduleNumber].totalQuestions = moduleOptions[moduleNumber].totalQuestions();
	
	moduleResults[moduleNumber].renderDataUrl.length = 0;
	moduleResults[moduleNumber].userAnswers = [];
	moduleResults[moduleNumber].scoring.length =0;
	moduleResults[moduleNumber].totalCorrect =0;
	// 20160320 Each scale is worth at most 3 points. Each mistake docks a point. If 3 mistakes or more, then 0 points are awarded.
	moduleResults[moduleNumber].totalPossible = 3 * moduleOptions[moduleNumber].totalQuestions();

	for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {

		var newCanvas = document.getElementById('module' + moduleNumber +'Canvas' +i);
		//var ctx = newCanvas.getContext('2d');
		moduleResults[4].renderDataUrl.push(encodeURIComponent(newCanvas.toDataURL('image/png',1.0)));

		moduleResults[moduleNumber].userAnswers[i] = [];
		moduleResults[moduleNumber].userAnswers[i].length = 0;

		/* --------------------------- this is the alternative for VexTab svg image passing to backend --------		
			var newCanvas = $(".vex-canvas")[i];
			var s=newCanvas.innerHTML;
			var encodedData = window.btoa(s); // will need to be decoded on the php end. afterwards can be included just
			//as is and will generate image in html
			
			moduleResults[moduleNumber].renderDataUrl[i] = encodeURIComponent(encodedData); // quality 0-1
			
			-----------------------------------------------------------------------------------------*/

		//results.verbalCorrectAnswers[i].pitchCollection.length =0;
		
		//score correct notes

		var scaleScore = 3;
		
		for (j = 0; j< 8; j++ ) {

			

			
			var tmp = parseVexFlowString(module4Results.renderInfo[i][j]);

			var tmpUserNote = (tmp[0]+tmp[1]);
			//alert(tmpUserNote);

			//tmp = parseVexFlowString(module4Results.verbalCorrectAnswers[i].scalePitches[j]);
			// scalePitches contains proper pitches
			var _tmp = module4Results.verbalCorrectAnswers[i].scalePitches[j];


			//var tmpCorrectNote= (_tmp[0]+_tmp[1]).toUpperCase();
			//alert(tmpCorrectNote);

			//results.verbalCorrectAnswers[i].pitchCollection.push(tmpCorrectNote);


			if (_tmp.toUpperCase() == tmpUserNote.toUpperCase() ) {
				moduleResults[moduleNumber].userAnswers[i].push([tmpUserNote,1]); // grade is 1
				// moduleResults[moduleNumber].totalCorrect++;
			}
			else
			{
				// wrong note. dock score unless already at 0
				moduleResults[moduleNumber].userAnswers[i].push([tmpUserNote,0]);
				if (scaleScore > 0) {scaleScore--;}
			}

			

		}
		moduleResults[moduleNumber].totalCorrect += scaleScore;
		
	}
}

