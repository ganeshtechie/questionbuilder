(function(){
	
	"use strict";

	$.widget("dw.assessmentbuilderbase", {

        options: {},

        _create: function(){

            this.options = $.extend($.dw.base_configurations, this.options);

        }


    });

})();