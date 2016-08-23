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

            // choices
            add_more_choice: "yes",
            max_no_of_chocies: 10
        },


        _create: function() {

            this.options = $.extend({}, $.dw.base_configurations, this.options);

            this._bind();

        },

        _hideScore: function() {
            var isScoringEnabled = this.options.scoring;

            if (this.options.data) {}

            if (this.options.scoring === "no") {
                this.element.find(this.options.selectors.scoringSection).hide();
            } else {
                this.options.data.scoringAt = this.options.data.scoringAt || this.options.scoring_at[0].value;
                this.element.find("[data-name='scoring-method']").val(this.options.data.scoringAt).trigger("change");
            }
        },


        _hideTags: function() {
            var $this = this;

            if (this.options.tagging === "no") {
                this.element.find(this.options.selectors.taggingSection).hide();
            } else {

                var element = this.element.find("[data-name='tags']")[0];

                this.tag = new Choices(element, {
                    placeholder: true,
                    placeholdervalue: "Type the tag name and press 'Enter'"
                }).ajax(function(callback) {

                    var source = _.map($this.options.tags, function(tag) {
                        return {
                            title: tag
                        };
                    });

                    callback(source, "title", "title");
                });
            }
        },


        _init: function() {

            this.element.html("");

            // create a default object if the data has not be passed; and when ever the ui changes, update this data object
            // hence we need not have to create lot of private variables in the "this" 
            this.options.data = this.options.data || {};

            var html = window.dw.templates.questioneditor(this.options);

            this.element.html(html);

            // Scoring Section 
            if (this.options.scoring === "no") {
                this.element.find(this.options.selectors.scoringSection).hide();
            } else {
                this.options.data.scoringAt = this.options.data.scoringAt || this.options.scoring_at[0].value;
                this.element.find("[data-name='scoring-method']").val(this.options.data.scoringAt).trigger("change");

                this.element.find("[name='rhetorical-question']").prop("checked", this.options.data.rhetorical);
            }

            this._hideTags();

            if (this.options.data && this.options.data.choiceType)
                this.element.find("[data-name='choice-types']").val(this.options.data.choiceType).trigger("change");

            this._bindData();
        },


        _bind: function() {

            this._on(this.element, {

                'change [data-name="choice-types"]': this._onchoiceTypeChanges,

                'click [data-name="save-question"]': this._saveQuestion,

                'change [data-name="scoring-method"]': this._onScoringAtChanges,

                'click [data-name="cancel-question"]': this._cancelChanges,

                'click [name="rhetorical-question"]': this._markQuestionAsRhetorical

            });

        },

        _markQuestionAsRhetorical: function(event){
            
            this.options.data.rhetorical = $(event.target).is(":checked");
        },

        _cancelChanges: function(event) {
            event.preventDefault();

            this._trigger("savequestioncancelled", this);

        },

        _onScoringAtChanges: function(event) {

            var value = $(event.target).val();

            this.options.data.scoringAt = value;

            if (value === "choice") {
                this.element.find("[data-section='question-scoring']").hide();
            } else if (value === "question") {
                this.element.find("[data-section='question-scoring']").show();
                this.element.find(this.options.selectors.questionScore).val(this.options.default_score);
            }
/*
            var previousState = null;

            var pluginName = this.element.find(this.options.selectors.choiceSection).data("pluginName");

            if (pluginName) {
                previousState = this.element.find(this.options.selectors.choiceSection).data(pluginName).val();
            }
*/
            if (this.options.data)
                this.element.find(this.options.selectors.choiceTypes).val(this.options.data.choiceType);

            this.element.find(this.options.selectors.choiceTypes).trigger("change");
        },

        _onchoiceTypeChanges: function(event, args) {

            if(this.options.data.choiceType !== $(event.target).val()){
                this.options.data.choice = null;
            }

            this.options.data.choiceType = $(event.target).val();

            var choice = this.element.find(this.options.selectors.choiceSection);

            var pluginName = choice.data("pluginName");

            if (pluginName && choice.data(pluginName))
                choice.data(pluginName).destroy();

            choice.data("value", this.options.data.choice);

            var enableScoringForChoice = "";

            enableScoringForChoice = (this.options.data.scoringAt === "choice") ? "yes" : "no";

            var settings = null;

            var isValidScoringItem = function(itemName) {
                return _.findIndex(this.options.scoring_at, {
                    value: itemName
                }) >= 0;
            }.bind(this);


            switch (this.options.data.choiceType) {
                case "checkbox":
                    settings = {
                        name: "qbCheckbox",
                        add_more_choice: this.options.add_more_choice,
                        max_no_of_chocies: this.options.max_no_of_chocies,
                        scoring: enableScoringForChoice
                    };
                    this.choice = choice.qbCheckbox(settings).data("qbCheckbox");
                    break;
                case "radiobutton":
                    settings = {
                        name: "qbRadiobutton",
                        add_more_choice: this.options.add_more_choice,
                        max_no_of_chocies: this.options.max_no_of_chocies,
                        scoring: enableScoringForChoice
                    };

                    this.choice = choice.qbRadiobutton(settings).data("qbRadiobutton");
                    break;
                case "singleline":
                    settings = {
                        fieldformat: "number",
                        maximumlength: 10,
                        id: 1
                    };
                    this.choice = choice.qbSingleLine(settings).data("qbSingleLine");
                    break;
                default:
                    settings = {
                        fieldformat: "freetext",
                        maximumlength: 10,
                        id: 1
                    };
                    this.choice = choice.qbMultiLine(settings).data("qbMultiLine");
                    break;
            }

        },


        _saveQuestion: function() {

            var question = {};

            question.id = this.options.data ? this.options.data.id : 1;

            question.required = this.element.find("[data-name='required']").is(":checked");
            question.randomizeChoice = this.element.find("[data-name='shuffle']").is(":checked");
            question.title = this.element.find("[data-name='title']").val();
            question.choiceType = this.element.find("[data-name='choice-types']").val();

            if (this.options.scoring === "yes") {
                // "scoringMethod" value should be retrieved from the new ui control that we are going to add later
                question.scoringAt = this.options.data.scoringAt;
                question.score = question.scoringAt === "question" ?
                    parseInt(this.element.find("[data-name='question-score']").val() || 0) : null;
            }

            question.rhetorical = this.options.data.rhetorical;


            var choice = this.choice.val();

            if (choice instanceof Error) { /* show this error in the page  */
                return;
            } else {
                question.choice = choice;
            }

            if (this.options.tagging === "yes")
                question.tags = this.tag.getValue(true);

            console.group("Question Builder Result"); /* RemoveLogging:skip */
            console.log(question); /* RemoveLogging:skip */
            console.groupEnd("Question Builder Result"); /* RemoveLogging:skip */

            this._trigger("savequestion", this, {
                data: question
            });

            //this.element.closest("[data-role='toggle']").data("dwToggle").toggle();
        },



        _bindData: function() {

            if (this.options.data) {

                var question = this.options.data,
                    selectors = this.options.selectors;

                //this.element.find(selectors.choiceSection).data("value", question.choices);

                this.element.find(selectors.questionTitle).val(question.title);

                if (question.scoringAt)
                    this.element.find(selectors.scoringMethod).val(question.scoringAt).trigger("change");

                this.element.find(selectors.choiceTypes).val(question.choiceType).trigger("change");

                if (question.scoringAt === "question") {
                    this.element.find(selectors.questionScore).val(question.score);
                }

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
            "id": 1,
            "title": "Hey there",
            "scoringAt": "question",
            "randomizeChoices": 1,
            "score": 10,
            "required": 1,
            "tags": [
                "depression",
                "anxitey"
            ],
            "choiceType": "radiobutton",
            "choices": [{
                "id": 1,
                "title": "<p>Hello</p>",
                "score": 10,
                "correct": true
            }, {
                "id": 2,
                "title": "<p>World</p>",
                "score": 10,
                "correct": false
            }, {
                "id": 3,
                "title": "<p>Hey there!</p>",
                "score": 10,
                "correct": true
            }]
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
