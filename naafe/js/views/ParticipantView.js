define(["backbone","mustache"],function(Backbone,Mustache) {
    var View = Backbone.View.extend({
    	events: {
    		"click .back_button": "participants"
    	},
    	initialize: function() {
        	this.$el.attr("data-role", "page");
        	this.$el.attr("data-title", router.conference.name()); 
        	var templateObject = {
        			last: this.model.last(),
        			first: this.model.first(),
        			detail: ""
        	};
        	if ((typeof this.model.organization() != undefined) || (typeof this.model.email() != undefined)) {
        		templateObject.detail += "<p style=\"text-align: center; white-space: normal\">";
        	} 
        	if (typeof this.model.organization() != "undefined") {
        		templateObject.detail += this.model.organization();
        	}
    		if (typeof this.model.email() != "undefined") {
    			if (typeof this.model.organization() != "undefined") {
    				templateObject.detail += "<br>";
    			}
    			templateObject.detail += "<a href=\"mailto:{{ email }}\">" + this.model.email() + "</a>";
    		}
        	if ((typeof this.model.organization() != undefined) || (typeof this.model.email() != undefined)) {
        		templateObject.detail += "</p>";
        	} 
        	var template = Mustache.compile($("#participant_template").html());
           	this.$el.html(template(templateObject));
        	var $ul = this.$el.find("#participant_presentations_listview");
			if ($ul.hasClass('ui-listview')) {
				$ul.listview("refresh");
			}
    	},
    	participants: function() {
        	router.navParticipants();
        }
    });
    return View;
});