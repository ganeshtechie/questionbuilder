(function() {

    "use strict";


    function MultiLine(element, options) {

        options = options || {};

        var defaults = {
            supported_formats: [{
                title: "Free Text",
                value: "freetext"
            }, {
                value: "richtext",
                title: "Rich Text"
            }]
        };

        options = $.extend({}, defaults, $.dw.base_configurations, options);

        this.options = options;

        this.element = element;

        this.element.append(window.dw.templates.multiline({
            supported_formats: this.options.supported_formats
        }));

        this.element.data("pluginName", "qbMultiLine");
        this.element.data("qbMultiLine", this);

        this.bind();

        this.element.find("[data-name='field-format']").trigger("change");

        this.bindData();

    }


    MultiLine.prototype = {

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

            var container = element.closest("[data-role='multi-line']");

            var pluginName = container.data("pluginName");

            var multiLine = container.data(pluginName);

            multiLine.changeFormat(element.val());

        },

        changeFormat: function(format) {
            switch (format) {
                case "freetext":
                    this.showMaxlength(true);
                    break;
                case "richtext":
                    this.showMaxlength(false);
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

    $.fn.qbMultiLine = function(element, options) {

        return this.each(function() {

            var element = $(this);

            // return by doing nothing, if the plugin is already binded to the dom
            if (element.data("qbMultiLine")) {
                return;
            }

            options = options || {};

            element.attr("data-role", "multi-line");

            new MultiLine(element, options);

        });

    };



})();
