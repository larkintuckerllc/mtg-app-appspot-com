define(["backbone","models/ParticipantModel","backbonelocalstorage"], function(Backbone,ParticipantModel) {	
    var Collection = Backbone.Collection.extend( {
    	localStorage: new Backbone.LocalStorage("participants"),
        model: ParticipantModel,
        comparator: function(participant) {
        	return participant.last() + ", " + participant.first();
        }
    });
    return Collection;
});