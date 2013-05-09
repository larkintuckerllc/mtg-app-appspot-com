define(["backbone","collections/PresentationCollection","backbonelocalstorage"],function(Backbone,PresentationCollection) {
    var Model = Backbone.Model.extend({
    	localStorage: new Backbone.LocalStorage("speakers"),
    	idAttribute: "id",
        first: function() {
         	return this.get("first");
        },
	    last: function() {
	     	return this.get("last");
	    },
	    findPresentations: function() {
	    	var presentations = new PresentationCollection();
	    	var speakerSpeakerPresentations = router.speakerpresentations.where({speakerId: this.id});
			for (var i=0; i<speakerSpeakerPresentations.length; i++) {
				presentations.add(speakerSpeakerPresentations[i].presentation());
			}
			return presentations;
	    }
    });
    return Model;
});