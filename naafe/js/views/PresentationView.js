define(["backbone","mustache","views/SpeakerButtonView","util"],function(Backbone,Mustache,SpeakerButtonView,util) {
    var View = Backbone.View.extend({
    	events: {
    		"click .back_button": "back",
    		"click #track_button": "track"
    	},
    	initialize: function() {
    		this.source = this.options.source;
        	this.$el.attr("data-role", "page");
        	this.$el.attr("data-title", router.conference.name()); 
        	var template = Mustache.compile($("#presentation_template").html());
           	this.$el.html(template(this.model));
           	this.$el.find("#presentation_summary").html(util.simpleHTML(this.model.summary()));
           	this.$el.find(".back_button").html(this.source.title);           	
           	this.$el.find("#track_button").html(util.noHTML(this.model.session().track().name()));
           	this.$el.find("#path_session_div").append("<p><b>" + this.model.session().readableTimeRange() + "</b></p>");
           	this.$el.find("#path_session_div").append("<p><b>" + util.noHTML(this.model.session().name()) + "</b></p>");
           	this.$el.find("#path_session_div").append("<p><b>" + util.noHTML(this.model.session().location()) + "</b></p>");
           	var view = this;
           	this.model.speakerpresentations().each(function(speakerpresentation) {
           		var speaker = speakerpresentation.speaker();
           		var speakerButtonView = new SpeakerButtonView({model: speaker});
               	view.$el.find("#speakers_div").append(speakerButtonView.el);           		
           	});
    	},
        back: function() {
        	if (this.source.title == "Track") {
            	router.navTrack(this.model.session().track());        		
        	}
        	if (this.source.title == "Prstns") {
        		router.navPresentations();	
        	}
        	if (this.source.title == "Spkr") {
        		router.navSpeaker(this.source.speaker);	
        	}
        },
        track: function() {
        	router.navTrack(this.model.session().track());
        }
    });
    return View;
});