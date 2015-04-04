
$(document).ready(function(){

	$(".paletteSwatch").on("click", function(){
		var colour = $(this).css('background-color');
		$('span.backgroundColour').html(colour);
	});

}); // doc ready