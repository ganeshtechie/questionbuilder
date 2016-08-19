(function() {


    window.renderEngine = function(config) {

        var html = "";

        if (config.type === "radiobutton") {
            html = window.dw.templates.shell_radiobutton(config);
        } else if (config.type === "checkbox") {
            html = window.dw.templates.shell_checkbox(config);
        } else if (config.type === "singleline") {
            html = window.dw.templates.shell_singleline(config);
        }

        return html;
    };


    window.questionFactory = function(type, config) {

        var latestQuestion = _.maxBy($.dw.base_configurations.datasource, "id");

        var newQuestionId = latestQuestion ? latestQuestion.id + 1 : 1;

        var defaults = {};

        defaults.required = true;
        defaults.randomizeChoice = true;
        defaults.title = config.default_question.replace(/\{0\}/, newQuestionId);


        if (config.scoring === "yes") {
            defaults.scoringMethod = config.default_scoring_method || config.scoring_at[0].value;
            defaults.score = defaults.scoringMethod === "question" ? config.default_score : null;
        }

        var Question = {};

        if (type === "radiobutton") {

            Question = {
                type: type,
                id: 1,
                choices: window.getChoiceFactory(type, config, [1, 2])
            };

        } else if (type === "checkbox") {

            Question = {
                type: type,
                id: 1,
                choices: window.getChoiceFactory(type, config, [1, 2])
            };

        }

        $.extend(Question, defaults);




        return Question;


    };

    window.getChoiceFactory = function(type, config, choiceId) {

        var choiceObj = {},
            score = null;

        choiceId = choiceId || [1];

        if (type === "radiobutton" || type === "checkbox") {

            if (config.scoring === "yes" && config.scoring_at.filter(function(o) {
                    return o.value === "choice";
                }).length > 0) {

                score = config.default_score || 1;
            }

            var choices = choiceId.map(function(e) {

                return {
                    id: e,
                    title: config.default_choice.replace(/\{0\}/, e.toString()),
                    score: score
                };

            });

            return choices;

        }

    };





})();
