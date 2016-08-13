(function() {

    "use strict";

    var baseMethods = {

        deleteChoice: function(element) {

            var choiceContainer = $(element).closest("[data-role='choice-item']");
            var uniqueid = parseInt(choiceContainer.find('[data-name="uniqueid"]').val());

            choiceContainer.remove();

            _.remove(this.choices, function(c) {
                return c.id === uniqueid;
            });

            this.updateAddMoreChoice();

        },

        getChoiceObject: function() {

            var uniqueId = this.getNewChoiceId();

            var defaultScore = this.options.enable_score === "yes" ? this.options.default_score : null;

            var choiceObj = { id: uniqueId, title: "Untitled Choice " + uniqueId, score: defaultScore };

            return choiceObj;
        },

        addChoice: function() {

            var choiceObj = this.getChoiceObject();

            this.choices.push(choiceObj);

            var data = $.extend(this.getConfigForHTML(), choiceObj);

            var choice = this.options.templates.choice(data);

            this.choiceContainer.append(choice);

            this.updateAddMoreChoice();
        },

        getNewChoiceId: function() {

            if (this.choices.length === 0) return 1;

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

                var value, score, uniqueid, correct, choice = {};

                value = $(this).find("[data-name='choice']").val();

                uniqueid = parseInt($(this).find("[data-name='uniqueid']").val());

                if ($this.options.enable_score === "yes") {
                    score = $(this).find("[data-name='score']").val() === "" ? "" : parseInt($(this).find("[data-name='score']").val());
                    correct = $(this).find("[type='checkbox']").is(":checked");


                    choice.score = score;
                    choice.correct = correct;
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

            choiceHtml += this.options.templates.choice($.extend(this.getConfigForHTML(), choice));

            return choiceHtml;

        },

        updateAddMoreChoice: function() {

            if (this.options.max_no_of_chocies <= this.choices.length) {
                this.addMoreChoice.hide();
            } else {
                this.addMoreChoice.show();
            }

        },

        validate: function(choices) {

            var error = [];

            // #1 Choices must not be empty
            if (choices.length === 0) {
                error.push("Please enter your choices");
            } else if (this.options.min_no_of_choices > choices.length) {
                error.push("Minimum of " + this.options.min_no_of_choices.toString() + " choices is required");
            }

            var emptyChoices = choices.filter(function(i) {
                return i.title.trim() === "";
            });
            // #2 Choices must not have empty string
            if (emptyChoices.length > 0) {
                error.push("Choice must not be empty");
            }

            // #3 no of choices should not exceed the given count
            if (this.options.max_no_of_chocies < choices.length) {
                error.push("Maximum of " + 5 + " choices can be added for a question");
            }


            // #4 Scores must be a valid integer
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

            var pluginName = this.element.data("pluginName");

            // this will remove all the data attributes
            this.element.removeData([pluginName, "name", "value"]);

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
                enable_score: "yes",
                persist_value: true,
                default_score: 1
            };

            this.options = $.extend(defaults, options);

            // declaration
            this.choices = options.choices || [];
            this.element = element;
            this.element.append(this.options.templates.layout);
            this.addMoreChoice = this.element.find("[data-name='add-more-choice']");
            this.choiceContainer = this.element.find("[data-role='choice-list']");

            // execution
            // you can set the state of the plugin before initialzing, by setting the data-value property
            this.choices = element.data("value") || [];

            if (this.options.persist_value === false) element.removeData("value");

            if (this.choices.length === 0) {
                this.choices.push(this.getChoiceObject());
                this.choices.push(this.getChoiceObject());
            }

            // if default choices are provided, make it available in the UI for the user to modify
            for (var i = 0; i < this.choices.length; i++) {
                this.choiceContainer.append(this.getChoiceHtml(this.choices[i]));
            }


            this.element.on("click", "[data-role='delete-choice']", function(event) {
                event.preventDefault();
                $this.deleteChoice(this);
            });

            if (this.options.add_more_choice === "yes") {

                this.updateAddMoreChoice();

                this.addMoreChoice.click(function(event) {
                    event.preventDefault();
                    $this.addChoice();
                });

            } else if (this.options.add_more_choice === "no" || this.options.max_no_of_chocies === 1) {
                this.addMoreChoice.addClass("hide");
            }

            this.choiceContainer.sortable();

        };

        Checkbox.prototype = baseMethods;

        var Radiobutton = function(element, options) {

            var $this = this;

            var defaults = {
                templates: {
                    layout: '<div data-role="choice-list"></div><div><div><a data-name="add-more-choice">Add more choices</a></div></div>',
                    choice: window.dw.templates.radiobutton
                },
                min_no_of_choices: 2,
                add_more_choice: "yes",
                max_no_of_chocies: 4,
                enable_score: "yes",
                persist_value: true,
                default_score: 1
            };

            this.options = $.extend(defaults, options);

            // declaration
            this.choices = options.choices || [];
            this.element = element;
            this.element.append(this.options.templates.layout);
            this.addMoreChoice = this.element.find("[data-name='add-more-choice']");
            this.choiceContainer = this.element.find("[data-role='choice-list']");

            // execution
            // you can set the state of the plugin before initialzing, by setting the data-value property
            this.choices = element.data("value") || [];

            if (this.options.persist_value === false) element.removeData("value");

            if (this.choices.length === 0) {
                this.choices.push(this.getChoiceObject());
                this.choices.push(this.getChoiceObject());
            }

            // if default choices are provided, make it available in the UI for the user to modify
            for (var i = 0; i < this.choices.length; i++) {
                this.choiceContainer.append(this.getChoiceHtml(this.choices[i]));
            }


            this.element.on("click", "[data-role='delete-choice']", function(event) {
                event.preventDefault();
                $this.deleteChoice(this);
            });

            if (this.options.add_more_choice === "yes") {

                this.updateAddMoreChoice();

                this.addMoreChoice.click(function(event) {
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

                // return by doing nothing, if the plugin is already binded to the dom
                if (element.data("qbCheckbox")) {
                    return;
                }

                var checkbox = new Checkbox(element, options);

                element.data("pluginName", "qbCheckbox");
                element.data("qbCheckbox", checkbox); // this object can be further accessed to communicate to the plugin

            });

        };

        $.fn.qbRadiobutton = function(options) {

            return this.each(function() {

                var element = $(this);

                if (element.data("qbRadiobutton")) {
                    return;
                }

                var radiobutton = new Radiobutton(element, options);

                element.data("pluginName", "qbRadiobutton");

                element.data("qbRadiobutton", radiobutton);

            });

        };


    })();




// score, title, id, correct - are the properties

    $("#choices").qbRadiobutton({
        max_no_of_chocies: 4
    });


    $("#turnScoresOff").on("click", function() {

        var name = $("#choices").data("pluginName");

        var checkbox = $("#choices").data(name);

        checkbox.destroy();

        $("#choices").qbCheckbox({
            max_no_of_chocies: 4,
            enable_score: "no"
        });

        console.log(checkbox);

    });


    $("#getChoices").on("click", function() {

        var name = $("#choices").data("pluginName");

        var choices = $("#choices").data(name);

        var response = choices.val();

        if (response instanceof Error) {
            console.error(response);
        } else {
            console.log(response);
        }

    });


})();
