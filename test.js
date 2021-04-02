$(document).ready(function () {
    // Initialize GaugeMeter plugin
    $(".GaugeMeter").gaugeMeter();

    // Bind new handler to init and update gauges.
    ko.bindingHandlers.gaugeValue = {
        init: function(element, valueAccessor) {
            $(element).gaugeMeter({ percent: ko.unwrap(valueAccessor()) });
        },
        update: function(element, valueAccessor) {
            $(element).gaugeMeter({ percent: ko.unwrap(valueAccessor()) });
        }
    };

    // Create view model with inital gauge value 15mph
    // Use observable for easy update.
    var myViewModel = {
        Percent: ko.observable(15)
    };
    ko.applyBindings(myViewModel);
});