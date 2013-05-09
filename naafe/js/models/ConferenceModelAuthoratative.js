define(["backbone"],function(Backbone) {
    var Model = Backbone.Model.extend({
    	urlRoot: "/conferences",
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