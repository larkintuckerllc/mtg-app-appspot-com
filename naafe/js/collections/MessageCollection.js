define(["backbone","models/MessageModel","backbonelocalstorage"], function(Backbone,MessageModel) {	
    var Collection = Backbone.Collection.extend( {
    	localStorage: new Backbone.LocalStorage("messages"),
        model: MessageModel,
        comparator: function(message) {
        	return -1 * message.created();
        }
    });
    return Collection;
});