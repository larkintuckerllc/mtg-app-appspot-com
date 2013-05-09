define(["backbone","mustache","util"],function(Backbone,Mustache,util) {
    var View = Backbone.View.extend( {
    	tagName: "li",
  		events: {
			"click": "track"
		},
        initialize: function() {
        	var template = Mustache.compile($("#track_item_template").html());
           	this.$el.html(template(this.model));  
           	this.$el.find("#track_item_summary").html(util.simpleHTML(this.model.summary()));
        	return this;
        },
        track: function() {
        	router.navTrack(this.model);
		}
    });
    return View;
});