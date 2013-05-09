define(["backbone","models/SessionModel","backbonelocalstorage"], function(Backbone,SessionModel) {	
    var Collection = Backbone.Collection.extend( {
    	localStorage: new Backbone.LocalStorage("sessions"),
        model: SessionModel,
        comparator: function(track) {
        	return track.start();
        }
    });
    return Collection;
});