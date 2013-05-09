define(["backbone","models/SessionModelAuthoritative"], function(Backbone,SessionModelAuthoritative) {	
    var Collection = Backbone.Collection.extend( {
        model: SessionModelAuthoritative,
        comparator: function(track) {
        	return track.start();
        }
    });
    return Collection;
});