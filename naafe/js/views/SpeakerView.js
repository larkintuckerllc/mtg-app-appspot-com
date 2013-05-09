define(["backbone","mustache","views/SpeakerPresentationItemView"],function(Backbone,Mustache,SpeakerPresentationItemView) {
    var View = Backbone.View.extend({
    	events: {
    		"click .back_button": "speakers"
    	},
    	initialize: function() {
        	this.$el.attr("data-role", "page");
        	this.$el.attr("data-title", router.conference.name()); 
        	var template = Mustache.compile($("#speaker_template").html());
           	this.$el.html(template(this.model));
        	var $ul = this.$el.find("#speaker_presentations_listview");
        	var view = this;
        	this.model.findPresentations().each(function(presentation) {
	        	var speakerPresentationItemView = new SpeakerPresentationItemView({model: presentation, source: {title: "Spkr", speaker: view.model}});
	        	$ul.append(speakerPresentationItemView.el);
        	});        	
			if ($ul.hasClass('ui-listview')) {
				$ul.listview("refresh");
			}
    	},
    	speakers: function() {
        	router.navSpeakers();
        }
    });
    return View;
});