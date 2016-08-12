(function() {


    function reload() {
        $("[data-role='toggle']").dwToggle();
    }

    $.widget("dw.shell", {

        options: {

            title: "Health Assessment", // wizard title

            description: "A Basic health assessment", // wizard description

            allowed_choice_types: ["checkbox", "radiobutton", "textbox", "datepicker", "email", "integer", "richtext"], // load the different plugins based on the question types needed for the wizard

            default_question: "radiobutton",

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

            tags: ["depression", "anxiety" ], // tags which can be added to a question

            allowed_scoring_methods: ["choice", "question"], // enables the ui to add scores either on question / choices


            /* only the allowed options will be enabled in the UI. leave it as empty to allow all the possible options
             * like "edit", "delete", "insert", "move"
             */
            allowed_options: ["edit", "delete"]

        },


        datasource: [],

        _create: function() {

            this._bind();

            var html = window.dw.templates.shell({});

            var question = window.questionFactory(this.options.default_question);

            this.datasource.push(question);

            html += window.renderEngine(question);

            this.element.append(html);

            reload();

        },


        _init: function() {


        },


        _bind: function() {

            this._on(this.element, {

                "click [data-action='edit']": this._editQuestion,

                "click [data-action='insert']": this._insertQuestion,

                "click [data-action='delete']": this._deleteQuestion,

                "click [data-name='save-question']": this._saveQuestion,

                "questionbuildersavequestion  [data-container='edit']": this._onQuestionSaved

            });

        },

        _editQuestion: function(event) {

            _.forEach(this.datasource, function(q){ q.edit = false; });

            var $element = $(event.target);

            var questionId = this._getQuestionId($element);

            var question = _.find(this.datasource, { "id" : questionId });

            question.edit = true;

            this._prepareQuestionEditor($element);

        },

        _deleteQuestion: function(event) {

            var $element = $(event.target);

            var questionId = this._getQuestionId($element);

            var question = _.remove(this.datasource, function(q){  return q.id === questionId; });

            var questions = this.element.find("[data-name='question-shell']");

            question = _.find(questions, function(obj){  return $(obj).data("qid") === questionId; });

            question.remove();

        },

        _insertQuestion: function(event) {

            var $element = $(event.target);

            var questionId = this._getQuestionId($element);

            var index = _.findIndex(this.datasource, { id: questionId });

            var question = window.questionFactory(this.options.default_question);

            question.id = this._getNewQuestionId();

            // Push the question in the specified index.
            this.datasource.splice(index + 1, 0, question);

            var html = window.renderEngine(question);

            html = $(html);

            var currentQuestion = _.find(this.element.find("[data-name='question-shell']"), function(q){
                return $(q).data("qid") === questionId;
            });

            html.insertAfter(currentQuestion);

            reload();

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

            console.log(args.data);

            this._replaceWithNewView(args.data);
        },

        _replaceWithNewView: function(question) {

            var html = window.renderEngine(question);


            var questionToReplace = this.element.find("[data-name='question-shell'][data-qid='" + question.id + "']");

            questionToReplace.replaceWith($(html));

            reload();

        },


        _updateQuestion: function(html) {


        },


        _prepareQuestionEditor: function(element) {

            var question = _.find(this.datasource, "edit");

            console.log(question);

            var toggler = element.closest("[data-role='toggle']"),
                container = element.closest("[data-container='question']");
            var editView = toggler.find("[data-view]:last");

            var config = _.pick(this.options, [ "allowed_choice_types", "scoring", "default_score", "allowed_scoring_methods", "tagging", "tags" ]);

            console.log(config);

            config.data = question;

            editView.find("[data-container='edit']").questionbuilder(config);

            toggler.data("dwToggle").toggle();
        },



        _addNewQuestion: function() {

            var question = window.questionFactory("checkbox");

            var html = window.renderEngine(question);

            this.element.append(html);

            reload();

        }


    });

    $("[data-role='shell']").shell({});


})();
