define(["backbone"],function(Backbone) {
    var Model = Backbone.Model.extend({
    	idAttribute: "id",
        first: function() {
         	return this.get("first");
        },
	    last: function() {
	     	return this.get("last");
	    },
	    organization: function() {
	    	return this.get("organization");
	    },
	    email: function() {
	    	return this.get("email");
	    }
    });
    return Model;
});