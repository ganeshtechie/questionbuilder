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

                var template = window.dw.templates.staging_startpage;


                $.widget("dw.staging", {

                    options: {},

                    _create: function() {

                        var data = {

                            title: "Health Care Assessment",

                            description: "Designed for everyone, everywhere. Bootstrap makes front-end web development faster and easier. It's made for folks of all skill levels, devices of all shapes, and projects of all sizes. Sass and Less support Preprocessors Bootstrap ships with vanilla CSS, but its source code utilizes the two most popular CSS preprocessors, Less and Sass. Quickly get started with precompiled CSS or build on the source. Responsive across devices One framework, every device. Bootstrap easily and efficiently scales your websites and applications with a single code base, from phones to tablets to desktops with CSS media queries. Components Full of features With Bootstrap, you get extensive and beautiful documentation for common HTML elements, dozens of custom HTML and CSS components, and awesome jQuery plugins.",

                            totalQuestions: 10,

                            totalScore: 100,

                            retakeLimit: 5

                        };

                        var html = template(data);

                        this.element.html(html);
                    }

                });

            })();;
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


            })();;
            /*
            	"OneByOne" - This plugin makes the assessment to show one question at once. It also puts a navigation button to move back and forth. 
            */

            (function() {

                "use strict";



                $.fn.oneByOne = function() {

                    function showPrevious(element) {

                        var root = $(event.target).closest("[data-obo]");

                        var nav = root.find("[data-obo-role='nav']");

                        var currentNode = root.find("[data-obo-role='item']:visible");

                        var siblings = root.find("[data-obo-role='item']");

                        var poisition = siblings.index(currentNode);


                        if (poisition > 0) {

                            // hide the current node
                            currentNode.hide();

                            poisition -= 1;

                            //siblings.removeAttr("value");

                            // show the previous node
                            $(siblings.get(poisition)).show().attr("value", poisition + 1);


                            // if the new position is 0, which means the first node is the active node, then hide the previous button
                            if (poisition > 0) {
                                nav.find("[data-name='previous']").show();
                            } else if (poisition === 0) {
                                nav.find("[data-name='previous']").hide();
                            }

                            if (poisition < siblings.length - 1) {
                                nav.find("[data-name='next']").show();
                            }

                        }

                        console.log("next");

                    }

                    function showNext(event) {
                        event.preventDefault();

                        var root = $(event.target).closest("[data-obo]");

                        var nav = root.find("[data-obo-role='nav']");

                        var currentNode = root.find("[data-obo-role='item']:visible");

                        var siblings = root.find("[data-obo-role='item']");

                        var poisition = siblings.index(currentNode);


                        if (poisition < siblings.length - 1) {

                            currentNode.hide();

                            poisition += 1;

                            $(siblings.get(poisition)).show().attr("value", poisition + 1);

                            if (poisition === siblings.length - 1) {
                                $(event.target).hide();
                            } else {
                                $(event.target).show();
                            }

                            if (poisition > 0) {
                                nav.find("[data-name='previous']").show();
                            } else if (poisition === 0) {
                                nav.find("[data-name='previous']").hide();
                            }

                        }

                        console.log("next");

                    }




                    this.each(function() {

                        var root = $(this);

                        // added this element in the root, to help finding  for any child elements 
                        root.attr("data-obo", "");

                        root.on("click", "[data-name='next']", showNext);

                        root.on("click", "[data-name='previous']", showPrevious);

                        var list = root.find("[data-obo-role='list']");

                        var items = list.find("[data-obo-role='item']");

                        var nav = root.find("[data-obo-role='nav']");

                        var btnPrevious = $("<button type='button' class='btn btn-primary' data-name='previous'>Previous</button>");
                        var btnNext = $("<button type='button' data-name='next' class='btn btn-primary'>Next</button>");

                        nav.append([btnPrevious, btnNext]);

                        btnPrevious.hide();

                        items.hide();

                        // show only first item
                        $(items.get(0)).show();

                    });

                    return this;

                };



            })();;
            (function() {
                "use strict";

                var events = {
                    submit: "assessment:submit_response"
                };

                $.widget("dw.assessmentplayer", {

                    options: {

                        staging_method: "all-at-once",

                        title: "A health care assessment",

                        datasource: []

                    },

                    _create: function() {

                        var template = "<div><h1>{0}</h1></div>".replace(/\{0\}/, this.options.title);

                        template += '<ol data-name="question-list" data-obo-role="list" class="list-styled"></ol><div data-obo-role="nav"></div><div class="text-center"><button class="btn btn-primary" data-action="submit">Submit</button></div>';

                        // use es6 to store the html
                        this.element.html(template);

                        this._bind();
                        // 1. Render your questions
                        this._render();

                        if (this.options.staging_method === "one-by-one") {

                            this.element.oneByOne();
                        }

                        // 2. initialize all the widgets
                        this.element.find("[data-choice-type='checkbox']").dwplay_checkbox();
                        this.element.find("[data-choice-type='radiobutton']").dwplay_radiobutton();
                        this.element.find("[data-choice-type='singleline']").dwplay_singleline();
                        this.element.find("[data-choice-type='multiline']").dwplay_multiline();

                    },
                    _bind: function() {
                        this._on(this.element, {
                            "click [data-action='submit']": this._submitResponse
                        });
                    },
                    _getHtml: function(question) {

                        var html = "";
                        if (question.type === "radiobutton") {
                            html = window.dw.templates.play_radiobutton(question);
                        } else if (question.type === "checkbox") {
                            html = window.dw.templates.play_checkboxes(question);
                        } else if (question.type === "singleline") {
                            html = window.dw.templates.play_singleline(question);
                        } else if (question.type === "multiline") {
                            html = window.dw.templates.play_multiline(question);
                        }
                        html = "<li data-obo-role='item'>" + html + "</li>";
                        return html;
                    },

                    _render: function() {

                        var isArray = Object.prototype.toString.call(someVar) === '[object Array]';

                        if (!isArray) this.options.datasource = [this.options.datasource];

                        this.options.datasource.map(function(q) {

                            q.id = parseInt(q.id);
                            q.required = q.required === 'true';

                            if (q.choice) {
                                q.choice.map(function(c) {

                                    c.id = parseInt(c.id);

                                });
                            }

                        });



                        for (var i = 0; i < this.options.datasource.length; i++) {
                            this.element.find("[data-name='question-list']").append(this._getHtml(this.options.datasource[i]));
                        }
                    },
                    _getAllResponses: function() {
                        var questions = this.element.find("[data-name='play-question']"),
                            responses = [];
                        questions.each(function() {
                            var questionId = parseInt($(this).data("qid"));
                            if ($(this).data("value")) {
                                var response = $(this).data("value");
                                response = $.extend({
                                    questionId: questionId
                                }, response);
                                responses.push(response);
                            }
                        });
                        return responses;
                    },
                    _submitResponse: function(event) {
                        event.preventDefault();

                        var responses = this._getAllResponses(),
                            preventSubmit = true,
                            errors = this._validate(responses);

                        if (errors.length > 0) {
                            console.error(errors); /*Removelogging:skip*/
                            preventSubmit = true;
                        } else {
                            var responseCount = responses.length,
                                questionsCount = this.options.datasource.length;
                            if (responseCount < questionsCount) {
                                var message = "You've {0} unanswered question(s). Do you still want to proceed further ?".replace(/\{0\}/, (questionsCount - responseCount));
                                preventSubmit = !confirm(message);
                            } else {
                                preventSubmit = false;
                            }
                        }
                        if (!preventSubmit) {
                            $(this.element).trigger(events.submit, {
                                data: responses
                            });
                        }
                    },
                    _validate: function(response) {
                        var errors = [],
                            errorMessaage = "Answer Requried";
                        for (var i = 0; i < this.options.datasource.length; i++) {
                            var question = this.options.datasource[i];
                            if (question.required) {
                                var questionId = question.id;
                                var index = _.findIndex(response, {
                                    "questionId": questionId
                                });
                                if (index < 0) {
                                    errors.push({
                                        questionId: questionId,
                                        errorMessage: errorMessaage
                                    });
                                } else {
                                    var _response = response[index];
                                    if (_response.selectedChoices) {
                                        if (_response.selectedChoices.length === 0)
                                            errors.push({
                                                questionId: questionId,
                                                errorMessage: errorMessaage
                                            });
                                    } else if (_response.text) {
                                        var trimmedText = _response.text.trim();
                                        trimmedText = $("<div>").html(trimmedText).text();
                                        if (trimmedText === "")
                                            errors.push({
                                                questionId: questionId,
                                                errorMessage: errorMessaage
                                            });
                                    }
                                }
                            }
                        }
                        return errors;
                    }

                });

            })();
        });
    }
})();
