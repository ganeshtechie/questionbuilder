(function() {

    "use strict";

    var baseMethods = {

        deleteChoice: function(element) {

            var choiceContainer = $(element).closest("[data-role='choice-item']");

            var uniqueid = parseInt(choiceContainer.find('[data-name="uniqueid"]').val());

            console.log(this.choices);

            _.remove(this.choices, function(c) {
                return c.id === uniqueid;
            });

            console.log(this.choices);

            choiceContainer.remove();

            this.updateAddMoreChoice();

        },

        addChoice: function() {

            var uniqueId = this.getNewChoiceId();

            var choiceObj = { id: uniqueId, choice: null, score: null };

            var data = $.extend(this.getConfigForHTML(), choiceObj);

            var choice = this.options.templates.choice(data);

            this.choiceContainer.append(choice);

            this.choices.push(choiceObj);

            this.updateAddMoreChoice();
        },

        getNewChoiceId: function() {

            var choice = _.maxBy(this.choices, "id");

            return choice.id + 1;
        },

        getConfigForHTML: function() {

            return {
                enable_scoring: this.options.enable_score === "yes"
            };

        },

        getChoices: function() {

            var choices = [],
                $this = this;

            this.choiceContainer.find("[data-role='choice-item']").each(function() {

                var value, score, uniqueid, choice = {};

                value = $(this).find("[data-name='choice']").val();

                uniqueid = parseInt($(this).find("[data-name='uniqueid']").val());

                if ($this.options.enable_score === "yes") {
                    score = $(this).find("[data-name='score']").val() === "" ? "" : parseInt($(this).find("[data-name='score']").val());

                    choice.score = score;
                }

                choice.title = value;
                choice.id = uniqueid;

                choices.push(choice);

            });

            return choices;

        },

        val: function() {

            var choices = this.getChoices(),
                errors = this.validate(choices);

            if (errors.length === 0) {

                return choices;

            } else {
                return new Error(errors);
            }


        },

        getChoiceHtml: function(choice) {

            var choiceHtml = "";

            if (typeof choice === "undefined") {
                for (var i = 0; i < this.options.min_no_of_choices; i++) {
                    choiceHtml += this.options.templates.choice($.extend(this.getConfigForHTML(), { id: i + 1 }));
                }
            } else {

                choiceHtml += this.options.templates.choice($.extend(this.getConfigForHTML(), choice));
            }


            return choiceHtml;

        },

        updateAddMoreChoice: function() {

            if (this.options.max_no_of_chocies === this.choices.length ||
                this.options.max_no_of_chocies === this.element.find("[data-role='choice-item']").length) {
                this.addMoreChoice.hide();
            } else {
                this.addMoreChoice.show();
            }

        },

        validate: function(choices) {

            var error = [];

            if (choices.length === 0) {
                error.push("Please enter your choices");
            } else if (this.options.min_no_of_choices > choices.length) {
                error.push("Minimum of " + this.options.min_no_of_choices.toString() + " choices is required");
            }

            var emptyChoices = choices.filter(function(i) {
                return i.title.trim() === "";
            });

            if (emptyChoices.length > 0) {
                error.push("Choice must not be empty");
            }


            if (this.options.max_no_of_chocies < choices.length) {
                error.push("Maximum of " + 5 + " choices can be added for a question");
            }


            if (this.options.enable_score === "yes") {
                for (var i = 0; i < choices.length; i++) {
                    var score = choices[i].score;

                    if (score === "" || score === undefined || score === null) {
                        error.push("Please enter the score");
                        break;
                    }
                    if (isNaN(score)) {
                        error.push("Score must be an integer");
                        break;
                    }
                }
            }

            return error;

        },

        destroy: function() {

            this.element.html("");

            // this will remove all the data attributes
            this.element.removeData([this.options.name, "name"]);

        }

    };

    (function() {


        var Checkbox = function(element, options) {

            var $this = this;

            var defaults = {

                templates: {

                    layout: '<div data-role="choice-list"></div><div><div><a data-name="add-more-choice">Add more choices</a></div></div>',

                    choice: window.dw.templates.checkboxes
                },
                min_no_of_choices: 2,
                add_more_choice: "yes",
                max_no_of_chocies: 4,
                enable_score: "yes"

            };

            // declaration
            this.choices = options.choices || [];


            this.element = element;

            this.options = $.extend(defaults, options);

            this.element.append(this.options.templates.layout);

            this.addMoreChoice = this.element.find("[data-name='add-more-choice']");

            this.choiceContainer = this.element.find("[data-role='choice-list']");


            // execution
            if (this.choices.length === 0)
                this.choiceContainer.append(this.getChoiceHtml());

            // if default choices are provided, render those choices in the screen
            for (var i = 0; i < this.choices.length; i++) {
                this.choiceContainer.append(this.getChoiceHtml(this.choices[i]));
            }

            this.element.on("click", "[data-role='delete-choice']", function(event) {
                event.preventDefault();
                $this.deleteChoice(this);
            });

            if (this.options.add_more_choice === "yes") {

                this.updateAddMoreChoice();

                this.addMoreChoice.click(function() {
                    event.preventDefault();
                    $this.addChoice();
                });

            } else if (this.options.add_more_choice === "no" || this.options.max_no_of_chocies === 1) {
                this.addMoreChoice.addClass("hide");
            }

            this.choiceContainer.sortable();

        };

        Checkbox.prototype = baseMethods;

        var Radiobutton = function ( element, options ) {

            var $this = this;

            var defaults = {

                templates: {

                    layout: '<div data-role="choice-list"></div><div><div><a data-name="add-more-choice">Add more choices</a></div></div>',

                    choice: window.dw.templates.radiobutton
                },
                min_no_of_choices: 2,
                add_more_choice: "yes",
                max_no_of_chocies: 4,
                enable_score: "yes"

            };

            // declaration
            this.choices = options.choices || [];

            this.element = element;

            this.options = $.extend(defaults, options);

            this.element.append(this.options.templates.layout);

            this.addMoreChoice = this.element.find("[data-name='add-more-choice']");

            this.choiceContainer = this.element.find("[data-role='choice-list']");


            // execution
            if (this.choices.length === 0)
                this.choiceContainer.append(this.getChoiceHtml());

            // if default choices are provided, render those choices in the screen
            for (var i = 0; i < this.choices.length; i++) {
                this.choiceContainer.append(this.getChoiceHtml(this.choices[i]));
            }

            this.element.on("click", "[data-role='delete-choice']", function(event) {
                event.preventDefault();
                $this.deleteChoice(this);
            });

            if (this.options.add_more_choice === "yes") {

                this.updateAddMoreChoice();

                this.addMoreChoice.click(function() {
                    event.preventDefault();
                    $this.addChoice();
                });

            } else if (this.options.add_more_choice === "no" || this.options.max_no_of_chocies === 1) {
                this.addMoreChoice.addClass("hide");
            }

            this.choiceContainer.sortable();

        };

        Radiobutton.prototype = baseMethods;


        $.fn.qbCheckbox = function(options) {

            return this.each(function() {

                var element = $(this);

                if (element.data(options.name)) {
                    return;
                }

                options.choices = element.data("value") || null;


                var questionBuilder = new Checkbox(element, options);

                element.data("name", options.name);

                element.data(options.name, questionBuilder);

            });

        };

        $.fn.qbRadiobutton = function(options) {

            return this.each(function() {

                var element = $(this);

                if (element.data(options.name)) {
                    return;
                }

                options.choices = element.data("value") || null;


                var questionBuilder = new Radiobutton(element, options);

                element.data("name", options.name);

                element.data(options.name, questionBuilder);

            });

        };

        




    })();












    /*
    $("#choices").qbCheckbox({
        max_no_of_chocies: 4,
        add_more_choice: "yes",
        choices: JSON.parse('[{"value":"test344","score":3,"uniqueid": 1},{"value":"tes 33","score":33,"uniqueid":2}]')
    });


    $("#getChoices").on("click", function () {

        var choices = $("#choices").data("qbCheckbox");

        var response = choices.val();

        if (response instanceof Error) {
            console.error(response);
        } else {
            console.log(response);
        }

    });

    */

})();
