define(["backbone","models/TrackModelAuthoratative"], function(Backbone,TrackModelAuthoritative) {	
    var Collection = Backbone.Collection.extend( {
        model: TrackModelAuthoritative,
        comparator: function(track) {
        	return track.name();
        }
    });
    return Collection;
});