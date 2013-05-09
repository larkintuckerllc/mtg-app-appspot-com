define(["backbone","collections/SessionCollectionAuthoritative"],function(Backbone,SessionCollectionAuthoritative) {
    var Model = Backbone.Model.extend({
    	idAttribute: "id",
    	name: function() {
         	return this.get("name");
        },
    	summary: function() {
         	return this.get("summary");
        },
    	conferenceId: function() {
         	return this.get("conferenceId");
        },
        sessions: function() {
        	var sessions = new SessionCollectionAuthoritative();
        	var trackSessions = router.sessions.where({trackId: this.id});
			for (var i=0; i<trackSessions.length; i++) {
				sessions.add(trackSessions[i]);
			}
			return sessions;
        }
    });
    return Model;
});