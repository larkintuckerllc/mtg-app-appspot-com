define(["backbone","models/ParticipantModelAuthoritative"], function(Backbone,ParticipantModelAuthoritative) {	
    var Collection = Backbone.Collection.extend( {
        model: ParticipantModelAuthoritative,
        comparator: function(participant) {
        	return participant.last() + ", " + participant.first();
        }
    });
    return Collection;
});