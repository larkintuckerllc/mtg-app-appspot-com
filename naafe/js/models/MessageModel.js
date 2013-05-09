define(["backbone","backbonelocalstorage"],function(Backbone) {
    var Model = Backbone.Model.extend({
    	localStorage: new Backbone.LocalStorage("messages"),
    	idAttribute: "id",
    	user: function() {
         	return this.get("user");
        },
    	created: function() {
         	return this.get("created");
        },
    	text: function() {
         	return this.get("text");
        },
        readableTime: function() {
            function lookUpDay(i) {
            	var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
            	return days[i];
            }
    		var timezone = router.conference.timezone();
    		var dateTime = new timezoneJS.Date(this.created(), timezone);
        	var day = lookUpDay(dateTime.getDay());
        	var date = dateTime.getDate();
        	var month = dateTime.getMonth() + 1;
        	var readableDate = day + " " + month + "/" + date;
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
        	var readableTime = hours + ":" + minutes + " " + period;
        	return(readableDate + " " + readableTime);
        }
     });
    return Model;
});