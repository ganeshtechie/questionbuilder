this["dw"] = this["dw"] || {};
this["dw"]["templates"] = this["dw"]["templates"] || {};

this["dw"]["templates"]["checkboxes"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <label>Score</label>\n        <input type=\"number\" data-name=\"score\" placeholder=\"Enter the score\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"score","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" /> \n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"choice-item\" class=\"ui-state-default\">\n    <div class=\"form-group form-inline\">\n        <input type=\"hidden\" data-name=\"uniqueid\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" />\n        <input type=\"hidden\" data-name=\"choicetext\" />\n\n        <input title=\"Mark this as answer\" class=\"checkbox-custom\" id=\"question"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\"question"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" type=\"checkbox\">\n        <label id=\"text\" class=\"checkbox-custom-label\" for=\"question"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"> </label>\n      \n        <span class=\"input input--hoshi active\">\n            <div data-role=\"editor\" data-name='choice' contenteditable=\"true\" class=\"input__field input__field--hoshi jqx-widget jqx-editor-inline\" data-placeholder=\"Type your choice here\"></div>\n            <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"> </label>\n        </span>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.enable_scoring : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		\n		<a data-role=\"delete-choice\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["feedback"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n    <h1>Feedback System</h1>\n    <p>Configure the feeback message that you want to show to the participants</p>\n    <hr />\n    <div class=\"form-group\">\n        <div class=\"form-group\">\n            <label>Feedback Method</label>\n            <select data-name=\"feedback-method\" class=\"form-control\">\n                <option value=\"simple\">Simple</option>\n                <option value=\"custom\">Custom</option>\n                <!--<option value=\"grouped\">Grouped</option>-->\n            </select>\n        </div>\n    </div>\n    <hr />\n    <div class=\"form-group\" data-section='feedback-form' data-form-name='simple'>\n        <textarea rows=\"3\" class=\"form-control\" data-name=\"feedback-message\" placeholder=\"Type the feedback message...\"></textarea>\n    </div>\n    <div data-section=\"feedback-form\" data-form-name='custom'>\n        <div class=\"form-group\">\n            <ul data-name=\"grade-list\"> </ul>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" data-name=\"grade-name\" placeholder=\"Grade\" /> </div>\n            <div class=\"form-group\">\n                <span>Score >=</span>\n                <input type=\"number\" class=\"form-control\" data-name=\"score\" placeholder=\"Type the score required to get this grade\" /> </div>\n            <div class=\"form-group\">\n                <textarea class=\"form-control\" data-name=\"feedback\" placeholder=\"Type your feedback for this grade\"></textarea>\n            </div>\n            <div>\n                <button class=\"btn btn-primary\" data-action=\"add-feedback\">Add</button>\n                <button class=\"btn btn-primary\" data-action=\"clear-form\">Cancel</button>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["initial_setup"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div data-role=\"initial-setup\">\n    <div class=\"form-group\">\n        <span class=\"input input--hoshi\">\n            <input data-name=\"assessment-title\" class=\"input__field input__field--hoshi\" type=\"text\" id=\"input-4\">\n            <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"input-4\">\n                <span class=\"input__label-content input__label-content--hoshi\">Title</span>\n            </label>\n        </span>\n    </div>\n    <div class=\"form-group\">\n        <span class=\"input input--hoshi\">\n            <div data-role=\"editor\" data-name=\"assessment-description\" class=\"input__field input__field--hoshi jqx-widget jqx-editor-inline\" contenteditable=\"true\" data-placeholder=\"Enter your description\" id=\"input-4\"></div>\n            <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"input-4\"> </label>\n        </span>\n    </div>\n    <div class=\"form-group\" data-section=\"retake\">\n        <label>Retake Limit</label>\n        <p class=\"well form-inline\">Note: Setting retake limit to -1, will allow the user to retake this assessment infinite times.\n            <input type=\"number\" class=\"form-control\" data-name=\"retake\" placeholder=\"Enter the retake limit for this assessment\"> </p>\n    </div>\n    <div class=\"form-group form-inline\">\n        <p>How you want to present your questions to the participant?</p>\n        <div>\n            <p>\n                <input type=\"radio\" value=\"one-by-one\" name=\"staging-method\" /> Show only one question at once</p>\n        </div>\n        <div>\n            <p>\n                <input type=\"radio\" value=\"all-at-once\" name=\"staging-method\" /> Show all questions in the same page</p>\n        </div>\n    </div>\n    <div data-section=\"scoring-method\">\n        <div class=\"form-group\">\n            <label>Scoring Method</label>\n            <dl class=\"dl-horizontal\">\n                <dt>\n                    <label>\n                        <input type=\"radio\" name=\"scoring-method\" value=\"any\" />Any</label>\n                </dt>\n                <dd>Full score will be given for a question, on selecting any one correct choice</dd>\n                <dt>\n                    <label>\n                        <input type=\"radio\" name=\"scoring-method\" value=\"divide\" />Divide</label>\n                </dt>\n                <dd>Scores will be divided based on the no.of.correct choices, the user selects for a question</dd>\n                <dt>\n                    <label>\n                        <input type=\"radio\" name=\"scoring-method\" value=\"all\" />All</label>\n                </dt>\n                <dd>Full score will be given for a question, only when the user selects all the correct choices</dd>\n            </dl>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["multiline"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "\n            <option value=\""
    + alias2(alias1((depth0 != null ? depth0.value : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</option> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div>\n    <div class=\"form-group form-inline\">\n        <label>Choose the format of response:</label>\n        <select class=\"form-control\" data-name=\"field-format\"> "
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.supported_formats : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </select>\n    </div>\n    <div class=\"form-group form-inline\" data-section=\"max-len\">\n        <label>Maximum Length:</label>\n        <input class=\"form-control\" data-name='max-len' type=\"text\" /> </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["play_checkboxes"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n        <div class=\"checkbox\" data-choice-item data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <label>\n                <input type=\"checkbox\" class=\"clickable\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias4(container.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + " </label>\n        </div> ";
},"2":function(container,depth0,helpers,partials,data) {
    return " checked=\"checked\" ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-name=\"play-question\" data-qid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <div>\n        <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n    </div>\n    <div data-choice-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\"> "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.choice : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["play_multiline"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-name=\"play-question\" data-qid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <div>\n        <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n    </div>\n    <div data-choice-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"form-group\" data-choice-item>\n            <input type=\"text\" class=\"form-control\" data-max-length=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.maximumlength : stack1), depth0))
    + "\" /> </div>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["play_radiobutton"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "\n        <div class=\"radio\" data-choice-item data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <label>\n                <input type=\"radio\" class=\"clickable\" name=\"question"
    + alias4(alias5((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias4(alias5((depth0 != null ? depth0.title : depth0), depth0))
    + " </label>\n        </div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-name=\"play-question\" data-qid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <div>\n        <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n    </div>\n    <div data-choice-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\"> "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.choice : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div>\n</div>";
},"useData":true,"useDepths":true});

this["dw"]["templates"]["play_singleline"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-name=\"play-question\" data-qid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <div>\n        <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n    </div>\n    <div data-choice-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"form-group\" data-choice-item>\n            <input type=\"text\" class=\"form-control\" data-max-length=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.maximumlength : stack1), depth0))
    + "\" /> </div>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["questioneditor"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n                            <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option> ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option> \n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"question-editor row question-box active\">\n    <div class=\"col-sm-9\">\n        <div data-container=\"question-editor\">\n            <div data-section=\"question\">\n                <div class=\"form-group\" data-role=\"question\">\n                    <div>\n                        <span class=\"input input--hoshi\">\n                            <div data-role=\"editor\" data-name=\"title\" class=\"input__field input__field--hoshi jqx-widget jqx-editor-inline\" contenteditable=\"true\" data-placeholder=\"Enter Your Question Here\" id=\"input-4\"></div>\n                            <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\" for=\"input-4\"> </label>\n                        </span>\n                    </div>\n                </div>\n                <div data-section=\"scoring\">\n                    <div class=\"form-group\">\n                        <label>Have scores on: </label>\n                        <select class=\"form-control\" data-name=\"scoring-method\"> "
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.scoring_configuration : depth0)) != null ? stack1.scoring_at : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </select>\n                    </div>\n                    <div class=\"form-group\" data-section=\"question-scoring\">\n                        <input type=\"number\" class=\"form-control\" data-name=\"question-score\" placeholder=\"Enter your score\" /> </div>\n                    <p class=\"well\">Select the checkbox, to mark this question as <i>rhetorical question</i>. If selected, any scores given to this question will have no effect on the results.\n                        <input type=\"checkbox\" name=\"rhetorical-question\" /> </p>\n                </div>\n                \n                <div class=\"form-group\">\n                    <div data-section=\"choice\"> </div>\n                </div>\n            </div>\n            <div data-section=\"tagging\">\n                <div class=\"form-group\">\n                    <!-- Tags should go here -->\n                    <h5>Tag Question:</h5>\n                    <select class=\"form-control\" data-name=\"tags\"></select>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label>\n                <input type=\"checkbox\" data-name=\"required\" /> Required </label>\n            <label>\n                <input type=\"checkbox\" data-name=\"shuffle\" /> Randomize Choice </label>\n        </div>\n\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary\" data-name=\"save-question\">Preview Question</button>\n            <button class=\"btn btn-default\" data-name=\"cancel-question\">Reset</button>\n        </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <select data-name=\"choice-types\"> \n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.allowed_choice_types : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </select>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["radiobutton"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <label>Score</label>\n        <input type=\"number\" data-name=\"score\" placeholder=\"Enter the score\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"score","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" /> \n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"choice-item\" class=\"ui-state-default\">\n    <div class=\"form-group form-inline\">\n    	<input type=\"hidden\" data-name=\"uniqueid\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" />\n        <input type=\"hidden\" data-name=\"choicetext\" />\n\n        <input title=\"Mark this as answer\" class=\"checkbox-custom\" id=\"question"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\"question"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" type=\"checkbox\">\n        <label id=\"text\" class=\"checkbox-custom-label\" for=\"question"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"> </label>\n\n		<span class=\"input input--hoshi active\">\n            <div data-role=\"editor\" data-name='choice' contenteditable=\"true\" class=\"input__field input__field--hoshi jqx-widget jqx-editor-inline\" data-placeholder=\"Type your choice here\"></div>\n            <label class=\"input__label input__label--hoshi input__label--hoshi-color-1\"> </label>\n        </span>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.enable_scoring : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <a data-role=\"delete-choice\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["scoring"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div data-section=\"scoring-method\">\n    <div class=\"form-group\">\n        <dl>\n            <dt>\n                <label>\n                    <input type=\"radio\" name=\"scoring-method\" value=\"any\" />Any</label>\n            </dt>\n            <dd>Full score will be given for a question, on selecting any one correct choice</dd>\n            <dt>\n                <label>\n                    <input type=\"radio\" name=\"scoring-method\" value=\"divide\" />Divide</label>\n            </dt>\n            <dd>Scores will be divided based on the no.of.correct choices, the user selects for a question</dd>\n            <dt>\n                <label>\n                    <input type=\"radio\" name=\"scoring-method\" value=\"all\" />All</label>\n            </dt>\n            <dd>Full score will be given for a question, only when the user selects all the correct choices</dd>\n        </dl>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["shell_checkbox"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "                <div>\n                    <input class=\"checkbox-custom\" id=\"chk"
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-value=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\"question"
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "\" type=\"checkbox\" />\n                    <label id=\"text\" for=\"chk"
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"checkbox-custom-label\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</label>\n                </div> \n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"label label-info\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span> \n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"toggle\" data-name=\"question-shell\" data-qid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <div data-view=\"\">\n        <div data-container=\"question\" data-role=\"checkbox-question-type\" data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <div>\n                <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n            </div>\n            \n            <div> \n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.choice : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n\n            <div data-section=\"tags\"> \n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n\n            <div class=\"as-attributes pull-right\"> \n                <i data-action=\"edit\" class=\"fa fa-edit\" title=\"Edit Question\"></i> \n                <i data-action=\"insert\" class=\"fa fa-plus-circle\" title=\"Insert Question\"></i> \n                <i data-action=\"moveup\" class=\"fa fa-arrow-circle-up\" title=\"Move Up\"></i> \n                <i data-action=\"movedown\" class=\"fa fa-arrow-circle-down\" title=\"Move Down\"></i> \n                <i data-action=\"delete\" class=\"fa fa-trash-o\" title=\"Delete Question\"></i> \n            </div>\n\n        </div>\n    </div>\n    <div data-view=\"\">\n        <h2>Edit Question</h2>\n        <div data-container=\"edit\"> </div>\n    </div>\n</div>";
},"useData":true,"useDepths":true});

this["dw"]["templates"]["shell_multiline"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div data-role=\"toggle\" data-name=\"question-shell\" data-qid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <div data-view=\"\">\n        <div data-container=\"question\" data-role=\"multiline-question\" data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <div>\n                <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n            </div>\n            <div>\n                <div class=\"form-group\">\n                    <textarea class=\"form-control\" data-max-len=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.maximumlength : stack1), depth0))
    + "\" data-role=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.fieldformat : stack1), depth0))
    + "\"></textarea>\n                </div>\n            </div>\n            \n            <div class=\"as-attributes pull-right\"> \n                <i data-action=\"edit\" class=\"fa fa-edit\" title=\"Edit Question\"></i> \n                <i data-action=\"insert\" class=\"fa fa-plus-circle\" title=\"Insert Question\"></i> \n                <i data-action=\"moveup\" class=\"fa fa-arrow-circle-up\" title=\"Move Up\"></i> \n                <i data-action=\"movedown\" class=\"fa fa-arrow-circle-down\" title=\"Move Down\"></i> \n                <i data-action=\"delete\" class=\"fa fa-trash-o\" title=\"Delete Question\"></i> \n            </div>\n\n            \n        </div>\n    </div>\n    <div data-view=\"\">\n        <h2>Edit Question</h2>\n        <div data-container=\"edit\"> </div>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["shell_radiobutton"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "\n                <div>\n                    <input class=\"radio-custom\" id=\"chk"
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-value=\""
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\"question"
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "\" type=\"radio\" />\n                    <label id=\"text\" for=\"chk"
    + alias2(alias1((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + alias2(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"radio-custom-label\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</label>\n                </div> \n\n\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"label label-info\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span> \n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"toggle\" data-name=\"question-shell\" data-qid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <div data-view=\"\">\n        <div data-container=\"question\" data-role=\"checkbox-question-type\" data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <div>\n                <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n            </div>\n\n            <div> \n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.choice : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n\n            <div data-section=\"tags\"> \n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n\n            <div class=\"as-attributes pull-right\"> \n                <i data-action=\"edit\" class=\"fa fa-edit\" title=\"Edit Question\"></i> \n                <i data-action=\"insert\" class=\"fa fa-plus-circle\" title=\"Insert Question\"></i> \n                <i data-action=\"moveup\" class=\"fa fa-arrow-circle-up\" title=\"Move Up\"></i> \n                <i data-action=\"movedown\" class=\"fa fa-arrow-circle-down\" title=\"Move Down\"></i> \n                <i data-action=\"delete\" class=\"fa fa-trash-o\" title=\"Delete Question\"></i> \n            </div>\n\n        </div>\n    </div>\n    <div data-view=\"\">\n        <h2>Edit Question</h2>\n        <div data-container=\"edit\"> </div>\n    </div>\n</div>";
},"useData":true,"useDepths":true});

this["dw"]["templates"]["shell_singleline"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div data-role=\"toggle\" data-name=\"question-shell\" data-qid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <div data-view=\"\">\n        <div data-container=\"question\" data-role=\"singleline-question\" data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <div>\n                <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n            </div>\n            <div>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" data-max-len=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.maximumlength : stack1), depth0))
    + "\" data-role=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.fieldformat : stack1), depth0))
    + "\" /> </div>\n            </div>\n            <div>\n                <ul>\n                    <li> <a data-action=\"edit\">Edit</a> </li>\n                    <li> <a data-action=\"delete\">Delete</a> </li>\n                    <li> <a data-action=\"insert\">Insert</a> </li>\n                    <li> <a data-action=\"moveup\">Move Up</a> </li>\n                    <li> <a data-action=\"movedown\">Move Down</a> </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div data-view=\"\">\n        <h2>Edit Question</h2>\n        <div data-container=\"edit\"> </div>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["shell"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\n    <div data-section=\"head\"> </div>\n    <div data-section=\"body\"></div>\n    <div data-section=\"footer\">\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary\" data-action=\"save\">Save</button>\n            <button class=\"btn btn-default\" data-action=\"cancel\">Cancel</button>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["singleline"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "\n            <option value=\""
    + alias2(alias1((depth0 != null ? depth0.value : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</option> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div>\n    <div class=\"form-group form-inline\">\n        <label>Choose the format of response:</label>\n        <select class=\"form-control\" data-name=\"field-format\"> "
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.supported_formats : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </select>\n    </div>\n    <div class=\"form-group form-inline\" data-section=\"max-len\">\n        <label>Maximum Length:</label>\n        <input class=\"form-control\" data-name='max-len' type=\"text\" /> </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["staging_startpage"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div>\n    <div>\n        <h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n        <p>"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " </p>\n        <p class=\"well\">Total no of questions: <b>"
    + alias4(((helper = (helper = helpers.totalQuestions || (depth0 != null ? depth0.totalQuestions : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalQuestions","hash":{},"data":data}) : helper)))
    + "</b> | Total score: <b>"
    + alias4(((helper = (helper = helpers.totalScore || (depth0 != null ? depth0.totalScore : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalScore","hash":{},"data":data}) : helper)))
    + "</b> | Retake: <b>"
    + alias4(((helper = (helper = helpers.retakeLimit || (depth0 != null ? depth0.retakeLimit : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"retakeLimit","hash":{},"data":data}) : helper)))
    + "</b></p>\n    </div>\n    <div class=\"text-center\">\n        <button class=\"btn btn-primary\" data-action=\"start\">Start</button>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["test"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "\n    <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul> "
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.names : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </ul>";
},"useData":true});