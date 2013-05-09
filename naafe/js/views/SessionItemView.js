define(["backbone","mustache","util"],function(Backbone,Mustache,util) {
    var View = Backbone.View.extend( {
    	tagName: "li",
    	initialize: function() {
    		this.$el.attr("data-role","list-divider");
        	var template = Mustache.compile($("#session_item_template").html());  	
           	this.$el.html(template(this.model)); 
           	if (this.model.summary() != null) {
               	this.$el.find("#session_item_summary").html("<p>&nbsp;</p>" +
               	"<p style=\"white-space: normal\">" + util.simpleHTML(this.model.summary())  +  "</p>");           		
           	}
        }
    });
    return View;
});