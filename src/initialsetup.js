(function() {

    "use strict";

    var html = window.dw.templates.initial_setup({}),

        state = $.ab.state;

    $.widget("dw.initialstep", $.dw.assessmentbuilderbase, {

        options: {

        },

        datasource: null,

        _create: function() {

            this._super();

            this._bind();

        },

        _init: function() {

            var _selector;

            this.element.html(html);

            this.element.find("[data-role='editor']").jqxEditor({
                tools: 'bold italic underline | format font size | color background | left center right'
            });


            this.datasource = this.datasource || state;

            this.element.find("[data-name='assessment-title']").val(this.datasource.title);

            //this.element.find("[data-name='assessment-description']").val(this.datasource.description);

            this.element.find("[data-name='assessment-description']").val(this.datasource.description);

            console.log(this.datasource.retakeLimit);

            this.element.find("[data-name='retake']").val(this.datasource.retakeLimit);


            if (!this.options.scoring_configuration) {
                this.element.find("[data-section='scoring-method']").remove();
            } else {
                this.datasource.scoringMethod = this.datasource.scoringMethod || this.options.scoring_configuration.default_scoring_method;
                _selector = "[data-section='scoring-method'] [name='scoring-method'][value='{0}']".replace(/\{0\}/, this.datasource.scoringMethod);
                this.element.find(_selector).prop("checked", true);
            }


            if (this.options.enable_retake === "no") {
                this.element.find("[data-section='retake']").remove();
            } else {
                // the below line i've commented out, because this was causing an issue.
                // not sure how to write this condition. for now, lets keep it as it is.
                // don't remove the code.
                //this.datasource.retakeLimit = this.datasource.retakeLimit || this.options.retake_limit;
                this.element.find("[data-section='retake'] [data-name='retake']").val(this.datasource.retakeLimit);
            }

            this.datasource.stagingMethod = this.datasource.stagingMethod || this.options.default_staging_method;
            _selector = "[name='staging-method'][value='{0}']".replace(/\{0\}/, this.datasource.stagingMethod);
            this.element.find(_selector).prop("checked", true);

        },


        _bind: function() {

            this._on(this.element, {

                "change [data-name='assessment-title']": this._onTitleChanged,

                "change [data-name='assessment-description']": this._onDescriptionChanged,

                "click [data-section='scoring-method'] [name='scoring-method']": this._onScoringMethodChanged,

                "click [name='staging-method']": this._onStagingMethodChanged,

                "change [data-name='retake']": this._onRetakeLimitChanged,

                "click span.input--hoshi": this._onDescriptionFocused,

                "blur span.input--hoshi": this._onDescriptionBlured

            });

        },

        _onDescriptionFocused: function(event) {
            $(event.target).closest("span.input--hoshi").addClass("active");
        },

        _onDescriptionBlured: function(event) {
            $(event.target).closest("span.input--hoshi").removeClass("active");
        },

        _onStagingMethodChanged: function(event) {
            this.datasource.stagingMethod = $(event.target).val();
        },

        _onScoringMethodChanged: function(event) {
            this.datasource.scoringMethod = $(event.target).val();
        },

        _onTitleChanged: function(event) {
            var value = $(event.target).val();
            this.datasource.title = value;

            $(window).trigger("assessmentbuilder:titlechanged", {
                data: value
            });

        },

        _onDescriptionChanged: function(event) {
            //var value = $(event.target).val();

            var value = this.element.find("[data-name='assessment-description']").jqxEditor("val");

            this.datasource.description = value;
        },



        _onRetakeLimitChanged: function(event) {
            var value = $(event.target).val();
            console.log("_onRetakeLimitChanged");

            console.log(value);

            this.datasource.retakeLimit = parseInt(value);
        }

    });

})();
