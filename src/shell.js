(function() {

    var factory = window.assessmentbuilder.factory,
        state = $.ab.state;


    /* "shell" widget is responsible for adding / editing / deleting questions in an assessment. It only deals with te question part */
    $.widget("dw.shell", $.dw.assessmentbuilderbase, {


        options: {


            title: "", // assessment title

            description: "", // assessment description

            // load the different plugins based on the question types needed for the assessment
            allowed_choice_types: [{
                title: "Multiple Choice",
                value: "checkbox"
            }, {
                title: "Single Choice",
                value: "radiobutton"
            }, {
                title: "Single Line",
                value: "singleline"
            }, {
                title: "Multie Line",
                value: "multiline"
            }, ],

            // the default questions will be of this choice type. 
            default_choice_type: "checkbox",

            tagging: "yes", // enables the ui to tag questions with the given tags

            tags: ["depression", "anxiety"], // tags which can be added to a question


            /* only the allowed options will be enabled in the UI. leave it as empty to allow all the possible options
             * like "edit", "delete", "insert", "move"
             */
            allowed_options: ["edit", "delete"],

            // if "yes", a feedback message will be shown to the user after completing the assessment
            feedback: "yes",

            // if feedback option is enabled, this messgae will be used to show the feedback.
            feedback_message: "Thank you for participating!"

        },

        datasource: [],

        _create: function() {

            this._super();

            this.datasource = state.questions;

            /*// if the "title" & "description" is being passed, then take that value. 
            // there are scenarios where the state will be empty, when this "shell" widget is initialized
            state.title = this.options.title || state.title;
            state.description = this.options.description || state.description;*/

            // It think for now, lets goahead with the fact that, the shell widget is
            // will not be used all alone. It will be used with the initial setup widget
            // so no need to worry about the state object

            this.options.title = state.title;
            this.options.description = state.description;

            this._bind();

            var html = window.dw.templates.shell({
                title: this.options.title,
                description: this.options.description
            });

            this.element.append(html);

            if (this.datasource.length === 0)
                this._initialSetup();
            else
                this._bindData();

            this.reload();

        },

        _getNewQuestion: function(choiceType) {
            var question = factory.questionFactory(choiceType, this.options);
            return question;
        },

        _initialSetup: function() {
            var html = "";
            var question = this._getNewQuestion(this.options.default_choice_type);
            this.datasource.push(question);
            html = factory.renderEngine(question);
            this._addQuestion(html);
        },

        // initialize all your plugins here
        reload: function() {
            this.element.find("[data-role='toggle']").dwToggle();
            this.element.find("[data-section='body']").arrangeActionButtons();
            this.element.find("[data-role='singleline-question']").basicInput();
            this.element.find("[data-role='multiline-question']").basicInput();
        },

        // in edit mode, present the data at first
        _bindData: function() {
            var html = "";
            for (var i = 0; i < this.datasource.length; i++) {
                html += factory.renderEngine(this.datasource[i]);
            }
            this._addQuestion(html);
        },


        _init: function() {


        },


        _bind: function() {

            this._on(this.element, {

                "click [data-action='edit']": this._editQuestion,

                "click [data-action='insert']": this._insertQuestion,

                "click [data-action='delete']": this._deleteQuestion,

                "click [data-action='moveup']": this._moveUp,

                "click [data-action='movedown']": this._moveDown,

                "click [data-action='save']": this.save,

                "click [data-action='cancel']": this._cancel,

                "questionbuildersavequestion  [data-container='edit']": this._onQuestionSaved,

                "questionbuildersavequestioncancelled [data-container='edit']": this._onQuestionEditCancelled

            });

        },

        save: function(event) {
            event.preventDefault();

            /*            var assessment = {
                            title: this.options.title,
                            description: this.options.description,
                            questions: this.datasource,
                            retake: this._getRetakeLimit(),
                            feedbackMessage: this.options.feedback_message,
                        };

                        $.extend(assessment, this._getScoringMethod());*/

            $(window).trigger("assessmentbuilder:save", {
                data: $.ab.state
            });

        },

        _getScoringMethod: function() {

            if (this.options.scoring_configuration)
                return {
                    scoringMethod: this.element.find("[data-section='scoring-method'] [name='scoring-method']:checked").val()
                };
            else
                return {};

        },

        _getRetakeLimit: function() {
            var retakeLimit = this.options.retake_limit;

            if (this.options.enable_retake === "yes") {
                retakeLimit = this.element.find("[data-name='retake']").val();
            }

            return parseInt(retakeLimit);
        },

        _cancel: function(event) {
            event.preventDefault();

        },

        _moveUp: function(event) {
            event.preventDefault();

            var $element = $(event.target);
            var questionId = this._getQuestionId($element);

            var question = _.find(this.datasource, {
                "id": questionId
            });

            var index = _.findIndex(this.datasource, question);

            if (index > 0) {
                var previousQuestion = this.datasource[index - 1];

                this.datasource.splice(index, 1);
                this.datasource.splice(index - 1, 0, question);
                this._removeQuestionFromDOM(question);

                var questionDOM = this._getQuestionDOM(previousQuestion.id);

                var html = factory.renderEngine(question);
                html = $(html);
                html.insertBefore(questionDOM);

                this.reload();
            }

        },

        _removeQuestionFromDOM: function(question) {
            var questionselector = "[data-name='question-shell'][data-qid='{0}']";
            var questionDOM = this.element.find(questionselector.replace(/\{0\}/, question.id));
            questionDOM.remove();
        },



        _moveDown: function(event) {
            event.preventDefault();

            var $element = $(event.target);
            var questionId = this._getQuestionId($element);

            var question = _.find(this.datasource, {
                "id": questionId
            });


            var index = _.findIndex(this.datasource, question);

            if (index <= this.datasource.length - 2) {

                var nextQuestion = this.datasource[index + 1];

                this.datasource.splice(index, 1);

                this.datasource.splice(index + 1, 0, question);
                this._removeQuestionFromDOM(question);

                var questionDOM = this._getQuestionDOM(nextQuestion.id);

                var html = factory.renderEngine(question);
                html = $(html);
                html.insertAfter(questionDOM);
                this.reload();
            }

        },

        _editQuestion: function(event) {

            _.forEach(this.datasource, function(q) {
                q.edit = false;
            });

            var $element = $(event.target);

            var questionId = this._getQuestionId($element);

            var question = _.find(this.datasource, {
                "id": questionId
            });

            question.edit = true;

            this._prepareQuestionEditor($element);

        },

        _deleteQuestion: function(event) {

            if (this.datasource.length === 1) return;

            var $element = $(event.target);

            var questionId = this._getQuestionId($element);

            var question = _.remove(this.datasource, function(q) {
                return q.id === questionId;
            });

            var questions = this.element.find("[data-name='question-shell']");

            question = _.find(questions, function(obj) {
                return $(obj).data("qid") === questionId;
            });

            question.remove();

            this.reload();

        },

        _insertQuestion: function(event) {

            if (this.options.maximum_no_of_questions_allowed !== -1 &&
                this.options.maximum_no_of_questions_allowed <= this.datasource.length) return;

            var $element = $(event.target);

            var questionId = this._getQuestionId($element);

            var index = _.findIndex(this.datasource, {
                id: questionId
            });

            var question = this._getNewQuestion(this.options.default_choice_type);

            question.id = this._getNewQuestionId();

            // Push the question in the specified index.
            this.datasource.splice(index + 1, 0, question);

            var html = factory.renderEngine(question);

            html = $(html);

            var currentQuestion = this._getQuestionDOM(questionId);

            html.insertAfter(currentQuestion);

            this.reload();

        },

        _getQuestionDOM: function(questionId) {

            var currentQuestion = _.find(this.element.find("[data-name='question-shell']"), function(q) {
                return $(q).data("qid") === questionId;
            });

            return currentQuestion;
        },

        _getNewQuestionId: function() {

            var question = _.maxBy(this.datasource, function(q) {
                return q.id;
            });

            return question.id + 1;
        },


        _getQuestionId: function(element) {

            var container = element.closest("[data-container='question']");

            var questionId = parseInt(container.data("value"));

            return questionId;

        },

        _saveQuestion: function(event) {

            var $element = $(event.target);

            var editView = $element.closest("[data-role='toggle']").data("dwToggle").toggle();
        },

        _onQuestionSaved: function(event, args) {

            //_.forEach(this.datasource, function(q){ q.edit = false; });

            this._replaceWithNewView(args.data);
        },

        _onQuestionEditCancelled: function(event, args) {

            var question = _.find(this.datasource, {
                edit: true
            });

            //this.datasource.splice(index, 1, question);

            var html = factory.renderEngine(question);

            var questionToReplace = this.element.find("[data-name='question-shell'][data-qid='" + question.id + "']");

            questionToReplace.replaceWith($(html));

            this.reload();

        },

        _replaceWithNewView: function(question) {

            var index = _.findIndex(this.datasource, _.find(this.datasource, {
                id: question.id
            }));

            this.datasource.splice(index, 1, question);

            var html = factory.renderEngine(question);

            var questionToReplace = this.element.find("[data-name='question-shell'][data-qid='" + question.id + "']");

            questionToReplace.replaceWith($(html));

            this.reload();

        },

        _updateQuestion: function(html) {


        },

        _prepareQuestionEditor: function(element) {

            var question = _.find(this.datasource, "edit");

            var toggler = element.closest("[data-role='toggle']"),
                container = element.closest("[data-container='question']");
            var editView = toggler.find("[data-view]:last");

            var config = {};

            config.data = JSON.parse(JSON.stringify(question));

            editView.find("[data-container='edit']").questionbuilder(config);

            toggler.data("dwToggle").toggle();
        },

        _addQuestion: function(html) {
            this.element.find("[data-section='body']").append(html);
        }

    });





})();
