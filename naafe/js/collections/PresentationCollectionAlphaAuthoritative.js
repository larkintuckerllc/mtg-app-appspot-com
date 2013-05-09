define(["backbone","models/PresentationModelAuthoritative"], function(Backbone,PresentationModelAuthoritative) {	
    var Collection = Backbone.Collection.extend( {
        model: PresentationModelAuthoritative,
        comparator: function(presentation) {
        	return presentation.name();
        }
    });
    return Collection;
});