(function () {


    window.renderEngine = function (config) {

        var html = "";        

        if (config.type === "radiobutton") {
            html = window.dw.templates.shell_radiobutton(config);
        }else if (config.type === "checkbox") {
            html = window.dw.templates.shell_checkbox(config);
        }

        return html;
    };


    window.questionFactory = function (type) {
        var Question = {};

        if (type === "radiobutton") {

            Question = {
                type: type,
                title: "Sample Question",
                id: 1,
                scoringMethod: "choice",
                choices: [{ id: 1, title: "Yes", score: 10 }, { id: 2, title: "No", score: 0 }]
            };

        } else if(type === "checkbox"){

            Question = {
                type: type,
                title: "Sample Question",
                id: 1,
                scoringMethod: "choice",
                choices: [{ id: 1, title: "Yes", score: 10 }, { id: 2, title: "No", score: 0 }]
            };
            
        }


        return Question;


    };





})();