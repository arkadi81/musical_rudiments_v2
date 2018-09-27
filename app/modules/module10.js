
module10PopulateSelectors = function() {
	
	var moduleNumber =10;

	//major key
	
	var noteSelector='<option value=-1></option>';
  	for (i=0; i<uCaseNoteNames.length; i++) {
		noteSelector += "<option>" + uCaseNoteNames[i] +"</option>";
	}

	// minor key

	var minorKeySelector='<option value=-1></option>';
  	for (i=0; i<uCaseNoteNames.length; i++) {
		minorKeySelector += "<option>" + lCaseNoteNames[i] +"</option>";
	}

	// prepare quality selector
	var qualitySelector='<option value=-1 selected></option>';
	for (i=0; i<triadTypes.length; i++) 	{
		qualitySelector += '<option>' + triadTypes[i][0] +'</option>';
	}


	// prepare inversion selector
	var inversionSelector='<option value=-1 selected></option>';
		for (i=0; i<inversionTypes.length; i++) {
		inversionSelector += '<option value=' + i +'>' + inversionTypes[i] +'</option>';
	}
	
	inversionSelector += "<option value=3>3rd inversion</option>";

	for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).setAttribute('class','form-inline');
		document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += '<div class="form-group"><label>Root of the 7th Chord: </label><select class="form-control morphing-selector" id="module' + moduleNumber +'Selector' + i +'-1">' + noteSelector + '</select></div>';
		//document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += '<select class="form-control" id="module' + moduleNumber +'Selector' + i +'">' + qualitySelector + '-2</select>';
		
		//document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += '<div class="col-sm-6"><select class="form-control" id="module' + moduleNumber +'Selector' + i +'-2">' + accidentalSelector + '</select></div>';
		
		document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += '<div class="form-group"><label>Inversion: </label><select class="form-control morphing-selector" id="module' + moduleNumber +'Selector' + i +'-2">' + inversionSelector + '</select></div>';
		//document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += '<br><br>Tonic: '; // changed from Major Key 2/4/2016
		document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += '<div class="form-group"><label>Tonic: </label><div class="form-group"><select class="form-control morphing-selector" id="module' + moduleNumber +'Selector' + i +'-3">' + noteSelector + '</select></div>';
		
		/* DEPRECATED 2/4/2016
		unsplit major / minor, just call it home. I'm just keeping the major and renaming it. minor is hidden'
		document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += ' Minor key: ';
		document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += '<div class="form-group"><select class="form-control" id="module' + moduleNumber +'Selector' + i +'-4">' + minorKeySelector + '</select></div>'; 
		*/
		// correction: separate selectors for major and minor home key 01/31/2016
	}	
				
}

module10Randomize = function(pullFromServer) {

	var moduleNumber = 10;
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
		'total': 0, //couldbe calculated by summation etc
		'inversions': [],
		'randomScaleArray': [],
		'totalCorrect': 0,
		'totalPossible':0,
	}

	if (pullFromServer == undefined) {pullFromServer = NO_PULL_FROM_SERVER};
		
	if (!pullFromServer) {

		var i=0;

		var clefs = moduleOptions[moduleNumber].clefArray();
		var rightOctave;

		while (i<moduleOptions[moduleNumber].totalQuestions()) {
			//var tmpRoot = getRandomInt(0,6);
			//var tmpAccidental = getRandomInt(-1,1); // these are open to all possibilities
			//amendment. only include base keys in the circle of 5ths.
			// this is also my "home" key and if i drop case its the minor as well
			var circleOfFifthKey = ['C','F','Bb','Eb','Ab','Db','Gb','F#','B','E','A','D','G'].getRandomElement();
			var tmpRoot = rootNames.indexOf(circleOfFifthKey[0]);
			var tmpAccidental = 0;
			if (circleOfFifthKey.length == 2) {
				switch (circleOfFifthKey[1]) {
					case 'b': tmpAccidental = -1; break;
					case '#': tmpAccidental = 1; break;
				}
			}
			// create the note that will be my root! (ill need this for reporting anyways)

			switch (clefs[i]) {
				case 'treble': rightOctave = 4; break;
				case 'bass': rightOctave = 1; break;
				case 'alto': rightOctave = 2; break;
			}

			var tmpNote = new Note(tmpRoot, tmpAccidental,rightOctave);	
		
			// create the dominant 7th chord

			var tmpDomRoot = tmpNote.getInterval('P',5,'above'); // the below part still needs some work!

			var tmpRoot = tmpDomRoot.getRoot();
			var tmpAccidental = tmpDomRoot.getAccidental();

			var tmpInversion = getRandomInt(0,3);
			//tmpNote = new Note(tmpRoot, tmpAccidental,rightOctave);
			var tmpDomChord = tmpDomRoot.getDomSeventh(tmpInversion);

			if (tmpDomChord != null) {
				// found a decent chord, add it
				results.renderInfo.push( { chord: tmpDomChord, inversion: tmpInversion, root: tmpNote.getRoot() + accidentalNames[tmpAccidental]});
				i++;
			}
			results.verbalCorrectAnswers.push({ root: tmpDomRoot.getRootName() + accidentalNames[tmpDomRoot.getAccidental()], inversion: tmpInversion, majHomeKey: circleOfFifthKey, minHomeKey: circleOfFifthKey.toLowerCase() });

		}
		return results;
	}

	else {
		//actually pull the information from the server - this might actually be easier if I set up the result array properly
	}

}

module10ShowAnswers = function() {

	var moduleNumber = 10;

	/*for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) { 

		
		var noteRoot = infoArray[i][0].getRootName() + accidentalNames[infoArray[i][0].getAccidental()]+"/"+infoArray[i][0].getOctave();
		var note3rd = infoArray[i][1].getRootName() + accidentalNames[infoArray[i][1].getAccidental()]+"/"+infoArray[i][1].getOctave();
		var note5th = infoArray[i][2].getRootName() + accidentalNames[infoArray[i][2].getAccidental()]+"/"+infoArray[i][2].getOctave();

			

		// var testText = 'Answer: ' + topNote + ' is ' + infoArray[i][2] + ' above ' + bottomNote;
		document.getElementById('module' + moduleNumber +'Answer'+i).innerHTML+= 'Scale Degree: ' + randomDegreeArray[i] + ' Root: ' + randomchordRootsArray[i].getFullName() + '<br> Inversion: ' + inversionTypes[randomInversionsArray[i]]
		+ ' chord type: ' + randomchordTypes[i] + ' chord members: ' + infoArray[i][0].getFullName() +' '+ infoArray[i][1].getFullName() + ' '+ infoArray[i][2].getFullName() ;
		// should modify the random chord thing to spit out also the quality
		document.getElementById('module' + moduleNumber +'Check'+i).innerHTML+='<span class="glyphicon glyphicon-ok"></span>'; // ' remove for X'


	}*/
}
  
module10Render = function(renderInfo) {

	var moduleNumber = 10;

	var clefs = moduleOptions[moduleNumber].clefArray();

	for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {

		var keyText = 'Key: ' + renderInfo[i].root;
		//document.getElementById('module' + moduleNumber + 'Question' + i + 'LowerPrompt').innerHTML+= '<div class="col-sm-12 text-left">' + keyText + '</div>';

		canvasName = 'module' + moduleNumber + 'Canvas'+i;
		var newCanvas = document.getElementById(canvasName)
		//var canvas = $("div.one div.a canvas")[0];
		var renderer = new Vex.Flow.Renderer(newCanvas,Vex.Flow.Renderer.Backends.CANVAS);
		var ctx = renderer.getContext();
		var stave = new Vex.Flow.Stave(0, 0,120);
		
		
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
		var octaveMarkers =[renderInfo[i].chord[0].getOctave(),renderInfo[i].chord[1].getOctave(),renderInfo[i].chord[2].getOctave(),renderInfo[i].chord[3].getOctave()];
		if (octaveMarkers[0]>=6 || octaveMarkers[1]>=6 || octaveMarkers[2]>=6 || octaveMarkers[3]>=6 ) {
			octaveMarkers[0]--;
			octaveMarkers[1]--;
			octaveMarkers[2]--;
			octaveMarkers[3]--;
		}


		var noteRoot = renderInfo[i].chord[0].getRootName() + accidentalNames[renderInfo[i].chord[0].getAccidental()]+"/"+ octaveMarkers[0];
		var note3rd = renderInfo[i].chord[1].getRootName() + accidentalNames[renderInfo[i].chord[1].getAccidental()]+"/"+ octaveMarkers[1];
		var note5th = renderInfo[i].chord[2].getRootName() + accidentalNames[renderInfo[i].chord[2].getAccidental()]+"/"+ octaveMarkers[2];
		var note7th = renderInfo[i].chord[3].getRootName() + accidentalNames[renderInfo[i].chord[3].getAccidental()]+"/"+ octaveMarkers[3];
		
		// slight fixup. the renderer thinks 0 is always bottom note in chord, we need to rearrange
		var orderArray = [];
		switch (renderInfo[i].inversion) {
			case 0: orderArray = [0,1,2,3]; break;
			case 1: orderArray = [3,0,1,2]; break;
			case 2: orderArray = [2,3,0,1]; break;
			case 3: orderArray = [1,2,3,0]; break;
		}

		var tmp = new Vex.Flow.StaveNote({ clef:clefs[i], keys: [noteRoot,note3rd,note5th, note7th], duration: "w" });
		if (renderInfo[i].chord[0].getAccidental()!=0) { 
			tmp.addAccidental(orderArray[0], new Vex.Flow.Accidental(accidentalNames[renderInfo[i].chord[0].getAccidental()]));
		}
		if (renderInfo[i].chord[1].getAccidental()!=0) { 
			tmp.addAccidental(orderArray[1], new Vex.Flow.Accidental(accidentalNames[renderInfo[i].chord[1].getAccidental()]));
		}
		if (renderInfo[i].chord[2].getAccidental()!=0) { 
			tmp.addAccidental(orderArray[2], new Vex.Flow.Accidental(accidentalNames[renderInfo[i].chord[2].getAccidental()]));
		}
		if (renderInfo[i].chord[3].getAccidental()!=0) { 
			tmp.addAccidental(orderArray[3], new Vex.Flow.Accidental(accidentalNames[renderInfo[i].chord[3].getAccidental()]));
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

module10GetAnswers = function() {
	// pushes values from sleector into the results array
	var moduleNumber =10;
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
		var _inversion = document.getElementById('module' + moduleNumber + 'Selector'+i+'-2').value;
		var _majHomeKey = document.getElementById('module' + moduleNumber + 'Selector'+i+'-3').value;
		// DEPRECATED: maj and min merged
		//var _minHomeKey = document.getElementById('module' + moduleNumber + 'Selector'+i+'-4').value; 
		_root = _root.stripAccidentalAscii(); //alert(maj);
		_majHomeKey = _majHomeKey.stripAccidentalAscii();
		//_minHomeKey = _minHomeKey.stripAccidentalAscii(); // DEPRECATED 2/4/2016 min and maj merged
		// the rest of the 2 are ok

		moduleResults[moduleNumber].userAnswers.push( {root: { value: _root, grade: 0 } , inversion: { value: _inversion, grade:0 }, majHomeKey: { value: _majHomeKey, grade:0 }, /*minHomeKey: { value: _minHomeKey, grade:0 }*/ });
		
		var newCanvas = document.getElementById('module' + moduleNumber +'Canvas' +i);
		
		moduleResults[moduleNumber].renderDataUrl.push(encodeURIComponent(newCanvas.toDataURL('image/png',1.0))); // quality 0-1

		// compare answers and calculate score

		//results.verbalCorrectAnswers[i] = { bottomNote: tmpBottomNote , topNote: tmpTopNote, quality: infoArray[i][3], size: infoArray[i][4], direction:'above' };
		var tmpCorrectRoot = moduleResults[moduleNumber].verbalCorrectAnswers[i].root;
		var tmpCorrectInversion = moduleResults[moduleNumber].verbalCorrectAnswers[i].inversion;
		var tmpCorrectMajHomeKey = moduleResults[moduleNumber].verbalCorrectAnswers[i].majHomeKey;
		//var tmpCorrectMinHomeKey = moduleResults[moduleNumber].verbalCorrectAnswers[i].minHomeKey; DEPRECATED 2/4/2016, maj and min merged

		var tmpUserRoot = moduleResults[moduleNumber].userAnswers[i].root.value;
		var tmpUserInversion = moduleResults[moduleNumber].userAnswers[i].inversion.value; 
		var tmpUserMajHomeKey = moduleResults[moduleNumber].userAnswers[i].majHomeKey.value; 
		//var tmpUserMinHomeKey = moduleResults[moduleNumber].userAnswers[i].minHomeKey.value; DEPRECATED 2/4/2016, maj and min merged
		

		if (tmpCorrectRoot == tmpUserRoot) {
			moduleResults[moduleNumber].userAnswers[i].root.grade=1;
			moduleResults[moduleNumber].totalCorrect +=1;
			//alert('correct: ' + tmpCorrectRoot + ' user ' + tmpUserRoot);
		}
	

		if (tmpCorrectInversion == tmpUserInversion) {
			moduleResults[moduleNumber].userAnswers[i].inversion.grade=1;
			moduleResults[moduleNumber].totalCorrect +=1;
			//alert('correct: ' + tmpCorrectInversion + ' user ' + tmpUserInversion);
		}

		if (tmpCorrectMajHomeKey == tmpUserMajHomeKey) {
			moduleResults[moduleNumber].userAnswers[i].majHomeKey.grade=1;
			moduleResults[moduleNumber].totalCorrect +=1;
			//alert('correct: ' + tmpCorrectMajHomeKey + ' user ' + tmpUserMajHomeKey);
		}

		// DEPRECATED 2/4/2016, maj and min merged
		/*
		if (tmpCorrectMinHomeKey == tmpUserMinHomeKey) {
			moduleResults[moduleNumber].userAnswers[i].minHomeKey.grade=1;
			moduleResults[moduleNumber].totalCorrect +=1;
			//alert('correct: ' + tmpCorrectMajHomeKey + ' user ' + tmpUserMajHomeKey);
		}*/

	}
	
}
module10PopulateExample = function() {

	document.getElementById('module10Example').innerHTML = [
		'<div class="row vcenter row-bottom-border">',
			'<div class="col-xs-2 vcenter pull-left"><label>Example: </label></div>',
			'<div class="col-xs-2 text-left  vcenter"><canvas id="module10ExampleCanvas" height = 100></canvas></div>',
			'<div class="col-xs-8 vcenter">',
				'<div class="form-inline vcenter">',
					'<select class="form-control morphing-selector " disabled><option>G</option></select>',
					'<select class="form-control morphing-selector " disabled><option>Root position</option></select>',
					'<label for="example-tonic-selector">Tonic: </label><select id="example-tonic-selector" class="form-control morphing-selector" disabled><option>C</option></select>',
				'</div>',
			'</div>',
		
		'</div>',	
		/*
		'<table class="table">',
		'<td class="col-md-1"><h4>Example:</h4></td>',
		'<td class="col-md-2"><canvas id="module10ExampleCanvas" height = 100></canvas></td>',
		'<td class="col-xs-9 text-left"><div class="form-inline">',
		'<br><select class="form-control" disabled><option>G</option></select>',
		'<select class="form-control" disabled><option>Root position</option></select>',
		'<br><br>Tonic: ',
		'<select class="form-control" disabled><option>C</option></select>',
		'</div></td>',
		'</table>',*/
		].join('');



	canvasName = 'module10ExampleCanvas';
	var newCanvas = document.getElementById(canvasName)
	//var canvas = $("div.one div.a canvas")[0];
	var renderer = new Vex.Flow.Renderer(newCanvas,Vex.Flow.Renderer.Backends.CANVAS);
	var ctx = renderer.getContext();
	var stave = new Vex.Flow.Stave(0, 0,120);

	var tmp = new Vex.Flow.StaveNote({ clef:'treble', keys: ['G/4','B/4','d/5','f/5'], duration: "w" });

	/*if (renderInfo[i].chord[0].getAccidental()!=0) { 
		tmp.addAccidental(orderArray[0], new Vex.Flow.Accidental(accidentalNames[renderInfo[i].chord[0].getAccidental()]));
	}
	if (renderInfo[i].chord[1].getAccidental()!=0) { 
		tmp.addAccidental(orderArray[1], new Vex.Flow.Accidental(accidentalNames[renderInfo[i].chord[1].getAccidental()]));
	}
	if (renderInfo[i].chord[2].getAccidental()!=0) { 
		tmp.addAccidental(orderArray[2], new Vex.Flow.Accidental(accidentalNames[renderInfo[i].chord[2].getAccidental()]));
	}
	if (renderInfo[i].chord[3].getAccidental()!=0) { 
		tmp.addAccidental(orderArray[3], new Vex.Flow.Accidental(accidentalNames[renderInfo[i].chord[3].getAccidental()]));
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
	   
	stave.addClef('treble').setContext(ctx).draw(); 
	// Render voice
		 
	voice.draw(ctx, stave);
	// voice2.draw(ctx, stave);

	

}