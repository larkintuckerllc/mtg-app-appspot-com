define(["backbone","models/SpeakerPresentationModelAuthoritative"], function(Backbone,SpeakerPresentationModelAuthoritative) {	
    var Collection = Backbone.Collection.extend( {
        model: SpeakerPresentationModelAuthoritative,
        comparator: function(speakerpresentation) {
        	return speakerpresentation.order();
        }
    });
    return Collection;
});