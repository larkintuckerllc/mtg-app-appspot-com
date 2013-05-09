define(["backbone","models/TrackModel","backbonelocalstorage"], function(Backbone,TrackModel) {	
    var Collection = Backbone.Collection.extend( {
    	localStorage: new Backbone.LocalStorage("tracks"),
        model: TrackModel,
        comparator: function(track) {
        	return track.name();
        }
    });
    return Collection;
});