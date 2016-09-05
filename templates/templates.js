this["dw"] = this["dw"] || {};
this["dw"]["templates"] = this["dw"]["templates"] || {};

this["dw"]["templates"]["checkboxes"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\n        <label>Score</label>\n        <input type=\"number\" data-name=\"score\" placeholder=\"Enter the score\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"score","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" /> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"choice-item\" class=\"ui-state-default\">\n    <div class=\"pull-left\"><a href=\"#\"><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></a></div>\n    <div class=\"form-group form-inline\">\n        <input type=\"hidden\" data-name=\"uniqueid\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" />\n        <input type=\"checkbox\" title=\"'Check' to mark this choice as correct\" name=\"question"
    + alias4(((helper = (helper = helpers.unique_id || (depth0 != null ? depth0.unique_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"unique_id","hash":{},"data":data}) : helper)))
    + "\" />\n        <textarea data-name=\"choice\" placeholder=\"Type your choice here\" rows=\"1\" class=\"form-control\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea> "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.enable_scoring : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <div class=\"pull-right\"><a data-role=\"delete-choice\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a></div>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["feedback"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\r\n	<h1>Feedback System</h1>\r\n	<p>Configure the feeback message that you want to show to the participants</p>\r\n	<hr />\r\n\r\n	<div data-section=\"feedback-form\">\r\n		<div class=\"form-group\">\r\n		    <ul data-name=\"grade-list\" >\r\n\r\n		    </ul>\r\n		</div>\r\n		<div class=\"form-group\">\r\n			<div class=\"form-group\">\r\n				<input type=\"text\" class=\"form-control\" data-name=\"grade-name\" placeholder=\"Grade\" />\r\n			</div>\r\n		    <div class=\"form-group\">\r\n		       <span>Score >=</span> <input type=\"number\" class=\"form-control\" data-name=\"score\" placeholder=\"Type the score required to get this grade\" />\r\n		    </div>\r\n		    <div class=\"form-group\">\r\n		        <textarea class=\"form-control\" data-name=\"feedback\" placeholder=\"Type your feedback for this grade\"></textarea>\r\n		    </div>\r\n		    <div>\r\n		        <button class=\"btn btn-primary\" data-action=\"add-feedback\">Add</button>\r\n\r\n		        <button class=\"btn btn-primary\" data-action=\"clear-form\">Cancel</button>\r\n		    </div>\r\n		</div>\r\n	</div>\r\n\r\n	<div data-section=\"no-feedback\">\r\n		<p>Note: Your assessment dosen't have scoring enabled in it. So you can skip this section</p>\r\n	</div>\r\n	\r\n</div>";
},"useData":true});

this["dw"]["templates"]["initial_setup"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div data-role=\"initial-setup\">\r\n\r\n    <div class=\"form-group\">\r\n        <label>Title</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Type the Assessment Title\" data-name=\"assessment-title\" />\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Description</label>\r\n        <textarea class=\"form-control\" placeholder=\"Type the Assessment Description\" data-name=\"assessment-description\"></textarea>\r\n    </div>\r\n\r\n    <hr />\r\n\r\n    <div class=\"form-group\" data-section=\"feedback\">\r\n        <div data-section=\"feedback-form\">\r\n            <div class=\"form-group\">\r\n                <label>Feedback</label>\r\n                <textarea rows=\"3\" class=\"form-control\" data-name=\"feedback-message\" placeholder=\"Type the feedback message...\"></textarea>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <hr />\r\n\r\n\r\n    <div class=\"form-group\" data-section=\"retake\">\r\n        <label>Retake Limit</label>\r\n        <p class=\"well form-inline\">Note: Setting retake limit to -1, will allow the user to retake this assessment infinite times.\r\n            <input type=\"number\" class=\"form-control\" data-name=\"retake\" placeholder=\"Enter the retake limit for this assessment\"> </p>\r\n    </div>\r\n\r\n    <hr />\r\n\r\n    <div class=\"form-group form-inline\">\r\n        <p>How you want to present your questions to the participant?</p>\r\n\r\n        <div>            \r\n            <p><input type=\"radio\" value=\"one-by-one\" name=\"staging-method\"  /> Show only one question at once</p>\r\n        </div>\r\n\r\n        <div>            \r\n            <p><input type=\"radio\" value=\"all-at-once\" name=\"staging-method\" /> Show all questions in the same page</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" data-section=\"scoring-method\">\r\n        <div class=\"form-group\">\r\n            <label>Scoring Method</label>\r\n            <dl class=\"dl-horizontal\">\r\n                <dt>\r\n                    <label>\r\n                        <input type=\"radio\" name=\"scoring-method\" value=\"any\" />Any</label>\r\n                </dt>\r\n                <dd>Full score will be given for a question, on selecting any one correct choice</dd>\r\n                <dt>\r\n                    <label>\r\n                        <input type=\"radio\" name=\"scoring-method\" value=\"divide\" />Divide</label>\r\n                </dt>\r\n                <dd>Scores will be divided based on the no.of.correct choices, the user selects for a question</dd>\r\n                <dt>\r\n                    <label>\r\n                        <input type=\"radio\" name=\"scoring-method\" value=\"all\" />All</label>\r\n                </dt>\r\n                <dd>Full score will be given for a question, only when the user selects all the correct choices</dd>\r\n            </dl>\r\n        </div>\r\n    </div>\r\n\r\n</div>";
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
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n        <div class=\"checkbox\" data-choice-item data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n            <label>\r\n                <input type=\"checkbox\" class=\"clickable\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias4(container.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + " </label>\r\n        </div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-name=\"play-question\" data-qid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div>\r\n        <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n    </div>\r\n    <div data-choice-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\"> "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.choice : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div>\r\n</div>";
},"useData":true});

this["dw"]["templates"]["play_radiobutton"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "\r\n        <div class=\"radio\" data-choice-item data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n            <label>\r\n                <input type=\"radio\" class=\"clickable\" name=\"question"
    + alias4(alias5((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias4(alias5((depth0 != null ? depth0.title : depth0), depth0))
    + " </label>\r\n        </div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-name=\"play-question\" data-qid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div>\r\n        <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n    </div>\r\n    <div data-choice-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\"> "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.choice : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["dw"]["templates"]["play_singleline"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-name=\"play-question\" data-qid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div>\r\n        <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n    </div>\r\n    <div data-choice-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">\r\n        <div class=\"form-group\" data-choice-item>\r\n            <input type=\"text\" class=\"form-control\" data-max-length=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.choice : depth0)) != null ? stack1.maximumlength : stack1), depth0))
    + "\" /> </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["dw"]["templates"]["questioneditor"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n                        <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option> ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n                    <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"question-editor\">\r\n    <div data-container=\"question-editor\">\r\n        <div data-section=\"question\">\r\n            <div class=\"form-group\" data-role=\"question\">\r\n                <textarea class=\"form-control\" data-name=\"title\" placeholder=\"Type your question here...\"></textarea>\r\n            </div>\r\n            <div data-section=\"scoring\">\r\n                <div class=\"form-group\">\r\n                    <label>Have scores on: </label>\r\n                    <select class=\"form-control\" data-name=\"scoring-method\"> "
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.scoring_configuration : depth0)) != null ? stack1.scoring_at : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </select>\r\n                </div>\r\n                <div class=\"form-group\" data-section=\"question-scoring\">\r\n                    <input type=\"number\" class=\"form-control\" data-name=\"question-score\" placeholder=\"Enter your score\" /> </div>\r\n                <p class=\"well\">Select the checkbox, to mark this question as <i>rhetorical question</i>. If selected, any scores given to this question will have no effect on the results.\r\n                    <input type=\"checkbox\" name=\"rhetorical-question\" /> </p>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <select data-name=\"choice-types\" class=\"form-control\"> "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.allowed_choice_types : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div data-section=\"choice\"> </div>\r\n            </div>\r\n        </div>\r\n        <div data-section=\"tagging\">\r\n            <div class=\"form-group\">\r\n                <!-- Tags should go here -->\r\n                <h5>Tag Question:</h5>\r\n                <select class=\"form-control\" data-name=\"tags\" placeholder=\"Type the tag name and press 'Enter'\" multiple=\"\"></select>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>\r\n            <input type=\"checkbox\" data-name=\"required\" /> Required </label>\r\n        <label>\r\n            <input type=\"checkbox\" data-name=\"shuffle\" /> Randomize Choice </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button class=\"btn btn-primary\" data-name=\"save-question\">Preview Question</button>\r\n        <button class=\"btn btn-default\" data-name=\"cancel-question\">Reset</button>\r\n    </div>\r\n</div>";
},"useData":true});

this["dw"]["templates"]["radiobutton"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\n        <label>Score</label>\n        <input type=\"text\" data-name=\"score\" placeholder=\"Enter the score\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"score","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" /> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"choice-item\" class=\"ui-state-default\">\n    <div class=\"pull-left\"><a href=\"#\"><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></a></div>\n    <div class=\"form-group form-inline\">\n        <input type=\"hidden\" data-name=\"uniqueid\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" />\n        <input type=\"radio\" title=\"'Check' to mark this choice as correct\" name=\"question"
    + alias4(((helper = (helper = helpers.unique_id || (depth0 != null ? depth0.unique_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"unique_id","hash":{},"data":data}) : helper)))
    + "\" />\n        <textarea data-name=\"choice\" placeholder=\"Type your choice here\" rows=\"1\" class=\"form-control\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea> "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.enable_scoring : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <div class=\"pull-right\"><a data-role=\"delete-choice\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a></div>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["scoring"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div data-section=\"scoring-method\">\n    <div class=\"form-group\">\n        <dl>\n            <dt>\n                <label>\n                    <input type=\"radio\" name=\"scoring-method\" value=\"any\" />Any</label>\n            </dt>\n            <dd>Full score will be given for a question, on selecting any one correct choice</dd>\n            <dt>\n                <label>\n                    <input type=\"radio\" name=\"scoring-method\" value=\"divide\" />Divide</label>\n            </dt>\n            <dd>Scores will be divided based on the no.of.correct choices, the user selects for a question</dd>\n            <dt>\n                <label>\n                    <input type=\"radio\" name=\"scoring-method\" value=\"all\" />All</label>\n            </dt>\n            <dd>Full score will be given for a question, only when the user selects all the correct choices</dd>\n        </dl>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["shell_checkbox"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\"question"
    + alias4(container.lambda((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "\" /> "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " </label>\n                </div> ";
},"3":function(container,depth0,helpers,partials,data) {
    return "\n                <span class=\"label label-info\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"toggle\" data-name=\"question-shell\" data-qid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <div data-view=\"\">\n        <div data-container=\"question\" data-role=\"checkbox-question-type\" data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <div>\n                <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n            </div>\n            <div> "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.choice : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div>\n            <div data-section=\"tags\"> "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div>\n            <div>\n                <ul>\n                    <li> <a data-action=\"edit\">Edit</a> </li>\n                    <li> <a data-action=\"delete\">Delete</a> </li>\n                    <li> <a data-action=\"insert\">Insert</a> </li>\n                    <li> <a data-action=\"moveup\">Move Up</a> </li>\n                    <li> <a data-action=\"movedown\">Move Down</a> </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div data-view=\"\">\n        <h2>Edit Question</h2>\n        <div data-container=\"edit\"> </div>\n    </div>\n</div>";
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
    + "\"></textarea>\n                </div>\n            </div>\n            <div>\n                <ul>\n                    <li> <a data-action=\"edit\">Edit</a> </li>\n                    <li> <a data-action=\"delete\">Delete</a> </li>\n                    <li> <a data-action=\"insert\">Insert</a> </li>\n                    <li> <a data-action=\"moveup\">Move Up</a> </li>\n                    <li> <a data-action=\"movedown\">Move Down</a> </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div data-view=\"\">\n        <h2>Edit Question</h2>\n        <div data-container=\"edit\"> </div>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["shell_radiobutton"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n                <div class=\"radio\">\n                    <label>\n                        <input type=\"radio\" data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\"question"
    + alias4(container.lambda((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "\" /> "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " </label>\n                </div> ";
},"3":function(container,depth0,helpers,partials,data) {
    return "\n                <span class=\"label label-info\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"toggle\" data-name=\"question-shell\" data-qid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <div data-view=\"\">\n        <div data-container=\"question\" data-role=\"checkbox-question-type\" data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <div>\n                <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n            </div>\n            <div> "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.choice : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div>\n            <div data-section=\"tags\"> "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div>\n            <div>\n                <ul>\n                    <li> <a data-action=\"edit\">Edit</a> </li>\n                    <li> <a data-action=\"delete\">Delete</a> </li>\n                    <li> <a data-action=\"insert\">Insert</a> </li>\n                    <li> <a data-action=\"moveup\">Move Up</a> </li>\n                    <li> <a data-action=\"movedown\">Move Down</a> </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div data-view=\"\">\n        <h2>Edit Question</h2>\n        <div data-container=\"edit\"> </div>\n    </div>\n</div>";
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
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<div>\r\n    <div data-section=\"head\">\r\n        <div>\r\n            <h1>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n            <p>"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n        </div>\r\n    </div>\r\n    <div data-section=\"body\"></div>\r\n    <div data-section=\"footer\">\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-primary\" data-action=\"save\">Save</button>\r\n            <button class=\"btn btn-default\" data-action=\"cancel\">Cancel</button>\r\n        </div>\r\n    </div>\r\n</div>";
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

  return "<div>\r\n	<div>\r\n	    <h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n	    <p>"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n	    </p>\r\n	    <p class=\"well\">Total no of questions: <b>"
    + alias4(((helper = (helper = helpers.totalQuestions || (depth0 != null ? depth0.totalQuestions : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalQuestions","hash":{},"data":data}) : helper)))
    + "</b> | Total score: <b>"
    + alias4(((helper = (helper = helpers.totalScore || (depth0 != null ? depth0.totalScore : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalScore","hash":{},"data":data}) : helper)))
    + "</b> | Retake: <b>"
    + alias4(((helper = (helper = helpers.retakeLimit || (depth0 != null ? depth0.retakeLimit : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"retakeLimit","hash":{},"data":data}) : helper)))
    + "</b></p>\r\n	</div>\r\n	<div class=\"text-center\">\r\n	    <button class=\"btn btn-primary\" data-action=\"start\">Start</button>\r\n	</div>\r\n</div>";
},"useData":true});

this["dw"]["templates"]["test"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "\r\n    <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul> "
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.names : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </ul>";
},"useData":true});