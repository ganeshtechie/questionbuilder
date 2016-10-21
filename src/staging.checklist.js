(function() {

    "use strict";

    var events = {
        submit: "assessment:submit_response"
    };


    $.widget("ab.checkliststaging", {

        options: {

            datasource: []

        },

        _create: function() {

            var template = "<div><h1>{0}</h1></div>".replace(/\{0\}/, this.options.title);

            template += '<ol data-name="question-list" data-obo-role="list" class="list-styled"></ol><div data-obo-role="nav"></div><div class="text-center"><button class="btn btn-primary" data-action="submit">Submit</button></div>';

            // use es6 to store the html
            this.element.html(template);

            this._bind();

            // 1. Render your questions
            this._render();

            // 2. initialize all the widgets
            this.element.find("[data-choice-type='checkbox']").dwplay_checkbox();

        },

        _bind: function() {
            this._on(this.element, {
                "click [data-action='submit']": this._submitResponse
            });
        },

        _getHtml: function(question) {

            var html = "";

            if (question.type === "checkbox") {
                html = window.dw.templates.play_checkboxes(question);
            }

            html = "<li data-obo-role='item'>" + html + "</li>";

            return html;

        },

        _render: function() {

            this.options.datasource.map(function(q) {

                q.id = parseInt(q.id);
                q.required = q.required === 'true';

                if (q.choice) {
                    q.choice.map(function(c) {

                        c.id = parseInt(c.id);

                    });
                }

            });

            for (var i = 0; i < this.options.datasource.length; i++) {
                this.element.find("[data-name='question-list']").append(this._getHtml(this.options.datasource[i]));
            }

        },

        _submitResponse: function(event) {
            event.preventDefault();

            var responses = this._getAllResponses();

            console.log(responses); /*Removelogging:skip*/

            $(this.element).trigger(events.submit, {
                data: responses
            });

        },

        _getAllResponses: function() {
            var questions = this.element.find("[data-name='play-question']"),
                responses = [];
            questions.each(function() {
                var questionId = parseInt($(this).data("qid"));
                if ($(this).data("value")) {
                    var response = $(this).data("value");
                    response = $.extend({
                        questionId: questionId
                    }, response);
                    responses.push(response);
                }
            });
            return responses;
        }

    });



})();
