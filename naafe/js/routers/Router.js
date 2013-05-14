define(["backbone","jquery","views/ErrorView","views/MenuView",
        "models/ConferenceModel","models/ConferenceModelAuthoratative",
        "collections/TrackCollection","collections/TrackCollectionAuthoritative",
        "collections/SessionCollection","collections/SessionCollectionAuthoritative",
        "collections/PresentationCollection","collections/PresentationCollectionAuthoritative",
        "collections/SpeakerPresentationCollection","collections/SpeakerPresentationCollectionAuthoritative",
        "collections/SpeakerCollection","collections/SpeakerCollectionAuthoritative",
        "collections/MessageCollection","collections/MessageCollectionAuthoritative", 
        "collections/ParticipantCollection","collections/ParticipantCollectionAuthoritative",         
        "views/ConferenceView","views/TrackView","views/PresentationView",
        "views/SpeakersView","collections/PresentationCollectionAlpha",
        "views/PresentationsView","views/SpeakerView",
        "views/MessagesView","views/AboutView","views/ParticipantsView","views/ParticipantView",
        "jquerymobile"],
		function(Backbone,$,ErrorView,MenuView,
				ConferenceModel,ConferenceModelAuthoratative,
				TrackCollection,TrackCollectionAuthoratative,
				SessionCollection,SessionCollectionAuthoritative,
				PresentationCollection,PresentationCollectionAuthoritative,
				SpeakerPresentationCollection,SpeakerPresentationCollectionAuthoritative,
				SpeakerCollection,SpeakerCollectionAuthoritative,
				MessageCollection,MessageCollectionAuthoritative,	
				ParticipantCollection,ParticipantCollectionAuthoritative,
				ConferenceView,TrackView,PresentationView,
				SpeakersView,PresentationCollectionAlpha,
				PresentationsView,SpeakerView,
				MessagesView,AboutView,ParticipantsView,ParticipantView) {
		var Router = Backbone.Router.extend({
		initialize: function(options) {
			var conferenceId = options.conferenceId;
			new ErrorView({el: "#error"});
        	this.conference = new ConferenceModel({id: conferenceId});
        	var conferenceAuthoratative = new ConferenceModelAuthoratative({id: conferenceId});
    		this.tracks = new TrackCollection();
    		this.sessions = new SessionCollection();  
    		this.presentations = new PresentationCollection();
    		this.speakerpresentations = new SpeakerPresentationCollection();
    		this.speakers = new SpeakerCollection();
    		this.participants = new ParticipantCollection();
    		this.messages = new MessageCollection();
    		router = this;
    		conferenceAuthoratative.fetch({success: function() {
    			var messagesAuthoritative = new MessageCollectionAuthoritative();
    			messagesAuthoritative.url = "/tweets/" + conferenceAuthoratative.twitterUser();
    			messagesAuthoritative.fetch({success: function() {
        			router.messages.fetch({success: function() {
        				var messagesLength = router.messages.length;
        				for (var i=0; i < messagesLength; i++) {
        					var message = router.messages.pop();
        					message.destroy();     					
        				}                			
        				messagesAuthoritative.each(function(message) {
        					router.messages.create({id: message.id, user: message.user(), created: message.created(),
        						text: message.text()});
        				});
        				router.conference.fetch({success: function() {
            				if (conferenceAuthoratative.version() == router.conference.version()) {
            					router.useLocal(true);
            				} else {
            					router.updateLocal(conferenceAuthoratative);
            				}
            			},
            			error: function() {
            				router.updateLocal(conferenceAuthoratative);
            			}}); 	
        			}});
    			},
    			error: function() {
    				router.error();
    			}});
    		},
    		error: function() {
    			router.conference.fetch({success: function() {
    				if (router.conference.version() != -1) {
    					router.messages.fetch({success: function() {
    						router.useLocal(false);
    					}});
    				} else {
    					router.error();
    				}
    			},
    			error: function() {
    				router.error();
    			}});
    		}});
        },
        updateLocal: function(conferenceAuthoratative) {
			router.tracks.fetch({success: function() {
				router.sessions.fetch({success: function() {
					router.presentations.fetch({success: function() {
			        	router.speakers.fetch({success: function() {
			        		router.speakerpresentations.fetch({success: function() {
			        			router.participants.fetch({success: function() {
			        				var participantsLength = router.participants.length;
				    				for (var i=0; i < participantsLength; i++) {
				    					var participant = router.participants.pop();
				    					participant.destroy();	
				    				}
				    				var speakerpresentationsLength = router.speakerpresentations.length;
				    				for (var i=0; i < speakerpresentationsLength; i++) {
				    					var speakerpresentation = router.speakerpresentations.pop();
				    					speakerpresentation.destroy();	
				    				}				
				    				var speakersLength = router.speakers.length;
				    				for (var i=0; i < speakersLength; i++) {
				    					var speaker = router.speakers.pop();
				    					speaker.destroy();     					
				    				}
			        	        	var presentationsLength = router.presentations.length;
			        				for (var i=0; i < presentationsLength; i++) {
			        					var presentation = router.presentations.pop();
			        					presentation.destroy();     					
			        				}
		            				var sessionsLength = router.sessions.length;
		            				for (var i=0; i < sessionsLength; i++) {
		            					var session = router.sessions.pop();
		            					session.destroy();     					
		            				}
	                				var tracksLength = router.tracks.length;
	                				for (var i=0; i < tracksLength; i++) {
	                					var track = router.tracks.pop();
	                					track.destroy();
	                				}
	                	    		var tracksAuthoratative = new TrackCollectionAuthoratative();
	                	    		tracksAuthoratative.url = "/conferences/" + conferenceAuthoratative.id + "/tracks";
	                	    		tracksAuthoratative.fetch({success: function() {
	                	    			tracksAuthoratative.each(function(track) {
	                    					router.tracks.create({id: track.id, name: track.name(), summary: track.summary(), conferenceId: track.conferenceId()});        					
	                    				});
	                	    			var sessionsAuthoratative = new SessionCollectionAuthoritative();
	                            		sessionsAuthoratative.url = "/conferences/" + conferenceAuthoratative.id + "/sessions";
	                	    			sessionsAuthoratative.fetch({success: function() {
	                        				sessionsAuthoratative.each(function(session) {
	                        					router.sessions.create({id: session.id, name: session.name(), start: session.start(), end: session.end(),
	                        						summary: session.summary(), location: session.location(), trackId: session.trackId()});
	                        				});
	                                  		var presentationsAuthoratative = new PresentationCollectionAuthoritative();
	                                		presentationsAuthoratative.url = "/conferences/" + conferenceAuthoratative.id + "/presentations";
	                                		presentationsAuthoratative.fetch({success: function() {
	                                			router.presentationsAlpha = new PresentationCollectionAlpha();
	                            				presentationsAuthoratative.each(function(presentation) {
	                            					var presentationNew = router.presentations.create({id: presentation.id, name: presentation.name(), order: presentation.order(),
	                            						summary: presentation.summary(), sessionId: presentation.sessionId()});
	                            					router.presentationsAlpha.add(presentationNew);		
	                            				});
	                            				var speakersAuthoratative = new SpeakerCollectionAuthoritative();
	                                    		speakersAuthoratative.url = "/conferences/" + conferenceAuthoratative.id + "/speakers";
	                                    		speakersAuthoratative.fetch({success: function() {
	                                				speakersAuthoratative.each(function(speaker) {
	                                					router.speakers.create({id: speaker.id, first: speaker.first(), last: speaker.last()});
	                                				});
	                                				var speakerpresentationsAuthoratative = new SpeakerPresentationCollectionAuthoritative();
	                                        		speakerpresentationsAuthoratative.url = "/conferences/" + conferenceAuthoratative.id + "/speakerpresentations";
	                                        		speakerpresentationsAuthoratative.fetch({success: function() {
	                                    				speakerpresentationsAuthoratative.each(function(speakerpresentation) {
	                                    					router.speakerpresentations.create({id: speakerpresentation.id, speakerId: speakerpresentation.speakerId(),
	                                    						presentationId: speakerpresentation.presentationId(), order: speakerpresentation.order()});
	                                    				});
		                                				var participantsAuthoratative = new ParticipantCollectionAuthoritative();
		                                        		participantsAuthoratative.url = "/conferences/" + conferenceAuthoratative.id + "/participants";
		                                        		participantsAuthoratative.fetch({success: function() {
		                                    				participantsAuthoratative.each(function(participant) {
		                                    					router.participants.create({id: participant.id, first: participant.first(), 
		                                    						last: participant.last(), organization: participant.organization(), email: participant.email()});
		                                    				});
		                                    				router.conference.set("name",conferenceAuthoratative.name());
		                                    	    		router.conference.set("timezone",conferenceAuthoratative.timezone());
		                                    	    		router.conference.set("spreadsheet",conferenceAuthoratative.spreadsheet());
		                                    	    		router.conference.set("version",conferenceAuthoratative.version());    		
		                                    	    		router.conference.save();
		                                    				router.start(true);
		                                    			},
		                                    			error: function() {
		                                    				router.conference.set("version",-1);    		
		                	                	    		router.conference.save();
		                	                    			router.error();
		                                    			}});
	                                        		},
	                                        		error: function() {
	                                        			router.conference.set("version",-1);    		
	                	                	    		router.conference.save();
	                	                    			router.error();
	                                        		}});
	                                    		},
	                                    		error: function() {
	                                    			router.conference.set("version",-1);    		
	            	                	    		router.conference.save();
	            	                    			router.error();
	                                    		}});
	                                		},
	                                		error: function() {
	        	            	    			router.conference.set("version",-1);    		
	        	                	    		router.conference.save();
	        	                    			router.error();	
	                                		}});
	                        			},
	                        			error: function() {
	    	            	    			router.conference.set("version",-1);    		
	    	                	    		router.conference.save();
	    	                    			router.error();	
	                        			}});		
		            	    		},
		            	    		error: function() {
		            	    			router.conference.set("version",-1);    		
		                	    		router.conference.save();
		                    			router.error();	
		            	    		}});
			        			}});
        					}});
    					}});
					}});
				}});
			}});        		
        },
        useLocal: function(online) {
			router.tracks.fetch({success: function() {
				router.sessions.fetch({success: function() {
					router.presentations.fetch({success: function() {
			        	router.presentationsAlpha = new PresentationCollectionAlpha();
			        	router.presentations.each(function(presentation) {
			        		router.presentationsAlpha.add(presentation);
			        	});
			        	router.speakers.fetch({success: function() {
			        		router.speakerpresentations.fetch({success: function() {
			        			router.participants.fetch({success: function() {
			        				router.start(online);	
			        			}});
        					}});
    					}});
					}});
				}});
			}});        		
        },
        error: function() {
			$.mobile.loading("hide");          					
			$('#block-ui').hide();
        	$.mobile.changePage("#error",{role:"dialog"});        	
        },
        start: function(online) {
			new AboutView({el: "#about", model: this.conference});
        	new MenuView({el: "#menu", model: this.conference, online: online, localstorage: true, messages: this.messages});
        	new ConferenceView({el: "#conference",  model: this.conference});
        	new SpeakersView({el: "#speakers", collection: router.speakers});
        	new PresentationsView({el: "#presentations", collection: router.presentationsAlpha});
        	new ParticipantsView({el: "#participants", collection: router.participants});        	
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
        navParticipants: function() {
        	$.mobile.changePage("#participants",{reverse: false,changeHash: false});   
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
        navParticipant: function(participant) {
        	if ((typeof this.participantView) != "undefined") {
     			this.participantView.remove();
     		}
         	this.participantView = new ParticipantView({id: "participant", model: participant});
            $("body").append(this.participantView.el);
            $.mobile.changePage("#participant",{reverse: true,changeHash: false});
        },
        navAbout: function() {
           	$.mobile.changePage("#about",{reverse: false,changeHash: false});           	       	
        }
    });
    return Router;
});