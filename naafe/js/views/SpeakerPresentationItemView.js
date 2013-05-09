define(["backbone","mustache"],function(Backbone,Mustache) {
    var View = Backbone.View.extend( {
    	tagName: "li",
    	events: {
    		"click": "presentation"
    	},
    	initialize: function() {
    		this.source = this.options.source;
        	var templateObject = {trackName: this.model.session().track().name(),
        			sessionReadableTimeRange: this.model.session().readableTimeRange(),
        			name: this.model.name()};
        	var template = Mustache.compile($("#speaker_presentation_item_template").html());
           	this.$el.html(template(templateObject));
        },
        presentation: function() {
        	router.navPresentation(this.model, this.source);
        }
    });
    return View;
});