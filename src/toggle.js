(function() {

    var plugin = "dwToggle";

    function Toggle(element, options) {

        this.element = $(element);
        this.showMainView();
    }

    Toggle.prototype.showMainView = function() {

        var div1 = this.element.find("[data-view]:first"),
            div2 = this.element.find("[data-view]:last");

        div2.hide();
        div1.show();

        this.element.attr("data-active", false);
    };

    Toggle.prototype.toggle = function() {
        var firstView = this.element.find("[data-view]:first"),
            lastView = this.element.find("[data-view]:last");

        var activeView = null;


        if (firstView.is(":visible")) {
            firstView.hide();
            lastView.show();
            this.element.attr("data-active", true);
            activeView = lastView;
        } else {
            firstView.show();
            lastView.hide();
            this.element.attr("data-active", false);
            activeView = firstView;
        }

        return this;

    };



    $.fn[plugin] = function(options) {

        return this.each(function() {

            var element = $(this);

            if (element.data(plugin)) {
                return;
            }

            var toggle = new Toggle(element, options);

            element.data(plugin, toggle);

        });

    };

})();
