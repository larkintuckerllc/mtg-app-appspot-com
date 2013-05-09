define(["backbone","models/SpeakerModelAuthoritative"], function(Backbone,SpeakerModelAuthoritative) {	
    var Collection = Backbone.Collection.extend( {
        model: SpeakerModelAuthoritative,
        comparator: function(speaker) {
        	return speaker.last() + ", " + speaker.first();
        }
    });
    return Collection;
});