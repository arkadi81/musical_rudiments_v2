<script>
	function validateForm() {
    	var x = document.forms["login"]["agreement"].checked;
		if (!x) {
			alert ("You must accept the terms by clicking the checkbox before you proceed.");
			return false;
		}
		else {
			//document.onload = function( {
		    // show timer and label
		    //showFirst();
		    //document.getElementById('timer2Group').setAttribute('style', 'display:undefined');
		    //alert(document.getElementById('timer2Label').display);
		    //document.getElementById('timer2Label').setAttribute('style', 'display:inline');
		    //initializeClock('timer2', getDeadline());
			return true;
		}
	   	    
	}

</script>

<div class="panel-body text-left" id="module0Container">

	<br>
	<p>Welcome to the theory placement test.<br></p>
	<p>The results of this test will help the faculty of the UVic School of Music place you in the appropriate level theory course
	during your first semester. Do not worry &mdash; this test will not affect the decision for your admission into the program.</p>

	<p>When you proceed to the next screen, your assessment will begin.
	The assessment contains questions with multiple choice answers. You will gain points for giving correct answers.
	Incorrect answers <b>do not subtract points</b>.
	Once you have completed all questions, click the <b>submit</b> button in the lower right corner of the screen.</p>

	<p> The assessment is timed, and will last <b><span id="testDuration">30</span> minutes</b>. A clock at the top of the screen will
	indicate the remaining time.<br>
	If you cannot complete all questions within this time, the portion that you have completed will be submitted at the
	end of the test.</p>

	<p>The assessment is to be completed individually. You may not use any assistance to complete these questions.<br>
	Help from friends, looking up questions online, and using phones is prohibited and constitutes cheating and<br>
	a violation of UVic's code of conduct.</p>

	<p>By proceeding you are agreeing to rely only on your own knowledge.<br>
	Please check the box to indicate that you agree to these terms, then enter your user ID number and
	the key code provided by your instructor.</p><br><br>

	<form action="session.php" name="login" method="POST" onsubmit="return validateForm()" class="form-inline text-center">
		<input type="checkbox" name="agreement" aria-label="..."> I have read and understood the instructions for this assessment. I agree to rely only on my own knowledge for this test.<br>
		<input type="text" name="username" value="" class="form-control" placeholder="User ID" required>
		<input type="text" name="keycode" value="" class="form-control" placeholder="Keycode">
		<input type="hidden" name="mode" value="test">
		<input type="submit" onclick="" value="Go!" class="btn btn-default pull-center">
	</form>
</div>
<script>

	document.getElementById('testDuration').innerHTML = global_testDurationInSeconds/60;
</script>




