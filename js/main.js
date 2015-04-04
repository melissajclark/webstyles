
$(document).ready(function(){

	/**
	*
	* Functions on Swatch Colours:
	*   - Loop through swatches and get background colour
	*   - On click of swatch, display the colour as hex code
	*
	**/
	
		$("a.paletteSwatch").each(function( index ){
			var rgb = $(this).css('backgroundColor').match(/\d+/g);
			var hex = '#'+ String('0' + Number(rgb[0]).toString(16)).slice(-2) + String('0' + Number(rgb[1]).toString(16)).slice(-2) + String('0' + Number(rgb[2]).toString(16)).slice(-2);
			$(this).html("<span style='display:none;' class='swatchColour'>" + hex);
		});

		// reveal the Hex code on click
		$("a.paletteSwatch").each(function( index ){
			$(this).on("click", function(e){
				e.preventDefault();
				$(this).find("span.swatchColour").show();
			});
		});

	/* / end functions on swatch colours */

	/**
	*
	* Function on Click of Code Reveal Button:
	*   - check if it has the class of hidden
	*   - if so, reveal it
	*   - if not, hide it
	**/

		$("button.revealCode").on("click", function(e){
			e.preventDefault();

			var codeExampleHidden = $(".codeExample").hasClass("hidden");

			if (codeExampleHidden == true) {
				$(".codeExample").show().removeClass("hidden");
				$(".colourPalette").addClass("colourPaletteCodeVisible");	
			} else if (codeExampleHidden == false){
				$(".codeExample").hide().addClass("hidden");
				$(".colourPalette").removeClass("colourPaletteCodeVisible");	
			};	
		}); // end function on click of code button

	/* / end functions on code reveal button  */

}); // doc ready