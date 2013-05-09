define(["backbone"],function(Backbone) {
    var View = Backbone.View.extend({
    	events: {
			"click .back_button": "menu"
    	},
    	initialize: function() {
    		this.$el.attr("data-title", router.conference.name()); 
    	},
        menu: function() {
        	router.navMenu();
        }
    });
    return View;
});