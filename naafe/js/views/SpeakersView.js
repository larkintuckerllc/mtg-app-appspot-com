define(["backbone","views/SpeakerItemView"],function(Backbone,SpeakerItemView) {
    var View = Backbone.View.extend({
    	events: {
    		"click .back_button": "menu"
    	},
    	initialize: function() {
        	this.$el.attr("data-title", router.conference.name()); 
        	var $ul = this.$el.find("#speakers_listview");
			$ul.empty();
			this.collection.each(function(speaker) {
				var speakerItemView = new SpeakerItemView({model: speaker});
				$ul.append(speakerItemView.el);
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