(function() {

    $("body").on("keydown keyup", "textarea", function() {

        if (this.clientHeight < this.scrollHeight) $(this).height(this.scrollHeight);

    });

    $.widget("dw.questionbuilder", {

        choiceType: "",

        options: {

            data: null,

            selectors: {

                choiceSection: '[data-section="choice"]',
                scoringSection: '[data-section="scoring"]',
                taggingSection: '[data-section="tagging"]',

                choiceTypes: '[data-name="choice-types"]',
                questionScore: '[data-name="question-score"]',
                questionTitle: '[data-name="title"]',
                scoringMethod: '[data-name="scoring-method"]',

                required: '[data-name="required"]',
                shuffle: '[data-name="shuffle"]'

            },


            allowed_choice_types: [
                { title: "Multiple Choice", value: "checkbox" },
                { title: "Single Choice", value: "radiobutton" },
                { title: "Single Line", value: "singleline" },
                { title: "Multie Line", value: "multiline" },
            ],

            // scoring 
            scoring: "yes",
            default_scoring_method: "choice",
            default_score: 1, // not used
            allowed_scoring_methods: [{ title: "Question", value: "question" }, { title: "Choice", value: "choice" }],

            // tags
            tagging: "yes",
            tags: ["depression", "anxitey", "fear"],

            // choices
            add_more_choice: "yes",
            max_no_of_chocies: 10
        },


        _create: function() {
            this._bind();
        },

        _hideScore: function() {

            var isScoringMethodIsQuestion = _.find(this.options.allowed_scoring_methods, { value: "question" });

            if (this.options.scoring === "no" || !isScoringMethodIsQuestion) {
                this.element.find(this.options.selectors.scoringSection).hide();
            } else {
                this.scoringMethod = this.options.default_scoring_method;
                this.element.find("[data-name='scoring-method']").val(this.scoringMethod).trigger("change");
            }
        },


        _hideTags: function() {
            var $this = this;

            if (this.options.allow_tagging_questions === "no") {
                this.element.find(this.options.selectors.taggingSection).hide();
            } else {

                var element = this.element.find("[data-name='tags']")[0];

                this.tag = new Choices(element, {
                    placeholder: true,
                    placeholdervalue: "Type the tag name and press 'Enter'"
                }).ajax(function(callback) {

                    var source = _.map($this.options.tags, function(tag) {
                        return { title: tag };
                    });

                    callback(source, "title", "title");
                });
            }
        },


        _init: function() {

            this.element.html("");

            var html = window.dw.templates.questioneditor(this.options);

            this.element.html(html);

            this._hideScore();

            this._hideTags();

            this.element.find("[data-name='choice-types']").trigger("change");

            this._bindData();
        },




        _bind: function() {

            this._on(this.element, {

                'change [data-name="choice-types"]': this._onchoiceTypeChanges,

                'click [data-name="save-question"]': this._saveQuestion,

                'change [data-name="scoring-method"]': this._onScoringMethodChanges

            });

        },

        _onScoringMethodChanges: function(event) {

            var value = $(event.target).val();

            this.scoringMethod = value;

            if (value === "choice") {
                this.element.find("[data-section='question-scoring']").hide();
            } else if (value === "question") {
                this.element.find("[data-section='question-scoring']").show();
            }

            this.element.find(this.options.selectors.questionScore).val("");


            var previousState = null;

            var pluginName = this.element.find(this.options.selectors.choiceSection).data("pluginName");

            if (pluginName) {

                previousState = this.element.find(this.options.selectors.choiceSection).data(pluginName).val();

            }

            this.element.find(this.options.selectors.choiceTypes).trigger("change", { value: previousState });
        },

        _onchoiceTypeChanges: function(event, args) {

            this.choiceType = $(event.target).val();

            var choice = this.element.find(this.options.selectors.choiceSection);

            var pluginName = choice.data("pluginName");


            if (pluginName && choice.data(pluginName))
                choice.data(pluginName).destroy();

            if (args) choice.data("value", args.value);

            var settings = {
                name: "qbCheckbox",
                add_more_choice: this.options.add_more_choice,
                max_no_of_chocies: this.options.max_no_of_chocies,
                enable_score: (this.scoringMethod === "choice" && this.options.scoring === "yes") ? "yes" : "no",
                persist_value: true
            };

            switch (this.choiceType) {
                case "checkbox":
                    this.choice = choice.qbCheckbox(settings).data("qbCheckbox");
                    break;
                case "radiobutton":
                    this.choice = choice.qbRadiobutton(settings).data("qbRadiobutton");
                    break;
                case "singleline":
                    this.choice = choice.qbSingleLine(settings).data("qbSingleLine");
                    break;
                default:
                    break;
            }

        },


        _saveQuestion: function() {

            var question = {};

            question.id = this.options.data ? this.options.data.id : 1;

            question.required = this.element.find("[data-name='required']").is(":checked");
            question.randomizeChoice = this.element.find("[data-name='shuffle']").is(":checked");
            question.title = this.element.find("[data-name='title']").val();
            question.type = this.element.find("[data-name='choice-types']").val();

            if (this.options.scoring === "yes") {
                // "scoringMethod" value should be retrieved from the new ui control that we are going to add later
                question.scoringMethod = this.scoringMethod;
                question.score = question.scoringMethod === "question" ?
                    parseInt(this.element.find("[data-name='question-score']").val() || 0) : null;
            }


            var choice = this.choice.val();

            if (choice instanceof Error) { /* show this error in the page  */
                return;
            } else { question.choices = choice; }

            if (this.options.tagging === "yes")
                question.tags = this.tag.getValue(true);

            console.log(question);

            this._trigger("savequestion", this, { data: question });

            //this.element.closest("[data-role='toggle']").data("dwToggle").toggle();
        },

        _bindData: function() {

            if (this.options.data) {

                var question = this.options.data,
                    selectors = this.options.selectors;

                //this.element.find(selectors.choiceSection).data("value", question.choices);

                this.element.find(selectors.questionTitle).val(question.title);

                this.element.find(selectors.scoringMethod).val(question.scoringMethod).trigger("change");

                this.element.find(selectors.choiceTypes).val(question.type).trigger("change", { value: question.choices });

                if (question.scoringMethod === "question")
                    this.element.find(selectors.questionScore).val(question.score);

                if (question.tags && question.tags.length > 0) {
                    // set the tags
                }

                this.element.find(selectors.required).prop("checked", question.required);
                this.element.find(selectors.shuffle).prop("checked", question.randomizeChoice);



            }

        }


    });

    $("[data-section='question-edit']").questionbuilder({
        data: {
            "type": "radiobutton",
            "title": "Sample Question",
            "id": 2,
            "scoringMethod": "choice",
            "choices": [{ "id": 1, "title": "Yes", "score": 10 }, { "id": 2, "title": "No", "score": 0 }],
            "edit": true
        }
    });


    /*

        $("[data-section='question-edit']").questionbuilder({
            data: {
                title: "Sample Question",
                type: "checkbox",
                scoringMethod: "choice",
                score: 10,
                choices: [{ id: 1, title: "simple question", score: 10 }, { id: 2, title: "test 2", score: 20 }],
                randomizeChoice: false,
                tags: [],
                required: false
            }
        });
    */
    //$("[data-action='edit']").on("click", function () {

    //    $(this).closest("[data-role='toggle']").data("dwToggle").toggle();


    //});

    //$("[data-role='toggle']").dwToggle();


})();
