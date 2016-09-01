(function() {

    "use strict";

    var html = window.dw.templates.initial_setup({});

    $.widget("dw.initialstep", {

        options: {


        },

        _create: function() {



        },

        _init: function() {

			this.element.html(html);

        },


        _bind: function(){

        	this._on(this.element, {

        		"change [data-name='assessment-title']": this._onTitleChanged,

        		"change [data-name='assessment-description']": this._onDescriptionChanged,

        		"change [data-name='feedback-message']": this._feedbackMessageChanged

        	});

        },

        _onTitleChanged: function(event){
        	var value = $(event.target).val();
        },

        _onDescriptionChanged: function(event){
			var value = $(event.target).val();
        },

        _feedbackMessageChanged: function(event){
        	var value = $(event.target).val();
        }

    });

})();
