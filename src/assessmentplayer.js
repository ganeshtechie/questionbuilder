(function() {

    "use strict";


    $.widget("dw.assessmentplayer", {

        options: {

            datasource: []

        },



        _create: function() {

            // 1. Render your questions
            this._render();

            // 2. initialize all the widgets

            this.element.find("[data-choice-type='checkbox']").dwplay_checkbox();


        },

        _getHtml: function(question) {
        	
            var html = "";

            if(question.type === "radiobutton"){
                html = window.dw.templates.play_radiobutton(question);
            } else if(question.type === "checkbox"){
                html = window.dw.templates.play_checkboxes(question);
            }

            

            html = "<li>" + html + "</li>";

            return html;



        },


        _render: function() {

            for (var i = 0; i < this.options.datasource.length; i++) {

                this.element.find("[data-name='question-list']").append(this._getHtml(this.options.datasource[i]));

            }
        }



    });


    $("#questionbuilder").assessmentplayer({
        datasource: [{
            title: "Remove the default list-style and left margin on list items (immediate children only). This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well.",
            id: 1,
            type: "checkbox",
            choices: [{ id: 1, title: "Yes" }, { id: 2, title: "No" }]
        },{
            title: "Remove the default list-style and left margin on list items (immediate children only). This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well.",
            id: 1,
            type: "checkbox",
            choices: [{ id: 1, title: "Yes" }, { id: 2, title: "No" }]
        }]
    });


})();
