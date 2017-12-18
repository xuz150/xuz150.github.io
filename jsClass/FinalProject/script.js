$(document).ready(function(){
	var time1 = 300;
	$("#hello").fadeIn(time1, function(){
		$("#hello").fadeOut(time1, function(){
			$("#my").fadeIn(time1, function(){
				$("#my").fadeOut(time1, function(){
					$("#name").fadeIn(time1, function(){
						$("#name").fadeOut(time1, function(){
							$("#is").fadeIn(time1, function(){
								$("#is").fadeOut(time1, function(){
									$("#zrx").fadeIn(1000, function(){
										
											$("#downArrow").fadeIn("fast", function(){


												$(window).scroll(function() {
													// $("#inner").slideToggle();
													// $("#bio").show( "slide", {direction: "down" }, 5000 );
													// $("#bio").effect('slide', { direction: 'right', mode: 'show' });
													// $("#bio").effect("slide", {direction: "down", mode: "show", duration: 1000})
													// $("#bio").show("slide", { direction: "down", duration:  1000});
													// $("#bio").animate({opacity: "1"}, 2000);
													$("#bio").slideDown("slow");
													$("#button").slideDown("slow");
													// $("body").animate({backgroundColor: "red"}, 2000);
													// $("#bio").show(1000,"swing");
										
											    	$("#zrx").fadeOut("slow")
        											$("#downArrow").fadeOut("fast")
        											
        											// });
        											
        										});
        								
    											
											});
										
									});
								});
							});
						});
					});
				});
			});
		});
	});
});