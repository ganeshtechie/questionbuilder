(function() {

    "use strict";

    $.fn.arrangeActionButtons = function() {

        console.log("rearranging...");

        var first = this.find("[data-name='question-shell']:first"),
            last = this.find("[data-name='question-shell']:last");

        this.find("[data-name='question-shell']").each(function() {
            $(this).find("[data-action]").each(function() {
                $(this).closest("li").show();
            });
        });


        first.find("[data-action='moveup']").closest("li").hide();
        last.find("[data-action='movedown']").closest("li").hide();




    };

})();
