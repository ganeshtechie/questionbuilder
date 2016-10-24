(function() {

    "use strict";


    var factory = window.assessmentbuilder.factory;

    var defaults = {
        templates: {
            layout: '<div data-role="choice-list"></div><div><div class="add-choice"><a data-name="add-more-choice">Add more choices</a></div></div>',
            choice: window.dw.templates.checkboxes
        },
        min_no_of_choices: 2,
        add_more_choice: "yes",
        max_no_of_chocies: 4,
        scoring: "yes",
        persist_value: true,
        unique_id: 1 // mostly it will be the question id, which is used to add in the name of the input elements for grouping
    };


    var Checkbox = function(element, options) {

        var $this = this;

        this.options = $.extend({}, defaults, $.dw.base_configurations, options);

        this.options.data = this.options.data || [];

        // declaration
        this.options.data = options.choices || [];
        this.element = element;
        this.element.append(this.options.templates.layout);
        this.addMoreChoice = this.element.find("[data-name='add-more-choice']");
        this.choiceContainer = this.element.find("[data-role='choice-list']");

        // execution
        // you can set the state of the plugin before initialzing, by setting the data-value property
        this.options.data = element.data("value") || [];


        if (this.options.persist_value === false) element.removeData("value");

        if (this.options.data.length === 0) {
            this.options.data.push(this.getChoiceObject());
            this.options.data.push(this.getChoiceObject());
        }

        // if default choices are provided, make it available in the UI for the user to modify
        for (var i = 0; i < this.options.data.length; i++) {

            var choiceHTML = $(this.getChoiceHtml(this.options.data[i]));

            var title = this.options.data[i].title;

            this.choiceContainer.append(choiceHTML);

            choiceHTML.find("[data-name='choicetext']").val(title);


            if (this.options.data[i].correct === true)
                choiceHTML.find("input[type='checkbox']").prop("checked", true);

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

        this.element.find("[data-role='editor']").jqxEditor({
            tools: 'bold italic underline | format font size | color background | left center right'
        });


        var items = this.element.find("[data-role='choice-item']");


        items.map(function(i, e) {

            var title = $(e).find("[data-name='choicetext']").val();

            $(e).find("[data-role='editor']").val(title);

        });


        this.choiceContainer.sortable();

    };

    Checkbox.prototype = {

        deleteChoice: function(element) {

            var choiceContainer = $(element).closest("[data-role='choice-item']");
            var uniqueid = parseInt(choiceContainer.find('[data-name="uniqueid"]').val());

            choiceContainer.remove();

            _.remove(this.options.data, function(c) {
                return c.id === uniqueid;
            });

            this.updateAddMoreChoice();

        },

        getChoiceObject: function() {

            var uniqueId = this.getNewChoiceId();

            var choice = factory.getChoiceFactory("radiobutton", $.extend({}, this.options, {
                scoring: this.options.scoring
            }), [uniqueId])[0];

            return choice;
        },

        addChoice: function() {

            var choiceObj = this.getChoiceObject();

            this.options.data.push(choiceObj);

            var data = $.extend(this.getConfigForHTML(), choiceObj);

            var choice = this.options.templates.choice(data);

            this.choiceContainer.append(choice);

            this.element.find("[data-role='editor']").jqxEditor({
                tools: 'bold italic underline | format font size | color background | left center right'
            });

            this.updateAddMoreChoice();
        },

        getNewChoiceId: function() {

            if (this.options.data.length === 0) return 1;

            var choice = _.maxBy(this.options.data, "id");

            return choice.id + 1;
        },

        getConfigForHTML: function() {

            return {
                enable_scoring: this.options.scoring === "yes",
                unique_id: this.options.unique_id
            };

        },

        getChoices: function() {

            var choices = [],
                $this = this;

            this.choiceContainer.find("[data-role='choice-item']").each(function() {

                var value, score = null,
                    uniqueid, correct, choice = {};

                value = $(this).find("[data-name='choice']").val();

                uniqueid = parseInt($(this).find("[data-name='uniqueid']").val());

                correct = $(this).find("[type='checkbox']").is(":checked");
                choice.correct = correct;

                if ($this.options.scoring === "yes") {
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

            var data = $.extend(this.getConfigForHTML(), choice);

            choiceHtml += this.options.templates.choice(data);

            return choiceHtml;

        },

        updateAddMoreChoice: function() {

            if (this.options.max_no_of_chocies <= this.options.data.length) {
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
            if (this.options.scoring === "yes") {
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

    var PluginInit = function(pluginName, options) {

        this.name = pluginName;
        this.options = options;

        var that = this;

        this.init = function() {

            var element = $(this);

            // return by doing nothing, if the plugin is already binded to the dom
            if (element.data(that.name)) {
                return;
            }

            var checkbox = new Checkbox(element, that.options);

            element.data("pluginName", that.name);
            element.data(that.name, checkbox); // this object can be further accessed to communicate to the plugin
        };

    };


    $.fn.qbCheckbox = function(options) {

        var object = new PluginInit("qbCheckbox", options);

        return this.each(object.init);

    };

    $.fn.qbRadiobutton = function(options) {

        var object = new PluginInit("qbRadiobutton", options);

        return this.each(object.init);

    };





})();
