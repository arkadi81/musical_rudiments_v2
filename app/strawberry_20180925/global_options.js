/* MASTER FIlE WITH ALL QUESTION OPTIONS V0.1

/* will be used to strip display of all answers completely. all fields which display answers will have 
a ANSWER class on their tag and can be selected using jQuery */
var global_timeZone = 'America/Vancouver';
var global_testDurationInSeconds = 60*1;
var global_testEndTimeoutInSeconds = 10;
var global_hideAnswers = true; 
var global_theme_override = true; // do we want to override color choices of individual modules?
var global_panel_class = "panel-default"; // this is off white. there's also panel-primary, panel-danger etc - this is bootstrap driven
var global_visibility_override = false;
var global_initial_visibility = "display:block"; // display:block or display:none
var global_active_module = 0;
var global_first_module_number = 1; // used by the module bottom population function to make exceptions for first and last modules
var global_last_module_number = 12; // counts the total, DEPR
var global_first_visible_module =3;
var global_last_visible_module = 11; // this is the one on which we pin the submit button
var global_allow_previous_button = true; // display the previous button??
var global_allow_next_button = true;
var global_show_answer_check_button = true;
var global_version = "1.1b";
var global_last_update = "version 1.2, last updated 01/30/2017";
var global_clockStopped = false;
const NO_PULL_FROM_SERVER = false;
const PULL_FROM_SERVER = true;
const CORRECT_COLOR_STYLE = 'has-success';
const INCORRECT_COLOR_STYLE = 'has-failure';
const TOTAL_VISIBLE_MODULES = 10; // TODO 20160320: would be better to make this dynamic

var moduleOptions = [];


var moduleResults = []; // NEWEVER VERSION


/* used to assign a sequential "display" number to each module (names are the same)
interim solution due to dynamic nature of modules which are included and arent.
incremented each time after a moduleDOMConstructor() is called. */
var moduleViewNumber = 1;  // start at 1

var moduleDisplayOrder = [3,2,4,5,6,7,12,8,10,11];
var visibility_states  = [0,0,1,1,1,1,1,1,1,0,1,1,1]; // no 9, no 1 // ghetto rigging in order to allow summary to pop up and down and change visibility to originial states



moduleOptions[1] = {
	'moduleHeadingText': 'Pitch',
	'moduleInstructions':'Identify the following pitches.',
	'treble':2, // total questions in each of these clefs? used to be called q5Options / howManyQuestions 
	'bass':2,
	'alto':2,
	'clefSpan': 13, /* the amount of unique roots that a clef contains without 
							accamulating too many ledger lines. we're assuming 
							symmetrical above / below staff distribution */
	'canvasHeight': 100,
	'canvasWidth' : 200,
		
	totalQuestions: function() {return (this.treble+this.bass+this.alto);},

	clefArray: function() {
		// returns an array of text containing clefs based on the options above, e.g. ['treble','treble','bass']
		var res =[];
		for (i=0; i<this.treble; i++) { res.push('treble') };
		for (i=0; i<this.bass; i++) { res.push('bass') };
		for (i=0; i<this.alto; i++) { res.push('alto') };
		return res;
	},
	'containerClass': 'col-sm-4 col-xs-6 center',
}

moduleOptions[2] = {
	// remember - this one uses vextab so it's weird!!
	'moduleHeadingText': 'Rhythm and Meter',
	'moduleInstructions': 'For each of the following, select the meter (simple or compound, duple, triple or quadruple) and the appropriate time signature.',
	totalQuestions: function() { return 2; },
	'canvasHeight': 100, // very optional, vextab
	'canvasWidth' : 300, // very optional, vextab
	'questionBank': [

		// updates 20170129 based on Dr. Clenman's approval
		//ok
		[':8 A/4 :16 A-A/4 :8 A-A-A/4 ^3^ | :16 A-A-A/4 ^3^ :8 A/4 :8d A/4 :16 A/4 =|=','Simple','Duple',2,4],
		//ok
		[':16 A-A-A-A-A/4 ^5^ :8d A/4 :16 A/4 :8d A/4 :16 A/4 | :q A-A-A/4 ^3^ :8d A/4 :16 A/4 =|=','Simple','Triple',3,4],
		//ok
		[':8 A-A-A/4 :8 A-A/4 ^2^ :8d A/4 :16 A/4 :8 A/4 | :q A/4 :8 A/4 :8 A/4 :8d A/4 :16 A/4 :qd A/4 =|=','Compound','Triple',9,8],
		//ok
		[':q A/4 :8 A/4 :8 A-A/4 ^2^  | :8d A/4 :16 A/4 :8 A/4 :8d A/4 :16 A/4 :8 A/4 =|=','Compound','Duple',6,8],
		//ok
		[':32 A-A-A-A-A/4 ^5^ :8 A/4 :8 ## A/4| :8 A-A/4 :8d A/4 :16 A/4 =|=','Simple','Duple',2,4],		
		//ok
		[':16 A-A-A/4 :16d A/4 :32 A/4 :16 A/4 :8d A/4 :8 A/4 :16 A/4 | :8d A/4 :16 A-A-A/4 :8d ## :32 A-A-A-A-A-A/4 =|=','Compound','Quadruple',12,16],		
		//ok
		[':h A/4 :h A/4 :q A-A/4 | :q A-A/4 :h A/4 :8 A-A-A-A/4 =|=','Simple','Triple',3,2],				
		//ok
		[':hd A-A/4 | :h A/4 :q A/4 :hd A/4 =|=','Compound','Duple',6,4],				
		//ok
		[':8 A-A-A/4 ^3^ :8 A-A/4 :8d A/4 :16 A/4 | :8 A-A/4 :qd A/4 :16 A-A-A/4 ^3^  =|=','Simple','Triple',3,4],				
		//ok
		[':8 A/4 :16 A/4 :8 A/4 :16 A/4 :8 A/4 :32 A-A/4 | :8d A/4 :16 A-A-A/4 :8 A/4 :16 A/4 =|=','Compound','Triple',9,16],				
		//mew stuff
		[':8 A-A/4 :16 A-A/4 :16 A-A-A-A/4 :8 A/4 | :8d A/4 :16 A/4 :8 A/4 :q A/4 :8 A/4 =|=','Compound','Duple',6,8],				

		[':qd ## :8 A/4 :q A/4 :16 A-A-A/4 ^3^ :8 A/4 | :8 ## A/4 ## A/4 ## :qd A/4 =|=','Simple','Quadruple',4,4],				

		[':q A/4 :8 ## :qd A/4 | :8 A/4 :16 A-A/4 :8 A/4 ## :q A/4=|=','Simple','Triple',3,4],				

		[':8d A/4 :16 ## :32 A-A-A-A-A-A/4 ^6^ :h ## | :8 A-A/4 :qd A/4 :8 A/4 :q ## =|=','Simple','Quadruple',4,4],				

		// empty rhythm for future expansion ['=|=','Compound','Quadruple',12,16],				

		//updates 20160901
		//1, 4/4
		[':16 A-A-A/4 ^3^ :8 A/4 :8 A-A/4 :16 A-A-A-A/4 =|=','Simple','Triple',3,4],
		// 2, 3/4
		[':8 A-A-A/4 ^3^ :8 A-A/4 :8d A/4 :16 A/4 =|=','Simple','Triple',3,4],
		//3, 4,4
		[':8 C-E/4 :16 A-A-A/4 ^3^ :8 A/4 :8d A/4 :16 A/4 :16 A-A-A-A/4 =|=','Simple','Quadruple',4,4],
		//4, 9/8
		[':8 C/5 B-A/4 B-A-G/4 :q F/5 :8 B/4 | :8 F/4 :16 G-A/4 :8 B/4  :q E/4 :8 F/4 :qd C/5 =|=','Compound','Triple',9,8],
		//5, 9/8	
		[':8 A-A-A/4 :8d A/4 :16 A/4 :8 A/4 :16 A-A-A/4 ^3^ :8 A-A/4 =|=','Compound','Triple',9,8],
		//6, 3/2
		[':8d A/4 :32 G-F/4 :8 F#-G/4 :8d E/5 :16 D#/5 :8 E/5 :16 F#-G/5 :h C/5 =|=','Simple','Triple',3,2],
		//7, 4/2
		[':8d A/4 :32 A-A/4 :8 A-A/4 :8d A/5 :16 A/5 :8 A/5 :16 A-A/5 :8d A/4 :16 A/4 :8 A-A/4 :qd A/4 :8 A/4 =|=','Simple','Quadruple',4,2],
		//8, 9/16
		[':8d C/5 :16 G/4 :32 F#-E/4 :16 D/4 :32 C-D-E-F-G-A/4 =|=','Compound','Triple',9,16],
		//9, 12/16
		[':16d C/5 :32 D/5:16 E-F-E-D/5 :16 C-E-F#/5 :8d G/5 =|=','Compound','Quadruple',12,16],
		//10, 6/8
		
		//11, 3/2
		[':8d A/4 :32 A-A/4 :8 A-A/4 :8d A/4 :16 A/4 :8 A/4 :16 A-A/4 :h A/4 =|=','Simple','Triple',3,2],
		//12, 9/16
		[':16d A/4 :32 A/4 :16 A/4 :8 A/4 :16 A/4 :16 A-A-A/4 =|=','Compound','Triple',9,16],
		//13 12/8
		
		//15, 2/4
		[':16 A-A-A-A/4 :8d A/4 :32 A-A/4 =|=','Simple','Duple',2,4],
		//16, 3/2

	],

	'containerClass': 'col-sm-12 col-xs-12 center',		
}

moduleOptions[3] = {
	'moduleHeadingText': 'Key Signatures',
	'moduleInstructions': 'Identify the following major key signatures and their relative minors.',
	'treble':1,
	'alto':1,
	'tenor':1,
	'bass':1,
	'canvasHeight': 100,
	'canvasWidth' : 200,
	totalQuestions: function() { return (this.treble + this.alto + this.tenor + this.bass); },
	// 'containerClass': 'col-sm-6 col-xs-6 center question',
	'containerClass': 'question',
	clefArray: function() {
		// returns an array of text containing clefs based on the options above, e.g. ['treble','treble','bass']
		var res =[];
		for (i=0; i<this.treble; i++) { res.push('treble') };
		for (i=0; i<this.alto; i++) { res.push('alto') };
		for (i=0; i<this.tenor; i++) { res.push('tenor') };
		for (i=0; i<this.bass; i++) { res.push('bass') };
		return res;
	},
	'primarycanvasVisibility':'perm-visible-canvas',
	'printCanvasVisibility':'invisible-canvas',
}
	

moduleOptions[4] = {
	'moduleHeadingText': 'Scales',
	'moduleInstructions': '<span>Construct the following scales.</span> <span class="hidden-print">Please note: you cannot position notes below the given first note. You may have to move the first note to a higher position.</span><span class="visible-print-inline"> Do *not* use a key signature - Only individual accidentals.</span>',
	totalQuestions: function() { return 3; },
	'scaleOptions': ['Major', 'Natural minor', 'Harmonic minor', 'Ascending melodic minor', 'Descending melodic minor'],
	'canvasHeight': 100,
	'canvasWidth' : 600,
	'treble':1, // these arent counters - they just indicate whether each clef is in use. first question is always treble
	'alto':1,
	'tenor':1,
	'bass':1,
	'containerClass': 'col-sm-12 col-xs-12 center',
	'starting_notes': {
		'treble':'c/4',
		'alto': 'd/3',
		'tenor': 'b/2',
		'bass': 'e/2',
	},
	'primaryCanvasVisibility':'screen-only-canvas',
	'printCanvasVisibility':'print-only-canvas',
}

moduleOptions[5] = {
	// interval identification by size and quality
	'moduleHeadingText': 'Intervals',
	'moduleInstructions':'Identify the following intervals.',
	'treble':1, // total questions in each of these clefs? used to be called q5Options / howManyQuestions 
	'bass':2,
	'alto':1,
	'tenor':1,
	clefSpan: 12, /* the amount of unique roots that a clef contains without 
					accamulating too many ledger lines. we're assuming 
					symmetrical above / below staff distribution */

	totalQuestions: function() {return (this.treble+this.bass+this.alto+this.tenor);},

	clefArray: function() {
		// returns an array of text containing clefs based on the options above, e.g. ['treble','treble','bass','tenor?']
		var res =[];
			for (i=0; i<this.treble; i++) { res.push('treble') };
			for (i=0; i<this.bass; i++) { res.push('bass') };
			for (i=0; i<this.alto; i++) { res.push('alto') };
			for (i=0; i<this.tenor; i++) { res.push('tenor') };
			return res;
	},
	'canvasHeight': 150,
	'canvasWidth' : 200,
	'containerClass': 'col-sm-4 col-xs-6 center',
	'maxIntervalSize': 12,
	//returns an array with clefs based on Q5options
	'primaryCanvasVisibility':'perm-visible-canvas',
	'printCanvasVisibility':'invisible-canvas',
}

moduleOptions[6] = {
	'moduleHeadingText': 'Intervals',
	'moduleInstructions':'Construct the indicated intervals ABOVE the given pitch.<br>A = Augmented, P = Perfect, M = Major, m = minor, d = diminished',
	'treble':1, // total questions in each of these clefs? used to be called q5Options / howManyQuestions 
	'bass':1,
	'alto':1,
	clefSpan: 16, /* the amount of unique roots that a clef contains without 
					accamulating too many ledger lines. we're assuming 
					symmetrical above / below staff distribution */
	'maxIntervalSize': 12,

	totalQuestions: function() {return (this.treble+this.bass+this.alto);},

	clefArray: function() {
		// returns an array of text containing clefs based on the options above, e.g. ['treble','treble','bass']
		var res =[];
			for (i=0; i<this.treble; i++) { res.push('treble') };
			for (i=0; i<this.bass; i++) { res.push('bass') };
			for (i=0; i<this.alto; i++) { res.push("alto") };
			return res;
		},
	'canvasHeight': 150,
	'canvasWidth' : 120,
	'containerClass': 'text-center',
	//returns an array with clefs based on Q5options
	'primaryCanvasVisibility':'screen-only-canvas',
	'printCanvasVisibility':'print-only-canvas',
}

moduleOptions[7] = {
	'moduleHeadingText': 'Intervals',
	'moduleInstructions':'Construct the indicated intervals BELOW the given pitch.<br>A = Augmented, P = Perfect, M = Major, m = minor, d = diminished',
	'treble':1, // total questions in each of these clefs? used to be called q5Options / howManyQuestions 
	'bass':1,
	'alto':1,
	clefSpan: 16, /* the amount of unique roots that a clef contains without 
					accamulating too many ledger lines. we're assuming 
					symmetrical above / below staff distribution */


	totalQuestions: function() {return (this.treble+this.bass+this.alto);},

	clefArray: function() {
		// returns an array of text containing clefs based on the options above, e.g. ['treble','treble','bass']
		var res =[];
			for (i=0; i<this.treble; i++) { res.push('treble') };
			for (i=0; i<this.bass; i++) { res.push('bass') };
			for (i=0; i<this.alto; i++) { res.push("alto") };
			return res;
		},
	'canvasHeight': 150,
	'canvasWidth' : 120,
	'containerClass': 'text-center',
	'maxIntervalSize': 12,
	'primaryCanvasVisibility':'screen-only-canvas',
	'printCanvasVisibility':'print-only-canvas',

}

moduleOptions[8] = {
	'moduleHeadingText': 'Triads & inversions',
	'moduleInstructions':'For each chord, identify the root, quality, and position.', // include 7th chords?
	'treble':1, // total questions in each of these clefs? used to be called q5Options / howManyQuestions 
	'bass':2,
	'alto':1,
	'tenor': 1,
	clefSpan: 8, /* the amount of unique roots that a clef contains without 
					accamulating too many ledger lines. we're assuming 
					symmetrical above / below staff distribution */

	totalQuestions: function() {return (this.treble+this.bass+this.alto+this.tenor);},

	clefArray: function() {
		// returns an array of text containing clefs based on the options above, e.g. ['treble','treble','bass']
		var res =[];
			for (i=0; i<this.treble; i++) { res.push('treble') };
			for (i=0; i<this.bass; i++) { res.push('bass') };
			for (i=0; i<this.alto; i++) { res.push("alto") };
			for (i=0; i<this.alto; i++) { res.push("tenor") };
			return res;
		},
	'canvasHeight': 140,
	'canvasWidth' : 200,
	'containerClass': 'col-xs-4 text-center', //'col-sm-4 col-xs-6 center',
	'primaryCanvasVisibility':'perm-visible-canvas triad-canvas',
	'printCanvasVisibility':'invisible-canvas',
//returns an array with clefs based on Q5options
}

moduleOptions[9] = {
	'moduleHeadingText': 'Roman Numeral analysis',
	'moduleInstructions':'In the following, given the original scale and a chord, identify the appropriate roman numeral.', // include 7th chords?
	'treble':6, // total questions in each of these clefs? used to be called q5Options / howManyQuestions 
	'bass':0,
	'alto':0,
	clefSpan: 8, /* the amount of unique roots that a clef contains without 
					accamulating too many ledger lines. we're assuming 
					symmetrical above / below staff distribution */

	totalQuestions: function() {return (this.treble+this.bass+this.alto);},

	clefArray: function() {
		// returns an array of text containing clefs based on the options above, e.g. ['treble','treble','bass']
		var res =[];
			for (i=0; i<this.treble; i++) { res.push('treble') };
			for (i=0; i<this.bass; i++) { res.push('bass') };
			for (i=0; i<this.alto; i++) { res.push("alto") };
			return res;
		},
	'canvasHeight': 100,
	'canvasWidth' : 200,
	'containerClass': 'col-sm-4 col-xs-6 center',
//returns an array with clefs based on Q5options
}

moduleOptions[10] = {
	'moduleHeadingText': 'Dominant seventh chords',
	'moduleInstructions':'For each dominant seventh chord, identify the root, inversion and the tonic of the key in which this chord belongs, as in the following example:', // include 7th chords?
	'treble':1, // total questions in each of these clefs? used to be called q5Options / howManyQuestions 
	'bass':1,
	'alto':1,
	clefSpan: 8, /* the amount of unique roots that a clef contains without 
					accamulating too many ledger lines. we're assuming 
					symmetrical above / below staff distribution */

	totalQuestions: function() {return (this.treble+this.bass+this.alto);},

	clefArray: function() {
		// returns an array of text containing clefs based on the options above, e.g. ['treble','treble','bass']
		var res =[];
			for (i=0; i<this.treble; i++) { res.push('treble') };
			for (i=0; i<this.bass; i++) { res.push('bass') };
			for (i=0; i<this.alto; i++) { res.push('alto') };
			return res;
		},
	'canvasHeight': 150,
	'canvasWidth' : 200,
	'containerClass': 'col-sm-4 col-xs-6 center',
	'primaryCanvasVisibility':'perm-visible-canvas',
	'printCanvasVisibility':'invisible-canvas',
//returns an array with clefs based on Q5options
}

moduleOptions[11] = {
	'moduleHeadingText': 'Scale degree names',
	'moduleInstructions':'Select the correct answers for the following:',
	totalQuestions: function() { return 4; },
	'canvasHeight': 100,
	'canvasWidth' : 200,
	'containerClass': 'col-sm-4 col-xs-6 center',
//returns an array with clefs based on Q5options
}

moduleOptions[12] = {
	'moduleHeadingText': 'Inversions of intervals',
	'moduleInstructions':'Select the correct answers for the following:',
	totalQuestions: function() { return 5; },
	'canvasHeight': 100,
	'canvasWidth' : 200,
	'containerClass': 'col-sm-4 col-xs-6 center',
//returns an array with clefs based on Q5options
}



							

