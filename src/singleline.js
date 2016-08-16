(function() {

    "use strict";


    function SingleLine(element, options) {

        var defaults = {
            supported_formats: ["Free Text", "Number", "Datepicker", "Time", "Email"]

        };

        $.extend(options, defaults);

        this.options = options;

        this.element = element;

        this.element.append(window.dw.templates.singleline({ supported_formats: this.options.supported_formats }));

        this.element.data("pluginName", "qbSingleLine");
        this.element.data("qbSingleLine", this);

        this.bind();

        this.element.find("[data-name='field-format']").trigger("change");

    }


    SingleLine.prototype = {

        bind: function() {

            $("body").on("change", "[data-name='field-format']", this.onFieldFormatChanged);

        },


        onFieldFormatChanged: function(event) {

            var element = $(event.target);

            var container = element.closest("[data-role='single-line']");

            var pluginName = container.data("pluginName");

            var singleLine = container.data(pluginName);

            singleLine.changeFormat(element.val());

        },

        changeFormat: function(format) {


            switch (format) {
                case "Free Text":
                    break;
                case "Number":
                    break;
                case "Datepicker":
                    break;
                case "Time":
                    break;
                case "Email":
                    break;
                default:
                    break;
            }
        },

        val: function() {

            return {
                id: 1,
                fieldformat: this.element.find("[data-name='field-format']").val()                
            };

        },

        destroy: function() {

            this.element.html("");

            var pluginName = this.element.data("pluginName");

            // this will remove all the data attributes
            this.element.removeData([pluginName, "name"]);

        }


    };


    $.fn.qbSingleLine = function(element, options) {

        return this.each(function() {

            var element = $(this);

            // return by doing nothing, if the plugin is already binded to the dom
            if (element.data("qbSingleLine")) {
                return;
            }

            options = options || {};

            element.attr("data-role", "single-line");

            new SingleLine(element, options);

            //element.data("pluginName", "qbSingleLine");
            //element.data("qbSingleLine", singleLine); // this object can be further accessed to communicate to the plugin

        });

    };


    $("#choices").qbSingleLine();





})();
