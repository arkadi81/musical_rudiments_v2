/* JAVASCRIPT LIBRARY THEORY.

Includes all definitions of Notes and implementations of theory and note manipulation related stuff

copyright Arkady Futerman, November 2015 */

var extendedIntervals = [ // half steps off. struct: size, quality, half step distance
["unison",0],
["m2",1],
["M2",2],
["A2",3],
["d3",2],
["m3",3],
["M3",4],
["A3",5],
["d4",4],
["P4",5],
["A4",6],
["d5",6],
["P5",7],
["A5",8],
["d6",7],
["m6",8],
["M6",9],
["A6",10],
["d7",9],
["m7",10],
["M7",11],
["d8",11],
["P8",12],
["A8",13],
["d9",13],
["m9",13],
["M9",14],
["A9",15],
["d10",14],
["m10",15],
["M10",16],
["A10",17],
["d11",16],
["P11",17],
["A11",18],
["d12",18],
["P12",19],
["A12",20]];

var intervals = [
["unison",0],
["m2",1],
["M2",2],
["m3",3],
["M3",4],
["d4",4],
["P4",5],
["A4",6],
["d5",6],
["P5",7],
["A5",8],
["m6",8],
["M6",9],
["A6",10],
["d7",9],
["m7",10],
["M7",11],
["d8",11],
["P8",12],
["A8",13]];

var triadTypes = [
['Major','M3','P5'],
['Minor','m3','P5'],
['Diminished','m3','d5'],
['Augmented','M3','A5']];

var intervalSizes = [
{ name: 'unison', value: 1 },
{ name: '2nd', value: 2},
{ name: '3rd', value: 3},
{ name: '4th', value: 4},
{ name: '5th', value: 5},
{ name: '6th', value: 6},
{ name: '7th', value: 7},
{ name: '8ve', value: 8},
{ name: '9th', value: 9},
{ name: '10th', value: 10},
{ name: '11th', value: 11},
{ name: '12th', value: 12},
{ name: '13th', value: 13} ];

var intervalQualities = [
{ name: 'Perfect', value: 'P' },
{ name: 'Major', value: 'M'},
{ name: 'Minor', value: 'm'},
{ name: 'Diminished', value: 'd'},
{ name: 'Augmented', value: 'A' }];

var accidentalGlyphs = [
{ name: '&#9837&#9837', value: 'bb', numValue: -2 },
{ name: '&#9837', value: 'b', numValue: -1 },
{ name: '&#9838', value: '', numValue: 0 },
{ name: '&#9839', value: '#', numValue: 1 },
{ name: 'X', value: '##', numValue: 2 }]; //&#9839&#9839


var scaleDegreeNames = ['tonic','supertonic','mediant','subdominant','dominant','submediant','leading tone'];

var scaleRecipes = { // better, superceeds scaleDegreeRecipes used by module 4 through getScaleNotes 2016/1/10
	// this structure is better than SCALEDEGREES and should make the latter DEPRECATE over time
	//currently used by module 4 
	'major ascending': [
		{ quality: 'P', size: 1 },
		{ quality: 'M', size: 2 },
		{ quality: 'M', size: 3 },
		{ quality: 'P', size: 4 },
		{ quality: 'P', size: 5 },
		{ quality: 'M', size: 6 },
		{ quality: 'M', size: 7 },
		{ quality: 'P', size: 8 } ],

	'major descending': [
		{ quality: 'P', size: 8 },
		{ quality: 'M', size: 7 }, 
		{ quality: 'M', size: 6 },
		{ quality: 'P', size: 5 },
		{ quality: 'P', size: 4 },
		{ quality: 'M', size: 3 },
		{ quality: 'M', size: 2 },
		{ quality: 'P', size: 1 } ],


	'natural minor ascending': [
		{ quality: 'P', size: 1 },
		{ quality: 'M', size: 2 },
		{ quality: 'm', size: 3 },
		{ quality: 'P', size: 4 },
		{ quality: 'P', size: 5 },
		{ quality: 'm', size: 6 },
		{ quality: 'm', size: 7 },
		{ quality: 'P', size: 8 } ],

	'harmonic minor ascending': [
		{ quality: 'P', size: 1 },
		{ quality: 'M', size: 2 },
		{ quality: 'm', size: 3 },
		{ quality: 'P', size: 4 },
		{ quality: 'P', size: 5 },
		{ quality: 'm', size: 6 },
		{ quality: 'M', size: 7 },
		{ quality: 'P', size: 8 } ],

	'melodic minor ascending': [
		{ quality: 'P', size: 1 },
		{ quality: 'M', size: 2 },
		{ quality: 'm', size: 3 },
		{ quality: 'P', size: 4 },
		{ quality: 'P', size: 5 },
		{ quality: 'M', size: 6 },
		{ quality: 'M', size: 7 },
		{ quality: 'P', size: 8 } ],

	'melodic minor descending': [
		{ quality: 'P', size: 8 },
		{ quality: 'm', size: 7 }, 
		{ quality: 'm', size: 6 },
		{ quality: 'P', size: 5 },
		{ quality: 'P', size: 4 },
		{ quality: 'm', size: 3 },
		{ quality: 'M', size: 2 },
		{ quality: 'P', size: 1 } ]
}

var inversionTypes = ['Root position', '1st inversion', '2nd inversion']; // numerical value inherently in index, for now.

var romanNumerals =['I','i','ii','ii&#176','III','iii','IV','iv','V','v','VI','vi','VII','vii&#176'];
var figuredBassOptions = ['','6','<sup>6</sup>/<sub>4</sub>'];

//var scaleTypes = ['Major', 'Natural minor', 'Harmonic minor', 'Ascending melodic minor', 'Descending melodic minor']

var scaleDegrees = [
	['unison','M2','M3','P4','P5','M6','M7'], // Major
	['unison','M2','m3','P4','P5','m6','m7'], // natural minor
	['unison','M2','m3','P4','P5','m6','M7'], // harmonic minor
	['unison','M2','m3','P4','P5','M6','M7'], // ascending melodic
	['unison','M2','m3','P4','P5','m6','M7'], // descending melodic
];

var diatonicTriadTypes = [
	['Major','Minor','Minor','Major','Major','Minor','Diminished'], // major scale
	['Minor','Diminished','Major','Minor','Major','Major','Minor'], // minor scale. note weirdness of V in minor. also just doing vii for now
];

var rootValues = [ 0, 2, 4, 5, 7, 9, 11];
var rootNames = ["C","D","E","F","G","A","B"];
var chromaticPitchNames =[]
var keySignatures = ["Cb","C", "C#", "Db" ,"D", "Eb" ,"E", "F", "F#", "Gb", "G", "Ab", "A", "Bb", "B"]; // not in any particular orde
var minorKeySignatures = [/*"ab",*/"a",/*"a#",*/"bb","b","c","c#","d","d#","eb","e","f","f#","g","g#"];

//20160907 introduce non insane major and minor keys for use in module 11 - scale degrees

var simpleMajorKeys = ["Cb","C", "C#", "Db" ,"D", "Eb" ,"E", "F", "F#", "Gb", "G", "Ab", "A", "Bb", "B"];

//2016 temp workaround - allow module 3 to include all possibilities for minors and majors but do not allow program to siphone questions from these
var mod3AllMajorKeys = ["Cb","C", "C#", "Db" ,"D","D#","Eb" ,"E","E#","Fb","F", "F#", "Gb", "G","G#", "Ab", "A","A#", "Bb", "B","B#"];
var mod3AllMinorKeys = ["cb","c", "c#", "db" ,"d","d#","eb" ,"e","e#","fb","f", "f#", "gb", "g","g#", "ab", "a","a#", "bb", "b","b#"];



// temp patch to include properly looking sharps and flats into selectors
// flat = &#9837;
// sharp =	&#9839; 
// D#, G#, A# filled in
var uCaseNoteNames = ["C&#9837;","C", "C&#9839;", "D&#9837;" ,"D", "D&#9839;", "E&#9837;" ,"E","E&#9839;", "F&#9837;","F", "F&#9839;", "G&#9837;", "G", "G&#9839;", "A&#9837;", "A", "A&#9839;","B&#9837;", "B", "B&#9839;"];
var lCaseNoteNames = ["c&#9837;","c", "c&#9839;", "d&#9837;" ,"d", "d&#9839;", "e&#9837;" ,"e", "e&#9839;", "f&#9837;", "f", "f&#9839;", "g&#9837;", "g", "g&#9839;", "a&#9837;", "a", "a&#9839;","b&#9837;", "b", "b&#9839;"];

var accidentalNames = [];
//'bb','b','','#','##'];
accidentalNames[-2]="bb";
accidentalNames[-1]="b";
accidentalNames[0]="";
accidentalNames[1]="#";
accidentalNames[2]="##";

var scaleTypes = ['major ascending','major descending', 'natural minor ascending', 'harmonic minor ascending', 'melodic minor ascending', 'melodic minor descending', 'melodic minor ascending and descending'];

var scaleDegreeRecipes = {
	// this structure is better than SCALEDEGREES and should make the latter DEPRECATE over time
	//currently used by module 4 
	'ascending major': ['unison','M2','M3','P4','P5','M6','M7','P8'],
	'descending major': ['P8','M7','M6','P5','P4','M3','M2','unison'],
	'ascending natural minor': ['unison','M2','m3','P4','P5','m6','m7','P8'],
	'ascending harmonic minor': ['unison','M2','m3','P4','P5','m6','M7','P8'],
	'ascending melodic minor': ['unison','M2','m3','P4','P5','M6','M7','P8'],
	'descending melodic minor': ['P8','m7','m6','P5','P4','m3','M2','unison'],
	// not in use yet 'ascending and descending melodic minor': ['unison','M2','m3','P4','P5','M6','M7','P8','m7','m6','P5','P4','m3','M2','unison'],
}



var clefRanges = { // now in use for randomization in Q5
	"treble": "A3", // low ranges for each clef
	"bass": "C2",
	"alto": "B1",
	"tenor": "A2",
	"span": 16, // how far up do we go per clef? 2 octaves and a bit (treble: A3 -> C6)
}

// this is mainly for building HTML code blocks for selection  options
var intervalSizeNames = ["Unison", "2nd", "3rd", "4th", "5th", "6th", "7th", "octave"]; 
var intervalQualityNames = ["Major", "Minor", "Augmented", "Diminished"];

/*ABSTRACTION: A note is indicated by root,pc,octave*/
function Note(root, accidental, octave) { // changed 20160901, to precede calls to functions
	/*// Error, fn is called before the function is assigned!
fn();
var fn = function () { alert("test!"); } 

// Works as expected: the fn2 declaration is hoisted above the call
fn2();
function fn2() { alert("test!"); } */

	// these are properties (attributes), they are set as each instance is created as part
	// of the named function, which acts as the constructor.
	// the roots are as follows: c = 0, d = 1, e = 2, f = 3 , g = 4, a = 5, b = 6
	// detault is C4
	
	/*20160901 test seems that this screws up with scope! if(this === window){ //if *this* is the window object, start over with a *new* object
	//	return new Note(root, accidental, octave);
	}*/
	if (root == undefined)
	{
		this.root=0 
	}
	else
	{
		this.root=root;
	}
	
	if (accidental == undefined)
	{
		this.accidental=0 
	}
	else
	{
		this.accidental=accidental;
	}
	if (octave == undefined)
	{
		this.octave=4 
	}
	else
	{
		this.octave=Number(octave); // just in case string is passed
	}
	 //console.log("instance created");
	 
};

// IMPLEMENTATION OF PROTOTYPE

Note.prototype = {
	getRoot: function() { 
		return this.root;
	},


	getAccidental: function() {
		return this.accidental;
	},

	getOctave: function() {
		return this.octave;
	},

	set: function(root, accidental, octave) {
		 // function for setting values of note already created
		 //polymorphic to setroot setpc and setoctave
		 this.root=root;
		 this.accidental=accidental;
		 this.octave=octave;
		},

		setRoot: function(root) {
			this.root=root;
		},

		setAccidental: function(accidental) {
			this.accidental = accidental;
		},

		setOctave: function(octave) {
			this.octave = octave;
		},

		getFullName: function(withOctave,socialized) {
		// returns name of note in text (like c#5), mostly for testing purposes.
		//withOctave can be a boolean which will indicate if octave is necessary in representation,
		// on by default
		if (withOctave == undefined) { withOctave = true}
		if (socialized == undefined) { socialized = false}

		var res = rootNames[this.root];
		if (!socialized) {
			var accidentalName = accidentalNames[this.accidental];	
		}
		else {
			var accidentalName = accidentalGlyph[this.accidental].name;		
		}
		
		res +=accidentalName;
		if (withOctave) {res +=this.octave; }
		return res;
	},

	getRootName: function(withOctave) { 
		// returns name of note in text (like c#5), mostly for testing purposes.
		//withOctave can be a boolean which will indicate if octave is necessary in representation,
		// on by default
		var res = rootNames[this.root];
		/*if (this.accidental!=0) {
			//accidental present, modify root name
			res += accidentalNames[this.accidental];
		}*/
		return res;
	},

	getPc: function() {
		// returns pc associated with given root and accidental
		// octaves don't matter for this one
		var res = rootValues[this.root];
		res +=this.accidental;
		return res;
	},

	output: function () {
		// this is a method (or a function, whichever). Note use of keyword Prototype and the fact
		// that we have to use "this". doesnt work otherwise
		//document.getElementById('out').value="hi"
		console.log("root: ", this.root, " accidental: ", this.accidental, " octave: ", this.octave);
		console.log("name associated with this note: ", this.getFullName());
		console.log("pc associated with this note: ", this.getPc());
	},

	findInterval: function(interval, direction) {
		//returns a Note object which is the note above or below the current object by specified interval. direction can be "above", "below"
		if (direction == "above" || direction == "below") {
			var UD = 1; //up or down. default is up
			if (direction == "below") { UD = -1;}
		} 
		else { throw( "wrong direction parameter: " + direction); }; // UD is now 1 for above or -1 for below
		
		var newRoot;
		var octaveBump =0;
		// find the new root note
		if (interval == "unison") 	{
		newRoot = this.root; 	}
		else 	{ newRoot = this.root + UD * (Number(interval.slice(-1))-1); } // problematic
		// reminder. the roots for note object run 0-6 - they are NOT pictch classes.

		// bump octave and reset root if need be. only once since we're talking small intervals for now
		if (newRoot > 6) { 
			++octaveBump;
			newRoot = newRoot % 7; 	};
		if (newRoot < 0) { // for the below case
			newRoot +=7;
			--octaveBump; };
		// here comes the fun part. finding the accidental
		// find the index of the interval of name "interval"
		position = findIntervalPosition(interval);
		var newPc = (this.getPc()+UD*intervals[position][1]) ;
		if (newPc > 11) { // for going ABOVE
			newPc = newPc % 12; };
		if (newPc < 0) { // for the below case 
			newPc +=12; };
		// increase by amount of half steps for the given interval, drop 12 if needed
		//now adjust the accidental of our new note to the right accidental
		//assume the root right now is natural. if the pc is larger, than add 1/2. otherwise subtract 1/2
		// mission: from the PC and the root to synthesize an accidental.
		var newAccidental = 0;
		if (newPc !=0 && rootValues[newRoot]!=0) {
			newAccidental = newPc - rootValues[newRoot];
			if (newAccidental < -2) { // this can only happen at BX (the PC is 1 but the root is 11), unique exception
				newAccidental +=12;
			}
		}
		if (newPc == 0 && rootValues[newRoot]!=0 ) {
			newAccidental = 12 - rootValues[newRoot];
		}
		if (newPc != 0 && rootValues[newRoot]==0) {
			// C, but which kind. need to make it symmetrical around -1,0,1
			if (newPc >6) {
				newAccidental = newPc - 12; // for flats, notes approaching from below
		}
		else { // for sharps
			newAccidental = newPc;	
		}
	}
	//if (Math.abs(newAccidental)>2) { throw( "wonky interval"); }
	newOctave = this.octave + octaveBump
	return new Note(newRoot, newAccidental, newOctave);
	}, // end of getinterval function	

	getInterval: function(quality, size, direction) { 
		//accepts quality as P,M,m,d,A, and size as a number between 1-13

		try {
			var dir;
			switch (direction) {
				case undefined: dir = 1; break; // default
				case 'above': dir =1; break;
				case 'below': dir =-1; break;
				default: throw ('wrong direction. use "above"/"below", ' + direction);
			}

			// AMENDMENT TO findIntervalFunction. Includes extended harmony
			//Interval = { size, quality } from extendedIntervals = [ {size, quality, half steps}]

			// defaults only, P1, M2, M3, P4, P5, M6, M7, P8, M9, M10(3),P11(4), P12, M13
			var stdIntervalDistances = [0,0,2,4,5,7,9,11,12,14,16,17,19,21]; // extra 0 for filler, std[5] is indeed a P5

			
			var halfStepModifier = 0; // adjust the amount of necessary half step skips based on PMmdA
			
			switch (size) {
				case 1:
				case 4:
				case 5:
				case 8:
				case 11:
				case 12:
				// perfects
					switch (quality) {
						case 'P': halfStepModifier = 0; break;
						case 'M': throw ('wrong interval size and quality combination (eg M5), ' + quality + size);
						case 'm': throw ('wrong interval size and quality combination (eg M5), ' + quality + size);
						case 'd': halfStepModifier = -1; break;
						case 'A': halfStepModifier = 1; break;
						default: throw ('wrong interval quality ', quality); break;
					}
					break;
				case 2:
				case 3:
				case 6:
				case 7:
				case 9:
				case 10:
				case 13:
				// majors
					switch (quality) {
						case 'P': throw ('wrong interval size and quality combination (eg P3), ' + quality + size);
						case 'M': halfStepModifier = 0; break;
						case 'm': halfStepModifier = -1; break;
						case 'd': halfStepModifier = -2; break;
						case 'A': halfStepModifier = 1; break;
						default: throw ('wrong interval quality, ' + quality); break;
					}
					break;
 
				default: throw ('wrong interval size, ' + size);
			}
		

			// if we made it this far, the input is OK
			var requiredHalfSteps = (stdIntervalDistances[size] + halfStepModifier) % 12;

			// find the correct root and check whether an octave skip is needed
			// the roots are as follows: c = 0, d = 1, e = 2, f = 3 , g = 4, a = 5, b = 6
			var newRoot = (this.root + dir*(size -1)) % 7; // M2 only increases by 1!
			if (newRoot<0) { newRoot += 7; }
			// did we overshoot the octave?
			var octaveBump = Math.floor((this.root + dir*(size-1)) / 7); //ok, passed testing

			var newOctave = this.getOctave()+octaveBump;
			// if the octave skipped it will also affect pc distances

			// accidental - first get the difference in PC between current and needed, then adjust
			//var newNote = new Note(newRoot,0,this.octave+octaveBump);
			
			//var newPc = newNote.getPc(); // no accidental yet.
			//			var thisPc = this.getPc();
			
			
			switch (dir) {
				case 1: {
					// 2 options, either we overshoot or we don't.
					var newPc = (this.getPc() + stdIntervalDistances[size] + halfStepModifier) % 12;
					//if (rootValues[newRoot] == 0) { var newAccidental = newPc - rootValues[newRoot] -12 }
					if (newPc !=0 && rootValues[newRoot]!=0) {
						var newAccidental = newPc - rootValues[newRoot];
					}
					if (newPc == 0 && rootValues[newRoot]!=0 ) {
						var newAccidental = 12 - rootValues[newRoot];
					}
					if (newPc != 0 && rootValues[newRoot]==0) {
						// C, but which kind. need to make it symmetrical around -1,0,1
						if (newPc >6) {
							var newAccidental = newPc - 12;
						} // for flats, notes approaching from below
						else { // for sharps
							var newAccidental = newPc;	
						}
					}
					if (newPc == 0 && rootValues[newRoot]==0) { newAccidental =0 }

					break;
				} 
				case -1: {

					// 


					//

					var newPc = (this.getPc() - requiredHalfSteps) % 12;

					if (newPc <= 0 ) { newPc +=12}

					var newAccidental  = newPc - rootValues[newRoot];
					
					if (newAccidental > 6) { newAccidental = newAccidental -12}	
					

					/*if (newPc < 0) { newPc +=12;}
					if (newPc !=0 && rootValues[newRoot]!=0) {
						newAccidental = newPc - rootValues[newRoot];
					}
					if (newPc == 0 && rootValues[newRoot]!=0 ) {
						newAccidental = 12 - rootValues[newRoot];
					}
					if (newPc != 0 && rootValues[newRoot]==0) {
						// C, but which kind. need to make it symmetrical around -1,0,1
						if (newPc >6) {
							newAccidental = newPc - 12;
						} // for flats, notes approaching from below
						else { // for sharps
							newAccidental = newPc;	
						}
					}
					if (newPc == 0 && rootValues[newRoot]==0) { newAccidental =0 }*/
					break;
				}
			} 
			
			var newNote = new Note(newRoot, newAccidental,newOctave); 
			

			// ----------------------------- reusing old code here... seemed to work-----------------------
			
			if (Math.abs(newAccidental) > 2) {throw ('wrong accidental: ' + newAccidental);;}

		}
		catch(err) { 
			console.log(err);
			return null;
			 
		//document.write(err); 
		}
		
		
		return(newNote);

	// 
	},

	getDomSeventh: function(inversion) {
		// returns a 4 member array with the note as the root.
		// for now, the placement in the array is always the same! (octaves are bumped as necessary)
		// returns null if the note is funny and doesnt have a well spelled dominant
		var tmpRoot = this;

		var tmp3rd = this.getInterval('M',3,'above');
		var tmp5th = this.getInterval('P',5,'above');
		var tmp7th = this.getInterval('m',7,'above');
		
		if (tmp3rd == null || tmp5th == null || tmp7th == null) {
			throw ('no Dom 7 chord could be built off ' + this.getFullName()); return null;
		}
		switch (inversion) {
			case 3: tmp5th.octave +=1;
			case 2: tmp3rd.octave +=1;
			case 1: tmpRoot.octave +=1;
			case 0: ; return [tmpRoot,tmp3rd,tmp5th,tmp7th]; break;
			default: throw ('wrong inversion: ' + inversion);
		}
	
	},

	} // end of note object

// ---------------------------------------------------------------

function socializeNoteName(str) {
	// dumb workaround for socializing a text note name
	//input: eg Eb NO OCTAVE IN INPUT
	// output: Eb with a pretty flat sign.

	//TODO error checking

	var accidental='';

	switch (str.length) {
		//no accidental, just set accidental to 0
		case 1: return str; break;
		// there's an accidental, parse it. options: #,b,X
		case 2: {
			switch (str.substr(1,1)) {
				case "#": { accidental = 1; break; }
				case "B": { accidental = -1; break; }
				case "X": { accidental = 2; break; }
			}
			octave = res.substr(2,1);
			break;
		}
		// only if double flat
		case 4: { accidental = -2; octave = res.substr(3,1); break; }
	}
				
	return new Note(root, accidental, octave);

}


getRandomArrayElement = function(arr) {
	var rnd = getRandomInt(0, arr.length-1)
	return(arr[rnd]);
}


function createTriad(rootNote, triadType, inversion) {
	// gets a note object for root. type can be 0 for major, 1 for minor, 2 for diminished, 3 for augmented, inversion is 0,1,2.
	//clef assumed unneccesary since we will be building on rootNote, which has clef association already
	var intervalTmp = triadTypes[triadType][1];
	var triad3rd = rootNote.findInterval(intervalTmp,"above");

	var intervalTmp = triadTypes[triadType][2];
	var triad5th = rootNote.findInterval(intervalTmp,"above");

	if (inversion>0) {
		var rootOctave = rootNote.getOctave();
		rootNote.setOctave(rootOctave+1);
	}

	if (inversion>1) {
		var thirdOctave = triad3rd.getOctave();
		triad3rd.setOctave(thirdOctave+1);
	}

	if (Math.abs(triad3rd.getAccidental())<=2 && Math.abs(triad5th.getAccidental())<=2) {
			return ([rootNote, triad3rd, triad5th]); 
	}
	else {
		// got a goofy triad
			throw('goofy triad: ' + rootNote.getFullName() + ' triad type: ' + triadTypes[triadType][0]);
			return null;
	}

}

function getRandomTriad(clef) {
	// creates a triad which sits pretty on a given clef. This triad is in root position ROOOT POSITION!!!
	// in order to make the triad look ok under inversion, restricting to 12 whole roots per clef instead of usual 16.

	/*will have to test each time we get a triad to make sure it's not wonky. indication for wonky triad is 
	accidental in one of the notes that is >2 or <-2 */

	var gotGoodTriad = false;

	while(gotGoodTriad==false) {
		var randomTriadType = getRandomInt(0,3); // 0 = major, 1= minor, 2 = diminished, 3= augmented
		
		// find a random root
		var offset = getRandomInt(0,6); 
		var triadRoot = createNoteInClef(clef,offset); // adjust root per clef
		triadRoot.setAccidental(getRandomInt(-1,1)); // no need for doubles?

		// get a 3rd. type of 3rd depends on the randomized triadType. various types are found in triadTypes[x,1]
		var intervalTmp = triadTypes[randomTriadType][1];
		var triad3rd = triadRoot.findInterval(intervalTmp,"above");

		// get a 5th. type of 3rd depends on the randomized triadType. various types are found in triadTypes[x,2]
		var intervalTmp = triadTypes[randomTriadType][2];
		var triad5th = triadRoot.findInterval(intervalTmp,"above");

		// edits 01/31/2016 no triads with more than 1 double 
			// algorithm - add up accidentals - if total of 2 stacked notes >4 or <-4, redo.

		if (Math.abs(triad3rd.getAccidental())<=2 && Math.abs(triad5th.getAccidental())<=2 && Math.abs(triad3rd.getAccidental()+triad5th.getAccidental())<4 ) {
			gotGoodTriad = true
		}
	}

	return [triadRoot,triad3rd,triad5th, randomTriadType];
}

function getTriadArray(size) {
	// returns an array of root pos triads 0 = root, 1 = 3rd, 2 = 5th

	// not developped yet - needs multiple clefs, - will write this out in module 8 for time being
}



function findIntervalPosition(intervalName) {
	// returns the position of the interval within the interval array
	var index=-1;
	for(var i = 0; i < intervals.length; i++){
    if(intervals[i][0] === intervalName){
        index = i;
        break;
    }
	}
	if(index == -1){
    console.log("interval " + interval + " not found.");
	}
	return index;
}

function stringToNote(noteName) {
	// gets a name of a note with an octave and returns a Note object
	var res = noteName.toUpperCase();
	var root = rootNames.indexOf(res.substr(0,1));
	
	switch (res.length) {
		//no accidental, just set accidental to 0
		case 2: {
			accidental = 0;
			octave = res.substr(1,1);
			break;
		}
		// there's an accidental, parse it. options: #,b,X
		case 3: {
			switch (res.substr(1,1)) {
				case "#": { accidental = 1; break; }
				case "B": { accidental = -1; break; }
				case "X": { accidental = 2; break; }
			}
			octave = res.substr(2,1);
			break;
		}
		// only if double flat
		case 4: { accidental = -2; octave = res.substr(3,1); break; }
	}
				
	return new Note(root, accidental, octave);
}


function getRandomInt(min, max) {
	/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArray(size,min,max) {
	// gets an array the size of size. all elements are within the min-max,range, but there are no repeats!
	// reminder: indexes of arrays start at 0
	var res = new Array();
	res[0] = getRandomInt(min,max); // first number is fine
	var i = 1;
	while (i<size)
	{
		testNumber = getRandomInt(min,max);
		if (res.indexOf(testNumber)==-1)
		{
			// number is unique and doesnt exist in array yet
			res[i]=testNumber;
			++i;
		}
	}
	return res;		
}

function createNoteInClef(clef,stepsAbove) {
	//accepts a clef and creates a single note object based on a clef bottom and a random number which signifies the
	//nnumber of root steps to go up. this is a modification of createRandomNote to accomodate for a group of random
	// notes without repeats
	var stepsUp = stepsAbove; // bump it at most 14 spots up
	var pitchesUp = stepsUp % 7;
	var octavesUp = 0;
	var initRoot; // initial root
	var initOctave;
	
	switch (clef) {
		case 'treble': {
			initRoot = 6;
			initOctave = 3; 
			//res.set((5 + pitchesUp) % 7, 0,3 + octavesUp);
			break; // A3 bottom
		}
		case 'bass': {
			initRoot = 2;
			initOctave = 2;
			//res.set((0 + pitchesUp) % 7, 0,2 + octavesUp);
			break;	// C2 bottom
		}
		case 'alto': {
			initRoot = 0;
			initOctave = 3;
			break;
		}
		case 'tenor': {
			initRoot = 4;
			initOctave = 3; // A3 bottom - this operation is redundant!! needs to be set in options! 20170125
			break;
		}
	}
	// properly setting octave: if at any point during ascent the note cycles through C
	// that is, root = 0, then bump octave however many times that happens
	// which is 1 + the number the remainer from subtraction cycles through 7
	if ((initRoot + stepsUp) >= 7) {
		octavesUp += 1 + Math.floor((stepsUp - (7 - initRoot)) / 7); }
		
		var res = new Note((initRoot + pitchesUp) % 7, 0,initOctave + octavesUp);
		
		return res;
	//seems to work now
}



function createRandomNote (clef) {
	//PASSED INITIAL ALGORITHM TESTING
	// MAY BE USED TO BUILD A "move up by certain interval" function
	/* returns a random note which is in reasonable range for the clef
	accepts a clef: treble, bass, alto, tenor and spits out an object containing lower edge of 
	the clef. We can assume that each clef spans from "low A to high C", which is a total of 
	2 octaves + a third, or 24+4 half steps. No accidentals here!!
	*/
	
	var stepsUp = getRandomInt(0,16); // bump it at most 14 spots up
	var pitchesUp = stepsUp % 7;
	var octavesUp = 0;
	var initRoot; // initial root
	var initOctave;
	
	switch (clef) {
		case 'treble': {
			initRoot = 5;
			initOctave = 3; 
			//res.set((5 + pitchesUp) % 7, 0,3 + octavesUp);
			break; // A3 bottom
		}
		case 'bass': {
			initRoot = 0;
			initOctave = 2;
			//res.set((0 + pitchesUp) % 7, 0,2 + octavesUp);
			break;	// C2 bottom
		}
	}
	// properly setting octave: if at any point during ascent the note cycles through C
	// that is, root = 0, then bump octave however many times that happens
	// which is 1 + the number the remainer from subtraction cycles through 7
	if ((initRoot + stepsUp) >= 7) {
		octavesUp += 1 + Math.floor((stepsUp - (7 - initRoot)) / 7); }
		
		var res = new Note((initRoot + pitchesUp) % 7, 0,initOctave + octavesUp);
		
		return res;
	//seems to work now
	
};


/*function getInterval(note1,note2) {
	// assumption- no crazyass far or weirdo Ab->C## intervals
	//returns interval betweeen two note objects

	
}*/




Note.prototype.render = function(clef, canvasColor, targetID,canvasWidth) {
	// this is absolte, and should work per question - way too costumized per question, and should be done with 
	//consideration to parameters
	// modified version of the VexFlow tutorial
	// accepts a clef and a note (from the object properties) and sketches it.
	// hoping to make the render method polymorphic for notes, scales etc
	
	//TODO: attach an observable link between note and rendered canvas so that the image refereshes each time
	//the note object changes (already almost implemented before*/
		canvasName = "c" + targetID.slice(-1);
		document.getElementById(targetID).innerHTML="<canvas width=" + canvasWidth+ " height = 120 id=c"+ targetID.slice(-1) +"></canvas>";
		var newCanvas = document.getElementById(canvasName)
	// new: create a new DOM canvas for our thingy
	//var newCanvas = document.createElement("canvas");
	//var currentcanvas = document.getElementById(targetID); // lets eliminate the necessity for t1
	// todo. saparate canvas creation from the rendering process. canvas creation should go with the design element of
	// how many questions does the global indicate - table should be built based off that
	//document.body.insertBefore(newCanvas,currentcanvas);
	
	
	var canvas = $("div.one div.a canvas")[0];
	var renderer = new Vex.Flow.Renderer(newCanvas,
		Vex.Flow.Renderer.Backends.CANVAS);
	
	var ctx = renderer.getContext();
	var stave = new Vex.Flow.Stave(10, 0,100);
	stave.addClef("treble").setContext(ctx).draw();
	stave.addKeySignature('C').setContext(ctx).draw();
	
	  // Create the notes
	  var notes = [
    // A whole-note C.
    new Vex.Flow.StaveNote({ keys: [this.getRootName()+"/"+this.getOctave()], duration: "w" }),
    
	//

    // A quarter-note D.
    //new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "q" }),

    // A quarter-note rest. Note that the key (b/4) specifies the vertical
    // position of the rest.
    //new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }),

    // A C-Major chord.
    //new Vex.Flow.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" })
    ];

  // Create a voice in 4/4
  var voice = new Vex.Flow.Voice({
  	num_beats: 1,
  	beat_value: 1,
  	resolution: Vex.Flow.RESOLUTION
  });

  // Add notes to voice
  voice.addTickables(notes);

  // Format and justify the notes to 500 pixels
  var formatter = new Vex.Flow.Formatter().
  joinVoices([voice]).format([voice], 500);

  // Render voice
  voice.draw(ctx, stave);
  
  
}


function createTableLayout(howManyQuestions)
// gets some parameters and dynamically builds a table layout for graphical representation of question
// may have to be split by question
{
	myTable = document.createElement("table");
	myTable.border=1;
	myRow = document.createElement("tr");
	myTable.appendChild(myRow);
	for (i=0; i<howManyQuestions; i++)
	{
		myCell = document.createElement("td");
		myCell.id = "cell" +cellNumber;
		newContent = document.createTextNode("I am cell number " + cellNumber);
		myCell.appendChild(newContent);
		myRow.appendChild(myCell);
		++cellNumber;
	}
	//myCanvas = document.getElementById("t1");
	//document.body.insertBefore(myTable,myCanvas);
	// return the entire object of the table for appending
	return myTable;
}

Object.defineProperty(Array.prototype, 'getRandomElement', {
    enumerable: false,
    value: function() {
    	return this[getRandomInt(0, this.length-1)]; }
});


/*Array.prototype.getRandomElement = function () {
	var s = getRandomInt(0, this.length-1);
    return this[s];
} if stuff starts breaking, this is the old function that was deprecated by object.defineproperty above.
the defineproperty isnt ideal, fix it in git post.*/

function buildIntervalArray(size,clefs,maxIntervalSize,direction) {
	// 20151230: NEW: I am preventing unisons for the time being
	//clefArray is passed so that the function attributes proper ranges per clef - passed to prevent scope issues
	//returns a randomized array of intervals of indicated size and direction:
	// the function builds triplets of [CLEF=0,ORIGINAL NOTE=1, interval=2, NEW NOTE=3] 
	//checks for weird combinations and weeds them out in process of creation
	if (direction == undefined) { direction='above'; }; // default is intervals going up

	var res = []; // res[0] = bottoms, res[1] = intervals, res[2] = tops

	//offsetArray = getRandomArray(size,0,8); // the last param is how far up the bottom note goes
	//2/4/2016 AMENDMENT: FOR ABOVE, DONT LET IT GO TOO HIGH. FOR BELOW, DONT LET IT GET TOO CLOSE.
	if (direction == 'above') {
		offsetArray = getRandomArray(size,0,5);
	}
	else {
		// below, dont let it get too low
		offsetArray = getRandomArray(size,7,15);
	}
	i=0;
	while (i<size) {
		//get interval at random
		var bottomNote = createNoteInClef(clefs[i],offsetArray[i]);
		bottomNote.setAccidental(getRandomInt(-1,1));
		
		//rndInt = intervals[getRandomInt(1,intervals.length-1)][0]; 
		var rndSize = getRandomInt(2,maxIntervalSize); // dont include unisons
		switch (rndSize) {
			case 2: case 3: case 6: case 7: case 9: case 10: case 13:
				// non perfects
				var rndQuality = ['M','m','d','A'].getRandomElement(); break;
			case 1: case 4: case 5: case 8: case 11: case 12: 
				// perfects	
				var rndQuality = ['P','d','A'].getRandomElement(); break;
		} 
		// 20151230: starting randomization from 1 disallows unisons.
		// if 1 in above line changed to 0, unisons are ok
		//get corresponding top note

		var _intName = rndQuality+rndSize;
		topNote = bottomNote.getInterval(rndQuality, rndSize,direction);
		if (topNote != null && _intName != 'P8') {
			// exclusion list. temporary... Cnat start isnt cool.
			if (bottomNote.getRootName()!='C' || bottomNote.getAccidental()!=0) {
				res.push([clefs[i],bottomNote, topNote, rndQuality, rndSize, direction]);
				i++;	
			}
			//alert(' bottom note is: ' + bottomNote.getRootName() + bottomNote.getAccidental());
			
		}
	}
	
	return res;	
}

function accidentalNameToNumber(accidentalText) {
	var res ='';
	switch (accidentalText.toUpperCase()) {
		case '': res = ''; break;
		case '#': res = 1; break;
		case '##': res = 2; break;
		case 'X': res = 2; break;
		case 'B': res = -1; break;
		case 'BB': res = -2; break;
		case '@': res = -1; break;
		case '@@': res = -2; break;
	}
	return res;
}


function accidentalNumberToName(accidentalNum) {
	var res ='';
	switch (accidentalNum) {
		case 0: res = ''; break;
		case 1: res = '#'; break;
		case 2: res = '##'; break;
		case -1: res = 'b'; break;
		case -2: res = 'bb'; break;
	}
	return res;
}



function getRelativeMinor(rootNoteName) {
	//gets a name, in text form! and returns the name of relative minor in text form.
	// for accidentals, only need to go through 1 accidental.

	var accidentalNum = 0;

	if (rootNoteName.length > 2) { 
		throw ('error: can\'t get relative minors for keys spelled with more than two characters:' + rootNoteName)
	}

	if (rootNoteName.length == 2) {
		// accidental is present
		accidentalNum = accidentalNameToNumber(rootNoteName[1]);
		//console.log(accidentalNum + accidentalNumberToName(accidentalNum));
	}

	var tmp = new Note(rootNames.indexOf(rootNoteName[0]),accidentalNum,4);

	var relNote = tmp.findInterval('M6','above');

	return relNote.getRootName()+accidentalNames[relNote.getAccidental()];

	//console.log(accidentalNumberToName(accidentalNum));

	//return (relNote.getRootName() + accidentalNumberToName(relNote.getAccidental())).toLowerCase();
	// works now

} 

function getScaleNotes (rootNoteName, typeOfScale) { 

	//gets a root and a type of scale (theory.js has scale types)
	// returns an array (8 or possibly 15 for updown) of note objects representing the scale

	// first part cp from getRelativeMinor
	var accidentalNum = 0;

	if (rootNoteName.length > 2) { 
		throw ('error: can\'t get scale degrees for keys spelled with more than two characters:' + rootNoteName);
	}

	if (rootNoteName.length == 2) {
		// accidental is present
		accidentalNum = accidentalNameToNumber(rootNoteName[1]);
		//console.log(accidentalNum + accidentalNumberToName(accidentalNum));
	}

	
	// tmp is a generic Note object that corresponds to the passed rootNoteName
	var tmp = new Note(rootNames.indexOf(rootNoteName[0].toUpperCase()),accidentalNum,4);

	// let's get the scale degrees based on typeOfScale

	var numDegrees = scaleRecipes[typeOfScale].length; // how many pitches are we geting?
	var res = [];

	for (i=0; i<numDegrees; i++) {
		res.push(tmp.getInterval(scaleRecipes[typeOfScale][i].quality, scaleRecipes[typeOfScale][i].size, 'above'));
	}

	return res;
}

function getFullIntervalName (shortInterval){
	//recieves one of the elements of "intervals" - or actually anything, returns an object 
	// {quality,size}
	if (shortInterval == 'unison') {
		// this one is wierd, but we actually don't do unisons so no worries
		return { size: 'unison', quality: 'Perfect'};
	}
	else
	{
		// normal names here. first letter is quality, second is size
		var tmpQuality ='';
		switch (shortInterval[0]) {
			case 'M': tmpQuality = 'Major'; break;
			case 'm': tmpQuality = 'Minor'; break;
			case 'P': tmpQuality = 'Perfect'; break;
			case 'd': tmpQuality = 'Diminished'; break;
			case 'A': tmpQuality = 'Augmented'; break;

		}

		var tmpSize ='';
		switch (shortInterval[1]) {
			case '2': tmpSize = '2nd'; break;
			case '3': tmpSize = '3rd'; break;
			case '4': tmpSize = '4th'; break;
			case '5': tmpSize = '5th'; break;
			case '6': tmpSize = '6th'; break;
			case '7': tmpSize = '7th'; break;
			case '8': tmpSize = 'octave'; break;
		}

		return { size: tmpSize, quality: tmpQuality};
	}
}

parseVexFlowString = function(str) {
	/*
	// has to have "/" before octave!
	slice usage: slice() extracts up to but not including endSlice. str.
	slice(1, 4) extracts the second character through the fourth character (characters indexed 1, 2, and 3). */

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
}

getNextNaturalNote = function (rootName) {
	switch(rootName) {
		case 'a': return 'b'; break;
		case 'b': return 'c'; break;
		case 'c': return 'd'; break;
		case 'd': return 'e'; break;
		case 'e': return 'f'; break;
		case 'f': return 'g'; break;
		case 'g': return 'a'; break;
		case 'A': return 'B'; break;
		case 'B': return 'C'; break;
		case 'C': return 'D'; break;
		case 'D': return 'E'; break;
		case 'E': return 'F'; break;
		case 'F': return 'G'; break;
		case 'G': return 'A'; break;
		default: throw ('wrong root name given: ', rootName); return null; break;
	}
}

getPrevNaturalNote = function (rootName) {
	switch(rootName) {
		case 'c': return 'b'; break;
		case 'd': return 'c'; break;
		case 'e': return 'd'; break;
		case 'f': return 'e'; break;
		case 'g': return 'f'; break;
		case 'a': return 'g'; break;
		case 'b': return 'a'; break;
		case 'C': return 'B'; break;
		case 'D': return 'C'; break;
		case 'E': return 'D'; break;
		case 'F': return 'E'; break;
		case 'G': return 'F'; break;
		case 'A': return 'G'; break;
		case 'B': return 'A'; break;
		default: throw ('wrong root name given: ', rootName); return null; break;
	}
}