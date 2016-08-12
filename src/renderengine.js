(function () {


    window.renderEngine = function (config) {

        var html = "";        

        if (config.type === "radiobutton") {
            html = window.dw.templates.shell_radiobutton(config);
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
                choices: [{ id: 1, title: "Yes" }, { id: 2, title: "No" }]
            };

        }


        return Question;


    };





})();