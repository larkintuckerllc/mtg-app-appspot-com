define(["backbone","views/PresentationAlphaItemView"],function(Backbone,PresentationAlphaItemView) {
    var View = Backbone.View.extend({
    	events: {
    		"click .back_button": "menu"
    	},
    	initialize: function() {
        	this.$el.attr("data-title", router.conference.name()); 
        	var $ul = this.$el.find("#presentations_listview");
			$ul.empty();
			this.collection.each(function(presentation) {
				var presentationAlphaItemView = new PresentationAlphaItemView({model: presentation});
				$ul.append(presentationAlphaItemView.el);
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