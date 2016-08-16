(function(){
	
	"use strict";

	$.fn.arrangeActionButtons = function(){

		var first = this.find("[data-name='question-shell']:first"),
			last = this.find("[data-name='question-shell']:last");

			console.log(first);console.log(last);

			first.find("[data-action='moveup']").closest("li").hide();
			last.find("[data-action='movedown']").closest("li").hide();




	};

})();