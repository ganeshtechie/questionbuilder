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

            scoring_at: [{ title: "Question", value: "question" }, { title: "Choice", value: "choice"}],

            default_scoring_method: "any",

            allow_to_change_scoring_method: "yes",

            negative_score: "yes"
            
        },

        /***************************************************** Scoring ***************************************/


        /* only the allowed options will be enabled in the UI. leave it as empty to allow all the possible options
         * like "edit", "delete", "insert", "move"
         */
        allowed_access: ["edit", "delete"],

        // this is a default question which will appear when user clicks on insert button
        default_question: "Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey.",

        default_choice: "Untitled Choice {0}",

        datasource: []

    };



})();
