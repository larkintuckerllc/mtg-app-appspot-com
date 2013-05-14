define(["backbone","mustache"],function(Backbone,Mustache) {
    var View = Backbone.View.extend({
    	events: {
			"click .back_button": "menu"
    	},
    	initialize: function() {
    		this.$el.attr("data-title", router.conference.name()); 
        	var template = Mustache.compile($("#about_template").html());
        	this.$el.html(template(this.model));
    	},
        menu: function() {
        	router.navMenu();
        }
    });
    return View;
});