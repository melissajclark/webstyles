
$(document).ready(function(){

	$(".paletteSwatch").each(function( index ){
		var color = (index + ": " + $(this).css('background-color') );
		$(this).html("<span class='backgrondColour'>" + color);
	});

}); // doc ready