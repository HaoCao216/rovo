  $(window).on("scroll", function() {
  if ($(this).scrollTop() > 50) {
    $("#header").addClass(" not-transparent");
  }
  else {

    $("#header").removeClass(" not-transparent");
  }
 });

window.onload = function(){ 
 


  $(".about-us").click(function() {
  $('.navbar-collapse').removeClass('show');
  $('html,body').animate({scrollTop: $(".dark-lord-v1").offset().top - 80},
  'slow');
  });
  $(".road-map").click(function() {
  $('.navbar-collapse').removeClass('show');
  $('html,body').animate({scrollTop: $(".dark-lord-v10").offset().top},
  'slow');
  });
  $(".contact-us").click(function() {
  $('.navbar-collapse').removeClass('show');
  $('html,body').animate({scrollTop: $("footer").offset().top},
  'slow');
  });
  $(".events-menu").click(function() {
  $('.navbar-collapse').removeClass('show');
  $('html,body').animate({scrollTop: $(".slide-video-page").offset().top - 60},
  'slow');
  });
  $(".team-menu").click(function() {
  $('.navbar-collapse').removeClass('show');
  $('html,body').animate({scrollTop: $(".slide-team-page").offset().top - 60},
  'slow');
  });
  $(".partners-menu").click(function() {
  $('.navbar-collapse').removeClass('show');
  $('html,body').animate({scrollTop: $(".dark-lord-v8").offset().top},
  'slow');
  });

  document.getElementById('whitepapper-button').onmouseover = function(){
  document.getElementById('join-token-button').style.backgroundColor = '#e6e7e8';
  }
  document.getElementById('whitepapper-button').onmouseout = function(){
  document.getElementById('join-token-button').style.backgroundColor = '#daa40f';
  }
 
};



const segments = $(".donut-segment");

// First segment's offset
const firstSegmentOffset = parseInt($(segments[0]).attr("stroke-dashoffset"));

// Total of all preceding segments length
// For use in stroke-dashoffset calculation
let preSegmentsTotalLength = $(segments[0]).data("per");

for (let i = 0; i < segments.length; i++) {
	// percentage occupied by current segment
	let percent = $(segments[i]).data("per");

	// current segments stroke-dasharray calculation
	let strokeDasharray = `${percent} ${100 - percent}`;

	// setting stroke-dasharray for all segments
	$(segments[i]).css("stroke-dasharray", strokeDasharray);

	if (i != 0) {
		// current segments stroke-dashoffset calculation
		let strokeDashoffset = `${100 - preSegmentsTotalLength + firstSegmentOffset}`;

		// setting stroke-dasharray for all segments
		$(segments[i]).css("stroke-dashoffset", strokeDashoffset);

		// Updating total of all preceding segments length
		preSegmentsTotalLength += percent;
	}
}


var countDownDate = new Date("May 10, 2018 20:04:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  if(days<10){
    document.getElementById("count-down-days").innerHTML ="0" + days;
  }
  else{
    document.getElementById("count-down-days").innerHTML = days;
  }
  if(hours < 10){
    document.getElementById("count-down-hours").innerHTML = "0" + hours;
  }
  else{
    document.getElementById("count-down-hours").innerHTML = hours;
  }
   if(minutes < 10){
    document.getElementById("count-down-minutes").innerHTML =  "0" + minutes;
  }
  else{
    document.getElementById("count-down-minutes").innerHTML =  minutes;
  }
   if(seconds < 10){
    document.getElementById("count-down-seconds").innerHTML ="0" + seconds;
  }
  else{
    document.getElementById("count-down-seconds").innerHTML = seconds;
  }


  // If the count down is over, write some text 
  if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    document.getElementById("count-down-days").innerHTML = "0";
    document.getElementById("count-down-hours").innerHTML ="0";
    document.getElementById("count-down-minutes").innerHTML =  "0";
    document.getElementById("count-down-seconds").innerHTML = "0";
    clearInterval(x);
  }
}, 1000);


function changeImage(index) {
  var a = document.getElementById('england-flag').src;
  var b = document.getElementById('spain-flag').src;
  var c = document.getElementById('china-flag').src;
  var d = document.getElementById('vietnam-flag').src;
  var e = document.getElementById('south-korea-flag').src;

  if(index === 1){
  document.getElementById('flag-active').src= d;
  }
  if(index === 2){
  document.getElementById('flag-active').src= a;
  }
  if(index === 3){
  document.getElementById('flag-active').src= c;
  }
  if(index === 4){
  document.getElementById('flag-active').src= b;
  }
  if(index === 5){
  document.getElementById('flag-active').src= e;
  }
}

