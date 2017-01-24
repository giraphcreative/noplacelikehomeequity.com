

$(function(){
	
	$(".home-equity").accrue({

		// set the output element
		response_output_div: "h3.results",

		// set the response format
		response_basic: 'Your payment will be <span>$%payment_amount%</span>',

	});

	$(".numbers-only").keyup(function(){
		var fixed=$(this).val().replace(/[^0-9.]/g,"");
		$(this).val( fixed );
	});

});

