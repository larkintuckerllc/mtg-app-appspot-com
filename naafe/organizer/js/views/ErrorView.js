define(["backbone"],function(Backbone) {
    var View = Backbone.View.extend({
    	events: {
			"click .reload_button": "reload"
    	},
        reload: function() {
        	location.reload();
        }
    });
    return View;
});