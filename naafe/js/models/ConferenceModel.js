define(["backbone","backbonelocalstorage"],function(Backbone) {
    var Model = Backbone.Model.extend({
    	localStorage: new Backbone.LocalStorage("conferences"),
    	idAttribute: "id",
    	name: function() {
         	return this.get("name");
        },
        timezone: function() {
         	return this.get("timezone");
        },
        spreadsheet: function() {
         	return this.get("spreadsheet");
        },
        participants: function() {
         	return this.get("participants");
        },
        version: function() {
        	return this.get("version");
        },
        twitterUser: function() {
        	return this.get("twitterUser");
        },
        tracks: function() {
        	return router.tracks;
        }
    });
    return Model;
});