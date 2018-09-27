<div id="clockdiv">
    Days: <span class="days"></span><br>
    Hours: <span class="hours"></span><br>
    Minutes: <span class="minutes"></span><br>
    Seconds: <span class="seconds"></span>
</div>

<script src='../scripts/jquery/jquery-3.1.0.js'></script>
<script>
	// DEPRECATED - deadline is dynamic 10 minutes
	//var deadline = 'December 31 2016 23:59:59 GMT+02:00';

	/*var timeInMinutes = 10;
	var currentTime = Date.parse(new Date());
	var deadline = new Date(currentTime + timeInMinutes*60*1000);*/


	// if there's a cookie with the name myClock, use that value as the deadline
	function getDeadline() {
		if(document.cookie && document.cookie.match('myClock')){
  			// get deadline value from cookie
 	 		var _deadline = document.cookie.match(/(^|;)myClock=([^;]+)/)[2];
		}

		// otherwise, set a deadline 10 minutes from now and 
		// save it in a cookie with that name
		else{
	  		// create deadline 10 minutes from now
	  		var timeInMinutes = 10;
	  		var currentTime = Date.parse(new Date());
	  		var _deadline = new Date(currentTime + timeInMinutes*60*1000);

	  		// store deadline in cookie for future reference
	  		document.cookie = 'myClock=' + deadline;
	  		// + '; path=/; domain=.yourdomain.com';
	  	}
	  	return _deadline;
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

		var daysSpan = clock.querySelector('.days');
		var hoursSpan = clock.querySelector('.hours');
		var minutesSpan = clock.querySelector('.minutes');
		var secondsSpan = clock.querySelector('.seconds');

		function updateClock(){
 			var t = getTimeRemaining(endtime);
  			daysSpan.innerHTML = t.days;
   			hoursSpan.innerHTML = t.hours;
    		minutesSpan.innerHTML = t.minutes;
    		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2); // 0 padding
  			if(t.total<=0){
    			clearInterval(timeinterval);
  			}
		}
		updateClock(); // run function once at first to avoid delay
		var timeinterval = setInterval(updateClock,1000);
	}

	//sample usage 
	//initializeClock('clockdiv', deadline);
	initializeClock('clockdiv','Fri Feb 01 2018 13:56:40');



</script>

