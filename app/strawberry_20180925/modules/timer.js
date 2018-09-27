	// if there's a cookie with the name myClock, use that value as the deadline

	

	function getCookie(name) {
		var value = "; " + document.cookie;
		var parts = value.split("; " + name + "=");
	  	if (parts.length == 2) return parts.pop().split(";").shift();
	}
	function getDeadline() {
		if(document.cookie && document.cookie.match('myClock')){
  			// get deadline value from cookie

  			var _deadLine = getCookie('myClock');
  			console.log(_deadLine);
  			console.log(_deadLine);
  			console.log(_deadLine);
  			console.log(_deadLine);
 	 		//var _deadline = document.cookie.match(/(^|;)myClock=([^;]+)/)[2];
 	 		console.log(_deadLine);
 	 		//console.log(_deadline[0]);
 	 		//console.log(_deadline[1]);
 	 		//console.log(_deadline[2]);
 	 		//var _deadline = <?php echo $_COOKIE["myClock"]; ?>;
		}

		// otherwise, set a deadline 10 minutes from now and 
		// save it in a cookie with that name
		else{
	  		// create deadline 10 minutes from now
	  		var timeInSeconds = global_testDurationInSeconds;
	  		var currentTime = Date.parse(new Date());
	  		var _deadLine = new Date(currentTime + timeInSeconds*1000);

	  		// store deadline in cookie for future reference
	  		document.cookie = 'myClock=' + _deadLine;
	  		// + '; path=/; domain=.yourdomain.com';
	  	}
	  	return _deadLine;
	}
	

	function getTimeRemaining(endtime){
		var t = Date.parse(endtime) - Date.parse(new Date()); // time remaining till deadline
		var seconds = Math.floor( (t/1000) % 60 ); // parse
		var minutes = Math.floor( (t/1000/60) % 60 );
		var hours = Math.floor( (t/(1000*60*60)) % 24 );
		var days = Math.floor( t/(1000*60*60*24) );
		return {
			'total': t,
		    'days': days,
		    'hours': hours,
		    'minutes': minutes,
		    'seconds': seconds
		};
	}

	//sample usage getTimeRemaining(deadline).minutes


	function initializeClock(id, endtime){ // id = div id for the clock DOM, end time is deadline
		var clock = document.getElementById(id);

		/*var daysSpan = clock.querySelector('.days');
		var hoursSpan = clock.querySelector('.hours');
		var minutesSpan = clock.querySelector('.minutes');
		var secondsSpan = clock.querySelector('.seconds');*/

		function updateClock(){
 			var t = getTimeRemaining(endtime);
 			clock.value = ('0' + t.minutes).slice(-2) + ':' + ('0' + t.seconds).slice(-2);
  			/*daysSpan.innerHTML = t.days;
   			hoursSpan.innerHTML = t.hours;
    		minutesSpan.innerHTML = t.minutes;
    		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2); // 0 padding */
    		if (global_clockStopped) {
    			clearInterval(timeinterval);
    		}

  			if(t.total<=0){
    			clearInterval(timeinterval);

    			/*$(function() {*/
				//window.location.replace("session_destroy.php");
					submit();
					clockStopped = true;
					$("#timeOutDialog").modal({backdrop: "static"});
					 // displays answers on screen, very easy to split
					document.cookie="myClock=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC";
					window.setTimeout(function() {
						window.location.replace("session_destroy.php");
					}, global_testEndTimeoutInSeconds * 1000);
				/*})*/

	

  			}
		}

		updateClock();// run function once at first to avoid delay. This is potentially NOT recursion
		var timeinterval = setInterval(updateClock,1000);
		
	}

	//sample usage 
	//initializeClock('clockdiv', deadline);
	




/*</script>*/

