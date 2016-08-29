(function() {
    "use strict";
    var events = {
        submit: "assessment:submit_response"
    };
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
                if ($(this).data("value")) {
                    var response = $(this).data("value");
                    response = $.extend({
                        questionId: questionId
                    }, response);
                    responses.push(response);
                }
            });
            return responses;
        },
        _submitResponse: function() {
            var responses = this._getAllResponses(),
                preventSubmit = true,
                errors = this._validate(responses);

            if (errors.length > 0) {
                console.error(errors); /*Removelogging:skip*/
                preventSubmit = true;
            } else {
                var responseCount = responses.length,
                    questionsCount = this.options.datasource.length;
                if (responseCount < questionsCount) {
                    var message = "You've {0} unanswered question(s). Do you still want to proceed further ?".replace(/\{0\}/, (questionsCount - responseCount));
                    preventSubmit = !confirm(message);
                } else {
                    preventSubmit = false;
                }
            }
            if (!preventSubmit) {
                $(this.element).trigger(events.submit, {
                    data: responses
                });
            }
        },
        _validate: function(response) {
            var errors = [],
                errorMessaage = "Answer Requried";
            for (var i = 0; i < this.options.datasource.length; i++) {
                var question = this.options.datasource[i];
                if (question.required) {
                    var questionId = question.id;
                    var index = _.findIndex(response, {
                        "questionId": questionId
                    });
                    if (index < 0) {
                        errors.push({
                            questionId: questionId,
                            errorMessage: errorMessaage
                        });
                    } else {
                        var _response = response[index];
                        if (_response.selectedChoices) {
                            if (_response.selectedChoices.length === 0)
                                errors.push({
                                    questionId: questionId,
                                    errorMessage: errorMessaage
                                });
                        } else if (_response.text) {
                            var trimmedText = _response.text.trim();
                            trimmedText = $("<div>").html(trimmedText).text();
                            if (trimmedText === "")
                                errors.push({
                                    questionId: questionId,
                                    errorMessage: errorMessaage
                                });
                        }
                    }
                }
            }
            return errors;
        }
    });
    
})();
