(function() {
    window.dw = {};

    window.dw.config = {};

    // A configuration has to tell, how the widget has to behave

    var with_scoring = {
        title: "Health Assessment", // wizard title
        description: "A Basic health assessment", // wizard description
        allowed_question_types: ["checkbox", "radio", "textbox"], // load the different plugins based on the question types needed for the wizard
        minimum_no_of_questions_required: 1, // specifies the minimum no of questions required
        maximum_no_of_questions_allowed: 10, // specifies the maximum allowed question
        scoring: "yes", // "yes" if scoring is required, else "no"
        repeat: "custom" // enables options to allow the author to choose the value for repeat / also accepts an integer value that represents the no of repeat
    };


    var without_scoring = {
        title: "Health Assessment",
        description: "A Basic health assessment",
        allowed_question_types: ["checkbox", "radio", "textbox"], // load the different plugins based on the question types needed for the wizard
        minimum_no_of_questions_required: 1,
        maximum_no_of_questions_allowed: 10,
        scoring: "no",
        show_feedback: "yes",
        feedback_message: "Thanks for your response" // the feedback message which needs to be shown to the user, after submitting the assessment
    };

    // Full list of configurations
    var fixed_scoring = {
        title: "Health Assessment", // wizard title
        description: "A Basic health assessment", // wizard description
        allowed_question_types: ["checkbox", "radio", "textbox", "datepicker", "email", "integer", "richtext"], // load the different plugins based on the question types needed for the wizard
        minimum_no_of_questions_required: 1, // specifies the minimum no of questions required. Default is "1"
        maximum_no_of_questions_allowed: 10, // specifies the maximum allowed question. Default is "10"
        scoring: "yes", // "yes" if scoring is required, else "no"; this also enables the section to passing score, feedback, scoring method
        default_score: 1, // default score for each question
        negative_score: "yes", // enables the ui to enter negative scores 
        import_questions: "yes", // allows the author to import questions from other sources like an existing wizard / a default template

        /* if "yes" by default the required option will be checked and readonly. if no, it will be unchecked and readonly. leave it as null ( default ) to allow the author 
         * to decide on that.
         */
        all_mandatory_questions: "yes",

        repeat: "custom", // enables options to allow the author to choose the value for repeat / also accepts an integer value that represents the no of retakes
        allow_tagging_questions: "yes", // enables the ui to tag questions with the given tags
        tags: ["depression", "anxiety", "fear"], // tags which can be added to a question
        scoring_method: ["choice", "question"], // enables the ui to add scores either on question / choices

        /* only the allowed options will be enabled in the UI. leave it as empty to allow all the possible options
         * like "edit", "delete", "insert", "move"
         */
        allowed_options: ["edit", "delete"]
    };


    window.dw.config.basic = basic;


})();
