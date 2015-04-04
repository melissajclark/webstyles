
$(document).ready(function(){

	$(".paletteSwatch").each(function( index ){
		var color = $(this).css('background-color');
		$(this).html("<span class='backgrondColour'>" + color);
	});

}); // doc ready