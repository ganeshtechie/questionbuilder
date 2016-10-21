(function() {
    "use strict";

    $.fn.dwplay_singleline = function(element, options) {

        this.each(function() {

            $(this).find(".form-control").on("change", function() {

                var value = $(this).val();

                var closestContainer = $(this).closest("[data-name='play-question']");

                closestContainer.data("value", {
                    text: value
                });

            });
        });
    };

    $.fn.dwplay_multiline = function(element, options) {
        this.each(function() {

            $(this).find(".form-control").on("change", function() {

                var value = $(this).val();

                var closestContainer = $(this).closest("[data-name='play-question']");

                closestContainer.data("value", {
                    text: value
                });

            });
        });
    };

    $.fn.dwplay_checkbox = function(element, options) {

        var selector = {
            PLAY_QUESTION: "[data-name='play-question']"
        };

        this.each(function() {

            var $this = $(this);

            // preselected choice is when, the choice is already selected, those choice id 
            // has to be added in the dom
            var preselectedChoices = $this.find(".clickable:checked");

            var preselectedChoiceId = _.map(preselectedChoices, function(e) {
                return parseInt($(e).val());
            });

            $this.closest(selector.PLAY_QUESTION).data("value", {
                selectedChoices: preselectedChoiceId
            });


            $this.on("click", function(event) {

                event.stopPropagation();

                if (!$(event.target).is(".clickable")) return;

                var closestContainer = $(event.target).closest(selector.PLAY_QUESTION);

                var choiceId = parseInt($(event.target).closest("[data-choice-item]").data("value"));

                var value = closestContainer.data("value") || {};

                value.selectedChoices = value.selectedChoices || [];

                if ($(event.target).closest("[data-choice-item]").find(".clickable").is(":checked")) {
                    value.selectedChoices.push(choiceId);
                } else {
                    _.remove(value.selectedChoices, function(id) {
                        return id === choiceId;
                    });
                }

                closestContainer.data("value", value);

            });

        });

    };

    $.fn.dwplay_radiobutton = function(element, options) {

        this.each(function() {

            var $this = $(this);

            $this.on("click", "input[type='radio']", function(event) {

                if (!$(event.target).is(".clickable")) return;

                var closestContainer = $(event.target).closest("[data-name='play-question']");

                var choiceId = parseInt($(event.target).closest("[data-choice-item]").data("value"));

                var value = closestContainer.data("value") || {};

                value.selectedChoices = [choiceId];

                closestContainer.data("value", value);

            });
        });
    };


})();
