(function() {


    $.widget("dw.shell", {


        options: {

            title: "Health Assessment", // wizard title

            description: "A Basic health assessment", // wizard description

            // load the different plugins based on the question types needed for the wizard
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

            minimum_no_of_questions_required: 1, // specifies the minimum no of questions required. Default is "1"

            maximum_no_of_questions_allowed: 10, // specifies the maximum allowed question. Default is "10"

            scoring: "yes", // "yes" if scoring is required, else "no"; this also enables the section to passing score, feedback, scoring method

            default_score: 1, // default score for each question

            negative_score: "yes", // enables the ui to enter negative scores 

            import_questions: "yes", // allows the author to import questions from other sources like an existing wizard / a default template

            /* if "yes" by default the required option will be checked and readonly. if no, it will be unchecked and readonly. leave it as null ( default ) to allow the author 
             * to decide on that.
             */
            all_mandatory_questions: "yes",

            repeat: "custom", // enables options to allow the author to choose the value for repeat / also accepts an integer value that represents the no of retakes

            tagging: "yes", // enables the ui to tag questions with the given tags

            tags: ["depression", "anxiety"], // tags which can be added to a question

            allowed_scoring_methods: [{
                title: "Question",
                value: "question"
            }, {
                title: "Choice",
                value: "choice"
            }], // enables the ui to add scores either on question / choices

            default_scoring_method: "question",

            /* only the allowed options will be enabled in the UI. leave it as empty to allow all the possible options
             * like "edit", "delete", "insert", "move"
             */
            allowed_options: ["edit", "delete"],

            // this is a default question which will appear when user clicks on insert button
            default_question: "{0}) Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey.",

            default_choice: "Untitled Choice {0}",

            datasource: [],

            // if "yes", a feedback message will be shown to the user after completing the assessment
            feedback: "yes",

            // if feedback option is enabled, this messgae will be used to show the feedback.
            feedback_message: "Thank you for participating!"

        },

        datasource: [],

        _create: function() {

            this.options = $.extend($.dw.base_configurations, this.options);

            this.datasource = this.options.datasource;

            this._bind();

            var html = window.dw.templates.shell({
                title: this.options.title,
                description: this.options.description
            });

            this.element.append(html);

            if (this.options.datasource.length === 0)
                this._initialSetup();
            else
                this._bindData();

            if (this.options.feedback === "no")
                this.element.find("[data-section='feedback']").hide();
            else
                this.element.find("[data-name='feedback-message']").val(this.options.feedback_message);



            this.reload();

        },

        _getNewQuestion: function(choiceType) {
            var question = window.questionFactory(choiceType, this.options);
            return question;
        },

        _initialSetup: function() {
            var html = "";
            var question = this._getNewQuestion(this.options.default_choice_type);
            this.datasource.push(question);
            html = window.renderEngine(question);
            //this.element.append(html);
            this._addQuestion(html);
        },

        // initialize all your plugins here
        reload: function() {
            this.element.find("[data-role='toggle']").dwToggle();
            this.element.find("[data-section='body']").arrangeActionButtons();
            this.element.find("[data-role='singleline-question']").basicInput();
        },

        // in edit mode, present the data at first
        _bindData: function() {
            var html = "";
            for (var i = 0; i < this.datasource.length; i++) {
                html += window.renderEngine(this.datasource[i]);
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

                "click [data-action='save']": this._save,

                "click [data-action='save-as-draft']": this._saveAsDraft,

                "click [data-action='cancel']": this._cancel,

                "click [data-action='feedback']": this._feedback,

                "click [data-action='save-feedback']": this._saveFeedback,

                "questionbuildersavequestion  [data-container='edit']": this._onQuestionSaved,

                "questionbuildersavequestioncancelled [data-container='edit']": this._onQuestionEditCancelled

            });

        },

        _feedback: function(element) {

            var section = $(element.target).closest("[data-section='feedback']");

            var feedbackArea = section.find("[data-section='feedback-form']");

            feedbackArea.show();


        },

        _saveFeedback: function(element) {

            var feedbackform = $(element.target).closest("[data-section='feedback-form']");

            var feedbackMessage = feedbackform.find("[data-name='feedback-message']").val();

            this.options.feedback_message = feedbackMessage;

            feedbackform.hide();

        },

        _save: function() {

            $(window).trigger("assessment:save", {
                data: this.datasource
            });

        },

        _saveAsDraft: function() {},

        _cancel: function() {},

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

                var html = window.renderEngine(question);
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

                var html = window.renderEngine(question);
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

            if (this.options.maximum_no_of_questions_allowed <= this.datasource.length) return;

            var $element = $(event.target);

            var questionId = this._getQuestionId($element);

            var index = _.findIndex(this.datasource, {
                id: questionId
            });

            var question = this._getNewQuestion(this.options.default_choice_type);

            question.id = this._getNewQuestionId();

            // Push the question in the specified index.
            this.datasource.splice(index + 1, 0, question);

            var html = window.renderEngine(question);

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

            var html = window.renderEngine(question);

            var questionToReplace = this.element.find("[data-name='question-shell'][data-qid='" + question.id + "']");

            questionToReplace.replaceWith($(html));

            this.reload();

        },

        _replaceWithNewView: function(question) {

            var index = _.findIndex(this.datasource, _.find(this.datasource, {
                id: question.id
            }));

            this.datasource.splice(index, 1, question);

            var html = window.renderEngine(question);

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
            /*
                        var config = _.pick(this.options, ["allowed_choice_types",
                            "scoring", "default_score",
                            "allowed_scoring_methods",
                            "default_scoring_method",
                            "tagging", "tags",
                            "default_choice"
                        ]);
            */

            var config = {};

            config.data = JSON.parse(JSON.stringify(question));

            editView.find("[data-container='edit']").questionbuilder(config);

            toggler.data("dwToggle").toggle();
        },

        _addQuestion: function(html) {
            this.element.find("[data-section='body']").append(html);
        }

    });

    $("[data-role='shell']").shell({

        scoring: "yes",

        allowed_scoring_methods: [{
            title: "Choice Level",
            value: "choice"
        }],

        default_scoring_method: "choice",

        tagging: "yes",

        tags: ["hello", "world"],

        allowed_choice_types: [{
            title: "Radio Buttons",
            value: "radiobutton"
        }, {
            title: "Textbox",
            value: "singleline"
        }],

        default_choice_type: "radiobutton",

        feedback: "yes",

        feedback_message: "Thank you for participating",

        default_choice: "Untitled Choice - {0}"
            //maximum_no_of_questions_allowed: 3,
            /*
            datasource: [{
                "id": 3,
                "required": true,
                "randomizeChoice": true,
                "title": "Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey.",
                "type": "singleline",
                "scoringMethod": "question",
                "score": 1,
                "choices": { "id": 1, "fieldformat": "Free Text", "maximumlength": 120 },
                "tags": ["anxiety"]
            }, {
                "id": 1,
                "required": false,
                "randomizeChoice": false,
                "title": "Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey.",
                "type": "radiobutton",
                "scoringMethod": "question",
                "score": null,
                "choices": [{ "score": 10, "correct": false, "title": "Yes222", "id": 1 }, { "score": 0, "correct": false, "title": "No3333", "id": 2 }],
                "tags": ["depression"]
            }, {
                "type": "radiobutton",
                "title": "Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey.",
                "id": 2,
                "scoringMethod": "question",
                "choices": [{ "id": 1, "title": "Yes", "score": 10 }, { "id": 2, "title": "No", "score": 0 }],
                "edit": false
            }]*/

    });

    $(window).on("assessment:save", function(event, args) {



    });


})();
