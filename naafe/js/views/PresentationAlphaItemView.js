define(["backbone","util"],function(Backbone,util) {
    var View = Backbone.View.extend( {
    	tagName: "li",
    	events: {
    		"click": "presentation"
    	},
        initialize: function() {
        	this.$el.html("<a><div style=\"white-space: normal\">" + util.noHTML(this.model.name()) + "</div></a>");
        },
        presentation: function() {
        	router.navPresentation(this.model, {title: "Prstns"});
        }
    });
    return View;
});