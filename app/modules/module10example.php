

<canvas id='module10Example'></canvas>

<script> 
	renderExample();
	// Example for the dominant 7th chord modules
	renderExample = function() {

		document.getElementById('module'+moduleNumber+'Instructions').innerHTML+='<canvas id="module10Example"></canvas>';

		canvasName = 'module10Example';
		var newCanvas = document.getElementById(canvasName)
		//var canvas = $("div.one div.a canvas")[0];
		var renderer = new Vex.Flow.Renderer(newCanvas,Vex.Flow.Renderer.Backends.CANVAS);
		var ctx = renderer.getContext();
		var stave = new Vex.Flow.Stave(0, 0,120);
		
		var tmp = new Vex.Flow.StaveNote({ clef:'treble', keys: ['g/4','b/4','d/5','f/5'], duration: "w" });
		
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
		   
		stave.addClef(clefs[i]).setContext(ctx).draw(); 
		// Render voice
			 
		voice.draw(ctx, stave);
		// voice2.draw(ctx, stave);
	}
}
</script>