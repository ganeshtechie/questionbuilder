(function() {

    "use strict";

    var html = window.dw.templates.initial_setup({}),

        state = $.ab.state;

    $.widget("dw.initialstep", {

        options: {


        },

        _create: function() {

            this._bind();

            this.datasource = state;

        },

        _init: function() {

			this.element.html(html);

            this.element.find("[data-name='assessment-title']").val(this.datasource.title);

            this.element.find("[data-name='assessment-description']").val(this.datasource.description);

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

            this.datasource.title = value;

        },

        _onDescriptionChanged: function(event){
			var value = $(event.target).val();
            this.datasource.description = value;
        },

        _feedbackMessageChanged: function(event){
        	var value = $(event.target).val();
        }

    });

})();
