<div class="panel-body text-center" id="module0Container">

	<br>
	<!-- 20160330 replace text due to temp. hiding of test button-->
	<!--
	<p>Strawberry is a web application designed to assess students' understanding of music theory and test their level of proficiency.<br>
	This program includes two modules &mdash; an 'open', unrestricted practice mode, and a timed test mode which is used for course placement.</p>
	-->
	<p>
		This web application is designed to assess students' understanding of musical rudiments and test their level of proficiency.<br>
		A new set of questions will be generated each time you click on “Unrestricted Practice.”  The rudiments test to be administered in September will have exactly the same format as the practice tests; using the practice function multiple times is therefore the best way to prepare for that test.  Enjoy!

	</p>

	<br>
	
	<!--<p><b>Pick your poison</b></p>-->

	<!--test mode-->
	<div class="row">
		<div class="col-xs-12">
			<form action="session.php" name="test" method="POST" onsubmit="" class="form-inline">
				<input type="hidden" name="mode" value="test">
				<input type="submit" onclick="" value="Begin Placement Test" class="btn btn-primary btn-lg">
			</form>
		</div>
	</div>

	<!--space -->
	<div class="row">
		<br/>
	</div>

	<!--practice mode-->
	<div class="row">
		<div class="col-xs-12">
			<form action="session.php" name="practice" method="POST" onsubmit="" class="form-inline">
				<input type="hidden" name="mode" value="practice">
				<input type="submit" onclick="" value="Unrestricted Practice" class="btn btn-primary btn-lg">
			</form>
		</div>
	</div>
	
</div>