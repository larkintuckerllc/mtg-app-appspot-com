define(["backbone","mustache"],function(Backbone,Mustache) {
    var View = Backbone.View.extend( {
    	tagName: "li",
  		events: {
			"click": "navigate"
		},
		initialize: function() {
        	var template = Mustache.compile($("#participant_item_template").html());
           	this.$el.html(template(this.model));       
        },
        navigate: function() {
        	router.navParticipant(this.model);
		}
    });
    return View;
});