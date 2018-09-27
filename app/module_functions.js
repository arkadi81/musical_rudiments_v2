moduleDOMConstructor = function(moduleNumber) {
	

	// ID'd heading with name of module moduleXHeading 
	document.getElementById('module'+ moduleNumber).innerHTML += '<div class="panel-heading" id="module' + moduleNumber + 'Heading"></div>';

	// 20160906 remodel panel - 1 body panel includes everything
	document.getElementById('module'+ moduleNumber).innerHTML += '<div class="panel-body text-center" id="module' + moduleNumber + 'body"></div>';
	//ID'd body panel with instructions moduleXInstructions
	document.getElementById('module'+ moduleNumber+'body').innerHTML += '<div class="row-bottom-border text-center" id="module' + moduleNumber + 'Instructions"></div>';

	// 4/2/2016 new cell div for an example with an internal canvas
	document.getElementById('module'+ moduleNumber+'body').innerHTML += '<div class="text-center" id="module' + moduleNumber + 'Example"></div>';

	//document.getElementById('module'+ moduleNumber + 'Example').innerHTML += '<canvas id="module' + moduleNumber + 'ExampleCanvas"></canvas>';
	//Content Body panel moduleXContainer
	document.getElementById('module'+ moduleNumber+'body').innerHTML += '<div class="text-center" id="module' + moduleNumber + 'Container" ></div>';
		//each question gets the id moduleXQuestionY
		for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
  			document.getElementById('module'+moduleNumber+'Container').innerHTML+='<div class="' + moduleOptions[moduleNumber].containerClass + '"  id="module'+ moduleNumber + 'Question'+i+'"></div>';
  			// add an extra space dumbass
  			//document.getElementById('module'+moduleNumber+'Container').innerHTML+='<tr>';
  		}
		/* inside each question, build up a top prompt (PromptY), a canvas (CanvasY), 
		additioanal question text (QuestionTextY)
		selectors (SelectorPanelY) - individual selector lineups will be part of the population procedure and different for each module
		correct answers (with defined initial visibility in global_options.js) (AnswerY)
		checkmark (initial visibility in global_options.js) (CheckY) 

		*/
		for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
			
			// header instructions (good for question which require a prompt BEFORE the music notation)
			//document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+='<table class="table"><tr><td><div id="module'+moduleNumber+'Question' + i + 'Prompt"></div></td>';

				//dynamically build up the array of canvases
			var h = moduleOptions[moduleNumber].canvasHeight;
			var w = moduleOptions[moduleNumber].canvasWidth;

			// wierd exception for module 2 which doesnt use canvases!
			switch (moduleNumber) {
				case 2: {
					/*document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+='<table class="table"><tr><td><div id="module'+moduleNumber+'Question' + i + 'Prompt"></div></td>';
					//just a div for module 2
					document.getElementById('module'+moduleNumber+'Question'+i).innerHTML += '<tr><td>';
					document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+='<div class ="vex-tabdiv" width=600 height=300 editor="false" id="module' + moduleNumber + 'Canvas'+i+'"></div></td>';
					
					document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+='<tr><td><div class="" id="module'+moduleNumber+'Question' + i + 'LowerPrompt"></div></td>';
					// selector panel, with form wrapper
					//document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+= '<form class="form-inline"><div class="form-group">';
					document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+='<tr><td><div class = "form-group" id="module'+moduleNumber+'SelectorPanel' + i + '"></div></td>';
					
					document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+='<tr><td><div class="answer_check" id="module'+moduleNumber+'Answer'+ i +'"></div></td>';
					document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+='<tr><td><div class="answer_check" id="module'+moduleNumber+'Check'+ i +'"></div></td></table>';
					break; */

					document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+= [
					//'<table class="table" text-center>',
					'<div class="row text-center">',
						'<div id="module'+moduleNumber+'Question' + i + 'Prompt"></div>',
					'</div>',
					'<div class="row text-center">',
						'<div class ="vex-tabdiv" width=600 height=300 editor="false" id="module' + moduleNumber + 'Canvas'+i+'"></div>',
					'</div>',

					'<div class="row text-center">',
						'<div class = "form-group" id="module'+moduleNumber+'SelectorPanel' + i + '"></div>',
					'</div>',
					
					
					'<div class="row text-center">',
						'<div class="col-xs-12" id="module'+moduleNumber+'Question' + i + 'LowerPrompt"></div>',
					'</div>',
				
					'<div class="row text-center row-bottom-border">',
						'<div class="answer_check col-xs-6" id="module'+moduleNumber+'Answer'+ i +'"></div>',
						'<div class="answer_check col-xs-6" id="module'+moduleNumber+'Check'+ i +'"></div>',
					'</div>'
					].join('');

					//document.getElementById('module' + moduleNumber + 'Canvas'+i).className = moduleOptions[moduleNumber].primaryCanvasVisibility;
					//document.getElementById('module' + moduleNumber + 'Canvas'+i+'printable').className = moduleOptions[moduleNumber].printCanvasVisibility;
					break;
				}
				case 11: case 12: { //the ones without any canvases

					document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+= [
					//'<table class="table" text-center>',
					'<div class="row text-center">',
						'<div id="module'+moduleNumber+'Question' + i + 'Prompt"></div>',
					'</div>',
					/*'<div class="row text-center">',
						'<div class ="vex-tabdiv" width=600 height=300 editor="false" id="module' + moduleNumber + 'Canvas'+i+'"></div>',
					'</div>',*/

					'<div class="row text-center">',
						'<div class = "form-group" id="module'+moduleNumber+'SelectorPanel' + i + '"></div>',
					'</div>',
					
					
					'<div class="row text-center">',
						'<div class="col-xs-12" id="module'+moduleNumber+'Question' + i + 'LowerPrompt"></div>',
					'</div>',
				
					'<div class="row text-center row-bottom-border">',
						'<div class="answer_check col-xs-6" id="module'+moduleNumber+'Answer'+ i +'"></div>',
						'<div class="answer_check col-xs-6" id="module'+moduleNumber+'Check'+ i +'"></div>',
					'</div>'
					].join('');
					/*
					document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+='<table class="table"><tr><td><div id="module'+moduleNumber+'Question' + i + 'Prompt"></div></td>';
					//textual questions only}
					document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+='<tr><td><div id="module' + moduleNumber + 'Canvas'+i+'" ></div></td>';
					
					
					// selector panel, with form wrapper
					//document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+= '<form class="form-inline"><div class="form-group">';
					document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+='<tr><td><div class = "form-group" id="module'+moduleNumber+'SelectorPanel' + i + '"></div></td>';
					
					document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+='<tr><td><div class="answer_check" id="module'+moduleNumber+'Answer'+ i +'"></div></td>';
					document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+='<tr><td><div class="answer_check" id="module'+moduleNumber+'Check'+ i +'"></div></td></table>';
					*/
					break;
				}
				case 6: case 7: { // edits 01/31/2016 - modules 5,6 now have two canvases - 1 to display question and the other to construct answers
					/*document.getElementById('module'+moduleNumber+'Question'+i).setAttribute('class','col-sm-6 col-xs-6 table-bordered text-center');
					document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+= [
					'<table class="">',
					'<td class="vert-align:middle"><canvas height=' + h + ' width=' + w + ' id="module' + moduleNumber + 'Canvas'+i+'"></canvas></td>',
					// new stuff here
					'<td style="vertical-align:middle"><div id="module'+moduleNumber+'Question' + i + 'Prompt"></div></td>',
					'<td style="vertical-align:middle"><canvas height=' + h + ' width=' + w + ' id="module' + moduleNumber + 'AnswerCanvas'+i+'"></canvas></td>',
					'<div class="" id="module'+moduleNumber+'Question' + i + 'LowerPrompt"></div>',
					// selector panel, with form wrapper
					//document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+= '<form class="form-inline"><div class="form-group">';
					'<tr><td></td><td></td><td><div class = "form-group" id="module'+moduleNumber+'SelectorPanel' + i + '"></div></td>',
					'<tr><td><div class="answer_check" id="module'+moduleNumber+'Answer'+ i +'"></div></td>',
					'<td><div class="answer_check" id="module'+moduleNumber+'Check'+ i +'"></div></td>',
					'</table>',
					].join('');
					break;*/

					//20160907 redoing layout using rows and responsive grid, getting rid of tables. each qestion is one row.
					document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+= [
					//'<table class="table" text-center>',
					'<div class="row text-center vcenter">',
						'<div class="col-xs-3 vcenter">',
							'<canvas class="" height=' + h + ' width=' + w + ' id="module' + moduleNumber + 'Canvas'+i+'"></canvas>',
						'</div>',	
						'<div class="col-xs-3 vcenter" id="module'+moduleNumber+'Question' + i + 'Prompt"></div>',
						'<div class="col-xs-3 vcenter">',
							'<canvas height=' + h + ' width=' + w + ' id="module' + moduleNumber + 'AnswerCanvas'+i+'"></canvas>',
							'<canvas class="print-only-canvas" height=' + h + ' width=' + w + ' id="module' + moduleNumber + 'AnswerCanvas'+i+'printable"></canvas>',
						'</div>',
						'<div class="col-xs-3 vcenter">',
							'<div class = "form-group" id="module'+moduleNumber+'SelectorPanel' + i + '"></div>',
						'</div>',
					'</div>',
					
					'<div class="row text-center">',
						'<div class="col-xs-12" id="module'+moduleNumber+'Question' + i + 'LowerPrompt"></div>',
					'</div>',
				
					'<div class="row text-center row-bottom-border">',
						'<div class="answer_check col-xs-6" id="module'+moduleNumber+'Answer'+ i +'"></div>',
						'<div class="answer_check col-xs-6" id="module'+moduleNumber+'Check'+ i +'"></div>',
					'</div>'
					].join('');

					document.getElementById('module' + moduleNumber + 'AnswerCanvas'+i).className = moduleOptions[moduleNumber].primaryCanvasVisibility;
					document.getElementById('module' + moduleNumber + 'AnswerCanvas'+i+'printable').className = moduleOptions[moduleNumber].printCanvasVisibility;
					break;
				}
				
				default: {
					document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+= [
					//'<table class="table" text-center>',
					'<div class="row text-center">',
						'<div class="col-xs-12" id="module'+moduleNumber+'Question' + i + 'Prompt"></div>',
					'</div>',
					'<div class="row text-center">',
						'<canvas class="" height=' + h + ' width=' + w + ' id="module' + moduleNumber + 'Canvas'+i+'"></canvas>',
					'</div>',
					'<div class="row text-center">',
						'<canvas class="print-only-canvas" height=' + h + ' width=' + w + ' id="module' + moduleNumber + 'Canvas'+i+'printable"></canvas>',
					'</div>',
					'<div class="row text-center">',
						'<div class="col-xs-12" id="module'+moduleNumber+'Question' + i + 'LowerPrompt"></div>',
					'</div>',
					// selector panel, with form wrapper
					//document.getElementById('module'+moduleNumber+'Question'+i).innerHTML+= '<form class="form-inline"><div class="form-group">';
					'<div class="row text-center">',
						'<div class = "form-group" id="module'+moduleNumber+'SelectorPanel' + i + '"></div>',
					'</div>',
					'<div class="row text-center row-bottom-border">',
						'<div class="answer_check col-xs-6" id="module'+moduleNumber+'Answer'+ i +'"></div>',
						'<div class="answer_check col-xs-6" id="module'+moduleNumber+'Check'+ i +'"></div>',
					'</div>'
					].join('');

					document.getElementById('module' + moduleNumber + 'Canvas'+i).className = moduleOptions[moduleNumber].primaryCanvasVisibility;
					document.getElementById('module' + moduleNumber + 'Canvas'+i+'printable').className = moduleOptions[moduleNumber].printCanvasVisibility;
					break;
				}
				
				
			}	
			 
			
			// optional lower prompt for the intervals
			
			
			

		}

	//bottom panel (buttons later? can do that separately as content
	// moduleXBottomPanel
	document.getElementById('module'+ moduleNumber).innerHTML += '<div class="panel-heading hidden-print" id="module' + moduleNumber + 'BottomPanel"></div>';


	//globel color and visibility overrides - will very likely be absolete later
	if (global_theme_override) { document.getElementById('module'+moduleNumber).setAttribute('class','panel '+global_panel_class) };
	if (global_visibility_override) { document.getElementById('module'+moduleNumber).setAttribute('style',global_initial_visibility)};
}

modulePopulateHeader = function(moduleNumber) {
	// I can possibly make this general for all modules

	//module name
	// workaround - display moduleViewNumber insead of moduleNumber
	document.getElementById('module'+ moduleNumber +'Heading').innerHTML += 'Module ' + moduleViewNumber + ' of ' + TOTAL_VISIBLE_MODULES +': ' + moduleOptions[moduleNumber].moduleHeadingText;

	//instructions
	document.getElementById('module'+moduleNumber+'Instructions').innerHTML+='<div>'+moduleOptions[moduleNumber].moduleInstructions+'</div>';

	moduleViewNumber++;
	
}

modulePopulateBottom = function(moduleNumber) {
	/* can be made general, except for first, in which the previous button needs to be hidden,
	and last, where the next button should be substituted with submit button */
	if ((moduleNumber != global_first_visible_module) && (global_allow_previous_button) ) {
		// not first module, add a previous button
		document.getElementById('module'+ moduleNumber + 'BottomPanel').innerHTML += '<a class="btn btn-default answer_check" onClick="showPrev(' + moduleNumber + ')">Previous</a>';

	}

	if ((moduleNumber != global_last_visible_module) && (global_allow_previous_button)) {
		// more modules to go, add a NEXT button
		document.getElementById('module'+ moduleNumber + 'BottomPanel').innerHTML += '<a class="btn btn-default" onClick="showNext(' + moduleNumber + ')">Next</a>';		
	}

	
	if (global_show_answer_check_button) {
		// this is last module, add submit results button
		//document.getElementById('module'+ moduleNumber + 'BottomPanel').innerHTML += '<a class="btn btn-default answer_check" onClick="checkAnswers(' + moduleNumber +')">Check Answers</a>';
	}

	if (moduleNumber == global_last_visible_module) {
		// more modules to go, add a NEXT button
		//document.getElementById('module'+ moduleNumber + 'BottomPanel').innerHTML += '<a class="navbar-btn btn btn-default" onClick="submit()">Submit Answers</a>';		
	}


}

// function for showing the modules in turn
showSummary = function () { //
	for (i=global_first_module_number; i<=global_last_module_number; i++) {
		//hide everything but the answers 
		if (visibility_states[i] == 1) { document.getElementById('module'+i).setAttribute('style', 'display:none'); }
	}
	document.getElementById('summary').setAttribute('style', 'display:inline');
}

goBack = function () {
	//back to questions
	for (i=global_first_module_number; i<=global_last_module_number; i++) {
		//hide everything but the answers 
		if (visibility_states[i] == 1) { document.getElementById('module'+i).setAttribute('style', 'display:inline'); }
	}
	document.getElementById('summary').setAttribute('style', 'display:none');
}


showFirst = function(currentModule) {
	// the parameter is optional but may be useful in the future
	// hide current
	// show next
	// position stored in gloval_active_module
	global_active_module = 0;
	//var global_first_module_number
	document.getElementById('module0').setAttribute('style', 'display:none');
	// show timer and label
	//document.getElementById('timer2Group').setAttribute('style', 'display:undefined');
	//alert(document.getElementById('timer2Label').display);
	//document.getElementById('timer2Label').setAttribute('style', 'display:inline');
	//initializeClock('timer2', getDeadline());
	// find next active
	document.getElementById('module'+moduleDisplayOrder[global_active_module]).setAttribute('style', 'display:block');


	//document.getElementById('checkAnswersButton').setAttribute('style', 'display:block');
	//document.getElementById('checkAnswersButton').setAttribute('style','navbar-btn btn btn-default');
	// TODO ajax the data to store it for accidents / refresh attempts ( this is A LOT OF WORK)
	// easier solution. notify user of "refresh attempts left. if too many cut off"
}

showNext = function(currentModule) {
	// the parameter is optional but may be useful in the future
	// hide current
	// show next
	// position stored in gloval_active_module
	document.getElementById('module'+moduleDisplayOrder[global_active_module]).setAttribute('style', 'display:none');
	// find next active
	global_active_module++;
	
	
	document.getElementById('module'+moduleDisplayOrder[global_active_module]).setAttribute('style', 'display:block');
	// TODO ajax the data to store it for accidents / refresh attempts ( this is A LOT OF WORK)
	// easier solution. notify user of "refresh attempts left. if too many cut off"
}

showPrev = function(currentModule) {
	// the parameter is optional but may be useful in the future
	// hide current
	// show next
	// position stored in gloval_active_module
	document.getElementById('module'+moduleDisplayOrder[global_active_module]).setAttribute('style', 'display:none');
	global_active_module--;
	
	document.getElementById('module'+moduleDisplayOrder[global_active_module]).setAttribute('style', 'display:block');
	// TODO ajax the data to store it for accidents / refresh attempts ( this is A LOT OF WORK)
	// easier solution. notify user of "refresh attempts left. if too many cut off"
	
}


checkAnswers = function(moduleNumber) { 

		/*colors are too abtrusive
		just displaying the correct answer would probably fit in a single dynamic function

		pushing the info through ajax would also fit

		//calculating module score could be possible dyn with an auxiliary function which would push all info into a 2 row array
		the function would have to be separate for each module though



		// this may possibly be made general if i can standardize the results!

		// all questions have very different fields... this willhave to be done fairly separately?


		/*
		 display correct answers for incorrect answers
		 maybe highlight right and wrong selections 
		 diplay V, X signs
		save the fit between question asked and answer given, calculate score for this module, push score into global array
		q/a identified by: module number, question number, the random question generated, 
		correct answers, given answers, verification, score per question and for entire module
		can use gloval_active_module to know where to push required answers */

		for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
			var testText = 'Answer: ' + moduleResults[moduleNumber].verbalCorrectAnswers[i].topNote + ' is a <b>' +  moduleResults[5].verbalCorrectAnswers[i].quality +  moduleResults[5].verbalCorrectAnswers[i].size + '</b> above ' + moduleResults[5].verbalCorrectAnswers[i].bottomNote;
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

		// color changes

		/*for (i=0; i<moduleOptions[moduleNumber].totalQuestions();i++) {
			if (moduleResults[5].verbalCorrectAnswers[i].quality == moduleResults[5].userAnswers[i].quality) {
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
		}*/


}

firstToUpper = function (str) {
	// returns a version of the string where the first letter is capitalized
	 return str.charAt(0).toUpperCase() + str.slice(1);
}	

function ajax(elementID,filename,str,post)
{
    var ajax;
    if (window.XMLHttpRequest)
    {
        ajax=new XMLHttpRequest();//IE7+, Firefox, Chrome, Opera, Safari
    }
    else if (ActiveXObject("Microsoft.XMLHTTP"))
    {
        ajax=new ActiveXObject("Microsoft.XMLHTTP");//IE6/5
    }
    else if (ActiveXObject("Msxml2.XMLHTTP"))
    {
        ajax=new ActiveXObject("Msxml2.XMLHTTP");//other
    }
    else
    {
        alert("Error: Your browser does not support AJAX.");
        return false;
    }
    ajax.onreadystatechange=function()
    {
        if (ajax.readyState==4&&ajax.status==200)
        {
            document.getElementById(elementID).innerHTML=ajax.responseText;
            //alert ('ajax success');
        }
    }
    if (post==false)
    {
        ajax.open("GET",filename+str,true);
        ajax.send(null);
    }
    else
    {
        ajax.open("POST",filename,true);
        ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        ajax.send(str);
    }
    return ajax;
}

submit = function() {
	// dump all moduleResult info , possibly with json help, to report.php using
	$( document ).ready(function() {

		module3GetAnswers();
		module2GetAnswers();
		module4GetAnswers();
		module5GetAnswers();
		module6GetAnswers();
		module7GetAnswers();
		module12GetAnswers();
		module8GetAnswers();
		module10GetAnswers();
		module11GetAnswers();

		var jsonRes = JSON.stringify(moduleResults);

		//$.post('report.php',exportSVG(),function);
		//var newCanvas = document.getElementById('module3Canvas0');
		//var data = encodeURIComponent(newCanvas.toDataURL()); //YES!!
		var data = jsonRes;

		var timeLeft = 'untimed';

		if ((typeof document.getElementById('timer2').value != 'undefined') &&  (document.getElementById('timer2').value !='')) {
  			timeLeft = document.getElementById('timer2').value;
  		}

  		//alert (timeLeft);


		$.post( "report.php", 'timeGiven=' + global_testDurationInSeconds +'&timeLeft='+timeLeft+'&moduleResults='+data, function( data ) {
			if (!isTesting) { //only reveal results in ungraded practice
				$( "#summaryContainer" ).empty().append( data )	
			}
	  		
		});
	// defunctionize the options
	//var opts = noFunctionOptions();

	//var jsonOpt = JSON.stringify(tmpOptions);
	//document.write(json);
	//ajax('results','report.php','moduleResults='+exportSVG(),true);
		//console.log(exportSVG());
	//console.log(moduleResults[3].renderDataUrl[0]);

	showSummary();
	});


	//window.location('test.html');

}

String.prototype.AddAccidentalAscii =function() { 
	//gets a note (like C or C#). if str.length is 2, replaces b,# with pretty ascii equivalents
	var res = this;

	if (this.length == 2) {
		if (res.charAt(1) == 'b') { return (res.charAt(0) +String.fromCharCode(9837)); }
		//alert(res.charCodeAt(1));	
		if (res.charAt(1) == '#') { return (res.charAt(0) +String.fromCharCode(9839)); }

		if (res.charAt(1) == 'x') { return (res.charAt(0) +String.fromCharCode(119082)); }
	}

	if (this.length == 3) {
		if (res.charAt(1) == 'b') { return (res.charAt(0) +String.fromCharCode(9837)+ String.fromCharCode(9837)); } //bb
		//alert(res.charCodeAt(1));	
		if (res.charAt(1) == '#') { return (res.charAt(0) +String.fromCharCode(119082)); } //x
	}

	return this;
	
}

String.prototype.stripAccidentalAscii =function() { 
	var res = this;
	//gets a note (like C or C#). if str.length is 2, replaces b,# with pretty ascii equivalents
	if (this.length == 2) {
		if (res.charCodeAt(1) == 9837) { return res.charAt(0) +'b'; }
		//alert(res.charCodeAt(1));	
		if (res.charCodeAt(1) == 9839) { return res.charAt(0) +'#'; }

		if (res.charCodeAt(1) == 119082) { return res.charAt(0) +'x'; }
	}

	return res;
}




function exportSVG() {
  	var s = new XMLSerializer();
  
  	var newCanvas = document.getElementById('module3Canvas0');
  	var ctx = newCanvas.getContext('2d');
	var renderer = new Vex.Flow.Renderer(newCanvas,Vex.Flow.Renderer.Backends.CANVAS);
	var ctx = renderer.getContext();
	var dataURL = newCanvas.toDataURL();
	document.getElementById('xx').value = dataURL
	console.log(dataURL);

  return s.serializeToString(ctx.canvas); //ctx is the VexFlow SVG rendering context
  //return dataUrl;
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


function test_complete_submission() {

//window.location.replace("session_destroy.php");
	global_clockStopped = true;

	submit();



	$("#completeDialog").modal({backdrop: "static"});
	 // displays answers on screen, very easy to split
	//document.cookie="myClock=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC";
	//document.cookie="myClock=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC";
	window.setTimeout(function() {
		window.location.replace("session_destroy.php");
	}, global_testEndTimeoutInSeconds * 1000);

	
}
