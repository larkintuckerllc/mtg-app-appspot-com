define(["backbone","util"],function(Backbone,util) {
    var View = Backbone.View.extend( {
    	tagName: "li",
        initialize: function() {
        	this.$el.html("<h3>" + util.noHTML(this.model.text()) + "</h3><p style=\"white-space: normal\">" +  this.model.readableTime() + "</p>");
            return this;
        }
    });
    return View;
});