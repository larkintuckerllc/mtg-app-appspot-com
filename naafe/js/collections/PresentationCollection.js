define(["backbone","models/PresentationModel","backbonelocalstorage"], function(Backbone,PresentationModel) {	
    var Collection = Backbone.Collection.extend( {
    	localStorage: new Backbone.LocalStorage("presentations"),
        model: PresentationModel,
        comparator: function(presentation) {
        	return presentation.session().start() + presentation.order();
        }
    });
    return Collection;
});