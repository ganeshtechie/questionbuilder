this["dw"] = this["dw"] || {};
this["dw"]["templates"] = this["dw"]["templates"] || {};

this["dw"]["templates"]["checkboxes"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <label>Score</label>\r\n  <input type=\"text\" data-name=\"score\" placeholder=\"Enter the score\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"score","hash":{},"data":data}) : helper)))
    + "\"  class=\"form-control\" />\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"choice-item\" class=\"form-group form-inline ui-state-default\">\r\n  <input type=\"hidden\" data-name=\"uniqueid\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" />\r\n  <input type=\"checkbox\" name=\"question"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" />\r\n  <input type=\"text\" data-name=\"choice\" placeholder=\"Type your choice here\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" />\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.enable_scoring : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <label>..</label>\r\n  <a data-role=\"delete-choice\">X</a>\r\n</div>";
},"useData":true});

this["dw"]["templates"]["play_checkboxes"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"checkbox\" data-choice-item data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n            <label class=\"clickable\">\r\n                <input type=\"checkbox\" class=\"clickable\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias4(container.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "\r\n            </label>\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<div data-name=\"play-question\">\r\n    <div>\r\n        <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n    </div>\r\n    <div data-choice-type=\""
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.choices : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n";
},"useData":true});

this["dw"]["templates"]["play_radiobutton"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"radio\" data-choice-item data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n            <label class=\"isclickable\">\r\n                <input type=\"radio\" class=\"isclickable\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"> "
    + alias4(container.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "\r\n            </label>\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<div data-name=\"play-question\">\r\n    <div>\r\n        <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n    </div>\r\n    <div data-choice-type=\""
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.choices : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n";
},"useData":true});

this["dw"]["templates"]["questioneditor"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <option value=\""
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div data-container=\"question-editor\">\r\n  <div data-section=\"question\">\r\n    <div class=\"form-group\" data-role=\"question\">\r\n      <textarea class=\"form-control\" data-name=\"title\" placeholder=\"Type your question here...\"></textarea>\r\n    </div>\r\n\r\n    <div data-section=\"scoring\">\r\n      <div class=\"form-group\">\r\n        <label>Have scores on: </label>\r\n        <select class=\"form-control\" data-name=\"scoring-method\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.allowed_scoring_methods : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </select>      \r\n      </div>\r\n      <div class=\"form-group\" data-section=\"question-scoring\">\r\n        <input type=\"text\" class=\"form-control\" data-name=\"question-score\" placeholder=\"Enter your score\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <select data-name=\"choice-types\" class=\"form-control\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.allowed_choice_types : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div data-section=\"choice\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div data-section=\"tagging\">\r\n    <div class=\"form-group\">\r\n      <!-- Tags should go here -->\r\n      <h5>Tag Question:</h5>\r\n      <select class=\"form-control\" data-name=\"tags\" placeholder=\"Type the tag name and press 'Enter'\" multiple=\"\"></select>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>\r\n      <input type=\"checkbox\" data-name=\"required\" /> Required\r\n    </label>\r\n    <label>\r\n      <input type=\"checkbox\" data-name=\"shuffle\" /> Randomize Choice\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button class=\"btn btn-primary\" data-name=\"save-question\">Save</button>\r\n  </div>\r\n</div>";
},"useData":true});

this["dw"]["templates"]["radiobutton"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <label>Score</label>\r\n  <input type=\"text\" data-name=\"score\" placeholder=\"Enter the score\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"score","hash":{},"data":data}) : helper)))
    + "\"  class=\"form-control\" />\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"choice-item\" class=\"form-group form-inline ui-state-default\">\r\n  <input type=\"hidden\" data-name=\"uniqueid\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" />\r\n  <input type=\"radio\" name=\"question"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" />\r\n  <input type=\"text\" data-name=\"choice\" placeholder=\"Type your choice here\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" />\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.enable_scoring : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  <label>..</label>\r\n  <a data-role=\"delete-choice\">X</a>\r\n</div>";
},"useData":true});

this["dw"]["templates"]["shell_radiobutton"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"checkbox\">\r\n          <label>\r\n            <input type=\"radio\" data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\"question"
    + alias4(container.lambda((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "\" /> "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n          </label>\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-role=\"toggle\"  data-name=\"question-shell\" data-qid=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n\r\n  <div data-view=\"\">\r\n    <div data-container=\"question\" data-role=\"checkbox-question-type\" data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n      <div>\r\n        <p>"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n      </div>\r\n      <div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.choices : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\r\n      <div>\r\n        <ul>\r\n          <li>\r\n            <a data-action=\"edit\">Edit</a>\r\n          </li>\r\n          <li>\r\n            <a data-action=\"delete\">Delete</a>\r\n          </li>\r\n          <li>\r\n            <a data-action=\"insert\">Insert</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div data-view=\"\">\r\n\r\n    <h2>Edit Question</h2>\r\n\r\n    <div data-container=\"edit\">\r\n\r\n    </div>\r\n\r\n    <button data-name=\"save-question\" class=\"btn btn-primary\">Save</button>\r\n\r\n  </div>\r\n\r\n\r\n\r\n</div>";
},"useData":true,"useDepths":true});

this["dw"]["templates"]["shell"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\r\n	<h1>Wizard Title</h1>\r\n	<p>Wizard Description</p>\r\n</div>";
},"useData":true});