define(["backbone","jquery","views/ErrorView","views/MenuView",
        "models/ConferenceModelAuthoratative",
        "collections/TrackCollectionAuthoritative",
        "collections/SessionCollectionAuthoritative",
        "collections/PresentationCollectionAuthoritative",
        "collections/SpeakerPresentationCollectionAuthoritative",
        "collections/SpeakerCollectionAuthoritative",
        "collections/MessageCollectionAuthoritative", 
        "views/ConferenceView","views/TrackView","views/PresentationView",
        "views/SpeakersView","collections/PresentationCollectionAlphaAuthoritative",
        "views/PresentationsView","views/SpeakerView",
        "views/MessagesView","views/AboutView",
        "jquerymobile"],
		function(Backbone,$,ErrorView,MenuView,
				ConferenceModelAuthoratative,
				TrackCollectionAuthoratative,
				SessionCollectionAuthoritative,
				PresentationCollectionAuthoritative,
				SpeakerPresentationCollectionAuthoritative,
				SpeakerCollectionAuthoritative,
				MessageCollectionAuthoritative,
				ConferenceView,TrackView,PresentationView,
				SpeakersView,PresentationCollectionAlphaAuthoritative,
				PresentationsView,SpeakerView,
				MessagesView,AboutView) {
		var Router = Backbone.Router.extend({
		initialize: function(options) {
			var conferenceId = options.conferenceId;
			new ErrorView({el: "#error"});
        	this.conference = new ConferenceModelAuthoratative({id: conferenceId});
			$('#block-ui').show();
			$.mobile.loading("show");
    		router = this;
    		this.conference.fetch({success: function() {
    			router.messages = new MessageCollectionAuthoritative();
    			router.messages.url = "/tweets/" + router.conference.twitterUser();
    			router.messages.fetch({success: function() {
    				router.tracks = new TrackCollectionAuthoratative();
            		router.tracks.url = "/conferences/" + router.conference.id + "/tracks";
            		router.tracks.fetch({success: function() {        			
            			router.sessions = new SessionCollectionAuthoritative();
                		router.sessions.url = "/conferences/" + router.conference.id + "/sessions";
                		router.sessions.fetch({success: function() {
                    		router.presentations = new PresentationCollectionAuthoritative();
                    		router.presentations.url = "/conferences/" + router.conference.id + "/presentations";
                    		router.presentations.fetch({success: function() {
                            	router.presentationsAlpha = new PresentationCollectionAlphaAuthoritative();
                            	router.presentations.each(function(presentation) {
                            		router.presentationsAlpha.add(presentation);
                            	});
                            	router.speakers = new SpeakerCollectionAuthoritative();
                				router.speakers.url = "/conferences/" + router.conference.id + "/speakers";
                				router.speakers.fetch({success: function() {
	                    			router.speakerpresentations = new SpeakerPresentationCollectionAuthoritative();
	                    			router.speakerpresentations.url = "/conferences/" + router.conference.id + "/speakerpresentations";
	                    			router.speakerpresentations.fetch({success: function() {
	                    				router.start();
                            		},
                                    error: function() {
                                    	router.error();
                                    }});
                        		},
                                error: function() {
                                	router.error();
                                }});
                    		},
                    		error: function() {
                            	router.error();
                            }}); 
                		},	
                		error: function() {
                			router.error();
                        }}); 
            		}, 
            		error: function() {
                			router.error();
                	}});
    			},
    			error: function() {
    				router.error();
    			}});
        	},
        	error: function() {
        		router.error();
        	}});
        },
        error: function() {
			$.mobile.loading("hide");          					
			$('#block-ui').hide();
        	$.mobile.changePage("#error",{role:"dialog"});        	
        },        
        start: function() {
			new AboutView({el: "#about"});
        	new MenuView({el: "#menu", model: this.conference, online: true, localstorage: false, messages: this.messages});
        	new ConferenceView({el: "#conference",  model: this.conference});
        	new SpeakersView({el: "#speakers", collection: router.speakers});
        	new PresentationsView({el: "#presentations", collection: router.presentationsAlpha});
        	new MessagesView({el: "#messages", collection: router.messages});
			$.mobile.loading("hide");        	
			$('#block-ui').hide();
			router.navMenu();
        },
        navMenu: function() {
        	$.mobile.changePage("#menu",{reverse: false,changeHash: false});        	
        },
        navTracks: function() {
        	$.mobile.changePage("#conference",{reverse: false,changeHash: false});   
        },
        navSpeakers: function() {
        	$.mobile.changePage("#speakers",{reverse: false,changeHash: false});   
        },
        navPresentations: function() {
        	$.mobile.changePage("#presentations",{reverse: false,changeHash: false});   
        },
        navMessages: function() {
        	$.mobile.changePage("#messages",{reverse: false,changeHash: false});           	
        },
        navTrack: function(track) {
        	if ((typeof this.trackView) != "undefined") {
     			this.trackView.remove();
     		}
         	this.trackView = new TrackView({id: "track", model: track});
            $("body").append(this.trackView.el);
            $.mobile.changePage("#track",{reverse: true,changeHash: false});
        },
        navPresentation: function(presentation, source) {
        	if ((typeof this.presentationView) != "undefined") {
     			this.presentationView.remove();
     		}
         	this.presentationView = new PresentationView({id: "presentation", model: presentation, source: source});
            $("body").append(this.presentationView.el);
            $.mobile.changePage("#presentation",{reverse: true,changeHash: false});
        },
        navSpeaker: function(speaker) {
        	if ((typeof this.speakerView) != "undefined") {
     			this.speakerView.remove();
     		}
         	this.speakerView = new SpeakerView({id: "speaker", model: speaker});
            $("body").append(this.speakerView.el);
            $.mobile.changePage("#speaker",{reverse: true,changeHash: false});
        },
        navAbout: function() {
           	$.mobile.changePage("#about",{reverse: false,changeHash: false});           	       	
        }
    });
    return Router;
});