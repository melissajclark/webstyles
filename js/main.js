
$(document).ready(function(){

	$(".paletteSwatch").each(function( index ){
		var rgb = $(this).css('backgroundColor').match(/\d+/g);
		var hex = '#'+ String('0' + Number(rgb[0]).toString(16)).slice(-2) + String('0' + Number(rgb[1]).toString(16)).slice(-2) + String('0' + Number(rgb[2]).toString(16)).slice(-2);
		$(this).html("<span class='backgrondColour'>" + hex);
	});

}); // doc ready