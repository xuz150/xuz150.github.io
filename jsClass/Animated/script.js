$(document).ready(function(){
	var time1 = 500;
	$("#hello").fadeIn(time1, function(){
		$("#hello").fadeOut(time1, function(){
			$("#my").fadeIn(time1, function(){
				$("#my").fadeOut(time1, function(){
					$("#name").fadeIn(time1, function(){
						$("#name").fadeOut(time1, function(){
							$("#is").fadeIn(time1, function(){
								$("#is").fadeOut(time1, function(){
									$("#zrx").fadeIn(2000, "swing")
									$("#square").slideUp(2000, "swing", function(){
											$("#downArrow").fadeIn("fast", "swing", function(){

												
												$(window).scroll(function() {
													// if ($(this).scrollTop()>0){
													// $("#bio").animate({opacity: "1"}, 2000);
													// $("#bio").show(1000,"swing");
													$("#bio").slideDown(2000, "swing");
													$("#button").slideDown(2000, "swing");

											    	$("#zrx").fadeOut(2000, "swing");
        											$("#downArrow").fadeOut("fast", "swing");

        											// $("#back").slideDown(1000, "swing");
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