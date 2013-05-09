define(["backbone","mustache","views/MessageItemView"],function(Backbone,Mustache,MessageItemView) {
    var View = Backbone.View.extend({
        events: {
        	"click #schedule_button": "tracks",
        	"click #speakers_button": "speakers",
        	"click #presentations_button": "presentations",
        	"click #messages_button": "messages",
        	"click #about_button": "about",
        	"click .reload_button": "reload"
        },
    	initialize: function() {
    		var online = this.options.online;
    		var localstorage = this.options.localstorage;
    		var messages = this.options.messages;
        	this.$el.attr("data-title", router.conference.name()); 
        	var template = Mustache.compile($("#menu_template").html());
           	this.$el.html(template(this.model));
        	var $ul = this.$el.find("#menu_messages_listview");
        	for (var i = 0; i < Math.min(messages.size(),2); i++) {
				var messageItemView = new MessageItemView({model: messages.at(i)});
				$ul.append(messageItemView.el);
			}
			$ul.append("<li><button id=\"messages_button\">More Messages</button></li>");
        	if (online) {
        		if (localstorage) {
            		this.$el.find(".reload_button").html("Reload [ Online ]");        			
        		} else {
            		this.$el.find(".reload_button").html("Reload");        			        			
        		} 
        	} else {
        		this.$el.find(".reload_button").html("Reload [ Offline ]");
        		this.$el.find(".reload_button").attr("data-theme","f");
        	} 
    	},
        tracks: function() {
        	router.navTracks();
        },
        speakers: function() {
        	router.navSpeakers();
        },
        presentations: function() {
        	router.navPresentations();
        },
        messages: function() {
        	router.navMessages();
        },
        about: function() {
        	router.navAbout();
        },
        reload: function() {
        	location.reload();
        }
    });
    return View;
});
