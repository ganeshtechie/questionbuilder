this["dw"] = this["dw"] || {};
this["dw"]["templates"] = this["dw"]["templates"] || {};

this["dw"]["templates"]["checkboxes"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\n        <label>Score</label>\n        <input type=\"text\" data-name=\"score\" placeholder=\"Enter the score\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"score","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" /> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"ui-state-default\">\n    <div class=\"pull-left\"><a href=\"#\"><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></a></div>\n    <div data-role=\"choice-item\" class=\"form-group form-inline\">\n        <input type=\"hidden\" data-name=\"uniqueid\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" />\n        <input type=\"checkbox\" title=\"'Check' to mark this choice as correct\" name=\"question"
    + alias4(((helper = (helper = helpers.unique_id || (depth0 != null ? depth0.unique_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"unique_id","hash":{},"data":data}) : helper)))
    + "\" />\n        <textarea data-name=\"choice\" placeholder=\"Type your choice here\" rows=\"1\" class=\"form-control\"> "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " </textarea> "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.enable_scoring : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <div class=\"pull-right\"><a data-role=\"delete-choice\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a></div>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["play_checkboxes"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n        <div class=\"checkbox\" data-choice-item data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <label>\n                <input type=\"checkbox\" class=\"clickable\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias4(container.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + " </label>\n        </div> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-name=\"play-question\" data-qid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <div>\n        <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n    </div>\n    <div data-choice-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\"> "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.choices : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div>\n</div>";
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
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.choices : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
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
    + "\">\n        <div class=\"form-group\" data-choice-item>\n            <input type=\"text\" class=\"form-control\" /> </div>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["questioneditor"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n                    <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option> ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n                <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div data-container=\"question-editor\">\n    <div data-section=\"question\">\n        <div class=\"form-group\" data-role=\"question\">\n            <textarea class=\"form-control\" data-name=\"title\" placeholder=\"Type your question here...\"></textarea>\n        </div>\n        <div data-section=\"scoring\">\n            <div class=\"form-group\">\n                <label>Have scores on: </label>\n                <select class=\"form-control\" data-name=\"scoring-method\"> "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.allowed_scoring_methods : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </select>\n            </div>\n            <div class=\"form-group\" data-section=\"question-scoring\">\n                <input type=\"text\" class=\"form-control\" data-name=\"question-score\" placeholder=\"Enter your score\" /> </div>\n        </div>\n        <div class=\"form-group\">\n            <select data-name=\"choice-types\" class=\"form-control\"> "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.allowed_choice_types : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </select>\n        </div>\n        <div class=\"form-group\">\n            <div data-section=\"choice\"> </div>\n        </div>\n    </div>\n    <div data-section=\"tagging\">\n        <div class=\"form-group\">\n            <!-- Tags should go here -->\n            <h5>Tag Question:</h5>\n            <select class=\"form-control\" data-name=\"tags\" placeholder=\"Type the tag name and press 'Enter'\" multiple=\"\"></select>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>\n            <input type=\"checkbox\" data-name=\"required\" /> Required </label>\n        <label>\n            <input type=\"checkbox\" data-name=\"shuffle\" /> Randomize Choice </label>\n    </div>\n    <div class=\"form-group\">\n        <button class=\"btn btn-primary\" data-name=\"save-question\">Preview Question</button>\n        <button class=\"btn btn-default\" data-name=\"cancel-question\">Reset</button>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["radiobutton"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\n        <label>Score</label>\n        <input type=\"text\" data-name=\"score\" placeholder=\"Enter the score\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"score","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" /> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"ui-state-default\">\n    <div class=\"pull-left\"><a href=\"#\"><i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i></a></div>\n    <div data-role=\"choice-item\" class=\"form-group form-inline\">\n        <input type=\"hidden\" data-name=\"uniqueid\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" />\n        <input type=\"radio\" title=\"'Check' to mark this choice as correct\" name=\"question"
    + alias4(((helper = (helper = helpers.unique_id || (depth0 != null ? depth0.unique_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"unique_id","hash":{},"data":data}) : helper)))
    + "\" />\n        <textarea data-name=\"choice\" placeholder=\"Type your choice here\" rows=\"1\" class=\"form-control\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea> "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.enable_scoring : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n        <div class=\"pull-right\"><a data-role=\"delete-choice\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a></div>\n    </div>\n</div>";
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
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"toggle\" data-name=\"question-shell\" data-qid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <div data-view=\"\">\n        <div data-container=\"question\" data-role=\"checkbox-question-type\" data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <div>\n                <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n            </div>\n            <div> "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.choices : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div>\n            <div>\n                <ul>\n                    <li> <a data-action=\"edit\">Edit</a> </li>\n                    <li> <a data-action=\"delete\">Delete</a> </li>\n                    <li> <a data-action=\"insert\">Insert</a> </li>\n                    <li> <a data-action=\"moveup\">Move Up</a> </li>\n                    <li> <a data-action=\"movedown\">Move Down</a> </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div data-view=\"\">\n        <h2>Edit Question</h2>\n        <div data-container=\"edit\"> </div>\n    </div>\n</div>";
},"useData":true,"useDepths":true});

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
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.choices : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div>\n            <div> "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </div>\n            <div>\n                <ul>\n                    <li> <a data-action=\"edit\">Edit</a> </li>\n                    <li> <a data-action=\"delete\">Delete</a> </li>\n                    <li> <a data-action=\"insert\">Insert</a> </li>\n                    <li> <a data-action=\"moveup\">Move Up</a> </li>\n                    <li> <a data-action=\"movedown\">Move Down</a> </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div data-view=\"\">\n        <h2>Edit Question</h2>\n        <div data-container=\"edit\"> </div>\n    </div>\n</div>";
},"useData":true,"useDepths":true});

this["dw"]["templates"]["shell_singleline"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"toggle\" data-name=\"question-shell\" data-qid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <div data-view=\"\">\n        <div data-container=\"question\" data-role=\"checkbox-question-type\" data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <div>\n                <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n            </div>\n            <div>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" data-role=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.choices : depth0)) != null ? stack1.fieldformat : stack1), depth0))
    + "\" /> </div>\n            </div>\n            <div>\n                <ul>\n                    <li> <a data-action=\"edit\">Edit</a> </li>\n                    <li> <a data-action=\"delete\">Delete</a> </li>\n                    <li> <a data-action=\"insert\">Insert</a> </li>\n                    <li> <a data-action=\"moveup\">Move Up</a> </li>\n                    <li> <a data-action=\"movedown\">Move Down</a> </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div data-view=\"\">\n        <h2>Edit Question</h2>\n        <div data-container=\"edit\"> </div>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["shell"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<div>\n    <div data-section=\"head\">\n        <div>\n            <h1>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n            <p>"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n        </div>\n    </div>\n    <div data-section=\"body\"> </div>\n    <div data-section=\"footer\">\n        <button class=\"btn btn-primary\" data-action=\"save\">Save</button>\n        <button class=\"btn btn-primary\" data-action=\"save-as-draft\">Save As Draft</button>\n        <button class=\"btn btn-default\" data-action=\"cancel\">Cancel</button>\n    </div>\n</div>";
},"useData":true});

this["dw"]["templates"]["singleline"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "\n            <option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div>\n    <div class=\"form-group form-inline\">\n        <label>Choose the format of response:</label>\n        <select class=\"form-control\" data-name=\"field-format\"> "
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.supported_formats : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " </select>\n    </div>\n    <div class=\"form-group form-inline\" data-section=\"max-len\">\n        <label>Maximum Length:</label>\n        <input class=\"form-control\" data-name='max-len' type=\"text\" /> </div>\n</div>";
},"useData":true});