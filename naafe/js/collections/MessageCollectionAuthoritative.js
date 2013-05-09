define(["backbone","models/MessageModelAuthoratative"], function(Backbone,MessageModelAuthoritative) {	
    var Collection = Backbone.Collection.extend( {
        model: MessageModelAuthoritative,
        comparator: function(message) {
        	return -1 * message.created();
        }
    });
    return Collection;
});