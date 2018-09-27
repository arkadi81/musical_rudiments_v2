/* interval inversions - textual questions */

module12PopulateSelectors = function() {

	var moduleNumber = 12;

	// prepare interval quality selector
	var qualitySelector='<option value=-1 selected></option>'; // used to be -10
	for (i=0; i<intervalQualities.length; i++) { 
		qualitySelector += '<option value="' + intervalQualities[i].value +'">' + intervalQualities[i].name +'</option>';
	}

	// prepare interval size selector
	var sizeSelector='<option value=-1 selected></option>';
	for (i=0; i<intervalSizes.length-1; i++) {  // 2/4/2016, -1 added - we are going to 12th only
		sizeSelector += '<option  value="' + intervalSizes[i].value +'">' + intervalSizes[i].name +"</option>"; // randomize the keys later
	}
		//sizeSelector = "<select>" + sizeSelector + "</select>"; // randomize the keys later


	for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
		document.getElementById('module'+moduleNumber+'SelectorPanel'+i).setAttribute('class','form-inline'); /*has-success has-feedback*/
		document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += '<div class="form-group"><label>Quality: </label><select class="form-control morphing-selector" id="module' + moduleNumber + 'Selector' + i +'-1">' + qualitySelector + '</select></div>';
		document.getElementById('module' + moduleNumber + 'SelectorPanel' + i).innerHTML += '<div class="form-group"><label>Size: </label><select class="form-control morphing-selector" id="module' + moduleNumber + 'Selector' + i +'-2">' + sizeSelector + '</select></div>';
	}

}

module12Randomize = function(pullFromServer) {

	var moduleNumber = 12;
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

		// code goes here

		var rndArray = getRandomArray(moduleOptions[moduleNumber].totalQuestions(),1,6);

		for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
			
			// find an interval size at random between a 2nd and 7th

			// correction: 2016/01/31 NO DUPLICATES
			

			var tmpNum = rndArray[i];
			var tmpSize = intervalSizes[tmpNum];

			// get an appropriate quality

			switch (tmpSize.value) {
				case 2: case 3: case 6: case 7: {
					var tmpQuality = [ { name: 'Major', value: 'M'},
						{ name: 'Minor', value: 'm'},
						{ name: 'Diminished', value: 'd'},
						{ name: 'Augmented', value: 'A'}].getRandomElement();
					break;
				}
				case 4: case 5: {
					var tmpQuality = [ { name: 'Perfect', value: 'P'},
						{ name: 'Diminished', value: 'd'},
						{ name: 'Augmented', value: 'A'}].getRandomElement();
					break;
				}
			
				
			}
			results.renderInfo.push({quality: tmpQuality, size: tmpSize}); // we are actually just writing those out

			invert_quality = function(quality) { // input is PMmdA
				switch (quality) {
					case 'P': return 'P'; break;
					case 'M': return 'm'; break;
					case 'm': return 'M'; break;
					case 'd': return 'A'; break;
					case 'A': return 'd'; break;
					default: throw ('wrong quality ', quality); return null; break;
				}
			}

			invert_size = function(size) { //input is numerical
				switch (size) {
					case 1: return 1; break;
					case 2: return 7; break;
					case 3: return 6; break;
					case 4: return 5; break;
					case 5: return 4; break;
					case 6: return 3; break;
					case 7: return 2; break;
					case 8: return 8; break;
					default: throw ('wrong size ', size); return null; break;
				}
			}

			results.verbalCorrectAnswers[i] = { quality: invert_quality(tmpQuality.value), size: invert_size(tmpSize.value) };
		}
		return results;
	}

	else {
		//actually pull the information from the server - this might actually be easier if I set up the result array properly
	}

}

module12ShowAnswers = function() {

	var moduleNumber = 12;
	// use global moduleResults[5].verbalCorrectAnswers()
	// getFullIntervalName returns a wordy interval name: P5->Perfect 5th
	
	
}

module12Render = function(renderInfo) {

	var moduleNumber = 12;

	// in this module, renderInfo contains an array of keys (C, D, etc)

	for (i=0; i < moduleOptions[moduleNumber].totalQuestions(); i++) {
		document.getElementById('module'+moduleNumber+'Question'+i+'Prompt').innerHTML += 'When inverted, the interval of a';
		if (renderInfo[i].quality.name == 'Augmented') {
			document.getElementById('module'+moduleNumber+'Question'+i+'Prompt').innerHTML += 'n';
		}
		document.getElementById('module'+moduleNumber+'Question'+i+'Prompt').innerHTML += ' ';
		document.getElementById('module'+moduleNumber+'Question'+i+'Prompt').innerHTML += renderInfo[i].quality.name + ' ' + renderInfo[i].size.name + ' becomes: ';	
   	}
}

module12GetAnswers = function() {
	// pushes values from sleector into the results array
	var moduleNumber =12;
	moduleResults[moduleNumber].userAnswers =[];
	moduleResults[moduleNumber].userAnswers.length =0;
	moduleResults[moduleNumber].scoring.length =0;
	moduleResults[moduleNumber].totalCorrect =0;
	// 20160320 Only 1 point per inversion. Point is awarded only if both size and interval are correct
	moduleResults[moduleNumber].totalPossible = 1* moduleOptions[moduleNumber].totalQuestions();

	moduleResults[moduleNumber].totalQuestions = moduleOptions[moduleNumber].totalQuestions();

	for (i=0; i<moduleOptions[moduleNumber].totalQuestions(); i++) {
		// dumpt majors into "major" and minors into minor
		var _quality = document.getElementById('module' + moduleNumber + 'Selector'+i+'-1').value;
		var _size = document.getElementById('module' + moduleNumber + 'Selector'+i+'-2').value;

		//results.verbalCorrectAnswers[i] = { quality: tmpQuality.value, size: tmpSize.value };
		
		moduleResults[moduleNumber].userAnswers[i] = {quality: { value: _quality, grade: 0 } , size: { value: _size, grade:0 }  };
		
		//NO CANVAS TO RENDER HERE

		//var newCanvas = document.getElementById('module' + moduleNumber +'Canvas' +i);
		
		//moduleResults[moduleNumber].renderDataUrl.push(encodeURIComponent(newCanvas.toDataURL('image/png',1.0))); // quality 0-1

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

		// 20160320 Only 1 point per inversion. Point is awarded only if both size and interval are correct
		if (tmpCorrectQuality == tmpUserQuality && tmpCorrectSize == tmpUserSize)
		{
			moduleResults[moduleNumber].totalCorrect +=1;
		}
	}
	
}
