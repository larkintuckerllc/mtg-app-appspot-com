define(["backbone","collections/PresentationCollection","date","backbonelocalstorage"],function(Backbone,PresentationCollection,timezoneJS) {
    var Model = Backbone.Model.extend({
    	localStorage: new Backbone.LocalStorage("sessions"),
    	idAttribute: "id",
    	name: function() {
         	return this.get("name");
        },    	
    	start: function() {
    		return this.get("start");
    	},
    	end: function() {
    		return this.get("end");
    	},
    	location: function() {
         	return this.get("location");
        },
    	summary: function() {
    		var summary = this.get("summary");
         	return summary;
        },
    	trackId: function() {
         	return this.get("trackId");
        },
        track: function() {
        	return router.tracks.where({id: this.trackId()})[0];
        },
    	readableTimeRange: function() {
            function lookUpDay(i) {
            	var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
            	return days[i];
            }
    		var timezone = router.conference.timezone();
    		var dateTime = new timezoneJS.Date(this.start(), timezone);
        	var day = lookUpDay(dateTime.getDay());
        	var date = dateTime.getDate();
        	var month = dateTime.getMonth() + 1;
        	var readableStartDate = day + " " + month + "/" + date;
        	var hours = dateTime.getHours();
        	var period = "AM";
        	if (hours >= 12) {
        		period = "PM";
        	}
        	if (hours > 12) {
        		hours = hours - 12;
        	}
        	var minutes =  dateTime.getMinutes();
        	if (minutes <= 9) {
        		minutes = "0" + minutes;
        	}
        	var readableStartTime = hours + ":" + minutes + " " + period;
    		dateTime = new timezoneJS.Date(this.end(), timezone);
        	var day = lookUpDay(dateTime.getDay());
        	var date = dateTime.getDate();
        	var month = dateTime.getMonth() + 1;
        	var readableEndDate = day + " " + month + "/" + date;
        	var hours = dateTime.getHours();
        	var period = "AM";
        	if (hours >= 12) {
        		period = "PM";
        	}
        	if (hours > 12) {
        		hours = hours - 12;
        	}
        	var minutes =  dateTime.getMinutes();
        	if (minutes <= 9) {
        		minutes = "0" + minutes;
        	}
        	var readableEndTime = hours + ":" + minutes + " " + period;
        	
        	if (readableStartDate == readableEndDate) {
            	return(readableStartDate + " " + readableStartTime + " - " + readableEndTime);        		
        	} else {
            	return(readableStartDate + " " + readableStartTime + " - " + readableEndDate + " " + readableEndTime);
        	}
        },
        presentations: function() {
        	var presentations = new PresentationCollection();
        	var sessionPresentations = router.presentations.where({sessionId: this.id});
			for (var i=0; i<sessionPresentations.length; i++) {
				presentations.add(sessionPresentations[i]);
			}
			return presentations;
        }
    });
    return Model;
});