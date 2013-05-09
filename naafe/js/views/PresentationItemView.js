define(["backbone","mustache","util"],function(Backbone,Mustache,util) {
    var View = Backbone.View.extend( {
    	tagName: "li",
    	events: {
    		"click": "presentation"
    	},
    	initialize: function() {
        	var template = Mustache.compile($("#presentation_item_template").html());
           	this.$el.html(template(this.model));
           	var $speakersDiv = this.$el.find("#presentation_item_speakers_div");
           	this.model.speakerpresentations().each(function(speakerpresentation) {
           		var speaker = speakerpresentation.speaker();
           		$speakersDiv.append("[ " + util.noHTML(speaker.last()) +
           			 ", " + util.noHTML(speaker.first()) + " ] ");
           	});
        },
        presentation: function() {
        	router.navPresentation(this.model, {title: "Track"});
        }
    });
    return View;
});