
$(document).ready(function(){

	$(".paletteSwatch").on("click", function(){
		var colour = $(this).css('background-color');
		$("p.colourReveal").show();
		$('span.backgroundColour').html(colour);
	});

}); // doc ready