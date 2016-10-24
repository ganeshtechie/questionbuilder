(function() {
    if (typeof define === "function" && define.amd) {
        define(["handlebars"], function(Handlebars) {
            this["dw"] = this["dw"] || {};
            this["dw"]["templates"] = this["dw"]["templates"] || {};

            this["dw"]["templates"]["checkboxes"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data) {
                    var helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "        <input title=\"Mark this as answer\" class=\"checkbox-custom\" id=\"question" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" name=\"question" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" type=\"checkbox\">\n        <label id=\"text\" class=\"checkbox-custom-label\" for=\"question" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\"> </label>\n";
                },
                "3": function(container, depth0, helpers, partials, data) {
                    var helper;

                    return "        <label>Score</label>\n        <input type=\"number\" data-name=\"score\" placeholder=\"Enter the score\" value=\"" +
                        container.escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
                            "name": "score",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" class=\"form-control\" /> \n";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {};

                    return "<div data-role=\"choice-item\" class=\"ui-state-default\">\n    <div class=\"form-group form-inline\">\n        <input type=\"hidden\" data-name=\"uniqueid\" value=\"" +
                        container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" />\n        <input type=\"hidden\" data-name=\"choicetext\" />\n\n" +
                        ((stack1 = helpers["if"].call(alias1, (depth0 != null ? depth0.enable_scoring : depth0), {
                            "name": "if",
                            "hash": {},
                            "fn": container.program(1, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        "        \n        <span class=\"input input--hoshi active\">\n            <div data-role=\"editor\" data-name='choice' contenteditable=\"true\" class=\"input__field input__field--hoshi jqx-widget jqx-editor-inline\" data-placeholder=\"Type your choice here\"></div>\n            <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"> </label>\n        </span>\n\n" +
                        ((stack1 = helpers["if"].call(alias1, (depth0 != null ? depth0.enable_scoring : depth0), {
                            "name": "if",
                            "hash": {},
                            "fn": container.program(3, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        "		\n		<a data-role=\"delete-choice\" title=\"Delete Option\"><i class=\"fa fa-close\" aria-hidden=\"true\"></i></a>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["feedback"] = Handlebars.template({
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    return "<div>\n    <h1>Feedback System</h1>\n    <p>Configure the feeback message that you want to show to the participants</p>\n    <hr />\n    <div class=\"form-group\">\n        <div class=\"form-group\">\n            <label>Feedback Method</label>\n            <select data-name=\"feedback-method\" class=\"form-control\">\n                <option value=\"simple\">Simple</option>\n                <option value=\"custom\">Custom</option>\n                <!--<option value=\"grouped\">Grouped</option>-->\n            </select>\n        </div>\n    </div>\n    <hr />\n    <div class=\"form-group\" data-section='feedback-form' data-form-name='simple'>\n        <textarea rows=\"3\" class=\"form-control\" data-name=\"feedback-message\" placeholder=\"Type the feedback message...\"></textarea>\n    </div>\n    <div data-section=\"feedback-form\" data-form-name='custom'>\n        <div class=\"form-group\">\n            <ul data-name=\"grade-list\"> </ul>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" data-name=\"grade-name\" placeholder=\"Grade\" /> </div>\n            <div class=\"form-group\">\n                <span>Score >=</span>\n                <input type=\"number\" class=\"form-control\" data-name=\"score\" placeholder=\"Type the score required to get this grade\" /> </div>\n            <div class=\"form-group\">\n                <textarea class=\"form-control\" data-name=\"feedback\" placeholder=\"Type your feedback for this grade\"></textarea>\n            </div>\n            <div>\n                <button class=\"btn btn-primary\" data-action=\"add-feedback\">Add</button>\n                <button class=\"btn btn-primary\" data-action=\"clear-form\">Cancel</button>\n            </div>\n        </div>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["initial_setup"] = Handlebars.template({
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    return "<div data-role=\"initial-setup\">\n   \n        <span class=\"input input--hoshi\">\n            <input data-name=\"assessment-title\" class=\"input__field input__field--hoshi\" type=\"text\" id=\"input-4\" data-placeholder=\"Title\">\n            <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"input-4\">\n            </label>\n        </span>\n  \n    \n        <span class=\"input input--hoshi\">\n            <div data-role=\"editor\" data-name=\"assessment-description\" class=\"input__field input__field--hoshi jqx-widget jqx-editor-inline\" contenteditable=\"true\" data-placeholder=\"Enter your description\" id=\"input-4\"></div>\n            <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"input-4\"> </label>\n        </span>\n  \n    <div class=\"form-group\" data-section=\"retake\">\n        <label>Retake Limit</label>\n        <div>\n       <input class=\"checkbox-custom\" id=\"checkbox-1\" type=\"checkbox\">\n       <label id=\"text\" class=\"checkbox-custom-label\" for=\"checkbox-1\">Infinite</label>\n       <input class=\"checkbox-custom\" id=\"checkbox-2\" type=\"checkbox\">\n       <label id=\"text\" class=\"checkbox-custom-label\" for=\"checkbox-2\">none</label>\n       <span class=\"retake-limit\">\n            <label>Enter the Limit:</label> <input type=\"number\" class=\"form-control\" data-name=\"retake\" placeholder=\"Enter the retake limit for this assessment\"> \n            </span>\n    </div>\n    </div>\n    <div class=\"form-group form-inline\">\n        <p>How you want to present your questions to the participant?</p>\n        <div>\n            <p>\n             <input class=\"radio-custom\" name=\"staging-method\" value=\"one-by-one\" id=\"checkbox-3\" type=\"radio\">\n       <label id=\"text\" class=\"radio-custom-label\" for=\"checkbox-3\">Show only one question at once</label>\n      </p>\n        </div>\n        <div>\n            <p>\n             <input class=\"radio-custom\" name=\"staging-method\" value=\"all-at-once\" id=\"checkbox-4\" type=\"radio\">\n       <label id=\"text\" class=\"radio-custom-label\" for=\"checkbox-4\">Show all questions in the same page</label>\n        </div>\n    </div>\n    <div data-section=\"scoring-method\">\n        <div class=\"form-group\">\n            <label>Scoring Method</label>\n                    <input class=\"radio-custom\" name=\"staging-method\" value=\"any\" id=\"checkbox-5\" type=\"radio\">\n       <label title=\"Full score will be given for a question, on selecting any one correct choice\" id=\"text\" class=\"radio-custom-label\" for=\"checkbox-5\">Any</label>              \n                    <input class=\"radio-custom\" name=\"staging-method\" value=\"divide\" id=\"checkbox-6\" type=\"radio\">\n       <label title=\"Scores will be divided based on the no.of.correct choices, the user selects for a question\" id=\"text\" class=\"radio-custom-label\" for=\"checkbox-6\">Divide</label> <input class=\"radio-custom\" name=\"staging-method\" value=\"all\" id=\"checkbox-7\" type=\"radio\">\n       <label title=\"Full score will be given for a question, only when the user selects all the correct choices\" id=\"text\" class=\"radio-custom-label\" for=\"checkbox-7\">All</label>\n        </div>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["multiline"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data) {
                    var alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "\n            <option value=\"" +
                        alias2(alias1((depth0 != null ? depth0.value : depth0), depth0)) +
                        "\">" +
                        alias2(alias1((depth0 != null ? depth0.title : depth0), depth0)) +
                        "</option> ";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1;

                    return "<div>\n    <div class=\"form-group form-inline\">\n        <label>Choose the format of response:</label>\n        <select class=\"form-control\" data-name=\"field-format\"> " +
                        ((stack1 = helpers.each.call(depth0 != null ? depth0 : {}, (depth0 != null ? depth0.supported_formats : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </select>\n    </div>\n    <div class=\"form-group form-inline\" data-section=\"max-len\">\n        <label>Maximum Length:</label>\n        <input class=\"form-control\" data-name='max-len' type=\"text\" /> </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["play_checkboxes"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "\n        <div class=\"checkbox\" data-choice-item data-value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n            <label>\n                <input type=\"checkbox\" class=\"clickable\" " +
                        ((stack1 = helpers["if"].call(alias1, (depth0 != null ? depth0.selected : depth0), {
                            "name": "if",
                            "hash": {},
                            "fn": container.program(2, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\"> " +
                        alias4(container.lambda((depth0 != null ? depth0.title : depth0), depth0)) +
                        " </label>\n        </div> ";
                },
                "2": function(container, depth0, helpers, partials, data) {
                    return " checked=\"checked\" ";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div data-name=\"play-question\" data-qid=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n    <div>\n        <p>" +
                        ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</p>\n    </div>\n    <div data-choice-type=\"" +
                        alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "type",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\"> " +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.choice : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["play_multiline"] = Handlebars.template({
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div data-name=\"play-question\" data-qid=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n    <div>\n        <p>" +
                        ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</p>\n    </div>\n    <div data-choice-type=\"" +
                        alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "type",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n        <div class=\"form-group\" data-choice-item>\n            <input type=\"text\" class=\"form-control\" data-max-length=\"" +
                        alias4(container.lambda(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.maximumlength : stack1), depth0)) +
                        "\" /> </div>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["play_radiobutton"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data, blockParams, depths) {
                    var helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression,
                        alias5 = container.lambda;

                    return "\n        <div class=\"radio\" data-choice-item data-value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n            <label>\n                <input type=\"radio\" class=\"clickable\" name=\"question" +
                        alias4(alias5((depths[1] != null ? depths[1].id : depths[1]), depth0)) +
                        "\" value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\"> " +
                        alias4(alias5((depth0 != null ? depth0.title : depth0), depth0)) +
                        " </label>\n        </div> ";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div data-name=\"play-question\" data-qid=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n    <div>\n        <p>" +
                        ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</p>\n    </div>\n    <div data-choice-type=\"" +
                        alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "type",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\"> " +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.choice : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0, blockParams, depths),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </div>\n</div>";
                },
                "useData": true,
                "useDepths": true
            });

            this["dw"]["templates"]["play_singleline"] = Handlebars.template({
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div data-name=\"play-question\" data-qid=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n    <div>\n        <p>" +
                        ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</p>\n    </div>\n    <div data-choice-type=\"" +
                        alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "type",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n        <div class=\"form-group\" data-choice-item>\n            <input type=\"text\" class=\"form-control\" data-max-length=\"" +
                        alias4(container.lambda(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.maximumlength : stack1), depth0)) +
                        "\" /> </div>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["questioneditor"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data) {
                    var helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "            <option value=\"" +
                        alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "value",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">" +
                        alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "</option> \n";
                },
                "3": function(container, depth0, helpers, partials, data) {
                    var helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "\n                            <option value=\"" +
                        alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "value",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">" +
                        alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "</option> ";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, alias1 = depth0 != null ? depth0 : {};

                    return "<div class=\"question-editor row question-box active\">\n    <div class=\"col-sm-9\">\n        <div data-container=\"question-editor\">\n            <div data-section=\"question\">\n                <div class=\"form-group\" data-role=\"question\">\n                    <div>\n                        <span class=\"input input--hoshi\">\n                            <div data-role=\"editor\" data-name=\"title\" class=\"input__field input__field--hoshi jqx-widget jqx-editor-inline\" contenteditable=\"true\" data-placeholder=\"Enter Your Question Here\" id=\"input-4\"></div>\n                            <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"input-4\"> </label>\n                        </span>\n                    </div>\n                </div>\n               \n                \n                <div class=\"as-options\">\n                    <div data-section=\"choice\"> </div>\n                </div>\n            </div>\n            <div data-section=\"tagging\">\n                <div class=\"form-group\">\n                    <!-- Tags should go here -->\n                    <h5>Tag Question:</h5>\n                    <select class=\"form-control\" data-name=\"tags\"></select>\n                </div>\n            </div>\n        </div>\n        <div class=\"as-attributes pull-right\">\n\n            <span>Required :</span>\n            <div class=\"onoffswitch\">\n                <input type=\"checkbox\" data-name=\"required\" name=\"onoffswitch\" class=\"onoffswitch-checkbox\" id=\"myonoffswitch\">\n                <label class=\"onoffswitch-label\" for=\"myonoffswitch\">\n                    <span class=\"onoffswitch-inner\"></span>\n                    <span class=\"onoffswitch-switch\"></span>\n                </label>\n            </div>\n\n            <i class=\"fa fa-ellipsis-v dropdown\" data-toggle=\"dropdown\" title=\"more\"></i>\n            <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu\">\n                <li class=\"add-score-screen-question\">\n                    <input title=\"Shuffle the choices\" data-name=\"shuffle\" class=\"checkbox-custom\" id=\"shufflechoices\" type=\"checkbox\">\n                    <label class=\"checkbox-custom-label\" for=\"shufflechoices\">Shuffle Choices</label>\n                </li>\n            </ul>                                      \n        </div>\n\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary\" data-name=\"save-question\">Preview Question</button>\n            <button class=\"btn btn-default\" data-name=\"cancel-question\">Reset</button>\n        </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <select data-name=\"choice-types\"> \n" +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.allowed_choice_types : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        "        </select>\n         <div data-section=\"scoring\" class=\"scoring-block\">\n                    \n                        <label>Assign Scores For: </label>\n                        <select class=\"form-control\" data-name=\"scoring-method\"> " +
                        ((stack1 = helpers.each.call(alias1, ((stack1 = (depth0 != null ? depth0.scoring_configuration : depth0)) != null ? stack1.scoring_at : stack1), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(3, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </select>\n                   \n\n                    <div data-section=\"question-scoring\">\n                        <input type=\"number\" class=\"form-control\" data-name=\"question-score\" placeholder=\"Enter your score\" /> </div>\n                    <p>\n                    <input class=\"checkbox-custom\" id=\"question3\" name=\"rhetorical-question\" type=\"checkbox\">\n<label id=\"text\" class=\"checkbox-custom-label\" for=\"question3\">  Select the checkbox, to mark this question as rhetorical question. If selected, any scores given to this question will have no effect on the results.</label>\n                   \n                        </p>\n                </div>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["radiobutton"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data) {
                    var helper;

                    return "        <label>Score</label>\n        <input type=\"number\" data-name=\"score\" placeholder=\"Enter the score\" value=\"" +
                        container.escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
                            "name": "score",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" class=\"form-control\" /> \n";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div data-role=\"choice-item\" class=\"ui-state-default\">\n    <div class=\"form-group form-inline\">\n    	<input type=\"hidden\" data-name=\"uniqueid\" value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" />\n        <input type=\"hidden\" data-name=\"choicetext\" />\n\n        <input title=\"Mark this as answer\" class=\"checkbox-custom\" id=\"question" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" name=\"question" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" type=\"checkbox\">\n        <label id=\"text\" class=\"checkbox-custom-label\" for=\"question" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\"> </label>\n\n		<span class=\"input input--hoshi active\">\n            <div data-role=\"editor\" data-name='choice' contenteditable=\"true\" class=\"input__field input__field--hoshi jqx-widget jqx-editor-inline\" data-placeholder=\"Type your choice here\"></div>\n            <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"> </label>\n        </span>\n\n" +
                        ((stack1 = helpers["if"].call(alias1, (depth0 != null ? depth0.enable_scoring : depth0), {
                            "name": "if",
                            "hash": {},
                            "fn": container.program(1, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        "\n        <a data-role=\"delete-choice\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["scoring"] = Handlebars.template({
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    return "<div data-section=\"scoring-method\">\n    <div class=\"form-group\">\n        <dl>\n            <dt>\n                <label>\n                    <input type=\"radio\" name=\"scoring-method\" value=\"any\" />Any</label>\n            </dt>\n            <dd>Full score will be given for a question, on selecting any one correct choice</dd>\n            <dt>\n                <label>\n                    <input type=\"radio\" name=\"scoring-method\" value=\"divide\" />Divide</label>\n            </dt>\n            <dd>Scores will be divided based on the no.of.correct choices, the user selects for a question</dd>\n            <dt>\n                <label>\n                    <input type=\"radio\" name=\"scoring-method\" value=\"all\" />All</label>\n            </dt>\n            <dd>Full score will be given for a question, only when the user selects all the correct choices</dd>\n        </dl>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["shell_checkbox"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1, helper, alias1 = container.lambda,
                        alias2 = container.escapeExpression,
                        alias3 = depth0 != null ? depth0 : {},
                        alias4 = helpers.helperMissing,
                        alias5 = "function";

                    return "                <div>\n                    <input class=\"checkbox-custom\" id=\"chk" +
                        alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0)) +
                        alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias4), (typeof helper === alias5 ? helper.call(alias3, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" data-value=\"" +
                        alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias4), (typeof helper === alias5 ? helper.call(alias3, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" name=\"question" +
                        alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0)) +
                        "\" type=\"checkbox\" />\n                    <label id=\"text\" for=\"chk" +
                        alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0)) +
                        alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias4), (typeof helper === alias5 ? helper.call(alias3, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" class=\"checkbox-custom-label\">" +
                        ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias4), (typeof helper === alias5 ? helper.call(alias3, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</label>\n                </div> \n";
                },
                "3": function(container, depth0, helpers, partials, data) {
                    return "                <span class=\"label label-info\">" +
                        container.escapeExpression(container.lambda(depth0, depth0)) +
                        "</span> \n";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div data-role=\"toggle\" data-name=\"question-shell\" data-qid=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n    <div data-view=\"\">\n        <div data-container=\"question\" data-role=\"checkbox-question-type\" data-value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n            <div>\n                <p>" +
                        ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</p>\n            </div>\n            \n            <div> \n" +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.choice : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0, blockParams, depths),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        "            </div>\n\n            <div data-section=\"tags\"> \n" +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.tags : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(3, data, 0, blockParams, depths),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        "            </div>\n\n            <div class=\"as-attributes pull-right\"> \n                <i data-action=\"edit\" class=\"fa fa-edit\" title=\"Edit Question\"></i> \n                <i data-action=\"insert\" class=\"fa fa-plus-circle\" title=\"Insert Question\"></i> \n                <i data-action=\"moveup\" class=\"fa fa-arrow-circle-up\" title=\"Move Up\"></i> \n                <i data-action=\"movedown\" class=\"fa fa-arrow-circle-down\" title=\"Move Down\"></i> \n                <i data-action=\"delete\" class=\"fa fa-trash-o\" title=\"Delete Question\"></i> \n            </div>\n\n        </div>\n    </div>\n    <div data-view=\"\">\n        <div data-container=\"edit\"> </div>\n    </div>\n</div>";
                },
                "useData": true,
                "useDepths": true
            });

            this["dw"]["templates"]["shell_multiline"] = Handlebars.template({
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression,
                        alias5 = container.lambda;

                    return "<div data-role=\"toggle\" data-name=\"question-shell\" data-qid=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n    <div data-view=\"\">\n        <div data-container=\"question\" data-role=\"multiline-question\" data-value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n            <div>\n                <p>" +
                        ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</p>\n            </div>\n            <div>\n                <div class=\"form-group\">\n                    <textarea class=\"form-control\" data-max-len=\"" +
                        alias4(alias5(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.maximumlength : stack1), depth0)) +
                        "\" data-role=\"" +
                        alias4(alias5(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.fieldformat : stack1), depth0)) +
                        "\"></textarea>\n                </div>\n            </div>\n            \n            <div class=\"as-attributes pull-right\"> \n                <i data-action=\"edit\" class=\"fa fa-edit\" title=\"Edit Question\"></i> \n                <i data-action=\"insert\" class=\"fa fa-plus-circle\" title=\"Insert Question\"></i> \n                <i data-action=\"moveup\" class=\"fa fa-arrow-circle-up\" title=\"Move Up\"></i> \n                <i data-action=\"movedown\" class=\"fa fa-arrow-circle-down\" title=\"Move Down\"></i> \n                <i data-action=\"delete\" class=\"fa fa-trash-o\" title=\"Delete Question\"></i> \n            </div>\n\n            \n        </div>\n    </div>\n    <div data-view=\"\">\n        <div data-container=\"edit\"> </div>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["shell_radiobutton"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1, helper, alias1 = container.lambda,
                        alias2 = container.escapeExpression,
                        alias3 = depth0 != null ? depth0 : {},
                        alias4 = helpers.helperMissing,
                        alias5 = "function";

                    return "\n                <div>\n                    <input class=\"radio-custom\" id=\"chk" +
                        alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0)) +
                        alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias4), (typeof helper === alias5 ? helper.call(alias3, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" data-value=\"" +
                        alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias4), (typeof helper === alias5 ? helper.call(alias3, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" name=\"question" +
                        alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0)) +
                        "\" type=\"radio\" />\n                    <label id=\"text\" for=\"chk" +
                        alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0)) +
                        alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias4), (typeof helper === alias5 ? helper.call(alias3, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" class=\"radio-custom-label\">" +
                        ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias4), (typeof helper === alias5 ? helper.call(alias3, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</label>\n                </div> \n\n\n";
                },
                "3": function(container, depth0, helpers, partials, data) {
                    return "                <span class=\"label label-info\">" +
                        container.escapeExpression(container.lambda(depth0, depth0)) +
                        "</span> \n";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div data-role=\"toggle\" data-name=\"question-shell\" data-qid=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n    <div data-view=\"\">\n        <div data-container=\"question\" data-role=\"checkbox-question-type\" data-value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n            <div>\n                <p>" +
                        ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</p>\n            </div>\n\n            <div> \n" +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.choice : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0, blockParams, depths),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        "            </div>\n\n            <div data-section=\"tags\"> \n" +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.tags : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(3, data, 0, blockParams, depths),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        "            </div>\n\n            <div class=\"as-attributes pull-right\"> \n                <i data-action=\"edit\" class=\"fa fa-edit\" title=\"Edit Question\"></i> \n                <i data-action=\"insert\" class=\"fa fa-plus-circle\" title=\"Insert Question\"></i> \n                <i data-action=\"moveup\" class=\"fa fa-arrow-circle-up\" title=\"Move Up\"></i> \n                <i data-action=\"movedown\" class=\"fa fa-arrow-circle-down\" title=\"Move Down\"></i> \n                <i data-action=\"delete\" class=\"fa fa-trash-o\" title=\"Delete Question\"></i> \n            </div>\n\n        </div>\n    </div>\n    <div data-view=\"\">\n        <div data-container=\"edit\"> </div>\n    </div>\n</div>";
                },
                "useData": true,
                "useDepths": true
            });

            this["dw"]["templates"]["shell_singleline"] = Handlebars.template({
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression,
                        alias5 = container.lambda;

                    return "<div data-role=\"toggle\" data-name=\"question-shell\" data-qid=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n    <div data-view=\"\">\n        <div data-container=\"question\" data-role=\"singleline-question\" data-value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n            <div>\n                <p>" +
                        ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</p>\n            </div>\n            <div>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" data-max-len=\"" +
                        alias4(alias5(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.maximumlength : stack1), depth0)) +
                        "\" data-role=\"" +
                        alias4(alias5(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.fieldformat : stack1), depth0)) +
                        "\" /> </div>\n            </div>\n            <div>\n                <ul>\n                    <li> <a data-action=\"edit\">Edit</a> </li>\n                    <li> <a data-action=\"delete\">Delete</a> </li>\n                    <li> <a data-action=\"insert\">Insert</a> </li>\n                    <li> <a data-action=\"moveup\">Move Up</a> </li>\n                    <li> <a data-action=\"movedown\">Move Down</a> </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div data-view=\"\">\n        <div data-container=\"edit\"> </div>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["shell"] = Handlebars.template({
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    return "<div>\n    <div data-section=\"head\"> </div>\n    <div data-section=\"body\"></div>\n    <div data-section=\"footer\">\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary hide\" data-action=\"save\">Save</button>\n            <button class=\"btn btn-default hide\" data-action=\"cancel\">Cancel</button>\n        </div>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["singleline"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data) {
                    var alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "\n            <option value=\"" +
                        alias2(alias1((depth0 != null ? depth0.value : depth0), depth0)) +
                        "\">" +
                        alias2(alias1((depth0 != null ? depth0.title : depth0), depth0)) +
                        "</option> ";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1;

                    return "<div>\n    <div class=\"form-group form-inline\">\n        <label>Choose the format of response:</label>\n        <select class=\"form-control\" data-name=\"field-format\"> " +
                        ((stack1 = helpers.each.call(depth0 != null ? depth0 : {}, (depth0 != null ? depth0.supported_formats : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </select>\n    </div>\n    <div class=\"form-group form-inline\" data-section=\"max-len\">\n        <label>Maximum Length:</label>\n        <input class=\"form-control\" data-name='max-len' type=\"text\" /> </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["staging_startpage"] = Handlebars.template({
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div>\n    <div>\n        <h1>" +
                        alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "</h1>\n        <p>" +
                        ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "description",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        " </p>\n        <p class=\"well\">Total no of questions: <b>" +
                        alias4(((helper = (helper = helpers.totalQuestions || (depth0 != null ? depth0.totalQuestions : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "totalQuestions",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "</b> | Total score: <b>" +
                        alias4(((helper = (helper = helpers.totalScore || (depth0 != null ? depth0.totalScore : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "totalScore",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "</b> | Retake: <b>" +
                        alias4(((helper = (helper = helpers.retakeLimit || (depth0 != null ? depth0.retakeLimit : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "retakeLimit",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "</b></p>\n    </div>\n    <div class=\"text-center\">\n        <button class=\"btn btn-primary\" data-action=\"start\">Start</button>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["test"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data) {
                    return "\n    <li>" +
                        container.escapeExpression(container.lambda(depth0, depth0)) +
                        "</li> ";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1;

                    return "<ul> " +
                        ((stack1 = helpers.each.call(depth0 != null ? depth0 : {}, (depth0 != null ? depth0.names : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </ul>";
                },
                "useData": true
            });;
            (function() {

                "use strict";

                // the namespace "ab" stands for AssessmentBuilder


                // I've created this object to share the state across all the jquery widgets and plugins
                $.ab = $.ab || {};


                // only the state object will be modified by all the other parts of the application
                $.ab.state = $.ab.state || {

                    id: 1,

                    // title of the assessment
                    title: "",

                    // a description which tells about the assessment
                    description: "",

                    retakeLimit: 5,

                    questions: [],

                    feedback: {

                        feedbackMethod: "simple",

                        feedbackMessage: "",
                    }

                };





            })();;
            (function() {
                "use strict";

                $.dw = {};

                $.dw.base_configurations = {

                    version: 1,

                    title: "Health Assessment", // wizard title

                    description: "A Basic health assessment", // wizard description

                    // load the different plugins based on the question types needed for the wizard
                    allowed_choice_types: [{
                        title: "Multiple Choice",
                        value: "checkbox"
                    }, {
                        title: "Single Choice",
                        value: "radiobutton"
                    }, {
                        title: "Single Line",
                        value: "singleline"
                    }, {
                        title: "Multi Line",
                        value: "multiline"
                    }],

                    // the default questions will be of this choice type. 
                    default_choice_type: "checkbox",

                    minimum_no_of_questions_required: 1, // specifies the minimum no of questions required. Default is "1"

                    // specifies the maximum allowed question. Default is "-1" which means it is infinte
                    maximum_no_of_questions_allowed: -1,

                    import_questions: "yes", // allows the author to import questions from other sources like an existing wizard / a default template

                    /* if "yes" by default the required option will be checked and readonly. if no, it will be unchecked and readonly. leave it as null ( default ) to allow the author 
                     * to decide on that.
                     */
                    all_mandatory_questions: "yes",

                    /* Defaults to "-1", which means the assessment can be taken n no of times */
                    retake_limit: -1,

                    enable_retake: "yes", // enables options to allow the author to choose the value for repeat / also accepts an integer value that represents the no of retakes

                    tagging: "yes", // enables the ui to tag questions with the given tags

                    tags: ["depression", "anxiety"], // tags which can be added to a question


                    /***************************************************** Scoring ***************************************/

                    scoring_configuration: {

                        default_score: 1,

                        scoring_at: [{
                            title: "Question",
                            value: "question"
                        }, {
                            title: "Choice",
                            value: "choice"
                        }],

                        default_scoring_method: "any",

                        allow_to_change_scoring_method: "yes",

                        negative_score: "yes"

                    },

                    /***************************************************** Scoring ***************************************/

                    default_staging_method: "one-by-one",

                    feedback_configuration: {

                        feedback_message: "Thank you for submitting the assessment"

                    },


                    /* only the allowed options will be enabled in the UI. leave it as empty to allow all the possible options
                     * like "edit", "delete", "insert", "move"
                     */
                    allowed_access: ["edit", "delete"],

                    // this is a default question which will appear when user clicks on insert button
                    default_question: "Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey.",

                    default_choice: "Untitled Choice {0}"

                };


            })();;
            (function() {

                "use strict";

                $.widget("dw.assessmentbuilderbase", {

                    options: {},

                    _create: function() {

                        this.options = $.extend($.dw.base_configurations, this.options);

                    }


                });

            })();;
            (function(window) {


                window.assessmentbuilder = {};


                window.assessmentbuilder.factory = Object.create({

                    /* "renderEngine" returns the html for every type of question with choices */
                    renderEngine: function(config) {

                        var html = "";

                        if (config.choiceType === "radiobutton") {
                            html = window.dw.templates.shell_radiobutton(config);
                        } else if (config.choiceType === "checkbox") {
                            html = window.dw.templates.shell_checkbox(config);
                        } else if (config.choiceType === "singleline") {
                            html = window.dw.templates.shell_singleline(config);
                        } else if (config.choiceType === "multiline") {
                            html = window.dw.templates.shell_multiline(config);
                        }

                        return html;
                    },

                    /* "questionFactory" returns a new question object based on the configuration passed & the type of the question */
                    questionFactory: function(type, config) {

                        var latestQuestion = _.maxBy($.dw.base_configurations.datasource, "id");

                        var newQuestionId = latestQuestion ? latestQuestion.id + 1 : 1;

                        var defaults = {};

                        defaults.required = true;
                        defaults.randomizeChoice = true;
                        defaults.title = config.default_question.replace(/\{0\}/, newQuestionId);

                        if (config.scoring_configuration) {
                            defaults.scoringAt = config.scoring_configuration.scoring_at[0].value;
                            defaults.score = defaults.scoringAt === "question" ? config.scoring_configuration.default_score : null;
                        }

                        var Question = {};

                        Question = {
                            id: 1,
                            choice: this.getChoiceFactory(type, $.extend({}, config, {
                                scoring: (defaults.scoringAt === "choice") ? "yes" : "no"
                            }), [1, 2]),
                            choiceType: type
                        };

                        $.extend(Question, defaults);

                        console.group("RenderEngine:"); /*RemoveLogging:skip*/
                        console.log(Question); /*RemoveLogging:skip*/
                        console.groupEnd("RenderEngine"); /*RemoveLogging:skip*/

                        return Question;

                    },


                    /* "getChoiceFactory" returns a new choice object based on the configuration passed */
                    getChoiceFactory: function(type, config, choiceId) {

                        var choiceObj = {},
                            score = 0;

                        choiceId = choiceId || [1];

                        if (type === "radiobutton" || type === "checkbox") {

                            if (config.scoring_configuration && config.scoring_configuration !== null) {
                                score = config.scoring_configuration.default_score;
                            }

                            var choices = choiceId.map(function(e) {

                                return {
                                    id: e,
                                    title: config.default_choice.replace(/\{0\}/, e.toString()),
                                    score: score,
                                    correct: false
                                };
                            });
                            return choices;
                        }

                    }

                });





            })(window);;
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





            })();;
            (function() {

                var plugin = "dwToggle";

                function Toggle(element, options) {

                    this.element = $(element);
                    this.showMainView();
                }

                Toggle.prototype.showMainView = function() {

                    var div1 = this.element.find("[data-view]:first"),
                        div2 = this.element.find("[data-view]:last");

                    div2.hide();
                    div1.show();

                    this.element.attr("data-active", false);
                };

                Toggle.prototype.toggle = function() {
                    var firstView = this.element.find("[data-view]:first"),
                        lastView = this.element.find("[data-view]:last");

                    var activeView = null;


                    if (firstView.is(":visible")) {
                        firstView.hide();
                        lastView.show();
                        this.element.attr("data-active", true);
                        activeView = lastView;
                    } else {
                        firstView.show();
                        lastView.hide();
                        this.element.attr("data-active", false);
                        activeView = firstView;
                    }

                    return this;

                };



                $.fn[plugin] = function(options) {

                    return this.each(function() {

                        var element = $(this);

                        if (element.data(plugin)) {
                            return;
                        }

                        var toggle = new Toggle(element, options);

                        element.data(plugin, toggle);

                    });

                };

            })();;
            (function() {


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
                        if (this.options.data) {}

                        if (!this.options.scoring_configuration) {
                            this.element.find(this.options.selectors.scoringSection).hide();
                        } else {
                            this.options.data.scoringAt = this.options.data.scoringAt || this.options.scoring_configuration.scoring_at[0].value;
                            this.element.find("[data-name='scoring-method']").val(this.options.data.scoringAt).trigger("change");
                        }
                    },


                    _hideTags: function() {
                        var $this = this;

                        if (this.options.tagging === "no") {
                            this.element.find(this.options.selectors.taggingSection).hide();
                        } else {

                            var element = this.element.find("[data-name='tags']");

                            var template = "<option value='{0}'>{0}</option>";

                            var option = "";

                            this.options.tags.forEach(function(e, i) {

                                option = template.replace(/\{0\}/g, e);

                                element.append(option);

                            });
                        }
                    },

                    _getTagValues: function() {

                        if (this.options.tagging === "no") {
                            return [];
                        } else {
                            var tagName = this.element.find("[data-name='tags']").val();
                            return [tagName];
                        }

                    },


                    _init: function() {

                        this.element.html("");

                        // create a default object if the data has not be passed; and when ever the ui changes, update this data object
                        // hence we need not have to create lot of private variables in the "this" 
                        this.options.data = this.options.data || {};

                        var html = window.dw.templates.questioneditor(this.options);

                        this.element.html(html);

                        this.element.find("[data-role='editor']").jqxEditor({
                            tools: 'bold italic underline | format font size | color background | left center right'
                        });

                        if (this.options.data && this.options.data.choiceType) {
                            this.element.find("[data-name='choice-types']").val(this.options.data.choiceType); //.trigger("change");
                            this._rebindChoicePlugin();
                        }


                        // Scoring Section 
                        if (!this.options.scoring_configuration) {
                            this.element.find(this.options.selectors.scoringSection).hide();
                        } else {
                            this.options.data.scoringAt = this.options.data.scoringAt || this.options.scoring_configuration.scoring_at[0].value;
                            this.element.find("[data-name='scoring-method']").val(this.options.data.scoringAt); //.trigger("change");
                            this._showScoreInUI();
                            this.element.find("[name='rhetorical-question']").prop("checked", this.options.data.rhetorical);
                        }

                        this._hideTags();

                        this._bindData();
                    },


                    _bind: function() {

                        this._on(this.element, {

                            'change [data-name="choice-types"]': this._onchoiceTypeChanges,

                            'click [data-name="save-question"]': this._saveQuestion,

                            'change [data-name="scoring-method"]': this._onScoringAtChanges,

                            'click [data-name="cancel-question"]': this._cancelChanges,

                            'click [name="rhetorical-question"]': this._markQuestionAsRhetorical,

                            'change [data-name="tags"]': this._tagChanged,

                            'click .question-box': this._onQuestionFocused,

                            'blur .question-box': this._onQuestionBlur

                        });

                    },

                    _onQuestionFocused: function(event) {
                        $(this.element).find("[data-name='title']").closest('span.input--hoshi').addClass("active");
                    },


                    _onQuestionBlur: function(event) {
                        $(this.element).find("[data-name='title']").closest('span.input--hoshi').removeClass("active");
                    },

                    _tagChanged: function(event) {
                        var tag = $(event.target).val();

                    },

                    _markQuestionAsRhetorical: function(event) {

                        this.options.data.rhetorical = $(event.target).is(":checked");
                    },


                    _cancelChanges: function(event) {
                        event.preventDefault();

                        this._trigger("savequestioncancelled", this);

                    },

                    _onScoringAtChanges: function(event) {

                        var value = $(event.target).val();

                        this._showScoreInUI(value);


                    },

                    _showScoreInUI: function(scoringAt) {

                        scoringAt = scoringAt || this.element.find("[data-name='scoring-method']").val();

                        var value = scoringAt;

                        if (value === "choice") {
                            this.element.find("[data-section='question-scoring']").hide();
                        } else if (value === "question") {
                            this.element.find("[data-section='question-scoring']").show();
                            this.element.find(this.options.selectors.questionScore).val(this.options.scoring_configuration.default_score);
                        }

                        //if (this.options.data)
                        //this.element.find(this.options.selectors.choiceTypes).val(this.options.data.choiceType);

                        if (this.options.data.scoringAt !== value) {
                            // when set the choicetype to empty, on triggering the change event of choice type dropdown will
                            // make the ui to update.
                            this.options.data.choiceType = "";
                        }

                        this.options.data.scoringAt = value;

                        this.element.find(this.options.selectors.choiceTypes).trigger("change");

                    },


                    _onchoiceTypeChanges: function(event, args) {

                        var choiceType = $(event.target).val();

                        this._rebindChoicePlugin(choiceType);
                    },

                    _rebindChoicePlugin: function(choiceType) {


                        choiceType = choiceType || this.element.find("[data-name='choice-types']").val();

                        // if the choice type is changed, then don't retain the old choice 
                        // let the user create new set
                        if (this.options.data.choiceType !== choiceType) {
                            this.options.data.choice = null;
                        }

                        this.options.data.choiceType = choiceType;

                        var choice = this.element.find(this.options.selectors.choiceSection);

                        var pluginName = choice.data("pluginName");

                        if (pluginName && choice.data(pluginName))
                            choice.data(pluginName).destroy();

                        choice.data("value", this.options.data.choice);

                        var enableScoringForChoice = "";

                        enableScoringForChoice = (this.options.data.scoringAt === "choice") ? "yes" : "no";

                        var settings = null;

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


                    _saveQuestion: function(event) {
                        event.preventDefault();

                        var question = {};

                        question.id = this.options.data ? this.options.data.id : 1;

                        question.required = this.element.find("[data-name='required']").is(":checked");
                        question.randomizeChoice = this.element.find("[data-name='shuffle']").is(":checked");
                        question.title = this.element.find("[data-name='title']").jqxEditor("val");
                        question.choiceType = this.element.find("[data-name='choice-types']").val();

                        if (this.options.scoring_configuration) {
                            // "scoringMethod" value should be retrieved from the new ui control that we are going to add later
                            question.scoringAt = this.options.data.scoringAt;
                            question.score = question.scoringAt === "question" ?
                                parseInt(this.element.find("[data-name='question-score']").val() || 0) : null;
                        }

                        question.rhetorical = this.options.data.rhetorical;

                        if (typeof question.rhetorical === "undefined") question.rhetorical = false;

                        var choice = this.choice.val();

                        if (choice instanceof Error) { /* show this error in the page  */
                            return;
                        } else {
                            question.choice = choice;
                        }

                        if (this.options.tagging === "yes")
                            question.tags = this._getTagValues();

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

                            /*if (question.scoringAt)
                                this.element.find(selectors.scoringMethod).val(question.scoringAt).trigger("change");*/

                            //this.element.find(selectors.choiceTypes).val(question.choiceType).trigger("change");

                            /*if (question.scoringAt === "question") {
                                this.element.find(selectors.questionScore).val(question.score);
                            }*/

                            if (question.tags && question.tags.length > 0) {
                                // set the tags
                                this.element.find("[data-name='tags']").val(question.tags[0]);
                            }

                            this.element.find(selectors.required).prop("checked", question.required);
                            this.element.find(selectors.shuffle).prop("checked", question.randomizeChoice);

                        }
                    }
                });






            })();;
            (function() {

                "use strict";

                $.fn.arrangeActionButtons = function() {



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

            })();;
            (function() {

                "use strict";


                function SingleLine(element, options) {

                    options = options || {};

                    var defaults = {
                        supported_formats: [{
                            title: "Free Text",
                            value: "freetext"
                        }, {
                            value: "number",
                            title: "Number"
                        }, {
                            value: "date",
                            title: "Date"
                        }, {
                            value: "time",
                            title: "Time"
                        }, {
                            value: "email",
                            title: "Email"
                        }]
                    };

                    options = $.extend({}, defaults, $.dw.base_configurations, options);

                    this.options = options;

                    this.element = element;

                    this.element.append(window.dw.templates.singleline({
                        supported_formats: this.options.supported_formats
                    }));

                    this.element.data("pluginName", "qbSingleLine");
                    this.element.data("qbSingleLine", this);

                    this.bind();

                    this.element.find("[data-name='field-format']").trigger("change");

                    this.bindData();

                }


                SingleLine.prototype = {

                    bindData: function() {

                        var value = this.element.data("value");

                        if (!value) return;

                        this.element.find("[data-name='field-format']").val(value.fieldformat).trigger("change");
                        this.element.find("[data-name='max-len']").val(value.maximumlength);
                    },

                    bind: function() {

                        this.element.find("[data-name='field-format']").on("change", this.onFieldFormatChanged);

                    },


                    onFieldFormatChanged: function(event) {

                        var element = $(event.target);

                        var container = element.closest("[data-role='single-line']");

                        var pluginName = container.data("pluginName");

                        var singleLine = container.data(pluginName);

                        singleLine.changeFormat(element.val());

                    },

                    changeFormat: function(format) {

                        switch (format) {
                            case "freetext":
                                this.showMaxlength(true);
                                break;
                            case "number":
                                this.showMaxlength(true);
                                break;
                            case "date":
                                this.showMaxlength(false);
                                break;
                            case "time":
                                this.showMaxlength(false);
                                break;
                            case "email":
                                this.showMaxlength(true);
                                break;
                            default:
                                break;
                        }
                    },

                    showMaxlength: function(args) {

                        if (!args)
                            this.element.find("[data-section='max-len']").hide();
                        else
                            this.element.find("[data-section='max-len']").show();

                    },

                    val: function() {

                        var format = this.element.find("[data-name='field-format']").val();

                        var maximumlength = null;

                        if (this.element.find("[data-name='max-len']").val())
                            maximumlength = parseInt(this.element.find("[data-name='max-len']").val());

                        return {
                            id: 1,
                            fieldformat: format,
                            maximumlength: maximumlength
                        };

                    },

                    destroy: function() {

                        this.element.html("");

                        var pluginName = this.element.data("pluginName");

                        // this will remove all the data attributes
                        this.element.removeData([pluginName, "name", "value"]);

                    }


                };


                $.fn.qbSingleLine = function(element, options) {

                    return this.each(function() {

                        var element = $(this);

                        // return by doing nothing, if the plugin is already binded to the dom
                        if (element.data("qbSingleLine")) {
                            return;
                        }

                        options = options || {};

                        element.attr("data-role", "single-line");

                        new SingleLine(element, options);

                        //element.data("pluginName", "qbSingleLine");
                        //element.data("qbSingleLine", singleLine); // this object can be further accessed to communicate to the plugin

                    });

                };

                /*
                    $("#choices").qbSingleLine();


                    $("#getValues").on("click", function(event) {

                        var api = $("#choices").data("qbSingleLine");

                    });

                */

                $.fn.basicInput = function() {

                    var putMaxLengthLabel = function(e) {

                        var label = $("<label>").text("Max Char: {0}".replace(/\{0\}/, $(e).data("max-len")));

                        label.insertAfter($(e));
                    };

                    this.each(function() {

                        $.each($(this).find("[data-role='freetext']"), function(i, e) {
                            putMaxLengthLabel(e);
                            $(e).removeAttr("data-role");
                        });

                        $.each($(this).find("[data-role='number']"), function(i, e) {

                            $(e).attr("type", "number");

                            putMaxLengthLabel(e);
                            $(e).removeAttr("data-role");

                        });


                        $.each($(this).find("[data-role='date']"), function(i, e) {

                            $(e).attr("type", "date");
                            $(e).removeAttr("data-role");

                        });

                        $.each($(this).find("[data-role='email']"), function(i, e) {

                            $(e).attr("placeholder", "Email: someone@domain.com");

                            putMaxLengthLabel(e);
                            $(e).removeAttr("data-role");

                        });


                        $.each($(this).find("[data-role='richtext']"), function(i, e) {

                            $(e).attr("placeholder", "HTML Content is allowed");

                            $(e).removeAttr("data-role");

                        });


                    });
                };



                //$("[data-section='single-line']").basicInput();





            })();;
            (function() {

                "use strict";


                function MultiLine(element, options) {

                    options = options || {};

                    var defaults = {
                        supported_formats: [{
                            title: "Free Text",
                            value: "freetext"
                        }, {
                            value: "richtext",
                            title: "Rich Text"
                        }]
                    };

                    options = $.extend({}, defaults, $.dw.base_configurations, options);

                    this.options = options;

                    this.element = element;

                    this.element.append(window.dw.templates.multiline({
                        supported_formats: this.options.supported_formats
                    }));

                    this.element.data("pluginName", "qbMultiLine");
                    this.element.data("qbMultiLine", this);

                    this.bind();

                    this.element.find("[data-name='field-format']").trigger("change");

                    this.bindData();

                }


                MultiLine.prototype = {

                    bindData: function() {

                        var value = this.element.data("value");

                        if (!value) return;

                        this.element.find("[data-name='field-format']").val(value.fieldformat).trigger("change");
                        this.element.find("[data-name='max-len']").val(value.maximumlength);
                    },

                    bind: function() {

                        this.element.find("[data-name='field-format']").on("change", this.onFieldFormatChanged);

                    },

                    onFieldFormatChanged: function(event) {

                        var element = $(event.target);

                        var container = element.closest("[data-role='multi-line']");

                        var pluginName = container.data("pluginName");

                        var multiLine = container.data(pluginName);

                        multiLine.changeFormat(element.val());

                    },

                    changeFormat: function(format) {
                        switch (format) {
                            case "freetext":
                                this.showMaxlength(true);
                                break;
                            case "richtext":
                                this.showMaxlength(false);
                                break;
                            default:
                                break;
                        }
                    },

                    showMaxlength: function(args) {

                        if (!args)
                            this.element.find("[data-section='max-len']").hide();
                        else
                            this.element.find("[data-section='max-len']").show();

                    },

                    val: function() {

                        var format = this.element.find("[data-name='field-format']").val();

                        var maximumlength = null;

                        if (this.element.find("[data-name='max-len']").val())
                            maximumlength = parseInt(this.element.find("[data-name='max-len']").val());

                        return {
                            id: 1,
                            fieldformat: format,
                            maximumlength: maximumlength
                        };

                    },

                    destroy: function() {

                        this.element.html("");

                        var pluginName = this.element.data("pluginName");

                        // this will remove all the data attributes
                        this.element.removeData([pluginName, "name", "value"]);

                    }

                };

                $.fn.qbMultiLine = function(element, options) {

                    return this.each(function() {

                        var element = $(this);

                        // return by doing nothing, if the plugin is already binded to the dom
                        if (element.data("qbMultiLine")) {
                            return;
                        }

                        options = options || {};

                        element.attr("data-role", "multi-line");

                        new MultiLine(element, options);

                    });

                };



            })();;
            (function() {

                var factory = window.assessmentbuilder.factory,
                    state = $.ab.state;


                /* "shell" widget is responsible for adding / editing / deleting questions in an assessment. It only deals with te question part */
                $.widget("dw.shell", $.dw.assessmentbuilderbase, {


                    options: {


                        title: "", // assessment title

                        description: "", // assessment description

                        // load the different plugins based on the question types needed for the assessment
                        allowed_choice_types: [{
                            title: "Multiple Choice",
                            value: "checkbox"
                        }, {
                            title: "Single Choice",
                            value: "radiobutton"
                        }, {
                            title: "Single Line",
                            value: "singleline"
                        }, {
                            title: "Multie Line",
                            value: "multiline"
                        }, ],

                        // the default questions will be of this choice type. 
                        default_choice_type: "checkbox",

                        tagging: "yes", // enables the ui to tag questions with the given tags

                        tags: ["depression", "anxiety"], // tags which can be added to a question


                        /* only the allowed options will be enabled in the UI. leave it as empty to allow all the possible options
                         * like "edit", "delete", "insert", "move"
                         */
                        allowed_options: ["edit", "delete"],

                        // if "yes", a feedback message will be shown to the user after completing the assessment
                        feedback: "yes",

                        // if feedback option is enabled, this messgae will be used to show the feedback.
                        feedback_message: "Thank you for participating!"

                    },

                    datasource: [],

                    _create: function() {

                        this._super();

                        this.datasource = state.questions;

                        /*// if the "title" & "description" is being passed, then take that value. 
                        // there are scenarios where the state will be empty, when this "shell" widget is initialized
                        state.title = this.options.title || state.title;
                        state.description = this.options.description || state.description;*/

                        // It think for now, lets goahead with the fact that, the shell widget is
                        // will not be used all alone. It will be used with the initial setup widget
                        // so no need to worry about the state object

                        this.options.title = state.title;
                        this.options.description = state.description;

                        this._bind();

                        var html = window.dw.templates.shell({
                            title: this.options.title,
                            description: this.options.description
                        });

                        this.element.append(html);

                        if (this.datasource.length === 0)
                            this._initialSetup();
                        else
                            this._bindData();

                        this.reload();

                    },

                    _getNewQuestion: function(choiceType) {
                        var question = factory.questionFactory(choiceType, this.options);
                        return question;
                    },

                    _initialSetup: function() {
                        var html = "";
                        var question = this._getNewQuestion(this.options.default_choice_type);
                        this.datasource.push(question);
                        html = factory.renderEngine(question);
                        this._addQuestion(html);
                    },

                    // initialize all your plugins here
                    reload: function() {
                        this.element.find("[data-role='toggle']").dwToggle();
                        this.element.find("[data-section='body']").arrangeActionButtons();
                        this.element.find("[data-role='singleline-question']").basicInput();
                        this.element.find("[data-role='multiline-question']").basicInput();
                    },

                    // in edit mode, present the data at first
                    _bindData: function() {
                        var html = "";
                        for (var i = 0; i < this.datasource.length; i++) {
                            html += factory.renderEngine(this.datasource[i]);
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

                            "click [data-action='save']": this.save,

                            "click [data-action='cancel']": this._cancel,

                            "questionbuildersavequestion  [data-container='edit']": this._onQuestionSaved,

                            "questionbuildersavequestioncancelled [data-container='edit']": this._onQuestionEditCancelled

                        });

                    },

                    save: function(event) {
                        event.preventDefault();

                        /*            var assessment = {
                                        title: this.options.title,
                                        description: this.options.description,
                                        questions: this.datasource,
                                        retake: this._getRetakeLimit(),
                                        feedbackMessage: this.options.feedback_message,
                                    };

                                    $.extend(assessment, this._getScoringMethod());*/

                        $(window).trigger("assessmentbuilder:save", {
                            data: $.ab.state
                        });

                    },

                    _getScoringMethod: function() {

                        if (this.options.scoring_configuration)
                            return {
                                scoringMethod: this.element.find("[data-section='scoring-method'] [name='scoring-method']:checked").val()
                            };
                        else
                            return {};

                    },

                    _getRetakeLimit: function() {
                        var retakeLimit = this.options.retake_limit;

                        if (this.options.enable_retake === "yes") {
                            retakeLimit = this.element.find("[data-name='retake']").val();
                        }

                        return parseInt(retakeLimit);
                    },

                    _cancel: function(event) {
                        event.preventDefault();

                    },

                    _moveUp: function(event) {
                        event.preventDefault();

                        var $element = $(event.target);
                        var questionId = this._getQuestionId($element);

                        var question = _.find(this.datasource, {
                            "id": questionId
                        });

                        var index = _.findIndex(this.datasource, question);

                        if (index > 0) {
                            var previousQuestion = this.datasource[index - 1];

                            this.datasource.splice(index, 1);
                            this.datasource.splice(index - 1, 0, question);
                            this._removeQuestionFromDOM(question);

                            var questionDOM = this._getQuestionDOM(previousQuestion.id);

                            var html = factory.renderEngine(question);
                            html = $(html);
                            html.insertBefore(questionDOM);

                            this.reload();
                        }

                    },

                    _removeQuestionFromDOM: function(question) {
                        var questionselector = "[data-name='question-shell'][data-qid='{0}']";
                        var questionDOM = this.element.find(questionselector.replace(/\{0\}/, question.id));
                        questionDOM.remove();
                    },



                    _moveDown: function(event) {
                        event.preventDefault();

                        var $element = $(event.target);
                        var questionId = this._getQuestionId($element);

                        var question = _.find(this.datasource, {
                            "id": questionId
                        });


                        var index = _.findIndex(this.datasource, question);

                        if (index <= this.datasource.length - 2) {

                            var nextQuestion = this.datasource[index + 1];

                            this.datasource.splice(index, 1);

                            this.datasource.splice(index + 1, 0, question);
                            this._removeQuestionFromDOM(question);

                            var questionDOM = this._getQuestionDOM(nextQuestion.id);

                            var html = factory.renderEngine(question);
                            html = $(html);
                            html.insertAfter(questionDOM);
                            this.reload();
                        }

                    },

                    _editQuestion: function(event) {

                        _.forEach(this.datasource, function(q) {
                            q.edit = false;
                        });

                        var $element = $(event.target);

                        var questionId = this._getQuestionId($element);

                        var question = _.find(this.datasource, {
                            "id": questionId
                        });

                        question.edit = true;

                        this._prepareQuestionEditor($element);

                    },

                    _deleteQuestion: function(event) {

                        if (this.datasource.length === 1) return;

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

                        if (this.options.maximum_no_of_questions_allowed !== -1 &&
                            this.options.maximum_no_of_questions_allowed <= this.datasource.length) return;

                        var $element = $(event.target);

                        var questionId = this._getQuestionId($element);

                        var index = _.findIndex(this.datasource, {
                            id: questionId
                        });

                        var question = this._getNewQuestion(this.options.default_choice_type);

                        question.id = this._getNewQuestionId();

                        // Push the question in the specified index.
                        this.datasource.splice(index + 1, 0, question);

                        var html = factory.renderEngine(question);

                        html = $(html);

                        var currentQuestion = this._getQuestionDOM(questionId);

                        html.insertAfter(currentQuestion);

                        this.reload();

                    },

                    _getQuestionDOM: function(questionId) {

                        var currentQuestion = _.find(this.element.find("[data-name='question-shell']"), function(q) {
                            return $(q).data("qid") === questionId;
                        });

                        return currentQuestion;
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

                        //_.forEach(this.datasource, function(q){ q.edit = false; });

                        this._replaceWithNewView(args.data);
                    },

                    _onQuestionEditCancelled: function(event, args) {

                        var question = _.find(this.datasource, {
                            edit: true
                        });

                        //this.datasource.splice(index, 1, question);

                        var html = factory.renderEngine(question);

                        var questionToReplace = this.element.find("[data-name='question-shell'][data-qid='" + question.id + "']");

                        questionToReplace.replaceWith($(html));

                        this.reload();

                    },

                    _replaceWithNewView: function(question) {

                        var index = _.findIndex(this.datasource, _.find(this.datasource, {
                            id: question.id
                        }));

                        this.datasource.splice(index, 1, question);

                        var html = factory.renderEngine(question);

                        var questionToReplace = this.element.find("[data-name='question-shell'][data-qid='" + question.id + "']");

                        questionToReplace.replaceWith($(html));

                        this.reload();

                    },

                    _updateQuestion: function(html) {


                    },

                    _prepareQuestionEditor: function(element) {

                        var question = _.find(this.datasource, "edit");

                        var toggler = element.closest("[data-role='toggle']"),
                            container = element.closest("[data-container='question']");
                        var editView = toggler.find("[data-view]:last");

                        var config = {};

                        config.data = JSON.parse(JSON.stringify(question));

                        editView.find("[data-container='edit']").questionbuilder(config);

                        toggler.data("dwToggle").toggle();
                    },

                    _addQuestion: function(html) {
                        this.element.find("[data-section='body']").append(html);
                    }

                });





            })();;
            (function() {

                "use strict";

                var template = window.dw.templates.feedback({}),
                    state = $.ab.state;


                var gradeItemHtml = "<li data-role='list-item' data-name='{name}'>" +
                    "<div>" +
                    "<a data-action='edit-feedback' >{name} {default} {score} <span class='glyphicon glyphicon-trash' data-action='delete-grade' aria-hidden='true'></span></a>" +
                    "<p>{feedback}</p>" +
                    "</div>" +
                    "</li>";

                var grade = {
                    name: "Untitled",
                    isDefault: true,
                    score: 0,
                    feedback: "Your default message"
                };


                $.widget("dw.feedback", $.dw.assessmentbuilderbase, {

                    _options: {

                    },

                    currentGrade: null,

                    datasource: {},

                    _create: function() {
                        this._super();

                        // linking the state and datascore object
                        this.datasource = state.feedback;

                        this.element.html(template);

                        // if no scoring, then the feedback for each grade is not applicable.
                        // just show the simple method
                        if (!this.options.scoring_configuration) {
                            this.datasource.feedbackMethod = "simple";
                            this.element.find("[data-name='feedback-method']").find("option[value='custom']").remove();
                        }

                        this._bind();

                        var that = this;



                        this._syncUIwithStateObject();

                    },

                    _pushDefaultGrade: function() {
                        var that = this;

                        this.datasource.grade = this.datasource.grade || [];

                        if (this.datasource.grade.length === 0) {

                            this.datasource.grade.push($.extend({}, grade, {
                                isDefault: true
                            }));

                        }

                        $(this.datasource.grade).each(function(i, e) {
                            that._addGradeToUI(e);
                        });

                    },

                    _syncUIwithStateObject: function() {

                        this.element.find("[data-name='feedback-method']").val(this.datasource.feedbackMethod);
                        this._showFeedbackForm(this.datasource.feedbackMethod);
                        // by this time, the form will be ready
                    },

                    _bind: function() {

                        this._on(this.element, {

                            "click [data-action='add-feedback']": this._onAddFeedbackClicked,

                            "click [data-action='edit-feedback']": this._onEditClicked,

                            "click [data-action='clear-form']": this._clearForm,

                            "click [data-action='delete-grade']": this._onDeleteClicked,

                            "change [data-name='feedback-method']": this._onFeedbackMethodChanged,

                            "change [data-name='feedback-message']": this._onFeedbackChanged

                        });

                    },

                    _onFeedbackChanged: function(event) {
                        event.preventDefault();

                        this.datasource.feedbackMessage = $(event.target).val();

                    },

                    _onFeedbackMethodChanged: function(event) {
                        event.preventDefault();

                        var feedbackMethod = $(event.target).val();

                        this._showFeedbackForm(feedbackMethod);

                    },

                    _showFeedbackForm: function(feedbackMethod) {

                        feedbackMethod = feedbackMethod || this.element.find("[data-name='feedback-method']").val();

                        this.datasource.feedbackMethod = feedbackMethod;

                        //this.datasource.feedback = this.datasource.feedback || {};

                        //this.datasource.feedback.feedbackMethod = feedbackMethod;

                        this.element.find("[data-section='feedback-form']").addClass("hide");

                        if (this.datasource.feedbackMethod === "simple") {
                            // show the textarea
                            this.element.find("[data-section='feedback-form'][data-form-name='simple']").removeClass("hide");
                            this.element.find("[data-name='feedback-message']").val(this.datasource.feedbackMessage);

                        } else if (this.datasource.feedbackMethod === "custom") {
                            // show the grading options
                            this._pushDefaultGrade();
                            this.element.find("[data-section='feedback-form'][data-form-name='custom']").removeClass("hide");
                        }

                    },

                    getGradeItemHtml: function(grade) {

                        var defaultText = grade.isDefault === true ? "(default)" : "";
                        var score = grade.isDefault === true ? "" : " >= " + grade.score;

                        return gradeItemHtml.replace(/\{name\}/g, grade.name).replace(/\{score\}/g, score).replace(/\{feedback\}/g, grade.feedback).replace(/\{default\}/g, defaultText);

                    },

                    _onDeleteClicked: function(event) {
                        event.preventDefault();

                        if (event.target.tagName !== "SPAN") return;

                        var gradeName = $(event.target).closest("[data-role='list-item']").data("name");

                        this._deleteGrade(gradeName);

                    },

                    _deleteGrade: function(gradeName) {

                        if (!gradeName) return;

                        var item = _.find(this.datasource.grade, {
                            name: gradeName
                        });

                        if (item.isDefault) {
                            alert("Default grade cannot be deleted. But you can change the grade name & feedback message if needed");
                            return;
                        }

                        var index = _.findIndex(this.datasource.grade, item);

                        // remove the grade from datasource, if it is not default grade
                        this.datasource.grade.splice(index, 1);

                        this._removeGradeFromUI(gradeName);


                    },

                    _removeGradeFromUI: function(gradeName) {

                        this.element.find("[data-role='list-item'][data-name='{0}']".replace(/\{0\}/g, gradeName)).remove();

                    },

                    _clearForm: function(event) {
                        event.preventDefault();

                        this._clear();

                    },

                    _onEditClicked: function(event) {
                        event.preventDefault();

                        if (event.target.tagName !== "A") return;



                        var name = $(event.target).closest("[data-role='list-item']").attr("data-name");

                        var obj = _.find(this.datasource.grade, {
                            name: name
                        });

                        this._fillForm(obj);
                    },

                    _fillForm: function(obj) {

                        this.currentGrade = obj;

                        this.element.find("[data-name='score']").prop("disabled", obj.isDefault);

                        this.element.find("[data-name='grade-name']").val(obj.name);

                        this.element.find("[data-name='score']").val(obj.score);

                        this.element.find("[data-name='feedback']").val(obj.feedback);

                        this.element.find("[data-action='add-feedback']").text("Save");

                    },

                    /* "name" if passed, it will find the element and replace it with new object */
                    _addGradeToUI: function(obj, name) {

                        var list = this.element.find("[data-name='grade-list']");

                        var selector = "[data-name='{name}']".replace(/\{name\}/, name || obj.name);

                        var element = this.element.find(selector);

                        var newElement = $(this.getGradeItemHtml(obj));

                        if (element.length > 0) {
                            //var isDefault = _.find(this.datasource.grade, { name: obj.name }).isDefault;
                            element.replaceWith(newElement);

                        } else {
                            list.append(newElement);
                        }

                    },

                    _onAddFeedbackClicked: function(event) {
                        event.preventDefault();

                        var text = $(event.target).text();

                        this._addFeedback();

                    },

                    _addFeedback: function() {

                        var name = this.element.find("[data-name='grade-name']").val();

                        var _grade = {
                            name: name,
                            score: parseInt(this.element.find("[data-name='score']").val()),
                            feedback: this.element.find("[data-name='feedback']").val(),
                            isDefault: false
                        };

                        // isDefault property must not be changed
                        var isDefault = false;

                        // If it is an edit, we need to find the actual name of the grade which is being edited.
                        // because the user might have edited the name of the grade also.
                        name = this.currentGrade ? this.currentGrade.name : name;

                        var matchFound = _.find(this.datasource.grade, {
                            name: name
                        });
                        if (matchFound) _grade.isDefault = isDefault = matchFound.isDefault;

                        if (isDefault) delete _grade.score;

                        this._updateDataSource(_grade);
                    },

                    _updateFeedback: function() {

                        var _grade = $.extend({}, this.currentGrade, {
                            name: this.element.find("[data-name='grade-name']").val(),
                            score: parseInt(this.element.find("[data-name='score']").val()),
                            feedback: this.element.find("[data-name='feedback']").val()
                        });

                    },


                    _updateDataSource: function(_grade) {

                        var errors = this._validate(_grade),
                            index, matchFound;

                        if (errors.length > 0) return;

                        if (this.currentGrade) {
                            index = _.findIndex(this.datasource.grade, _.find(this.datasource.grade, {
                                name: this.currentGrade.name
                            }));
                            if (index > -1) {
                                this.datasource.grade[index] = _grade;
                                this._addGradeToUI(_grade, this.currentGrade.name);
                            }
                        } else {
                            // though, it is not edit, which means this.currentGrade is null, chances for performing an edit is possible.
                            //  because, he may try to add a new grade with an exisiting name. 
                            //  in this case we are not throwing any error message, but we are updating the exisiting grade with the new score and feedback
                            matchFound = _.find(this.datasource.grade, {
                                name: _grade.name
                            });
                            index = matchFound ? _.findIndex(this.datasource.grade, matchFound) : -1;
                            if (index > -1) {
                                this.datasource.grade[index] = _grade;
                                this._addGradeToUI(_grade, _grade.name);
                            } else {
                                this.datasource.grade.push(_grade);
                                this._addGradeToUI(_grade);
                            }

                        }

                        this._clear();
                    },

                    _clear: function() {
                        this.currentGrade = null;
                        this.element.find("[data-action='add-feedback']").text("Add");
                        this.element.find("[data-name='grade-name']").val("");
                        this.element.find("[data-name='score']").val("");
                        this.element.find("[data-name='feedback']").val("");
                        this.element.find("[data-name='score']").prop("disabled", false);
                    },



                    _validate: function(grade) {
                        var errors = [];

                        if (grade.isDefault === false && isNaN(grade.score)) errors.push("Score is invalid");

                        if (!grade.feedback) errors.push("feedback must not be empty");


                        return errors;

                    }


                });

            })();;
            (function() {

                "use strict";

                var html = window.dw.templates.initial_setup({}),

                    state = $.ab.state;

                $.widget("dw.initialstep", $.dw.assessmentbuilderbase, {

                    options: {

                    },

                    datasource: null,

                    _create: function() {

                        this._super();

                        this._bind();

                    },

                    _init: function() {

                        var _selector;

                        this.element.html(html);

                        this.element.find("[data-role='editor']").jqxEditor({
                            tools: 'bold italic underline | format font size | color background | left center right'
                        });


                        this.datasource = this.datasource || state;

                        this.element.find("[data-name='assessment-title']").val(this.datasource.title);

                        //this.element.find("[data-name='assessment-description']").val(this.datasource.description);

                        this.element.find("[data-name='assessment-description']").val(this.datasource.description);

                        console.log(this.datasource.retakeLimit);

                        this.element.find("[data-name='retake']").val(this.datasource.retakeLimit);


                        if (!this.options.scoring_configuration) {
                            this.element.find("[data-section='scoring-method']").remove();
                        } else {
                            this.datasource.scoringMethod = this.datasource.scoringMethod || this.options.scoring_configuration.default_scoring_method;
                            _selector = "[data-section='scoring-method'] [name='scoring-method'][value='{0}']".replace(/\{0\}/, this.datasource.scoringMethod);
                            this.element.find(_selector).prop("checked", true);
                        }


                        if (this.options.enable_retake === "no") {
                            this.element.find("[data-section='retake']").remove();
                        } else {
                            // the below line i've commented out, because this was causing an issue.
                            // not sure how to write this condition. for now, lets keep it as it is.
                            // don't remove the code.
                            //this.datasource.retakeLimit = this.datasource.retakeLimit || this.options.retake_limit;
                            this.element.find("[data-section='retake'] [data-name='retake']").val(this.datasource.retakeLimit);
                        }

                        this.datasource.stagingMethod = this.datasource.stagingMethod || this.options.default_staging_method;
                        _selector = "[name='staging-method'][value='{0}']".replace(/\{0\}/, this.datasource.stagingMethod);
                        this.element.find(_selector).prop("checked", true);

                    },


                    _bind: function() {

                        this._on(this.element, {

                            "change [data-name='assessment-title']": this._onTitleChanged,

                            "change [data-name='assessment-description']": this._onDescriptionChanged,

                            "click [data-section='scoring-method'] [name='scoring-method']": this._onScoringMethodChanged,

                            "click [name='staging-method']": this._onStagingMethodChanged,

                            "change [data-name='retake']": this._onRetakeLimitChanged,

                            "click span.input--hoshi": this._onDescriptionFocused,

                            "blur span.input--hoshi": this._onDescriptionBlured

                        });

                    },

                    _onDescriptionFocused: function(event) {
                        $(event.target).closest("span.input--hoshi").addClass("active");
                    },

                    _onDescriptionBlured: function(event) {
                        $(event.target).closest("span.input--hoshi").removeClass("active");
                    },

                    _onStagingMethodChanged: function(event) {
                        this.datasource.stagingMethod = $(event.target).val();
                    },

                    _onScoringMethodChanged: function(event) {
                        this.datasource.scoringMethod = $(event.target).val();
                    },

                    _onTitleChanged: function(event) {
                        var value = $(event.target).val();
                        this.datasource.title = value;

                        $(window).trigger("assessmentbuilder:titlechanged", {
                            data: value
                        });

                    },

                    _onDescriptionChanged: function(event) {
                        //var value = $(event.target).val();

                        var value = this.element.find("[data-name='assessment-description']").jqxEditor("val");

                        this.datasource.description = value;
                    },



                    _onRetakeLimitChanged: function(event) {
                        var value = $(event.target).val();
                        console.log("_onRetakeLimitChanged");

                        console.log(value);

                        this.datasource.retakeLimit = parseInt(value);
                    }

                });

            })();;
            (function() {

                "use strict";

                window.assessmentbuilder = {};

                window.assessmentbuilder.util = {};

                /*


                */

                var json = '{"id":1,"title":"US Election","description":"This is an election poll. Vote for the candidate","retakeLimit":"0","questions":[{"id":"1","title":"To whom you would like to vote ?","scoringAt":null,"score":"0","randomizeChoices":"true","choiceType":"radiobutton","required":"true","tags":"anxiety","choices":[{"id":"1","title":"Donald Trump","score":"0","correct":"false"},{"id":"2","title":"Hilary Clinton","score":"0","correct":"false"}],"edit":false}],"feedback":{"feedbackMethod":"simple","feedbackMessage":"Thanks for voting."},"stagingMethod":"one-by-one"}';


                var configJson = '{"allowed_choice_types":[{"title":"Multiple Choice","value":"checkbox"},{"title":"Single Choice","value":"radiobutton"},{"title":"Single Line","value":"singleline"},{"title":"Multi Line","value":"multiline"}],"default_choice_type":"checkbox","minimum_no_of_questions_required":"1","maximum_no_of_questions_allowed":"-1","import_questions":"yes","all_mandatory_questions":"yes","retake_limit":"-1","enable_retake":"yes","tagging":"no","scoring_configuration":null,"default_question":"Untitled Question {0}","default_choice":"Untitled Choice {0}"}';


                assessmentbuilder.util.parseConfigJson = function(config) {

                    config = JSON.parse(config);

                    config.minimum_no_of_questions_required = parseInt(config.minimum_no_of_questions_required);

                    config.maximum_no_of_questions_allowed = parseInt(config.maximum_no_of_questions_allowed);

                    config.retake_limit = parseInt(config.retake_limit);

                    return config;

                };


                assessmentbuilder.util.convertType = function(assessmentJson) {

                    assessmentJson = JSON.parse(assessmentJson);


                    assessmentJson.id = parseInt(assessmentJson.id);
                    assessmentJson.retakeLimit = parseInt(assessmentJson.retakeLimit);


                    // if questions is not an array, make it as an array
                    if (!assessmentJson.questions.length) assessmentJson.questions = [assessmentJson.questions];

                    assessmentJson.questions.map(function(q) {

                        q.id = parseInt(q.id);

                        if (q.score) q.score = parseInt(q.score);

                        if (q.required) q.required = q.required == "true";
                        if (q.randomizeChoices) q.randomizeChoices = q.randomizeChoices == "true";


                        // if choices is an array
                        if (q.choice.length > 0) {

                            q.choice.map(function(c) {

                                c.id = parseInt(c.id);


                                if (c.score) c.score = parseInt(c.score);

                                if (c.correct) c.correct = c.correct == "true";

                            });

                        }

                    });

                    console.log(assessmentJson);


                    return assessmentJson;
                };




                //var assessmentListJSON = { "Table": [{ "ConfigurationName": "Test", "NoOfAssessment": 2 }, { "ConfigurationName": "Quiz", "NoOfAssessment": 8 }, { "ConfigurationName": "Survey", "NoOfAssessment": 4 }, { "ConfigurationName": "Poll", "NoOfAssessment": 102 }, { "ConfigurationName": "Checklist", "NoOfAssessment": 48 }], "Table1": [{ "AssessmentID": 1, "AssessmentName": "New Employee Survey", "ConfigurationName": "Survey", "CreatedBy": null, "CreatedDate": "19/09/2010", "UpdatedBy": null, "UpdatedDate": null }, { "AssessmentID": 50, "AssessmentName": "Pulse Check", "ConfigurationName": "Poll", "CreatedBy": null, "CreatedDate": "28/11/2010", "UpdatedBy": null, "UpdatedDate": "30/08/2012" }, { "AssessmentID": 62, "AssessmentName": "Pulse Check", "ConfigurationName": "Poll", "CreatedBy": null, "CreatedDate": "21/06/2012", "UpdatedBy": null, "UpdatedDate": "14/10/2012" }, { "AssessmentID": 64, "AssessmentName": "Pulse Check", "ConfigurationName": "Poll", "CreatedBy": null, "CreatedDate": "14/10/2012", "UpdatedBy": "Site Admin", "UpdatedDate": "03/02/2014" }, { "AssessmentID": 65, "AssessmentName": "Pulse Check", "ConfigurationName": "Poll", "CreatedBy": null, "CreatedDate": "13/12/2012", "UpdatedBy": null, "UpdatedDate": "13/12/2012" }, { "AssessmentID": 66, "AssessmentName": "Pulse Check", "ConfigurationName": "Poll", "CreatedBy": null, "CreatedDate": "09/04/2013", "UpdatedBy": null, "UpdatedDate": "29/05/2013" }, { "AssessmentID": 67, "AssessmentName": "Pulse Check", "ConfigurationName": "Poll", "CreatedBy": null, "CreatedDate": "30/05/2013", "UpdatedBy": null, "UpdatedDate": "30/05/2013" }, { "AssessmentID": 68, "AssessmentName": "Pulse Check", "ConfigurationName": "Poll", "CreatedBy": null, "CreatedDate": "08/07/2013", "UpdatedBy": null, "UpdatedDate": "08/07/2013" }, { "AssessmentID": 90, "AssessmentName": "<H1>What is your favorite food?</H1>", "ConfigurationName": "Poll", "CreatedBy": null, "CreatedDate": "01/03/2014", "UpdatedBy": null, "UpdatedDate": null }, { "AssessmentID": 93, "AssessmentName": "What is your favorite fruit?<span class=\"Apple-tab", "ConfigurationName": "Poll", "CreatedBy": null, "CreatedDate": "03/03/2014", "UpdatedBy": null, "UpdatedDate": null }, { "AssessmentID": 175, "AssessmentName": "Babyproofing Your Home", "ConfigurationName": "Checklist", "CreatedBy": "Caroline Nichols", "CreatedDate": "02/07/2015", "UpdatedBy": "Site Admin", "UpdatedDate": "10/07/2015" }, { "AssessmentID": 194, "AssessmentName": "Ready for Labor", "ConfigurationName": "Checklist", "CreatedBy": "Caroline Nichols", "CreatedDate": "19/08/2015", "UpdatedBy": "Caroline Nichols", "UpdatedDate": "08/10/2015" }, { "AssessmentID": 196, "AssessmentName": "Pulse Check", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "01/09/2015", "UpdatedBy": null, "UpdatedDate": null }, { "AssessmentID": 202, "AssessmentName": "Delete Me", "ConfigurationName": "Checklist", "CreatedBy": "Casey Bagby", "CreatedDate": "10/09/2015", "UpdatedBy": null, "UpdatedDate": null }, { "AssessmentID": 203, "AssessmentName": "delete me", "ConfigurationName": "Quiz", "CreatedBy": "Casey Bagby", "CreatedDate": "10/09/2015", "UpdatedBy": null, "UpdatedDate": null }, { "AssessmentID": 204, "AssessmentName": "Delete Me", "ConfigurationName": "Test", "CreatedBy": "Casey Bagby", "CreatedDate": "10/09/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "10/09/2015" }, { "AssessmentID": 205, "AssessmentName": "The Seven Essential Things to Do BEFORE Labor Begi", "ConfigurationName": "Checklist", "CreatedBy": "Caroline Nichols", "CreatedDate": "15/09/2015", "UpdatedBy": null, "UpdatedDate": null }, { "AssessmentID": 213, "AssessmentName": "Rate Your First Prenatal Visit", "ConfigurationName": "Survey", "CreatedBy": "Caroline Nichols", "CreatedDate": "22/09/2015", "UpdatedBy": "Site Admin", "UpdatedDate": "18/04/2016" }, { "AssessmentID": 214, "AssessmentName": "Have you had your first prenatal visit?", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "22/09/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "24/03/2016" }, { "AssessmentID": 215, "AssessmentName": "What type of prenatal care provider have you chose", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "22/09/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "24/03/2016" }, { "AssessmentID": 216, "AssessmentName": "Which type of provider do you think you will choos", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "22/09/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "24/03/2016" }, { "AssessmentID": 217, "AssessmentName": "Have you attended a birthing class?", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "22/09/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "24/03/2016" }, { "AssessmentID": 225, "AssessmentName": "Life Unscripted: A Few Questions About Who You Are", "ConfigurationName": "Checklist", "CreatedBy": "Caroline Nichols", "CreatedDate": "07/10/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "01/02/2016" }, { "AssessmentID": 226, "AssessmentName": "Are you ready for the big event?  Which one of the", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "12/10/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "24/03/2016" }, { "AssessmentID": 227, "AssessmentName": "Birth Plan Survey", "ConfigurationName": "Survey", "CreatedBy": "Caroline Nichols", "CreatedDate": "12/10/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "24/03/2016" }, { "AssessmentID": 228, "AssessmentName": "How are you planning on managing the pain of labor", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "12/10/2015", "UpdatedBy": "Kim DeMars", "UpdatedDate": "08/07/2016" }, { "AssessmentID": 229, "AssessmentName": "How Have You Been Feeling Over the Last Two Weeks?", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "27/10/2015", "UpdatedBy": "Site Admin", "UpdatedDate": "26/08/2016" }, { "AssessmentID": 230, "AssessmentName": "How are you going to quit smoking?", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "28/10/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "24/03/2016" }, { "AssessmentID": 237, "AssessmentName": "Physical Development: 2 Months", "ConfigurationName": "Checklist", "CreatedBy": "Casey Bagby", "CreatedDate": "30/10/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/06/2016" }, { "AssessmentID": 238, "AssessmentName": "Cognitive Development: 2 Months", "ConfigurationName": "Checklist", "CreatedBy": "Casey Bagby", "CreatedDate": "02/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "02/11/2015" }, { "AssessmentID": 239, "AssessmentName": "Social-Emotional Development: 2 Months", "ConfigurationName": "Checklist", "CreatedBy": "Casey Bagby", "CreatedDate": "02/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "30/06/2016" }, { "AssessmentID": 240, "AssessmentName": "Language and Communication: 2 Months", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "02/11/2015" }, { "AssessmentID": 241, "AssessmentName": "Physical Development: 4 Months", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "02/11/2015" }, { "AssessmentID": 242, "AssessmentName": "Cognitive Development: 4 Months", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "02/11/2015" }, { "AssessmentID": 243, "AssessmentName": "Social-Emotional Development: 4 Months", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "02/11/2015" }, { "AssessmentID": 244, "AssessmentName": "Language and Communication Development: 4 Months", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "02/11/2015" }, { "AssessmentID": 245, "AssessmentName": "Physical Development: 6 Months", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Site Admin", "UpdatedDate": "30/06/2016" }, { "AssessmentID": 246, "AssessmentName": "Cognitive Development: 6 Months", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Site Admin", "UpdatedDate": "30/06/2016" }, { "AssessmentID": 247, "AssessmentName": "Social-Emotional Development: 6 Months", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Site Admin", "UpdatedDate": "30/06/2016" }, { "AssessmentID": 248, "AssessmentName": "Language and Communication: 6 Months", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Site Admin", "UpdatedDate": "30/06/2016" }, { "AssessmentID": 249, "AssessmentName": "Physical Development: 9 Months", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "30/06/2016" }, { "AssessmentID": 250, "AssessmentName": "Cognitive Development: 9 Months", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "02/11/2015" }, { "AssessmentID": 251, "AssessmentName": "Social-Emotional Development: 9 Months", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "30/06/2016" }, { "AssessmentID": 252, "AssessmentName": "Language and Communication Development: 9 Months", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "30/06/2016" }, { "AssessmentID": 253, "AssessmentName": "Physical Development: 1 Year", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "30/06/2016" }, { "AssessmentID": 254, "AssessmentName": "Cognitive Development: 1 Year", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "02/11/2015" }, { "AssessmentID": 255, "AssessmentName": "Social-Emotional Development: 1 Year", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "02/11/2015" }, { "AssessmentID": 256, "AssessmentName": "Language and Communication Development: 1 Year", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "02/11/2015" }, { "AssessmentID": 260, "AssessmentName": "Language and Communication: 18 Months", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": null, "UpdatedDate": null }, { "AssessmentID": 262, "AssessmentName": "Physical Development: 2 Years", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "02/11/2015" }, { "AssessmentID": 263, "AssessmentName": "Cognitive Development: 2 Years", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "02/11/2015" }, { "AssessmentID": 264, "AssessmentName": "Social-Emotional Development: 2 Years", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "02/11/2015" }, { "AssessmentID": 265, "AssessmentName": "Language and Communication: 2 Years", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": null, "UpdatedDate": null }, { "AssessmentID": 266, "AssessmentName": "Language and Communication: 2 Years", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "02/11/2015" }, { "AssessmentID": 267, "AssessmentName": "Physical Development: 3 Years", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "30/06/2016" }, { "AssessmentID": 268, "AssessmentName": "Cognitive Development: 3 Years", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "02/11/2015" }, { "AssessmentID": 269, "AssessmentName": "Social-Emotional Development: 3 Years", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "02/11/2015" }, { "AssessmentID": 270, "AssessmentName": "Language and Communication Development: 3 Years", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "02/11/2015" }, { "AssessmentID": 271, "AssessmentName": "Physical Development: 4 Years", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "30/06/2016" }, { "AssessmentID": 272, "AssessmentName": "Cognitive Development: 4 Years", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": null, "UpdatedDate": null }, { "AssessmentID": 273, "AssessmentName": "Cognitive Development: 4 Years", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "02/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "02/11/2015" }, { "AssessmentID": 274, "AssessmentName": "Physical Development: 18 Months", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "03/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "03/11/2015" }, { "AssessmentID": 275, "AssessmentName": "Cognitive Development: 18 Months", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "03/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "03/11/2015" }, { "AssessmentID": 276, "AssessmentName": "Social-Emotional Development: 18 Months", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "03/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "03/11/2015" }, { "AssessmentID": 277, "AssessmentName": "Language and Communication Development: 18 Months", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "03/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "30/06/2016" }, { "AssessmentID": 278, "AssessmentName": "Social-Emotional Development: 4 Years", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "03/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "03/11/2015" }, { "AssessmentID": 279, "AssessmentName": "Language and Communication Development: 4 Years", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "03/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "30/06/2016" }, { "AssessmentID": 280, "AssessmentName": "Physical Development: 5 Years", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "03/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "03/11/2015" }, { "AssessmentID": 281, "AssessmentName": "Cognitive Development: 5 Years", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "03/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "03/11/2015" }, { "AssessmentID": 282, "AssessmentName": "Social-Emotional Development: 5 Years", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "03/11/2015", "UpdatedBy": "Jonetta Smith", "UpdatedDate": "03/11/2015" }, { "AssessmentID": 283, "AssessmentName": "Language and Communication Development: 5 Years", "ConfigurationName": "Checklist", "CreatedBy": "Jonetta Smith", "CreatedDate": "03/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "30/06/2016" }, { "AssessmentID": 284, "AssessmentName": "Do You Smoke?", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "18/11/2015", "UpdatedBy": "Site Admin", "UpdatedDate": "18/04/2016" }, { "AssessmentID": 285, "AssessmentName": "How supportive has your partner been during your p", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "19/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/03/2016" }, { "AssessmentID": 286, "AssessmentName": "On average, how many cigarettes do you smoke each ", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "19/11/2015", "UpdatedBy": "Site Admin", "UpdatedDate": "23/06/2016" }, { "AssessmentID": 287, "AssessmentName": "Do you drink alcohol?", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "19/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "30/03/2016" }, { "AssessmentID": 288, "AssessmentName": "On average, how many servings of alcoholic beverag", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "19/11/2015", "UpdatedBy": "Site Admin", "UpdatedDate": "23/06/2016" }, { "AssessmentID": 289, "AssessmentName": "What is your favorite part of being pregnant?", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "19/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "12/01/2016" }, { "AssessmentID": 290, "AssessmentName": "What is the worst part of being pregnant?", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "19/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "12/01/2016" }, { "AssessmentID": 291, "AssessmentName": "How many children do you/are you planning to have?", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "19/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "08/01/2016" }, { "AssessmentID": 292, "AssessmentName": "What discipline method do you use most with your t", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "19/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "12/01/2016" }, { "AssessmentID": 293, "AssessmentName": "What's the hardest part of parenting for you?", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "19/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "12/01/2016" }, { "AssessmentID": 294, "AssessmentName": "I hope my baby looks like", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "19/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "12/01/2016" }, { "AssessmentID": 295, "AssessmentName": "How many strangers have asked to touch your baby b", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "19/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "12/07/2016" }, { "AssessmentID": 296, "AssessmentName": "What is your most common craving?", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "19/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "24/03/2016" }, { "AssessmentID": 297, "AssessmentName": "I will name my baby", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "19/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "24/03/2016" }, { "AssessmentID": 298, "AssessmentName": "Where did you find your most trusted babysitter?", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "19/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "08/01/2016" }, { "AssessmentID": 299, "AssessmentName": "How often does your family eat outside the home?", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "19/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "08/01/2016" }, { "AssessmentID": 300, "AssessmentName": "I offer my child(ren) nutritional supplements.", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "19/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "12/01/2016" }, { "AssessmentID": 301, "AssessmentName": "My child mostly likes to listen to:", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "19/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/03/2016" }, { "AssessmentID": 302, "AssessmentName": "Of the following, my baby most likes the taste of", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "19/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "08/01/2016" }, { "AssessmentID": 303, "AssessmentName": "Of the following, my child's favorite \"food group\"", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "19/11/2015", "UpdatedBy": "Site Admin", "UpdatedDate": "09/01/2016" }, { "AssessmentID": 304, "AssessmentName": "My child likes to play with:", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "19/11/2015", "UpdatedBy": "Casey Bagby", "UpdatedDate": "24/03/2016" }, { "AssessmentID": 307, "AssessmentName": "Goodnight, Love: What Do You Think?", "ConfigurationName": "Poll", "CreatedBy": "Caroline Nichols", "CreatedDate": "14/01/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "24/03/2016" }, { "AssessmentID": 308, "AssessmentName": "Who is supporting you the most during your pregnan", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "29/03/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/03/2016" }, { "AssessmentID": 309, "AssessmentName": "Does your partner, or someone else living in your ", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "29/03/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/03/2016" }, { "AssessmentID": 310, "AssessmentName": "How are you feeding baby?", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "30/03/2016", "UpdatedBy": "Site Admin", "UpdatedDate": "29/06/2016" }, { "AssessmentID": 311, "AssessmentName": "Are you still breastfeeding?", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "30/03/2016", "UpdatedBy": "Site Admin", "UpdatedDate": "24/08/2016" }, { "AssessmentID": 312, "AssessmentName": "Safe Sleep Inventory", "ConfigurationName": "Quiz", "CreatedBy": "Casey Bagby", "CreatedDate": "30/03/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "30/03/2016" }, { "AssessmentID": 313, "AssessmentName": "Which items do you keep in the crib while baby sle", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "30/03/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "30/03/2016" }, { "AssessmentID": 314, "AssessmentName": "Does SIDS worry you?", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "30/03/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "30/03/2016" }, { "AssessmentID": 315, "AssessmentName": "Which of these describes how your baby sleeps most", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "30/03/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "30/03/2016" }, { "AssessmentID": 316, "AssessmentName": "How are you planning to feed baby?", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/04/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/04/2016" }, { "AssessmentID": 317, "AssessmentName": "What type of car seat do you have or plan to purch", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/04/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/04/2016" }, { "AssessmentID": 318, "AssessmentName": "What does your family look like?", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/04/2016", "UpdatedBy": "Caroline Nichols", "UpdatedDate": "05/05/2016" }, { "AssessmentID": 319, "AssessmentName": "Where We Stand: A Relationship Assessment Tool", "ConfigurationName": "Quiz", "CreatedBy": "Casey Bagby", "CreatedDate": "26/04/2016", "UpdatedBy": "Site Admin", "UpdatedDate": "01/07/2016" }, { "AssessmentID": 320, "AssessmentName": "Word Gap", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "10/05/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "10/05/2016" }, { "AssessmentID": 321, "AssessmentName": "Protective Factors: Family Support", "ConfigurationName": "Quiz", "CreatedBy": "Casey Bagby", "CreatedDate": "17/05/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "03/08/2016" }, { "AssessmentID": 322, "AssessmentName": "Protective Factors: Social Support", "ConfigurationName": "Quiz", "CreatedBy": "Casey Bagby", "CreatedDate": "17/05/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "03/08/2016" }, { "AssessmentID": 323, "AssessmentName": "Depression, Anxiety, and Stress Scale (DASS)", "ConfigurationName": "Quiz", "CreatedBy": "Casey Bagby", "CreatedDate": "18/05/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "18/05/2016" }, { "AssessmentID": 324, "AssessmentName": "Edinburgh Postnatal Depression Scale", "ConfigurationName": "Quiz", "CreatedBy": "Casey Bagby", "CreatedDate": "18/05/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "18/05/2016" }, { "AssessmentID": 326, "AssessmentName": "Milestones 2 months", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "29/07/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/07/2016" }, { "AssessmentID": 327, "AssessmentName": "Milestones 4 months", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "29/07/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/07/2016" }, { "AssessmentID": 328, "AssessmentName": "Milestones 6 months", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "29/07/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/07/2016" }, { "AssessmentID": 329, "AssessmentName": "Milestones 9 months", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "29/07/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/07/2016" }, { "AssessmentID": 330, "AssessmentName": "Milestones 12 months", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "29/07/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/07/2016" }, { "AssessmentID": 331, "AssessmentName": "Milestones 18 months", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "29/07/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/07/2016" }, { "AssessmentID": 332, "AssessmentName": "Milestones 2 years", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "29/07/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/07/2016" }, { "AssessmentID": 333, "AssessmentName": "Milestones 3 years", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "29/07/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/07/2016" }, { "AssessmentID": 334, "AssessmentName": "Milestones 4 years", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "29/07/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/07/2016" }, { "AssessmentID": 335, "AssessmentName": "Milestones 5 years", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "29/07/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/07/2016" }, { "AssessmentID": 336, "AssessmentName": "Milestones 18 months Check-Up", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "29/07/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/07/2016" }, { "AssessmentID": 337, "AssessmentName": "Milestones 2 years Check-Up", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "29/07/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/07/2016" }, { "AssessmentID": 338, "AssessmentName": "Milestones 3 years Check-Up", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "29/07/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/07/2016" }, { "AssessmentID": 339, "AssessmentName": "Milestones 4 years Check-Up", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "29/07/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/07/2016" }, { "AssessmentID": 340, "AssessmentName": "Milestones 5 years Check-Up", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "29/07/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "29/07/2016" }, { "AssessmentID": 341, "AssessmentName": "Is your child meeting intellectual development mil", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "01/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "01/08/2016" }, { "AssessmentID": 342, "AssessmentName": "How much television does your child watch each day", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "01/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "03/08/2016" }, { "AssessmentID": 343, "AssessmentName": "Which word best describes your temperament?", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 344, "AssessmentName": "What is a goal you have reached in the past year?", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 345, "AssessmentName": "How do you get everything done?", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 346, "AssessmentName": "What is your parenting style?", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 347, "AssessmentName": "Growing up, your parents:", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 348, "AssessmentName": "What is the role of a father?", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 349, "AssessmentName": "When I was growing up, my father:", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 350, "AssessmentName": "Is spanking a good method of discipline?", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 351, "AssessmentName": "Children are:", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 352, "AssessmentName": "What is the best way to reach a goal?", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 353, "AssessmentName": "My partner criticizes me.", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 354, "AssessmentName": "My partner makes me feel:", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 355, "AssessmentName": "As a child, I experienced:", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 356, "AssessmentName": "I had a parent who:", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 357, "AssessmentName": "As a child, the person I could most trust to tell ", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 358, "AssessmentName": "In my family, we usually take time to talk about o", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 359, "AssessmentName": "As a child, discipline in my family was most like:", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 360, "AssessmentName": "As a child, my role in the family was:", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 361, "AssessmentName": "Does your parenting style mirror the way your pare", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 362, "AssessmentName": "Do tech toys have a negative impact on a child's l", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 363, "AssessmentName": "Which area of your child's development do you feel", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 364, "AssessmentName": "Are you concerned that your child might have some ", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 365, "AssessmentName": "Do you track your child's developmental milestones", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 366, "AssessmentName": "Has your doctor done developmental screenings at y", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 367, "AssessmentName": "How do you decide what your child will eat in the ", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 368, "AssessmentName": "What is the best way to ensure that children are w", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 369, "AssessmentName": "When it comes to emotions, my child is:", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 370, "AssessmentName": "What is your child's activity level?", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 371, "AssessmentName": "How does your child usually react when they meet a", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 372, "AssessmentName": "How intensely does your child react when happy or ", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 373, "AssessmentName": "Do you and your child have the same personality ty", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 374, "AssessmentName": "How does your child behave when engaged in an acti", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "05/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "05/08/2016" }, { "AssessmentID": 375, "AssessmentName": "How do you plan to pay for your child's dental car", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "22/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "22/08/2016" }, { "AssessmentID": 376, "AssessmentName": "How will you protect your child's dental health?", "ConfigurationName": "Poll", "CreatedBy": "Casey Bagby", "CreatedDate": "22/08/2016", "UpdatedBy": "Casey Bagby", "UpdatedDate": "22/08/2016" }, { "AssessmentID": 377, "AssessmentName": "Test Assessment", "ConfigurationName": "Quiz", "CreatedBy": "Site Admin", "CreatedDate": "01/09/2016", "UpdatedBy": "Site Admin", "UpdatedDate": "01/09/2016" }, { "AssessmentID": 378, "AssessmentName": "US Election", "ConfigurationName": "Test", "CreatedBy": "Site Admin", "CreatedDate": "14/10/2016", "UpdatedBy": null, "UpdatedDate": null }, { "AssessmentID": 384, "AssessmentName": "Health Care Survey", "ConfigurationName": "Survey", "CreatedBy": "Site Admin", "CreatedDate": "18/10/2016", "UpdatedBy": "Site Admin", "UpdatedDate": "18/10/2016" }] };

                assessmentbuilder.util.prepareDasboardObject = function(assessmentListJSON) {
                    var assessmentTypes = [];

                    assessmentTypes = assessmentListJSON.Table;

                    if (!assessmentTypes.length) assessmentTypes = [assessmentTypes];

                    assessmentTypes = assessmentTypes.map(function(at) {

                        return {
                            "type": at.ConfigurationName,
                            "count": at.NoOfAssessment
                        };

                    });


                    var assessments = [];

                    assessments = assessmentListJSON.Table1;

                    if (!assessments.length) assessments = [assessments];

                    assessments = assessments.map(function(as) {

                        return {
                            "type": as.ConfigurationName,
                            "title": as.AssessmentName,
                            "tooltiptext": "",
                            "createdBy": as.CreatedBy,
                            "createdDate": as.CreatedDate,
                            "updatedBy": as.UpdatedBy,
                            "updatedDate": as.UpdatedDate,
                            "id": as.AssessmentID
                        };

                    });

                    var dashboardObject = {
                        assessmentTypes: assessmentTypes,
                        assessments: assessments
                    };

                    console.log(dashboardObject);

                    return dashboardObject;
                };


                //prepareDasboardObject(assessmentListJSON);


            })();
        });
    }
})();
