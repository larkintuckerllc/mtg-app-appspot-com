define(["backbone","collections/SpeakerPresentationCollection","","backbonelocalstorage"],function(Backbone,SpeakerPresentationCollection) {
    var Model = Backbone.Model.extend({
    	localStorage: new Backbone.LocalStorage("presentations"),
    	idAttribute: "id",
    	name: function() {
         	return this.get("name");
        },
        order: function() {
        	return this.get("order");
        },
        summary: function() {
         	return this.get("summary");
        },
        sessionId: function() {
         	return this.get("sessionId");
        },
        session: function() {
        	return router.sessions.where({id: this.sessionId()})[0];
        },
        speakerpresentations: function() {
        	var speakerpresentations = new SpeakerPresentationCollection();
        	var presentationSpeakerPresentations = router.speakerpresentations.where({presentationId: this.id});
			for (var i=0; i<presentationSpeakerPresentations.length; i++) {
				speakerpresentations.add(presentationSpeakerPresentations[i]);
			}
			return speakerpresentations;
        }
    });
    return Model;
});