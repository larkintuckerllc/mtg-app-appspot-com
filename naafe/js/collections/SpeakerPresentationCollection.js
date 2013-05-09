define(["backbone","models/SpeakerPresentationModel","backbonelocalstorage"], function(Backbone,SpeakerPresentationModel) {	
    var Collection = Backbone.Collection.extend( {
    	localStorage: new Backbone.LocalStorage("speakerpresentations"),
        model: SpeakerPresentationModel,
        comparator: function(speakerpresentation) {
        	return speakerpresentation.order();
        }
    });
    return Collection;
});