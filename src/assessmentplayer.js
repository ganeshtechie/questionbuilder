(function() {

    "use strict";


    $.widget("dw.assessmentplayer", {

        options: {

            datasource: []

        },


        _create: function() {
            this._bind();
            // 1. Render your questions
            this._render();
            // 2. initialize all the widgets
            this.element.find("[data-choice-type='checkbox']").dwplay_checkbox();
            this.element.find("[data-choice-type='radiobutton']").dwplay_radiobutton();
            this.element.find("[data-choice-type='singleline']").dwplay_singleline();

        },

        _bind: function() {

            this._on(this.element, {
                "click [data-action='submit']": this._submitResponse
            });
        },

        _getHtml: function(question) {

            var html = "";

            if (question.type === "radiobutton") {
                html = window.dw.templates.play_radiobutton(question);
            } else if (question.type === "checkbox") {
                html = window.dw.templates.play_checkboxes(question);
            } else if (question.type === "singleline") {
                html = window.dw.templates.play_singleline(question);
            }
            html = "<li>" + html + "</li>";
            return html;
        },

        _render: function() {
            for (var i = 0; i < this.options.datasource.length; i++) {
                this.element.find("[data-name='question-list']").append(this._getHtml(this.options.datasource[i]));
            }
        },

        _getAllResponses: function() {

            var questions = this.element.find("[data-name='play-question']"),
                responses = [];

            questions.each(function() {

                var questionId = parseInt($(this).data("qid"));

                if ($(this).data("value"))
                    responses.push({
                        questionId: questionId,
                        responses: $(this).data("value")
                    });
            });
            return responses;
        },

        _submitResponse: function() {
            var responses = this._getAllResponses();

            console.group("Submiting Response"); /*Removelogging:skip*/
            console.log(responses); /*Removelogging:skip*/
            console.groupEnd("Submiting Response"); /*Removelogging:skip*/
        }


    });


    $("#questionbuilder").assessmentplayer({
        datasource: [{
            title: "Remove the default list-style and left margin on list items (immediate children only). This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well.",
            id: 1,
            type: "radiobutton",
            choices: [{
                id: 1,
                title: "Yes"
            }, {
                id: 2,
                title: "No"
            }]
        }, {
            title: "Remove the default list-style and left margin on list items (immediate children only). This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well.",
            id: 2,
            type: "checkbox",
            choices: [{
                id: 1,
                title: "Yes"
            }, {
                id: 2,
                title: "No"
            }]
        }, {
            title: "Remove the default list-style and left margin on list items (immediate children only). This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well.",
            id: 3,
            type: "singleline",
            format: "plaintext",
            choices: [{
                id: 1,
                title: ""
            }]
        }]
    });


})();
