define(["backbone","mustache","views/TrackItemView"],function(Backbone,Mustache,TrackItemView) {
    var View = Backbone.View.extend({
    	events: {
    		"click .back_button": "menu"
    	},
    	initialize: function() {
        	this.$el.attr("data-title", router.conference.name()); 
        	var template = Mustache.compile($("#conference_template").html());
           	this.$el.html(template(this.model));
        	var $ul = this.$el.find("#tracks_listview");
			this.model.tracks().each(function(track) {
				var trackItemView = new TrackItemView({model: track});
				$ul.append(trackItemView.el);
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