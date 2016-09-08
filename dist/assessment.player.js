(function() {
    if (typeof define === "function" && define.amd) {
        define(["handlebars"], function(Handlebars) {
            this["dw"] = this["dw"] || {};
            this["dw"]["templates"] = this["dw"]["templates"] || {};

            this["dw"]["templates"]["checkboxes"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data) {
                    var helper;

                    return "\n        <label>Score</label>\n        <input type=\"number\" data-name=\"score\" placeholder=\"Enter the score\" value=\"" +
                        container.escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
                            "name": "score",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" class=\"form-control\" /> ";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div data-role=\"choice-item\" class=\"ui-state-default\">\n    <div class=\"pull-left\"><a href=\"#\"><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></a></div>\n    <div class=\"form-group form-inline\">\n        <input type=\"hidden\" data-name=\"uniqueid\" value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" />\n        <input type=\"checkbox\" title=\"'Check' to mark this choice as correct\" name=\"question" +
                        alias4(((helper = (helper = helpers.unique_id || (depth0 != null ? depth0.unique_id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "unique_id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" />\n        <textarea data-name=\"choice\" placeholder=\"Type your choice here\" rows=\"1\" class=\"form-control\">" +
                        alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "</textarea> " +
                        ((stack1 = helpers["if"].call(alias1, (depth0 != null ? depth0.enable_scoring : depth0), {
                            "name": "if",
                            "hash": {},
                            "fn": container.program(1, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        "\n        <div class=\"pull-right\"><a data-role=\"delete-choice\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a></div>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["feedback"] = Handlebars.template({
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    return "<div>\n    <h1>Feedback System</h1>\n    <p>Configure the feeback message that you want to show to the participants</p>\n    <hr />\n    <div data-section=\"feedback-form\">\n        <div class=\"form-group\">\n            <ul data-name=\"grade-list\"> </ul>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" data-name=\"grade-name\" placeholder=\"Grade\" /> </div>\n            <div class=\"form-group\">\n                <span>Score >=</span>\n                <input type=\"number\" class=\"form-control\" data-name=\"score\" placeholder=\"Type the score required to get this grade\" /> </div>\n            <div class=\"form-group\">\n                <textarea class=\"form-control\" data-name=\"feedback\" placeholder=\"Type your feedback for this grade\"></textarea>\n            </div>\n            <div>\n                <button class=\"btn btn-primary\" data-action=\"add-feedback\">Add</button>\n                <button class=\"btn btn-primary\" data-action=\"clear-form\">Cancel</button>\n            </div>\n        </div>\n    </div>\n    <div data-section=\"no-feedback\">\n        <p>Note: Your assessment dosen't have scoring enabled in it. So you can skip this section</p>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["initial_setup"] = Handlebars.template({
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    return "<div data-role=\"initial-setup\">\n    <div class=\"form-group\">\n        <label>Title</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Type the Assessment Title\" data-name=\"assessment-title\" /> </div>\n    <div class=\"form-group\">\n        <label>Description</label>\n        <textarea class=\"form-control\" placeholder=\"Type the Assessment Description\" data-name=\"assessment-description\"></textarea>\n    </div>\n    <hr />\n    <div class=\"form-group\" data-section=\"feedback\">\n        <div data-section=\"feedback-form\">\n            <div class=\"form-group\">\n                <label>Feedback Method</label>\n                <select data-name=\"feedback-method\" class=\"form-control\">\n                    <option value=\"simple\">Simple</option>\n                    <option value=\"custom\">Custom</option>\n                    <!--<option value=\"grouped\">Grouped</option>-->\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label>Feedback</label>\n                <textarea rows=\"3\" class=\"form-control\" data-name=\"feedback-message\" placeholder=\"Type the feedback message...\"></textarea>\n            </div>\n        </div>\n    </div>\n    <hr />\n    <div class=\"form-group\" data-section=\"retake\">\n        <label>Retake Limit</label>\n        <p class=\"well form-inline\">Note: Setting retake limit to -1, will allow the user to retake this assessment infinite times.\n            <input type=\"number\" class=\"form-control\" data-name=\"retake\" placeholder=\"Enter the retake limit for this assessment\"> </p>\n    </div>\n    <hr />\n    <div class=\"form-group form-inline\">\n        <p>How you want to present your questions to the participant?</p>\n        <div>\n            <p>\n                <input type=\"radio\" value=\"one-by-one\" name=\"staging-method\" /> Show only one question at once</p>\n        </div>\n        <div>\n            <p>\n                <input type=\"radio\" value=\"all-at-once\" name=\"staging-method\" /> Show all questions in the same page</p>\n        </div>\n    </div>\n    <div class=\"form-group\" data-section=\"scoring-method\">\n        <div class=\"form-group\">\n            <label>Scoring Method</label>\n            <dl class=\"dl-horizontal\">\n                <dt>\n                    <label>\n                        <input type=\"radio\" name=\"scoring-method\" value=\"any\" />Any</label>\n                </dt>\n                <dd>Full score will be given for a question, on selecting any one correct choice</dd>\n                <dt>\n                    <label>\n                        <input type=\"radio\" name=\"scoring-method\" value=\"divide\" />Divide</label>\n                </dt>\n                <dd>Scores will be divided based on the no.of.correct choices, the user selects for a question</dd>\n                <dt>\n                    <label>\n                        <input type=\"radio\" name=\"scoring-method\" value=\"all\" />All</label>\n                </dt>\n                <dd>Full score will be given for a question, only when the user selects all the correct choices</dd>\n            </dl>\n        </div>\n    </div>\n</div>";
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
                    var helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "\n        <div class=\"checkbox\" data-choice-item data-value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\n            <label>\n                <input type=\"checkbox\" class=\"clickable\" value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\"> " +
                        alias4(container.lambda((depth0 != null ? depth0.title : depth0), depth0)) +
                        " </label>\n        </div> ";
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
                        "\">\r\n    <div>\r\n        <p>" +
                        ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</p>\r\n    </div>\r\n    <div data-choice-type=\"" +
                        alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "type",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\">\r\n        <div class=\"form-group\" data-choice-item>\r\n            <input type=\"text\" class=\"form-control\" data-max-length=\"" +
                        alias4(container.lambda(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.maximumlength : stack1), depth0)) +
                        "\" /> </div>\r\n    </div>\r\n</div>";
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

                    return "\n                        <option value=\"" +
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
                "3": function(container, depth0, helpers, partials, data) {
                    var helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "\n                    <option value=\"" +
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

                    return "<div class=\"question-editor\">\n    <div data-container=\"question-editor\">\n        <div data-section=\"question\">\n            <div class=\"form-group\" data-role=\"question\">\n                <textarea class=\"form-control\" data-name=\"title\" placeholder=\"Type your question here...\"></textarea>\n            </div>\n            <div data-section=\"scoring\">\n                <div class=\"form-group\">\n                    <label>Have scores on: </label>\n                    <select class=\"form-control\" data-name=\"scoring-method\"> " +
                        ((stack1 = helpers.each.call(alias1, ((stack1 = (depth0 != null ? depth0.scoring_configuration : depth0)) != null ? stack1.scoring_at : stack1), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </select>\n                </div>\n                <div class=\"form-group\" data-section=\"question-scoring\">\n                    <input type=\"number\" class=\"form-control\" data-name=\"question-score\" placeholder=\"Enter your score\" /> </div>\n                <p class=\"well\">Select the checkbox, to mark this question as <i>rhetorical question</i>. If selected, any scores given to this question will have no effect on the results.\n                    <input type=\"checkbox\" name=\"rhetorical-question\" /> </p>\n            </div>\n            <div class=\"form-group\">\n                <select data-name=\"choice-types\" class=\"form-control\"> " +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.allowed_choice_types : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(3, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </select>\n            </div>\n            <div class=\"form-group\">\n                <div data-section=\"choice\"> </div>\n            </div>\n        </div>\n        <div data-section=\"tagging\">\n            <div class=\"form-group\">\n                <!-- Tags should go here -->\n                <h5>Tag Question:</h5>\n                <select class=\"form-control\" data-name=\"tags\" placeholder=\"Type the tag name and press 'Enter'\" multiple=\"\"></select>\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>\n            <input type=\"checkbox\" data-name=\"required\" /> Required </label>\n        <label>\n            <input type=\"checkbox\" data-name=\"shuffle\" /> Randomize Choice </label>\n    </div>\n    <div class=\"form-group\">\n        <button class=\"btn btn-primary\" data-name=\"save-question\">Preview Question</button>\n        <button class=\"btn btn-default\" data-name=\"cancel-question\">Reset</button>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["radiobutton"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data) {
                    var helper;

                    return "\n        <label>Score</label>\n        <input type=\"text\" data-name=\"score\" placeholder=\"Enter the score\" value=\"" +
                        container.escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
                            "name": "score",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" class=\"form-control\" /> ";
                },
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div data-role=\"choice-item\" class=\"ui-state-default\">\n    <div class=\"pull-left\"><a href=\"#\"><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></a></div>\n    <div class=\"form-group form-inline\">\n        <input type=\"hidden\" data-name=\"uniqueid\" value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" />\n        <input type=\"radio\" title=\"'Check' to mark this choice as correct\" name=\"question" +
                        alias4(((helper = (helper = helpers.unique_id || (depth0 != null ? depth0.unique_id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "unique_id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" />\n        <textarea data-name=\"choice\" placeholder=\"Type your choice here\" rows=\"1\" class=\"form-control\">" +
                        alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "</textarea> " +
                        ((stack1 = helpers["if"].call(alias1, (depth0 != null ? depth0.enable_scoring : depth0), {
                            "name": "if",
                            "hash": {},
                            "fn": container.program(1, data, 0),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        "\n        <div class=\"pull-right\"><a data-role=\"delete-choice\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a></div>\n    </div>\n</div>";
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
                    var helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" data-value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" name=\"question" +
                        alias4(container.lambda((depths[1] != null ? depths[1].id : depths[1]), depth0)) +
                        "\" /> " +
                        alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        " </label>\n                </div> ";
                },
                "3": function(container, depth0, helpers, partials, data) {
                    return "\n                <span class=\"label label-info\">" +
                        container.escapeExpression(container.lambda(depth0, depth0)) +
                        "</span> ";
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
                        "</p>\n            </div>\n            <div> " +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.choice : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0, blockParams, depths),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </div>\n            <div data-section=\"tags\"> " +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.tags : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(3, data, 0, blockParams, depths),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </div>\n            <div>\n                <ul>\n                    <li> <a data-action=\"edit\">Edit</a> </li>\n                    <li> <a data-action=\"delete\">Delete</a> </li>\n                    <li> <a data-action=\"insert\">Insert</a> </li>\n                    <li> <a data-action=\"moveup\">Move Up</a> </li>\n                    <li> <a data-action=\"movedown\">Move Down</a> </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div data-view=\"\">\n        <h2>Edit Question</h2>\n        <div data-container=\"edit\"> </div>\n    </div>\n</div>";
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
                        "\"></textarea>\n                </div>\n            </div>\n            <div>\n                <ul>\n                    <li> <a data-action=\"edit\">Edit</a> </li>\n                    <li> <a data-action=\"delete\">Delete</a> </li>\n                    <li> <a data-action=\"insert\">Insert</a> </li>\n                    <li> <a data-action=\"moveup\">Move Up</a> </li>\n                    <li> <a data-action=\"movedown\">Move Down</a> </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div data-view=\"\">\n        <h2>Edit Question</h2>\n        <div data-container=\"edit\"> </div>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["shell_radiobutton"] = Handlebars.template({
                "1": function(container, depth0, helpers, partials, data, blockParams, depths) {
                    var helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "\n                <div class=\"radio\">\n                    <label>\n                        <input type=\"radio\" data-value=\"" +
                        alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "id",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "\" name=\"question" +
                        alias4(container.lambda((depths[1] != null ? depths[1].id : depths[1]), depth0)) +
                        "\" /> " +
                        alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        " </label>\n                </div> ";
                },
                "3": function(container, depth0, helpers, partials, data) {
                    return "\n                <span class=\"label label-info\">" +
                        container.escapeExpression(container.lambda(depth0, depth0)) +
                        "</span> ";
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
                        "</p>\n            </div>\n            <div> " +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.choice : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(1, data, 0, blockParams, depths),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </div>\n            <div data-section=\"tags\"> " +
                        ((stack1 = helpers.each.call(alias1, (depth0 != null ? depth0.tags : depth0), {
                            "name": "each",
                            "hash": {},
                            "fn": container.program(3, data, 0, blockParams, depths),
                            "inverse": container.noop,
                            "data": data
                        })) != null ? stack1 : "") +
                        " </div>\n            <div>\n                <ul>\n                    <li> <a data-action=\"edit\">Edit</a> </li>\n                    <li> <a data-action=\"delete\">Delete</a> </li>\n                    <li> <a data-action=\"insert\">Insert</a> </li>\n                    <li> <a data-action=\"moveup\">Move Up</a> </li>\n                    <li> <a data-action=\"movedown\">Move Down</a> </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div data-view=\"\">\n        <h2>Edit Question</h2>\n        <div data-container=\"edit\"> </div>\n    </div>\n</div>";
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
                        "\" /> </div>\n            </div>\n            <div>\n                <ul>\n                    <li> <a data-action=\"edit\">Edit</a> </li>\n                    <li> <a data-action=\"delete\">Delete</a> </li>\n                    <li> <a data-action=\"insert\">Insert</a> </li>\n                    <li> <a data-action=\"moveup\">Move Up</a> </li>\n                    <li> <a data-action=\"movedown\">Move Down</a> </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div data-view=\"\">\n        <h2>Edit Question</h2>\n        <div data-container=\"edit\"> </div>\n    </div>\n</div>";
                },
                "useData": true
            });

            this["dw"]["templates"]["shell"] = Handlebars.template({
                "compiler": [7, ">= 4.0.0"],
                "main": function(container, depth0, helpers, partials, data) {
                    var stack1, helper, alias1 = depth0 != null ? depth0 : {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function";

                    return "<div>\n    <div data-section=\"head\">\n        <div>\n            <h1>" +
                        container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "title",
                            "hash": {},
                            "data": data
                        }) : helper))) +
                        "</h1>\n            <p>" +
                        ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2), (typeof helper === alias3 ? helper.call(alias1, {
                            "name": "description",
                            "hash": {},
                            "data": data
                        }) : helper))) != null ? stack1 : "") +
                        "</p>\n        </div>\n    </div>\n    <div data-section=\"body\"></div>\n    <div data-section=\"footer\">\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary\" data-action=\"save\">Save</button>\n            <button class=\"btn btn-default\" data-action=\"cancel\">Cancel</button>\n        </div>\n    </div>\n</div>";
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

                    this.each(function() {

                        var $this = $(this);

                        $this.on("click", function(event) {

                            event.stopPropagation();

                            if (!$(event.target).is(".clickable")) return;

                            var closestContainer = $(event.target).closest("[data-name='play-question']");

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
