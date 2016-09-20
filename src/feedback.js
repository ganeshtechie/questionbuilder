(function() {

    "use strict";

    var template = window.dw.templates.feedback({}),
        state = $.ab.state;


    var gradeItemHtml = "<li data-role='list-item' data-name='{name}'>" +
        "<div>" +
        "<a data-action='edit-feedback' >{name} {default} {score} <span class='glyphicon glyphicon-trash' data-action='delete-grade' aria-hidden='true'></span></a>" +
        "<p>{feedback}</p>" +
        "</div>" +
        "</li>";

    var grade = {
        name: "Untitled",
        isDefault: true,
        score: 0,
        feedback: "Your default message"
    };


    $.widget("dw.feedback", $.dw.assessmentbuilderbase, {

        _options: {

        },

        currentGrade: null,

        datasource: {},

        _create: function() {
            this._super();

            // linking the state and datascore object
            this.datasource = state.feedback;

            this.element.html(template);

            // if no scoring, then the feedback for each grade is not applicable.
            // just show the simple method
            if (!this.options.scoring_configuration) {
                this.datasource.feedbackMethod = "simple";
                this.element.find("[data-name='feedback-method']").find("option[value='custom']").remove();
            }

            this._bind();

            var that = this;



            this._syncUIwithStateObject();

        },

        _pushDefaultGrade: function() {
            var that = this;

            this.datasource.grade = this.datasource.grade || [];

            if (this.datasource.grade.length === 0) {

                this.datasource.grade.push($.extend({}, grade, {
                    isDefault: true
                }));

            }

            $(this.datasource.grade).each(function(i, e) {
                that._addGradeToUI(e);
            });

        },

        _syncUIwithStateObject: function() {

            this.element.find("[data-name='feedback-method']").val(this.datasource.feedbackMethod);
            this._showFeedbackForm(this.datasource.feedbackMethod);
            // by this time, the form will be ready
        },

        _bind: function() {

            this._on(this.element, {

                "click [data-action='add-feedback']": this._onAddFeedbackClicked,

                "click [data-action='edit-feedback']": this._onEditClicked,

                "click [data-action='clear-form']": this._clearForm,

                "click [data-action='delete-grade']": this._onDeleteClicked,

                "change [data-name='feedback-method']": this._onFeedbackMethodChanged,

                "change [data-name='feedback-message']": this._onFeedbackChanged

            });

        },

        _onFeedbackChanged: function(event) {
            event.preventDefault();

            this.datasource.feedbackMessage = $(event.target).val();

        },

        _onFeedbackMethodChanged: function(event) {
            event.preventDefault();

            var feedbackMethod = $(event.target).val();

            this._showFeedbackForm(feedbackMethod);

        },

        _showFeedbackForm: function(feedbackMethod) {

            feedbackMethod = feedbackMethod || this.element.find("[data-name='feedback-method']").val();

            this.datasource.feedbackMethod = feedbackMethod;

            //this.datasource.feedback = this.datasource.feedback || {};

            //this.datasource.feedback.feedbackMethod = feedbackMethod;

            this.element.find("[data-section='feedback-form']").addClass("hide");

            if (this.datasource.feedbackMethod === "simple") {
                // show the textarea
                this.element.find("[data-section='feedback-form'][data-form-name='simple']").removeClass("hide");
                this.element.find("[data-name='feedback-message']").val(this.datasource.feedbackMessage);

            } else if (this.datasource.feedbackMethod === "custom") {
                // show the grading options
                this._pushDefaultGrade();
                this.element.find("[data-section='feedback-form'][data-form-name='custom']").removeClass("hide");
            }

        },

        getGradeItemHtml: function(grade) {

            var defaultText = grade.isDefault === true ? "(default)" : "";
            var score = grade.isDefault === true ? "" : " >= " + grade.score;

            return gradeItemHtml.replace(/\{name\}/g, grade.name).replace(/\{score\}/g, score).replace(/\{feedback\}/g, grade.feedback).replace(/\{default\}/g, defaultText);

        },

        _onDeleteClicked: function(event) {
            event.preventDefault();

            if (event.target.tagName !== "SPAN") return;

            var gradeName = $(event.target).closest("[data-role='list-item']").data("name");

            this._deleteGrade(gradeName);

        },

        _deleteGrade: function(gradeName) {

            if (!gradeName) return;

            var item = _.find(this.datasource.grade, {
                name: gradeName
            });

            if (item.isDefault) {
                alert("Default grade cannot be deleted. But you can change the grade name & feedback message if needed");
                return;
            }

            var index = _.findIndex(this.datasource.grade, item);

            // remove the grade from datasource, if it is not default grade
            this.datasource.grade.splice(index, 1);

            this._removeGradeFromUI(gradeName);


        },

        _removeGradeFromUI: function(gradeName) {

            this.element.find("[data-role='list-item'][data-name='{0}']".replace(/\{0\}/g, gradeName)).remove();

        },

        _clearForm: function(event) {
            event.preventDefault();

            this._clear();

        },

        _onEditClicked: function(event) {
            event.preventDefault();

            if (event.target.tagName !== "A") return;



            var name = $(event.target).closest("[data-role='list-item']").attr("data-name");

            var obj = _.find(this.datasource.grade, {
                name: name
            });

            this._fillForm(obj);
        },

        _fillForm: function(obj) {

            this.currentGrade = obj;

            this.element.find("[data-name='score']").prop("disabled", obj.isDefault);

            this.element.find("[data-name='grade-name']").val(obj.name);

            this.element.find("[data-name='score']").val(obj.score);

            this.element.find("[data-name='feedback']").val(obj.feedback);

            this.element.find("[data-action='add-feedback']").text("Save");

        },

        /* "name" if passed, it will find the element and replace it with new object */
        _addGradeToUI: function(obj, name) {

            var list = this.element.find("[data-name='grade-list']");

            var selector = "[data-name='{name}']".replace(/\{name\}/, name || obj.name);

            var element = this.element.find(selector);

            var newElement = $(this.getGradeItemHtml(obj));

            if (element.length > 0) {
                //var isDefault = _.find(this.datasource.grade, { name: obj.name }).isDefault;
                element.replaceWith(newElement);

            } else {
                list.append(newElement);
            }

        },

        _onAddFeedbackClicked: function(event) {
            event.preventDefault();

            var text = $(event.target).text();

            this._addFeedback();

        },

        _addFeedback: function() {

            var name = this.element.find("[data-name='grade-name']").val();

            var _grade = {
                name: name,
                score: parseInt(this.element.find("[data-name='score']").val()),
                feedback: this.element.find("[data-name='feedback']").val(),
                isDefault: false
            };

            // isDefault property must not be changed
            var isDefault = false;

            // If it is an edit, we need to find the actual name of the grade which is being edited.
            // because the user might have edited the name of the grade also.
            name = this.currentGrade ? this.currentGrade.name : name;

            var matchFound = _.find(this.datasource.grade, {
                name: name
            });
            if (matchFound) _grade.isDefault = isDefault = matchFound.isDefault;

            if (isDefault) delete _grade.score;

            this._updateDataSource(_grade);
        },

        _updateFeedback: function() {

            var _grade = $.extend({}, this.currentGrade, {
                name: this.element.find("[data-name='grade-name']").val(),
                score: parseInt(this.element.find("[data-name='score']").val()),
                feedback: this.element.find("[data-name='feedback']").val()
            });

        },


        _updateDataSource: function(_grade) {

            var errors = this._validate(_grade),
                index, matchFound;

            if (errors.length > 0) return;

            if (this.currentGrade) {
                index = _.findIndex(this.datasource.grade, _.find(this.datasource.grade, {
                    name: this.currentGrade.name
                }));
                if (index > -1) {
                    this.datasource.grade[index] = _grade;
                    this._addGradeToUI(_grade, this.currentGrade.name);
                }
            } else {
                // though, it is not edit, which means this.currentGrade is null, chances for performing an edit is possible.
                //  because, he may try to add a new grade with an exisiting name. 
                //  in this case we are not throwing any error message, but we are updating the exisiting grade with the new score and feedback
                matchFound = _.find(this.datasource.grade, {
                    name: _grade.name
                });
                index = matchFound ? _.findIndex(this.datasource.grade, matchFound) : -1;
                if (index > -1) {
                    this.datasource.grade[index] = _grade;
                    this._addGradeToUI(_grade, _grade.name);
                } else {
                    this.datasource.grade.push(_grade);
                    this._addGradeToUI(_grade);
                }

            }

            this._clear();
        },

        _clear: function() {
            this.currentGrade = null;
            this.element.find("[data-action='add-feedback']").text("Add");
            this.element.find("[data-name='grade-name']").val("");
            this.element.find("[data-name='score']").val("");
            this.element.find("[data-name='feedback']").val("");
            this.element.find("[data-name='score']").prop("disabled", false);
        },



        _validate: function(grade) {
            var errors = [];

            if (grade.isDefault === false && isNaN(grade.score)) errors.push("Score is invalid");

            if (!grade.feedback) errors.push("feedback must not be empty");


            return errors;

        }


    });

})();
