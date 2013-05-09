define(["backbone","models/PresentationModelAuthoritative"], function(Backbone,PresentationModelAuthoritative) {	
    var Collection = Backbone.Collection.extend( {
        model: PresentationModelAuthoritative,
        comparator: function(presentation) {
        	return presentation.session().start() + presentation.order();
        }
    });
    return Collection;
});