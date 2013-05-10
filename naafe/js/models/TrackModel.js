define(["backbone","collections/SessionCollection","backbonelocalstorage"],function(Backbone,SessionCollection) {
    var Model = Backbone.Model.extend({
    	localStorage: new Backbone.LocalStorage("tracks"),
    	idAttribute: "id",
    	name: function() {
         	return this.get("name");
        },
    	summary: function() {
         	return this.get("summary");
        },
        order: function() {
        	return this.get("order");
        },
    	conferenceId: function() {
         	return this.get("conferenceId");
        },
        sessions: function() {
        	var sessions = new SessionCollection();
        	var trackSessions = router.sessions.where({trackId: this.id});
			for (var i=0; i<trackSessions.length; i++) {
				sessions.add(trackSessions[i]);
			}
			return sessions;
        }
     });
    return Model;
});