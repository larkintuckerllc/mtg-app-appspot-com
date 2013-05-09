define(["jquery"],function($) {
	var util = {
		noHTML: function(text) {
    		text = $("<pre>").text(text).html(); 
    		return text;
		},
		simpleHTML: function(text) { 
			if (text == null) {
				text = "";
			}
    		var reg = /<(br|b|i)>/g;
    		text = text.replace(reg,"mtgapp$1");
    		reg = /<\/(b|i)>/g;
    		text = text.replace(reg,"mtgappend$1");    		
    		text = $("<pre>").text(text).html(); 
    		reg = /mtgapp(br|b|i)/g;
    		text = text.replace(reg,"<$1>");
    		reg = /mtgappend(br|b|i)/g;
    		text = text.replace(reg,"<\/$1>");
    		return text;
		}
	}
    return util;
});