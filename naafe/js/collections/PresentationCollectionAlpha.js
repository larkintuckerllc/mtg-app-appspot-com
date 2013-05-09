define(["backbone","models/PresentationModel"], function(Backbone,PresentationModel) {	
    var Collection = Backbone.Collection.extend( {
        model: PresentationModel,
        comparator: function(presentation) {
        	return presentation.name();
        }
    });
    return Collection;
});