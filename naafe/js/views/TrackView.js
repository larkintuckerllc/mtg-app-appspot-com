define(["backbone","mustache","views/SessionItemView","views/PresentationItemView"],function(Backbone,Mustache,SessionItemView,PresentationItemView) {
    var View = Backbone.View.extend({
    	events: {
    		"click .back_button": "tracks"
    	},
    	initialize: function() {
        	this.$el.attr("data-role", "page");
        	this.$el.attr("data-title", router.conference.name()); 
        	var template = Mustache.compile($("#track_template").html());
           	this.$el.html(template(this.model));
        	var $ul = this.$el.find("#sessions_listview");
			this.model.sessions().each(function(session) {
				var sessionItemView = new SessionItemView({model: session});
				$ul.append(sessionItemView.el);
				session.presentations().each(function(presentation){
					var presentationItemView = new PresentationItemView({model: presentation});					
					$ul.append(presentationItemView.el);					
				});
			});
			if ($ul.hasClass('ui-listview')) {
				$ul.listview("refresh");
			}
    	},
    	tracks: function() {
        	router.navTracks();
        }
    });
    return View;
});