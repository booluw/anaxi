/*
	ANAXI ...... the way links are mearnt to be.
		  ...... style that link the anaxi way.
	
	Made with <3 and Brackets.io by Boluwatife Johnson.
	
	Anaxi v 1.0.1 | (c) 2018 Boluwatife Johnson
	MIT License
	Description:
		Anaxi made for beautiful anchor link animation.
	Bundles(supported designs):
		------- Underline
		------- Overline
		------- bg //Not currently supported
	Color(supported colors):
		------- Blue   #
		------- Gold   #
		------- Red	   #
		------- Purple #
		------- Orange #
		------- White  #
	Type(suppported transform path):
		------- open
		------- close
	
*/
(function ($) {
	"use strict";
	var defaults = {
		bundle: "underline",
		color: "blue",
		type: "open"
	};
	$.fn.anaxi = function(options) {
		var options = $.extend( {bundle: defaults.bundle,color: defaults.color,type: defaults.type}, options);
		var anaxiColor = ''; // The color of the anaxiType (color)
		var anaxiBundle = ''; // specifies the type of anaxi anime to use [options: close,open] (bundle)
		var anaxiType = ''; // specifies the position of the anaxi anime. [options: bottom,top] (position)
		switch (options.bundle) {
			case "underline":
			case "bottom":
				anaxi_underline();
				break;
			case 'overline':
			case 'top':
				anaxi_overline();
				break;
			case 'bg':
				anaxi_bg();
		}
		/* Individual function to to set anaxiBundle */
		function anaxi_underline (){
			anaxiBundle = 'anaxi-underline';
		}
		function anaxi_overline (){
			anaxiBundle = 'anaxi-overline';
		}
		function anaxi_bg (){
			//anaxiBundle = 'anaxi-bg';
			console.log('Please note that the Bundle: bg is currently not supported.');
		}
		/* End of individual funtion. Now switching to set anaxiColor. Identification is done via css*/
		switch (options.color) {
				case 'blue':
				case 'Blue':
					anaxiColor = 'anaxi-blue';
					break;
				case 'red':
				case 'Red':
					anaxiColor = 'anaxi-red';
					break;
				case 'gold':
				case 'Gold':
					anaxiColor = 'anaxi-gold';
					break;
				case 'purple':
				case 'Purple':
					anaxiColor = 'anaxi-purple';
					break;
				case 'orange':
				case 'Orange':
					anaxiColor = 'anaxi-orange';
					break;
				case 'white':
				case 'White':
					anaxiColor = 'anaxi-white';
			}
		/* End of switching for anaxiColor. Now anaxiType.*/
		switch (options.type) {
			case 'open':
			case 'Open':
			case 'OPEN':
				anaxiType = 'anaxi-open';
				break;
			case 'close':
			case 'Close':
			case 'CLOSE':
				anaxiType = 'anaxi-close';
				break;
		}
		return this.addClass('anaxi').addClass(anaxiBundle).addClass(anaxiColor).addClass(anaxiType); // To support chaining
	};
}(jQuery));
