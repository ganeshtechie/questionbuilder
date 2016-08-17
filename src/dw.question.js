(function() {

    $.fn.radiobutton = function(options) {
        this.wrap("<div class='choices'></div>");
        this.find("input[type='radio']").attr("name", options.name);
    };

    $.fn.checkbox = function(options) {
        this.wrap("<div class='choices'></div>");
        this.find("input[type='checkbox']").attr("name", options.name);
    };

    $.fn.questiontoolset = function() {

        return this.each(function(i, e) {

            var edit_button = $(e).find("[data-action='edit']"),
                delete_button = $(e).find("[data-action='delete']"),
                moveup_button = $(e).find("[data-action='moveup']"),
                movedown_button = $(e).find("[data-action='movedown']");


            edit_button.click(editQuestion);
            delete_button.click(deleteQuestion);
            moveup_button.click(moveUpQuestion);
            movedown_button.click(moveDownQuestion);

        });

        //methods
        function getQuestionId(element) {

            var toolset = $(element).closest("[data-role='toolset']");

            var questionId = toolset.closest("[data-name='question']").data("id");

            return questionId;
        }

        function triggerEvent(element, eventName, args) {
            $(element).closest("[data-role='toolset']")
                .trigger(eventName, args);
        }

        // behaviours
        function editQuestion(event, args) {
            var questionId = getQuestionId(this);
            $(this).closest("[data-role='toggle-view']").trigger("toggle", [{
                questionid: questionId
            }]);
        }

        function deleteQuestion(event, args) {
            var questionId = getQuestionId(this);
            triggerEvent(this, "dw.question.delete", [{
                questionId: questionId
            }]);
        }

        function moveUpQuestion(event, args) {
            var questionId = getQuestionId(this);
            triggerEvent(this, "dw.question.moveup", [{
                questionId: questionId
            }]);
        }

        function moveDownQuestion(event, args) {
            var questionId = getQuestionId(this);
            triggerEvent(this, "dw.question.movedown", [{
                questionId: questionId
            }]);
        }

    };

    $.fn.toolset_insert = function() {

    };

    $.fn.question = function() {

        this.each(function(i, e) {

            var questionid = $(e).data("id");

            $(e).find("[data-role='radio']").radiobutton({
                name: "question" + questionid
            });

            $(e).find("[data-role='checkbox']").checkbox({
                name: "question" + questionid
            });

            $(e).find("[data-role='toolset']").questiontoolset({});

        });

    };

    $.fn.toggleview = function() {

        return this.each(function(i, e) {

            $(e).find('[data-role="edit-section"]').addClass("hide");

            $(e).on("toggle", function() {
                if ($(this).find('[data-role="edit-section"]').has(".hide")) {
                    $(this).find('[data-role="edit-section"]').removeClass("hide");
                    $(this).find('[data-role="preview-section"]').addClass("hide");
                } else {
                    $(this).find('[data-role="preview-section"]').removeClass("hide");
                    $(this).find('[data-role="edit-section"]').addClass("hide");
                }
            });

        });

    };


    $.widget("blender.assessmentbuilder", {

        _init: function() {

            this.element.find("[data-role='toggle-view']").toggleview();

            this.element.find("[data-name='question']").question();

        },

        _create: function() {



        }

    });


    $("#datawizard").assessmentbuilder();

})();
