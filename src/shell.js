(function() {


    $.widget("dw.shell", {


        options: {

            title: "Health Assessment", // wizard title

            description: "A Basic health assessment", // wizard description

            // load the different plugins based on the question types needed for the wizard
            allowed_choice_types: [
                { title: "Multiple Choice", value: "checkbox" },
                { title: "Single Choice", value: "radiobutton" },
                { title: "Single Line", value: "singleline" },
                { title: "Multie Line", value: "multiline" },
            ],

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

            allowed_scoring_methods: [{ title: "Question", value: "question" }, { title: "Choice", value: "choice" }], // enables the ui to add scores either on question / choices

            default_scoring_method: "question",

            /* only the allowed options will be enabled in the UI. leave it as empty to allow all the possible options
             * like "edit", "delete", "insert", "move"
             */
            allowed_options: ["edit", "delete"],

            // this is a default question which will appear when user clicks on insert button
            default_question: "Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey.",

            datasource: []

        },


        datasource: [],

        _create: function() {

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

            this.reload();

        },

        _getNewQuestion: function(choiceType){
            var question = window.questionFactory(choiceType);
            question.title = this.options.default_question;
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

                "questionbuildersavequestion  [data-container='edit']": this._onQuestionSaved

            });

        },

        _save: function() {

            $(window).trigger("assessment:save", { data: this.datasource });

        },

        _saveAsDraft: function() {},

        _cancel: function() {},

        _moveUp: function(event){
            event.preventDefault();
            var $element = $(event.target);
            var questionId = this._getQuestionId($element);

        },

        _moveDown: function(event){
            event.preventDefault();
            var $element = $(event.target);
            var questionId = this._getQuestionId($element);
        },

        _editQuestion: function(event) {

            _.forEach(this.datasource, function(q) { q.edit = false; });

            var $element = $(event.target);

            var questionId = this._getQuestionId($element);

            var question = _.find(this.datasource, { "id": questionId });

            question.edit = true;

            this._prepareQuestionEditor($element);

        },

        _deleteQuestion: function(event) {

            if(this.datasource.length === 1) return;

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

            if(this.options.maximum_no_of_questions_allowed <= this.datasource.length) return;

            var $element = $(event.target);

            var questionId = this._getQuestionId($element);

            var index = _.findIndex(this.datasource, { id: questionId });

            var question = this._getNewQuestion(this.options.default_choice_type);

            question.id = this._getNewQuestionId();

            // Push the question in the specified index.
            this.datasource.splice(index + 1, 0, question);

            var html = window.renderEngine(question);

            html = $(html);

            var currentQuestion = _.find(this.element.find("[data-name='question-shell']"), function(q) {
                return $(q).data("qid") === questionId;
            });

            html.insertAfter(currentQuestion);

            this.reload();

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

            //_.forEach(this.datasource, function(q){ q.edit = false; });

            this._replaceWithNewView(args.data);
        },

        _replaceWithNewView: function(question) {

            var index = _.findIndex(this.datasource, _.find(this.datasource, { id: question.id }));

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

            console.log(question);

            var toggler = element.closest("[data-role='toggle']"),
                container = element.closest("[data-container='question']");
            var editView = toggler.find("[data-view]:last");

            var config = _.pick(this.options, ["allowed_choice_types", "scoring", "default_score", "allowed_scoring_methods", "default_scoring_method", "tagging", "tags"]);

            config.data = question;

            editView.find("[data-container='edit']").questionbuilder(config);

            toggler.data("dwToggle").toggle();
        },

        _addQuestion: function(html) {
            this.element.find("[data-section='body']").append(html);
        }

    });

    $("[data-role='shell']").shell({
        scoring: "yes",
        allowed_scoring_methods: [{ title: "Choice Level", value: "choice" }, { title: "Question Level", value: "question" }],
        allowed_choice_types: [{ title: "Radio Buttons", value: "radiobutton" }],
        default_choice_type: "radiobutton",
        maximum_no_of_questions_allowed: 3,
        datasource: [{ "id":1,"required":false,"randomizeChoice":false,"title":"Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey.","type":"radiobutton","scoringMethod":"choice","score":null,"choices":[{"score":10,"correct":false,"title":"Yes222","id":1},{"score":0,"correct":false,"title":"No3333","id":2}],"tags":["depression"]},{"type":"radiobutton","title":"Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey.","id":2,"scoringMethod":"choice","choices":[{"id":1,"title":"Yes","score":10},{"id":2,"title":"No","score":0}],"edit":false}],
    });

    $(window).on("assessment:save", function(event, args) {

        console.log(args);

    });


})();
