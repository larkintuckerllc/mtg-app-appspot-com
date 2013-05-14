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
           	this.$el.find("#track_button").html(util.noHTML(this.model.session().track().name()));
           	this.$el.find("#path_session_div").append("<p style=\"white-space: normal\"><b>" + this.model.session().readableTimeRange() + "</b></p>");
           	if (this.model.session().name() != null) {
               	this.$el.find("#path_session_div").append("<p style=\"white-space: normal\"><b>" + util.noHTML(this.model.session().name()) + "</b></p>");           		
           	}
           	if (this.model.session().location() != null) {
               	this.$el.find("#path_session_div").append("<p style=\"white-space: normal\"><b>" + util.noHTML(this.model.session().location()) + "</b></p>");           		
           	}
           	var $presentationDetailListview = this.$el.find("#presentation_detail_listview");
           	var speakerPresentations = this.model.speakerpresentations();
           	if (speakerPresentations.length != 0) {
           		$presentationDetailListview.append("<li><h3 style=\"white-space: normal\">Speakers:  <span id=\"speakers_div\"></span></h3></li>");
           		var view = this;
           		speakerPresentations.each(function(speakerpresentation) {
               		var speaker = speakerpresentation.speaker();
               		var speakerButtonView = new SpeakerButtonView({model: speaker});
                   	view.$el.find("#speakers_div").append(speakerButtonView.el);           		
               	});	
           	}
           	if (this.model.summary() != null) {
           		$presentationDetailListview.append("<li><h3 style=\"white-space: normal\">Summary:</h3><p style=\"white-space: normal\">" + util.simpleHTML(this.model.summary()) + "</p></li>");
           	} 
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