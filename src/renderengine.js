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
                score = null;

            choiceId = choiceId || [1];

            if (type === "radiobutton" || type === "checkbox") {

                if (config.scoring_configuration && config.scoring_configuration !== null) {
                    score = config.scoring_configuration.default_score;
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

        }

    });





})(window);
