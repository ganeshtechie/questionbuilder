(function() {

    "use strict";


    function SingleLine(element, options) {

        options = options || {};

        var defaults = {
            supported_formats: [{
                title: "Free Text",
                value: "freetext"
            }, {
                value: "number",
                title: "Number"
            }, {
                value: "date",
                title: "Date"
            }, {
                value: "time",
                title: "Time"
            }, {
                value: "email",
                title: "Email"
            }]
        };

        options = $.extend({}, defaults, $.dw.base_configurations, options);

        this.options = options;

        this.element = element;

        this.element.append(window.dw.templates.singleline({
            supported_formats: this.options.supported_formats
        }));

        this.element.data("pluginName", "qbSingleLine");
        this.element.data("qbSingleLine", this);

        this.bind();

        this.element.find("[data-name='field-format']").trigger("change");

        this.bindData();

    }


    SingleLine.prototype = {

        bindData: function() {

            var value = this.element.data("value");

            if (!value) return;

            this.element.find("[data-name='field-format']").val(value.fieldformat).trigger("change");
            this.element.find("[data-name='max-len']").val(value.maximumlength);
        },

        bind: function() {

            this.element.find("[data-name='field-format']").on("change", this.onFieldFormatChanged);

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
                case "freetext":
                    this.showMaxlength(true);
                    break;
                case "number":
                    this.showMaxlength(true);
                    break;
                case "date":
                    this.showMaxlength(false);
                    break;
                case "time":
                    this.showMaxlength(false);
                    break;
                case "email":
                    this.showMaxlength(true);
                    break;
                default:
                    break;
            }
        },

        showMaxlength: function(args) {

            if (!args)
                this.element.find("[data-section='max-len']").hide();
            else
                this.element.find("[data-section='max-len']").show();

        },

        val: function() {

            var format = this.element.find("[data-name='field-format']").val();

            var maximumlength = null;

            if (this.element.find("[data-name='max-len']").val())
                maximumlength = parseInt(this.element.find("[data-name='max-len']").val());

            return {
                id: 1,
                fieldformat: format,
                maximumlength: maximumlength
            };

        },

        destroy: function() {

            this.element.html("");

            var pluginName = this.element.data("pluginName");

            // this will remove all the data attributes
            this.element.removeData([pluginName, "name", "value"]);

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

    /*
        $("#choices").qbSingleLine();


        $("#getValues").on("click", function(event) {

            var api = $("#choices").data("qbSingleLine");

        });

    */

    $.fn.basicInput = function() {

        var putMaxLengthLabel = function(e) {

            var label = $("<label>").text("Max Char: {0}".replace(/\{0\}/, $(e).data("max-len")));

            label.insertAfter($(e));
        };

        this.each(function() {

            $.each($(this).find("[data-role='freetext']"), function(i, e) {
                putMaxLengthLabel(e);
                $(e).removeAttr("data-role");
            });

            $.each($(this).find("[data-role='number']"), function(i, e) {

                $(e).attr("type", "number");

                putMaxLengthLabel(e);
                $(e).removeAttr("data-role");

            });


            $.each($(this).find("[data-role='date']"), function(i, e) {

                $(e).attr("type", "date");
                $(e).removeAttr("data-role");

            });

            $.each($(this).find("[data-role='email']"), function(i, e) {

                $(e).attr("placeholder", "Email: someone@domain.com");

                putMaxLengthLabel(e);
                $(e).removeAttr("data-role");

            });


            $.each($(this).find("[data-role='richtext']"), function(i, e) {

                $(e).attr("placeholder", "HTML Content is allowed");

                $(e).removeAttr("data-role");

            });


        });
    };

    

    //$("[data-section='single-line']").basicInput();





})();
