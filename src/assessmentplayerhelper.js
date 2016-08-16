(function() {
    "use strict";

    $.fn.dwplay_checkbox = function(element, options) {

        this.each(function() {

            var $this = $(this);

            $this.on("click", function(event) {

                if(!$(event.target).is(".clickable")) return;

                var closestContainer = $(event.target).closest("[data-name='play-question']");

                var choiceId = parseInt ( $(event.target).closest("[data-choice-item]").data("value") );

                var value = closestContainer.data("value") || {};

                value.selectedChoices = value.selectedChoices || [];

                if ($(event.target).closest("[data-choice-item]").find("[type='checkbox']").is(":checked")) {
                    value.selectedChoices.push(choiceId);
                } else {
                    value.selectedChoices = _.remove(value.selectedChoices, function(id) { return id === choiceId; });
                }

                closestContainer.data("value", value);

            });


        });

    };


})();
