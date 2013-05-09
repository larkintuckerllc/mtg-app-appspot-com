define(["backbone","jquery","views/ErrorView","views/MenuView","models/ConferenceModelAuthoratative",
        "jquerymobile"],
		function(Backbone,$,ErrorView,MenuView,ConferenceModelAuthoratative) {
		var Router = Backbone.Router.extend({
		initialize: function(options) {
			var conferenceId = options.conferenceId;
			new ErrorView({el: "#error"});
			new MenuView({el: "#menu"});
        	this.conference = new ConferenceModelAuthoratative({id: conferenceId});
			$('#block-ui').show();
			$.mobile.loading("show");
    		router = this;
    		this.conference.fetch({success: function() {
    			$.mobile.loading("hide");
    			$('#block-ui').hide();
    			$.mobile.changePage("#menu",{reverse: false,changeHash: false});  		
        	},
        	error: function() {
        		router.error();
        	}});
        },
        error: function() {
			$.mobile.loading("hide");          					
			$('#block-ui').hide();
        	$.mobile.changePage("#error",{role:"dialog"});        	
        }
    });
    return Router;
});