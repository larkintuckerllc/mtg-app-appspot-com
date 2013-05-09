define(["backbone","backbonelocalstorage"],function(Backbone) {
    var Model = Backbone.Model.extend({
    	localStorage: new Backbone.LocalStorage("speakerpresentations"),
    	idAttribute: "id",
        speakerId: function() {
         	return this.get("speakerId");
        },
	    presentationId: function() {
	     	return this.get("presentationId");
	    },
	    order: function() {
	    	return this.get("order");
	    },
	    speaker: function() {
	    	return router.speakers.where({id: this.speakerId()})[0];
	    },
	    presentation: function() {
	    	return router.presentations.where({id: this.presentationId()})[0];	    	
	    }
    });
    return Model;
});