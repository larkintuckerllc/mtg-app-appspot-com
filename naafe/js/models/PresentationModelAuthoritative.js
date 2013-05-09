define(["backbone","collections/SpeakerPresentationCollectionAuthoritative"],function(Backbone,SpeakerPresentationCollectionAuthoritative) {
    var Model = Backbone.Model.extend({
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
        	var speakerpresentations = new SpeakerPresentationCollectionAuthoritative();
        	var presentationSpeakerPresentations = router.speakerpresentations.where({presentationId: this.id});
			for (var i=0; i<presentationSpeakerPresentations.length; i++) {
				speakerpresentations.add(presentationSpeakerPresentations[0]);
			}
			return speakerpresentations;
        }
    });
    return Model;
});