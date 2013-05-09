define(["backbone","mustache","util"],function(Backbone,Mustache,util) {
    var View = Backbone.View.extend( {
    	tagName: "button",
  		events: {
			"click": "speaker"
		},
		initialize: function() {
        	this.$el.attr("data-inline", "true");
        	this.$el.attr("data-mini", "true");
        	this.$el.html(util.noHTML(this.model.last()) + ", " +  util.noHTML(this.model.first()));        
		},
        speaker: function() {
        	router.navSpeaker(this.model);
		}
    });
    return View;
});


