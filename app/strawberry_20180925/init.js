$(function() {
	'use strict';

	function AppViewModel() {
		var self = this;
		self.testData = {
	    	questionHeader: 'question header from model data here',
	    	thing1: 'this is the template info',
	    	note: ko.observable("B/4")
	    }

	 //    self.testData.note.subscribe(function(newValue) {
		//     console.log("a change in note detected. Custom event triggered:" + newValue);
		//     // self.draw(elements,data);
		// });

		// how do i bootstrap the render function to every model update?!

	    self.randomizeNote = function() {
	    	var note_array = ["A","B","C","D","E","F","G"];
	    	self.testData.note(note_array[Math.floor(Math.random()*note_array.length)]+"/4");
	    	console.log("randomizeNote fired..");
	    	// console.log(self.testData.note);

	    	// self.testData.note("F/4");
	    }

	    self.draw = function(elements,data) {
	    	// "elements" is an array of DOM nodes just rendered by the template
	    	$(elements).find("[class*=canvas]").css({color: 'magenta' });
	    	console.log(data);

	    	var newCanvas = $(elements).find("[class*=canvas]")[0]; // pull out DOM element, equiv to getElbyID

	    	var renderer = new Vex.Flow.Renderer(newCanvas,Vex.Flow.Renderer.Backends.CANVAS);
			var ctx = renderer.getContext();
			var stave = new Vex.Flow.Stave(0, 0,100);
			//stave.addKeySignature('C').setContext(ctx).draw();

		  	// Create the notes
		  	var notes = [
	    		new Vex.Flow.StaveNote({ clef:"treble", keys: [data.note()], duration: "w", color:"black" })];

	    	var voice = new Vex.Flow.Voice ({
	    		num_beats: 1,
	    		beat_value: 1,
	    		resolution: Vex.Flow.RESOLUTION
	  		});

	  		// Add notes to voice
	  		voice.addTickables(notes);

	  		// Format and justify the notes to 500 pixels
	  		var formatter = new Vex.Flow.Formatter().
	  		joinVoices([voice]).format([voice], 200);

			//attempt at changing color
			//ctx.setStrokeStyle('yellow');
			//ctx.setFillStyle('red');// woooo

	  		stave.addClef("treble").setContext(ctx).draw();
	  		// Render voice
	   		voice.draw(ctx, stave);
		    	
	    }
	}

	var VM = new AppViewModel();



	ko.bindingHandlers.updataCanvasOnChange = {
		// 'init': function(element, valueAccessor) {
		// 	console.log("init for update canvas event bootstrapped..");
		// },
    	'update': function(element, valueAccessor) {
	        // $(element).hide();
	        console.log("custom binding fired - vm change in note detected - redrawing canvas");
	        // ko.bindingHandlers.text.update(element, valueAccessor);
	        // $(element).fadeIn('slow');
	        console.log(ko.unwrap(valueAccessor())); // this is how to check the inside value!
	        
	        renderCanvas(1,element,ko.unwrap(valueAccessor()));

    	}
    };

    // Activates knockout.js
	ko.applyBindings(VM);
	
	function renderCanvas(questionID, targetElement, data) {
		// 20180919 WORKS! just need to build dispatcher
		// send the question type along with data. document a format for the data structure
		// based on the question number, redirect to the correct rendering function
		console.log("canvas rendering function fired...");

	 	// "elements" is an array of DOM nodes just rendered by the template
    	// $(elements).find("[class*=canvas]").css({color: 'magenta' });
    	// console.log(data);

    	console.log("element = " + targetElement);
    	var newCanvas = $(targetElement)[0]; // pull out DOM element, equiv to getElbyID

    	// clear each time it is redrawn
		var context = newCanvas.getContext('2d');
    	context.clearRect(0, 0, newCanvas.width, newCanvas.height);

		var renderer = new Vex.Flow.Renderer(newCanvas,Vex.Flow.Renderer.Backends.CANVAS);
		var ctx = renderer.getContext();
		var stave = new Vex.Flow.Stave(0, 0,100);
		//stave.addKeySignature('C').setContext(ctx).draw();

	  	// Create the notes
	  	var notes = [
    		new Vex.Flow.StaveNote({ clef:"treble", keys: [data], duration: "w", color:"black" })];

    	var voice = new Vex.Flow.Voice ({
    		num_beats: 1,
    		beat_value: 1,
    		resolution: Vex.Flow.RESOLUTION
  		});

  		// Add notes to voice
  		voice.addTickables(notes);

  		// Format and justify the notes to 500 pixels
  		var formatter = new Vex.Flow.Formatter().
  		joinVoices([voice]).format([voice], 200);

		//attempt at changing color
		//ctx.setStrokeStyle('yellow');
		//ctx.setFillStyle('red');// woooo

  		stave.addClef("treble").setContext(ctx).draw();
  		// Render voice
   		voice.draw(ctx, stave);
	    	
    }

});


