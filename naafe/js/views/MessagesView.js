define(["backbone","views/MessageItemView"],function(Backbone,MessageItemView) {
    var View = Backbone.View.extend({
    	events: {
    		"click .back_button": "menu"
    	},
    	initialize: function() { 		
        	this.$el.attr("data-title", router.conference.name()); 
        	var $ul = this.$el.find("#messages_listview");
			$ul.empty();
			this.collection.each(function(message) {
				var messageItemView = new MessageItemView({model: message});
				$ul.append(messageItemView.el);
			});
			if ($ul.hasClass('ui-listview')) {
				$ul.listview("refresh");
			}
    	},
        menu: function() {
        	router.navMenu();
        }
    });
    return View;
});