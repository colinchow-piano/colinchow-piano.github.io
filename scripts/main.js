	
function navto(id) {

	$("#contentwrapper").removeClass();
	$("#contentwrapper").addClass(id);

	$("#navbar").removeClass();
	$("#navbar").addClass(id);

}


$(document).ready(function () {

    $(".navitem").hover(
		function () {
		    $(this).addClass("hover");
		},
		function () {
		    $(this).removeClass("hover");
		}
	);

    $(".navbtn").click(function () {
        navto($(this).attr("id"));
    });

    $("#logo").click(function () {
        navto("navhome");
    });

    $(".vidoverlay").mouseenter(function(e) {
		$(this).addClass("hover");
    });

    $(".vidoverlay").mouseleave(function(e) {
		$(this).removeClass("hover");
    });

    $(".vidoverlay").click(function() {
    	switch (this.id) {
    		case "vidMonkey":
    			window.open("https://youtu.be/9nkrpk95jzY");
    			break;
			case "vidShallow":
    			window.open("https://youtu.be/AyM7aI6RcqA");
    			break;
    		case "vidAllIAsk":
    			window.open("https://www.youtube.com/watch?v=ZnNzq8XtBx8");
    			break;
    		case "vidYoung":
    			window.open("https://www.youtube.com/watch?v=LPkLqpjflFM");
    			break;
    		case "vidLetitgo":
    			window.open("http://youtu.be/avj8d_UOkVk");
    			break;
    		case "vidBad":
    			window.open("http://youtu.be/jEMwQK7wxgM");
    			break;
    		case "vidSkyfall":
    			window.open("http://youtu.be/UH-3WsybgwQ");
    			break;
    		case "vidStorm":
    			window.open("http://youtu.be/bzY_hTi1TkI");
    			break;
    		case "vidGrenade":
    			window.open("https://www.facebook.com/photo.php?v=10150864809615503&l=3993909597489511972");
    			break;
    		case "vidGoodbye":
    			window.open("https://www.facebook.com/photo.php?v=10150410474960503&l=3349946752923985051");
    			break;
    		case "vidInvinc":
    			window.open("https://www.facebook.com/photo.php?v=10151499631685503&l=2323602276638338089");
    			break;
    		case "vidRecital":
    			window.open("../videos/PianoHobby_Spring2015Recital.avi");
    			break;
    		case "vidRecital2":
    			window.open("../videos/PianoHobby_Winter2015Recital.mp4");
    			break;
    	}
    });

    $("#vidlink").click(function() {
		navto("navvideos");
    });

    navto("navhome");

});



