
$(document).ready(function(){

	$(".paletteSwatch").each(function( index ){
		console.log(index + ": " + $(this).css('background-color') );
	});

}); // doc ready