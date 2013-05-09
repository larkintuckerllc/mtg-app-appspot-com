define(["backbone","models/SpeakerModel","backbonelocalstorage"], function(Backbone,SpeakerModel) {	
    var Collection = Backbone.Collection.extend( {
    	localStorage: new Backbone.LocalStorage("speakers"),
        model: SpeakerModel,
        comparator: function(speaker) {
        	return speaker.last() + ", " + speaker.first();
        }
    });
    return Collection;
});