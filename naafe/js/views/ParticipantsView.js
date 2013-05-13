define(["backbone","views/ParticipantItemView"],function(Backbone,ParticipantItemView) {
    var View = Backbone.View.extend({
    	events: {
    		"click .back_button": "menu"
    	},
    	initialize: function() {
        	this.$el.attr("data-title", router.conference.name()); 
        	var $ul = this.$el.find("#participants_listview");
			$ul.empty();
			this.collection.each(function(participant) {
				var participantItemView = new ParticipantItemView({model: participant});
				$ul.append(participantItemView.el);
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